module.exports = {
  networks: {
      ganache: {
          host: "127.0.0.1",
          port: 7545,
          gas: 5000000,
          network_id: "*" // Match any network id
      }
  }
};