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

interface ArbiSwapFacetInterface extends ethers.utils.Interface {
  functions: {
    "swapForExact0Multi(address,address,address,uint256)": FunctionFragment;
    "swapForExact1Multi(address,address,address,uint256)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swapForExact0Multi",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapForExact1Multi",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapForExact0Multi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapForExact1Multi",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {
    "SwapCallback(int256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapCallback"): EventFragment;
}

export class ArbiSwapFacet extends Contract {
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

  interface: ArbiSwapFacetInterface;

  functions: {
    swapForExact0Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapForExact0Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapForExact1Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swapForExact1Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  swapForExact0Multi(
    recipient: string,
    poolInput: string,
    poolOutput: string,
    amount0Out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapForExact0Multi(address,address,address,uint256)"(
    recipient: string,
    poolInput: string,
    poolOutput: string,
    amount0Out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapForExact1Multi(
    recipient: string,
    poolInput: string,
    poolOutput: string,
    amount1Out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swapForExact1Multi(address,address,address,uint256)"(
    recipient: string,
    poolInput: string,
    poolOutput: string,
    amount1Out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "uniswapV3SwapCallback(int256,int256,bytes)"(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swapForExact0Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapForExact0Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapForExact1Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "swapForExact1Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    SwapCallback(
      amount0Delta: null,
      amount1Delta: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { amount0Delta: BigNumber; amount1Delta: BigNumber }
    >;
  };

  estimateGas: {
    swapForExact0Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapForExact0Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapForExact1Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swapForExact1Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swapForExact0Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapForExact0Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount0Out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapForExact1Multi(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swapForExact1Multi(address,address,address,uint256)"(
      recipient: string,
      poolInput: string,
      poolOutput: string,
      amount1Out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
