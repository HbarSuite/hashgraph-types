/**
 * @file hashgraph.restful.custom_fees.royalty.entity.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IRoyalty
 * @description Defines the structure for royalty fee entities in the Hedera REST API
 */

import { _IFallback } from './hashgraph.restful.custom_fees.royalty.fallback.interface';
import { _IAmount } from './hashgraph.restful.custom_fees.royalty.amount.interface';

/**
 * Interface representing a royalty fee configuration
 * @interface _IEntity
 * @description Defines the structure for royalty-based fees in token transactions.
 * Royalty fees enable automatic payment distribution to rights holders, with
 * support for percentage-based calculations and fallback mechanisms.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const royaltyConfig: _IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: { 
 *     numerator: 5, 
 *     denominator: 100  // 5% royalty
 *   },
 *   collector_account_id: "0.0.1234",
 *   fallback_fee: {
 *     amount: 10,
 *     denominating_token_id: "0.0.5678"
 *   }
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Collector exemption flag
     * @property {boolean} all_collectors_are_exempt
     * @description Indicates whether fee collectors are exempt from paying
     * royalties when they participate in transactions
     * @type {boolean}
     * @memberof _IEntity
     * @optional
     */
    all_collectors_are_exempt?: boolean;

    /**
     * Royalty percentage specification
     * @property {_IAmount} amount
     * @description Specifies the royalty percentage using a numerator/denominator pair
     * for precise calculations without floating-point errors
     * @type {_IAmount}
     * @memberof _IEntity
     * @optional
     */
    amount?: _IAmount;

    /**
     * Royalty collector account
     * @property {string | null} collector_account_id
     * @description The Hedera account ID that will receive the royalty payments,
     * in format 0.0.x. If null, no specific collector is designated
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    collector_account_id?: string | null;

    /**
     * Fallback fee configuration
     * @property {_IFallback} fallback_fee
     * @description Fixed fee configuration that applies when percentage-based
     * royalty calculations cannot be processed, ensuring rights holders
     * receive compensation even in error scenarios
     * @type {_IFallback}
     * @memberof _IEntity
     * @optional
     */
    fallback_fee?: _IFallback;
}