import express from "express";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";

import mysql from 'mysql2/promise';
import session from 'express-session';
// import MySQLStore from 'express-mysql-session';
import MySQLStoreModule from 'express-mysql-session';
const MySQLStore = MySQLStoreModule(session);

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cookieParser());

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



const pool = mysql.createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE ,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const sessionStore = new MySQLStore({}, pool);

sessionStore.on('error', function(error) {
    console.error('Session store error:', error);
});

app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);


app.use(session({
    key: 'session_cookie',
    secret: process.env.SESS_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    }
}));



app.use(cors({
    origin: ["https://www.postman.com", "http://localhost:3000", "https://kasir-online-client.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE",'PUT', "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(router);

app.use("/", (req, res) => {
    res.send("Server is running");
});

app.listen(process.env.PORT, () => console.log('Server berjalan pada port ' + process.env.PORT));
