/**
 * @file hashgraph.restful.custom_fees.royalty.fallback.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IRoyalty
 * @description Defines the structure for fallback fees in royalty configurations
 */

/**
 * Interface representing a royalty fallback fee
 * @interface _IFallback
 * @description Defines the structure for a fixed fee that applies when percentage-based
 * royalty calculations cannot be processed. This ensures rights holders receive
 * compensation even in error scenarios.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Fallback fee in HBAR
 * const hbarFallback: _IFallback = {
 *   amount: 10,
 *   denominating_token_id: null
 * };
 * 
 * // Fallback fee in custom token
 * const tokenFallback: _IFallback = {
 *   amount: 100,
 *   denominating_token_id: "0.0.1234"
 * };
 * ```
 */
export interface _IFallback {
    /**
     * Fallback fee amount
     * @property {number} amount
     * @description The fixed amount to charge when royalty calculation fails,
     * specified in the smallest denomination of the token (tinybar for HBAR,
     * smallest unit for custom tokens)
     * @type {number}
     * @memberof _IFallback
     * @optional
     */
    amount?: number;

    /**
     * Fee denomination token
     * @property {string | null} denominating_token_id
     * @description The Hedera token ID that denominates the fallback fee amount,
     * in format 0.0.x. If null, the fee is denominated in HBAR
     * @type {string | null}
     * @memberof _IFallback
     * @optional
     */
    denominating_token_id?: string | null;
}