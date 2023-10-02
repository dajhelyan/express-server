import { Request, Response } from "express";
// import { handleHttpError } from '../utils/error.handler'
import {
  insert,
  getAll,
  getById,
  remove,
  update,
} from "../services/order-service";
import { errorHandler } from "../utils/error.handler";
// import orderModel from "../model/order-model";

export async function addOrder(req: Request, res: Response, _next: any) {
  const orderData = {
    ...req.body, 
    user: req.body.userId
  }
  
  const order = await insert(orderData);

  try {
    res.send(order);
  } catch (e) {
    errorHandler(res, "Error creating the order.");
  }
}

export async function getOrders(req: Request, res: Response) {
  const getData = await getAll(req.body.userId);

  try {
    if (req.body.userId) {
      console.log(getData, 'data');

      return res.json(getData);
    }
  } catch (error) {
    res.status(402);
    errorHandler(res, "Error getting order.");
  }
}

export async function getOrder(req: Request, res: Response) {
  const order = await getById(req.params.id);

  try {
    if (!order) return res.status(404).json;
    if (req.body.userId) {
      return res.json(order);
    }
  } catch (error) {
    res.status(404);
    errorHandler(res, "Error getting order.");
  }
}

export async function updateOrder(req: Request, _res: Response) {
  await update(req.params.id, req.body);
}

export async function deleteOrder(req: Request, res: Response) {
  const order = await remove(req.params.id);
  try {
    if (!order) return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
  }
}
