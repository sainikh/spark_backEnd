const express  = require('express');
const mongoose = require('mongoose');
const config = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const monogdb_password = process.env.MONGO_PASSWORD;
const monogdb_user_name = process.env.MONGO_USER_NAME;


app.get('/',(req,res) => {
    res.send("hellow sai!");
}); 

app.post('/submit',(req,res) =>{
    const data = req.body;
    res.send(`Received Data : ${JSON.stringify(data)}`)
})


mongoose
.connect(`mongodb+srv://${monogdb_user_name}:${monogdb_password}@cluster0.wq9tu4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() =>{
    console.log('Database connected');
    
    app.listen(port, ()  => {
        console.log(`server is running on localhost:${port}`)
    });
}).catch((error) =>{
    console.log(error);
})

