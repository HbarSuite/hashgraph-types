import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Entity } from './models/hashgraph.restful.hts.nft.models.entity.model';
import { _Response } from './models/hashgraph.restful.hts.nft.models.response.model';
import { _TransactionsResponse } from './models/hashgraph.restful.hts.nft.models.transactions-response.model';
import { _TransactionsCollectionResponse } from './models/hashgraph.restful.hts.nft.models.transactions-collection-response.model';
/**
 * @file hashgraph.restful.hts.nft.namespace.ts
 * @namespace _Nft
 * @description Namespace for Hashgraph NFT (Non-Fungible Token) related interfaces and types.
 * This namespace provides comprehensive type definitions for NFT operations, including responses,
 * entities, and transaction-related structures. It serves as a central point for all NFT-related
 * type definitions in the Hashgraph Token Service.
 * @category Hashgraph
 * @subcategory NFT
 * @since 2.0.0
 */
export namespace _Nft {
    /**
     * Type definition for NFT Response
     * @class Response
     * @extends {_Response}
     * @description Represents the response structure for NFT-related queries. This class
     * provides a standardized format for responses containing NFT information, including
     * NFT details and pagination data.
     * @category Response
     * @property {Array<Entity>} nfts - List of NFT entities returned in the response
     * @property {object} links - Pagination links for navigating through results
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Nft.Response' })
    export class Response extends _Response {}

    /**
     * Type definition for NFT Entity
     * @class Entity
     * @extends {_Entity}
     * @description Represents the structure of an NFT entity. This class defines the
     * core properties and metadata of a non-fungible token on the Hedera network.
     * @category Entity
     * @property {string} tokenId - The unique identifier of the NFT token
     * @property {string} serialNumber - The serial number of the NFT within its token class
     * @property {string} metadata - Additional metadata associated with the NFT (e.g., IPFS hash)
     * @property {string} [spender] - Optional spender account ID with allowance for the NFT
     * @property {boolean} [deleted] - Indicates if the NFT has been deleted/burned
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Nft.Entity' })
    export class Entity extends _Entity {}

    /**
     * Type definition for NFT Transactions Response
     * @class TransactionsResponse
     * @extends {_TransactionsResponse}
     * @description Represents the response structure for NFT transaction queries.
     * This class provides detailed information about NFT transactions, including
     * transaction history, status, and pagination data.
     * @category Response
     * @property {Array<Transaction>} transactions - List of NFT transactions
     * @property {object} links - Pagination links for transaction results
     * @property {number} count - Total number of transactions in the response
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Nft.TransactionsResponse' })
    export class TransactionsResponse extends _TransactionsResponse {}

    /**
     * Type definition for NFT Transactions Collection Response
     * @class TransactionsCollectionResponse
     * @extends {_TransactionsCollectionResponse}
     * @description Represents the response structure for NFT transaction collection queries.
     * This class provides a specialized format for responses containing collections of
     * NFT transactions, typically used for bulk operations or historical queries.
     * @category Response
     * @property {Array<TransactionCollection>} collections - List of transaction collections
     * @property {object} links - Pagination links for collection results
     * @property {number} count - Total number of collections in the response
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Nft.TransactionsCollectionResponse' })
    export class TransactionsCollectionResponse extends _TransactionsCollectionResponse {}
}
