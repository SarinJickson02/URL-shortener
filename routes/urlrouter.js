const express = require('express');
const router = express.Router();
const { shorten,getlongurl } = require('../controller/urlcontroller');

router.post('/shorturl', shorten);
router.get('/longurl', getlongurl);


module.exports = router;