import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.staking.reward.models.transfer.model.ts
 * @class _Transfer
 * @description Core model for handling staking reward transfers in the Hedera network.
 * 
 * This model provides a structured format for reward transfers with:
 * - Account identification and validation
 * - Transfer amount specification
 * - Comprehensive validation rules
 * 
 * Features built-in validation for:
 * - Account ID format (shard.realm.num)
 * - Non-negative transfer amounts
 * - Required field presence
 * 
 * @implements {IHashgraph.IRestful.IStaking.IReward.ITransfer}
 * @category Models
 * @subcategory Transfer
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new staking reward transfer of 1 HBAR
 * const transfer = new _Transfer({
 *   account: '0.0.1234',
 *   amount: 100000000 // 1 HBAR = 100,000,000 tinybars
 * });
 * ```
 */
export class _Transfer implements IHashgraph.IRestful.IStaking.IReward.ITransfer {
    /**
     * Account ID or alias of the reward recipient
     * @type {string | null}
     * @description Hedera account identifier or alias for the reward recipient.
     * Must follow the format: shard.realm.num (e.g., '0.0.1234')
     * Can be null in specific scenarios (e.g., pending transfers).
     * 
     * Format rules:
     * - Shard: Numeric network shard identifier
     * - Realm: Numeric realm identifier
     * - Number: Unique account number
     * 
     * @memberof _Transfer
     * @optional
     */
    @ApiProperty({
        description: 'The account ID or alias of the account receiving the staking reward',
        example: '0.0.1234',
        required: false,
        type: () => String,
        nullable: true
    })
    @IsOptional()
    @IsString()
    account: string | null;

    /**
     * Transfer amount
     * @type {number}
     * @description Amount of HBAR to transfer as a staking reward.
     * Must be specified in tinybars (smallest HBAR denomination).
     * 
     * Conversion rates:
     * - 1 HBAR = 100,000,000 tinybars
     * - Minimum amount: 0 tinybars
     * - No maximum limit
     * 
     * Validation:
     * - Must be non-negative
     * - Must be a whole number
     * 
     * @memberof _Transfer
     * @required
     */
    @ApiProperty({
        description: 'The amount of HBAR (in tinybars) transferred as a staking reward',
        example: 100000000,
        required: true,
        type: () => Number,
        minimum: 0
    })
    @IsNumber()
    @Min(0)
    amount: number;

    /**
     * Creates an instance of _Transfer.
     * @constructor
     * @param {IHashgraph.IRestful.IStaking.IReward.ITransfer} data - Initial transfer data
     * @throws {Error} If validation fails for any of:
     * - Invalid account format
     * - Negative amount
     * - Missing required fields
     * 
     * @description Initializes a new staking reward transfer with comprehensive validation:
     * 1. Assigns provided data to instance
     * 2. Validates all fields using class-validator
     * 3. Throws detailed error messages on validation failure
     * 
     * @memberof _Transfer
     */
    constructor(data: IHashgraph.IRestful.IStaking.IReward.ITransfer) {
        this.account = data.account;
        this.amount = data.amount;

        // Validate the instance
        const errors = require('class-validator').validateSync(this);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.map(e => e.toString()).join(', ')}`);
        }
    }
}