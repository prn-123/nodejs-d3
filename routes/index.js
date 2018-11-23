var express = require('express');
var router = express.Router();
var Heros = require('../models/heros.js')
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'SuperHeroes' });
});
router.get('/saveData', function(req,res,next){
	Heros.saveNew(req.query)
	.then(function(){
		res.redirect('/getAllHeros');
	})
	.catch(console.log('ERR:Error in resolving the promise'))
	//console.log(req.query)
	//res.render('heros' ,{data: req.query})
});
router.get('/getAllHeros', function(req,res,next){
	//console.log(req.query)
	Heros.getAll()
	.then(function(retVal){
		res.render('heros' ,{data: retVal});
	})
	.catch(console.log('ERR:Fetching data from database'));
	});
router.get('/delete', function(req,res,next){
	//console.log(req.query)
	Heros.delete(req.query)
	res.redirect('/getAllHeros');
});
router.get('/viewHero', function(req,res,next){
	Heros.viewHero(req.query)
	.then(function(retVal){
	res.render('view',{data:retVal})
    })
    .catch(console.log('ERR:Fetching data from database'))
});

router.get('/update', function(req,res,next){
	Heros.getHero(req.query)
	.then(function(retVal){
	res.render('update' ,{data:retVal})
    })
    .catch(console.log('ERR:Updating data from database'))
});
router.get('/updateHero', function(req,res,next){
	Heros.update(req.query)
	.then(function(){
	res.redirect('/getAllHeros')
    })
    .catch(console.log('ERR:Updating data from database'))
});




module.exports = router;
 