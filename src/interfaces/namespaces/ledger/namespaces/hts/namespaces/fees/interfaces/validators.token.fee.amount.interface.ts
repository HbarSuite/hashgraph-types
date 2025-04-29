/**
 * Token Fee Amount Interface
 * @description
 * Defines the structure for representing fractional fee amounts in token operations.
 * This interface provides a way to express fees as a fraction with numerator and denominator.
 * 
 * @remarks
 * The fraction is represented as numerator/denominator, allowing for precise fee calculations
 * that may involve decimal values. This is particularly useful for percentage-based fees
 * where exact precision is required.
 * 
 * Used in:
 * - Fractional fees
 * - Royalty fees
 * - Custom fee structures
 * 
 * @example
 * // Representing a 2.5% fee
 * const feeAmount: _IAmount = {
 *   numerator: 25,
 *   denominator: 1000
 * };
 * 
 * @interface _IAmount
 * @since 2.0.0
 */
export interface _IAmount {
    /**
     * The numerator of the fractional fee amount
     * @description
     * Represents the top part of the fraction used to calculate the fee
     * 
     * @type {number}
     * @memberof _IAmount
     */
    numerator: number;
    
    /**
     * The denominator of the fractional fee amount
     * @description
     * Represents the bottom part of the fraction used to calculate the fee
     * 
     * @type {number}
     * @memberof _IAmount
     */
    denominator: number;
}