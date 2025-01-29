/**
 * @file hashgraph.restful.custom_fees.fees.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees
 * @description Defines the structure for custom fee configurations in the Hedera REST API
 */

import { _ICustomFees } from '../hashgraph.restful.custom_fees.namespace'

/**
 * Interface representing custom fee configurations
 * @interface _IFees
 * @description Defines the comprehensive structure for custom fees that can be applied to token transactions.
 * This includes support for fixed amounts, percentage-based fees, and royalty payments.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const fees: _IFees = {
 *   created_timestamp: "2023-01-01T12:00:00Z",
 *   fixed_fees: [{
 *     amount: 100,
 *     collector_account_id: "0.0.1234",
 *     denominating_token_id: "0.0.5678"
 *   }],
 *   fractional_fees: [{
 *     percentage: 2.5,
 *     collector_account_id: "0.0.1234",
 *     minimum: 1,
 *     maximum: 1000
 *   }],
 *   royalty_fees: [{
 *     percentage: 5.0,
 *     fallback_fee: 10,
 *     collector_account_id: "0.0.1234"
 *   }]
 * };
 * ```
 */
export interface _IFees {
    /**
     * Creation timestamp
     * @property {string} created_timestamp
     * @description ISO 8601 timestamp indicating when these custom fee configurations were created
     * @type {string}
     * @memberof _IFees
     * @optional
     */
    created_timestamp?: string

    /**
     * Fixed fee configurations
     * @property {Array<_ICustomFees.IFixed.IEntity>} fixed_fees
     * @description Array of fixed fee configurations that specify exact amounts to be charged
     * for token transactions. Each fixed fee can be denominated in HBAR or another token
     * @type {Array<_ICustomFees.IFixed.IEntity>}
     * @memberof _IFees
     * @optional
     */
    fixed_fees?: Array<_ICustomFees.IFixed.IEntity>

    /**
     * Fractional fee configurations
     * @property {Array<_ICustomFees.IFractional.IEntity>} fractional_fees
     * @description Array of percentage-based fee configurations. These fees are calculated
     * as a percentage of the transaction amount, with optional minimum and maximum limits
     * @type {Array<_ICustomFees.IFractional.IEntity>}
     * @memberof _IFees
     * @optional
     */
    fractional_fees?: Array<_ICustomFees.IFractional.IEntity>

    /**
     * Royalty fee configurations
     * @property {Array<_ICustomFees.IRoyalty.IEntity>} royalty_fees
     * @description Array of royalty fee configurations for compensating token creators
     * or rights holders. These can include percentage-based fees with fallback amounts
     * @type {Array<_ICustomFees.IRoyalty.IEntity>}
     * @memberof _IFees
     * @optional
     */
    royalty_fees?: Array<_ICustomFees.IRoyalty.IEntity>
}