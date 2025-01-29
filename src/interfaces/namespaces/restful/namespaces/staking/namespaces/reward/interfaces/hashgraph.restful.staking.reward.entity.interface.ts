/**
 * @file hashgraph.restful.staking.reward.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for staking reward entities in the Hashgraph Network REST API.
 * This interface represents individual staking reward records with account, amount, and timing details.
 * @category Interfaces
 * @subcategory Staking
 * @since 2.0.0
 */

/**
 * Staking Reward Entity Interface
 * @interface _IEntity
 * @description Represents a single staking reward record in the Hashgraph network.
 * This interface captures all essential information about a staking reward, including:
 * - The recipient account identification
 * - The reward amount in tinybars
 * - The timestamp of reward issuance
 * Used for tracking and managing individual staking rewards.
 * @category Interfaces
 * @subcategory Staking
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a staking reward entity
 * const stakingReward: _IEntity = {
 *   account_id: "0.0.1234",           // Recipient account
 *   amount: 100000000,                // 1 HBAR (100,000,000 tinybars)
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * 
 * // Example of calculating reward in HBAR
 * const getHbarAmount = (reward: _IEntity): number => {
 *   return reward.amount / 100_000_000;  // Convert tinybars to HBAR
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Recipient Account ID
     * @type {string | null}
     * @description The Hedera account ID that received this staking reward.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Can be null for pending or unassigned rewards
     * - Must be a valid Hedera account ID when specified
     * - Used to track reward distribution
     * @required true
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234"
     */
    account_id: string | null;

    /**
     * Reward Amount
     * @type {number}
     * @description The amount of the staking reward in tinybars.
     * Properties:
     * - Must be a non-negative integer
     * - Represents tinybars (1 HBAR = 100,000,000 tinybars)
     * - Used for precise reward calculations
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 100000000  // 1 HBAR
     */
    amount: number;

    /**
     * Reward Timestamp
     * @type {string}
     * @description The ISO 8601 UTC timestamp when this reward was issued.
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Used for:
     * - Tracking reward distribution timing
     * - Historical record keeping
     * - Reward period calculations
     * @required true
     * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "2023-01-01T12:00:00.000Z"
     */
    timestamp: string;
}