import { _IFee } from './hashgraph.restful.network.fees.fee.interface';

/**
 * @file hashgraph.restful.network.fees.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for network fee queries in the Hashgraph Network REST API.
 * This interface provides a comprehensive view of current network fees for various transaction types.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Fees Response Interface
 * @interface _IResponse
 * @description Represents the complete response structure for network fee queries from the
 * Hashgraph network. This interface provides current fee schedules for all transaction types
 * along with timing information for fee validity.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete network fees response
 * const response: _IResponse = {
 *   fees: [
 *     {
 *       gas: 500000,
 *       transaction_type: "CRYPTO_TRANSFER"
 *     },
 *     {
 *       gas: 1000000,
 *       transaction_type: "CONTRACT_CALL"
 *     }
 *   ],
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * 
 * // Example of finding fee for specific transaction type
 * const cryptoTransferFee = response.fees.find(
 *   fee => fee.transaction_type === "CRYPTO_TRANSFER"
 * );
 * ```
 */
export interface _IResponse {
    /**
     * Network Fees Collection
     * @type {Array<_IFee>}
     * @description An array containing fee information for all available transaction types.
     * Each entry provides:
     * - Gas costs for specific operations
     * - Transaction type identification
     * - Fee calculation components
     * The collection represents the complete fee schedule for the network.
     * @required true
     * @memberof _IResponse
     * @since 2.0.0
     * @example
     * [
     *   {
     *     gas: 500000,
     *     transaction_type: "CRYPTO_TRANSFER"
     *   },
     *   {
     *     gas: 1000000,
     *     transaction_type: "CONTRACT_CALL"
     *   }
     * ]
     */
    fees: Array<_IFee>;

    /**
     * Information Timestamp
     * @type {string}
     * @description The ISO 8601 UTC timestamp when this fee information was retrieved or last updated.
     * Format: ISO 8601 UTC timestamp (e.g., "2023-01-01T12:00:00.000Z")
     * Used to:
     * - Track fee schedule freshness
     * - Determine when to refresh fee data
     * - Validate fee information currency
     * @required true
     * @memberof _IResponse
     * @since 2.0.0
     * @example "2023-01-01T12:00:00.000Z"
     */
    timestamp: string;
}
