const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');
const cards = require('./routes/api/cards')
const sets = require('./routes/api/sets');
const users = require('./routes/api/users');

app.use('/api/cards', cards)
app.use('/api/sets', sets);
app.use('/api/users', users);

app.use(cors({origin: true, credentials:true}));
app.use(express.json({ entered: false}));
app.get('/', (req, res) => res.send('Hello world!'));
app.get('/login', (req,res) => res.send("loging in"));
app.get('/beans', (req,res) => res.send('Here are some beans'));

// Connor's String: mongodb+srv://connorwbstephens:XJKlWptLZBUVf6d5@cluster0.1h2h6f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const conn_str = 'mongodb+srv://connorwbstephens:XJKlWptLZBUVf6d5@cluster0.1h2h6f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeded...');
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});



