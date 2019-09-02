var express = require('express');
var router = express.Router();

const modelAtleta = require('../models/atletas');
// http://localhost:3000/atletas/
router.get('/', (req, res) => {
  modelAtleta.getAll()
      .then((rows) => {
          res.render('atletas/list', { atletas: rows });
      })
      .catch((err) => {
          res.send(err);
      })
})
/* Load Formulario Atletas */
router.get('/new', (req, res) => {
  res.render('atletas/form');
})

module.exports = router;
