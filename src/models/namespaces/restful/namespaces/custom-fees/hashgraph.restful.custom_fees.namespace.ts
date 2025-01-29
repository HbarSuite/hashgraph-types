import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _AssessedCustomFee } from './models/hashgraph.restful.custom_fees.models.assessed-custom-fee.model'
import { _Fees } from './models/hashgraph.restful.custom_fees.models.fees.model'
import { _Fixed } from './namespaces/fixed/hashgraph.restful.custom_fees.fixed.namespace'
import { _Fractional } from './namespaces/fractional/hashgraph.restful.custom_fees.fractional.namespace'
import { _Royalty } from './namespaces/royalty/hashgraph.restful.custom_fees.royalty.namespace'

/**
 * @file custom-fees.namespace.ts
 * @namespace _CustomFees
 * @description Namespace containing all custom fee related types and models for the Hashgraph network.
 * This includes fixed fees, fractional fees, royalty fees, and assessed custom fees.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Fixed} for fixed fee implementations
 * @see {@link _Fractional} for fractional fee implementations
 * @see {@link _Royalty} for royalty fee implementations
 * 
 * @example
 * // Create a new fixed fee
 * const fixedFee = new _CustomFees.Fixed.Entity({
 *   amount: 100,
 *   collector_account_id: "0.0.1234"
 * });
 * 
 * // Create a new fractional fee
 * const fractionalFee = new _CustomFees.Fractional.Entity({
 *   amount: new _CustomFees.Fractional.Amount({ numerator: 1, denominator: 100 }),
 *   collector_account_id: "0.0.1234"
 * });
 */
export namespace _CustomFees {
    /**
     * Fees Class
     * @class Fees
     * @extends {_Fees}
     * @description Represents the complete fee structure for a token or transaction.
     * Can include any combination of fixed, fractional, and royalty fees.
     * @see {@link Fixed} for fixed fee details
     * @see {@link Fractional} for fractional fee details
     * @see {@link Royalty} for royalty fee details
     * 
     * @example
     * const fees = new Fees({
     *   fixed_fees: [fixedFee],
     *   fractional_fees: [fractionalFee],
     *   royalty_fees: [royaltyFee]
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Fees'
    })
    export class Fees extends _Fees { }

    /**
     * Fixed Fee Namespace
     * @namespace Fixed
     * @description Contains models and types for fixed fee amounts in the Hashgraph network.
     * Fixed fees are static amounts charged per transaction.
     * @see {@link Entity} for the fixed fee entity implementation
     * 
     * @example
     * const fixedFee = new Fixed.Entity({
     *   amount: 100,
     *   collector_account_id: "0.0.1234"
     * });
     */
    export import Fixed = _Fixed

    /**
     * Fractional Fee Namespace
     * @namespace Fractional
     * @description Contains models and types for fractional (percentage-based) fees.
     * Fractional fees are calculated as a percentage of the transaction amount.
     * @see {@link Entity} for the fractional fee entity implementation
     * @see {@link Amount} for the fractional amount implementation
     * 
     * @example
     * const fractionalFee = new Fractional.Entity({
     *   amount: new Fractional.Amount({ numerator: 1, denominator: 100 }), // 1%
     *   collector_account_id: "0.0.1234"
     * });
     */
    export import Fractional = _Fractional

    /**
     * Royalty Fee Namespace
     * @namespace Royalty
     * @description Contains models and types for royalty fees in the Hashgraph network.
     * Royalty fees are special percentage-based fees with fallback options.
     * @see {@link Entity} for the royalty fee entity implementation
     * @see {@link Amount} for the royalty amount implementation
     * @see {@link Fallback} for the fallback fee implementation
     * 
     * @example
     * const royaltyFee = new Royalty.Entity({
     *   amount: new Royalty.Amount({ numerator: 5, denominator: 100 }), // 5%
     *   collector_account_id: "0.0.1234",
     *   fallback_fee: new Royalty.Fallback({ amount: 10 })
     * });
     */
    export import Royalty = _Royalty

    /**
     * Assessed Custom Fee Class
     * @class AssessedCustomFee
     * @extends {_AssessedCustomFee}
     * @description Represents a custom fee that has been assessed and calculated
     * for a specific transaction. Contains the final fee amount and recipient details.
     * @see {@link Fees} for the complete fee structure
     * 
     * @example
     * const assessedFee = new AssessedCustomFee({
     *   amount: 100,
     *   collector_account_id: "0.0.1234",
     *   effective_payer_account_ids: ["0.0.5678"]
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.AssessedCustomFee'
    })
    export class AssessedCustomFee extends _AssessedCustomFee { }
}