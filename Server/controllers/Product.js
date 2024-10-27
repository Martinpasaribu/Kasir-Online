import Product from "../models/ProductModel.js";
import { v4 as uuidv4 } from 'uuid'; 



export const addProduct = async (req, res) => {
    const { name, quantity, description, price } = req.body;

    try {
            const product = await Product.create({
        
                name: name,
                quantity: quantity,
                description: description,
                price:price,
                userId:req.userId
        });
        res.status(201).json(
            {
                requestId: uuidv4(), 
                data: product,
                message: "Successfully Add Product.",
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

export const getProduct = async(req, res) => {

    try {
        const product = await Product.findAll({
            attributes:['uuid','name','quantity','price','description','userId'],
            where : {
                userId: req.session.userId
            }
        });
        res.status(200).json(
            {
                requestId: uuidv4(), 
                data: product,
                message: "Successfully Get Data Product.",
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