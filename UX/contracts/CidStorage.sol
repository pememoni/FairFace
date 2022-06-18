pragma solidity ^0.8.0;

contract CidStorage {

    mapping(address => string[]) cids;

    function storeCid(string memory _cid) public {
        cids[msg.sender].push(_cid);
    }

    function getCids(address _account) public view returns (string[] memory) {
        return cids[_account];
    }
}
