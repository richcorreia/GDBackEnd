let express = require('express');
let router = express.Router();
let empresaModel = require('../../models/empresas');

router.use((req, res, next) => {
    if (req.query.format === 'json') {
        next();
    } else {
        res.json({ mensaje: 'El formato de la peticion debe ser JSON' })
    }
})
// http://localhost:3000/api/empresas
router.get('/', (req, res) => {
    empresaModel.getAll()
        .then(rows => res.json(rows))
        .catch(err => res.json(err))
});
router.post('/', (req, res) => {
    empresaModel.insert(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

module.exports = router;