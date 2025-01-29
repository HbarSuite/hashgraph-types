import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _Entity } from './hashgraph.restful.staking.reward.models.entity.model';

/**
 * @file hashgraph.restful.staking.reward.models.response.model.ts
 * @class _Response
 * @description Core response model for staking reward queries in the Hedera network.
 * 
 * This model provides a structured format for paginated reward data with:
 * - Collection of reward entities
 * - Pagination support
 * - Automatic validation
 * - Type safety
 * 
 * Features built-in handling for:
 * - Multiple reward records
 * - Pagination links
 * - Data validation
 * - Type conversion
 * 
 * @implements {IHashgraph.IRestful.IStaking.IReward.IResponse}
 * @category Models
 * @subcategory Response
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new paginated staking rewards response
 * const response = new _Response({
 *   rewards: [
 *     {
 *       account_id: '0.0.1234',
 *       amount: 100000000, // 1 HBAR
 *       timestamp: '2023-01-01T00:00:00.000Z'
 *     },
 *     {
 *       account_id: '0.0.5678',
 *       amount: 50000000, // 0.5 HBAR
 *       timestamp: '2023-01-01T00:00:00.000Z'
 *     }
 *   ],
 *   links: {
 *     next: 'https://api.hedera.com/api/v1/staking/rewards?page=2'
 *   }
 * });
 * ```
 */
export class _Response implements IHashgraph.IRestful.IStaking.IReward.IResponse {
    /**
     * Array of staking reward entities
     * @type {_Entity[] | undefined}
     * @description Collection of staking reward records returned by the API.
     * Each entity contains detailed information about a specific reward:
     * - Account ID (recipient)
     * - Reward amount (in tinybars)
     * - Timestamp of issuance
     * 
     * Features:
     * - Automatic type conversion to _Entity instances
     * - Built-in validation for each entity
     * - Optional field (can be undefined for empty results)
     * 
     * @memberof _Response
     * @optional
     */
    @ApiProperty({
        description: 'An array of staking rewards received by accounts',
        type: () => [_Entity],
        required: false,
        example: [
            {
                account_id: '0.0.1234',
                amount: 100000000,
                timestamp: '2023-01-01T00:00:00.000Z'
            },
            {
                account_id: '0.0.5678',
                amount: 50000000,
                timestamp: '2023-01-01T00:00:00.000Z'
            }
        ]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Entity)
    rewards?: _Entity[];

    /**
     * Pagination links
     * @type {_Links | undefined}
     * @description Navigation links for paginated results.
     * 
     * Features:
     * - Next page URL
     * - Automatic type conversion
     * - Built-in validation
     * 
     * Format:
     * ```typescript
     * {
     *   next: string | null // URL for next page or null if no more pages
     * }
     * ```
     * 
     * @memberof _Response
     * @optional
     */
    @ApiProperty({
        description: 'Pagination links for the response',
        type: () => _Links,
        required: false,
        example: {
            next: 'https://api.hedera.com/api/v1/staking/rewards?page=2'
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _Response.
     * @constructor
     * @param {IHashgraph.IRestful.IStaking.IReward.IResponse} data - Initial response data
     * @throws {Error} If validation fails for any of:
     * - Invalid reward entity data
     * - Invalid pagination link format
     * - Type conversion errors
     * 
     * @description Initializes a new staking rewards response with:
     * 1. Conversion of raw reward data to _Entity instances
     * 2. Creation of _Links instance for pagination
     * 3. Comprehensive validation of all fields
     * 4. Detailed error reporting on validation failure
     * 
     * @memberof _Response
     */
    constructor(data: IHashgraph.IRestful.IStaking.IReward.IResponse) {
        // Map reward data to _Entity instances if rewards exist
        this.rewards = data.rewards ? data.rewards.map(reward => new _Entity(reward)) : undefined;
        
        // Create new _Links instance if links exist
        this.links = data.links ? new _Links(data.links.next) : undefined;

        // Validate the instance
        const errors = require('class-validator').validateSync(this);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.map(e => e.toString()).join(', ')}`);
        }
    }
}