import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsNumber, IsObject, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { _StakingPeriod } from './hashgraph.restful.network.stake.models.staking-period.model';

/**
 * @file hashgraph.restful.network.stake.models.info.model.ts
 * @class _Info
 * @description Comprehensive model for network staking information and parameters.
 * 
 * This model provides detailed information about:
 * - Staking thresholds and limits
 * - Reward rates and calculations
 * - Network stake metrics
 * - Period configurations
 * 
 * Features built-in validation for:
 * - Numeric boundaries
 * - Rate calculations
 * - Period structures
 * - Required fields
 * 
 * @implements {IHashgraph.IRestful.INetwork.IStake.IInfo}
 * @category Models
 * @subcategory Network
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const info = new _Info({
 *   max_stake_rewarded: 1000000000,
 *   max_staking_reward_rate_per_hbar: 0.0001,
 *   max_total_reward: 50000000,
 *   node_reward_fee_fraction: 0.1,
 *   reserved_staking_rewards: 1000000,
 *   reward_balance_threshold: 100000,
 *   stake_total: 500000000,
 *   staking_period: {
 *     from: '2023-01-01T00:00:00Z',
 *     to: '2023-12-31T23:59:59Z'
 *   },
 *   staking_period_duration: 1440,
 *   staking_periods_stored: 365,
 *   staking_reward_fee_fraction: 0.02,
 *   staking_reward_rate: 0.0008,
 *   staking_start_threshold: 10000,
 *   unreserved_staking_reward_balance: 2000000
 * });
 * ```
 */
export class _Info implements IHashgraph.IRestful.INetwork.IStake.IInfo {
    /**
     * Maximum stake eligible for rewards
     * @type {number}
     * @description Maximum amount of HBAR that can be staked and receive rewards.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * @required
     */
    @ApiProperty({
        description: 'Maximum stake that can be rewarded (in tinybars)',
        type: () => Number,
        example: 1000000000,
        required: true
    })
    @IsNumber()
    max_stake_rewarded!: number;

    /**
     * Maximum reward rate per HBAR
     * @type {number}
     * @description Maximum reward rate applied to staked HBAR.
     * Expressed as a decimal (e.g., 0.0001 = 0.01%).
     * @required
     */
    @ApiProperty({
        description: 'Maximum staking reward rate per HBAR (decimal)',
        type: () => Number,
        example: 0.0001,
        required: true
    })
    @IsNumber()
    max_staking_reward_rate_per_hbar!: number;

    /**
     * Maximum total network reward
     * @type {number}
     * @description Maximum total rewards that can be distributed across all stakers.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Maximum total reward in tinybars',
        type: () => Number,
        example: 50000000,
        required: true
    })
    @IsNumber()
    max_total_reward!: number;

    /**
     * Node operator reward fee fraction
     * @type {number}
     * @description Fraction of rewards allocated to node operators.
     * Expressed as a decimal (e.g., 0.1 = 10%).
     * @required
     */
    @ApiProperty({
        description: 'Node reward fee fraction (decimal)',
        type: () => Number,
        example: 0.1,
        required: true
    })
    @IsNumber()
    node_reward_fee_fraction!: number;

    /**
     * Reserved staking rewards
     * @type {number}
     * @description Amount of HBAR reserved for staking rewards.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Reserved staking rewards in tinybars',
        type: () => Number,
        example: 1000000,
        required: true
    })
    @IsNumber()
    reserved_staking_rewards!: number;

    /**
     * Reward balance threshold
     * @type {number}
     * @description Minimum balance required for reward distribution.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Reward balance threshold in tinybars',
        type: () => Number,
        example: 100000,
        required: true
    })
    @IsNumber()
    reward_balance_threshold!: number;

    /**
     * Total network stake
     * @type {number}
     * @description Total amount of HBAR currently staked in the network.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Total stake in the network (tinybars)',
        type: () => Number,
        example: 500000000,
        required: true
    })
    @IsNumber()
    stake_total!: number;

    /**
     * Current staking period
     * @type {_StakingPeriod}
     * @description Active staking period information including start and end times.
     * Uses ISO 8601 format for timestamps.
     * @required
     */
    @ApiProperty({
        description: 'Current staking period information',
        type: () => _StakingPeriod,
        example: {
            from: '2023-01-01T00:00:00Z',
            to: '2023-12-31T23:59:59Z'
        },
        required: true
    })
    @Type(() => _StakingPeriod)
    @IsObject()
    staking_period!: _StakingPeriod;

    /**
     * Staking period duration
     * @type {number}
     * @description Length of each staking period in minutes.
     * Used for reward calculations and period transitions.
     * @required
     */
    @ApiProperty({
        description: 'Duration of staking period in minutes',
        type: () => Number,
        example: 1440,
        required: true
    })
    @IsNumber()
    staking_period_duration!: number;

    /**
     * Number of stored periods
     * @type {number}
     * @description Number of historical staking periods maintained.
     * Used for reward history and calculations.
     * @required
     */
    @ApiProperty({
        description: 'Number of staking periods stored',
        type: () => Number,
        example: 365,
        required: true
    })
    @IsNumber()
    staking_periods_stored!: number;

    /**
     * Staking reward fee fraction
     * @type {number}
     * @description Fraction of rewards taken as fees.
     * Expressed as a decimal (e.g., 0.02 = 2%).
     * @required
     */
    @ApiProperty({
        description: 'Staking reward fee fraction (decimal)',
        type: () => Number,
        example: 0.02,
        required: true
    })
    @IsNumber()
    staking_reward_fee_fraction!: number;

    /**
     * Current staking reward rate
     * @type {number}
     * @description Active reward rate for staked HBAR.
     * Expressed as a decimal (e.g., 0.0008 = 0.08%).
     * @required
     */
    @ApiProperty({
        description: 'Current staking reward rate (decimal)',
        type: () => Number,
        example: 0.0008,
        required: true
    })
    @IsNumber()
    staking_reward_rate!: number;

    /**
     * Minimum staking threshold
     * @type {number}
     * @description Minimum amount required to participate in staking.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Minimum staking threshold in tinybars',
        type: () => Number,
        example: 10000,
        required: true
    })
    @IsNumber()
    staking_start_threshold!: number;

    /**
     * Unreserved reward balance
     * @type {number}
     * @description Available balance for staking rewards not yet reserved.
     * Specified in tinybars.
     * @required
     */
    @ApiProperty({
        description: 'Unreserved staking reward balance in tinybars',
        type: () => Number,
        example: 2000000,
        required: true
    })
    @IsNumber()
    unreserved_staking_reward_balance!: number;
}