import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Exchange } from './namespaces/exchange/hashgraph.restful.network.exchange.namespace'
import { _Fees } from './namespaces/fees/hashgraph.restful.network.fees.namespace'
import { _Nodes } from './namespaces/nodes/hashgraph.restful.network.nodes.namespace'
import { _Stake } from './namespaces/stake/hashgraph.restful.network.stake.namespace'
import { _Supply } from './namespaces/supply/hashgraph.restful.network.supply.namespace'

/**
 * @file hashgraph.restful.network.namespace.ts
 * @namespace _Network
 * @description Core namespace for Hedera network-related functionality and information.
 * 
 * Provides comprehensive types and interfaces for:
 * - Exchange rates and currency conversions
 * - Network fees and gas costs
 * - Node information and status
 * - Staking mechanisms and periods
 * - Network supply metrics
 * 
 * All submodules follow Hedera's standard formats:
 * - Account IDs: shard.realm.num (e.g., '0.0.1234')
 * - Amounts: in tinybars (1 HBAR = 100,000,000 tinybars)
 * - Timestamps: ISO 8601 format
 * 
 * @category Hashgraph
 * @subcategory Network
 * @since 2.0.0
 */
export namespace _Network {
    /**
     * Exchange Rate Management
     * @namespace Exchange
     * @description Comprehensive toolkit for handling network exchange rates.
     * 
     * Features:
     * - Current and historical exchange rates
     * - HBAR to USD/Cent conversions
     * - Rate validity periods
     * - Automatic updates
     * 
     * @category Network
     * @subcategory Exchange
     */
    export import Exchange = _Exchange

    /**
     * Network Fee Management
     * @namespace Fees
     * @description Complete system for network fee calculations and tracking.
     * 
     * Features:
     * - Transaction fee calculations
     * - Gas cost estimations
     * - Fee schedules
     * - Historical fee data
     * 
     * @category Network
     * @subcategory Fees
     */
    export import Fees = _Fees

    /**
     * Network Node Management
     * @namespace Nodes
     * @description Comprehensive system for network node information.
     * 
     * Features:
     * - Node status monitoring
     * - Service endpoints
     * - Node capabilities
     * - Network topology
     * 
     * @category Network
     * @subcategory Nodes
     */
    export import Nodes = _Nodes

    /**
     * Network Staking Management
     * @namespace Stake
     * @description Complete toolkit for network staking operations.
     * 
     * Features:
     * - Staking period tracking
     * - Stake calculations
     * - Node stake relationships
     * - Reward mechanisms
     * 
     * @category Network
     * @subcategory Stake
     */
    export import Stake = _Stake

    /**
     * Network Supply Management
     * @namespace Supply
     * @description Comprehensive system for network supply metrics.
     * 
     * Features:
     * - Total supply tracking
     * - Circulating supply
     * - Release schedules
     * - Supply distribution
     * 
     * @category Network
     * @subcategory Supply
     */
    export import Supply = _Supply
} 
