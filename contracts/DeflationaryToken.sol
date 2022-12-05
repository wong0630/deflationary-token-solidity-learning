// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import './ERC20Mod.sol';

contract DeflationaryToken is ERC20Mod {
    constructor() ERC20Mod('Deflat', 'DEF') {
        // only time to mint when the contract is created
        _mint(msg.sender, 10000000 * 10 ** decimals());
    }
}