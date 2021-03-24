// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract SentinelSwap is Ownable, Pausable {
    using SafeMath for uint256;

    IERC20 public token;
    uint256 public burnNonce;
    uint256 public totalBurnt;
    address burnAddress = 0x000000000000000000000000000000000000dEaD;

    /*
     * @dev: Event declarations.
     */
    event LogBurn(address _from, bytes _to, uint256 _amount, uint256 burnNonce);

    /*
     * @dev: Modifier declarations.
     */
    modifier hasBalance(address _sender, uint256 _amount) {
        require(
            token.balanceOf(_sender) >= _amount,
            "Insufficient token balance."
        );
        _;
    }

    /*
     * @dev: Constructor which sets the token.
     */
    constructor(IERC20 _token) {
        token = _token;
    }

    /*
     * @dev: Burns the tokens for swap.
     *
     * @param _recipient: The non-ERC20 Sentinel address.
     * @param _amount: The amount of SENT tokens need to be swapped.
     */
    function burn(bytes memory _recipient, uint256 _amount)
        public
        whenNotPaused
        hasBalance(msg.sender, _amount)
    {
        burnNonce = burnNonce.add(1);
        totalBurnt = totalBurnt.add(_amount);

        require(
            token.transferFrom(msg.sender, burnAddress, _amount),
            "Contract token allowances insufficient to complete this burn request."
        );
        emit LogBurn(msg.sender, _recipient, _amount, burnNonce);
    }

    /*
     * @dev: Pause.
     */
    function pause() public onlyOwner {
        _pause();
    }

    /*
     * @dev: Unpause.
     */
    function unpause() public onlyOwner {
        _unpause();
    }
}
