/**
 * @file hashgraph.restful.network.supply.info.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for network token supply information in the Hashgraph Network REST API.
 * This interface provides comprehensive details about the total and released HBAR supply.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Supply Information Interface
 * @interface _IInfo
 * @description Represents comprehensive information about the HBAR token supply in the network.
 * This interface provides details about:
 * - Total token supply (maximum possible supply)
 * - Released supply (tokens in circulation)
 * - Timestamp of the supply information
 * All supply values are represented as strings to maintain precision with large numbers.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of network supply information
 * const supplyInfo: _IInfo = {
 *   total_supply: "5000000000000000000",     // 50 billion HBAR (max supply)
 *   released_supply: "3999999999999999949",  // Currently released HBAR
 *   timestamp: "1586567700.453054000"        // When info was recorded
 * };
 * 
 * // Example of calculating unreleased supply
 * const getUnreleasedSupply = (info: _IInfo): bigint => {
 *   return BigInt(info.total_supply) - BigInt(info.released_supply);
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Released Supply
     * @type {string}
     * @description The current amount of HBAR tokens released into circulation.
     * This value represents all tokens that have been distributed and are
     * available for transactions in the network.
     * Format: String representation of a non-negative integer
     * - Must be less than or equal to total_supply
     * - Represents tinybars (1 HBAR = 100,000,000 tinybars)
     * @required true
     * @pattern ^[0-9]+$
     * @memberof _IInfo
     * @since 2.0.0
     * @example "3999999999999999949"
     */
    released_supply: string;

    /**
     * Information Timestamp
     * @type {string}
     * @description The timestamp when this supply information was recorded.
     * Format: Unix epoch seconds with nanosecond precision (seconds.nanoseconds)
     * Used to track the freshness of supply data.
     * @required true
     * @pattern ^[0-9]+\.[0-9]+$
     * @memberof _IInfo
     * @since 2.0.0
     * @example "1586567700.453054000"
     */
    timestamp: string;

    /**
     * Total Supply
     * @type {string}
     * @description The maximum possible supply of HBAR tokens in the network.
     * This value represents the absolute cap on the number of tokens that
     * can exist in the network.
     * Format: String representation of a non-negative integer
     * - Fixed at 50 billion HBAR (5e19 tinybars)
     * - Represents tinybars (1 HBAR = 100,000,000 tinybars)
     * - Must be greater than or equal to released_supply
     * @required true
     * @pattern ^[0-9]+$
     * @memberof _IInfo
     * @since 2.0.0
     * @example "5000000000000000000"
     */
    total_supply: string;
}

