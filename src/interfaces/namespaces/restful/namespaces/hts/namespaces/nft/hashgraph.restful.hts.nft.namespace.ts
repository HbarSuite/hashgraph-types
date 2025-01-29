/**
 * @file hashgraph.restful.hts.nft.namespace.ts
 * @namespace IHashgraph.IRestful._IHTS._INft
 * @description Defines the namespace for Non-Fungible Token (NFT) operations in the Hedera Token Service (HTS).
 * This namespace provides comprehensive type definitions for NFT entities, transactions, and API responses
 * used in the REST API.
 * @category Namespaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Importing and using the NFT namespace
 * import { _IHTS } from '@hashgraph/sdk';
 * 
 * // Using NFT entity interface
 * const nftEntity: _IHTS.INft.IEntity = {
 *   token_id: "0.0.1234",
 *   serial_number: 1,
 *   owner: "0.0.5678",
 *   metadata: "ipfs://QmHash",
 *   created_timestamp: "2023-01-01T00:00:00Z"
 * };
 * 
 * // Using NFT response interface
 * const nftResponse: _IHTS.INft.IResponse = {
 *   nfts: [nftEntity],
 *   links: {
 *     next: "/api/v1/tokens/0.0.1234/nfts?page=2"
 *   }
 * };
 * ```
 */

import { _IEntity } from './interfaces/hashgraph.restful.hts.nft.entity.interface';
import { _IResponse } from './interfaces/hashgraph.restful.hts.nft.response.interface';
import { _ITransactionsResponse } from './interfaces/hashgraph.restful.hts.nft.transactions-response.interface';
import { _ITransactionsCollectionResponse } from './interfaces/hashgraph.restful.hts.nft.transactions-collection-response.interface';

/**
 * NFT Namespace
 * @description Provides interfaces and types for working with Non-Fungible Tokens (NFTs)
 * on the Hedera network through the REST API. Includes definitions for NFT entities,
 * transaction histories, and API responses.
 * @public
 */
export namespace _INft {
    /**
     * NFT Response Interface
     * @description Defines the structure for API responses containing NFT data.
     * Includes collections of NFT entities and pagination information.
     * @type {_IResponse}
     * @see {@link _IResponse} for detailed property definitions
     * @public
     * 
     * @example
     * ```typescript
     * const response: IResponse = {
     *   nfts: [{
     *     token_id: "0.0.1234",
     *     serial_number: 1,
     *     owner: "0.0.5678"
     *   }],
     *   links: {
     *     next: "/api/v1/tokens/0.0.1234/nfts?page=2"
     *   }
     * };
     * ```
     */
    export type IResponse = _IResponse

    /**
     * NFT Entity Interface
     * @description Defines the structure for individual NFT entities, including
     * ownership information, metadata, and lifecycle properties.
     * @type {_IEntity}
     * @see {@link _IEntity} for detailed property definitions
     * @public
     * 
     * @example
     * ```typescript
     * const nft: IEntity = {
     *   token_id: "0.0.1234",
     *   serial_number: 1,
     *   owner: "0.0.5678",
     *   metadata: "ipfs://QmHash",
     *   created_timestamp: "2023-01-01T00:00:00Z"
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * NFT Transaction Response Interface
     * @description Defines the structure for API responses containing NFT transaction data.
     * Includes transfer details, timestamps, and transaction metadata.
     * @type {_ITransactionsResponse}
     * @see {@link _ITransactionsResponse} for detailed property definitions
     * @public
     * 
     * @example
     * ```typescript
     * const txResponse: ITransactionsResponse = {
     *   transaction_id: "0.0.1234@1234567890.000000000",
     *   sender: "0.0.1234",
     *   receiver: "0.0.5678",
     *   timestamp: "2023-01-01T00:00:00Z"
     * };
     * ```
     */
    export type ITransactionsResponse = _ITransactionsResponse

    /**
     * NFT Transactions Collection Response Interface
     * @description Defines the structure for API responses containing collections
     * of NFT transactions. Includes pagination and filtering information.
     * @type {_ITransactionsCollectionResponse}
     * @see {@link _ITransactionsCollectionResponse} for detailed property definitions
     * @public
     * 
     * @example
     * ```typescript
     * const txCollectionResponse: ITransactionsCollectionResponse = {
     *   transactions: [{
     *     transaction_id: "0.0.1234@1234567890.000000000",
     *     type: "TRANSFER",
     *     timestamp: "2023-01-01T00:00:00Z"
     *   }],
     *   links: {
     *     next: "/api/v1/tokens/0.0.1234/nfts/1/transactions?page=2"
     *   }
     * };
     * ```
     */
    export type ITransactionsCollectionResponse = _ITransactionsCollectionResponse
}