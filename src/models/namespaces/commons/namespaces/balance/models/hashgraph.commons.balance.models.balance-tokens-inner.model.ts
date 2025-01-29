import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsOptional, Matches } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Class representing the inner structure of balance tokens in Hashgraph Restful API responses
 * @class _TokensInner
 * @export _TokensInner
 * @implements {IHashgraph.ICommons.IBalance.ITokensInner}
 * @description This class models the balance and token ID for a specific token associated with an account.
 * It is used as part of the balance information returned by the Hashgraph Restful API.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.Balance.TokensInner
 * 
 * @property {string | null} [token_id] - The unique identifier of the token in format "0.0.x"
 * @property {number} [balance] - The balance amount of the token
 * 
 * @example
 * const tokenInner = new _TokensInner({
 *   token_id: "0.0.1234",
 *   balance: 1000000
 * });
 */
export class _TokensInner implements IHashgraph.ICommons.IBalance.ITokensInner {
    /**
     * The unique identifier of the token on the Hashgraph network
     * @type {string | null}
     * @description A string in the format "0.0.1234" representing the token's ID in the Hashgraph network.
     * It can be null if the token ID is not available.
     * @memberof _TokensInner
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * tokenInner.token_id = "0.0.1234";
     */
    @ApiProperty({
        description: 'The unique identifier of the token',
        example: '0.0.1234',
        required: true,
        nullable: true,
    })
    @IsOptional()
    @IsString()
    @Matches(/^[0-9]+\.[0-9]+\.[0-9]+$/, { message: 'Invalid token ID format' })
    token_id?: string | null;

    /**
     * The balance amount of the token
     * @type {number}
     * @description The amount of the token held by the account.
     * This is typically represented as the smallest unit of the token.
     * @memberof _TokensInner
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * tokenInner.balance = 1000000;
     */
    @ApiProperty({
        description: 'The balance of the token',
        example: 1000000,
        required: true,
    })
    @IsOptional()
    @IsNumber()
    balance?: number;

    /**
     * Creates an instance of _TokensInner.
     * @constructor
     * @param {Partial<IHashgraph.ICommons.IBalance.ITokensInner>} [data] - Optional partial data to initialize the instance
     * @throws {Error} Will throw an error if token ID format is invalid
     * @throws {Error} Will throw an error if balance is not a number
     * @memberof _TokensInner
     * @public
     * @since 2.0.0
     * 
     * @example
     * const tokenInner = new _TokensInner({
     *   token_id: "0.0.1234",
     *   balance: 1000000
     * });
     */
    constructor(data?: Partial<IHashgraph.ICommons.IBalance.ITokensInner>) {
        // Initialize properties from provided data if available
        if (data) {
            // Set token_id with null as default if undefined
            this.token_id = data.token_id !== undefined ? data.token_id : null;
            
            // Set balance only if defined in input data
            this.balance = data.balance !== undefined ? data.balance : undefined;

            // Validate token_id format if provided and not null
            if (this.token_id !== null && this.token_id !== undefined) {
                if (!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(this.token_id)) {
                    throw new Error('Invalid token ID format');
                }
            }
    
            // Validate balance type if provided
            if (this.balance !== undefined && typeof this.balance !== 'number') {
                throw new Error('Balance must be a number');
            }
        }
    }
}