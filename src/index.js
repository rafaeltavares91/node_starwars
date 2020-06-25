const express = require('express');

const router = require('./router');

const app = express();
app.listen(8080);
app.use(express.json())
app.use(router);