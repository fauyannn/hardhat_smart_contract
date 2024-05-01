// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// jika sifatnya read data saja tidak bayar GAS Fee
// jika sifatnya set data harus bayar GAS Fee
contract Holder{
    string public textRaw; // public bisa di panggil langsung dengan: getTextraw()
    address private owner;
    uint256 public number;



    // The keyword "public" makes variables
    // accessible from other contracts
    address public minter;
    mapping(address => uint) public balances;

    // Events allow clients to react to specific
    // contract changes you declare
    event Sent(address from, address to, uint amount);

    constructor(){
        owner = msg.sender;
        minter = msg.sender;
    }


    // Sends an amount of newly created coins to an address
    // Can only be called by the contract creator
    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        balances[receiver] += amount;
    }

    // Errors allow you to provide information about
    // why an operation failed. They are returned
    // to the caller of the function.
    error InsufficientBalance(uint requested, uint available);

    // Sends an amount of existing coins
    // from any caller to an address
    function sendMoney(address receiver, uint amount) public {
        if (amount > balances[msg.sender])
            revert InsufficientBalance({
                requested: amount,
                available: balances[msg.sender]
            });

        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
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