import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, Min, IsNotEmpty, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _TokensInner } from '../../../../../../commons/namespaces/balance/models/hashgraph.commons.balance.models.balance-tokens-inner.model';

/**
 * @file hashgraph.restful.hts.balance.models.inner.model.ts
 * @class _Inner
 * @description Represents a token distribution inner model on the Hashgraph Token Service (HTS). This class
 * defines the structure for storing and managing token balances and decimal places associated with accounts
 * on the Hashgraph network. It provides a detailed view of an account's token holdings and their properties.
 * @implements {IHashgraph.IRestful.IHTS.IBalance.IInner}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token distribution inner instance
 * const distribution = new _Inner({
 *   account: "0.0.1234567",
 *   balance: 1000000,
 *   tokens: [{
 *     token_id: "0.0.7654321",
 *     balance: 500000,
 *     decimals: 8
 *   }]
 * });
 */
export class _Inner implements IHashgraph.IRestful.IHTS.IBalance.IInner {
    /**
     * The account identifier
     * @type {string | null}
     * @description The unique identifier of the account on the Hashgraph network.
     * This ID represents the account that holds the token balances. A null value
     * indicates a pending or unassigned account.
     * @optional
     * @memberof _Inner
     */
    @ApiProperty({
        description: 'The unique identifier of the account holding the token balances',
        example: '0.0.1234567',
        required: true,
        nullable: true,
    })
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    account: string | null;

    /**
     * The token balance
     * @type {number}
     * @description The current balance of HBAR (in tinybars) held by the associated account.
     * This represents the native cryptocurrency balance, where 1 HBAR = 100,000,000 tinybars.
     * Must be non-negative.
     * @memberof _Inner
     */
    @ApiProperty({
        description: 'The account balance in tinybars (1 HBAR = 100,000,000 tinybars)',
        example: 1000000,
        required: true,
        minimum: 0,
    })
    @IsNumber()
    @Min(0)
    balance: number;

    /**
     * The token balances array
     * @type {Array<_TokensInner>}
     * @description An array of token balance objects associated with this account.
     * Each object contains information about a specific token's balance and properties,
     * including the token ID, balance amount, and decimal places.
     * @memberof _Inner
     */
    @ApiProperty({
        description: 'Array of detailed token balance information for each token held by the account',
        required: true,
        type: () => [_TokensInner]
    })
    @IsNotEmpty()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _TokensInner)
    tokens: Array<_TokensInner>;

    /**
     * Creates an instance of _Inner
     * @constructor
     * @param {IHashgraph.IRestful.IHTS.IBalance.IInner} data - Initial data to create the distribution inner
     * @description Initializes a new token distribution inner instance with the provided data.
     * Performs validation checks to ensure the account is a valid string or null, the balance
     * is a non-negative number, and the tokens array contains valid token balance entries.
     * Creates new TokensInner instances for each token balance record.
     * @throws {Error} If account is invalid (not a string or null)
     * @throws {Error} If balance is invalid (not a number or negative)
     * @throws {Error} If tokens is invalid (not an array)
     * @memberof _Inner
     */
    constructor(data: IHashgraph.IRestful.IHTS.IBalance.IInner) {
        this.account = data.account;
        this.balance = data.balance;
        this.tokens = data.tokens.map(token => new _TokensInner(token));

        // Validate account is either null or a string
        if (this.account !== null && typeof this.account !== 'string') {
            throw new Error('Invalid account: must be a string or null');
        }

        // Validate balance is a non-negative number
        if (typeof this.balance !== 'number' || this.balance < 0) {
            throw new Error('Invalid balance: must be a non-negative number');
        }

        if (!Array.isArray(this.tokens)) {
            throw new Error('Invalid tokens: must be an array');
        }
    }
}