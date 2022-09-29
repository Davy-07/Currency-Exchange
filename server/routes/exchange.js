const express = require('express');
const router = express.Router();
const {weekly_exchange,demo,min_max_weekly_exchange} = require('../controllers/weekly');
const {monthly_exchange, min_max_monthly_exchange} = require('../controllers/monthly');
const {quarterly_exchange,min_max_quarterly_exchange} = require('../controllers/quarterly');
const {yearly_exchange,min_max_yearly_exchange} = require('../controllers/yearly');

router.get('/',demo);
router.get('/weekly',weekly_exchange);
router.get('/weekly/min_max',min_max_weekly_exchange);
router.get('/monthly',monthly_exchange);
router.get('/monthly/min_max',min_max_monthly_exchange);
router.get('/quarterly',quarterly_exchange);
router.get('/quarterly/min_max',min_max_quarterly_exchange);
router.get('/yearly',yearly_exchange);
router.get('/yearly/min_max',min_max_yearly_exchange);

module.exports = router;