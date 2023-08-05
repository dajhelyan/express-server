import { Router } from 'express'
import { addOrder, getOrders } from '../controller/order';
const router = Router()

// http:localhost:3000/order [POST]
router.post("/order", addOrder)

// http:localhost:3000/orders [GET]
router.get("/orders", getOrders)

// 


module.exports = router



