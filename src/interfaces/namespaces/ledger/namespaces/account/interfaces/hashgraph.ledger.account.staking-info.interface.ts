/**
 * @file staking-info.interface.ts
 * @module IHashgraph.ILedger.IAccounts._IStakingInfo
 * @description Defines the Staking Info Interface for Hashgraph accounts, containing detailed information about account staking properties and settings
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

/**
 * Interface defining comprehensive staking configuration and status for Hashgraph accounts
 * @interface _IStakingInfo
 * @description Provides detailed information about an account's staking arrangements and rewards, including:
 * - Staking preferences and reward settings
 * - Temporal information about staking periods
 * - Reward tracking and management
 * - Staking relationships with nodes and other accounts
 * @export
 * @since 2.0.0
 * @category Interfaces
 * @subcategory Account
 * @remarks
 * This interface is crucial for managing and tracking staking activities on the Hedera network.
 * All monetary values are represented in tinybars (1 ℏ = 100,000,000 tinybars).
 * @example
 * ```typescript
 * const stakingInfo: _IStakingInfo = {
 *   // Opt out of staking rewards
 *   declineStakingReward: false,
 *   
 *   // Staking period started on Jan 1, 2024
 *   stakePeriodStart: "1704067200.000000000",
 *   
 *   // Pending rewards of 10 ℏ
 *   pendingReward: "1000000000",
 *   
 *   // Total stake received of 50 ℏ
 *   stakedToMe: "5000000000",
 *   
 *   // Staking to another account
 *   stakedAccountId: "0.0.123456",
 *   
 *   // Staking to a specific node
 *   stakedNodeId: "0.0.3"
 * };
 * ```
 */
export interface _IStakingInfo {
    /**
     * Flag to opt out of staking rewards
     * @property {boolean} declineStakingReward
     * @description Controls whether the account receives staking rewards
     * @type {boolean}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - true: Account will not receive any staking rewards
     * - false: Account is eligible for staking rewards
     * - This setting can be changed at any time
     * - Affects all future staking periods
     * @example
     * ```typescript
     * // Enable staking rewards
     * declineStakingReward: false
     * ```
     */
    declineStakingReward: boolean

    /**
     * Timestamp marking the start of the current staking period
     * @property {string} stakePeriodStart
     * @description Precise timestamp when the current staking period began
     * @type {string}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - Format: seconds.nanoseconds (UTC)
     * - Precision: 9 decimal places for nanoseconds
     * - Used for reward calculations
     * - Resets when staking configuration changes
     * @example
     * ```typescript
     * // January 1, 2024 00:00:00 UTC
     * stakePeriodStart: "1704067200.000000000"
     * ```
     */
    stakePeriodStart: string

    /**
     * Unclaimed staking rewards
     * @property {string} pendingReward
     * @description Amount of staking rewards earned but not yet claimed
     * @type {string}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - Denominated in tinybars
     * - Accumulates over time based on staking performance
     * - Must be explicitly claimed
     * - Subject to network reward rates
     * @example
     * ```typescript
     * // Pending reward of 10 ℏ
     * pendingReward: "1000000000"
     * ```
     */
    pendingReward: string

    /**
     * Total stake delegated to this account
     * @property {string} stakedToMe
     * @description Cumulative amount of HBAR staked to this account by other accounts
     * @type {string}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - Denominated in tinybars
     * - Relevant for node accounts and stake proxy accounts
     * - Affects voting power and reward distribution
     * - Updates dynamically as stake changes
     * @example
     * ```typescript
     * // 50 ℏ staked to this account
     * stakedToMe: "5000000000"
     * ```
     */
    stakedToMe: string

    /**
     * Target account for staking delegation
     * @property {string} stakedAccountId
     * @description Account identifier to which this account has delegated its stake
     * @type {string}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - Format: shard.realm.number
     * - Must be a valid account ID
     * - Can be a node account or proxy staking account
     * - Mutually exclusive with stakedNodeId
     * @example
     * ```typescript
     * // Staking to account 0.0.123456
     * stakedAccountId: "0.0.123456"
     * ```
     */
    stakedAccountId: string

    /**
     * Target node for direct staking
     * @property {string} stakedNodeId
     * @description Node identifier to which this account has delegated its stake
     * @type {string}
     * @memberof _IStakingInfo
     * @required
     * @remarks
     * - Format: shard.realm.number
     * - Must be a valid node ID
     * - Used for direct node staking
     * - Mutually exclusive with stakedAccountId
     * @example
     * ```typescript
     * // Staking to node 0.0.3
     * stakedNodeId: "0.0.3"
     * ```
     */
    stakedNodeId: string
}