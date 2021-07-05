var express = require('express');
var router = express.Router();



const getContact = (req, res, next) => {
  res.render('partials/contact', { title: 'Contacto' });
};

/* GET home page. */
router.get('/', getContact);

module.exports = router;
