import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsNumber, IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Amount } from './hashgraph.restful.custom_fees.fractional.models.amount.model';

/**
 * @file entity.model.ts
 * @class _Entity
 * @description Represents a fractional fee on the Hashgraph Token Service. This class defines the structure
 * of a fractional fee, including properties such as exemption status, amount, collector account,
 * denominating token, and transfer settings. Fractional fees are calculated as a percentage of the
 * transaction value, with optional minimum and maximum limits.
 * @implements {IHashgraph.IRestful.ICustomFees.IFractional.IEntity}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Fractional} for the parent namespace
 * @see {@link _Amount} for the fractional amount structure
 * 
 * @example
 * // Create a new fractional fee instance with 1% fee and limits
 * const fractionalFee = new _Entity({
 *   all_collectors_are_exempt: false,
 *   amount: new _Amount({ numerator: 1, denominator: 100 }),
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678",
 *   maximum: 1000,
 *   minimum: 10,
 *   net_of_transfers: false
 * });
 */
export class _Entity implements IHashgraph.IRestful.ICustomFees.IFractional.IEntity {
    /**
     * Flag indicating if all collectors are exempt from this fee
     * @type {boolean}
     * @optional
     * @description When true, all fee collectors are exempt from paying this fractional fee
     * @remarks This setting affects all collectors uniformly
     */
    @ApiProperty({
        description: 'Indicates whether all collectors are exempt from this fractional fee',
        required: false,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    all_collectors_are_exempt?: boolean;

    /**
     * The fractional fee amount configuration
     * @type {_Amount}
     * @optional
     * @description Contains the numerator and denominator defining the fractional fee percentage
     * @remarks The actual percentage is calculated as numerator/denominator
     * @see {@link _Amount} for the detailed structure
     */
    @ApiProperty({
        description: 'The fractional amount configuration defining the fee percentage',
        required: false,
        type: () => _Amount
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Amount)
    amount?: _Amount;

    /**
     * The fee collector's account ID
     * @type {string | null}
     * @optional
     * @description The account that will receive the collected fee. Can be null if there's no specific collector.
     * @remarks Must be a valid Hedera account ID if specified
     */
    @ApiProperty({
        description: 'The account ID of the fee collector. Can be null if there\'s no specific collector.',
        required: false,
        example: '0.0.1234'
    })
    @IsOptional()
    @IsString()
    collector_account_id?: string | null;

    /**
     * The token ID used for fee denomination
     * @type {string | null}
     * @optional
     * @description The token ID in which the fee is denominated. Can be null for fees in HBAR.
     * @remarks Must be a valid Hedera token ID if specified
     */
    @ApiProperty({
        description: 'The token ID in which the fee is denominated. Can be null for fees in HBAR.',
        required: false,
        example: '0.0.5678'
    })
    @IsOptional()
    @IsString()
    denominating_token_id?: string | null;

    /**
     * Maximum fee amount
     * @type {number | null}
     * @optional
     * @description The maximum amount that can be charged as a fee, regardless of the percentage calculation
     * @remarks If null, there is no upper limit on the fee amount
     */
    @ApiProperty({
        description: 'The maximum amount that can be charged as a fee',
        required: false,
        example: 1000
    })
    @IsOptional()
    @IsNumber()
    maximum?: number | null;

    /**
     * Minimum fee amount
     * @type {number}
     * @optional
     * @description The minimum amount that must be charged as a fee, regardless of the percentage calculation
     * @remarks Ensures a base fee level even for small transactions
     */
    @ApiProperty({
        description: 'The minimum amount that must be charged as a fee',
        required: false,
        example: 10
    })
    @IsOptional()
    @IsNumber()
    minimum?: number;

    /**
     * Flag for net of transfers calculation
     * @type {boolean}
     * @optional
     * @description When true, the fee is calculated based on the net amount of transfers
     * @remarks Affects how the fee percentage is applied to the transaction value
     */
    @ApiProperty({
        description: 'Indicates whether the fee should be calculated based on the net amount of transfers',
        required: false,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    net_of_transfers?: boolean;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ICustomFees.IFractional.IEntity>} data - Initial data to create the fractional fee entity
     * @throws {Error} If any of the provided data is invalid
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<IHashgraph.IRestful.ICustomFees.IFractional.IEntity>) {
        Object.assign(this, data);

        // Validate all_collectors_are_exempt is boolean if provided
        if (this.all_collectors_are_exempt !== undefined && typeof this.all_collectors_are_exempt !== 'boolean') {
            throw new Error('Invalid all_collectors_are_exempt');
        }
        // Validate amount is an instance of _Amount if provided
        if (this.amount !== undefined && !(this.amount instanceof _Amount)) {
            throw new Error('Invalid amount');
        }
        // Validate collector_account_id is string or null if provided
        if (this.collector_account_id !== undefined && this.collector_account_id !== null && typeof this.collector_account_id !== 'string') {
            throw new Error('Invalid collector_account_id');
        }
        // Validate denominating_token_id is string or null if provided
        if (this.denominating_token_id !== undefined && this.denominating_token_id !== null && typeof this.denominating_token_id !== 'string') {
            throw new Error('Invalid denominating_token_id');
        }
        // Validate maximum is number or null if provided
        if (this.maximum !== undefined && this.maximum !== null && typeof this.maximum !== 'number') {
            throw new Error('Invalid maximum');
        }
        // Validate minimum is a number if provided
        if (this.minimum !== undefined && typeof this.minimum !== 'number') {
            throw new Error('Invalid minimum');
        }
        // Validate net_of_transfers is boolean if provided
        if (this.net_of_transfers !== undefined && typeof this.net_of_transfers !== 'boolean') {
            throw new Error('Invalid net_of_transfers');
        }
    }
}