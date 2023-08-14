import { Router } from 'express'
import { addOrder, getOrders } from '../controller/order';
import { logIn, register } from '../controller/user';
import { authMiddleware } from '../utils/auth.middleware';
// const authMiddleware = require('../utils/auth.middleware')
const router = Router()

// http:localhost:3000/order [POST]
router.post("/order", authMiddleware, addOrder)

// http:localhost:3000/orders [GET]
router.get("/orders", authMiddleware, getOrders)

// Login routes

// http:localhost:3000/register [POST]
router.post("/register", register)

// http:localhost:3000/login [POST]
router.post("/login", logIn)

module.exports = router



