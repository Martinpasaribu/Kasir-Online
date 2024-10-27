import express from "express";

import { getUser, Register } from "../controllers/users.js";
import { Login, Logout } from "../controllers/Auth.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { addProduct, getProduct } from "../controllers/Product.js";
import { verifyID } from "../middleware/VerifyId.js";
import { addTransaction, getTransaction, getTransactionSUM } from "../controllers/Transaction.js";
import { deleteTransaction } from "../controllers/SoftDel.js";

const router = express.Router();

router.get('/users',verifyToken, getUser);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);


router.post('/product', verifyID , verifyToken, addProduct);
router.get('/product', verifyID , verifyToken, getProduct);


router.post('/transaction', verifyID , verifyToken, addTransaction);
router.get('/transaction', verifyID , verifyToken , getTransaction);
router.get('/transactionSum', verifyID , verifyToken, getTransactionSUM);
router.delete('/transaction/:id', verifyID, verifyToken,  deleteTransaction);


export default router;