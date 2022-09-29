require('dotenv').config();

const yearly = require('./models/yearly');
const db_connect = require('./db/connect');
const yearly_json = require('./yearly_json/Exchange_Rate_Report_ya.json');


const start = async() =>{
    try{
        await db_connect(process.env.db_connect);
        //await weekly.deleteMany();
        await yearly.create(yearly_json);
        console.log('Succesfully connected to database');
        process.exit(0);
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}

start();
