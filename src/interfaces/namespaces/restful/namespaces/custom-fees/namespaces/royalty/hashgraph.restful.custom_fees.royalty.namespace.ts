/**
 * @file hashgraph.restful.custom_fees.royalty.namespace.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IRoyalty
 * @description Defines the namespace for royalty fee configurations in the Hedera REST API
 */

import { _IFallback } from './interfaces/hashgraph.restful.custom_fees.royalty.fallback.interface'
import { _IAmount } from './interfaces/hashgraph.restful.custom_fees.royalty.amount.interface'
import { _IEntity } from './interfaces/hashgraph.restful.custom_fees.royalty.entity.interface'

/**
 * Namespace for royalty fee configurations
 * @namespace _IRoyalty
 * @description Provides type definitions and interfaces for managing royalty-based fee structures
 * in token transactions. Royalty fees enable automatic payment distribution to rights holders,
 * with support for percentage-based calculations and fallback mechanisms.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const royaltyFee: _IRoyalty.IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: { numerator: 5, denominator: 100 }, // 5% royalty
 *   collector_account_id: "0.0.1234",
 *   fallback_fee: { 
 *     amount: 10,
 *     denominating_token_id: "0.0.5678"
 *   }
 * };
 * ```
 */
export namespace _IRoyalty {
    /**
     * Type definition for royalty fee entities
     * @type {_IEntity}
     * @description Represents the structure of a royalty fee configuration, including:
     * - The royalty percentage using numerator/denominator
     * - The collector account that receives royalties
     * - Settings for collector exemptions
     * - Fallback fee configuration for error cases
     * @memberof _IRoyalty
     * @see {@link _IEntity} for detailed property definitions
     */
    export type IEntity = _IEntity

    /**
     * Type definition for fallback fees
     * @type {_IFallback}
     * @description Represents a fixed fee configuration that applies when the
     * percentage-based royalty calculation cannot be processed, ensuring
     * rights holders still receive compensation in error scenarios.
     * @memberof _IRoyalty
     * @see {@link _IFallback} for detailed property definitions
     */
    export type IFallback = _IFallback

    /**
     * Type definition for royalty amounts
     * @type {_IAmount}
     * @description Represents a percentage value using a numerator/denominator pair.
     * For example, a 5% royalty would be represented as {numerator: 5, denominator: 100}.
     * This structure ensures precise calculations without floating-point errors.
     * @memberof _IRoyalty
     * @see {@link _IAmount} for detailed property definitions
     */
    export type IAmount = _IAmount
}