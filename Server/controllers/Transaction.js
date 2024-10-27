import Transaction from "../models/TransactionModel.js";
import Product from "../models/ProductModel.js";
import { v4 as uuidv4 } from 'uuid'; 
import { Op } from "sequelize";


export const addTransaction = async (req, res) => {
    const {  customer, product, totalPrice } = req.body;

    try {

     
            const productCodes = product.map(item => item.uuid);


            const productsInDB = await Product.findAll({
                where: {
                    uuid: {
                        [Op.in]: productCodes
                    }
                }
            });


            const existingProducts = productsInDB.map(item => ({
                productCode: item.uuid,
                availableQuantity: item.quantity 
            }));

    
            const missingProducts = product.filter(item => !existingProducts.some(existing => existing.productCode === item.uuid));

            if (missingProducts.length > 0) {
                return res.status(400).json({
                    requestId: uuidv4(),
                    data: null,
                    message: `The following products do not exist: ${missingProducts.map(p => p.productCode).join(", ")}`,
                    success: false
                });
            }

        
            for (const item of product) {
                const existingProduct = existingProducts.find(p => p.productCode === item.uuid);

                console.log("1 :",existingProducts)
                console.log("2 :", existingProduct)
                console.log("3 :",product)

                if (existingProduct && item.quantity > existingProduct.availableQuantity) {
                    return res.status(400).json({
                        requestId: uuidv4(),
                        data: null,
                        message: `Quantity for product ${item.name} available stock (${existingProduct.availableQuantity}).`,
                        success: false
                    });
                }else{
     
                    const updatedQuantity = existingProduct.availableQuantity - item.quantity;

       
                    await Product.update(
                        { quantity: updatedQuantity }, 
                        { where: { uuid: item.uuid } } 
                    );
                }
            }

            function generateInvoiceNo() {
                const timestamp = Date.now().toString(); 
                const randomNumber = Math.floor(Math.random() * 1000); 
                const invoiceNo = `INV-${timestamp}-${randomNumber}`;
                
                return invoiceNo;
              }
              
            const invoiceNo = generateInvoiceNo();

            const transaction = await Transaction.create({
        
                invoiceNo: invoiceNo,
                date: Date.now(),
                customer: customer,
                product:product,
                userId:req.userId,
                totalPrice:totalPrice,
        });
        res.status(201).json(
            {
                requestId: uuidv4(), 
                data: transaction,
                message: "Successfully Add Transaction.",
                success: true
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                requestId: uuidv4(), 
                data: null,
                message: error.message,
                success: false
            }
        );
    }
    
}

export const getTransaction = async(req, res) => {

    try {
        const transaction = await Transaction.findAll({
            attributes:['uuid','invoiceNo','date','customer','product','userId','totalPrice'],
            where : {
                userId: req.session.userId
            },
            // paranoid: false
        });
        res.status(200).json(
            {
                requestId: uuidv4(), 
                data: transaction,
                message: "Successfully Get Data transaction.",
                success: true
            }
        );
    } catch (error) {
        console.log(
            {
                requestId: uuidv4(), 
                data: null,
                message: error.message,
                success: false
            }
        );
    }
}


export const getTransactionSUM = async (req, res) => {
    try {

        const transactions = await Transaction.findAll({
            attributes: ['uuid', 'invoiceNo', 'date', 'customer', 'product', 'totalPrice', 'userId'],
            where: {
                userId: req.session.userId
            }
        });
        const product = await Product.findAll({
            attributes: ['uuid', 'name', 'quantity', 'price', 'description'],
            where: {
                userId: req.session.userId
            }
        });

        const totalTransactions = transactions.length;
        const totalProduct = product.length;

        let stock  =  product.reduce((total, item) => {
                        return total + (item.quantity || 0)  ; 
                     }  , 0)

        let empty =  product.filter(item => item.quantity === 0);

        let totalAmount = 0;
                
        transactions.forEach(transaction => {
            totalAmount += transaction.totalPrice; 
        });

        let totalProductEmpty =  empty.length;


        const summary = {
            totalTransactions: totalTransactions,
            totalProduct: totalProduct,
            totalStock:stock,
            totalProductEmptyData:empty,
            totalProductEmpty:totalProductEmpty,
            totalAmount: totalAmount,
            summaryDate: Date.now()
        };

        res.json({
            requestId: uuidv4(),
            data: [summary],
            message: "Successfully retrieved transaction summary.",
            success: true
        });

    } catch (error) {
        
        res.status(500).json({
            requestId: uuidv4(),
            data: null,
            message: error.message,
            success: false
        });
    }
};
