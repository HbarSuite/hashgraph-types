/**
 * @file hashgraph.restful.custom_fees.fixed.entity.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IFixed
 * @description Defines the structure for fixed fee entities in the Hedera REST API
 */

/**
 * Interface representing a fixed fee configuration
 * @interface _IEntity
 * @description Defines the structure of a fixed fee that can be applied to token transactions.
 * Fixed fees specify exact amounts to be charged, with support for different token denominations,
 * collector accounts, and exemption rules.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const fixedFee: _IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678"
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Collector exemption flag
     * @property {boolean} all_collectors_are_exempt
     * @description Indicates whether all fee collectors are exempt from paying this fixed fee.
     * When true, accounts designated as fee collectors will not be charged this fee.
     * @type {boolean}
     * @memberof _IEntity
     * @optional
     */
    all_collectors_are_exempt?: boolean;

    /**
     * Fee amount
     * @property {number} amount
     * @description The exact amount of the fixed fee in the smallest denomination of the
     * specified token (tinybar for HBAR, smallest unit for custom tokens)
     * @type {number}
     * @memberof _IEntity
     * @optional
     */
    amount?: number;

    /**
     * Fee collector account
     * @property {string | null} collector_account_id
     * @description The Hedera account ID that will receive the collected fees, in format 0.0.x.
     * If null, no specific collector is designated.
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    collector_account_id?: string | null;

    /**
     * Fee denomination token
     * @property {string | null} denominating_token_id
     * @description The Hedera token ID that denominates the fee amount, in format 0.0.x.
     * If null, the fee is denominated in HBAR.
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    denominating_token_id?: string | null;
}