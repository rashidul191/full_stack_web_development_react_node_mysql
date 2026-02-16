// get product service
module.exports.indexService = async (model) => {
  const result = await model.findAll({});
  return result;
};

module.exports.createService = async (model, data) => {
  const result = await model.create(data);
  return result;
};

//
module.exports.showService = async (model, id) => {
  const result = await model.findByPk(id);
  return result;
};

// update product service
module.exports.updateService = async (req) => {
  // first way of updateOne() method
  // const updateProduct = await Product.updateOne(
  //   { _id: req.params.id }, // kaka update korbo
  //   { $set: req.body }, // ki update korbo
  //   { runValidators: true } // update validator way
  // );
  // second way of update save() method
  // const product = await Product.findById(req.params.id);
  // const updateProduct = await product.set(req.body).save();

  // first way of updateOne() method increase product price
  const updateProduct = await Product.updateOne(
    { _id: req.params.id }, // kaka update korbo
    { $inc: req.body }, // ki update korbo
    { runValidators: true }, // update validator way
  );
  return updateProduct;
};

// bulk / multiple data update product service
module.exports.bulkUpdateService = async (data) => {
  // console.log(data.ids, data.data);
  // const result = await Product.updateMany({ _id: data.ids }, data.data, {
  //   runValidators: true,
  // });

  // other way of bulk update data
  let products = [];
  data.products.forEach((product) => {
    products.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = await Promise.all(products);
  console.log(result);
  return result;
};

// delete product service by id
module.exports.deleteService = async (productId) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

// bulk / multiple delete data
module.exports.bulkDeleteService = async (ids) => {
  // const result = await Product.deleteMany({});
  const result = await Product.deleteMany({ _id: ids });
  return result;
};

// query data , page, limit, sort
module.exports.queryDataService = async (filters, queries) => {
  const result = await Product.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.filterBy)
    .sort(queries.sortBy);

  const totalProducts = await Product.countDocuments(filters);
  const pageCount = Math.ceil(totalProducts / queries.limit);
  return { totalProducts, pageCount, result };
};
