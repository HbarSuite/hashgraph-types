import { _IAmount } from "./validators.token.fee.amount.interface"
import { _IFee } from "./validators.token.fee.interface"
import { _IFixedFee } from "./validators.token.fee.fixed.interface"

/**
 * Royalty Fee Interface
 * @description
 * Defines the structure for representing royalty-based fees in token operations.
 * This interface extends the base Fee interface and specifies a fractional amount
 * for royalty payments and a fallback fixed fee when royalty cannot be assessed.
 * 
 * @remarks
 * Royalty fees are commonly used in NFT and digital asset transactions to ensure
 * that original creators or rights holders receive compensation for secondary sales
 * or transfers of their assets. The royalty is typically calculated as a percentage
 * of the transaction value, with a fixed fallback fee as a safety mechanism.
 * 
 * Used in:
 * - NFT marketplace transactions
 * - Digital content royalty distributions
 * - Creator compensation models
 * - Secondary sales of tokenized assets
 * 
 * @example
 * ```typescript
 * const royaltyFee: _IRoyaltyFee = {
 *   collector_account_id: "0.0.12345",        // Creator's account
 *   all_collectors_are_exempt: false,
 *   amount: { numerator: 10, denominator: 100 }, // 10% royalty
 *   fallback_fee: {                           // Fallback fee if royalty can't be calculated
 *     amount: 5,
 *     denominating_token_id: "0.0.123456",
 *     collector_account_id: "0.0.12345",
 *     all_collectors_are_exempt: false
 *   }
 * };
 * ```
 * 
 * @interface _IRoyaltyFee
 * @extends {_IFee}
 * @since 2.0.0
 */
export interface _IRoyaltyFee extends _IFee {
    /**
     * The fractional amount to be charged as a royalty fee
     * @description
     * Represents the percentage of the transaction value to be paid as a royalty,
     * expressed as a fraction with numerator and denominator.
     * 
     * @type {_IAmount}
     * @memberof _IRoyaltyFee
     * @example
     * ```typescript
     * // 2.5% royalty
     * amount: { numerator: 25, denominator: 1000 }
     * ```
     */
    amount: _IAmount;
    
    /**
     * The fixed fee to be charged when royalty cannot be assessed
     * @description
     * Provides a fallback mechanism when the royalty percentage cannot be applied,
     * such as when the transaction value is unknown or in certain types of transfers.
     * This ensures that creators still receive compensation even when percentage-based
     * calculations aren't possible.
     * 
     * @type {_IFixedFee}
     * @memberof _IRoyaltyFee
     * @example
     * ```typescript
     * fallback_fee: {
     *   amount: 10,
     *   denominating_token_id: "0.0.789012",
     *   collector_account_id: "0.0.12345",
     *   all_collectors_are_exempt: false
     * }
     * ```
     */
    fallback_fee: _IFixedFee;
}