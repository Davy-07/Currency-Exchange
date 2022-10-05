const yearly = require('../models/yearly');

const yearly_exchange = async(req,res)=>{ //Code for fetching json related to yearly based exchanges
    const {exchange} = req.query;
    let fields = 'Date'+','+exchange;
    if(exchange)
    {
        fields = fields.split(',').join(' ');
    }

    const result = await yearly.find().sort('Year').select(fields);
    res.status(200).json({result});
}

const min_max_yearly_exchange = async(req,res) =>{ //Code for fetching min and max value from given time interval
    const {exchange,sort} = req.query;
    console.log(exchange);
    let fields = 'Date'+','+exchange;
    let sortList ='';
    console.log(fields);
    if(exchange)
    {
        fields = fields.split(',').join(' ');
        
    }
    if(sort)
    {
        sortList = sort.split(',').join(' ');
    }
    const result = await yearly.find().sort(sortList).limit(1).select(fields);
    res.status(200).json({result});
}

module.exports = {yearly_exchange,min_max_yearly_exchange};