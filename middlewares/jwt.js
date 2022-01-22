const jwt = require('express-jwt');

const secretKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyMSI6IkFiZHVsZ2FmdXIgRGVtaXJjaSIsInVzZXIyIjoiRmF0bWEgQWvEsW4ifQ.WMUgz9m5xoM7o5KruunMGcSgRzikqcEkc8nkrHn-ySg";

function Jwt() {
    return jwt({secretKey, algorithms: ["HS256"]}).unless({
        path: ["/api/user/login"]
    });
};

module.exports = Jwt;

/* app.use(jwt({ secret: 'shhhhhhared-secret', algorithms: ['HS256']}).unless({path: ['/token']})); */