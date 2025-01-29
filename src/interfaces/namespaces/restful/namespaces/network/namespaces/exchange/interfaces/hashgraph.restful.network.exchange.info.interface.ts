import { _IRate } from './hashgraph.restful.network.exchange.rate.interface';

/**
 * @file hashgraph.restful.network.exchange.info.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for network exchange rate information in the Hashgraph Network REST API.
 * This interface provides comprehensive exchange rate data including current and future rates.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Exchange Rate Information Interface
 * @interface _IInfo
 * @description Represents comprehensive exchange rate information for the Hashgraph network.
 * This interface encapsulates both current and upcoming exchange rates, along with timing
 * information, enabling applications to handle rate transitions and calculations.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of complete exchange rate information
 * const exchangeInfo: _IInfo = {
 *   current_rate: {
 *     cent_equivalent: 1000,    // $10.00 USD
 *     hbar_equivalent: 100,     // 100 HBAR
 *     expiration_time: 1678901234
 *   },
 *   next_rate: {
 *     cent_equivalent: 1100,    // $11.00 USD
 *     hbar_equivalent: 100,     // 100 HBAR
 *     expiration_time: 1678987634
 *   },
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * 
 * // Calculate current rate in USD/HBAR
 * const currentRate = exchangeInfo.current_rate.cent_equivalent / 
 *                    exchangeInfo.current_rate.hbar_equivalent / 100;  // $0.10 per HBAR
 * ```
 */
export interface _IInfo {
    /**
     * Current Exchange Rate
     * @type {_IRate}
     * @description The currently active exchange rate information between HBAR and USD.
     * This rate should be used for immediate or current transactions and calculations.
     * Contains the current conversion rates and expiration timestamp.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @example
     * {
     *   cent_equivalent: 1000,    // $10.00 USD
     *   hbar_equivalent: 100,     // 100 HBAR
     *   expiration_time: 1678901234
     * }
     */
    current_rate: _IRate;

    /**
     * Next Exchange Rate
     * @type {_IRate}
     * @description The upcoming exchange rate that will become active after the current rate expires.
     * This rate should be used for future calculations or to prepare for rate transitions.
     * Contains the future conversion rates and their activation timestamp.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @example
     * {
     *   cent_equivalent: 1100,    // $11.00 USD
     *   hbar_equivalent: 100,     // 100 HBAR
     *   expiration_time: 1678987634
     * }
     */
    next_rate: _IRate;

    /**
     * Information Timestamp
     * @type {string}
     * @description The ISO 8601 UTC timestamp when this exchange rate information was retrieved or last updated.
     * Format: ISO 8601 UTC timestamp (e.g., "2023-01-01T12:00:00.000Z")
     * Used to track the freshness of the exchange rate data.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @example "2023-01-01T12:00:00.000Z"
     */
    timestamp: string;
}