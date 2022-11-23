const express = require('express');
const mongoose = require('mongoose');
const app = express();
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