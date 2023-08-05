import orderModel from '../model/order-model'
import { Order } from '../order.interface'

export async function insertOrder (order:Order) {
  return await orderModel.create(order)
}

export async function getOrder () {
  return await orderModel.find({})
}