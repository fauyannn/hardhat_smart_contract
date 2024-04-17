// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// jika sifatnya read data saja tidak bayar GAS Fee
// jika sifatnya set data harus bayar GAS Fee
contract Holder{
    string public textRaw; // public bisa di panggil langsung dengan: getTextraw()
    address private owner;
    uint256 public number;

    constructor(){
        owner = msg.sender;
    }

    // external = hanya bisa di panggil dari luar class
    function setText(string calldata _text) external {
        textRaw = _text;
    }

    function inc() external{
        require(msg.sender == owner, "NOT OWNER"); // fungsi hanya bisa di panggil oleh owner
        number++;
    }

    function getOwner() public view returns(address){
        return owner;
    }
}