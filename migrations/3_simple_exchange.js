// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
const NFTDigital = artifacts.require("NFTDigital");
const BEP20FixedSupply = artifacts.require("BEP20FixedSupply");
const SimpleExchangeNFT = artifacts.require("SimpleExchangeNFT");

module.exports = function(deployer) {
  deployer.deploy(SimpleExchangeNFT, NFTDigital.address, '0xd6b4a89e6c2c9a615a809927b66ba23f92335186', BEP20FixedSupply.address, '0x2009975970C8C8b8eD05f3CdB65571C7d1f6aCFA');
};