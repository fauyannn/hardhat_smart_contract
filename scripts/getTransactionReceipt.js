const hre = require("hardhat");

async function main() {

    const transaction_hash  = '0xb203b24b005c1ec650e105bf38f9e6bf9aaa7a6a6a939c9fe37a46ab00dd3459';
    // const transaction_hash  = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
    const provider          = new ethers.JsonRpcProvider('http://localhost:8545')
    const receipt           = await provider.getTransactionReceipt(transaction_hash);
    
    console.log(receipt)
    return receipt;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
