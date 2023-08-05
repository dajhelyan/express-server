import { Response } from "express";


export function errorHandler(res:Response, error: string) {
  return res.status(500)
  .send(error)
}

