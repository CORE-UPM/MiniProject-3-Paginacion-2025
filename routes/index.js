var express = require('express');
var router = express.Router();

const quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/quizzes');
});

// Routes for the resource /quizzes
router.get('/quizzes', quizController.index);

module.exports = router;
