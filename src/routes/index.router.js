const { render } = require('../app');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/news', (req, res) => {
  res.render('news')
})

router.get('/categories/1', (req, res) => {
  res.render('category')
})


router.get('/categories/1/animals/1', (req, res) => {
  res.render('animal')
})


module.exports = router;