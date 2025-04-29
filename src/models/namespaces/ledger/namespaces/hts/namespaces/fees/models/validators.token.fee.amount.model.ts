import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Token Fee Amount Class
 * @description
 * Implements the structure for representing fractional fee amounts in token operations.
 * This class provides a way to express fees as a fraction with numerator and denominator,
 * extending the IValidators.IToken.IFees.IAmount interface.
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
 * - Percentage-based transaction fees
 * - Revenue sharing models
 * 
 * @example
 * ```typescript
 * // Representing a 2.5% fee
 * const feeAmount = new _Amount();
 * feeAmount.numerator = 25;
 * feeAmount.denominator = 1000;
 * ```
 * 
 * @class _Amount
 * @implements {IHashgraph.ILedger.IHTS.IFees.IAmount}
 * @since 2.0.0
 */
export class _Amount implements IHashgraph.ILedger.IHTS.IFees.IAmount {
    /**
     * The numerator of the fractional fee amount
     * @description
     * Represents the top part of the fraction used to calculate the fee.
     * This value, when divided by the denominator, determines the actual
     * fee percentage or proportion to be applied.
     * 
     * @example
     * // For a 2.5% fee
     * amount.numerator = 25;
     * 
     * @type {number}
     * @memberof _Amount
     */
    @ApiProperty({
        description: 'The numerator of the fractional fee amount',
        type: Number,
        example: 25,
        required: true
    })
    numerator: number;
    
    /**
     * The denominator of the fractional fee amount
     * @description
     * Represents the bottom part of the fraction used to calculate the fee.
     * This value serves as the divisor for the numerator, establishing the
     * scale of the fraction. For percentage-based fees, this is typically
     * set to 100, 1000, or another power of 10 to represent precise decimal values.
     * 
     * @example
     * // For a 2.5% fee (where 25/1000 = 0.025 or 2.5%)
     * amount.denominator = 1000;
     * 
     * @type {number}
     * @memberof _Amount
     */
    @ApiProperty({
        description: 'The denominator of the fractional fee amount',
        type: Number,
        example: 1000,
        required: true
    })
    denominator: number;

    /**
     * Creates a new instance of the _Amount class
     * @description
     * Initializes a new _Amount object, optionally using values from an existing
     * IAmount object to set the numerator and denominator.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.IAmount} [amount] - Optional amount object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with default values (0/1)
     * const emptyAmount = new _Amount();
     * 
     * // Create from existing amount object
     * const existingAmount = { numerator: 25, denominator: 1000 };
     * const feeAmount = new _Amount(existingAmount);
     * ```
     */
    constructor(amount?: IHashgraph.ILedger.IHTS.IFees.IAmount) {
        this.numerator = amount?.numerator ?? 0;
        this.denominator = amount?.denominator ?? 1;
    }
}