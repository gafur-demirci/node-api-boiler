const axios = require('axios');

exports.fetchBrands = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/brands');
    return response.data.brands;
}