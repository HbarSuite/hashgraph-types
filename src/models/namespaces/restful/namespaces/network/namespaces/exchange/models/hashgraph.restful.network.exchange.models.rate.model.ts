import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'

/**
 * @file hashgraph.restful.network.exchange.models.rate.model.ts
 * @class _Rate
 * @description Comprehensive model for managing Hedera network exchange rates.
 * 
 * This model provides detailed information about:
 * - HBAR to USD/cent conversions
 * - Rate expiration timing
 * - Conversion calculations
 * 
 * Features built-in support for:
 * - Precise rate calculations
 * - Time-based expiration
 * - Bidirectional conversions
 * 
 * @implements {IHashgraph.IRestful.INetwork.IExchange.IRate}
 * @category Models
 * @subcategory Exchange
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const rate = new _Rate({
 *   cent_equivalent: 1000, // 10.00 USD
 *   expiration_time: 1683849600, // Unix timestamp
 *   hbar_equivalent: 50000000 // 500 HBAR
 * });
 * ```
 */
export class _Rate implements IHashgraph.IRestful.INetwork.IExchange.IRate {
    /**
     * USD cent equivalent
     * @type {number}
     * @description Number of US cents equivalent to the specified HBAR amount.
     * Used for precise currency conversions.
     * 
     * Format:
     * - Integer representing cents (e.g., 1000 = $10.00 USD)
     * - Must be non-negative
     * - Precision to 2 decimal places when converted to dollars
     * 
     * @optional
     */
    @ApiProperty({
        description: 'The number of cents (USD) equivalent to the specified number of hbars',
        type: () => Number,
        example: 1000, // 10.00 USD
        required: false
    })
    cent_equivalent: number;

    /**
     * Rate expiration timestamp
     * @type {number}
     * @description Unix timestamp indicating when this exchange rate expires.
     * Used for rate transition management.
     * 
     * Format:
     * - Unix timestamp in seconds
     * - Must be in the future
     * - UTC timezone
     * 
     * @optional
     */
    @ApiProperty({
        description: 'The expiration timestamp of the rate (Unix seconds)',
        type: () => Number,
        example: 1683849600, // Unix timestamp
        required: false
    })
    expiration_time: number;

    /**
     * HBAR equivalent
     * @type {number}
     * @description Number of HBAR equivalent to the specified cent amount.
     * Used for precise currency conversions.
     * 
     * Format:
     * - Integer representing tinybars
     * - Must be non-negative
     * - 1 HBAR = 100,000,000 tinybars
     * 
     * @optional
     */
    @ApiProperty({
        description: 'The number of hbars (in tinybars) equivalent to the specified number of cents',
        type: () => Number,
        example: 50000000, // 500 HBAR
        required: false
    })
    hbar_equivalent: number;

    /**
     * Creates an instance of _Rate.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.INetwork.IExchange.IRate>} [rate] - Initial rate data
     * 
     * @description Initializes a new exchange rate instance:
     * - Assigns rate values if provided
     * - Maintains optional nature of all fields
     * - Preserves numeric precision
     * 
     * Note: This model uses optional initialization to support
     * various rate creation scenarios and partial updates.
     */
    constructor(rate?: Partial<IHashgraph.IRestful.INetwork.IExchange.IRate>) {
        if (rate) {
            this.cent_equivalent = rate.cent_equivalent;
            this.expiration_time = rate.expiration_time;
            this.hbar_equivalent = rate.hbar_equivalent;
        }
    }
}