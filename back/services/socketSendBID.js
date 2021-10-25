module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('registerBID', async ({ id }) => {
      // increase BID;
      // GET BIDS value;
      io.emit('refreshBIDS', 'newBID value');
    });
  });
};
