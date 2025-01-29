import { _IReward } from './namespaces/reward/hashgraph.restful.staking.reward.namespace'

/**
 * @file hashgraph.restful.staking.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the staking namespace for the Hashgraph Network REST API.
 * This namespace provides comprehensive types and interfaces for managing staking operations,
 * rewards, and related functionality.
 * @category Namespaces
 * @subcategory Staking
 * @since 2.0.0
 */

/**
 * Staking Namespace
 * @namespace _IStaking
 * @description Represents the root namespace for all staking-related functionality in the Hashgraph network.
 * This namespace encapsulates:
 * - Staking reward management and distribution
 * - Reward calculation and tracking
 * - Historical reward data access
 * - Staking operation interfaces
 * @category Namespaces
 * @subcategory Staking
 * @public
 * 
 * @example
 * ```typescript
 * // Example of using the staking namespace
 * import { _IStaking } from '@hashgraph/sdk';
 * 
 * // Accessing reward interfaces
 * const rewardData: _IStaking.IReward.IEntity = {
 *   account_id: "0.0.1234",
 *   amount: 100000000,
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * 
 * // Using reward response types
 * const response: _IStaking.IReward.IResponse = {
 *   rewards: [rewardData],
 *   links: {
 *     next: "/api/v1/staking/rewards?page=2"
 *   }
 * };
 * ```
 */
export namespace _IStaking {
    /**
     * Reward Namespace
     * @description Provides comprehensive types and interfaces for managing staking rewards.
     * Includes functionality for:
     * - Reward entity management
     * - Reward distribution tracking
     * - Historical reward data
     * - Reward transfer operations
     * 
     * Key components:
     * - {@link IReward.IEntity} - Core reward entity structure
     * - {@link IReward.IResponse} - API response formats
     * - {@link IReward.ITransfer} - Reward transfer operations
     * 
     * @see {@link _IReward}
     * @public
     * @since 2.0.0
     */
    export import IReward = _IReward;
}