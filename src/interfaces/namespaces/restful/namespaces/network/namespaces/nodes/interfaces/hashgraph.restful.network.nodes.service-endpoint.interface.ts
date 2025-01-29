/**
 * @file hashgraph.restful.network.nodes.service-endpoint.interface.ts
 * @interface _IServiceEndpoint
 * @description Defines the structure for network service endpoints in the Hashgraph network.
 * This interface specifies the required and optional properties that describe how to connect
 * to a network service node.
 * @category Hashgraph
 * @subcategory Network
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example service endpoint configuration
 * const endpoint: _IServiceEndpoint = {
 *   domain_name: 'node1.example.com',
 *   ip_address_v4: '192.168.1.100',
 *   port: 50211
 * };
 * ```
 */
export interface _IServiceEndpoint {
    /**
     * The domain name of the service endpoint
     * @type {string | undefined}
     * @description Optional DNS domain name that can be used to access the service
     * @memberof _IServiceEndpoint
     * @optional
     */
    domain_name?: string;

    /**
     * The IPv4 address of the service endpoint
     * @type {string}
     * @description The IPv4 address where the service can be accessed
     * @memberof _IServiceEndpoint
     * @required
     */
    ip_address_v4: string;

    /**
     * The port number of the service endpoint
     * @type {number}
     * @description The network port number where the service is listening
     * @memberof _IServiceEndpoint
     * @required
     */
    port: number;
}