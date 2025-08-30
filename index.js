const express = require('express')
const app = express()
const PORT = 8000

const todoRoute = require('./routes/todoroute')
app.use('/api/todo',todoRoute)
app.listen(PORT, ()=>{
    console.log("server running at port 8000")
});