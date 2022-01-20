const express = require('express');
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const jwtTokenCreater = require('./middlewares/jwtToken');

const app = express();

// url okuma
app.use(express.json());

// Routes

// localhost:5000/token
app.use("/token", jwtTokenCreater);
// localhost:5000/
app.use('/', pageRoute);
// localhost:5000/user
app.use('/user', userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor...`);
});