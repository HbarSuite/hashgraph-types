import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'
import { _Rate } from './hashgraph.restful.network.exchange.models.rate.model'

/**
 * @file hashgraph.restful.network.exchange.models.info.model.ts
 * @class _Info
 * @description Comprehensive model for managing Hedera network exchange rate information.
 * 
 * This model provides detailed information about:
 * - Current exchange rates
 * - Upcoming rate changes
 * - Rate transition timing
 * - Rate history tracking
 * 
 * Features built-in support for:
 * - Rate transitions
 * - Time-based updates
 * - Rate validation
 * - Historical tracking
 * 
 * @implements {IHashgraph.IRestful.INetwork.IExchange.IInfo}
 * @category Models
 * @subcategory Exchange
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const info = new _Info({
 *   current_rate: {
 *     cent_equivalent: 1000,
 *     hbar_equivalent: 50000000,
 *     expiration_time: 1683849600
 *   },
 *   next_rate: {
 *     cent_equivalent: 1100,
 *     hbar_equivalent: 50000000,
 *     expiration_time: 1683936000
 *   },
 *   timestamp: '2023-05-12T00:00:00.000Z'
 * });
 * ```
 */
export class _Info implements IHashgraph.IRestful.INetwork.IExchange.IInfo {
    /**
     * Current exchange rate
     * @type {IHashgraph.IRestful.INetwork.IExchange.IRate}
     * @description Active exchange rate configuration.
     * Provides current HBAR to USD conversion rates.
     * 
     * Features:
     * - Current rate details
     * - Expiration timing
     * - Conversion factors
     * 
     * @optional
     */
    @ApiProperty({
        description: 'Currently active exchange rate configuration',
        type: () => _Rate,
        example: {
            cent_equivalent: 1000,
            hbar_equivalent: 50000000,
            expiration_time: 1683849600
        },
        required: false
    })
    current_rate: IHashgraph.IRestful.INetwork.IExchange.IRate;

    /**
     * Next exchange rate
     * @type {IHashgraph.IRestful.INetwork.IExchange.IRate}
     * @description Upcoming exchange rate configuration.
     * Provides future HBAR to USD conversion rates.
     * 
     * Features:
     * - Future rate details
     * - Activation timing
     * - Conversion factors
     * 
     * @optional
     */
    @ApiProperty({
        description: 'Upcoming exchange rate configuration',
        type: () => _Rate,
        example: {
            cent_equivalent: 1100,
            hbar_equivalent: 50000000,
            expiration_time: 1683936000
        },
        required: false
    })
    next_rate: IHashgraph.IRestful.INetwork.IExchange.IRate;

    /**
     * Information timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when this rate information was recorded.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-05-12T00:00:00.000Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Must not be in the future
     * 
     * @optional
     */
    @ApiProperty({
        description: 'Timestamp when this rate information was recorded (ISO 8601)',
        type: () => String,
        example: '2023-05-12T00:00:00.000Z',
        required: false
    })
    timestamp: string;

    /**
     * Creates an instance of _Info.
     * @constructor
     * @param {Partial<_Info>} [info] - Initial exchange rate information
     * 
     * @description Initializes a new exchange rate info instance:
     * - Assigns current and next rates if provided
     * - Sets timestamp if provided
     * - Maintains optional nature of all fields
     * 
     * Note: This model uses optional initialization to support
     * various information states and partial updates.
     */
    constructor(info?: Partial<_Info>) {
        if (info) {
            this.current_rate = info.current_rate;
            this.next_rate = info.next_rate;
            this.timestamp = info.timestamp;
        }
    }
}