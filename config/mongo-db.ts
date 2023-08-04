import mongoose from 'mongoose'
import 'dotenv/config'

async function dbConection(): Promise<void> {
  await mongoose
  .connect(`${process.env.URI}`)
  .then(() => console.log('db conected'))
  .catch((error) => console.error(error))
} 

export default dbConection;