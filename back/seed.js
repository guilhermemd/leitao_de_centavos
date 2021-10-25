// implementado código de inserção de produtos dummy no banco cfe
// https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp

const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  const dbo = db.db('leilaoSocket');

  const seedArray = [
    { name: 'produto teste1', value: '0' },
    { name: 'produto teste2', value: '0' },
    { name: 'produto teste3', value: '0' },
    { name: 'produto teste4', value: '0' },
  ];

  dbo.collection('products').insertMany(seedArray, (error, res) => {
    if (error) throw error;
    console.log(`inserted ${seedArray}`);
    db.close();
  });
});
