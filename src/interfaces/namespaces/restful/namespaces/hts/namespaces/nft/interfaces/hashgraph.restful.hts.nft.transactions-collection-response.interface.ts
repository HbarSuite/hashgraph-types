import { _IRestful } from '../../../../../hashgraph.restful.namespace';
import { _INft } from '../hashgraph.restful.hts.nft.namespace';

/**
 * @file hashgraph.restful.hts.nft.transactions-collection-response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for NFT transaction collection queries in the Hashgraph Token Service (HTS) REST API.
 * This interface represents the paginated response format for retrieving historical NFT transactions.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * NFT Transactions Collection Response Interface
 * @interface _ITransactionsCollectionResponse
 * @description Represents a paginated response containing a collection of NFT transactions from the
 * Hashgraph Token Service. This interface provides a standardized structure for:
 * - Retrieving historical NFT transaction records
 * - Navigating through transaction history using HATEOAS links
 * - Tracking NFT ownership changes and operations
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a paginated NFT transaction collection response
 * const response: _ITransactionsCollectionResponse = {
 *   transactions: [{
 *     consensus_timestamp: "1234567890.000000000",  // When transaction was processed
 *     transaction_id: "0.0.1234@1234567890.000",    // Unique transaction identifier
 *     sender_account_id: "0.0.1234",                // Sender's account
 *     receiver_account_id: "0.0.5678",              // Receiver's account
 *     type: "NFT_TRANSFER",                         // Transaction type
 *     is_approval: false,                           // Whether it was an approval
 *     nonce: 1                                      // Transaction sequence number
 *   }],
 *   links: {
 *     next: "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=25&timestamp=lt:1234567890.000000000",
 *     self: "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=25"
 *   }
 * };
 * ```
 * 
 * @see {@link _INft.ITransactionsResponse} For detailed transaction structure
 * @see {@link _IRestful.ILinks} For pagination links structure
 */
export interface _ITransactionsCollectionResponse {
    /**
     * NFT Transactions Collection
     * @type {Array<_INft.ITransactionsResponse>}
     * @description An array of transaction objects representing individual NFT operations.
     * Each transaction record contains detailed information about:
     * - Transaction identification and timing
     * - Participating accounts (sender/receiver)
     * - Transaction type and status
     * - Approval status and sequence information
     * @required false
     * @memberof _ITransactionsCollectionResponse
     * @since 2.0.0
     * @example
     * [
     *   {
     *     consensus_timestamp: "1234567890.000000000",
     *     transaction_id: "0.0.1234@1234567890.000",
     *     sender_account_id: "0.0.1234",
     *     receiver_account_id: "0.0.5678",
     *     type: "NFT_TRANSFER",
     *     is_approval: false,
     *     nonce: 1
     *   }
     * ]
     */
    transactions?: Array<_INft.ITransactionsResponse>;

    /**
     * Navigation Links
     * @type {_IRestful.ILinks}
     * @description HATEOAS (Hypermedia as the Engine of Application State) links for navigating
     * through the transaction history. These links enable:
     * - Pagination through historical records
     * - Self-discovery of API endpoints
     * - Maintaining REST architectural constraints
     * 
     * Common link relations include:
     * - next: URL to the next page of transactions
     * - prev: URL to the previous page (if applicable)
     * - self: URL to the current resource
     * @required false
     * @memberof _ITransactionsCollectionResponse
     * @since 2.0.0
     * @example
     * {
     *   "next": "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=25&timestamp=lt:1234567890.000000000",
     *   "self": "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=25"
     * }
     */
    links?: _IRestful.ILinks;
} 