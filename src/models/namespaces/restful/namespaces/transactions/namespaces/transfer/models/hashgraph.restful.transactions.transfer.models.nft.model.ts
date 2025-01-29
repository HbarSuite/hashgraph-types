import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.transactions.transfer.models.nft.model.ts
 * @class _Nft
 * @description Base model for Non-Fungible Token (NFT) transfer operations in the Hedera network.
 * Provides a structured format for representing NFT transfers between accounts.
 * Includes built-in validation for:
 * - Account formats (sender and receiver)
 * - Token ID format
 * - Serial number validation
 * - Approval status tracking
 * @implements {IHashgraph.IRestful.ITransactions.ITransfer.INft}
 * @category Models
 * @subcategory Transfer
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new NFT transfer for token ID 0.0.789, serial number 1
 * const nftTransfer = new _Nft({
 *   is_approval: false,
 *   receiver_account_id: '0.0.12345',
 *   sender_account_id: '0.0.54321',
 *   serial_number: 1,
 *   token_id: '0.0.789'
 * });
 * ```
 */
export class _Nft implements IHashgraph.IRestful.ITransactions.ITransfer.INft {

    /**
     * Approval status flag
     * @type {boolean}
     * @description Indicates whether this transfer represents an approval operation.
     * - true: This is an approval for a future NFT transfer
     * - false: This is an immediate NFT transfer operation
     * Required field that must be explicitly set.
     * @memberof _Nft
     * @required
     */
    @ApiProperty({ 
        description: 'Indicates whether this transfer is an approval operation rather than a direct transfer', 
        required: true, 
        type: () => Boolean,
        example: false
    })
    @IsBoolean()
    is_approval: boolean;

    /**
     * The receiving account identifier
     * @type {string | undefined}
     * @description Hedera account ID that will receive the NFT.
     * Must be in the format shard.realm.num (e.g., '0.0.12345').
     * Optional for approval operations.
     * @memberof _Nft
     * @optional
     */
    @ApiProperty({ 
        description: 'The account ID of the entity receiving the NFT', 
        required: false, 
        type: () => String,
        example: '0.0.12345'
    })
    @IsString()
    @IsOptional()
    receiver_account_id?: string;

    /**
     * The sending account identifier
     * @type {string | undefined}
     * @description Hedera account ID that currently owns and will send the NFT.
     * Must be in the format shard.realm.num (e.g., '0.0.54321').
     * Optional for approval operations.
     * @memberof _Nft
     * @optional
     */
    @ApiProperty({ 
        description: 'The account ID of the entity sending the NFT', 
        required: false, 
        type: () => String,
        example: '0.0.54321'
    })
    @IsString()
    @IsOptional()
    sender_account_id?: string;

    /**
     * The NFT serial number
     * @type {number}
     * @description Unique identifier for the specific NFT within its token collection.
     * Must be a positive integer representing the specific instance of the NFT.
     * Each NFT in a collection has a unique serial number.
     * @memberof _Nft
     * @required
     */
    @ApiProperty({ 
        description: 'The unique identifier of the specific NFT within its token collection', 
        required: true, 
        type: () => Number,
        example: 1
    })
    @IsNumber()
    serial_number: number;

    /**
     * The token collection identifier
     * @type {string}
     * @description Hedera token ID representing the NFT collection.
     * Must be in the format shard.realm.num (e.g., '0.0.789').
     * Identifies the specific NFT collection this token belongs to.
     * @memberof _Nft
     * @required
     */
    @ApiProperty({ 
        description: 'The identifier of the token collection to which the transferred NFT belongs', 
        required: true, 
        type: () => String,
        example: '0.0.789'
    })
    @IsString()
    token_id: string;

    /**
     * Creates an instance of _Nft
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransfer.INft>} data - Initial NFT transfer data
     * @throws {Error} When serial_number is not positive or account/token IDs have invalid format
     * @description Initializes a new NFT transfer entity with comprehensive validation:
     * - Ensures serial number is positive
     * - Validates token ID format
     * - Validates sender account ID format if provided
     * - Validates receiver account ID format if provided
     * - Applies all provided transfer properties
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransfer.INft>) {
        Object.assign(this, data);

        // Add validations inside constructor
        if (this.serial_number <= 0) {
            throw new Error('serial_number must be a positive number');
        }

        if (this.token_id && !/^\d+\.\d+\.\d+$/.test(this.token_id)) {
            throw new Error('Invalid token_id format. Expected format: shard.realm.num');
        }

        if (this.receiver_account_id && !/^\d+\.\d+\.\d+$/.test(this.receiver_account_id)) {
            throw new Error('Invalid receiver_account_id format. Expected format: shard.realm.num');
        }

        if (this.sender_account_id && !/^\d+\.\d+\.\d+$/.test(this.sender_account_id)) {
            throw new Error('Invalid sender_account_id format. Expected format: shard.realm.num');
        }
    }
}