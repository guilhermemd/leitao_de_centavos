const model = require('../models/product');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('registerBID', async ({ id }) => {
      await model.increaseValue(id);
      const updatedProd = await model.getById();
      io.emit('refreshBIDS', updatedProd);
    });
  });
};
