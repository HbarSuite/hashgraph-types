/**
 * @file hashgraph.restful.network.stake.info.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for network staking information in the Hashgraph Network REST API.
 * This interface provides comprehensive details about network staking parameters, rewards, and periods.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Stake Information Interface
 * @interface _IInfo
 * @description Represents comprehensive staking information for the Hashgraph network.
 * This interface encapsulates all aspects of network staking, including:
 * - Staking limits and thresholds
 * - Reward rates and balances
 * - Period configurations
 * - Fee structures
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of network staking information
 * const stakingInfo: _IInfo = {
 *   max_stake_rewarded: 1000000000,
 *   max_staking_reward_rate_per_hbar: 0.0001,
 *   max_total_reward: 50000000,
 *   node_reward_fee_fraction: 0.1,
 *   reserved_staking_rewards: 1000000,
 *   reward_balance_threshold: 10000,
 *   stake_total: 5000000000,
 *   staking_period: {
 *     from: "2023-01-01T00:00:00.000Z",
 *     to: "2023-01-08T00:00:00.000Z"
 *   },
 *   staking_period_duration: 10080,  // 7 days in minutes
 *   staking_periods_stored: 52,
 *   staking_reward_fee_fraction: 0.02,
 *   staking_reward_rate: 0.00008,
 *   staking_start_threshold: 100000,
 *   unreserved_staking_reward_balance: 49000000
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Maximum Rewarded Stake
     * @type {number}
     * @description The maximum amount of HBAR that can be staked and receive rewards.
     * This value represents the network-wide cap on rewarded stake.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 1000000000
     */
    max_stake_rewarded: number;

    /**
     * Maximum Reward Rate per HBAR
     * @type {number}
     * @description The maximum reward rate that can be earned per HBAR staked.
     * Expressed as a decimal fraction (e.g., 0.0001 = 0.01%).
     * @required true
     * @minimum 0
     * @maximum 1
     * @memberof _IInfo
     * @since 2.0.0
     * @example 0.0001
     */
    max_staking_reward_rate_per_hbar: number;

    /**
     * Maximum Total Reward
     * @type {number}
     * @description The maximum total amount of HBAR that can be distributed as rewards.
     * Represents the network-wide reward pool cap.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 50000000
     */
    max_total_reward: number;

    /**
     * Node Reward Fee Fraction
     * @type {number}
     * @description The fraction of staking rewards retained by node operators.
     * Expressed as a decimal fraction (e.g., 0.1 = 10%).
     * @required true
     * @minimum 0
     * @maximum 1
     * @memberof _IInfo
     * @since 2.0.0
     * @example 0.1
     */
    node_reward_fee_fraction: number;

    /**
     * Reserved Staking Rewards
     * @type {number}
     * @description The amount of HBAR reserved for future staking rewards.
     * This balance is set aside specifically for reward distribution.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 1000000
     */
    reserved_staking_rewards: number;

    /**
     * Reward Balance Threshold
     * @type {number}
     * @description The minimum reward balance required to participate in staking.
     * Accounts must maintain this balance to be eligible for rewards.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 10000
     */
    reward_balance_threshold: number;

    /**
     * Total Network Stake
     * @type {number}
     * @description The total amount of HBAR currently staked across the network.
     * Represents the sum of all staked tokens.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 5000000000
     */
    stake_total: number;

    /**
     * Current Staking Period
     * @type {{ from: string; to: string }}
     * @description The current staking period's start and end timestamps.
     * Timestamps are in ISO 8601 UTC format.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @example {
     *   from: "2023-01-01T00:00:00.000Z",
     *   to: "2023-01-08T00:00:00.000Z"
     * }
     */
    staking_period: {
        from: string;
        to: string;
    };

    /**
     * Staking Period Duration
     * @type {number}
     * @description The duration of a staking period in minutes.
     * Defines how long each staking period lasts.
     * @required true
     * @minimum 1
     * @memberof _IInfo
     * @since 2.0.0
     * @example 10080  // 7 days in minutes
     */
    staking_period_duration: number;

    /**
     * Stored Staking Periods
     * @type {number}
     * @description The number of historical staking periods maintained in storage.
     * Used for historical analysis and reward calculations.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 52
     */
    staking_periods_stored: number;

    /**
     * Staking Reward Fee Fraction
     * @type {number}
     * @description The fraction of rewards taken as fees by the network.
     * Expressed as a decimal fraction (e.g., 0.02 = 2%).
     * @required true
     * @minimum 0
     * @maximum 1
     * @memberof _IInfo
     * @since 2.0.0
     * @example 0.02
     */
    staking_reward_fee_fraction: number;

    /**
     * Current Staking Reward Rate
     * @type {number}
     * @description The current reward rate for staked HBAR.
     * Expressed as a decimal fraction (e.g., 0.00008 = 0.008%).
     * @required true
     * @minimum 0
     * @maximum 1
     * @memberof _IInfo
     * @since 2.0.0
     * @example 0.00008
     */
    staking_reward_rate: number;

    /**
     * Staking Start Threshold
     * @type {number}
     * @description The minimum amount of HBAR required to begin staking.
     * Accounts must stake at least this amount to participate.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 100000
     */
    staking_start_threshold: number;

    /**
     * Unreserved Staking Reward Balance
     * @type {number}
     * @description The amount of HBAR available for staking rewards that isn't reserved.
     * This balance can be used for immediate reward distribution.
     * @required true
     * @minimum 0
     * @memberof _IInfo
     * @since 2.0.0
     * @example 49000000
     */
    unreserved_staking_reward_balance: number;
} 