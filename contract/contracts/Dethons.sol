// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Dethons {
    address payable public owner;
    uint internal id = 0;
    uint internal listId = 0;

    constructor() {
        owner = payable(msg.sender);
    }

    struct Hack {
        uint id;
        string hackName;
        string startDate;
        string regEndDate;
        string endDate;
        string description;
        uint prizeAmount;
        bool hasStarted;
        bool hasEnded;
        address hackOwner;
    }

    struct List {
        uint id;
        address[] listArr;
    }

    List[] internal partsList;
    Hack[] internal hackArr;

    mapping(address => Hack) internal addToHack;
    mapping(address => uint) internal addToPos;
    mapping(address => string) internal photoHash;
    mapping(address => List) internal partsListForOwner; //owner of hack needs to see parts add
    mapping(address => bool) internal reqIsAccepted;
    mapping(address => bool) internal isOldUser;

    function addHacks(
        string memory _name,
        string memory _start,
        string memory _regEnd,
        string memory _end,
        string memory _desc,
        uint _prize
    ) external payable {
        require(msg.value >= 0.02 ether, "Send 0.01 ETH or more ");
        if (isOldUser[msg.sender]) {
            hackArr[addToPos[msg.sender]].hasStarted = false;
            hackArr[addToPos[msg.sender]].hasEnded = true;
        }

        hackArr.push(
            Hack(
                id,
                _name,
                _start,
                _regEnd,
                _end,
                _desc,
                _prize,
                false,
                false,
                msg.sender
            )
        );

        addToHack[msg.sender] = hackArr[id];

        addToPos[msg.sender] = id;

        address[] memory init;

        partsList.push(List(listId, init));

        partsListForOwner[msg.sender] = partsList[listId];

        isOldUser[msg.sender] = true;
        id++;
        listId++;
    }

    function setDates(
        string memory _start,
        string memory _regEnd,
        string memory _end
    ) external payable {
        require(msg.value >= 0.01 ether, "Send 0.01 ETH or more ");
        hackArr[addToPos[msg.sender]].startDate = _start;
        hackArr[addToPos[msg.sender]].regEndDate = _regEnd;
        hackArr[addToPos[msg.sender]].endDate = _end;
    }

    function setDetails(string memory _name, string memory _desc)
        external
        payable
    {
        require(msg.value >= 0.01 ether, "Send 0.01 ETH or more ");
        hackArr[addToPos[msg.sender]].hackName = _name;
        hackArr[addToPos[msg.sender]].description = _desc;
    }

    function increasePrize(uint _prize) external payable {
        require(msg.value >= 0.01 ether, "Send 0.01 ETH or more ");
        hackArr[addToPos[msg.sender]].prizeAmount = _prize;
    }

    function isSellected() external view returns (bool) {
        return reqIsAccepted[msg.sender];
    }

    function applyForHack(address _addrOfHack, address _addrOfParts) external {
        partsListForOwner[_addrOfHack].listArr.push(_addrOfParts);
        reqIsAccepted[_addrOfParts] = false;
    }

    function getListOfApplicant() external view returns (address[] memory) {
        require(isOldUser[msg.sender] == true, "No hackathon on your address");
        return partsListForOwner[msg.sender].listArr;
    }

    function acceptReq(address _addrOfPart) external {
        require(
            msg.sender == addToHack[msg.sender].hackOwner,
            "You cant accept req"
        );
        reqIsAccepted[_addrOfPart] = true;
    }

    function addCoverImg(string memory _hash) external {
        require(isOldUser[msg.sender] == true, "No hackathon on your address");
        photoHash[msg.sender] = _hash;
    }

    function getCoverImg() external view returns (string memory) {
        return photoHash[msg.sender];
    }

    function startHack() external {
        require(isOldUser[msg.sender] == true, "No hackathon on your address");
        hackArr[addToPos[msg.sender]].hasStarted = true;
    }

    function endHack() external {
        require(isOldUser[msg.sender] == true, "No hackathon on your address");
        hackArr[addToPos[msg.sender]].hasStarted = false;
        hackArr[addToPos[msg.sender]].hasEnded = true;
    }

    function allHacks() external view returns (Hack[] memory) {
        return hackArr;
    }

    function withdrawFunds() external payable {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(msg.sender).transfer(address(this).balance);
    }
}
