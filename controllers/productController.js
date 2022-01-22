const brand = require('../model/brand');
const category = require('../model/category');

exports.getAllBrands = async (req,res) => {
    console.log('getAllBrands');
    const brands = await brand.fetchBrands();
    res.status(200).send({
        status: true,
        data: brands
    });
};

exports.getBrandById = async (req,res) => {
    console.log('getCategoryById');
    const catId = req.body.id;
    console.log(catId);
    const categoriyAttr = await category.fetchCategoryAttr(catId);
    res.status(200).send({
        status: true,
        data: categoriyAttr
    });
};

exports.getAllCategories = async (req,res) => {
    console.log('getAllCategories');
    const categories = await category.fetchCategories();
    res.status(200).send({
        status: true,
        data: categories
    });
};

exports.getCategoryById = async (req,res) => {
    console.log('getCategoryById');
    const catId = req.body.id;
    console.log(catId);
    const categoriyAttr = await category.fetchCategoryAttr(catId);
    res.status(200).send({
        status: true,
        data: categoriyAttr
    });
};