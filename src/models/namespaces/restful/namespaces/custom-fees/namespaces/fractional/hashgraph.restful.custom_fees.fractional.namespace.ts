import { _Amount } from './models/hashgraph.restful.custom_fees.fractional.models.amount.model'
import { _Entity } from './models/hashgraph.restful.custom_fees.fractional.models.entity.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file fractional.namespace.ts
 * @namespace _Fractional
 * @description Namespace for fractional fee related types and models within the Hashgraph network.
 * Contains definitions for fractional (percentage-based) fee entities and amounts that can be applied
 * to token transactions. Fractional fees are calculated as a percentage of the transaction value.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Entity} for the fractional fee entity implementation
 * @see {@link _Amount} for the fractional amount implementation
 * @see {@link _CustomFees} for the parent namespace
 * 
 * @example
 * // Create a new fractional fee entity with 1% fee
 * const fractionalFee = new _Fractional.Entity({
 *   amount: new _Fractional.Amount({ numerator: 1, denominator: 100 }),
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678",
 *   maximum: 1000,
 *   minimum: 10,
 *   net_of_transfers: false,
 *   all_collectors_are_exempt: false
 * });
 */
export namespace _Fractional {
    /**
     * Fractional Fee Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents a fractional fee configuration in the Hashgraph network.
     * This class extends the base Entity model to provide fractional fee functionality including:
     * - Fee amount specification with numerator/denominator
     * - Collector account assignment
     * - Token denomination settings
     * - Maximum and minimum fee limits
     * - Net transfer calculation options
     * - Collector exemption rules
     * @see {@link _Entity} for the complete implementation details
     * @see {@link Amount} for the fractional amount structure
     * 
     * @example
     * // Create a 2.5% fee with limits
     * const fee = new Entity({
     *   amount: new Amount({ numerator: 25, denominator: 1000 }), // 2.5%
     *   maximum: 1000, // Maximum fee of 1000 units
     *   minimum: 10, // Minimum fee of 10 units
     *   collector_account_id: "0.0.1234",
     *   net_of_transfers: true
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Fractional.Entity'
    })
    export class Entity extends _Entity { }

    /**
     * Fractional Fee Amount Class
     * @class Amount
     * @extends {_Amount}
     * @description Represents the fractional amount structure used to calculate fees.
     * This class extends the base Amount model to define the fraction used for fee calculation:
     * - Numerator: The top number in the fraction (e.g., 1 in 1/100 for 1%)
     * - Denominator: The bottom number in the fraction (e.g., 100 in 1/100 for 1%)
     * @see {@link _Amount} for the complete implementation details
     * 
     * @example
     * // Create a 2.5% fee amount
     * const amount = new Amount({
     *   numerator: 25,
     *   denominator: 1000
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Fractional.Amount'
    })
    export class Amount extends _Amount { }
}