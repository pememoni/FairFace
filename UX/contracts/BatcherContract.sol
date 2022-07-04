// SPDX-License-Identifier: MIT

pragma solidity =0.8.4;

contract BatcherContract {
    event TransactionAdded(
        uint64 batchIndex,
        bytes transaction,
        bytes32 batchHash

    );

}
