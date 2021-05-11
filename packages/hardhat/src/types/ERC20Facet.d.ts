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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ERC20FacetInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseApproval(address,uint256)": FunctionFragment;
    "increaseApproval(address,uint256)": FunctionFragment;
    "initialize(uint256,string,string)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "setName(string)": FunctionFragment;
    "setSymbol(string)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseApproval",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseApproval",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "setName", values: [string]): string;
  encodeFunctionData(functionFragment: "setSymbol", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class ERC20Facet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: ERC20FacetInterface;

  functions: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(_of: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      _of: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    decreaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decreaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    increaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "increaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    initialize(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(uint256,string,string)"(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    mint(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    setName(_name: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setName(string)"(
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSymbol(
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSymbol(string)"(
      _symbol: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    _owner: string,
    _spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    _owner: string,
    _spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(_of: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    _of: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  decreaseApproval(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decreaseApproval(address,uint256)"(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  increaseApproval(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "increaseApproval(address,uint256)"(
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  initialize(
    _initialSupply: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(uint256,string,string)"(
    _initialSupply: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  mint(
    _receiver: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    _receiver: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  setName(_name: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setName(string)"(
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSymbol(
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSymbol(string)"(
    _symbol: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(_of: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      _of: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    decreaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    increaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(uint256,string,string)"(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    setName(_name: string, overrides?: CallOverrides): Promise<void>;

    "setName(string)"(_name: string, overrides?: CallOverrides): Promise<void>;

    setSymbol(_symbol: string, overrides?: CallOverrides): Promise<void>;

    "setSymbol(string)"(
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Transfer(
      from: string | null,
      to: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(_of: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      _of: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decreaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    increaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "increaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    initialize(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(uint256,string,string)"(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    mint(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    setName(_name: string, overrides?: Overrides): Promise<BigNumber>;

    "setName(string)"(_name: string, overrides?: Overrides): Promise<BigNumber>;

    setSymbol(_symbol: string, overrides?: Overrides): Promise<BigNumber>;

    "setSymbol(string)"(
      _symbol: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _of: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      _of: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decreaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    increaseApproval(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "increaseApproval(address,uint256)"(
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(uint256,string,string)"(
      _initialSupply: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    mint(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setName(
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setName(string)"(
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSymbol(
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSymbol(string)"(
      _symbol: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
