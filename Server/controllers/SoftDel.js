import Transaction from "../models/TransactionModel.js";
import { v4 as uuidv4 } from 'uuid';

export const deleteTransaction = async (req, res) => {

    const {id} = req.params;

    try {
       
        const transaction = await Transaction.findOne({
            where: {
                invoiceNo: id,
                userId: req.session.userId
            }
        });

        if (!transaction) {
            return res.status(404).json({
                requestId: uuidv4(),
                data: null,
                message: "Transaction not found.",
                success: false
            });
        }

   
        await transaction.destroy();

        res.json({
            requestId: uuidv4(),
            data: transaction,
            message: "Transaction successfully deleted.",
            success: true
        });

    } catch (error) {
        res.status(400).json({
            requestId: uuidv4(),
            data: null,
            message: error.message,
            success: false
        });
    }
};
