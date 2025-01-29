import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.transactions.transfer.models.entity.model.ts
 * @class _Entity
 * @description Base model for cryptocurrency transfer operations in the Hedera network.
 * Provides a structured format for representing HBAR transfers between accounts.
 * Includes built-in validation for:
 * - Account format (shard.realm.num)
 * - Transfer amount (must be positive)
 * - Optional approval status tracking
 * @implements {IHashgraph.IRestful.ITransactions.ITransfer.IEntity}
 * @category Models
 * @subcategory Transfer
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new transfer entity for 1 HBAR
 * const transfer = new _Entity({
 *   account: '0.0.12345',
 *   amount: 1000000, // 1 HBAR = 100,000,000 tinybars
 *   is_approval: false
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.ITransactions.ITransfer.IEntity {

    /**
     * The account identifier involved in the transfer
     * @type {string | undefined}
     * @description Hedera account ID in the format shard.realm.num (e.g., '0.0.12345').
     * This account can be either the sender or receiver of the transfer.
     * Must follow the standard Hedera account ID format.
     * @memberof _Entity
     * @optional
     */
    @ApiProperty({ 
        description: 'The account ID involved in the transfer (sender or receiver)', 
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
     * @description Amount of cryptocurrency to transfer, specified in tinybars for HBAR.
     * Must be a positive number. For HBAR transfers, 1 HBAR = 100,000,000 tinybars.
     * @memberof _Entity
     * @required
     */
    @ApiProperty({ 
        description: 'The quantity of cryptocurrency being transferred (in tinybars for HBAR)', 
        required: true, 
        type: () => Number,
        example: 1000000 // 1 HBAR
    })
    @IsNumber()
    amount: number;

    /**
     * Approval status flag
     * @type {boolean | undefined}
     * @description Indicates whether this transfer represents an approval operation.
     * - true: This is an approval for a future transfer
     * - false: This is an immediate transfer operation
     * @memberof _Entity
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
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransfer.IEntity>} data - Initial transfer data
     * @throws {Error} When amount is not positive or account format is invalid
     * @description Initializes a new transfer entity with comprehensive validation:
     * - Ensures amount is positive
     * - Validates account ID format if provided
     * - Applies all provided transfer properties
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransfer.IEntity>) {
        Object.assign(this, data);

        // Validate amount is positive
        if (this.amount <= 0) {
            throw new Error('amount must be a positive number');
        }

        // Validate account format if provided
        if (this.account && !/^\d+\.\d+\.\d+$/.test(this.account)) {
            throw new Error('Invalid account format. Expected format: shard.realm.num');
        }
    }
}