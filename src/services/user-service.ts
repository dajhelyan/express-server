import { User } from "../interfaces/user.interface";
import userModel from "../model/user-model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import { errorHandler } from "../utils/error.handler";

export async function signUp(user:User) {
  const hash = await bcrypt.hash(user.password, 10)
  
  const newUser = new userModel({
    userName: user.userName,
    email: user.email,
    password : hash
  })
  
  return await userModel.create(newUser)
}

export async function getUser(email:string) {
  return await userModel.findOne({ email: email})
}

export async function generateToken(payload:User) {
  return jwt.sign(
      payload    
    )
}