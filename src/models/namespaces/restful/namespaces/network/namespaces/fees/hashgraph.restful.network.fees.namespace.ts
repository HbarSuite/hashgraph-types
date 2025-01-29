import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Fee } from './models/hashgraph.restful.network.fees.models.fee.model'
import { _Response } from './models/hashgraph.restful.network.fees.models.response.model'

/**
 * @file hashgraph.restful.network.fees.namespace.ts
 * @namespace _Fees
 * @description Comprehensive namespace for managing Hedera network fee structures.
 * 
 * Provides models and types for:
 * - Transaction fee calculations
 * - Fee schedules and updates
 * - Gas cost estimations
 * - Historical fee data
 * 
 * Features built-in support for:
 * - Fee calculations
 * - Cost estimations
 * - Schedule management
 * - Data validation
 * 
 * @category Network
 * @subcategory Fees
 * @since 2.0.0
 */
export namespace _Fees {
    /**
     * Network Fee Model
     * @class Fee
     * @extends {_Fee}
     * @description Comprehensive model for individual network fee configurations.
     * 
     * Features:
     * - Fee calculations
     * - Gas estimations
     * - Cost breakdowns
     * - Fee schedules
     * 
     * Includes validation for:
     * - Fee amounts
     * - Gas limits
     * - Cost components
     * 
     * @example
     * ```typescript
     * const fee = new Fee({
     *   gas: 400000,
     *   service_fee: 50000,
     *   network_fee: 30000,
     *   node_fee: 20000
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Fees.Fee'
    })
    export class Fee extends _Fee {}

    /**
     * Network Fees Response Model
     * @class Response
     * @extends {_Response}
     * @description Comprehensive model for network fee query responses.
     * 
     * Features:
     * - Fee listings
     * - Schedule details
     * - Cost summaries
     * - Historical data
     * 
     * Includes validation for:
     * - Response format
     * - Fee structures
     * - Data integrity
     * 
     * @example
     * ```typescript
     * const response = new Response({
     *   fees: [
     *     {
     *       gas: 400000,
     *       service_fee: 50000,
     *       network_fee: 30000,
     *       node_fee: 20000
     *     }
     *   ],
     *   timestamp: '2023-05-12T00:00:00.000Z'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Fees.Response'
    })
    export class Response extends _Response {}
} 