import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Rate } from './models/hashgraph.restful.network.exchange.models.rate.model'
import { _Info } from './models/hashgraph.restful.network.exchange.models.info.model'

/**
 * @file hashgraph.restful.network.exchange.namespace.ts
 * @namespace _Exchange
 * @description Comprehensive namespace for managing Hedera network exchange rates.
 * 
 * Provides models and types for:
 * - Current exchange rates
 * - Rate transitions
 * - Currency conversions
 * - Historical rates
 * 
 * Features built-in support for:
 * - Rate calculations
 * - Time-based transitions
 * - Data validation
 * - Conversion accuracy
 * 
 * @category Network
 * @subcategory Exchange
 * @since 2.0.0
 */
export namespace _Exchange {
    /**
     * Exchange Rate Model
     * @class Rate
     * @extends {_Rate}
     * @description Comprehensive model for managing currency exchange rates.
     * 
     * Features:
     * - HBAR to cent conversions
     * - Precise rate calculations
     * - Automatic validation
     * - Rate boundaries
     * 
     * Includes validation for:
     * - Rate ranges
     * - Conversion accuracy
     * - Decimal precision
     * 
     * @example
     * ```typescript
     * const rate = new Rate({
     *   hbar_equivalent: 1,
     *   cent_equivalent: 12.5,
     *   expiration_time: '2023-12-31T23:59:59.999Z'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Exchange.Rate'
    })
    export class Rate extends _Rate {}

    /**
     * Exchange Rate Information Model
     * @class Info
     * @extends {_Info}
     * @description Comprehensive model for tracking exchange rate transitions.
     * 
     * Features:
     * - Current rate tracking
     * - Next rate prediction
     * - Transition timing
     * - Rate history
     * 
     * Includes validation for:
     * - Rate sequences
     * - Timestamp formats
     * - Rate relationships
     * 
     * @example
     * ```typescript
     * const info = new Info({
     *   current_rate: {
     *     hbar_equivalent: 1,
     *     cent_equivalent: 12.5,
     *     expiration_time: '2023-12-31T23:59:59.999Z'
     *   },
     *   next_rate: {
     *     hbar_equivalent: 1,
     *     cent_equivalent: 13.0,
     *     expiration_time: '2024-01-31T23:59:59.999Z'
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Exchange.Info'
    })
    export class Info extends _Info {}
} 