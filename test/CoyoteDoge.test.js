const CoyoteDoge = artifacts.require("CoyoteDoge")

contract("CoyoteDoge", (accounts)=> {

    before(async()=> {
        coyoteDoge = await CoyoteDoge.deployed()
        console.log("Contract Address: ", coyoteDoge.address)
    })

    it("gives owner of the contract 1 trillion token", async()=> {
        let balance = await coyoteDoge.balanceOf(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000000000000', "balance should be 1Trillion tokens for contract creator")
    })

    it("transfer token between accounts", async()=> {
        let amount = web3.utils.toWei('1000')
        await coyoteDoge.transfer(accounts[1], amount, {from: accounts[0]})

        let balance = await coyoteDoge.balanceOf(accounts[1])
        balance = web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000', "balance should be 1000 token")
    })
})