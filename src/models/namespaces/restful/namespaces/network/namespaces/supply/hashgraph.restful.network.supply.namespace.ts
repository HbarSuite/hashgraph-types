import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Info } from './models/hashgraph.restful.network.supply.models.info.model';

/**
 * @file hashgraph.restful.network.supply.namespace.ts
 * @namespace _Supply
 * @description Comprehensive namespace for managing Hedera network supply information.
 * 
 * Provides models and types for:
 * - Total supply tracking
 * - Circulating supply metrics
 * - Supply distribution data
 * - Historical supply changes
 * 
 * Features built-in support for:
 * - Supply calculations
 * - Distribution tracking
 * - Metric validation
 * - Data integrity checks
 * 
 * @category Network
 * @subcategory Supply
 * @since 2.0.0
 */
export namespace _Supply {
    /**
     * Network Supply Information Model
     * @class Info
     * @extends {_Info}
     * @description Comprehensive model for tracking and managing network supply metrics.
     * 
     * Features:
     * - Total supply tracking
     * - Circulating supply monitoring
     * - Distribution analysis
     * - Historical data access
     * 
     * Includes validation for:
     * - Supply amounts
     * - Distribution ratios
     * - Data consistency
     * 
     * @example
     * ```typescript
     * const supplyInfo = new Info({
     *   released_supply: 5000000000,
     *   total_supply: 50000000000,
     *   max_supply: 50000000000,
     *   circulating_supply: 4500000000
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Supply.Info'
    })
    export class Info extends _Info {}
}
