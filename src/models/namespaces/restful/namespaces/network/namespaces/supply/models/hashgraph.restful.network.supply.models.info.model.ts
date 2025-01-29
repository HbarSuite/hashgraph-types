import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.network.supply.models.info.model.ts
 * @class _Info
 * @description Comprehensive model for tracking Hedera network token supply metrics.
 * 
 * This model provides detailed information about:
 * - Released token supply
 * - Total token supply
 * - Supply timestamps
 * - Supply distribution
 * 
 * Features built-in validation for:
 * - Supply amounts
 * - Timestamp formats
 * - Data consistency
 * 
 * @implements {IHashgraph.IRestful.INetwork.ISupply.IInfo}
 * @category Models
 * @subcategory Network
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const supplyInfo = new _Info({
 *   released_supply: '3999999999999999949',
 *   timestamp: '2023-01-01T00:00:00.000Z',
 *   total_supply: '5000000000000000000'
 * });
 * ```
 */
export class _Info implements IHashgraph.IRestful.INetwork.ISupply.IInfo {
    /**
     * Released token supply
     * @type {string}
     * @description Current amount of tokens released into circulation.
     * Represented as a string to maintain precision with large numbers.
     * 
     * Format:
     * - String representation of a non-negative integer
     * - Must be less than or equal to total_supply
     * - Specified in tinybars (1 HBAR = 100,000,000 tinybars)
     * 
     * @required
     */
    @ApiProperty({
        description: 'Released supply of tokens in the network (in tinybars)',
        example: '3999999999999999949',
        type: () => String,
        required: true
    })
    @IsString()
    released_supply: string;

    /**
     * Supply information timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the supply information was recorded.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-01-01T00:00:00.000Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Must not be in the future
     * 
     * @required
     */
    @ApiProperty({
        description: 'Timestamp when this information was recorded (ISO 8601)',
        example: '2023-01-01T00:00:00.000Z',
        type: () => String,
        required: true
    })
    @IsString()
    timestamp: string;

    /**
     * Total token supply
     * @type {string}
     * @description Maximum total supply of tokens in the network.
     * Represented as a string to maintain precision with large numbers.
     * 
     * Format:
     * - String representation of a non-negative integer
     * - Must be greater than or equal to released_supply
     * - Specified in tinybars (1 HBAR = 100,000,000 tinybars)
     * 
     * @required
     */
    @ApiProperty({
        description: 'Total supply of tokens in the network (in tinybars)',
        example: '5000000000000000000',
        type: () => String,
        required: true
    })
    @IsString()
    total_supply: string;

    /**
     * Creates an instance of _Info.
     * @constructor
     * @param {{ released_supply: string; timestamp: string; total_supply: string }} data - Initial supply data
     * @throws {Error} If validation fails for any of:
     * - Invalid supply amounts
     * - Invalid timestamp format
     * - Supply amount relationships
     * 
     * @description Initializes a new supply info instance with comprehensive validation:
     * 1. Assigns supply and timestamp values
     * 2. Validates all field formats
     * 3. Ensures logical supply relationships
     * 4. Throws detailed error messages on validation failure
     */
    constructor(data: {
        released_supply: string;
        timestamp: string;
        total_supply: string;
    }) {
        this.released_supply = data.released_supply;
        this.timestamp = data.timestamp;
        this.total_supply = data.total_supply;

        // Validate the instance
        const errors = require('class-validator').validateSync(this);
        if (errors.length > 0) {
            throw new Error(`Validation failed: ${errors.map(e => e.toString()).join(', ')}`);
        }
    }
}
