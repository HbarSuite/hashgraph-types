import { _IAmount } from './hashgraph.restful.custom_fees.fractional.amount.interface'

/**
 * @file hashgraph.restful.custom_fees.fractional.entity.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IFractional
 * @description Defines the structure for fractional fee entities in the Hedera REST API
 */

/**
 * Interface representing a fractional fee configuration
 * @interface _IEntity
 * @description Defines the structure for percentage-based fees in token transactions.
 * Fractional fees are calculated as a percentage of the transaction amount, with
 * support for minimum/maximum thresholds and various calculation options.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const percentageFee: _IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: { numerator: 1, denominator: 100 }, // 1% fee
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678",
 *   maximum: 1000, // Cap at 1000 units
 *   minimum: 10,   // Floor at 10 units
 *   net_of_transfers: false
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Collector exemption flag
     * @property {boolean} all_collectors_are_exempt
     * @description Indicates whether fee collectors are exempt from paying this
     * fractional fee when they participate in transactions
     * @type {boolean}
     * @memberof _IEntity
     * @optional
     */
    all_collectors_are_exempt?: boolean;

    /**
     * Fee percentage specification
     * @property {_IAmount} amount
     * @description Specifies the fee percentage using a numerator/denominator pair
     * for precise fractional calculations without floating-point errors
     * @type {_IAmount}
     * @memberof _IEntity
     * @optional
     */
    amount?: _IAmount;

    /**
     * Fee collector account
     * @property {string | null} collector_account_id
     * @description The Hedera account ID that will receive the collected fees,
     * in format 0.0.x. If null, no specific collector is designated
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    collector_account_id?: string | null;

    /**
     * Fee denomination token
     * @property {string | null} denominating_token_id
     * @description The Hedera token ID that denominates the fee amount,
     * in format 0.0.x. If null, the fee is denominated in HBAR
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    denominating_token_id?: string | null;

    /**
     * Maximum fee threshold
     * @property {number | null} maximum
     * @description The upper limit for the calculated fee amount. This caps the
     * fee regardless of the transaction amount to prevent excessive charges
     * @type {number | null}
     * @memberof _IEntity
     * @optional
     */
    maximum?: number | null;

    /**
     * Minimum fee threshold
     * @property {number} minimum
     * @description The lower limit for the calculated fee amount. This ensures
     * a base fee level even for very small transactions
     * @type {number}
     * @memberof _IEntity
     * @optional
     */
    minimum?: number;

    /**
     * Net transfer calculation flag
     * @property {boolean} net_of_transfers
     * @description Determines whether the fee should be calculated on the net
     * transfer amount (true) or the gross transfer amount (false)
     * @type {boolean}
     * @memberof _IEntity
     * @optional
     */
    net_of_transfers?: boolean;
}