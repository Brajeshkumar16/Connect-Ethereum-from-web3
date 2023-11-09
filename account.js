const { ethers, JsonRpcProvider } = require('ethers');

const node = 'https://neat-convincing-smoke.discover.quiknode.pro/a37d0600ea9a05978834d404ef6128288a01db35/'
const provider = new JsonRpcProvider(node)

async function main() {
    // const balance = await provider.getBalance('0x5b0f2dF9311A5c4F454d9475f80Dcf89E7ab6f8D')
    const balance = await provider.getBalance(vitalik.eth)

    console.log(balance)
}

main()
