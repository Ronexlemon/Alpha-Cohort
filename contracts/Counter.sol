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

    function multiplication(uint8 num) public {
        number = number * num;
    }

    function division(uint8 num) public {
        number = number / num;
    }

    function getNumber() public view returns (uint8) {
        return number;
    }
}
