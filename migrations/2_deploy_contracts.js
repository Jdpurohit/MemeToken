const CoyoteDoge = artifacts.require("CoyoteDoge");

module.exports = function (deployer) {
  deployer.deploy(CoyoteDoge, 1000000000000);
};
