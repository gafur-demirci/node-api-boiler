const jwt = require("jsonwebtoken");
const joi = require('joi');

module.exports = ((req, res, next) => {
    const { email, password } = req.body;
    const payLoad = {
        email,
        password
        //email: "gafur.gs.68@gmail.com"
    };
    const secret = "skflkfşsfşds";

    const validatoinSchema = joi.object({
        email : joi.string().email().required(),
        password : joi.string().required()
    });

    const isAuth = Joi.valid(payLoad,validatoinSchema,(err,value)=>{
        if (err) {
            res.status(422).json({
                status: 'error',
                message: 'Invalid request data',
                data: data
            });
        } else {
            res.json({
                status: 'success',
                message: 'User created successfully',
                data: Object.assign({id}, value)
                });
        }
    }
);

    // const isAuth = validatoinSchema.error;
    console.log(`isAuth: ${isAuth.error}`);
    if(!isAuth){
        res.status(401).send(
            'Kullanıcı veya Password Uygun değil'
        );
    }else{
        const token = jwt.sign(payLoad, secret, { expiresIn: "7d" });
        res.status(200).send({
            status: true,
            login : false,
            username : payLoad.userName,
            email : payLoad.email,
            token
        });
        next();
    }

});





/* exports.login = (req, res) => {
    if (!req.body.memail || !req.body.mpassword) {
        return res.status(404).send({
        message: 'Email and password can not be empty!',
        });
    } else {
        const email = req.body.memail;
        const password = crypto.createHash('md5').update(req.body.mpassword).digest("hex");
        const potentialUser = {
            where: {
                memail: email,
                mpassword: password
            },
            attributes: ['memail', 'muuid', 'cid']
        };
        Member.findOne(potentialUser)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: 'fail',
                    error: 'User not found. Authentication failed.'
                });
            }
            const token = jwt.sign({
                muuid: user.muuid,
                memail: user.memail,
                cid: user.cid
            }, 
            'secret_key',
            {
                expiresIn :"2h"
            }
            )
            return res.status(200).send({ message: 'success', token: token});

        })
        .catch((error) => res.status(400).send(error));
    }
} */