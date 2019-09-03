var express = require('express');
var router = express.Router();

const modelEmpresa = require('../models/empresas');
// http://localhost:3000/empresas/
router.get('/', (req, res) => {
  modelEmpresa.getAll()
      .then((rows) => {
          res.render('empresas/list', { empresas: rows });
      })
      .catch((err) => {
          res.send(err);
      })
})
/* Load Formulario empresas */
router.get('/new', (req, res) => {
  res.render('empresas/form');
})
/* Create atlete */
router.post('/create', (req, res) => {
  console.log(req.body);
  modelEmpresa.insert(req.body)
      .then((result) => {
          console.log(result);
          res.redirect('/empresas')
      })
      .catch((err) => {
          console.log(err);
      })
})
module.exports = router;