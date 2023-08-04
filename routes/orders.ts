import { Router } from 'express'
import { addOrder } from '../controller/order';
const router = Router()

// http:localhost:3000/order [POST]
router.post("/order", addOrder)

module.exports = router



