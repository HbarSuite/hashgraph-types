import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file amount.model.ts
 * @class _Amount
 * @description Represents the amount structure for a royalty fee in the Hashgraph network.
 * This class defines the fractional components (numerator/denominator) used to calculate
 * royalty fees for token transactions. The fraction represents a percentage value that
 * will be applied to transaction amounts.
 * @implements {IHashgraph.IRestful.ICustomFees.IRoyalty.IAmount}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Royalty} for the parent namespace
 * @see {@link _Entity} for the royalty fee entity that uses this amount
 * 
 * @example
 * // Create a 5% royalty fee amount
 * const royaltyAmount = new _Amount({
 *   numerator: 5,
 *   denominator: 100
 * });
 */
export class _Amount implements IHashgraph.IRestful.ICustomFees.IRoyalty.IAmount {
    /**
     * The numerator of the royalty fee fraction
     * @type {number}
     * @optional
     * @description The top number in the fraction (e.g., 5 in 5/100 for 5%)
     * @remarks This value combined with the denominator determines the royalty percentage
     */
    @ApiProperty({
        description: 'The numerator (top number) of the royalty fee percentage',
        required: false,
        example: 5
    })
    @IsOptional()
    @IsNumber()
    numerator?: number;

    /**
     * The denominator of the royalty fee fraction
     * @type {number}
     * @optional
     * @description The bottom number in the fraction (e.g., 100 in 5/100 for 5%)
     * @remarks Must be non-zero. The actual percentage is calculated as numerator/denominator
     */
    @ApiProperty({
        description: 'The denominator (bottom number) of the royalty fee percentage',
        required: false,
        example: 100
    })
    @IsOptional()
    @IsNumber()
    denominator?: number;

    /**
     * Creates an instance of _Amount
     * @constructor
     * @param {Partial<_Amount>} data - Initial data to create the royalty fee amount
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