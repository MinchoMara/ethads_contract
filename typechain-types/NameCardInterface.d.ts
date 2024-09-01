/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface NameCardInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "getNameCard(address)": FunctionFragment;
    "upsertNameCard(address,tuple)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getNameCard", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upsertNameCard",
    values: [
      string,
      { name: string; phoneNum: string; team: BigNumberish; year: BigNumberish }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getNameCard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upsertNameCard",
    data: BytesLike
  ): Result;

  events: {
    "NameCardUpserted(address,tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NameCardUpserted"): EventFragment;
}

export class NameCardInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: NameCardInterfaceInterface;

  functions: {
    getNameCard(
      walletAddr: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [string, string, number, BigNumber] & {
          name: string;
          phoneNum: string;
          team: number;
          year: BigNumber;
        }
      ]
    >;

    upsertNameCard(
      walletAddr: string,
      nameCardInput: {
        name: string;
        phoneNum: string;
        team: BigNumberish;
        year: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getNameCard(
    walletAddr: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number, BigNumber] & {
      name: string;
      phoneNum: string;
      team: number;
      year: BigNumber;
    }
  >;

  upsertNameCard(
    walletAddr: string,
    nameCardInput: {
      name: string;
      phoneNum: string;
      team: BigNumberish;
      year: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getNameCard(
      walletAddr: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number, BigNumber] & {
        name: string;
        phoneNum: string;
        team: number;
        year: BigNumber;
      }
    >;

    upsertNameCard(
      walletAddr: string,
      nameCardInput: {
        name: string;
        phoneNum: string;
        team: BigNumberish;
        year: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    NameCardUpserted(
      walletAddr?: string | null,
      nameCardInfo?: null
    ): TypedEventFilter<
      [
        string,
        [string, string, number, BigNumber] & {
          name: string;
          phoneNum: string;
          team: number;
          year: BigNumber;
        }
      ],
      {
        walletAddr: string;
        nameCardInfo: [string, string, number, BigNumber] & {
          name: string;
          phoneNum: string;
          team: number;
          year: BigNumber;
        };
      }
    >;
  };

  estimateGas: {
    getNameCard(
      walletAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upsertNameCard(
      walletAddr: string,
      nameCardInput: {
        name: string;
        phoneNum: string;
        team: BigNumberish;
        year: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNameCard(
      walletAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upsertNameCard(
      walletAddr: string,
      nameCardInput: {
        name: string;
        phoneNum: string;
        team: BigNumberish;
        year: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
