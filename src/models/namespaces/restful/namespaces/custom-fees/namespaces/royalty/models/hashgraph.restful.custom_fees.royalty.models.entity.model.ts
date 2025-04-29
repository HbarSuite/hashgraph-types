import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Amount } from './hashgraph.restful.custom_fees.royalty.models.amount.model';
import { _Fallback } from './hashgraph.restful.custom_fees.royalty.models.fallback.model';

/**
 * @file entity.model.ts
 * @class _Entity
 * @description Represents a royalty fee on the Hashgraph Token Service. This class defines the structure
 * of a royalty fee, including properties such as exemption status, amount, collector account,
 * and fallback fee settings. Royalty fees are percentage-based fees with a fallback mechanism
 * that activates when the percentage-based calculation cannot be applied.
 * @implements {IHashgraph.IRestful.ICustomFees.IRoyalty.IEntity}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Royalty} for the parent namespace
 * @see {@link _Amount} for the percentage calculation structure
 * @see {@link _Fallback} for the fallback fee configuration
 * 
 * @example
 * // Create a new royalty fee instance with 5% fee and fallback
 * const royaltyFee = new _Entity({
 *   all_collectors_are_exempt: false,
 *   amount: new _Amount({ numerator: 5, denominator: 100 }), // 5% royalty
 *   collector_account_id: "0.0.1234",
 *   fallback_fee: new _Fallback({ amount: 10 })
 * });
 */
export class _Entity implements IHashgraph.IRestful.ICustomFees.IRoyalty.IEntity {
    /**
     * Flag indicating if all collectors are exempt from this fee
     * @type {boolean}
     * @optional
     * @description When true, all fee collectors are exempt from paying this royalty fee
     * @remarks This setting affects all collectors uniformly
     */
    @ApiProperty({
        description: 'Indicates whether all collectors are exempt from this royalty fee',
        required: false,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    all_collectors_are_exempt?: boolean;

    /**
     * The royalty fee amount configuration
     * @type {_Amount}
     * @optional
     * @description Contains the numerator and denominator defining the royalty fee percentage
     * @remarks The actual percentage is calculated as numerator/denominator
     * @see {@link _Amount} for the detailed structure
     */
    @ApiProperty({
        description: 'The percentage-based amount configuration for the royalty fee',
        required: false,
        type: () => _Amount
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Amount)
    amount?: _Amount;

    /**
     * The account ID that will collect the royalty fee
     * @type {string | null}
     * @optional
     * @description The Hashgraph account ID that will receive the collected royalty fees
     * @remarks Must be a valid Hedera account ID if specified
     */
    @ApiProperty({
        description: 'The account ID of the collector who receives the royalty fee',
        required: false,
        example: "0.0.1234"
    })
    @IsOptional()
    collector_account_id?: string | null;

    /**
     * The fallback fee configuration
     * @type {_Fallback}
     * @optional
     * @description Specifies the fallback fee to be used when royalty fee cannot be assessed
     * @remarks Used when percentage-based calculation is not possible
     * @see {@link _Fallback} for the detailed structure
     */
    @ApiProperty({
        description: 'The fallback fee configuration to be applied if the royalty fee cannot be processed',
        required: false,
        type: () => Object
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => Object)
    fallback_fee?: _Fallback;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ICustomFees.IRoyalty.IEntity>} data - Initial data to create the royalty fee entity
     * @throws {Error} If any of the provided data is invalid
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<IHashgraph.IRestful.ICustomFees.IRoyalty.IEntity>) {
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
        // Validate fallback_fee is an object if provided
        if (this.fallback_fee !== undefined && typeof this.fallback_fee !== 'object') {
            throw new Error('Invalid fallback_fee');
        }
    }
}