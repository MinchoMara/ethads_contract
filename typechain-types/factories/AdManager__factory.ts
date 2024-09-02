/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AdManager, AdManagerInterface } from "../AdManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "clientAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "clientIpfs",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "guaranteeTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireTime",
        type: "uint256",
      },
    ],
    name: "AdPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "publisher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfs",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "project",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "network",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "x_size",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "y_size",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mindate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxdate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dau",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minprice",
        type: "uint256",
      },
    ],
    name: "AdRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "client",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "clientIpfs",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "clientProject",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "clientDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paidETH",
        type: "uint256",
      },
    ],
    name: "ClientRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "adOn",
    outputs: [
      {
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "clientAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "clientIpfs",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "adPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "guaranteeTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expireTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ads",
    outputs: [
      {
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "publisherAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "publisherIpfs",
        type: "string",
      },
      {
        internalType: "string",
        name: "publisherProject",
        type: "string",
      },
      {
        internalType: "string",
        name: "network",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "x_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mindate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dau",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minprice",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "clientList",
    outputs: [
      {
        internalType: "uint256",
        name: "adId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "clientAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "clientIpfs",
        type: "string",
      },
      {
        internalType: "string",
        name: "clientProject",
        type: "string",
      },
      {
        internalType: "string",
        name: "clientDescription",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "paidETH",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isPublisher",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "publisherId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_publisherIpfs",
        type: "string",
      },
      {
        internalType: "string",
        name: "_publisherProject",
        type: "string",
      },
      {
        internalType: "string",
        name: "_network",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_x_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_y_size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mindate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dau",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minprice",
        type: "uint256",
      },
    ],
    name: "registerAd",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_publisher",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setPublisher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055611006806100326000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b1461012e578063af79664c14610159578063c0fb36a91461017a578063c527d6231461018d57600080fd5b806311a7a4c01461008d5780633270de27146100c157806341859ac8146100e6578063618bb07914610119575b600080fd5b6100a061009b36600461097a565b6101b3565b6040516100b89c9b9a999897969594939291906109d9565b60405180910390f35b6100d46100cf366004610a7b565b610437565b6040516100b896959493929190610a9d565b6101096100f4366004610b1d565b60056020526000908152604090205460ff1681565b60405190151581526020016100b8565b61012c610127366004610b3f565b61062f565b005b600054610141906001600160a01b031681565b6040516001600160a01b0390911681526020016100b8565b61016c610167366004610b7b565b61065a565b6040519081526020016100b8565b61012c610188366004610c48565b61068b565b6101a061019b36600461097a565b6108ad565b6040516100b89796959493929190610d2c565b60016020819052600091825260409091208054918101546002820180546001600160a01b0390921692916101e690610d7c565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610d7c565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b50505050509080600301805461027490610d7c565b80601f01602080910402602001604051908101604052809291908181526020018280546102a090610d7c565b80156102ed5780601f106102c2576101008083540402835291602001916102ed565b820191906000526020600020905b8154815290600101906020018083116102d057829003601f168201915b50505050509080600401805461030290610d7c565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610d7c565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b50505050509080600501805461039090610d7c565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc90610d7c565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b50505050509080600601549080600701549080600801549080600901549080600a01549080600b015490508c565b6003602052816000526040600020818154811061045357600080fd5b60009182526020909120600690910201805460018201546002830180549295506001600160a01b0390911693509061048a90610d7c565b80601f01602080910402602001604051908101604052809291908181526020018280546104b690610d7c565b80156105035780601f106104d857610100808354040283529160200191610503565b820191906000526020600020905b8154815290600101906020018083116104e657829003601f168201915b50505050509080600301805461051890610d7c565b80601f016020809104026020016040519081016040528092919081815260200182805461054490610d7c565b80156105915780601f1061056657610100808354040283529160200191610591565b820191906000526020600020905b81548152906001019060200180831161057457829003601f168201915b5050505050908060040180546105a690610d7c565b80601f01602080910402602001604051908101604052809291908181526020018280546105d290610d7c565b801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b5050505050908060050154905086565b6001600160a01b03919091166000908152600560205260409020805460ff1916911515919091179055565b6006602052816000526040600020818154811061067657600080fd5b90600052602060002001600091509150505481565b60006002549050604051806101800160405280828152602001336001600160a01b031681526020018c81526020018b81526020018a815260200189815260200188815260200187815260200186815260200185815260200184815260200183815250600160008381526020019081526020016000206000820151816000015560208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550604082015181600201908161074c9190610e05565b50606082015160038201906107619082610e05565b50608082015160048201906107769082610e05565b5060a0820151600582019061078b9082610e05565b5060c0820151600682015560e0820151600782015561010082015160088201556101208201516009820155610140820151600a82015561016090910151600b909101556107d933600161062f565b33600090815260066020818152604080842080546001818101835591865283862001869055858552918290529283902080549181015492810154600782015460088301546009840154600a850154600b86015498517f61b4d1c4479eb8b0ef23a3e837ab2dd649a080dfff7b02aadb9ca6ba45e327d499610883996001600160a01b0316976002810197600382019760048301976005909301969195909492939192909190610f42565b60405180910390a16002805490600061089b83610fa9565b91905055505050505050505050505050565b60046020526000908152604090208054600182015460028301805492936001600160a01b03909216926108df90610d7c565b80601f016020809104026020016040519081016040528092919081815260200182805461090b90610d7c565b80156109585780601f1061092d57610100808354040283529160200191610958565b820191906000526020600020905b81548152906001019060200180831161093b57829003601f168201915b5050505050908060030154908060040154908060050154908060060154905087565b60006020828403121561098c57600080fd5b5035919050565b6000815180845260005b818110156109b95760208185018101518683018201520161099d565b506000602082860101526020601f19601f83011685010191505092915050565b8c81526001600160a01b038c16602082015261018060408201819052600090610a048382018e610993565b90508281036060840152610a18818d610993565b90508281036080840152610a2c818c610993565b905082810360a0840152610a40818b610993565b60c0840199909952505060e0810195909552610100850193909352610120840191909152610140830152610160909101529695505050505050565b60008060408385031215610a8e57600080fd5b50508035926020909101359150565b8681526001600160a01b038616602082015260c060408201819052600090610ac790830187610993565b8281036060840152610ad98187610993565b90508281036080840152610aed8186610993565b9150508260a0830152979650505050505050565b80356001600160a01b0381168114610b1857600080fd5b919050565b600060208284031215610b2f57600080fd5b610b3882610b01565b9392505050565b60008060408385031215610b5257600080fd5b610b5b83610b01565b915060208301358015158114610b7057600080fd5b809150509250929050565b60008060408385031215610b8e57600080fd5b610b9783610b01565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610bcc57600080fd5b813567ffffffffffffffff80821115610be757610be7610ba5565b604051601f8301601f19908116603f01168101908282118183101715610c0f57610c0f610ba5565b81604052838152866020858801011115610c2857600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806000806000806000806101408b8d031215610c6857600080fd5b8a3567ffffffffffffffff80821115610c8057600080fd5b610c8c8e838f01610bbb565b9b5060208d0135915080821115610ca257600080fd5b610cae8e838f01610bbb565b9a5060408d0135915080821115610cc457600080fd5b610cd08e838f01610bbb565b995060608d0135915080821115610ce657600080fd5b50610cf38d828e01610bbb565b9a9d999c50979a60808101359960a0820135995060c0820135985060e08201359750610100820135965061012090910135945092505050565b8781526001600160a01b038716602082015260e060408201819052600090610d5690830188610993565b90508560608301528460808301528360a08301528260c083015298975050505050505050565b600181811c90821680610d9057607f821691505b602082108103610db057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610e0057600081815260208120601f850160051c81016020861015610ddd5750805b601f850160051c820191505b81811015610dfc57828155600101610de9565b5050505b505050565b815167ffffffffffffffff811115610e1f57610e1f610ba5565b610e3381610e2d8454610d7c565b84610db6565b602080601f831160018114610e685760008415610e505750858301515b600019600386901b1c1916600185901b178555610dfc565b600085815260208120601f198616915b82811015610e9757888601518255948401946001909101908401610e78565b5085821015610eb55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008154610ed281610d7c565b808552602060018381168015610eef5760018114610f0957610f37565b60ff1985168884015283151560051b880183019550610f37565b866000528260002060005b85811015610f2f5781548a8201860152908301908401610f14565b890184019650505b505050505092915050565b8c81526001600160a01b038c16602082015261018060408201819052600090610f6d8382018e610ec5565b90508281036060840152610f81818d610ec5565b90508281036080840152610f95818c610ec5565b905082810360a0840152610a40818b610ec5565b600060018201610fc957634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e57683941ee8f78a5537b5471eb99f71dbf325c1010cc909a8f5f8cae79a8d5064736f6c63430008130033";

export class AdManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AdManager> {
    return super.deploy(overrides || {}) as Promise<AdManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AdManager {
    return super.attach(address) as AdManager;
  }
  connect(signer: Signer): AdManager__factory {
    return super.connect(signer) as AdManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdManagerInterface {
    return new utils.Interface(_abi) as AdManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdManager {
    return new Contract(address, _abi, signerOrProvider) as AdManager;
  }
}
