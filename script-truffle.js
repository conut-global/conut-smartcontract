// Account 0 0xC7636168C8967120fF5D383Cb5E2e7996C3765C9

nft = await NFTDigital.deployed()
simpleExchange = await SimpleExchangeNFT.deployed()
bep20 = await BEP20FixedSupply.deployed()
busd = await BEP20Token.deployed()

nft.create(accounts[1], "https://game.example/item-id-8u5h2m.json")
nft.tokenURI(1)
nft.ownerOf(1)
nft.transferFrom("0x3C6a65CA50D948B4F5F6F5C5C1Be29593c809f9e", "0xC7636168C8967120fF5D383Cb5E2e7996C3765C9", 1)


allowance = await bep20.allowance(accounts[0], accounts[0])
allowance.toNumber()

bep20.transferFrom(accounts[0], '0x7b39204675eD85a6574e5E2Ce56F0C5dcB4043E2', 10000);

bep20.transfer('0x177E42b7A1a124DaC17B61E1f9A30e3121067eF4', 100000)

balance = await bep20.balanceOf(accounts[0])
balance.toNumber()

bep20.transfer(accounts[0], 1000)

bep20.increaseAllowance(simpleExchange.address, 10000000)
busd.increaseAllowance('0xc405Bb679a5E7070585219f429f502bA8601f5F4', 1E20)
nft.approve(simpleExchange.address, 3, { from: accounts[1] })

simpleExchange.sellToken(1, { price: 5000000000, token: 0 }, { from: accounts[1] })
simpleExchange.sellToken(1, { price: 100, token: 1 }, { from: accounts[1] })
simpleExchange.sellToken(1, { price: 1000, token: 2 }, { from: accounts[1] })


price = await simpleExchange.nftSellPrices(1)
price.toNumber()

// d4f579382ad02ef6bbe138c4d3dc0203552b995aec20f58c6d0be68672b9bb68
// ea1488de8422f56ec3aac4a9a9b7d3361623cb22a8965470dace782cc84f88f9
// simpleExchange.sellToken(3, 20, { from: '0x662bB92A07692D5adA3D7F6b32D7C668C129B6c1' })

web3.eth.accounts.create();

simpleExchange.buyToken(1, { from: accounts[0] })
simpleExchange.buyToken(2, { from: accounts[0] })

simpleExchange.buyToken(1, { from: accounts[0], value: 5000000000 })

b = await simpleExchange.tokenPrices(2);

await web3.eth.getBalance(accounts[0])
await web3.eth.getBalance(accounts[1])
await web3.eth.getBalance(accounts[2])

t = await web3.eth.getTransactionReceipt('0xed4ed50e06ee420f801bf6b07b6662b8d4a96979beb433c9a66b512c5953c701')


events = await simpleExchange.getPastEvents('allEvents', { fromBlock: 8927000, toBlock: 8927195 } )



// Local chain

nft.create("0x24b41165c110c5a8d10f4b51d4837337d79860fb", "https://game.example/item-id-8u5h2m.json")
nft.approve(simpleExchange.address, 2)
simpleExchange.sellToken(2, 100, { from: accounts[0] })
simpleExchange.buyToken(2, { from: accounts[1] })

const contract = await new web3.eth.Contract(simpleExchange.abi, simpleExchange.address)

const gas = await contract.methods.buyToken(2).estimateGas({ from: accounts[0], gas: 5000000000 });

