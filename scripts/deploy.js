const hre = require("hardhat");
async function main() {
    const HolderFactory = await hre.ethers.getContractFactory('Holder');
    const hld = await HolderFactory.deploy();

    await hld.waitForDeployment();

    console.log("Hld deployed to: ", await hld.getAddress());
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
})