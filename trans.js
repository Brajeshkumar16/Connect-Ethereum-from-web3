
// const {ethers, providers} = require('ethers');
const { ethers, JsonRpcProvider } = require('ethers');

const node = 'https://neat-convincing-smoke.discover.quiknode.pro/a37d0600ea9a05978834d404ef6128288a01db35/'
const provider = new JsonRpcProvider(node)

async function main() {
    const blocknumber = await provider.getBlockNumber()
    console.log(blocknumber)
    const block = await provider.getBlock(blocknumber)
    const transinfo = await provider.getTransaction('0x114b94b8555918f053e28508a06ad016eb8cfbfd88703c015c1151d598c1dbe7')

    // console.log(block)
    console.log(block.hash)
    console.log(block.miner)
    console.log(transinfo.from)
    console.log(transinfo.to)
    console.log(transinfo.hash)
    console.log(transinfo.value)
    
    
}
main()