import { _IResponse } from './interfaces/hashgraph.restful.hts.response.interface'
import { _IToken } from './interfaces/hashgraph.restful.hts.token.interface'
import { _IBalance } from './namespaces/balance/hashgraph.restful.hts.balance.namespace'
import { _IInfo } from './namespaces/info/hashgraph.restful.hts.info.namespace'
import { _INft } from './namespaces/nft/hashgraph.restful.hts.nft.namespace'
import { _IRelationship } from './namespaces/reltionship/hashgraph.restful.hts.reltionship.relationship.namespace'

/**
 * @file hashgraph.restful.hts.namespace.ts
 * @namespace IHashgraph.IRestful._IHTS
 * @description Defines the namespace for Hedera Token Service (HTS) related interfaces and types in the REST API.
 * This namespace provides comprehensive type definitions for working with tokens, including fungible and non-fungible
 * tokens, token relationships, balances, and other token-related operations.
 * @category Namespaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Importing and using the HTS namespace
 * import { _IHTS } from '@hashgraph/sdk';
 * 
 * // Using token interface
 * const tokenInfo: _IHTS.IToken = {
 *   token_id: "0.0.1234",
 *   name: "My Token",
 *   symbol: "TKN",
 *   decimals: 8
 * };
 * 
 * // Using balance interface
 * const balance: _IHTS.IBalance = {
 *   tokens: ["0.0.1234"],
 *   balances: [100]
 * };
 * ```
 */
export namespace _IHTS {
    /**
     * Token information namespace
     * @description Contains interfaces and types for token metadata and properties.
     * Includes definitions for token types, supply types, pause status, and other
     * token configuration parameters.
     * @type {_IInfo}
     * @see {@link _IInfo} for detailed interface definitions
     */
    export import IInfo = _IInfo

    /**
     * Token relationship namespace
     * @description Defines interfaces for managing relationships between accounts
     * and tokens. Includes types for automatic associations, KYC status, freeze
     * status, and other account-token relationships.
     * @type {_IRelationship}
     * @see {@link _IRelationship} for detailed interface definitions
     */
    export import IRelationship = _IRelationship

    /**
     * Token balance namespace
     * @description Contains interfaces for tracking and managing token balances.
     * Supports both fungible and non-fungible token balance operations and queries.
     * @type {_IBalance}
     * @see {@link _IBalance} for detailed interface definitions
     */
    export import IBalance = _IBalance

    /**
     * Non-Fungible Token (NFT) namespace
     * @description Provides interfaces specific to NFT operations, including
     * minting, transferring, and querying NFT metadata and ownership information.
     * @type {_INft}
     * @see {@link _INft} for detailed interface definitions
     */
    export import INft = _INft

    /**
     * Token interface type
     * @description Defines the structure for token entities, including their
     * properties, configuration, and current state. Used for creating and
     * managing tokens on the Hedera network.
     * @type {_IToken}
     * @see {@link _IToken} for detailed property definitions
     * 
     * @example
     * ```typescript
     * const token: IToken = {
     *   token_id: "0.0.1234",
     *   name: "Example Token",
     *   symbol: "EXT",
     *   decimals: 6,
     *   initial_supply: "1000000",
     *   total_supply: "1000000",
     *   max_supply: "10000000"
     * };
     * ```
     */
    export type IToken = _IToken

    /**
     * Token response interface type
     * @description Defines the structure for API responses related to token
     * operations. Includes status information, error handling, and response
     * data formatting.
     * @type {_IResponse}
     * @see {@link _IResponse} for detailed property definitions
     * 
     * @example
     * ```typescript
     * const response: IResponse = {
     *   status: "success",
     *   data: {
     *     token_id: "0.0.1234",
     *     transaction_id: "0.0.1234@1234567890.000000000"
     *   }
     * };
     * ```
     */
    export type IResponse = _IResponse
}