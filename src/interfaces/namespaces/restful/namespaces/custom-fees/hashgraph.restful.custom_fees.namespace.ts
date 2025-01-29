import { _IAssessedCustomFee } from './interfaces/hashgraph.restful.custom_fees.assessed-custom-fee.interface'
import { _IFees } from './interfaces/hashgraph.restful.custom_fees.fees.interface'
import { _IFixed } from './namespaces/fixed/hashgraph.restful.custom_fees.fixed.namespace'
import { _IFractional } from './namespaces/fractional/hashgraph.restful.custom_fees.fractional.namespace'
import { _IRoyalty } from './namespaces/royalty/hashgraph.restful.custom_fees.royalty.namespace'

/**
 * @file hashgraph.restful.custom_fees.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace and types for custom fees in the Hashgraph REST API context.
 * This includes structures for fixed fees, fractional fees, royalty fees and assessed custom fees.
 * @category Namespaces
 * @subcategory Custom Fees
 * @since 2.0.0
 */

/**
 * Custom Fees Namespace
 * @namespace _ICustomFees
 * @description Namespace containing all custom fee-related types and interfaces for the Hashgraph REST API.
 * Provides comprehensive type definitions for working with various fee structures including:
 * - Fixed fees: Constant amounts charged per transaction
 * - Fractional fees: Percentage-based fees with optional limits
 * - Royalty fees: Specialized percentage fees with fallback options
 * - Assessed custom fees: Records of calculated and applied fees
 * 
 * Custom fees enable token creators to define automated fee collection during token transfers.
 * @memberof IHashgraph.IRestful
 * @category Namespaces
 * @subcategory Custom Fees
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a fixed fee configuration
 * const fixedFee: IHashgraph.IRestful.ICustomFees.IFixed.IEntity = {
 *   amount: "100",
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678"
 * };
 * 
 * // Example of creating a fractional fee configuration
 * const fractionalFee: IHashgraph.IRestful.ICustomFees.IFractional.IEntity = {
 *   percentage: "2.5",
 *   collector_account_id: "0.0.1234",
 *   minimum: "1",
 *   maximum: "100"
 * };
 * 
 * // Example of creating a royalty fee configuration
 * const royaltyFee: IHashgraph.IRestful.ICustomFees.IRoyalty.IEntity = {
 *   percentage: "5.0",
 *   collector_account_id: "0.0.1234",
 *   fallback_fee: {
 *     amount: "10",
 *     denominating_token_id: "0.0.5678"
 *   }
 * };
 * ```
 */
export namespace _ICustomFees {
    /**
     * Fees Type
     * @type {_IFees}
     * @description Represents the complete structure for custom fees in the Hashgraph network.
     * This type encompasses all possible fee configurations that can be associated with token transactions:
     * - Fixed fees
     * - Fractional fees
     * - Royalty fees
     * Each fee type has its own specific configuration parameters and collection rules.
     * @memberof _ICustomFees
     * @see {@link _IFees} for detailed property definitions
     * @since 2.0.0
     */
    export type IFees = _IFees

    /**
     * Fixed Fee Type
     * @type {_IFixed}
     * @description Represents fixed fee structures in the Hashgraph network.
     * Fixed fees specify a constant amount to be charged for token transactions, with support for:
     * - Custom token denominations
     * - Designated collector accounts
     * - Specific amount configurations
     * These fees remain constant regardless of the transaction value.
     * @memberof _ICustomFees
     * @see {@link _IFixed} for detailed namespace contents
     * @since 2.0.0
     */
    export import IFixed = _IFixed

    /**
     * Fractional Fee Type
     * @type {_IFractional}
     * @description Represents fractional (percentage-based) fee structures in the Hashgraph network.
     * Fractional fees calculate charges based on a percentage of the transaction amount, supporting:
     * - Percentage-based calculations
     * - Minimum fee thresholds
     * - Maximum fee caps
     * - Net amount transfer calculations
     * Ideal for scenarios requiring proportional fee assessment.
     * @memberof _ICustomFees
     * @see {@link _IFractional} for detailed namespace contents
     * @since 2.0.0
     */
    export import IFractional = _IFractional

    /**
     * Royalty Fee Type
     * @type {_IRoyalty}
     * @description Represents royalty fee structures in the Hashgraph network.
     * Royalty fees are specialized percentage-based fees that include:
     * - Percentage-based calculations
     * - Fallback fee mechanisms
     * - Rights holder compensation configurations
     * - Collector account specifications
     * Particularly useful for NFT marketplaces and content creator compensation.
     * @memberof _ICustomFees
     * @see {@link _IRoyalty} for detailed namespace contents
     * @since 2.0.0
     */
    export import IRoyalty = _IRoyalty

    /**
     * Assessed Custom Fee Type
     * @type {_IAssessedCustomFee}
     * @description Represents an assessed custom fee on the Hashgraph network.
     * This type defines the structure of a fee after calculation and assessment, including:
     * - Calculated fee amount
     * - Collector account information
     * - Fee assessment details
     * - Token denomination data
     * Used to track and verify fee applications in transactions.
     * @memberof _ICustomFees
     * @see {@link _IAssessedCustomFee} for detailed property definitions
     * @since 2.0.0
     */
    export type IAssessedCustomFee = _IAssessedCustomFee
}