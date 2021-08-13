const express = require('express');

const swaggerUi = require('swagger-ui-express');
const user = require('./components/user/network');
const config = require('../config');


const app = express();

app.use(express.json());

const swaggerDoc = require('./swagger.json');

// ROUTER
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/user', user);

app.listen(config.api.port, () => {
  console.log(`API listening on port ${config.api.port}`);
});