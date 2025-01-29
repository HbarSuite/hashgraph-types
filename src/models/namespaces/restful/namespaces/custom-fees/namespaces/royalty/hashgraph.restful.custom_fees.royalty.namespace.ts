import { _Fallback } from './models/hashgraph.restful.custom_fees.royalty.models.fallback.model'
import { _Amount } from './models/hashgraph.restful.custom_fees.royalty.models.amount.model'
import { _Entity } from './models/hashgraph.restful.custom_fees.royalty.models.entity.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file royalty.namespace.ts
 * @namespace _Royalty
 * @description Namespace for royalty fee related types and models within the Hashgraph network.
 * Contains definitions for royalty fee entities, amounts and fallback fees that can be applied 
 * to token transactions. Royalty fees are percentage-based fees with fallback options for cases
 * where the percentage calculation cannot be applied.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Entity} for the royalty fee entity implementation
 * @see {@link _Amount} for the royalty amount implementation
 * @see {@link _Fallback} for the fallback fee implementation
 * @see {@link _CustomFees} for the parent namespace
 * 
 * @example
 * // Create a new royalty fee entity with 5% royalty and fallback
 * const royaltyFee = new _Royalty.Entity({
 *   amount: new _Royalty.Amount({ numerator: 5, denominator: 100 }),
 *   collector_account_id: "0.0.1234",
 *   fallback_fee: new _Royalty.Fallback({ amount: 10 }),
 *   all_collectors_are_exempt: false
 * });
 */
export namespace _Royalty {
    /**
     * Royalty Fee Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents a royalty fee configuration in the Hashgraph network.
     * This class extends the base Entity model to provide royalty fee functionality including:
     * - Fee amount specification with numerator/denominator
     * - Collector account assignment
     * - Fallback fee settings for cases where percentage fee cannot be applied
     * - Collector exemption rules
     * @see {@link _Entity} for the complete implementation details
     * @see {@link Amount} for the percentage calculation structure
     * @see {@link Fallback} for the fallback fee configuration
     * 
     * @example
     * // Create a 2.5% royalty fee with fallback
     * const fee = new Entity({
     *   amount: new Amount({ numerator: 25, denominator: 1000 }),
     *   collector_account_id: "0.0.1234",
     *   fallback_fee: new Fallback({ amount: 100 })
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Royalty.Entity'
    })
    export class Entity extends _Entity { }

    /**
     * Fallback Fee Class
     * @class Fallback
     * @extends {_Fallback}
     * @description Represents the fallback fee configuration used when royalty fees cannot be assessed.
     * This class extends the base Fallback model to define:
     * - Fixed amount fallback fees
     * - Token denomination for fallback fees
     * @see {@link _Fallback} for the complete implementation details
     * 
     * @example
     * // Create a fallback fee of 10 units in token 0.0.1234
     * const fallbackFee = new Fallback({
     *   amount: 10,
     *   denominating_token_id: "0.0.1234"
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Royalty.Fallback'
    })
    export class Fallback extends _Fallback { }

    /**
     * Royalty Fee Amount Class
     * @class Amount
     * @extends {_Amount}
     * @description Represents the fractional amount structure used to calculate royalty fees.
     * This class extends the base Amount model to define the fraction used for fee calculation:
     * - Numerator: The top number in the fraction (e.g., 1 in 1/100 for 1%)
     * - Denominator: The bottom number in the fraction (e.g., 100 in 1/100 for 1%)
     * @see {@link _Amount} for the complete implementation details
     * 
     * @example
     * // Create a 5% royalty amount
     * const amount = new Amount({
     *   numerator: 5,
     *   denominator: 100
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Royalty.Amount'
    })
    export class Amount extends _Amount { }
}