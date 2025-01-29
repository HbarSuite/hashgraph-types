import { _IExchange } from './namespaces/exchange/hashgraph.restful.network.exchange.namespace'
import { _IFees } from './namespaces/fees/hashgraph.restful.network.fees.namespace'
import { _INodes } from './namespaces/nodes/hashgraph.restful.network.nodes.namespace'
import { _IStake } from './namespaces/stake/hashgraph.restful.network.stake.namespace'
import { _ISupply } from './namespaces/supply/hashgraph.restful.network.supply.namespace'

/**
 * @file hashgraph.restful.network.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the root namespace for network-related functionality in the Hashgraph Network REST API.
 * This namespace consolidates all network-specific interfaces and types.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Namespace
 * @namespace _INetwork
 * @description Provides a comprehensive set of namespaces for managing all aspects of the Hashgraph network.
 * This namespace includes:
 * - Exchange rate information and conversions
 * - Network fee structures and calculations
 * - Node management and configuration
 * - Network staking parameters and rewards
 * - Network supply tracking and metrics
 * Used as the central point for accessing network-related functionality.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the network namespace
 * import { _INetwork } from '@hashgraph/sdk';
 * 
 * // Access exchange rate information
 * const exchangeRate: _INetwork.IExchange.IRate = {
 *   cents_usd: 7,
 *   expiration_time: "2023-01-01T00:00:00.000Z",
 *   hbar_equivalent: 1000000
 * };
 * 
 * // Access node information
 * const node: _INetwork.INodes.IEntity = {
 *   node_id: 1,
 *   description: "Main consensus node"
 * };
 * ```
 */
export namespace _INetwork {
    /**
     * Exchange Rate Namespace
     * @type {_IExchange}
     * @description Provides interfaces for managing network exchange rates including:
     * - Current and historical exchange rates
     * - Currency conversion utilities
     * - Rate expiration tracking
     * Used for all exchange rate related operations.
     * @see {@link _IExchange}
     * @memberof _INetwork
     * @since 2.0.0
     */
    export import IExchange = _IExchange

    /**
     * Network Fees Namespace
     * @type {_IFees}
     * @description Provides interfaces for managing network fee structures including:
     * - Transaction fee calculations
     * - Fee schedules and updates
     * - Custom fee configurations
     * Used for all fee-related operations across the network.
     * @see {@link _IFees}
     * @memberof _INetwork
     * @since 2.0.0
     */
    export import IFees = _IFees

    /**
     * Network Nodes Namespace
     * @type {_INodes}
     * @description Provides interfaces for managing network nodes including:
     * - Node configuration and status
     * - Service endpoint management
     * - Node performance metrics
     * Used for all node-related operations and monitoring.
     * @see {@link _INodes}
     * @memberof _INetwork
     * @since 2.0.0
     */
    export import INodes = _INodes

    /**
     * Network Stake Namespace
     * @type {_IStake}
     * @description Provides interfaces for managing network staking including:
     * - Staking parameters and thresholds
     * - Reward calculations and distributions
     * - Staking period management
     * Used for all staking-related operations.
     * @see {@link _IStake}
     * @memberof _INetwork
     * @since 2.0.0
     */
    export import IStake = _IStake

    /**
     * Network Supply Namespace
     * @type {_ISupply}
     * @description Provides interfaces for managing network supply including:
     * - Total supply tracking
     * - Supply distribution metrics
     * - Supply change monitoring
     * Used for all supply-related operations.
     * @see {@link _ISupply}
     * @memberof _INetwork
     * @since 2.0.0
     */
    export import ISupply = _ISupply
}
