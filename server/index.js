require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');


const notFound = require('./middleware/not-found');
const error_handler = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const exchangeRouter = require('./routes/exchange');
app.use(cors());

app.get('/',(req,res)=>{

    res.send('Hello World');

});

app.use('/api/v1/exchange',exchangeRouter);

app.use(notFound);
app.use(error_handler);


const port = process.env.port;
const start = async()=>{
    try{
        await connectDB(process.env.db_connect);
        app.listen(port,console.log(`Server listening on port 3000`));
    }
    catch(error)
    {
        console.log(error);
    }
}

start();




