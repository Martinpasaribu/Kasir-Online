import express from "express";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
import session from 'express-session';
import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import Product from "./models/ProductModel.js";
import Users from "./models/UserModel.js";
import Transaction from "./models/TransactionModel.js";


// try {
//     await db.authenticate();
//     console.log(" Database Connect");
//     // await Users.sync();
//     // await Product.sync();
//     await Transaction.sync();

// } catch (error) {
//    console.error(error); 
// }


const testConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

const app = express();
app.use(express.json()); 
app.use(cookieParser());

app.use(session({
    secret: process.env.SESS_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { 

        httpOnly: true, 
        secure: true,
    }
}));

dotenv.config();


app.use(cors({
    origin: ["https://www.postman.com", "http://localhost:3000", "https://kasir-online-client.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE",'PUT', "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
 }));



// app.use(cookieParser());
// app.use(express.json());
app.use(router);




app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.PORT, ()=> console.log(' Server berjalan pada port '+ process.env.PORT) )