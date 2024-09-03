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

    function registerClient(
        uint256 _adId,
        string memory _clientIpfs,
        string memory _clientProject,
        string memory _clientDescription
    ) public payable {
        adInfo memory ad = ads[_adId];
        require(msg.value >= ad.minprice, "Not enough ETH sent");

        uint256 excess = msg.value - ad.minprice;
        if (excess > 0) {
            payable(msg.sender).transfer(excess);
        }

        clientInfo memory newClient = clientInfo({
            adId: _adId,
            clientAddress: msg.sender,
            clientIpfs: _clientIpfs,
            clientProject: _clientProject,
            clientDescription: _clientDescription,
            paidETH: msg.value - excess
        });

        clientList[_adId].push(newClient);

        emit ClientRegistered(
            newClient.clientAddress,
            newClient.adId,
            newClient.clientIpfs,
            newClient.clientProject,
            newClient.clientDescription,
            newClient.paidETH
        );
    }

    // purchase - 3
    // 보다 높은 가격에 해당 광고 입찰
    function registerOverClient(
        uint256 _adId,
        string memory _clientIpfs,
        string memory _clientProject,
        string memory _clientDescription
    ) public payable {
        adInfo memory ad = ads[_adId];
        adStatus memory currentAd = adOn[_adId];

        uint256 currentTime = block.timestamp;

        require(currentAd.clientAddress != address(0), "Ad doesn't exist");
        // require mindate 이후
        require(currentAd.guaranteeTime <= currentTime, "Minimum guaranteed time hasn't passed");
        // require maxdate 지나지 않음
        require(currentAd.expireTime >= currentTime, "Ad already expired, call registerClient function");
        // require 현재 가격 n% 이상
        require((currentAd.adPrice * 110) / 100 <= msg.value, "Should register more value than +10%");

        // 새 AdInfo 저장
        clientInfo memory newClient = clientInfo({
            adId: _adId,
            clientAddress: msg.sender,
            clientIpfs: _clientIpfs,
            clientProject: _clientProject,
            clientDescription: _clientDescription,
            paidETH: msg.value
        });

        clientList[_adId].push(newClient);

        emit ClientRegistered(
            newClient.clientAddress,
            newClient.adId,
            newClient.clientIpfs,
            newClient.clientProject,
            newClient.clientDescription,
            newClient.paidETH
        );
    }

    // 모든 광고 정보
    function getAllAdInfo() public view returns (adInfo[] memory) {
        adInfo[] memory allAds = new adInfo[](_idCounter);

        for (uint256 i = 0; i < _idCounter; i++) {
            allAds[i] = ads[i];
        }

        return allAds;
    }

    // 특정 광고 정보
    function getAdInfo(uint256 _adId) public view returns (adInfo memory) {
        return ads[_adId];
    }

    // 특정 광고의 입찰 client 정보
    function getClientInfo(uint256 _adId) public view returns (clientInfo[] memory) {
        return clientList[_adId];
    }
}
