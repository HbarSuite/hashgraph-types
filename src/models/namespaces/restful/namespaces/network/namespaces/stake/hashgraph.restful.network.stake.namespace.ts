import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Info } from './models/hashgraph.restful.network.stake.models.info.model'
import { _StakingPeriod } from './models/hashgraph.restful.network.stake.models.staking-period.model'

/**
 * @file hashgraph.restful.network.stake.namespace.ts
 * @namespace _Stake
 * @description Comprehensive namespace for managing network staking operations and information.
 * 
 * Provides models and types for:
 * - Staking period management
 * - Network stake metrics
 * - Stake parameters
 * - Period transitions
 * 
 * Features built-in support for:
 * - Period validation
 * - Stake calculations
 * - Time-based operations
 * - Data integrity checks
 * 
 * @category Network
 * @subcategory Stake
 * @since 2.0.0
 */
export namespace _Stake {
    /**
     * Network Stake Information Model
     * @class Info
     * @extends {_Info}
     * @description Comprehensive model for network staking metrics and parameters.
     * 
     * Tracks and manages:
     * - Total network stake
     * - Staking periods
     * - Reward rates
     * - Node participation
     * 
     * Features built-in validation for:
     * - Stake amounts
     * - Time periods
     * - Rate calculations
     * 
     * @example
     * ```typescript
     * const stakeInfo = new Info({
     *   maxStakingRewardRatePerHbar: 100000000,
     *   nodeRewardFeeDenominator: 100,
     *   stakingPeriod: {
     *     from: '2023-01-01T00:00:00.000Z',
     *     to: '2023-12-31T23:59:59.999Z'
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Stake.Info'
    })
    export class Info extends _Info {}

    /**
     * Staking Period Model
     * @class StakingPeriod
     * @extends {_StakingPeriod}
     * @description Structured model for representing and managing staking periods.
     * 
     * Handles:
     * - Period start and end times
     * - Duration calculations
     * - Period transitions
     * - Validation rules
     * 
     * Features built-in validation for:
     * - Time formats (ISO 8601)
     * - Period boundaries
     * - Logical constraints
     * 
     * @example
     * ```typescript
     * const period = new StakingPeriod({
     *   from: '2023-01-01T00:00:00.000Z',
     *   to: '2023-12-31T23:59:59.999Z'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Stake.StakingPeriod'
    })
    export class StakingPeriod extends _StakingPeriod {}
} 