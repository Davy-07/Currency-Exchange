const weekly = require('../models/weekly');

const demo = (req,res) =>{
    res.status(200).json({message:true});
}
const weekly_exchange = async(req,res)=>{
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
    const result = await weekly.find(query).select(fields).sort('Date');
    res.status(200).json({result});
}

const min_max_weekly_exchange = async(req,res)=>{
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
    const result = await weekly.find(query).sort(sortList).limit(1).select(fields);
    res.status(200).json({result});
}

module.exports = {weekly_exchange,demo,min_max_weekly_exchange};