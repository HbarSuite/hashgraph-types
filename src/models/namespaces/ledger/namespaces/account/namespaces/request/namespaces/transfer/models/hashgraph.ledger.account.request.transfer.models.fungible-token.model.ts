import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../../../../../hashgraph.namespace';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file fungible-token.model.ts
 * @module IHashgraph.ILedger.IAccount.IRequest.ITransfer.FungibleToken
 * @description Defines the model for transferring fungible tokens between Hashgraph accounts
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

/**
 * Hashgraph Account Transfer Fungible Token Class
 * @class _FungibleToken
 * @implements {IHashgraph.ILedger.IAccount.IRequest.ITransfer.IFungibleToken}
 * @summary Class for transferring fungible tokens between Hashgraph accounts
 * @description Defines the structure for transferring fungible tokens between Hashgraph accounts.
 * This class enables direct fungible token transfers with validation.
 * @category Account
 * @subcategory Transfer
 * @since 2.0.0
 * @example
 * ```typescript
 * // Create a new fungible token transfer
 * const transfer = new _FungibleToken(
 *   "0.0.12345", // token_id
 *   "0.0.67890", // from account
 *   "0.0.11111", // to account
 *   100,         // amount
 *   2,           // decimals
 *   "Payment"    // optional memo
 * );
 * ```
 */
export class _FungibleToken implements IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IFungibleToken {
    /**
     * Token ID
     * @property {string} token_id
     * @description The unique identifier of the fungible token to be transferred.
     * Must be in the format "0.0.x" representing a valid Hashgraph token.
     * @type {string}
     * @memberof _FungibleToken
     * @required
     * @example "0.0.12345"
     * @throws {Error} If token_id is empty or not a string
     */
    @ApiProperty({
        description: 'The unique identifier of the fungible token to be transferred',
        example: '0.0.12345',
    })
    @IsString()
    @IsNotEmpty()
    token_id: string;

    /**
     * From Account ID
     * @property {string} from
     * @description The account identifier of the sender who owns and will transfer the tokens.
     * Must be in the format "0.0.x" representing a valid Hashgraph account.
     * @type {string}
     * @memberof _FungibleToken
     * @required
     * @example "0.0.67890"
     * @throws {Error} If from is empty or not a string
     */
    @ApiProperty({
        description: 'The account ID of the sender',
        example: '0.0.67890',
    })
    @IsString()
    @IsNotEmpty()
    from: string;

    /**
     * Receiver Account ID
     * @property {string} to
     * @description The account identifier of the receiver who will receive the transferred tokens.
     * Must be in the format "0.0.x" representing a valid Hashgraph account.
     * @type {string}
     * @memberof _FungibleToken
     * @required
     * @example "0.0.11111"
     * @throws {Error} If to is empty or not a string
     */
    @ApiProperty({
        description: 'The account ID of the receiver',
        example: '0.0.11111',
    })
    @IsString()
    @IsNotEmpty()
    to: string;

    /**
     * Transfer Amount
     * @property {number} amount
     * @description The amount of tokens to transfer, expressed in the smallest denomination.
     * Must be a positive number.
     * @type {number}
     * @memberof _FungibleToken
     * @required
     * @example 100
     * @throws {Error} If amount is not a positive number
     */
    @ApiProperty({
        description: 'The amount of tokens to transfer',
        example: 100,
    })
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    /**
     * Token Decimals
     * @property {number} decimals
     * @description The number of decimal places for the token.
     * Must be a non-negative integer.
     * @type {number}
     * @memberof _FungibleToken
     * @required
     * @example 2
     * @throws {Error} If decimals is not a non-negative integer
     */
    @ApiProperty({
        description: 'The number of decimal places for the token',
        example: 2,
    })
    @IsNumber()
    @IsNotEmpty()
    decimals: number;

    /**
     * Transfer Memo
     * @property {string} [memo]
     * @description An optional memo to include with the transfer. Limited to 100 characters.
     * Can be used for additional context or reference information about the transaction.
     * @type {string}
     * @memberof _FungibleToken
     * @optional
     * @maxLength 100
     * @example "Payment for services"
     * @throws {Error} If provided memo is not a string
     */
    @ApiProperty({
        description: 'An optional memo to include with the transfer',
        example: 'Transfer memo',
        required: false,
    })
    @IsString()
    @IsOptional()
    memo?: string;

    /**
     * DAO Configuration
     * @property {Hashgraph.Ledger.DAO.Config} [dao]
     * @description Optional configuration for DAO-controlled fungible token transfers.
     * Includes the topic ID and consensus timestamp for DAO governance.
     * @type {Hashgraph.Ledger.DAO.Config}
     * @memberof _FungibleToken
     * @optional
     * @since 2.0.0
     * @example
     * ```typescript
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the fungible token transfer',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Creates a new instance of _FungibleToken
     * @constructor
     * @param {string} token_id - The unique identifier of the fungible token
     * @param {string} from - The sender's account ID
     * @param {string} to - The receiver's account ID
     * @param {number} amount - The amount of tokens to transfer
     * @param {number} decimals - The number of decimal places for the token
     * @param {string} [memo] - Optional memo for the transfer
     * @throws {Error} If any of the required parameters are invalid
     * @example
     * ```typescript
     * const transfer = new _FungibleToken(
     *   "0.0.12345",  // token_id
     *   "0.0.67890",  // from
     *   "0.0.11111",  // to
     *   100,          // amount
     *   2,            // decimals
     *   "Payment"     // memo (optional)
     * );
     * ```
     */
    constructor(token_id: string, from: string, to: string, amount: number, decimals: number, memo?: string) {
        this.token_id = token_id;
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.decimals = decimals;
        this.memo = memo;

        if (!this.token_id || typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id: Must be a non-empty string');
        }

        if (!this.from || typeof this.from !== 'string') {
            throw new Error('Invalid from: Must be a non-empty string');
        }

        if (!this.to || typeof this.to !== 'string') {
            throw new Error('Invalid to: Must be a non-empty string');
        }

        if (!Number.isFinite(this.amount) || this.amount <= 0) {
            throw new Error('Invalid amount: Must be a positive number');
        }

        if (!Number.isInteger(this.decimals) || this.decimals < 0) {
            throw new Error('Invalid decimals: Must be a non-negative integer');
        }

        if (this.memo !== undefined && typeof this.memo !== 'string') {
            throw new Error('Invalid memo: Must be a string if provided');
        }
    }
}