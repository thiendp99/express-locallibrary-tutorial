const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
	res.send('Wiki home page');
})

router.post('/about', function (req, res) {
	res.send('About this wiki');
})

module.exports = router;