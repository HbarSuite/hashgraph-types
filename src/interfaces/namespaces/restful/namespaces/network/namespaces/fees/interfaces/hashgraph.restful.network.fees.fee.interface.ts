/**
 * @file hashgraph.restful.network.fees.fee.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for individual network fee information in the Hashgraph Network REST API.
 * This interface represents the gas costs associated with different transaction types.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Fee Interface
 * @interface _IFee
 * @description Represents the fee structure for a specific transaction type on the Hashgraph network.
 * This interface provides information about the gas costs associated with different operations,
 * enabling applications to calculate transaction costs and manage fee estimations.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a network fee entry
 * const fee: _IFee = {
 *   gas: 500000,              // Gas units required
 *   transaction_type: "CRYPTO_TRANSFER"  // Type of transaction
 * };
 * 
 * // Example of using fee information
 * function estimateCost(fee: _IFee, gasPrice: number): number {
 *   return fee.gas * gasPrice;
 * }
 * ```
 */
export interface _IFee {
    /**
     * Gas Amount
     * @type {number}
     * @description The amount of gas required for this type of transaction.
     * Gas is the computational cost unit used to price operations on the network.
     * Properties:
     * - Must be a non-negative integer
     * - Represents computational complexity
     * - Used to calculate transaction fees
     * @required true
     * @minimum 0
     * @example 500000
     * @memberof _IFee
     * @since 2.0.0
     */
    gas: number;

    /**
     * Transaction Type
     * @type {string}
     * @description The type of transaction this fee applies to.
     * Common types include:
     * - CRYPTO_TRANSFER: Basic cryptocurrency transfers
     * - CONTRACT_CALL: Smart contract function calls
     * - TOKEN_MINT: Token minting operations
     * - TOKEN_BURN: Token burning operations
     * - CONSENSUS_SUBMIT_MESSAGE: Consensus service messages
     * @required true
     * @example "CRYPTO_TRANSFER"
     * @memberof _IFee
     * @since 2.0.0
     */
    transaction_type: string;
}
