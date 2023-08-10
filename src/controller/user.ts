import {Request, Response} from 'express'
import { errorHandler } from '../utils/error.handler'
import { signIn, signUp } from '../services/user-service'

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

export async function logIn({body}: Request, res: Response) {
  
  // generate a token
  try {
    const token = await signIn(body)
    res.json({ userToken: token })
  } catch (error) {
    errorHandler(res, error)
  }
  // return the token 
}

// export async function signOut(params:type) {
  
// }

