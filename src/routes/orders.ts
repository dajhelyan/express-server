import { Router } from 'express'
import { addOrder, getOrders, updateOrder, deleteOrder } from '../controller/order';
import { logIn, register, verifyToken } from '../controller/user';
import { authMiddleware } from '../utils/auth.middleware';
// const authMiddleware = require('../utils/auth.middleware')
const router = Router()

// http:localhost:3000/order [POST]
router.post("/orders", authMiddleware, addOrder)

// http:localhost:3000/orders [GET]
router.get("/orders", authMiddleware, getOrders)

// http:localhost:3000/orders [PUT]
router.put("/orders/:id", authMiddleware, updateOrder)

// http:localhost:3000/orders [GET]
router.get("/orders/:id", authMiddleware, deleteOrder)

// Login routes

// http:localhost:3000/register [POST]
router.post("/register", register)

// http:localhost:3000/login [POST]
router.post("/login", logIn)

router.post('/verify', verifyToken)

module.exports = router



