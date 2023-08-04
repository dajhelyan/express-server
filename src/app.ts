const express = require('express')
const mongoose =require('mongoose')
require("dotenv").config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT

// db connection
mongoose
.connect(process.env.URI)
.then(() => console.log('db conected'))
.catch((error) => console.error(error))

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
})

