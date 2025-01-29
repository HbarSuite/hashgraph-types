import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, Min, IsNotEmpty, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.hts.balance.models.entity.model.ts
 * @class _Entity
 * @description Represents a token balance entity on the Hashgraph Token Service (HTS). This class
 * defines the structure for storing and managing token balances associated with accounts on the
 * Hashgraph network. It provides validation and type safety for token balance operations.
 * @implements {IHashgraph.IRestful.IHTS.IBalance.IEntity}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token balance entity
 * const balance = new _Entity({
 *   token_id: "0.0.1234567",
 *   balance: 1000000,
 *   decimals: 8
 * });
 */
export class _Entity implements IHashgraph.IRestful.IHTS.IBalance.IEntity {
    /**
     * The token identifier
     * @type {string | null}
     * @description The unique identifier of the token on the Hashgraph network.
     * This ID is used to uniquely identify the token type for which the balance
     * is being tracked. A null value indicates a pending or unassigned token ID.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The unique identifier of the token on the Hashgraph network',
        example: '0.0.1234567',
        required: true,
        nullable: true,
    })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    token_id: string | null;

    /**
     * The token balance
     * @type {number}
     * @description The current balance of the token held by the associated account.
     * This value represents the raw balance amount and should be interpreted using
     * the token's decimal places for display purposes. Must be non-negative.
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The current balance amount of the token for the associated account',
        example: 1000000,
        required: true,
        minimum: 0,
    })
    @IsNumber()
    @Min(0)
    balance: number;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {IHashgraph.IRestful.IHTS.IBalance.IEntity} data - Initial data to create the balance entity
     * @description Initializes a new token balance entity with the provided data.
     * Performs validation checks to ensure the token_id is a valid string or null,
     * and the balance is a non-negative number. This constructor enforces data
     * integrity for token balance records.
     * @throws {Error} If token_id is invalid (not a string or null)
     * @throws {Error} If balance is invalid (not a number or negative)
     * @memberof _Entity
     */
    constructor(data: IHashgraph.IRestful.IHTS.IBalance.IEntity) {
        this.token_id = data.token_id;
        this.balance = data.balance;

        // Validate token_id is either null or a string
        if (this.token_id !== null && typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id: must be a string or null');
        }

        // Validate balance is a non-negative number
        if (typeof this.balance !== 'number' || this.balance < 0) {
            throw new Error('Invalid balance: must be a non-negative number');
        }
    }
}