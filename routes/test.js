const express = require('express');
const { handleBfhlRequest } = require('../controller/test');
const router = express.Router();

router.post('/bfhl', handleBfhlRequest);
module.exports = router;