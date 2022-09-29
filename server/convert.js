require('dotenv').config();

const yearly = require('./models/yearly');
const db_connect = require('./db/connect');

const start = async () => {
    try {
        await db_connect(process.env.db_connect);
        //await quarterly.deleteMany();
        var bulk = yearly.collection.initializeOrderedBulkOp();
        let counter = 0;

        await yearly.collection.find({
            "Date": { "$exists": true, "$type": 2 },
            
        }).forEach(function (doc) {
            bulk.find({ "_id": doc._id }).updateOne({
                "$set": {
                    "Date": new Date(doc.Date),
                }
            });

            counter++;
            console.log(counter);
            if (counter % 1000 == 0) {
                // Execute per 1000 operations and re-initialize every 1000 update statements
                console.log('%1000');
                bulk.execute();
                bulk = yearly.collection.initializeOrderedBulkOp();
            }
        });

        // Clean up queues
        if (counter % 1000 != 0) {
            console.log('!1000');
            bulk.execute();
        }
        console.log('Hello');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();



