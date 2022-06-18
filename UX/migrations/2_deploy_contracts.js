const Storage = artifacts.require("CidStorage");

module.exports = function (deployer) {
    deployer.deploy(Storage);
};