import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file entity.model.ts
 * @class _Entity
 * @description Represents a fixed fee on the Hashgraph Token Service. This class defines the structure 
 * of a fixed fee, including properties such as exemption status, amount, collector account, and 
 * denominating token. Fixed fees are static amounts that remain constant regardless of the transaction value.
 * @implements {IHashgraph.IRestful.ICustomFees.IFixed.IEntity}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Fixed} for the parent namespace
 * 
 * @example
 * // Create a new fixed fee instance
 * const fixedFee = new _Entity({
 *   all_collectors_are_exempt: false,
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678"
 * });
 */
export class _Entity implements IHashgraph.IRestful.ICustomFees.IFixed.IEntity {
    /**
     * Flag indicating if all collectors are exempt from this fee
     * @type {boolean}
     * @optional
     * @description When true, all fee collectors are exempt from paying this fixed fee
     * @remarks This setting affects all collectors uniformly
     */
    @ApiProperty({
        description: 'Indicates whether all collectors are exempt from this fixed fee',
        required: false,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    all_collectors_are_exempt?: boolean;

    /**
     * The fixed fee amount
     * @type {number}
     * @optional
     * @description The amount of the fixed fee in the smallest denomination of the token (e.g., tinybar for HBAR)
     * @remarks This amount remains constant for all transactions
     */
    @ApiProperty({
        description: 'The fixed amount of the fee in the smallest denomination of the token (e.g., tinybar for HBAR)',
        required: false,
        example: 100
    })
    @IsOptional()
    @IsNumber()
    amount?: number;

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
        example: "0.0.1234"
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
        example: "0.0.5678"
    })
    @IsOptional()
    @IsString()
    denominating_token_id?: string | null;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<_Entity>} data - Initial data to create the fixed fee entity
     * @throws {Error} If any of the provided data is invalid
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<_Entity>) {
        Object.assign(this, data);

        // Validate all_collectors_are_exempt is boolean if provided
        if (this.all_collectors_are_exempt !== undefined && typeof this.all_collectors_are_exempt !== 'boolean') {
            throw new Error('Invalid all_collectors_are_exempt');
        }
        // Validate amount is a number if provided
        if (this.amount !== undefined && typeof this.amount !== 'number') {
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
    }
}