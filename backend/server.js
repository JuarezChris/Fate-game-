require('dotenv').config();


const cors = require('cors'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

const mongoose = require('mongoose');
    
app.use(cors());
app.use(express.json());


const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongooseDB database connection esablished successfully");
})

const servantsRouter = require('./routes/servants');
const usersRouter = require('./routes/users');

app.use('/servants', servantsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});