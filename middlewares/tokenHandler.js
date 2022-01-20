const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
    const token = request.headers["x-access-token"] || request.body.token || request.query.token;
    if (!token)
        response.send("Token bulunmamaktadır.");
    else {
        const secret = "skflkfşsfşds";
        jwt.verify(token, secret, (error, decoded) => {
            if (error)
                response.send("Beklenmeyen bir hatayla karşılaşıldı.");
            else {
                request.decode = decoded;
                console.log(request.decode);
                response.status(200).send({
                    status : true,
                    email : request.decode.email
                })
                next();
            }
        });
        return;
    }
};