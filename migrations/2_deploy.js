// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");
const NFTDigital = artifacts.require("NFTDigital");
const BEP20FixedSupply = artifacts.require("BEP20FixedSupply");
const SimpleExchangeNFT = artifacts.require("SimpleExchangeNFT");

module.exports = function(deployer) {
  // deployer.deploy(ERC721PresetMinterPauserAutoId, "My NFT","NFT", "http://my-json-server.typicode.com/huangsuyu/nft/tokens");
  deployer.deploy(NFTDigital)
  .then(() => {
    return deployer.deploy(BEP20FixedSupply)
    .then(() => {
      return deployer.deploy(SimpleExchangeNFT, NFTDigital.address, '0xd6b4a89e6c2c9a615a809927b66ba23f92335186', BEP20FixedSupply.address);
    });
  })
};