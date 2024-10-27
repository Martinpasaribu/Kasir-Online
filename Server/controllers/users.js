import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from 'uuid'; 

export const getUser = async(req, res) => {

    try {
        const users = await Users.findAll({
            attributes:['uuid','name','email','phoneNumber']
        });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword, phoneNumber } = req.body;
    if (password !== confPassword) {
        return res.status(400).json({ msg: "Passwords are not the same" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
            const users = await Users.create({
        
                name: name,
                email: email,
                password: hashPassword,
                phoneNumber: phoneNumber
          
        });
        res.status(201).json(
            {
                requestId: uuidv4(), 
                data: users,
                message: "Successfully register user.",
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