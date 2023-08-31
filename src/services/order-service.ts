import orderModel from "../model/order-model";
import { Order } from "../order.interface";

export async function insert(order: Order) {
  return await orderModel.create(order);
}

export async function getAll(userId: string) {
  return await orderModel.find({user: userId});
}

export async function getById(id: string) {
  return await orderModel.findById(id);
}

export async function update(id: string, order: Order) {
  return await orderModel.findByIdAndUpdate(id, order, {
    new: true
  });
}

export async function remove(id: string) {
  return await orderModel.findByIdAndDelete(id)
}
