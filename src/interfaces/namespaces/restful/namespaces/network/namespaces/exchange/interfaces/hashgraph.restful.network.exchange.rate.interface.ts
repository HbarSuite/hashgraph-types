/**
 * @file hashgraph.restful.network.exchange.rate.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for exchange rate calculations between HBAR and USD in the Hashgraph Network REST API.
 * This interface provides the components needed for precise currency conversion calculations.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Exchange Rate Interface
 * @interface _IRate
 * @description Represents the exchange rate information between HBAR (Hedera's native cryptocurrency)
 * and US cents. This interface provides all components needed to calculate accurate exchange rates
 * and track their validity periods. The exchange rate is calculated as:
 * Rate (USD/HBAR) = (cent_equivalent / hbar_equivalent) / 100
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of exchange rate data
 * const rate: _IRate = {
 *   cent_equivalent: 1000,     // $10.00 USD
 *   hbar_equivalent: 100,      // 100 HBAR
 *   expiration_time: 1678901234
 * };
 * 
 * // Calculate rate in USD/HBAR
 * const usdPerHbar = rate.cent_equivalent / rate.hbar_equivalent / 100;  // $0.10 per HBAR
 * 
 * // Check if rate is still valid
 * const isValid = Date.now() / 1000 < rate.expiration_time;
 * ```
 */
export interface _IRate {
    /**
     * Cent Equivalent
     * @type {number}
     * @description The equivalent value in US cents (1 USD = 100 cents).
     * This value represents the numerator in the exchange rate calculation.
     * For example:
     * - 1000 represents $10.00 USD
     * - Must be a positive integer
     * - Used with hbar_equivalent to determine the exchange rate
     * @required true
     * @minimum 0
     * @example 1000
     * @memberof _IRate
     * @since 2.0.0
     */
    cent_equivalent: number;

    /**
     * Expiration Timestamp
     * @type {number}
     * @description Unix timestamp (in seconds) when this exchange rate expires.
     * After this time:
     * - The rate should not be used for new transactions
     * - The next rate should be used if available
     * - Applications should fetch updated rate information
     * Format: Unix timestamp in seconds (e.g., 1678901234)
     * @required true
     * @minimum 0
     * @example 1678901234
     * @memberof _IRate
     * @since 2.0.0
     */
    expiration_time: number;

    /**
     * HBAR Equivalent
     * @type {number}
     * @description The equivalent value in HBAR (Hedera's native cryptocurrency).
     * This value represents the denominator in the exchange rate calculation.
     * Properties:
     * - Must be a positive integer
     * - Used with cent_equivalent to determine the exchange rate
     * - Represents the amount of HBAR in the rate calculation
     * Example: 100 represents 100 HBAR
     * @required true
     * @minimum 0
     * @example 100
     * @memberof _IRate
     * @since 2.0.0
     */
    hbar_equivalent: number;
}
