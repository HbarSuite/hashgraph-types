import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Response } from './models/hashgraph.restful.hts.models.response.model'
import { _Token } from './models/hashgraph.restful.hts.models.token.model'
import { _Balance } from './namespaces/balance/hashgraph.restful.hts.balance.namespace'
import { _Info } from './namespaces/info/hashgraph.restful.hts.info.namespace'
import { _Nft } from './namespaces/nft/hashgraph.restful.hts.nft.namespace'
import { _Relationship } from './namespaces/reltionship/hashgraph.restful.hts.reltionship.relationship.namespace'
import { _Fungible } from "./namespaces/fungible/hashgraph.restful.hts.fungible.namespace"

/**
 * Hashgraph Token Service (HTS) namespace containing interfaces and types for token-related operations
 * @file hashgraph.restful.hts.namespace.ts
 * @namespace _HTS
 * @description This namespace provides a comprehensive set of types and interfaces for interacting with
 * the Hashgraph Token Service. It includes functionality for managing tokens, NFTs, balances, and token relationships.
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Import and use HTS namespace
 * import { _HTS } from './hashgraph.restful.hts.namespace';
 * 
 * // Create a new token instance
 * const token = new _HTS.Token({
 *   token_id: '0.0.1234',
 *   name: 'My Token',
 *   symbol: 'TKN'
 * });
 */
export namespace _HTS {
    /**
     * Namespace containing enums and interfaces related to token information
     * @description Contains various enums and interfaces for token properties such as pause status,
     * supply type, token type, and other token-specific information. Used for managing token
     * configurations and properties.
     * @see {@link _Info} For detailed implementation of token information types
     * @category Token Information
     */
    export import Info = _Info

    /**
     * Namespace containing enums and interfaces related to token relationships
     * @description Includes interfaces for token relationship properties such as automatic association,
     * balance, KYC status, and freeze status. Used for managing the relationship between accounts
     * and tokens.
     * @see {@link _Relationship} For detailed implementation of token relationship types
     * @category Token Relationships
     */
    export import Relationship = _Relationship

    /**
     * Namespace containing interfaces related to token balances
     * @description Includes interfaces for token balance entities and responses. Used for tracking
     * and managing token balances across accounts.
     * @see {@link _Balance} For detailed implementation of balance-related types
     * @category Token Balances
     */
    export import Balance = _Balance

    /**
     * Namespace containing interfaces related to Non-Fungible Tokens (NFTs)
     * @description Includes interfaces for NFT entities, responses, and transactions. Provides
     * comprehensive support for NFT operations including minting, transferring, and querying.
     * @see {@link _Nft} For detailed implementation of NFT-related types
     * @category NFT
     */
    export import Nft = _Nft

    /**
     * Namespace containing interfaces related to Fungible Tokens (FTs)
     * @description Includes interfaces for fungible token entities, responses, and transactions. Provides
     * comprehensive support for fungible token operations including minting, transferring, and querying.
     * @see {@link _Fungible} For detailed implementation of fungible token-related types
     * @category Fungible Token
     */
    export import Fungible = _Fungible

    /**
     * Token class representing token details and properties
     * @class Token
     * @extends {_Token}
     * @description Provides a structured representation of a token's properties and metadata.
     * Used for creating and managing tokens on the Hashgraph network.
     * @category Token
     * @property {string} token_id - Unique identifier for the token
     * @property {string} name - Name of the token
     * @property {string} symbol - Token symbol
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Token' })
    export class Token extends _Token {}

    /**
     * Response class for token-related operations
     * @class Response
     * @extends {_Response}
     * @description Standardized response structure for token-related API calls and operations.
     * Includes status information and operation results.
     * @category Response
     * @property {boolean} success - Indicates if the operation was successful
     * @property {any} data - Response data from the operation
     * @property {string} [message] - Optional message providing additional information
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Response' })
    export class Response extends _Response {}
}