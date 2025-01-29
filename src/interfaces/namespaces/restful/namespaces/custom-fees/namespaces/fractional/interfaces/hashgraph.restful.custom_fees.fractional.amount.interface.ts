/**
 * @file hashgraph.restful.custom_fees.fractional.amount.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IFractional
 * @description Defines the structure for representing fractional amounts in the Hedera REST API
 */

/**
 * Interface representing a fractional amount
 * @interface _IAmount
 * @description Defines the structure for specifying percentage-based values using
 * numerator/denominator pairs. This approach ensures precise fractional calculations
 * without floating-point arithmetic errors.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Representing 1% as a fraction
 * const onePercent: _IAmount = {
 *   numerator: 1,
 *   denominator: 100
 * };
 * 
 * // Representing 0.5% as a fraction
 * const halfPercent: _IAmount = {
 *   numerator: 5,
 *   denominator: 1000
 * };
 * ```
 */
export interface _IAmount {
    /**
     * Numerator value
     * @property {number} numerator
     * @description The top number in the fraction that represents the percentage.
     * Together with the denominator, defines the exact percentage value
     * (e.g., numerator 1 with denominator 100 equals 1%).
     * @type {number}
     * @memberof _IAmount
     * @optional
     */
    numerator?: number;

    /**
     * Denominator value
     * @property {number} denominator
     * @description The bottom number in the fraction that represents the percentage.
     * Together with the numerator, defines the exact percentage value
     * (e.g., numerator 1 with denominator 100 equals 1%).
     * @type {number}
     * @memberof _IAmount
     * @optional
     */
    denominator?: number;
}