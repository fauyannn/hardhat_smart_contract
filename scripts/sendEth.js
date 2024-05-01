const hre = require("hardhat");

// const SEND_MONEY = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

async function main() {

    // create the provider to access arbitrum goerli testnet
    // const provider = new ethers.JsonRpcProvider('https://arbitrum-goerli.public.blastapi.io')
    const provider = new ethers.JsonRpcProvider('http://localhost:8545')
    // create wallet using private address and provider
    const wallet = new ethers.Wallet('0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider) //Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
    // the receiver
    const recipient = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8' // Account #0
    // const amountInEther = '0.002'
    const amountInEther = '1'
    // transaction data, recipient and value in wei
    const txData = {
        to: recipient,
        value: ethers.parseEther(amountInEther)// eth to wei
    }
    console.log(`Sending ${amountInEther}eth to ${recipient}`)
    // send transaction with the wallet
    const tx = await wallet.sendTransaction(txData)
    console.log(`Waiting tx... ${tx.hash}`)
    // wait transaction to confirm at least 1 block
    const finishedTx = await tx.wait()
    console.log(`Tx executed ${finishedTx.hash}`)

    return finishedTx.hash;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
