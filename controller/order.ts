import {Request, Response} from 'express'
// import { handleHttpError } from '../utils/error.handler'
import { insertOrder } from '../services/order-service'

export async function addOrder({body}: Request, res: Response){
  const orderReq = await insertOrder(body)
  try {    
    res.send(orderReq)
  } catch (error) {
    res.send("Error creating the order.")
  }
}

// function updateOrder(params:type) {
  
// }

// function deleteOrder(params:type) {
  
// }

// function getOrders(params:type) {
  
// }
