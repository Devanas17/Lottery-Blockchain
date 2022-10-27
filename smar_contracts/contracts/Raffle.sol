// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

error Raffle__NotEnoughETHEntered();

contract Raffle {
    uint256 private immutable i_entranceFee;
    address payable[] private s_players;

    // Events
    event RaffleEnter {address indexed palayer}

    constructor(uint256 entranceFee) {
        i_entranceFee = entranceFee;
    }

    function enterRaffle() public payable {
        if (msg.value < i_entranceFee) {
            revert Raffle__NotEnoughETHEntered();
        }
        s_players.push(payable(msg.sender));
        // Emit an event when we update a dynamic array or mapping
        // Named events with the function name reversed
        emit RaffleEnter(msg.sender)
    }

    function pickRandomWinner()external{
        // Request the random number
        // Once we get it, do something with it
        //  2 transaction process
    }

    

/* View/pure function */
    function getEntranceFee() public view returns (uint256) {
        return i_entranceFee;
    }

    function getPlayer(uint256 index) public view returns (address) {
        return s_players[index];
    }
}
