const express =  require('express');
const mongoose = require('mongoose');

const app = express();

//DB connection
const url='mongodb://localhost/learning';

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

app.use(express.json());

//Link to routes
app.use('/users', require('./routes/users'))


con.on('open', () => {
    console.log('Connected to database');
});

//Port setup
const port = process.env.PORT || 4000;
app.listen(4000, () => {
    console.log(`Listening for request at port: ${port}`);
});