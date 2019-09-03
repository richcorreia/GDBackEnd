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
/* Create empresa */
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
/* Update empresa */
router.get('/update/:empresaId', (req, res) => {
    modelEmpresa.getById(req.params.empresaId)
        .then((empresa) => {
            res.render('empresas/formUpdate', { empresa: empresa });
        })
        .catch((err) => {
            console.log(err);
        })
})
router.post('/edit', (req, res) => {
    modelEmpresa.update(req.body.id, req.body)
        .then((result) => {
            res.redirect(`/empresas/${req.body.id}`);
        })
        .catch((err) => {
            console.log(err);
        })
})
/* Delete empresa */
router.get('/delete/:empresaId', (req, res) => {
    modelEmpresa.deleteById(req.params.empresaId)
        .then((result) => {
            console.log(result);
            res.redirect('/empresas')
        })
        .catch((err) => {
            console.log(err);
        })
});
// http://localhost:3000/empresas/:empresaId
router.get('/:empresaId', async (req, res) => {
    let empresa = await modelEmpresa.getById(req.params.empresaId)
    res.render('empresas/show', {
        empresaId: req.params.empresaId,
        empresa: empresa
    });
})

module.exports = router;