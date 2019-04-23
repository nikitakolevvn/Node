const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {weather: null, error: null});
});

router.get('/users', function(req, res){
	res.render('users');
});

module.exports = router;