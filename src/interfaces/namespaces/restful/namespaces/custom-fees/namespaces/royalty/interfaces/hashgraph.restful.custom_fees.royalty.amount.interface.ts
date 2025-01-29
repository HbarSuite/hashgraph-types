/**
 * @file hashgraph.restful.custom_fees.royalty.amount.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IRoyalty
 * @description Defines the structure for representing royalty percentages in the Hedera REST API
 */

/**
 * Interface representing a royalty percentage
 * @interface _IAmount
 * @description Defines the structure for specifying royalty percentages using
 * numerator/denominator pairs. This approach ensures precise calculations
 * without floating-point arithmetic errors.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Representing 5% royalty
 * const fivePercent: _IAmount = {
 *   numerator: 5,
 *   denominator: 100
 * };
 * 
 * // Representing 2.5% royalty
 * const twoPointFivePercent: _IAmount = {
 *   numerator: 25,
 *   denominator: 1000
 * };
 * ```
 */
export interface _IAmount {
    /**
     * Numerator value
     * @property {number} numerator
     * @description The top number in the fraction that represents the royalty percentage.
     * Together with the denominator, defines the exact percentage value
     * (e.g., numerator 5 with denominator 100 equals 5% royalty).
     * @type {number}
     * @memberof _IAmount
     * @optional
     */
    numerator?: number;

    /**
     * Denominator value
     * @property {number} denominator
     * @description The bottom number in the fraction that represents the royalty percentage.
     * Together with the numerator, defines the exact percentage value
     * (e.g., numerator 5 with denominator 100 equals 5% royalty).
     * @type {number}
     * @memberof _IAmount
     * @optional
     */
    denominator?: number;
}