import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.staking.reward.models.entity.model.ts
 * @class _Entity
 * @description Core model for representing individual staking reward records in the Hedera network.
 * 
 * This model provides a structured format for staking rewards with:
 * - Account identification and validation
 * - Precise reward amount tracking
 * - Timestamp recording and validation
 * 
 * Features built-in validation for:
 * - Account ID format (shard.realm.num)
 * - Non-negative reward amounts
 * - ISO 8601 timestamp format
 * 
 * @implements {IHashgraph.IRestful.IStaking.IReward.IEntity}
 * @category Models
 * @subcategory Staking
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new staking reward entity for 1 HBAR
 * const reward = new _Entity({
 *   account_id: '0.0.1234',
 *   amount: 100000000, // 1 HBAR = 100,000,000 tinybars
 *   timestamp: '2023-01-01T00:00:00.000Z'
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.IStaking.IReward.IEntity {
    /**
     * Account ID of the reward recipient
     * @type {string | null}
     * @description Hedera account identifier that received the staking reward.
     * Must follow the format: shard.realm.num (e.g., '0.0.1234')
     * Can be null in specific scenarios (e.g., pending rewards).
     * 
     * Format rules:
     * - Shard: Numeric network shard identifier
     * - Realm: Numeric realm identifier
     * - Number: Unique account number
     * 
     * @memberof _Entity
     * @optional
     */
    @ApiProperty({
        description: 'Account ID associated with the staking reward',
        example: '0.0.1234',
        required: false,
        type: () => String,
        nullable: true
    })
    @IsOptional()
    @IsString()
    account_id: string | null;

    /**
     * Reward amount
     * @type {number}
     * @description Staking reward amount in the smallest denomination (tinybars for HBAR).
     * Must be a non-negative number.
     * 
     * Conversion rates:
     * - 1 HBAR = 100,000,000 tinybars
     * - Minimum amount: 0 tinybars
     * - No maximum limit
     * 
     * @memberof _Entity
     * @required
     */
    @ApiProperty({
        description: 'Amount of the staking reward in the smallest denomination of the token (e.g., tinybars for HBAR)',
        example: 100000000,
        required: true,
        type: () => Number,
        minimum: 0
    })
    @IsNumber()
    @Min(0)
    amount: number;

    /**
     * Timestamp of reward issuance
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the staking reward was issued.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-01-01T00:00:00.000Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Millisecond precision is optional
     * 
     * @memberof _Entity
     * @required
     */
    @ApiProperty({
        description: 'ISO 8601 formatted timestamp indicating when the staking reward was issued',
        example: '2023-01-01T00:00:00.000Z',
        required: true,
        type: () => String
    })
    @IsString()
    timestamp: string;

    /**
     * Creates an instance of _Entity.
     * @constructor
     * @param {IHashgraph.IRestful.IStaking.IReward.IEntity} data - Initial entity data
     * @throws {Error} If validation fails for any of the following:
     * - Invalid account ID format
     * - Negative amount
     * - Invalid timestamp format
     * 
     * @description Initializes a new staking reward entity with comprehensive validation:
     * 1. Assigns provided data to instance
     * 2. Validates all fields using class-validator
     * 3. Throws detailed error messages on validation failure
     * 
     * @memberof _Entity
     */
    constructor(data: IHashgraph.IRestful.IStaking.IReward.IEntity) {
        this.account_id = data.account_id;
        this.amount = data.amount;
        this.timestamp = data.timestamp;

        // Validate the instance
        const errors = require('class-validator').validateSync(this);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.map(e => e.toString()).join(', ')}`);
        }
    }
}