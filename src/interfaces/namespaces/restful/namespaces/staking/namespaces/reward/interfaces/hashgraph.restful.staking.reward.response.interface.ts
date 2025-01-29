import { _ILinks } from '../../../../../interfaces/hashgraph.restful.links.interface';
import { _IEntity } from './hashgraph.restful.staking.reward.entity.interface';

/**
 * @file hashgraph.restful.staking.reward.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for staking reward queries in the Hashgraph Network REST API.
 * This interface represents the paginated response format for retrieving staking reward information.
 * @category Interfaces
 * @subcategory Staking
 * @since 2.0.0
 */

/**
 * Staking Reward Response Interface
 * @interface _IResponse
 * @description Represents the response structure for staking reward queries.
 * This interface provides:
 * - Collection of staking reward records
 * - Pagination controls for large result sets
 * - Response metadata and links
 * Used for retrieving and managing staking reward information.
 * @category Interfaces
 * @subcategory Staking
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete staking reward response
 * const response: _IResponse = {
 *   rewards: [
 *     {
 *       account_id: "0.0.1234",
 *       amount: 100000000,         // 1 HBAR
 *       timestamp: "2023-01-01T12:00:00.000Z"
 *     },
 *     {
 *       account_id: "0.0.5678",
 *       amount: 50000000,          // 0.5 HBAR
 *       timestamp: "2023-01-01T12:05:00.000Z"
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/staking/rewards?page=2",
 *     self: "/api/v1/staking/rewards?page=1",
 *     prev: "/api/v1/staking/rewards?page=0"
 *   }
 * };
 * 
 * // Example of calculating total rewards
 * const getTotalRewards = (response: _IResponse): number => {
 *   return response.rewards?.reduce((sum, reward) => sum + reward.amount, 0) ?? 0;
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Staking Rewards Collection
     * @type {Array<_IEntity>}
     * @description Array of staking reward entities representing individual rewards.
     * Properties:
     * - Optional field (may be empty or undefined)
     * - Contains complete reward records
     * - Ordered by timestamp (newest first)
     * Used for bulk reward data retrieval and processing.
     * @required false
     * @memberof _IResponse
     * @since 2.0.0
     * @example [
     *   {
     *     account_id: "0.0.1234",
     *     amount: 100000000,         // 1 HBAR
     *     timestamp: "2023-01-01T12:00:00.000Z"
     *   },
     *   {
     *     account_id: "0.0.5678",
     *     amount: 50000000,          // 0.5 HBAR
     *     timestamp: "2023-01-01T12:05:00.000Z"
     *   }
     * ]
     */
    rewards?: Array<_IEntity>;

    /**
     * Navigation Links
     * @type {_ILinks}
     * @description HATEOAS links for navigating paginated results.
     * Properties:
     * - next: Link to next page of results
     * - prev: Link to previous page
     * - self: Current page link
     * Used for traversing large result sets.
     * @required false
     * @memberof _IResponse
     * @since 2.0.0
     * @example {
     *   next: "/api/v1/staking/rewards?page=2",
     *   self: "/api/v1/staking/rewards?page=1",
     *   prev: "/api/v1/staking/rewards?page=0"
     * }
     */
    links?: _ILinks;
}