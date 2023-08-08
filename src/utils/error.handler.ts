import { Response } from "express";


export function errorHandler(res:Response, error: any) {
  return res.status(500)
  .send(`${error}`)
}

