const express = require('express');
const response = require('../../../network/response');
const Controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
  const lista = Controller.list();
  response.success(req,res, 'Todo correcto', 200);
});

module.exports = router;