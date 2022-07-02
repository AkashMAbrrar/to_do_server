const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

// use express.json to get data into json format
app.use(express.json());
// prot
const PORT = process.env.PORT || 5000;
// for cors
app.use(cors());

// imoport rotes
const TodoItemRoute = require('../server/routes/toDoItems');

// Mongodb database connection
mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.pttgv.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log('Database connected with mongoose'))
    .catch(err => console.log(err))

app.use('/', TodoItemRoute);





// add port and connect to server
app.listen(PORT, () => console.log('Server is working'));
