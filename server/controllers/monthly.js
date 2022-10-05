const monthly = require('../models/monthly');

const monthly_exchange = async(req,res)=>{ //Code for fetching json related to monthly based exchanges
    const {year,exchange} = req.query;
    console.log(req.query);
    let fields = 'Date'+','+exchange;

    console.log(fields);
    
    const query ={};
    if(year)
    {
        query.Year = year;
    }
    if(exchange)
    {
        fields = fields.split(',').join(' ');
    }
    const result = await monthly.find(query).select(fields).sort('Date');
    res.status(200).json({result});
}

const min_max_monthly_exchange = async(req,res)=>{ //Code for fetching min and max value from given time interval
    const {year,exchange,sort} = req.query;
    console.log(exchange);
    let fields = 'Date'+','+exchange;
    let sortList ='';
    console.log(fields);
    
    const query ={};
    if(year)
    {
        query.Year = year;
    }
    if(exchange)
    {
     
        fields = fields.split(',').join(' ');
        
    }
    if(sort)
    {
        sortList = sort.split(',').join(' ');
    }
    const result = await monthly.find(query).sort(sortList).limit(1).select(fields);
    res.status(200).json({result});
}

module.exports = {monthly_exchange,min_max_monthly_exchange};