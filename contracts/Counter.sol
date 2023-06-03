//SPDX-License-Identifier:MIT
pragma solidity ^0.8.2;

contract Counter {
    uint8 number;

    function increment() public {
        number += 1;
    }

    function decrement() public {
        number -= 1;
    }

    function getNumber() public view returns (uint8) {
        return number;
    }
}
