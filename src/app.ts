import dbConection from "./config/mongo-db"
const apiRoutes = require('./routes/orders')
import bodyParser from 'body-parser'
// import cors from 'cors'
const express = require('express')
// const mongoose =require('mongoose')

const app = express()
app.use(express.json())
// app.use(cors)
const PORT = process.env.PORT

// db connection
dbConection()
app.use('/api', apiRoutes);
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
})

