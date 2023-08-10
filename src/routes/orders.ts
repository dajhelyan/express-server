import { Router } from 'express'
import { addOrder, getOrders } from '../controller/order';
import { logIn, register } from '../controller/user';
const router = Router()

// http:localhost:3000/order [POST]
router.post("/order", addOrder)

// http:localhost:3000/orders [GET]
router.get("/orders", getOrders)

// Login routes

// http:localhost:3000/register [POST]
router.post("/register", register)

// http:localhost:3000/login [POST]
router.post("/login", logIn)

module.exports = router



