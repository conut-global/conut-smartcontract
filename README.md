# Contracts on Testnet:

- SimpleExchangeNFT https://testnet.bscscan.com/address/0xC6e6e3656BD8b37fEa95C1b48de013df89580c83

- NFTDigital https://testnet.bscscan.com/address/0xe8255E2765CbB734bA2edCa8578F55eA2AEA499A

- BEP20FixSupply https://testnet.bscscan.com/address/0xcE9e8fD5fbB9C13620AAcf050b01Cd38d0650Ff0

# How to create NFT use contract NFTDigital

Call the method create

Full API https://docs.openzeppelin.com/contracts/4.x/api/token/erc20

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