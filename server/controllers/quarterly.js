const quarterly = require('../models/quarterly');

const quarterly_exchange = async(req,res)=>{
    const {year,exchange} = req.query;
    console.log(exchange);
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
    const result = await quarterly.find(query).select(fields).sort('Date');
    res.status(200).json({result});
}

const min_max_quarterly_exchange = async(req,res)=>{
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
    const result = await quarterly.find(query).sort(sortList).limit(1).select(fields);
    res.status(200).json({result});
}


module.exports = {quarterly_exchange,min_max_quarterly_exchange};