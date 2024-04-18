const express = require('express');
const app = express();
const router = express.Router()
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');
// const conn_str =
const port = process.env.PORT || 8082;
const items = require('./routes/api/sets')

app.use(cors({origin: true, credentials: true}));
app.use('/api/items', items)
app.use(express.json({extended: false }));
app.get('/', (req, res) => res.send('Hello world!'));

mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port
${port}`));
    console.log('mongodb connection established')
})

    .catch(err => {
        console.log(`error in db connection ${err}`)
    })

router.get('/home', (req, res) => {
    res.send('home router')
})

app.use('/', router);