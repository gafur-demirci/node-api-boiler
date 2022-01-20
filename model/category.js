const axios = require('axios');

exports.fetchCategories = async () => {
    const response = await axios.get('https://api.trendyol.com/sapigw/product-categories');
    return response.data.categories;
}

exports.fetchCategoryAttr = async (categoriId) => {
    console.log(categoriId);
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoriId}/attributes`);
    // console.log(response);
    const method = response.method;
    const host = response.host;
    const result = {method,host}
    console.log(result);
    console.log('-------------------------');
    console.log(response.agent);
    // response.data
/*     const result = {
        response.status,
        response.method,
        response.host
    } */
    // console.log(result);
    return response.data;
}