
// const {ethers, providers} = require('ethers');
const { ethers, JsonRpcProvider } = require('ethers');

const node = 'https://neat-convincing-smoke.discover.quiknode.pro/a37d0600ea9a05978834d404ef6128288a01db35/'
const provider = new JsonRpcProvider(node)

async function main() {
    const blocknumber = await provider.getBlockNumber()
    console.log(blocknumber)
    const block = await provider.getBlock(blocknumber)
    // console.log(block)
    console.log(block.hash)
    console.log(block.miner)
    console.log(block.transactions.length)
    
}
main()