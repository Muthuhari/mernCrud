const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//import routes
const postRoutes = require('./routes/posts');
//app middleware
app.use(bodyParser.json());

app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://Muthu:Muthu123@mernapp.1omssvd.mongodb.net/Muthu?retryWrites=true&w=majority';


mongoose.connect(DB_URL,)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log('App is running on 8000');
});