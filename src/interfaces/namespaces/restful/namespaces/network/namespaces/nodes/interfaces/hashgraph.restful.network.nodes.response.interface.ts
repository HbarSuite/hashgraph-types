import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _IEntity } from './hashgraph.restful.network.nodes.entity.interface'

/**
 * @file hashgraph.restful.network.nodes.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for network nodes API response in the Hashgraph Network REST API.
 * This interface represents the response format when querying network nodes information.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Nodes Response Interface
 * @interface _IResponse
 * @description Represents the response structure for network nodes API queries.
 * This interface encapsulates both the array of node entities and pagination links
 * for navigating through multiple pages of results.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a network nodes response
 * const response: _IResponse = {
 *   nodes: [{
 *     description: "Main consensus node",
 *     file_id: "0.0.123456",
 *     memo: "Primary network node",
 *     node_id: 1,
 *     node_account_id: "0.0.3",
 *     public_key: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7",
 *     service_endpoints: [{
 *       ip_address_v4: "13.124.142.126",
 *       port: 50211
 *     }],
 *     stake: 1000000,
 *     stake_rewarded: 900000,
 *     stake_not_rewarded: 100000,
 *     min_stake: 100000,
 *     max_stake: 5000000,
 *     stake_owned: 750000
 *   }],
 *   links: {
 *     next: "/api/v1/network/nodes?page=2",
 *     prev: "/api/v1/network/nodes?page=0"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Network Nodes
     * @type {Array<_IEntity>}
     * @description Array of network node entities containing detailed information
     * about each node in the network.
     * @required true
     * @memberof _IResponse
     * @since 2.0.0
     */
    nodes: Array<_IEntity>;

    /**
     * Pagination Links
     * @type {IHashgraph.IRestful.ILinks}
     * @description Navigation links for paginated results.
     * Contains URLs for next and previous pages of results.
     * @required true
     * @memberof _IResponse
     * @since 2.0.0
     */
    links: IHashgraph.IRestful.ILinks;
} 