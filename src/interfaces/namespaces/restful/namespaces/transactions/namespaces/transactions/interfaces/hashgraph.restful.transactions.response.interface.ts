import { _IRestful } from '../../../../../hashgraph.restful.namespace'
import type { _ITransaction } from '../hashgraph.restful.transactions.transaction.namespace'

/**
 * @file hashgraph.restful.transactions.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for transaction query responses in the Hashgraph Network REST API.
 * This interface represents the paginated response format for transaction queries, including:
 * - Collection of transaction entities
 * - Pagination controls and navigation
 * - Self-referential links
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Response Interface
 * @interface _IResponse
 * @description Represents the response structure for transaction queries in the Hashgraph network.
 * This interface provides:
 * - Paginated access to transaction records
 * - Navigation controls for result sets
 * - Comprehensive transaction details
 * - RESTful API compliance
 * Used for retrieving and traversing transaction data.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a basic transaction query response
 * const basicResponse: _IResponse = {
 *   transactions: [
 *     {
 *       transaction_id: "0.0.1234@1234567890.000000000",
 *       consensus_timestamp: "1234567890.000000000",
 *       name: "CRYPTOTRANSFER",
 *       result: "SUCCESS",
 *       transfers: [
 *         { account: "0.0.1234", amount: -1000000000 },  // -10 HBAR
 *         { account: "0.0.5678", amount: 1000000000 }    // +10 HBAR
 *       ]
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.000000000",
 *     self: "/api/v1/transactions?limit=25"
 *   }
 * };
 * 
 * // Example of a response with multiple transaction types
 * const mixedResponse: _IResponse = {
 *   transactions: [
 *     {
 *       transaction_id: "0.0.1234@1234567890.000000001",
 *       name: "TOKENTRANSFER",
 *       token_transfers: [
 *         {
 *           token_id: "0.0.9012",
 *           account: "0.0.1234",
 *           amount: 100
 *         }
 *       ]
 *     },
 *     {
 *       transaction_id: "0.0.5678@1234567890.000000002",
 *       name: "CRYPTOTRANSFER",
 *       transfers: [
 *         { account: "0.0.5678", amount: 50000000 }  // 0.5 HBAR
 *       ]
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.000000002",
 *     previous: "/api/v1/transactions?limit=25&timestamp=gt:1234567890.000000000",
 *     self: "/api/v1/transactions?limit=25"
 *   }
 * };
 * 
 * // Example of handling paginated responses
 * const fetchAllTransactions = async (
 *   baseUrl: string,
 *   startTime?: string,
 *   endTime?: string
 * ): Promise<_ITransaction.IEntity[]> => {
 *   let allTransactions: _ITransaction.IEntity[] = [];
 *   let nextLink = `${baseUrl}/api/v1/transactions?limit=100${
 *     startTime ? `&timestamp=gt:${startTime}` : ''
 *   }${endTime ? `&timestamp=lt:${endTime}` : ''}`;
 *   
 *   while (nextLink) {
 *     const response: _IResponse = await fetch(nextLink).then(res => res.json());
 *     allTransactions = allTransactions.concat(response.transactions ?? []);
 *     nextLink = response.links?.next ?? '';
 *   }
 *   
 *   return allTransactions;
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Transaction Collection
     * @type {Array<_ITransaction.IEntity>}
     * @description Collection of transaction entities matching the query criteria.
     * Properties:
     * - Optional field
     * - Array of transaction records
     * - Each record contains full transaction details
     * - Ordered by consensus timestamp
     * - Limited by pagination settings
     * @required false
     * @see {@link _ITransaction.IEntity}
     * @memberof _IResponse
     * @since 2.0.0
     */
    transactions?: Array<_ITransaction.IEntity>;

    /**
     * Navigation Links
     * @type {_IRestful.ILinks}
     * @description RESTful navigation links for result pagination.
     * Properties:
     * - Optional field
     * - Contains next/previous page URLs
     * - Includes self-reference link
     * - Supports result set traversal
     * - Maintains query parameters
     * @required false
     * @see {@link _IRestful.ILinks}
     * @memberof _IResponse
     * @since 2.0.0
     */
    links?: _IRestful.ILinks;
}