// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories contain many products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products have one category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Many to many
Product.belongsToMany(Tag, {
  through: 'product_tag',
});

Tag.belongsToMany(Product, {
  through: 'product_tag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
