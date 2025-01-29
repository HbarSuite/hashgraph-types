import { _IRestful } from '../../../../../hashgraph.restful.namespace'
import type { _INft } from '../hashgraph.restful.hts.nft.namespace'

/**
 * @file hashgraph.restful.hts.nft.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response interface for NFT collection queries in the Hashgraph Token Service (HTS) REST API.
 * This interface provides a standardized structure for paginated NFT collection responses.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * NFT Collection Response Interface
 * @interface _IResponse
 * @description Represents a paginated response containing a collection of NFTs (Non-Fungible Tokens).
 * This interface defines the structure for NFT query responses, including:
 * - An array of NFT entities with their complete metadata
 * - Pagination links for navigating large collections
 * Used for handling API responses related to NFT collection queries.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete NFT collection response
 * const response: _IResponse = {
 *   nfts: [{
 *     token_id: "0.0.1234567",      // NFT collection ID
 *     serial_number: 1,             // Unique identifier within collection
 *     metadata: "QmXwd8Y5...",      // IPFS CID or other metadata
 *     account_id: "0.0.123456",     // Current owner
 *     created_timestamp: "2023-01-01T12:00:00.000Z",
 *     deleted: false                // NFT exists and is active
 *   }],
 *   links: {
 *     next: "/api/v1/tokens/0.0.1234567/nfts?limit=100&start=2",
 *     prev: "/api/v1/tokens/0.0.1234567/nfts?limit=100&start=0"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * NFT Collection
     * @type {Array<_INft.IEntity>}
     * @description An array of NFT entities representing individual Non-Fungible Tokens in the collection.
     * Each NFT entity contains complete token information including:
     * - Token identification (token_id, serial_number)
     * - Ownership details (account_id)
     * - Metadata and state information
     * - Temporal data (creation timestamp)
     * An empty array indicates no NFTs match the query criteria.
     * @required false
     * @example 
     * ```typescript
     * nfts: [{
     *   token_id: "0.0.1234567",
     *   serial_number: 1,
     *   metadata: "QmXwd8Y5...",
     *   account_id: "0.0.123456",
     *   created_timestamp: "2023-01-01T12:00:00.000Z",
     *   deleted: false
     * }]
     * ```
     * @memberof _IResponse
     * @since 2.0.0
     */
    nfts?: Array<_INft.IEntity>;

    /**
     * Pagination Links
     * @type {_IRestful.ILinks}
     * @description Navigation links for traversing through paginated NFT collection results.
     * Contains URLs for accessing:
     * - Next page of results (if available)
     * - Previous page of results (if available)
     * - Other relevant navigation endpoints
     * Absence of a link indicates no more results in that direction.
     * @required false
     * @example 
     * ```typescript
     * links: {
     *   next: "/api/v1/tokens/0.0.1234567/nfts?limit=100&start=2",
     *   prev: "/api/v1/tokens/0.0.1234567/nfts?limit=100&start=0"
     * }
     * ```
     * @memberof _IResponse
     * @since 2.0.0
     */
    links?: _IRestful.ILinks;
}