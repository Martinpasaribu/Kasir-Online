import jwt from "jsonwebtoken";


import dotenv from 'dotenv';
dotenv.config();


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ message: 'Sesi Anda tidak ada' });

    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(403).json({ message: "Cookies Anda tidak ada" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Verifikasi token gagal' });
        
        req.email = decoded.email;          
        next();
    });
}
