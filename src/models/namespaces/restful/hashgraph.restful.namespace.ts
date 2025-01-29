import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Links } from './models/hashgraph.restful.models.links.model'
import { _Accounts } from './namespaces/accounts/hashgraph.restful.accounts.namespace'
import { _CustomFees } from './namespaces/custom-fees/hashgraph.restful.custom_fees.namespace'
import { _HCS } from './namespaces/hcs/hashgraph.restful.hcs.namespace'
import { _HTS } from './namespaces/hts/hashgraph.restful.hts.namespace'
import { _Staking } from './namespaces/staking/hashgraph.restful.staking.namespace'
import { _Transactions } from './namespaces/transactions/hashgraph.restful.transactions.namespace'
import { _Network } from './namespaces/network/hashgraph.restful.network.namespace'
import { _Airdrops } from './namespaces/airdrops/hashgraph.restful.airdrops.namespace'

/**
 * @file hashgraph.restful.namespace.ts
 * @namespace _Restful
 * @description Defines the main namespace for Hashgraph's RESTful API interfaces and types.
 * This namespace serves as the central hub for all RESTful API related functionality,
 * organizing various Hashgraph services and features into logical groupings.
 * @category Hashgraph
 * @subcategory RESTful API
 * @since 2.0.0
 */
export namespace _Restful {
    /**
     * Links class that extends the base _Links model
     * @class Links
     * @extends {_Links}
     * @description Represents the structure of HATEOAS links in API responses.
     * Provides navigation and relationship information between resources for pagination
     * and resource discovery.
     * @example
     * ```typescript
     * const links = new Links({
     *   next: '/api/v1/accounts?limit=25&start=0.0.1234',
     *   previous: '/api/v1/accounts?limit=25&start=0.0.1000'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Links'
    })
    export class Links extends _Links {}

    /**
     * Staking namespace for managing node and proxy staking operations
     * @type {_Staking}
     * @description Provides interfaces and types for handling all staking-related operations,
     * including node staking, proxy staking, reward distributions, and staking period management.
     * Enables interaction with Hedera's proof-of-stake system.
     * @example
     * ```typescript
     * // Work with staking operations
     * const stakingInfo = new Staking.Info({
     *   node_id: '0.0.3',
     *   stake_total: 1000000,
     *   staking_period: 'day'
     * });
     * ```
     */
    export import Staking = _Staking

    /**
     * Custom fees namespace for token fee configurations
     * @type {_CustomFees}
     * @description Contains comprehensive interfaces for defining and managing custom fee structures
     * for tokens, including fixed fees, fractional fees, royalty fees, and fee schedules.
     * Supports both fungible and non-fungible token fee configurations.
     * @example
     * ```typescript
     * // Define custom token fees
     * const fixedFee = new CustomFees.Fixed({
     *   amount: 100,
     *   collector_account_id: '0.0.123',
     *   denominating_token_id: '0.0.456'
     * });
     * ```
     */
    export import CustomFees = _CustomFees

    /**
     * Hashgraph Consensus Service (HCS) namespace
     * @type {_HCS}
     * @description Provides comprehensive interfaces for working with HCS topics and messages,
     * enabling decentralized consensus and messaging capabilities. Supports topic creation,
     * message submission, and topic information queries.
     * @example
     * ```typescript
     * // Create HCS topic
     * const topic = new HCS.Topic({
     *   topic_id: '0.0.123',
     *   memo: 'Test topic',
     *   submit_key: {
     *     key: 'ed25519publickey'
     *   }
     * });
     * ```
     */
    export import HCS = _HCS

    /**
     * Hashgraph Token Service (HTS) namespace
     * @type {_HTS}
     * @description Contains comprehensive interfaces for all token-related operations including
     * token creation, management, transfers, and queries for both fungible and non-fungible tokens.
     * Supports advanced token features like KYC, freezing, and custom fees.
     * @example
     * ```typescript
     * // Create token info
     * const tokenInfo = new HTS.TokenInfo({
     *   token_id: '0.0.123',
     *   name: 'Test Token',
     *   symbol: 'TEST',
     *   decimals: 8,
     *   total_supply: '1000000'
     * });
     * ```
     */
    export import HTS = _HTS

    /**
     * Transactions namespace for all transaction-related operations
     * @type {_Transactions}
     * @description Provides comprehensive interfaces for handling all types of Hashgraph
     * transactions, including transfers, smart apps, system operations, and queries.
     * Supports transaction creation, signing, and status tracking.
     * @example
     * ```typescript
     * // Create transaction
     * const transaction = new Transactions.Transaction({
     *   transaction_id: '0.0.123@1234567890.000000000',
     *   node: '0.0.3',
     *   valid_duration_seconds: 120
     * });
     * ```
     */
    export import Transactions = _Transactions

    /**
     * Accounts namespace for account management and information
     * @type {_Accounts}
     * @description Contains comprehensive interfaces for managing Hashgraph accounts, including
     * account creation, updates, balance queries, and stake management. Supports all account
     * operations including crypto transfers and account info updates.
     * @example
     * ```typescript
     * // Query account info
     * const account = new Accounts.Info({
     *   account: '0.0.123',
     *   balance: 1000000,
     *   key: {
     *     key: 'ed25519publickey'
     *   }
     * });
     * ```
     */
    export import Accounts = _Accounts

    /**
     * Network namespace for network-related operations and information
     * @type {_Network}
     * @description Provides interfaces for interacting with network-level features and information,
     * including node details, network status, and address book management.
     * @example
     * ```typescript
     * // Access network information
     * const networkInfo = new Network.Info({
     *   node_count: 15,
     *   current_version: '0.34.0'
     * });
     * ```
     */
    export import Network = _Network

    /**
     * Airdrops namespace for managing token distribution campaigns
     * @type {_Airdrops}
     * @description Contains interfaces for managing and executing token airdrop operations,
     * including recipient management, distribution tracking, and campaign configuration.
     * @example
     * ```typescript
     * // Configure airdrop
     * const airdrop = new Airdrops.Config({
     *   token_id: '0.0.123',
     *   recipients: ['0.0.456', '0.0.789'],
     *   amount_per_recipient: '100'
     * });
     * ```
     */
    export import Airdrops = _Airdrops
}
