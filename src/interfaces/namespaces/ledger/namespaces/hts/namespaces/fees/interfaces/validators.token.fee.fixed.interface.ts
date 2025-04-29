import { _IFee } from "./validators.token.fee.interface";

/**
 * Fixed Fee Interface
 * @description
 * Defines the structure for representing fixed fee amounts in token operations.
 * This interface extends the base Fee interface and specifies a concrete amount
 * and the token ID in which the fee should be paid.
 * 
 * @remarks
 * Fixed fees are used when a specific, unchanging amount needs to be charged for
 * token operations, regardless of the transaction value. The fee can be denominated
 * in any token specified by its ID.
 * 
 * Used in:
 * - Token creation fees
 * - Token transfer fees
 * - Administrative operation fees
 * - As fallback fees for other fee types
 * 
 * @example
 * ```typescript
 * const fixedFee: _IFixedFee = {
 *   amount: 10,
 *   denominating_token_id: "0.0.123456"
 * };
 * ```
 * 
 * @interface _IFixedFee
 * @extends {_IFee}
 * @since 2.0.0
 */
export interface _IFixedFee extends _IFee {
    /**
     * The fixed amount to be charged as a fee
     * @description
     * Represents the exact quantity of tokens to be paid as a fee
     * for the token operation.
     * 
     * @type {number}
     * @memberof _IFixedFee
     */
    amount: number;
    
    /**
     * The ID of the token in which the fee is denominated
     * @description
     * Specifies which token should be used to pay the fee.
     * This is represented as a string in the format "0.0.{tokenNum}".
     * 
     * @type {string}
     * @memberof _IFixedFee
     */
    denominating_token_id: string;
}