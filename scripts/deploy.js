// ketika menjalankan deploy smart_contract maka secara default menggunakan Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

const hre = require("hardhat");
async function main() {
    const HolderFactory = await hre.ethers.getContractFactory('Holder');
    const hld = await HolderFactory.deploy();

    await hld.waitForDeployment();

    console.log("address_smart_contract: ", await hld.getAddress());
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})