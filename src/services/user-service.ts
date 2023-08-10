// import { log } from "console";
import { IUser, User } from '../interfaces/user.interface';
import userModel from "../model/user-model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export interface IPayload {
  userId: string
}

export async function signUp(user: User) {
  const hash = await bcrypt.hash(user.password, 10)

  const newUser = new userModel({
    userName: user.userName,
    email: user.email,
    password: hash
  })

  return await userModel.create(newUser)
}

export async function signIn(user: IUser) {

  const existedUser = await getUser(user.email)
  console.log(existedUser, 'user');

  // desencryp password
  const validInfo = await bcrypt.compare(user.password, existedUser?.password)

  if(validInfo){ 
    const userToken = await generateToken(existedUser?.id)
    return userToken
  }
}

export async function getUser(email: string) {
  return await userModel.findOne({ email: email })
}

export async function generateToken(payload: any) {
  return jwt.sign(payload, process.env.TOKEN_SECRET
  )
}