var express = require('express');
var router = express.Router();

const getIndex = (req, res, next) => {
  res.render('partials/index', { title: 'My website' });
};

/* GET home page. */
router.get('/', getIndex);

module.exports = router;
