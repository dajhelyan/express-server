import { Request, Response } from 'express';
// const express = require('express');
import jwt from 'jsonwebtoken';
// import { decodeToken } from '../services/user-service';
// import { User } from '../interfaces/user.interface';

export async function authMiddleware(req: Request, res: Response) {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  
  const token = authHeader && authHeader?.split(" ")[1]
 console.log(token);
 
  if (!token) { return res.sendStatus(401) }
  
  const user = await jwt.verify(token, process.env.TOKEN_SECRET)
  // res.json({message: "entre"})
  console.log(user);
  
}