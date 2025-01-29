import { _IInfo } from './interfaces/hashgraph.restful.network.supply.info.interface';

/**
 * @file hashgraph.restful.network.supply.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for network supply functionality in the Hashgraph Network REST API.
 * This namespace consolidates interfaces for managing supply information.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Supply Namespace
 * @namespace _ISupply
 * @description Provides a comprehensive set of types for managing network supply
 * in the Hashgraph Network. This namespace includes:
 * - Total supply tracking and metrics
 * - Released supply monitoring
 * - Supply timestamp information
 * Used to track and manage token supply across the network.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the supply namespace
 * import { _ISupply } from '@hashgraph/sdk';
 * 
 * // Access supply information
 * const supplyInfo: _ISupply.IInfo = {
 *   total_supply: "5000000000000000000",     // 50 billion HBAR (max supply)
 *   released_supply: "3999999999999999949",  // Currently released HBAR
 *   timestamp: "1586567700.453054000"        // When info was recorded
 * };
 * 
 * // Example of calculating unreleased supply
 * const getUnreleasedSupply = (info: _ISupply.IInfo): bigint => {
 *   return BigInt(info.total_supply) - BigInt(info.released_supply);
 * };
 * ```
 */
export namespace _ISupply {
    /**
     * Network Supply Information
     * @type {_IInfo}
     * @description Represents comprehensive network supply information including:
     * - Total token supply (maximum possible supply)
     * - Released supply (tokens in circulation) 
     * - Timestamp of supply information
     * Used for tracking and monitoring network-wide token supply metrics.
     * @see {@link _IInfo}
     * @memberof _ISupply
     * @since 2.0.0
     */
    export type IInfo = _IInfo;
}
