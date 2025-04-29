import { _IAmount } from "./validators.token.fee.amount.interface";
import { _IFee } from "./validators.token.fee.interface";

/**
 * Fractional Fee Interface
 * @description
 * Defines the structure for representing percentage-based fees in token operations.
 * This interface extends the base Fee interface and specifies a fractional amount,
 * minimum and maximum fee limits, and whether the fee applies to net transfers.
 * 
 * @remarks
 * Fractional fees are used when a percentage of the transaction value needs to be
 * charged as a fee. The fee is calculated based on the fractional amount (numerator/denominator)
 * and can be constrained by minimum and maximum values. The net_of_transfers flag determines
 * whether the fee is calculated based on the net amount transferred or the gross amount.
 * 
 * Used in:
 * - Token transfer fees
 * - Transaction fees
 * - Service fees
 * - Revenue sharing models
 * 
 * @example
 * ```typescript
 * const fractionalFee: _IFractionalFee = {
 *   amount: { numerator: 5, denominator: 100 }, // 5% fee
 *   minimum: 1,                                 // Minimum fee of 1 token
 *   maximum: 100,                               // Maximum fee of 100 tokens
 *   net_of_transfers: false                     // Fee applies to gross amount
 * };
 * ```
 * 
 * @interface _IFractionalFee
 * @extends {_IFee}
 * @since 2.0.0
 */
export interface _IFractionalFee extends _IFee {
    /**
     * The fractional amount to be charged as a fee
     * @description
     * Represents the percentage of the transaction value to be paid as a fee,
     * expressed as a fraction with numerator and denominator.
     * 
     * @type {_IAmount}
     * @memberof _IFractionalFee
     */
    amount: _IAmount;
    
    /**
     * The minimum fee amount that can be charged
     * @description
     * Sets a floor for the fee amount. If the calculated fractional fee is less than
     * this value, the minimum fee will be charged instead.
     * 
     * @type {number}
     * @memberof _IFractionalFee
     */
    minimum: number;
    
    /**
     * The maximum fee amount that can be charged
     * @description
     * Sets a ceiling for the fee amount. If the calculated fractional fee exceeds
     * this value, the maximum fee will be charged instead.
     * 
     * @type {number}
     * @memberof _IFractionalFee
     */
    maximum: number;
    
    /**
     * Determines if the fee applies to net transfers
     * @description
     * When true, the fee is calculated based on the net amount transferred
     * (excluding other fees). When false, the fee is calculated based on the
     * gross amount (including other fees).
     * 
     * @type {boolean}
     * @memberof _IFractionalFee
     */
    net_of_transfers: boolean;
}