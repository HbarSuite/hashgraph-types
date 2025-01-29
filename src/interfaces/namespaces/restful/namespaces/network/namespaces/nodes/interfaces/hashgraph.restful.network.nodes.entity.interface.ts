import { _IServiceEndpoint } from './hashgraph.restful.network.nodes.service-endpoint.interface'

/**
 * @file hashgraph.restful.network.nodes.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for individual network node information in the Hashgraph Network REST API.
 * This interface represents detailed information about network nodes including their configuration and stake.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Network Node Entity Interface
 * @interface _IEntity
 * @description Represents comprehensive information about a node in the Hashgraph network.
 * This interface encapsulates all aspects of a network node, including:
 * - Node identification and configuration
 * - Service endpoint information
 * - Staking details and limits
 * - Public key and account information
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a network node entity
 * const node: _IEntity = {
 *   description: "Main consensus node",
 *   file_id: "0.0.123456",
 *   memo: "Primary network node",
 *   node_id: 1,
 *   node_account_id: "0.0.3",
 *   public_key: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7",
 *   service_endpoints: [{
 *     ip_address_v4: "13.124.142.126",
 *     port: 50211
 *   }],
 *   stake: 1000000,
 *   stake_rewarded: 900000,
 *   stake_not_rewarded: 100000,
 *   min_stake: 100000,
 *   max_stake: 5000000,
 *   stake_owned: 750000
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Node Description
     * @type {string}
     * @description A human-readable description of the node's purpose or characteristics.
     * Used to identify and describe the node's role in the network.
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example "Main consensus node"
     */
    description: string;

    /**
     * File Identifier
     * @type {string}
     * @description The unique file identifier associated with this node.
     * Format: `shard.realm.num` (e.g., "0.0.123456")
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.123456"
     */
    file_id: string;

    /**
     * Node Memo
     * @type {string}
     * @description Additional notes or information about the node.
     * Can contain operational details or administrative information.
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example "Primary network node"
     */
    memo: string;

    /**
     * Node Identifier
     * @type {number}
     * @description The unique numeric identifier for this node within the network.
     * Used for internal node identification and routing.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 1
     */
    node_id: number;

    /**
     * Node Account Identifier
     * @type {string}
     * @description The Hedera account ID associated with this node.
     * Format: `shard.realm.num` (e.g., "0.0.3")
     * Used for node rewards and operational transactions.
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.3"
     */
    node_account_id: string;

    /**
     * Node Public Key
     * @type {string}
     * @description The Ed25519 public key of the node in hexadecimal format.
     * Used for node identification and cryptographic operations.
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
     */
    public_key: string;

    /**
     * Service Endpoints
     * @type {Array<_IServiceEndpoint>}
     * @description Array of network service endpoints for this node.
     * Contains connection information including IP addresses and ports.
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example [{
     *   ip_address_v4: "13.124.142.126",
     *   port: 50211
     * }]
     */
    service_endpoints: Array<_IServiceEndpoint>;

    /**
     * Total Stake
     * @type {number}
     * @description The total amount of HBAR staked to this node.
     * Represents the sum of all stake delegated to this node.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 1000000
     */
    stake: number;

    /**
     * Rewarded Stake
     * @type {number}
     * @description The amount of stake that is eligible for rewards.
     * Represents the portion of stake that meets reward criteria.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 900000
     */
    stake_rewarded: number;

    /**
     * Non-Rewarded Stake
     * @type {number}
     * @description The amount of stake that is not eligible for rewards.
     * Represents stake that doesn't meet reward criteria.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 100000
     */
    stake_not_rewarded: number;

    /**
     * Minimum Stake
     * @type {number}
     * @description The minimum amount of HBAR that can be staked to this node.
     * Defines the lower bound for stake delegation.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 100000
     */
    min_stake: number;

    /**
     * Maximum Stake
     * @type {number}
     * @description The maximum amount of HBAR that can be staked to this node.
     * Defines the upper bound for stake delegation.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 5000000
     */
    max_stake: number;

    /**
     * Owned Stake
     * @type {number}
     * @description The amount of HBAR staked by the node operator.
     * Represents the node's self-staked amount.
     * @required true
     * @minimum 0
     * @memberof _IEntity
     * @since 2.0.0
     * @example 750000
     */
    stake_owned: number;
}
