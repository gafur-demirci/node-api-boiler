const joiAuth = require('../middlewares/joiAuth');
const jtwTokenFile = require('../middlewares/jwtToken');

exports.register = (req,res) => {
    
    jtwTokenFile.createToken()
    joiAuth.joiAuth();
    console.log('kayıt başarılı');
}
exports.login = () => {
    console.log('giriş başarılı');
}