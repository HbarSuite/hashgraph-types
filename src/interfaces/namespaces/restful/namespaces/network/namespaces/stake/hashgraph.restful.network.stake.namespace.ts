import { _IInfo } from './interfaces/hashgraph.restful.network.stake.info.interface';
import { _IStakingPeriod } from './interfaces/hashgraph.restful.network.stake.staking-period.interface';

/**
 * @file hashgraph.restful.network.stake.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for network staking functionality in the Hashgraph Network REST API.
 * This namespace consolidates interfaces for managing staking information and periods.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Stake Namespace
 * @namespace _IStake
 * @description Provides a comprehensive set of types for managing network staking
 * in the Hashgraph Network. This namespace includes:
 * - Network-wide staking information and parameters
 * - Staking period definitions and timestamps
 * Used to track and manage staking activities across the network.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the stake namespace
 * import { _IStake } from '@hashgraph/sdk';
 * 
 * // Access staking information
 * const stakingInfo: _IStake.IInfo = {
 *   max_stake_rewarded: 1000000000,
 *   staking_reward_rate: 0.00008
 * };
 * 
 * // Define a staking period
 * const period: _IStake.IStakingPeriod = {
 *   from: "2023-01-01T00:00:00.000Z",
 *   to: "2023-01-08T00:00:00.000Z"
 * };
 * ```
 */
export namespace _IStake {
    /**
     * Network Stake Information
     * @type {_IInfo}
     * @description Represents comprehensive network staking information including:
     * - Staking limits and thresholds
     * - Reward rates and calculations
     * - Period configurations
     * - Fee structures and balances
     * Used for managing and monitoring network-wide staking parameters.
     * @see {@link _IInfo}
     * @memberof _IStake
     * @since 2.0.0
     */
    export type IInfo = _IInfo;

    /**
     * Staking Period Configuration
     * @type {_IStakingPeriod}
     * @description Represents a defined staking period with:
     * - Start timestamp (from)
     * - End timestamp (to)
     * Used to track and manage staking reward calculations and participation periods.
     * @see {@link _IStakingPeriod}
     * @memberof _IStake
     * @since 2.0.0
     */
    export type IStakingPeriod = _IStakingPeriod;
} 
