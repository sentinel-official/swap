// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

contract Token is Ownable, ERC20Burnable {
    constructor() ERC20("Token", "TOKEN") {
        _setupDecimals(8);
        _mint(msg.sender, (10**6) * (10**8));
    }
}