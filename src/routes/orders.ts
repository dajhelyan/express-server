import { Router } from 'express'
import { addOrder, getOrders, updateOrder, deleteOrder } from '../controller/order';
import { logIn, register, verifyToken } from '../controller/user';
import { authMiddleware } from '../utils/auth.middleware';
// const authMiddleware = require('../utils/auth.middleware')
const router = Router()

// http:localhost:3000/new-order [POST]
router.post("/new-order", authMiddleware, addOrder)

// http:localhost:3000/orders [GET]
router.get("/orders", authMiddleware, getOrders)

// http:localhost:3000/edit-order [PUT]
router.put("/edit-order/:id", authMiddleware, updateOrder)

// http:localhost:3000/remomve-order [GET]
router.get("/remove-order/:id", authMiddleware, deleteOrder)

// Login routes

// http:localhost:3000/register [POST]
router.post("/register", register)

// http:localhost:3000/login [POST]
router.post("/login", logIn)

router.post('/verify', verifyToken)

module.exports = router



