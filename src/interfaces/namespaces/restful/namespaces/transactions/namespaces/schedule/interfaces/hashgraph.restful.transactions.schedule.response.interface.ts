import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _ISchedule } from '../hashgraph.restful.transactions.schedule.interface'

/**
 * @file hashgraph.restful.transactions.schedule.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for schedule queries in the Hashgraph Network REST API.
 * This interface represents the paginated response format for retrieving scheduled transaction information.
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Schedule Response Interface
 * @interface _IResponse
 * @description Represents the response structure for schedule-related queries.
 * This interface provides:
 * - Collection of scheduled transaction records
 * - Pagination controls for large result sets
 * - Response metadata and links
 * Used for retrieving and managing scheduled transaction information.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete schedule response
 * const scheduleResponse: _IResponse = {
 *   schedules: [
 *     {
 *       schedule_id: "0.0.1234",
 *       creator_account_id: "0.0.5678",
 *       payer_account_id: "0.0.9012",
 *       transaction_body: "...",
 *       expiration_time: "2024-01-01T00:00:00.000Z",
 *       signatures: [
 *         {
 *           public_key: "302a300506032b6570032100...",
 *           signature: "7c1b9d58e...",
 *           type: "ED25519"
 *         }
 *       ]
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/schedules?limit=10&start=0.0.1235",
 *     self: "/api/v1/schedules?limit=10&start=0.0.1234",
 *     prev: "/api/v1/schedules?limit=10&start=0.0.1233"
 *   }
 * };
 * 
 * // Example of processing schedule response
 * const processSchedules = (response: _IResponse): void => {
 *   // Process each schedule
 *   response.schedules?.forEach(schedule => {
 *     console.log(`Schedule ${schedule.schedule_id}:`, {
 *       creator: schedule.creator_account_id,
 *       status: schedule.deleted ? 'DELETED' : 
 *               schedule.executed_timestamp ? 'EXECUTED' : 
 *               'PENDING'
 *     });
 *   });
 * 
 *   // Handle pagination
 *   if (response.links?.next) {
 *     // Fetch next page
 *     console.log('Next page:', response.links.next);
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Schedule Collection
     * @type {Array<_ISchedule.IEntity>}
     * @description Array of scheduled transaction entities.
     * Properties:
     * - Optional field (may be empty or undefined)
     * - Contains complete schedule records
     * - Ordered by creation time (newest first)
     * Used for bulk schedule data retrieval and processing.
     * @required false
     * @see {@link _ISchedule.IEntity}
     * @memberof _IResponse
     * @since 2.0.0
     * @example [
     *   {
     *     schedule_id: "0.0.1234",
     *     creator_account_id: "0.0.5678",
     *     payer_account_id: "0.0.9012",
     *     transaction_body: "...",
     *     expiration_time: "2024-01-01T00:00:00.000Z"
     *   }
     * ]
     */
    schedules?: Array<_ISchedule.IEntity>;

    /**
     * Navigation Links
     * @type {IHashgraph.IRestful.ILinks}
     * @description HATEOAS links for navigating paginated results.
     * Properties:
     * - Optional field
     * - next: Link to next page of results
     * - prev: Link to previous page
     * - self: Current page link
     * Used for traversing large result sets.
     * @required false
     * @see {@link IHashgraph.IRestful.ILinks}
     * @memberof _IResponse
     * @since 2.0.0
     * @example {
     *   next: "/api/v1/schedules?limit=10&start=0.0.1235",
     *   self: "/api/v1/schedules?limit=10&start=0.0.1234",
     *   prev: "/api/v1/schedules?limit=10&start=0.0.1233"
     * }
     */
    links?: IHashgraph.IRestful.ILinks;
}