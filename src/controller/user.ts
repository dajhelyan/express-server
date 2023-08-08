import {Request, Response} from 'express'
import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/error.handler'
import { generateToken, getUser, signUp } from '../services/user-service'

export async function register({body}: Request, res: Response) {
  const usersaved = await signUp(body)
  try {
    res.json({
      id: usersaved.id,
      email: usersaved.email,
      userName: usersaved.userName
    })
  } catch (error) {
    errorHandler(res, error)
  }
}

export async function signIn({body}: Request, res: Response) {
  // find a user
  const user = await getUser(body.email)
  if (!user) {
    return res.status(400).json({message: "Invalida credentials"})
  }

  const passValidation = await bcrypt.compare(user.password, body.password)
  if (!passValidation) {
    return res.status(400).json({message: "Invalida credentials"})
  }

  const token = await generateToken(user)
  console.log(token, 'token generate');
  
  // generate a token
  

  // return the token 
}

// export async function signOut(params:type) {
  
// }

