import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/hashgraph.restful.network.nodes.models.entity.model'
import { _Response } from './models/hashgraph.restful.network.nodes.models.response.model'

/**
 * @file hashgraph.restful.network.nodes.namespace.ts
 * @namespace _Nodes
 * @description Comprehensive namespace for managing Hedera network nodes.
 * 
 * Provides models and types for:
 * - Node information and status
 * - Service endpoints
 * - Node capabilities
 * - Network topology
 * 
 * Features built-in support for:
 * - Status monitoring
 * - Endpoint management
 * - Capability tracking
 * - Data validation
 * 
 * @category Network
 * @subcategory Nodes
 * @since 2.0.0
 */
export namespace _Nodes {
    /**
     * Network Node Model
     * @class Entity
     * @extends {_Entity}
     * @description Comprehensive model for individual network node details.
     * 
     * Features:
     * - Node identification
     * - Service endpoints
     * - Status tracking
     * - Capability listing
     * 
     * Includes validation for:
     * - Node addresses
     * - Service configs
     * - Status values
     * 
     * @example
     * ```typescript
     * const node = new Entity({
     *   node_id: '0.0.3',
     *   address: '35.237.200.180',
     *   port: 50211,
     *   service_endpoints: [
     *     {
     *       ip_address: '35.237.200.180',
     *       port: 50211
     *     }
     *   ]
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Nodes.Entity'
    })
    export class Entity extends _Entity {}

    /**
     * Network Nodes Response Model
     * @class Response
     * @extends {_Response}
     * @description Comprehensive model for network node query responses.
     * 
     * Features:
     * - Node listings
     * - Network topology
     * - Status summaries
     * - Service discovery
     * 
     * Includes validation for:
     * - Response format
     * - Node collections
     * - Data integrity
     * 
     * @example
     * ```typescript
     * const response = new Response({
     *   nodes: [
     *     {
     *       node_id: '0.0.3',
     *       address: '35.237.200.180',
     *       port: 50211,
     *       service_endpoints: [
     *         {
     *           ip_address: '35.237.200.180',
     *           port: 50211
     *         }
     *       ]
     *     }
     *   ],
     *   links: {
     *     next: null
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Network.Nodes.Response'
    })
    export class Response extends _Response {}
}
