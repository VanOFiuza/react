const s = require('./config/server');
require('./config/db');
const routes = require('./config/routes')(s);