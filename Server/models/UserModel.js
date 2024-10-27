import { Sequelize } from "sequelize";    

import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const Users = db.define('users', {

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

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Must be a valid email address" 
            }
        },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

}, { freezeTableName: true}
)

export default Users;
