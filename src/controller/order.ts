import {Request, Response} from 'express'
// import { handleHttpError } from '../utils/error.handler'
import { insertOrder, getOrder } from '../services/order-service'
import { errorHandler } from '../utils/error.handler'

export async function addOrder({body}: Request, res: Response){
  const orderReq = await insertOrder(body)
  try {
    res.send(orderReq)
  } catch (e) {
    errorHandler(res, "Error creating the order.")
  }
}

export async function getOrders(_req: Request,res: Response) {
  const getData = await getOrder()
  try {
    res.send(getData)
  } catch (error) {
    errorHandler(res, "Error getting order.")
  }
}

// function updateOrder(params:type) {
  
// }

// function deleteOrder(params:type) {
  
// }


