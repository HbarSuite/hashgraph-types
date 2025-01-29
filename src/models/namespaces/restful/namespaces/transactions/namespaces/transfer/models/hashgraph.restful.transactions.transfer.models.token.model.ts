import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.transactions.transfer.models.token.model.ts
 * @class _Token
 * @description Base model for fungible token transfer operations in the Hedera network.
 * Provides a structured format for representing token transfers between accounts.
 * Includes built-in validation for:
 * - Token ID format
 * - Account format
 * - Transfer amount (must be positive)
 * - Approval status tracking
 * @implements {IHashgraph.IRestful.ITransactions.ITransfer.IToken}
 * @category Models
 * @subcategory Transfer
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new token transfer for 1000 units of token 0.0.789
 * const tokenTransfer = new _Token({
 *   token_id: '0.0.789',
 *   account: '0.0.12345',
 *   amount: 1000,
 *   is_approval: false
 * });
 * ```
 */
export class _Token implements IHashgraph.IRestful.ITransactions.ITransfer.IToken {

    /**
     * The token identifier
     * @type {string | undefined}
     * @description Hedera token ID for the fungible token being transferred.
     * Must be in the format shard.realm.num (e.g., '0.0.789').
     * Identifies the specific fungible token type being transferred.
     * @memberof _Token
     * @optional
     */
    @ApiProperty({ 
        description: 'Unique identifier of the token being transferred', 
        required: false, 
        type: () => String,
        example: '0.0.789'
    })
    @IsString()
    @IsOptional()
    token_id?: string;

    /**
     * The account identifier
     * @type {string | undefined}
     * @description Hedera account ID involved in the token transfer.
     * Must be in the format shard.realm.num (e.g., '0.0.12345').
     * Can represent either the sender or receiver of the token transfer.
     * @memberof _Token
     * @optional
     */
    @ApiProperty({ 
        description: 'Account ID involved in the transfer (sender or receiver)', 
        required: false, 
        type: () => String,
        example: '0.0.12345'
    })
    @IsString()
    @IsOptional()
    account?: string;

    /**
     * The transfer amount
     * @type {number}
     * @description Quantity of fungible tokens to transfer.
     * Must be a positive number representing the token amount.
     * The decimal places should match the token's decimals configuration.
     * @memberof _Token
     * @required
     */
    @ApiProperty({ 
        description: 'Quantity of tokens being transferred', 
        required: true, 
        type: () => Number,
        example: 1000
    })
    @IsNumber()
    amount: number;

    /**
     * Approval status flag
     * @type {boolean | undefined}
     * @description Indicates whether this transfer represents an approval operation.
     * - true: This is an approval for a future token transfer
     * - false: This is an immediate token transfer operation
     * @memberof _Token
     * @optional
     */
    @ApiProperty({ 
        description: 'Indicates whether this transfer is an approval operation rather than a direct transfer', 
        required: false, 
        type: () => Boolean,
        example: false
    })
    @IsBoolean()
    @IsOptional()
    is_approval?: boolean;

    /**
     * Creates an instance of _Token
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransfer.IToken>} data - Initial token transfer data
     * @throws {Error} When amount is not positive or token/account IDs have invalid format
     * @description Initializes a new token transfer entity with comprehensive validation:
     * - Ensures transfer amount is positive
     * - Validates token ID format if provided
     * - Validates account ID format if provided
     * - Applies all provided transfer properties
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransfer.IToken>) {
        Object.assign(this, data);

        // Add validations inside constructor
        if (this.amount !== undefined && this.amount <= 0) {
            throw new Error('amount must be a positive number');
        }

        if (this.token_id && !/^\d+\.\d+\.\d+$/.test(this.token_id)) {
            throw new Error('Invalid token_id format. Expected format: shard.realm.num');
        }

        if (this.account && !/^\d+\.\d+\.\d+$/.test(this.account)) {
            throw new Error('Invalid account format. Expected format: shard.realm.num');
        }
    }
}