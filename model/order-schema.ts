import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  lastName: { 
    type: String,
    required: true
  },
  dni:{ 
    type: Number,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  phoneNumber:{ 
    type: Number,
    required: true
  },
  province: { 
    type: String,
    required: true
  },
  district: { 
    type: String,
    required: true
  },
  reference: { 
    type: String,
    required: true
  },
  company: {
    type: String,
    enum: ['IKB', 'BBC', 'VABB', 'SKOTI'],
    required: true
  }
})

export default mongoose.model('Order', orderSchema)
