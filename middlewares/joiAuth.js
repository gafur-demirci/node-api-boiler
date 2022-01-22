const Joi = require('joi');

exports.joiAuth = (payLoad) => {

    const validatoinSchema = Joi.object({
        email : Joi.string().email().required(),
        // password : Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).min(8).max(30).required
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
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
                message: 'User created successfully',
                data: Object.assign({id}, value)
                });
            }
    })
    const isAuth = validatoinSchema.error;
    
    console.log(`isAuth: ${isAuth.error}`);
}