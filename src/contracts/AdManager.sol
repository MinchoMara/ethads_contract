// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AdManager {
    // struct 광고정보
    struct adInfo {
        uint256 adId;
        address publisherAddress;
        string publisherIpfs;
        string publisherProject;
        string network;
        string location;
        uint256 x_size;
        uint256 y_size;
        uint256 mindate;
        uint256 maxdate;
        uint256 dau;
        uint256 minprice;
    }

    struct clientInfo {
        uint256 adId;
        address clientAddress;
        string clientIpfs;
        string clientProject;
        string clientDescription;
        uint256 paidETH;
    }

    struct adStatus {
        uint256 adId;
        address clientAddress;
        string clientIpfs;
        uint256 adPrice;
        uint256 startTime;
        uint256 guaranteeTime;
        uint256 expireTime;
    }
    address public owner;

    mapping(uint256 => adInfo) public ads; // adId => adInfo
    uint256 private _idCounter;

    mapping(uint256 => clientInfo[]) public clientList; // adId => clientInfo[]

    mapping(uint256 => adStatus) public adOn; // adId => adStatus

    mapping(address => bool) public isPublisher;
    mapping(address => uint256[]) public publisherId;

    event AdRegistered(
        uint256 adId,
        address publisher,
        string ipfs,
        string project,
        string network,
        string location,
        uint256 x_size,
        uint256 y_size,
        uint256 mindate,
        uint256 maxdate,
        uint256 dau,
        uint256 minprice
    );

    event ClientRegistered(
        address client,
        uint256 adId,
        string clientIpfs,
        string clientProject,
        string clientDescription,
        uint256 paidETH
    );

    event AdPurchased(
        uint256 adId,
        address clientAddress,
        string clientIpfs,
        uint256 price,
        uint256 startTime,
        uint256 guaranteeTime,
        uint256 expireTime
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Owner only");
        _;
    }

    modifier onlyPublisher() {
        require(isPublisher[msg.sender], "Publisher only");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setPublisher(address _publisher, bool _isActive) public {
        isPublisher[_publisher] = _isActive;
    }

    // 관리자가 form 정보 받아서 광고 추가 event 반환
    function registerAd(
        string memory _publisherIpfs,
        string memory _publisherProject,
        string memory _network,
        string memory _location,
        uint256 _x_size,
        uint256 _y_size,
        uint256 _mindate,
        uint256 _maxdate,
        uint256 _dau,
        uint256 _minprice
    ) public {
        uint256 newId = _idCounter;

        ads[newId] = adInfo({
            adId: newId,
            publisherAddress: msg.sender,
            publisherIpfs: _publisherIpfs,
            publisherProject: _publisherProject,
            network: _network,
            location: _location,
            x_size: _x_size,
            y_size: _y_size,
            mindate: _mindate,
            maxdate: _maxdate,
            dau: _dau,
            minprice: _minprice
        });
        setPublisher(msg.sender, true);
        publisherId[msg.sender].push(newId);

        // emit
        emit AdRegistered(
            ads[newId].adId,
            ads[newId].publisherAddress,
            ads[newId].publisherIpfs,
            ads[newId].publisherProject,
            ads[newId].network,
            ads[newId].location,
            ads[newId].x_size,
            ads[newId].y_size,
            ads[newId].mindate,
            ads[newId].maxdate,
            ads[newId].dau,
            ads[newId].minprice
        );

        _idCounter++;
    }
}
