
import jwt from 'jsonwebtoken';
import Users from "../models/UserModel.js";
import dotenv from "dotenv";

dotenv.config();


export  const refreshToken = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.status(401).json({message: " Session at cookies empty "});
        const user = await Users.findAll( {
            where : {
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.status(401).json({message: "User noAuth, Login again "});
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => 
        {
            if(err) return res.status(401).json({message: "Token No Veryfy, Login again "});
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({ userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn : '25s'
            });
            res.json({ accessToken})
                
        });

    } catch (error) {
        console.log(error)
    }
}

