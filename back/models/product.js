const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const product = await db.collection('products').find({}).toArray();
  return product;
};

const getById = async (id) => {
  const db = await connection();
  const product = db.collection('product').findOne({ _id: ObjectId(id) });
  return product;
};

const increaseValue = async (id) => {
  const db = await connection();
  db.collection('product').updateOne(
    { _id: ObjectId(id) },
    { $inc: { value: 5 } },
  );
};

module.exports = {
  getAll,
  increaseValue,
  getById,
};
