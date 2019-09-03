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
/* Create atlete */
router.post('/create', (req, res) => {
  console.log(req.body);
  modelAtleta.insert(req.body)
      .then((result) => {
          console.log(result);
          res.redirect('/atletas')
      })
      .catch((err) => {
          console.log(err);
      })
})
/* Update atlete */
router.get('/update/:atletaId', (req, res) => {
    modelAtleta.getById(req.params.atletaId)
        .then((atleta) => {
            res.render('atletas/formUpdate', { atleta: atleta });
        })
        .catch((err) => {
            console.log(err);
        })
})
router.post('/edit', (req, res) => {
    modelAtleta.update(req.body.id, req.body)
        .then((result) => {
            res.redirect(`/atletas/${req.body.id}`);
        })
        .catch((err) => {
            console.log(err);
        })
})
/* Delete atlete */
router.get('/delete/:atletaId', (req, res) => {
    modelAtleta.deleteById(req.params.atletaId)
        .then((result) => {
            console.log(result);
            res.redirect('/atletas')
        })
        .catch((err) => {
            console.log(err);
        })
});
// http://localhost:3000/atletas/:atletaId
router.get('/:atletaId', async (req, res) => {
    let atleta = await modelAtleta.getById(req.params.atletaId)
    res.render('atletas/show', {
        atletaId: req.params.atletaId,
        atleta: atleta
    });
})

module.exports = router;
