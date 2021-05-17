# Contracts on Testnet:

- SimpleExchangeNFT https://testnet.bscscan.com/address/0xE406259201CB871bC14Cf152026cD6b9A05C9AcF

- NFTDigital https://testnet.bscscan.com/address/0x78cdf8145c1f1736E75AEb3d283ad91bC2449C4f

- BEP20FixSupply https://testnet.bscscan.com/address/0x6D79C350891D3CB2Ea2E65F43E5C864410a93EaA

- BUSD https://testnet.bscscan.com/address/0xd6b4a89e6c2c9a615a809927b66ba23f92335186

# How to create NFT use contract NFTDigital

Call the method create

Full API https://docs.openzeppelin.com/contracts/4.x/api/token/erc20

# The smart contract is support BUY / SELL buy currency BNB and BEP20 tokens BMP, BUSD

```
enum CirculatingToken { BNB, BMP, BUSD }

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