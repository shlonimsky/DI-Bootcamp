const express = require('express')
const app = express();
app.listen(process.env.PORT);

app.get('/',express.static("/public/login"))