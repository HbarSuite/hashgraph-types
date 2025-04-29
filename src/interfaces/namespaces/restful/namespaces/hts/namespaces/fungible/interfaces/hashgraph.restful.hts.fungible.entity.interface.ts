/**
 * @file hashgraph.restful.hts.fungible.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for Fungible Token entities in the Hashgraph Token Service (HTS) REST API.
 * This interface represents the core properties of a fungible token holding.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Fungible Token Entity Interface
 * @interface _IEntity
 * @description Represents a fungible token holding on the Hashgraph Token Service (HTS).
 * This interface defines the essential properties that characterize a fungible token balance, including:
 * - Account ownership information
 * - Token balance and decimal precision
 * - Token identification
 * @category Interfaces
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a fungible token holding
 * const tokenHolding: _IEntity = {
 *   account: "0.0.123456",      // Account holding the tokens
 *   balance: "1000000",         // Raw balance (before decimal adjustment)
 *   decimals: 8,                // Decimal precision
 *   token_id: "0.0.789012"      // Token identifier
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Account ID
     * @type {string}
     * @description The Hedera account ID that holds this token balance.
     * Format: `shard.realm.num` (e.g., "0.0.123456")
     * @required true
     * @example "0.0.123456"
     * @memberof _IEntity
     * @since 2.0.0
     */
    account: string;

    /**
     * Token Balance
     * @type {string}
     * @description The raw balance of tokens held by the account.
     * Represented as a string to handle large numbers precisely.
     * To get the actual balance, divide by 10^decimals.
     * @required true
     * @example "1000000"
     * @memberof _IEntity
     * @since 2.0.0
     */
    balance: string;

    /**
     * Decimal Precision
     * @type {number}
     * @description The number of decimal places used to represent the token.
     * Used to convert the raw balance to its actual value.
     * @required true
     * @example 8
     * @memberof _IEntity
     * @since 2.0.0
     */
    decimals: number;
}