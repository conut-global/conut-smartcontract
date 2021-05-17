# Contracts on Testnet:

- SimpleExchangeNFT https://testnet.bscscan.com/address/0x4545B71473cc10052B216caEC6fDa2AEe12E2fAc

- NFTDigital https://testnet.bscscan.com/address/0xDFF2380e79F3F977aC13A697649787f21335a84D

- BMP https://testnet.bscscan.com/address/0x1A898AB065441505d6f0C8C3a1CE32Ec0a206514

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

event SellToken ( uint256 indexed tokenId, NftPrice indexed nftPrice );
event BuyToken ( uint256 indexed tokenId, NftPrice indexed nftPrice );

function sellToken(uint256 tokenId, NftPrice memory nftPrice)

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