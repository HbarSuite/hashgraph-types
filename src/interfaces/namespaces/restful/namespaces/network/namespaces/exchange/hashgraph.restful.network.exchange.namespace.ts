import { _IRate } from './interfaces/hashgraph.restful.network.exchange.rate.interface'
import { _IInfo } from './interfaces/hashgraph.restful.network.exchange.info.interface'

/**
 * @file hashgraph.restful.network.exchange.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for network exchange rate management in the Hashgraph Network REST API.
 * This namespace consolidates interfaces for handling exchange rates between HBAR and USD.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Exchange Rate Namespace
 * @namespace _IExchange
 * @description Provides a comprehensive set of types for managing network exchange rates
 * in the Hashgraph Network. This namespace includes:
 * - Exchange rate calculations between HBAR and USD
 * - Current and future rate tracking
 * - Rate expiration management
 * Used to maintain and track exchange rates for network transactions.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the exchange namespace
 * import { _IExchange } from '@hashgraph/sdk';
 * 
 * // Define exchange rate information
 * const exchangeInfo: _IExchange.IInfo = {
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
 * ```
 */
export namespace _IExchange {
    /**
     * Exchange Rate Information
     * @type {_IRate}
     * @description Represents detailed exchange rate information between HBAR and USD.
     * Includes:
     * - Cent equivalent value (USD)
     * - HBAR equivalent value
     * - Rate expiration timestamp
     * Used for precise currency conversion calculations.
     * @see {@link _IRate}
     * @memberof _IExchange
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Define an exchange rate
     * const rate: _IExchange.IRate = {
     *   cent_equivalent: 1000,    // $10.00 USD
     *   hbar_equivalent: 100,     // 100 HBAR
     *   expiration_time: 1678901234
     * };
     * ```
     */
    export type IRate = _IRate

    /**
     * Network Exchange Rate Information
     * @type {_IInfo}
     * @description Represents comprehensive exchange rate data including:
     * - Current active exchange rate
     * - Next scheduled exchange rate
     * - Information timestamp
     * Used to track both current and future exchange rates.
     * @see {@link _IInfo}
     * @memberof _IExchange
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Calculate current USD/HBAR rate
     * const currentRate = exchangeInfo.current_rate.cent_equivalent / 
     *                    exchangeInfo.current_rate.hbar_equivalent / 100;
     * console.log(`Current rate: $${currentRate} per HBAR`);
     * ```
     */
    export type IInfo = _IInfo
}
