/**
 * @file hashgraph.restful.custom_fees.fractional.namespace.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IFractional
 * @description Defines the namespace for fractional fee configurations in the Hedera REST API
 */

import { _IAmount } from './interfaces/hashgraph.restful.custom_fees.fractional.amount.interface'
import { _IEntity } from './interfaces/hashgraph.restful.custom_fees.fractional.entity.interface'

/**
 * Namespace for fractional fee configurations
 * @namespace _IFractional
 * @description Provides type definitions and interfaces for managing percentage-based fee structures
 * in token transactions. Fractional fees are calculated as a percentage of the transaction amount,
 * with support for minimum/maximum limits and net transfer calculations.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const fractionalFee: _IFractional.IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: { numerator: 1, denominator: 100 }, // 1% fee
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678",
 *   maximum: 1000,
 *   minimum: 10,
 *   net_of_transfers: false
 * };
 * ```
 */
export namespace _IFractional {
    /**
     * Type definition for fractional fee entities
     * @type {_IEntity}
     * @description Represents the structure of a percentage-based fee configuration, including:
     * - The fee percentage using numerator/denominator
     * - The collector account that receives the fee
     * - Minimum and maximum fee thresholds
     * - Settings for net transfer calculations and exemptions
     * @memberof _IFractional
     * @see {@link _IEntity} for detailed property definitions
     */
    export type IEntity = _IEntity

    /**
     * Type definition for fractional amounts
     * @type {_IAmount}
     * @description Represents a percentage value using a numerator/denominator pair.
     * For example, a 1% fee would be represented as {numerator: 1, denominator: 100}.
     * This structure ensures precise fractional calculations without floating-point errors.
     * @memberof _IFractional
     * @see {@link _IAmount} for detailed property definitions
     */
    export type IAmount = _IAmount
}