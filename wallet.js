
// const {ethers, providers} = require('ethers');
const { ethers, JsonRpcProvider } = require('ethers');

const node = 'https://neat-convincing-smoke.discover.quiknode.pro/a37d0600ea9a05978834d404ef6128288a01db35/'
const provider = new JsonRpcProvider(node)

async function main() {
    const wallet = ethers.Wallet.createRandom()
    console.log(wallet.address)
    console.log(wallet.mnemonic.phrase)
    console.log(wallet.privateKey)
    console.log("---------------")
    // console.log(wallet._signingKey())
    // console.log(wallet._mnemonic())
}
main()