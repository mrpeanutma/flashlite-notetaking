const express = require('express');
const config = require('dotenv').config();
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const cards = require('./routes/api/cards')
const sets = require('./routes/api/sets');
const users = require('./routes/api/users');


app.use(cors());
app.use(express.json());

app.use('/api/cards', cards)
app.use('/api/sets', sets);
app.use('/api/users', users);

app.get('/', (req, res) => res.send('Hello world!'));
app.get('/login', (req,res) => res.send("logging in"));
app.get('/beans', (req,res) => res.send('Here are some beans'));


const conn_str = process.env.DB_STR;
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...');
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});



