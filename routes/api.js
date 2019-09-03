let express = require('express');
let router = express.Router();

let apiAtletasRouter = require('./api/atletas');
let apiEmpresasRouter = require('./api/empresas');

router.use('/atletas', apiAtletasRouter);
router.use('/empresas', apiEmpresasRouter);

module.exports = router;