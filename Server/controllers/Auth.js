import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { jwtDecode } from 'jwt-decode';
import { v4 as uuidv4 } from 'uuid'; 



dotenv.config();


export const Login = async (req, res) => {
    try {
        console.log('Login attempt:', req.body); 

        const user = await Users.findAll({
            where: {
                email: req.body.email,
            }
        });

        if (user.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) {
            return res.status(400).json({ msg: "Wrong password" });
        }

        if (req.body.password !== req.body.confPassword) {
            return res.status(400).json({ msg: "Passwords are not the same" });
        }

        const userId = user[0].uuid;
        const name = user[0].name;
        const email = user[0].email;
        req.session.userId = userId;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await Users.update({ refresh_token: refreshToken }, {
            where: {
                uuid: userId
            },
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: auto,
            maxAge: 24 * 60 * 60 * 1000, 
        });


        const decodedRefreshToken = jwtDecode(refreshToken);
        const expiresIn = decodedRefreshToken.exp;

        console.log(decodedRefreshToken);
        
        res.json({
            requestId: uuidv4(),
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
                expiresIn: expiresIn, 
                user: user[0] 
            },
            message: "Successfully Login",
            success: true
        });

    } catch (error) {
        const errorResponseData = error.response ? error.response.status : null;

        console.error('Error during login:', error); 
        res.status(500).json({
            message: "An error occurred during login",
            error: error.message,
            error2: errorResponseData,
            stack: error.stack 
        });
    }
};

export const Logout = async (req, res) => { 
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });

    if (!user[0]) return res.sendStatus(204);

    const userId = user[0].uuid;
    await Users.update({ refresh_token: null }, {
        where: {
            uuid: userId
        }
    });

    res.clearCookie('refreshToken');

    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({
                message: "Could not log out",
                success: false
            });
        }
        // Hanya kirim respons ini
        res.status(200).json({
            message: "Anda berhasil Logout",
            data:{
                pesan: " haloo"
            },
            success: true
        });
    });
};
