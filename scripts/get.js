const hre = require("hardhat");
async function main() {
    const HolderFactory = await hre.ethers.getContractFactory('Holder');
    const hld = await HolderFactory.attach('0x5fbdb2315678afecb367f032d93f642f64180aa3'); //smart contract address

    // await hld.waitForDeployment();


    const owner = await hld.getOwner(); // alamat owner
    const textRaw = await hld.textRaw(); //textRaw

    // const textRaw = await hld.setText('Kode Rapi'); //set textRaw

    console.log("address owner:", owner);
    console.log("textRaw:", textRaw);
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})