const express  = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

app.get('/',(req,res) => {
    res.send("hellow sa!");
}); 

app.post('/submit',(req,res) =>{
    const data = req.body;
    res.send(`Received Data : ${JSON.stringify(data)}`)
})



mongoose
.connect('mongodb+srv://wwwsainikhil720:zWowVLYz7EgPbp8I@cluster0.wq9tu4g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log('Database connected');
    
    app.listen(8080, ()  => {
        console.log('server is running on localhost:8080')
    });
}).catch((error) =>{
    console.log(error);
})

