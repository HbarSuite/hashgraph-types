import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Fixed } from '../namespaces/fixed/hashgraph.restful.custom_fees.fixed.namespace';
import { _Fractional } from '../namespaces/fractional/hashgraph.restful.custom_fees.fractional.namespace';
import { _Royalty } from '../namespaces/royalty/hashgraph.restful.custom_fees.royalty.namespace';

/**
 * @file fees.model.ts
 * @class _Fees
 * @description Represents the complete fee structure for a token or transaction in the Hashgraph network.
 * This class aggregates all types of custom fees (fixed, fractional, and royalty) that can be applied
 * to a token or transaction.
 * @implements {IHashgraph.IRestful.ICustomFees.IFees}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Fixed.Entity} for fixed fee details
 * @see {@link _Fractional.Entity} for fractional fee details
 * @see {@link _Royalty.Entity} for royalty fee details
 * 
 * @example
 * // Create a complete fee structure with multiple fee types
 * const fees = new _Fees({
 *   created_timestamp: "2023-01-01T00:00:00.000Z",
 *   fixed_fees: [new _Fixed.Entity({ amount: 100 })],
 *   fractional_fees: [new _Fractional.Entity({
 *     amount: new _Fractional.Amount({ numerator: 1, denominator: 100 })
 *   })],
 *   royalty_fees: [new _Royalty.Entity({
 *     amount: new _Royalty.Amount({ numerator: 5, denominator: 100 }),
 *     fallback_fee: new _Royalty.Fallback({ amount: 10 })
 *   })]
 * });
 */
export class _Fees implements IHashgraph.IRestful.ICustomFees.IFees {
    /**
     * The created timestamp of the custom fees
     * @type {string}
     * @optional
     * @description ISO 8601 timestamp indicating when these fees were created
     * @remarks Format should be YYYY-MM-DDTHH:mm:ss.sssZ
     */
    @ApiProperty({
        description: 'The ISO 8601 timestamp when these fees were created',
        required: false,
        type: () => String,
        example: "2023-01-01T00:00:00.000Z"
    })
    @IsOptional()
    @IsString()
    created_timestamp?: string;

    /**
     * Array of fixed fee entities
     * @type {Array<_Fixed.Entity>}
     * @optional
     * @description Collection of fixed fees to be applied
     * @see {@link _Fixed.Entity} for fixed fee details
     */
    @ApiProperty({
        description: 'Array of fixed fee configurations to be applied',
        required: false,
        type: () => [_Fixed.Entity]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Fixed.Entity)
    fixed_fees?: Array<_Fixed.Entity>;

    /**
     * Array of fractional fee entities
     * @type {Array<_Fractional.Entity>}
     * @optional
     * @description Collection of percentage-based fees to be applied
     * @see {@link _Fractional.Entity} for fractional fee details
     */
    @ApiProperty({
        description: 'Array of fractional (percentage-based) fee configurations to be applied',
        required: false,
        type: () => [_Fractional.Entity]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Fractional.Entity)
    fractional_fees?: Array<_Fractional.Entity>;

    /**
     * Array of royalty fee entities
     * @type {Array<_Royalty.Entity>}
     * @optional
     * @description Collection of royalty fees to be applied
     * @see {@link _Royalty.Entity} for royalty fee details
     */
    @ApiProperty({
        description: 'Array of royalty fee configurations to be applied',
        required: false,
        type: () => [_Royalty.Entity]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Royalty.Entity)
    royalty_fees?: Array<_Royalty.Entity>;

    /**
     * Creates an instance of _Fees
     * @constructor
     * @param {Partial<_Fees>} data - Partial data to initialize the fees
     * @throws {Error} When data validation fails
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<_Fees>) {
        Object.assign(this, data);

        // Validate created_timestamp is a string if provided
        if (this.created_timestamp !== undefined && typeof this.created_timestamp !== 'string') {
            throw new Error('Invalid created_timestamp');
        }
        // Validate fixed_fees is an array of _Fixed.Entity instances if provided
        if (this.fixed_fees !== undefined && (!Array.isArray(this.fixed_fees) || !this.fixed_fees.every(fee => fee instanceof _Fixed.Entity))) {
            throw new Error('Invalid fixed_fees');
        }
        // Validate fractional_fees is an array of _Fractional.Entity instances if provided
        if (this.fractional_fees !== undefined && (!Array.isArray(this.fractional_fees) || !this.fractional_fees.every(fee => fee instanceof _Fractional.Entity))) {
            throw new Error('Invalid fractional_fees');
        }
        // Validate royalty_fees is an array of _Royalty.Entity instances if provided
        if (this.royalty_fees !== undefined && (!Array.isArray(this.royalty_fees) || !this.royalty_fees.every(fee => fee instanceof _Royalty.Entity))) {
            throw new Error('Invalid royalty_fees');
        }
    }
}