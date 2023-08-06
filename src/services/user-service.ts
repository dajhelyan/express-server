import { User } from "../interfaces/user.interface";
import userModel from "../model/user-model";
import bcrypt from 'bcrypt'
// import { errorHandler } from "../utils/error.handler";

export async function signUp(user:User) {
  const hash = await bcrypt.hash(user.password, 10)
  
  const newUser = new userModel({
    userName: user.userName,
    email: user.email,
    password : hash
  })

  console.log(newUser, "user before save");
  
  return await userModel.create(newUser)
  
}