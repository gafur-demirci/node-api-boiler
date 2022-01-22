const jwt = require("jsonwebtoken");
const joiAuth = require('../middlewares/joiAuth');

exports.createToken = ((req, res, next) => {
    const { email, password } = req.body;
    const payLoad = {
        email,
        password
    };
    const secret = "skflkfşsfşds";
    const isAuth = joiAuth.joiAuth(payLoad);

    if(isAuth != null || isAuth != 'undefined'){
        res.status(401).send(
            'Email veya Password Uygun değil'
        );
    }else{
        const token = jwt.sign(payLoad, secret, { expiresIn: "7d" });
        res.status(200).json({
            status: true,
            login : false,
            username : payLoad.userName,
            email : payLoad.email,
            token
        });
        next();
    }
});

/* 
    const validatoinSchema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().required()
    });
    //const isAuth = 
    Joi.valid(payLoad,validatoinSchema,(err,value)=>{
        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {
            res.json({
                status: 'success',
                message: 'User created successfully'
                // data: Object.assign({id}, value)
                });
            }
    }) */

    // const isAuth = validatoinSchema.error;
    // console.log(`isAuth: ${isAuth.error}`);