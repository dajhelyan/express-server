import orderSchema from '../model/order-model'
import { Order } from '../order.interface'

export async function insertOrder (order:Order) {
  return await orderSchema.create(order)
}

