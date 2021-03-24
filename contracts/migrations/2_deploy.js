const Swap = artifacts.require("Swap");
const Token = artifacts.require("Token");

module.exports = async function (deployer) {
  await deployer.deploy(Token);
  deployer.deploy(Swap, Token.address);
};
