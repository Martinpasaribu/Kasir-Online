import { Sequelize } from "sequelize";    

import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Product = db.define('product', {

    uuid: {
        type: DataTypes.UUID,  
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "Name cannot be empty" 
            }
        }
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "quantity cannot be empty" 
            }
        }
    },
    
    price: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "price cannot be empty" 
            }
        }
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: {
                msg: "description cannot be empty" 
            }
        }
    },

    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    }


}, { freezeTableName: true}
)

export default Product;
