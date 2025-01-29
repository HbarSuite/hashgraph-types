import { _IEntity } from './interfaces/hashgraph.restful.staking.reward.entity.interface';
import { _IResponse } from './interfaces/hashgraph.restful.staking.reward.response.interface';
import { _ITransfer } from './interfaces/hashgraph.restful.staking.reward.transfer.interface';

/**
 * @file hashgraph.restful.staking.reward.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the reward namespace for staking operations in the Hashgraph Network REST API.
 * This namespace provides comprehensive types and interfaces for managing staking rewards,
 * including reward entities, responses, and transfer operations.
 * @category Namespaces
 * @subcategory Staking
 * @since 2.0.0
 */

/**
 * Staking Reward Namespace
 * @namespace _IReward
 * @description Represents the namespace for all staking reward functionality in the Hashgraph network.
 * This namespace provides comprehensive interfaces for:
 * - Managing reward entities and distributions
 * - Handling reward responses and pagination
 * - Processing reward transfers
 * - Tracking reward history
 * @category Namespaces
 * @subcategory Staking
 * @public
 * 
 * @example
 * ```typescript
 * // Example of using the reward namespace
 * import { _IReward } from '@hashgraph/sdk';
 * 
 * // Creating a reward entity
 * const reward: _IReward.IEntity = {
 *   account_id: "0.0.1234",
 *   amount: 100000000,  // 1 HBAR (100,000,000 tinybars)
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * 
 * // Creating a reward transfer
 * const transfer: _IReward.ITransfer = {
 *   account_id: "0.0.5678",
 *   amount: 50000000  // 0.5 HBAR
 * };
 * 
 * // Handling a reward response
 * const response: _IReward.IResponse = {
 *   rewards: [reward],
 *   links: {
 *     next: "/api/v1/staking/rewards?page=2",
 *     self: "/api/v1/staking/rewards?page=1"
 *   }
 * };
 * ```
 */
export namespace _IReward {
    /**
     * Reward Response Type
     * @type {_IResponse}
     * @description Defines the structure for staking reward API responses.
     * This type includes:
     * - Array of reward entities
     * - Pagination links for result navigation
     * - Response metadata
     * Used for retrieving reward information and history.
     * @see {@link _IResponse}
     * @memberof _IReward
     * @since 2.0.0
     */
    export type IResponse = _IResponse;

    /**
     * Reward Entity Type
     * @type {_IEntity}
     * @description Defines the structure for individual staking reward entities.
     * This type includes:
     * - Account identification
     * - Reward amount in tinybars
     * - Timestamp of reward issuance
     * - Additional reward metadata
     * Core type for representing reward information.
     * @see {@link _IEntity}
     * @memberof _IReward
     * @since 2.0.0
     */
    export type IEntity = _IEntity;

    /**
     * Reward Transfer Type
     * @type {_ITransfer}
     * @description Defines the structure for staking reward transfer operations.
     * This type includes:
     * - Target account information
     * - Transfer amount details
     * - Transfer parameters
     * Used for processing reward distributions and transfers.
     * @see {@link _ITransfer}
     * @memberof _IReward
     * @since 2.0.0
     */
    export type ITransfer = _ITransfer;
}