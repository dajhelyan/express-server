import mongoose from "mongoose";
import { User } from "../interfaces/user.interface";

const UserModel = new mongoose.Schema<User>({
  userName:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},{
  timestamps: true,
  versionKey: false
})


export default mongoose.model('User', UserModel)