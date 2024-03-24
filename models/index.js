// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products have one category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories contain many products
Category.hasMany(Product, {
  foreignKey: 'product_id',
});

// Many to many
Product.belongsToMany(Tag, {
  through: 'ProductTag',
});

Tag.belongsToMany(Product, {
  through: 'ProductTag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
