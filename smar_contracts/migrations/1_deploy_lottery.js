var LotteryContract = artifacts.require("Lottery");

module.exports = function(deployer) {
  deployer.deploy(LotteryContract);
};