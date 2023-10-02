import {Request, Response} from 'express'
import { errorHandler } from '../utils/error.handler'
import {  getUser, signIn, signUp } from '../services/user-service'

export async function register({body}: Request, res: Response) {
  const existedEmail = await getUser(body.email)
  console.log(existedEmail, 'existed email?');
  
  let user: any;
  if (!existedEmail) {
    user = await signUp(body)  
  }

  try {    
    return res.json({
      id: user.id,
      email: user.email,
      userName: user.userName
    })
  } catch (error) {    
    return res.status(404).json({
      message: 'Something went wrong creating user.'
    })
  }
}

export async function logIn({body}: Request, res: Response) {
  
  // generate a token
  // handle error response [to-d]
  try {
    const token = await signIn(body)

    res.json({ userToken: token })
  } catch (error) {
    console.log(error);
    
    errorHandler(res, error)
  }
  // return the token 
}

export async function verifyToken(req:Request,_res:Response) {
  const validToken = req.body;
  return validToken;
}
