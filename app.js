const express = require('express');
const Jwt = require('./middlewares/jwt');
const api = require('./routes/api');

const app = express();

// url okuma
app.use(express.json());

// Routes

app.use(Jwt());
// localhost:5000/api
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});