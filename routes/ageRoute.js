const express = require('express');
const router = express.Router();

const ageController = require('../controller/ageController')
const limitRequests = require('../utils/limiter')


router.get('/howold', limitRequests, ageController.getAge )


module.exports = router;