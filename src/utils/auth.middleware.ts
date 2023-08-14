import { decodeToken } from '../services/user-service';

export async function authMiddleware (req ,res, next) {
  try {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    
    const token = authHeader && authHeader?.split(" ")[1]

    const validToken: any = await decodeToken(token)
    
    if (!token || !validToken) { return res.sendStatus(401) }
    req.body.userId = validToken.payload;
    next();
  } catch (error) {
    res.sendStatus(401)
    next();
  }
  
}