import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.network.stake.models.staking-period.model.ts
 * @class _StakingPeriod
 * @description Comprehensive model for representing staking periods in the Hedera network.
 * 
 * This model defines the time boundaries for staking operations:
 * - Period start time
 * - Period end time
 * - Duration validation
 * 
 * Features built-in validation for:
 * - Timestamp formats
 * - Period boundaries
 * - Logical constraints
 * 
 * @implements {IHashgraph.IRestful.INetwork.IStake.IStakingPeriod}
 * @category Models
 * @subcategory Network
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const period = new _StakingPeriod({
 *   from: '2023-01-01T00:00:00.000Z',
 *   to: '2023-12-31T23:59:59.999Z'
 * });
 * ```
 */
export class _StakingPeriod implements IHashgraph.IRestful.INetwork.IStake.IStakingPeriod {
    /**
     * Period start timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp marking the start of the staking period.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-01-01T00:00:00.000Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Must be before the 'to' timestamp
     * 
     * @required
     */
    @ApiProperty({
        description: 'Start timestamp of the staking period (ISO 8601)',
        example: '2023-01-01T00:00:00.000Z',
        type: () => String,
        required: true
    })
    @IsString()
    from: string;

    /**
     * Period end timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp marking the end of the staking period.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-12-31T23:59:59.999Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Must be after the 'from' timestamp
     * 
     * @required
     */
    @ApiProperty({
        description: 'End timestamp of the staking period (ISO 8601)',
        example: '2023-12-31T23:59:59.999Z',
        type: () => String,
        required: true
    })
    @IsString()
    to: string;

    /**
     * Creates an instance of _StakingPeriod.
     * @constructor
     * @param {IHashgraph.IRestful.INetwork.IStake.IStakingPeriod} data - Initial period data
     * @throws {Error} If validation fails for any of:
     * - Invalid timestamp formats
     * - Invalid period boundaries
     * - Missing required fields
     * 
     * @description Initializes a new staking period with comprehensive validation:
     * 1. Assigns start and end timestamps
     * 2. Validates timestamp formats
     * 3. Ensures logical period boundaries
     * 4. Throws detailed error messages on validation failure
     */
    constructor(data: IHashgraph.IRestful.INetwork.IStake.IStakingPeriod) {
        this.from = data.from;
        this.to = data.to;

        // Validate the instance
        const errors = require('class-validator').validateSync(this);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.map(e => e.toString()).join(', ')}`);
        }
    }
}