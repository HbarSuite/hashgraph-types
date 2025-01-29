import { _IEntity } from './interfaces/hashgraph.restful.network.nodes.entity.interface'
import { _IResponse } from './interfaces/hashgraph.restful.network.nodes.response.interface'
import { _IServiceEndpoint } from './interfaces/hashgraph.restful.network.nodes.service-endpoint.interface'

/**
 * @file hashgraph.restful.network.nodes.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for network node management in the Hashgraph Network REST API.
 * This namespace consolidates interfaces for handling node information, responses, and service endpoints.
 * @category Namespaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Nodes Namespace
 * @namespace _INodes
 * @description Provides a comprehensive set of types for managing network nodes
 * in the Hashgraph Network. This namespace includes:
 * - Individual node entity information
 * - Complete node listing responses
 * - Service endpoint configurations
 * Used to maintain and track node information across the network.
 * @category Namespaces
 * @subcategory Network
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the nodes namespace
 * import { _INodes } from '@hashgraph/sdk';
 * 
 * // Define a network node entity
 * const node: _INodes.IEntity = {
 *   description: "Main consensus node",
 *   node_id: 1,
 *   service_endpoints: [{
 *     ip_address_v4: "13.124.142.126",
 *     port: 50211
 *   }]
 * };
 * ```
 */
export namespace _INodes {
    /**
     * Network Node Entity Information
     * @type {_IEntity}
     * @description Represents detailed information about a single network node.
     * Includes:
     * - Node identification and configuration
     * - Service endpoint details
     * - Staking information and limits
     * Used for managing individual node properties and status.
     * @see {@link _IEntity}
     * @memberof _INodes
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Define a node entity
     * const node: _INodes.IEntity = {
     *   description: "Main consensus node",
     *   node_id: 1
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * Network Nodes Response
     * @type {_IResponse}
     * @description Represents the complete response structure for node queries including:
     * - Array of all network nodes
     * - Pagination links for result navigation
     * Used to retrieve and manage lists of network nodes.
     * @see {@link _IResponse}
     * @memberof _INodes
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Access nodes from response
     * const nodesResponse: _INodes.IResponse = {
     *   nodes: [],
     *   links: {
     *     next: "/api/v1/network/nodes?page=2"
     *   }
     * };
     * ```
     */
    export type IResponse = _IResponse

    /**
     * Node Service Endpoint Configuration
     * @type {_IServiceEndpoint}
     * @description Represents connection details for a network node including:
     * - IPv4 address information
     * - Service port configuration
     * Used to establish connections to network nodes.
     * @see {@link _IServiceEndpoint}
     * @memberof _INodes
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Define a service endpoint
     * const endpoint: _INodes.IServiceEndpoint = {
     *   ip_address_v4: "13.124.142.126",
     *   port: 50211
     * };
     * ```
     */
    export type IServiceEndpoint = _IServiceEndpoint
}