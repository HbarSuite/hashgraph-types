import { _IFixedFee } from "./validators.token.fee.fixed.interface"
import { _IFractionalFee } from "./validators.token.fee.fractional.interface"
import { _IRoyaltyFee } from "./validators.token.fee.royalty.interface"

/**
 * Custom Fees Interface
 * @description
 * Defines the structure for representing custom fee configurations in token operations.
 * This interface aggregates different types of fees that can be applied to token transactions.
 * 
 * @remarks
 * Custom fees provide flexibility in defining various fee structures for token operations.
 * They can include fixed fees (specific amount), fractional fees (percentage-based),
 * and royalty fees (for creators/owners).
 * 
 * Used in:
 * - Token creation
 * - Token transfers
 * - Token operations requiring custom fee structures
 * 
 * @example
 * ```typescript
 * const tokenFees: _ICustomFees = {
 *   fixed_fees: [
 *     { amount: 10, denominating_token_id: "0.0.123456" }
 *   ],
 *   fractional_fees: [
 *     { 
 *       amount: { numerator: 5, denominator: 100 },
 *       minimum: 1,
 *       maximum: 100,
 *       net_of_transfers: false
 *     }
 *   ],
 *   royalty_fees: []
 * };
 * ```
 * 
 * @interface _ICustomFees
 * @since 2.0.0
 */
export interface _ICustomFees {
    /**
     * Array of fixed fees to be applied
     * @description
     * Fixed fees represent specific amounts to be charged for token operations.
     * Each fixed fee specifies an exact amount and the token in which it should be paid.
     * 
     * @type {Array<_IFixedFee>}
     * @memberof _ICustomFees
     */
    fixed_fees: Array<_IFixedFee>
    
    /**
     * Array of fractional fees to be applied
     * @description
     * Fractional fees represent percentage-based fees calculated from the transaction value.
     * These fees are defined as fractions with configurable minimum and maximum amounts.
     * 
     * @type {Array<_IFractionalFee>}
     * @memberof _ICustomFees
     */
    fractional_fees: Array<_IFractionalFee>
    
    /**
     * Array of royalty fees to be applied
     * @description
     * Royalty fees are specialized fees typically used to compensate creators or rights holders.
     * They include a fractional component and a fallback fixed fee mechanism.
     * 
     * @type {Array<_IRoyaltyFee>}
     * @memberof _ICustomFees
     */
    royalty_fees: Array<_IRoyaltyFee>
}