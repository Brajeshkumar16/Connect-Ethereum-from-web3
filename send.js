
// private key
// 82f01a2ba76ae4f69f11a16a6e6ae8703052d8d3d4bcebff185a9b0b051be992
//address for account 1
// 0x3cF27F2e72AB09a8e883B0774DE126c91a848d32

//address for account 2
// 0x65d325562C98A63C9c75DF9dc367a60DD21fc700
//private key
// 2d83333450e6d7abd76625d489b457d4388ac5c92ecfd89e64b6b146962e8a3c


// const {ethers, providers} = require('ethers');

const { ethers, JsonRpcProvider,utils } = require('ethers');

const node = 'https://blissful-twilight-sunset.ethereum-goerli.discover.quiknode.pro/38b943f6366511d8905a8a3c5505becbd660d0a7/'
const provider = new JsonRpcProvider(node)

const private = '82f01a2ba76ae4f69f11a16a6e6ae8703052d8d3d4bcebff185a9b0b051be992'
const reciver = '0x65d325562C98A63C9c75DF9dc367a60DD21fc700'

const wallet = new ethers.Wallet(private, provider)

const amountTosend = '5505721353263459n'

const tx ={
    to: reciver,
    value: amountTosend
}

async function main() {
    // const balance = await provider.getBalance('0x3cF27F2e72AB09a8e883B0774DE126c91a848d32')
    // const balances = await provider.getBalance('0x3cF27F2e72AB09a8e883B0774DE126c91a848d32')
    // // console.log(wallet)
    // console.log(balance)
    // console.log(balances)

    wallet.sendTransaction(tx)
    .then((txObj)=>{
        console.log('txHash', txObj.hash)
    })

}
main()