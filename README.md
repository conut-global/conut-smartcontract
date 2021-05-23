# Contracts on Testnet:

- SimpleExchangeNFT https://testnet.bscscan.com/address/0xd87c4Fe446717224d317eC02FEaf5955Dd6980e4

- NFTDigital https://testnet.bscscan.com/address/0xa042E690a4D68bd9D291d26231421392A6CB9F11

- BMP https://testnet.bscscan.com/address/0x30fD2A74f4EB4DA1419fA7FBEad5c14A1FA0FeF3

- BUSD https://testnet.bscscan.com/address/0xd6b4a89e6c2c9a615a809927b66ba23f92335186

# How to create NFT use contract NFTDigital

Call the method create

Full API https://docs.openzeppelin.com/contracts/4.x/api/token/erc20

# The smart contract is support BUY / SELL buy currency BNB and BEP20 tokens BMP, BUSD

```
enum CirculatingToken { BNB, BMP, BUSD } // Values: 0, 1, 2

struct NftPrice {
    uint256 price;
    CirculatingToken token;
}

event SellToken ( uint256 indexed tokenId, uint256 indexed price, CirculatingToken indexed token );
event BuyToken ( uint256 indexed tokenId, uint256 indexed price, CirculatingToken indexed token );

function sellToken(uint256 tokenId, NftPrice memory nftPrice);
function buyToken(uint256 tokenId);

EX:

sellToken(1, { price: 10, token: 0 })

```

# How to sell NFT use contract SimpleExchange

1/ Call method approve of contract NFTDigital to contract SimpleExchange can
transfer the NFT

2/ Call method increaseAllowance of contract BEP20FixSupply to allowance
contract SimpleExchange can transfer BEP20 token BMP

3/ Call method sellToken of contract SimpleExchange to sell NFT with price by
BMP token

# How to buy NFT use contract SimpleExchange

Call method buyToken of contract SimpleExchange

# How to add BSC testnet to metamask

https://docs.google.com/document/d/1jB1sF7ZYYVzDube0rgiEFNbgYme8Vi0ikFZZmAudlwY/edit?usp=sharing

# Demo on BSC Testnet

https://docs.google.com/document/d/1xpuaUjq3TbkYyxNV0PKldQGFFQPnFAcmDH703zqTIlo/edit?usp=sharing