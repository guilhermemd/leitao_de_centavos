use('mongo-teste');

db.socketProd.insertOne({
  name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin',
});
