import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsArray, Min, IsISO8601, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _TokensInner } from './hashgraph.commons.balance.models.balance-tokens-inner.model';

/**
 * Class representing a balance entity in the Hashgraph network
 * @class _Entity
 * @export _Entity
 * @implements {IHashgraph.ICommons.IBalance.IEntity}
 * @description Represents the balance information for an account, including timestamp, balance, and associated tokens.
 * Used to track and manage account balances and their associated token holdings.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.Balance.Entity
 * 
 * @property {string} timestamp - ISO 8601 formatted timestamp of the balance snapshot
 * @property {number} balance - Account balance in tinybars
 * @property {Array<_TokensInner>} tokens - Array of token balances
 * 
 * @example
 * const balanceEntity = new _Entity({
 *   timestamp: "2023-04-15T14:30:00Z",
 *   balance: 1000000000,
 *   tokens: [
 *     { token_id: "0.0.1234", balance: 1000000 }
 *   ]
 * });
 */
export class _Entity implements IHashgraph.ICommons.IBalance.IEntity {
    /**
     * The timestamp when the balance information was captured
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when this balance snapshot was taken
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * entity.timestamp = "2023-04-15T14:30:00Z";
     */
    @ApiProperty({
        description: 'ISO 8601 formatted timestamp indicating when the balance information was captured',
        example: '2023-04-15T14:30:00Z',
        required: true,
    })
    @IsString()
    @IsISO8601()
    timestamp: string;

    /**
     * The account balance in tinybars
     * @type {number}
     * @description The balance of the account in tinybars (1 tinybar = 10^-8 HBAR)
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * entity.balance = 1000000000;
     */
    @ApiProperty({
        description: 'The balance of the account in tinybars (1 tinybar = 10^-8 HBAR)',
        example: 1000000000,
        minimum: 0,
        required: true,
    })
    @IsNumber()
    @Min(0)
    balance: number;

    /**
     * Array of token balances associated with the account
     * @type {Array<_TokensInner>}
     * @description List of all tokens and their respective balances held by this account
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * entity.tokens = [
     *   new _TokensInner({ token_id: "0.0.1234", balance: 1000000 })
     * ];
     */
    @ApiProperty({
        description: 'An array of token balances associated with the account',
        type: () => _TokensInner,
        isArray: true,
        required: true,
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _TokensInner)
    tokens: Array<_TokensInner>;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<_Entity>} [data] - Optional partial data to initialize the instance
     * @throws {Error} Will throw an error if timestamp is invalid
     * @throws {Error} Will throw an error if balance is negative or undefined
     * @throws {Error} Will throw an error if tokens is not an array
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * 
     * @example
     * const entity = new _Entity({
     *   timestamp: "2023-04-15T14:30:00Z",
     *   balance: 1000000000,
     *   tokens: [{ token_id: "0.0.1234", balance: 1000000 }]
     * });
     */
    constructor(data?: Partial<_Entity>) {
        if (data) {
            // Initialize properties from provided data
            this.timestamp = data.timestamp;
            this.balance = data.balance;
            this.tokens = data.tokens?.map(token => new _TokensInner(token));

            // Validate timestamp format
            if (!this.timestamp || !this.isValidISODate(this.timestamp)) {
                throw new Error('Invalid timestamp: must be a valid ISO 8601 date string');
            }

            // Validate balance value
            if (this.balance === undefined || this.balance < 0) {
                throw new Error('Invalid balance: must be a non-negative number');
            }

            // Validate tokens array
            if (!Array.isArray(this.tokens)) {
                throw new Error('Invalid tokens: must be an array');
            }
        }
    }

    /**
     * Validates if a string is a valid ISO date
     * @private
     * @param {string} str - The string to validate
     * @returns {boolean} True if string is valid ISO date, false otherwise
     * @memberof _Entity
     * @since 2.0.0
     */
    private isValidISODate(str: string): boolean {
        try {
            return Boolean(new Date(str).toISOString());
        } catch (e) {
            return false;
        }
    }
}