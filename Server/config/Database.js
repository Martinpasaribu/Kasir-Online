import { Sequelize } from "sequelize";

import dotenv from 'dotenv';
dotenv.config();

// const db = new Sequelize('auth_db', 'root', '', {
//     host: "localhost",
//     dialect:"mysql"
// });


// const db = new Sequelize('sql12741115', 'sql12741115', 'pdFKEIVqg2', {
//     host: 'sql12.freemysqlhosting.net',
//     dialect: 'mysql',
//     dialectOptions: {
//         connectTimeout: 60000 // 60 detik
//     },
//     logging: false // Opsional, untuk menonaktifkan logging
// });


console.log('Database:', process.env.DB_DATABASE);
console.log('Username:', process.env.DB_USERNAME);
console.log('Password:', process.env.DB_PASSWORD);
console.log('Host:', process.env.DB_HOST);

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 60000 // 60 detik
    },
    logging: false // Opsional, untuk menonaktifkan logging
});



export default db;