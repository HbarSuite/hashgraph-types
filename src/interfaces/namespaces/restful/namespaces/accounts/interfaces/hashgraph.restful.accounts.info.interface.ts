/**
 * @file info.interface.ts
 * @module @hashgraph/sdk
 * @description Interface defining account information structure for REST API responses
 * @since 2.0.0
 */

import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Account Information Interface
 * @interface _IInfo
 * @description Comprehensive interface for retrieving detailed information about a Hashgraph account,
 * including balance, timestamps, keys, and staking details. This interface provides a complete 
 * representation of an account's state and properties within the Hashgraph network.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const accountInfo: _IInfo = {
 *   account: "0.0.123456",
 *   balance: {
 *     balance: 1000,
 *     tokens: []
 *   },
 *   key: {
 *     key: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
 *   },
 *   decline_reward: false,
 *   staked_account_id: "0.0.3",
 *   stake_period_start: "2023-01-01T00:00:00.000Z"
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Account identifier
     * @property {string} account
     * @description Unique identifier for the Hashgraph account in the format 0.0.x
     * @type {string}
     * @memberof _IInfo
     * @optional
     * @example "0.0.123456"
     */
    account?: string

    /**
     * Alternative identifier
     * @property {string} alias
     * @description Alternative identifier or name for the account, can be used for easier reference
     * @type {string}
     * @memberof _IInfo
     * @optional
     * @example "myHashgraphAccount"
     */
    alias?: string

    /**
     * Auto-renewal period
     * @property {number} auto_renew_period
     * @description Duration in seconds for automatic account renewal to prevent expiration
     * @type {number}
     * @memberof _IInfo
     * @optional
     * @example 7776000 // 90 days
     */
    auto_renew_period?: number

    /**
     * Account balance information
     * @property {IHashgraph.ICommons.IBalance.IEntity} balance
     * @description Detailed balance information including hbar and token holdings
     * @type {IHashgraph.ICommons.IBalance.IEntity}
     * @memberof _IInfo
     * @optional
     */
    balance?: IHashgraph.ICommons.IBalance.IEntity

    /**
     * Creation timestamp
     * @property {string} created_timestamp
     * @description ISO 8601 timestamp indicating when the account was created
     * @type {string}
     * @memberof _IInfo
     * @optional
     * @example "2023-01-01T00:00:00.000Z"
     */
    created_timestamp?: string

    /**
     * Reward decline status
     * @property {boolean} decline_reward
     * @description Flag indicating whether the account opts out of receiving staking rewards
     * @type {boolean}
     * @memberof _IInfo
     * @required
     */
    decline_reward: boolean

    /**
     * Deletion status
     * @property {boolean} deleted
     * @description Flag indicating if the account has been marked as deleted
     * @type {boolean}
     * @memberof _IInfo
     * @optional
     */
    deleted?: boolean

    /**
     * Ethereum transaction nonce
     * @property {number} ethereum_nonce
     * @description Current nonce value for Ethereum-compatible transactions
     * @type {number}
     * @memberof _IInfo
     * @optional
     */
    ethereum_nonce?: number

    /**
     * EVM address
     * @property {Blob} evm_address
     * @description Ethereum Virtual Machine compatible address for the account
     * @type {Blob}
     * @memberof _IInfo
     * @optional
     */
    evm_address?: Blob

    /**
     * Expiration timestamp
     * @property {string} expiry_timestamp
     * @description ISO 8601 timestamp indicating when the account will expire
     * @type {string}
     * @memberof _IInfo
     * @optional
     * @example "2024-01-01T00:00:00.000Z"
     */
    expiry_timestamp?: string

    /**
     * Account key
     * @property {IHashgraph.ICommons.IKey.IEntity} key
     * @description Cryptographic key associated with the account for transaction signing
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @memberof _IInfo
     * @required
     */
    key: IHashgraph.ICommons.IKey.IEntity

    /**
     * Maximum token associations
     * @property {number} max_automatic_token_associations
     * @description Maximum number of tokens that can be automatically associated with the account
     * @type {number}
     * @memberof _IInfo
     * @optional
     */
    max_automatic_token_associations?: number

    /**
     * Account memo
     * @property {string} memo
     * @description Additional notes or information about the account
     * @type {string}
     * @memberof _IInfo
     * @optional
     */
    memo?: string

    /**
     * Pending rewards
     * @property {number} pending_reward
     * @description Amount of unclaimed staking rewards in tinybars
     * @type {number}
     * @memberof _IInfo
     * @optional
     */
    pending_reward?: number

    /**
     * Receiver signature requirement
     * @property {boolean} receiver_sig_required
     * @description Flag indicating if a signature is required when receiving funds
     * @type {boolean}
     * @memberof _IInfo
     * @optional
     */
    receiver_sig_required?: boolean

    /**
     * Staked account identifier
     * @property {string} staked_account_id
     * @description Identifier of the account to which this account is staked
     * @type {string}
     * @memberof _IInfo
     * @required
     * @example "0.0.3"
     */
    staked_account_id: string

    /**
     * Staked node identifier
     * @property {number} staked_node_id
     * @description Identifier of the node to which this account is staked
     * @type {number}
     * @memberof _IInfo
     * @optional
     */
    staked_node_id?: number

    /**
     * Staking period start
     * @property {string} stake_period_start
     * @description ISO 8601 timestamp indicating the start of the current staking period
     * @type {string}
     * @memberof _IInfo
     * @required
     * @example "2023-01-01T00:00:00.000Z"
     */
    stake_period_start: string
}