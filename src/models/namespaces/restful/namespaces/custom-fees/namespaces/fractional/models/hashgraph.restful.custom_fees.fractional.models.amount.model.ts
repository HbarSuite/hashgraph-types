import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file amount.model.ts
 * @class _Amount
 * @description Represents the fractional amount structure used for percentage-based fees in the Hashgraph network.
 * This class defines the numerator and denominator components that together specify a percentage value
 * for fee calculations (e.g., 1/100 for 1%).
 * @implements {IHashgraph.IRestful.ICustomFees.IFractional.IAmount}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Fractional} for the parent namespace
 * 
 * @example
 * // Create a 2.5% fee amount
 * const amount = new _Amount({
 *   numerator: 25,
 *   denominator: 1000
 * });
 */
export class _Amount implements IHashgraph.IRestful.ICustomFees.IFractional.IAmount {
    /**
     * The numerator of the fractional fee
     * @type {number}
     * @optional
     * @description The top number in the fraction (e.g., 1 in 1/100 for 1%)
     * @remarks This value combined with the denominator determines the percentage
     */
    @ApiProperty({
        description: 'The numerator (top number) of the fractional fee percentage',
        required: false,
        example: 1
    })
    @IsOptional()
    @IsNumber()
    numerator?: number;

    /**
     * The denominator of the fractional fee
     * @type {number}
     * @optional
     * @description The bottom number in the fraction (e.g., 100 in 1/100 for 1%)
     * @remarks Must be non-zero. The actual percentage is calculated as numerator/denominator
     */
    @ApiProperty({
        description: 'The denominator (bottom number) of the fractional fee percentage',
        required: false,
        example: 100
    })
    @IsOptional()
    @IsNumber()
    denominator?: number;

    /**
     * Creates an instance of _Amount
     * @constructor
     * @param {Partial<_Amount>} data - Initial data to create the fractional amount
     * @throws {Error} If numerator or denominator are invalid types
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<_Amount>) {
        Object.assign(this, data);

        // Validate numerator is a number if provided
        if (this.numerator !== undefined && typeof this.numerator !== 'number') {
            throw new Error('Invalid numerator');
        }
        // Validate denominator is a number if provided 
        if (this.denominator !== undefined && typeof this.denominator !== 'number') {
            throw new Error('Invalid denominator');
        }
    }
}