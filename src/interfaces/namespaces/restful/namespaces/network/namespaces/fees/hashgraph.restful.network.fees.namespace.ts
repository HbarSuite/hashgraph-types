import { _IFee } from './interfaces/hashgraph.restful.network.fees.fee.interface';
import { _IResponse } from './interfaces/hashgraph.restful.network.fees.response.interface';

/**
 * @file hashgraph.restful.network.fees.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for network fee management in the Hashgraph Network REST API.
 * This namespace consolidates interfaces for handling transaction fees and gas costs.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Fees Namespace
 * @namespace _IFees
 * @description Provides a comprehensive set of types for managing network fees
 * in the Hashgraph Network. This namespace includes:
 * - Individual transaction fee structures
 * - Complete fee schedule responses
 * - Gas cost tracking for different operations
 * Used to maintain and track transaction costs across the network.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the fees namespace
 * import { _IFees } from '@hashgraph/sdk';
 * 
 * // Define a network fee response
 * const feeResponse: _IFees.IResponse = {
 *   fees: [
 *     {
 *       gas: 500000,
 *       transaction_type: "CRYPTO_TRANSFER"
 *     }
 *   ],
 *   timestamp: "2023-01-01T12:00:00.000Z"
 * };
 * ```
 */
export namespace _IFees {
    /**
     * Network Fee Information
     * @type {_IFee}
     * @description Represents detailed fee information for a specific transaction type.
     * Includes:
     * - Gas cost for the operation
     * - Transaction type identifier
     * Used for calculating transaction costs and gas estimations.
     * @see {@link _IFee}
     * @memberof _IFees
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Define a network fee
     * const fee: _IFees.IFee = {
     *   gas: 500000,
     *   transaction_type: "CRYPTO_TRANSFER"
     * };
     * ```
     */
    export type IFee = _IFee;

    /**
     * Network Fees Response
     * @type {_IResponse}
     * @description Represents the complete network fee schedule response including:
     * - Array of all transaction fees
     * - Response timestamp
     * Used to track current fee schedules across all transaction types.
     * @see {@link _IResponse}
     * @memberof _IFees
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Access specific fee from response
     * const transferFee = feeResponse.fees.find(
     *   fee => fee.transaction_type === "CRYPTO_TRANSFER"
     * );
     * ```
     */
    export type IResponse = _IResponse;
}
