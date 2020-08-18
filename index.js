const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended : false }))


connectDB()

app.listen(PORT, () => { console.log(`Server runnig at ${PORT} ⚡`) })