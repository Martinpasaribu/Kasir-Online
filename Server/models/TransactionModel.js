import { Sequelize } from "sequelize";    

import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Transaction = db.define('transaction', {

    uuid: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
    },

    invoiceNo: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "invoiceNo cannot be empty" 
            }
        }
    },

    date: {
        type: DataTypes.DATE,
        allowNull: true
    },

    customer: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "customer cannot be empty" 
            }
        }
    },

    product: {
        type: DataTypes.JSON, // Store as JSON
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Product cannot be empty"
            }
        }
    },

    totalPrice:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    }


}, { 
    freezeTableName: true,
    paranoid: true
}
)

export default Transaction;
