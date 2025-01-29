import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * @file hashgraph.restful.hts.token.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the token interface for the Hashgraph Token Service (HTS) REST API.
 * This interface represents the structure and properties of tokens in the Hedera network.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Hashgraph Token Interface
 * @interface _IToken
 * @description Represents the structure and properties of a token on the Hashgraph Token Service.
 * This interface defines all the essential attributes that characterize a token, including its
 * identification, configuration, and metadata.
 * @category Interfaces
 * @subcategory Token
 * @public
 * 
 * @example
 * ```typescript
 * const token: _IToken = {
 *   admin_key: { key: "0x123..." },
 *   decimals: 8,
 *   metadata: "Additional token information",
 *   name: "My Token",
 *   symbol: "MTK", 
 *   token_id: "0.0.123456",
 *   type: "fungible"
 * };
 * ```
 */
export interface _IToken {
    /**
     * Admin Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The administrative key associated with the token that controls token management operations.
     * This key has privileges to modify token properties, freeze/unfreeze accounts, and manage token policies.
     * @required true
     * @example { key: "0x123..." }
     * @memberof _IToken
     * @since 2.0.0
     */
    admin_key: IHashgraph.ICommons.IKey.IEntity

    /**
     * Decimals
     * @type {number}
     * @description The number of decimal places used to represent the token's smallest unit.
     * This value determines the token's divisibility and precision for fractional amounts.
     * Common values are 8 for cryptocurrencies and 2 for stablecoins.
     * @required true
     * @example 8
     * @memberof _IToken
     * @since 2.0.0
     */
    decimals: number

    /**
     * Metadata
     * @type {string}
     * @description Additional information or attributes associated with the token.
     * Can contain arbitrary data such as token description, links to resources, or other
     * token-specific information encoded as a string.
     * @required true
     * @example "{"description": "A utility token for the XYZ platform", "website": "https://xyz.com"}"
     * @memberof _IToken
     * @since 2.0.0
     */
    metadata: string

    /**
     * Name
     * @type {string}
     * @description The human-readable name of the token.
     * This is the full name that identifies the token to users and should be descriptive
     * and easily recognizable.
     * @required true
     * @example "My Platform Token"
     * @memberof _IToken
     * @since 2.0.0
     */
    name: string

    /**
     * Symbol
     * @type {string}
     * @description The abbreviated symbol or ticker of the token.
     * A short, unique identifier typically used for trading and display purposes.
     * Usually consists of 3-5 uppercase letters.
     * @required true
     * @example "MTK"
     * @memberof _IToken
     * @since 2.0.0
     */
    symbol: string

    /**
     * Token ID
     * @type {string | null}
     * @description The unique identifier of the token on the Hedera network.
     * Follows the format "shard.realm.num" (e.g., "0.0.123456").
     * Can be null for tokens that haven't been created yet.
     * @required true
     * @example "0.0.123456"
     * @memberof _IToken
     * @since 2.0.0
     */
    token_id: string | null

    /**
     * Type
     * @type {string}
     * @description The classification of the token that defines its behavior and characteristics.
     * Common types include:
     * - "fungible": Tokens that are interchangeable with each other
     * - "non-fungible": Unique tokens that represent distinct assets
     * @required true
     * @example "fungible"
     * @memberof _IToken
     * @since 2.0.0
     */
    type: string
}