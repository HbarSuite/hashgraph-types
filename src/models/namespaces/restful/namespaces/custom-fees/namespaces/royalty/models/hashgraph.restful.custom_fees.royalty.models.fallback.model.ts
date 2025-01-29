import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file fallback.model.ts
 * @class _Fallback
 * @description Represents the fallback fee structure for a royalty fee in the Hashgraph network.
 * This class defines the fallback fee that will be charged when a royalty fee cannot be assessed,
 * including the amount and the token in which the fee should be paid. The fallback mechanism
 * ensures fee collection even when percentage-based calculation is not possible.
 * @implements {IHashgraph.IRestful.ICustomFees.IRoyalty.IFallback}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _CustomFees.Royalty} for the parent namespace
 * @see {@link _Entity} for the royalty fee entity that uses this fallback
 * 
 * @example
 * // Create a fallback fee of 10 units of token 0.0.1234
 * const fallbackFee = new _Fallback({
 *   amount: 10,
 *   denominating_token_id: "0.0.1234"
 * });
 */
export class _Fallback implements IHashgraph.IRestful.ICustomFees.IRoyalty.IFallback {
    /**
     * The amount of the fallback fee
     * @type {number}
     * @optional
     * @description The amount to be charged as fallback fee, in the smallest denomination 
     * of the token (e.g., tinybar for HBAR)
     * @remarks This fixed amount is used when the percentage-based royalty fee cannot be calculated
     */
    @ApiProperty({
        description: 'The fixed amount to be charged as fallback fee, in the smallest denomination of the token',
        required: false,
        example: 10
    })
    @IsOptional()
    @IsNumber()
    amount?: number;

    /**
     * The token ID for the fallback fee
     * @type {string | null}
     * @optional
     * @description The Hashgraph token ID that this fallback fee should be paid in.
     * If null, the fee will be paid in HBAR
     * @remarks Must be a valid Hedera token ID if specified
     */
    @ApiProperty({
        description: 'The token ID in which the fallback fee should be paid. Can be null for fees in HBAR.',
        required: false,
        example: "0.0.1234"
    })
    @IsOptional()
    @IsString()
    denominating_token_id?: string | null;

    /**
     * Creates an instance of _Fallback
     * @constructor
     * @param {Partial<_Fallback>} data - Initial data to create the fallback fee
     * @throws {Error} If amount or denominating_token_id are invalid types
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<_Fallback>) {
        Object.assign(this, data);

        // Validate amount is a number if provided
        if (this.amount !== undefined && typeof this.amount !== 'number') {
            throw new Error('Invalid amount');
        }
        // Validate denominating_token_id is string or null if provided
        if (this.denominating_token_id !== undefined && this.denominating_token_id !== null && typeof this.denominating_token_id !== 'string') {
            throw new Error('Invalid denominating_token_id');
        }
    }
}