import { _INetwork } from './namespaces/network/hashgraph.restful.network.namespace'
import { _ILinks } from './interfaces/hashgraph.restful.links.interface'
import { _IAccounts } from './namespaces/accounts/hashgraph.restful.accounts.namespace'
import { _IAirdrops } from './namespaces/airdrops/hashgraph.restful.airdrops.namespace'
import { _ICustomFees } from './namespaces/custom-fees/hashgraph.restful.custom_fees.namespace'
import { _IHCS } from './namespaces/hcs/hashgraph.restful.hcs.namespace'
import { _IHTS } from './namespaces/hts/hashgraph.restful.hts.namespace'
import { _IStaking } from './namespaces/staking/hashgraph.restful.staking.namespace'
import { _ITransactions } from './namespaces/transactions/hashgraph.restful.transactions.namespace'

/**
 * @file restful.namespace.ts
 * @module @hashgraph/sdk
 * @namespace IHashgraph._IRestful
 * @description This namespace contains interfaces and types related to Hashgraph's RESTful API.
 * It includes definitions for balance tokens, links, and various Hashgraph services such as
 * staking, custom fees, HCS (Hashgraph Consensus Service), HTS (Hashgraph Token Service),
 * transactions, and accounts.
 * @category Namespaces
 * @subcategory RESTful
 * @since 2.0.0
 * @property {typeof _ILinks} ILinks - Interface for API response links structure
 * @property {typeof _IStaking} IStaking - Namespace containing staking-related interfaces
 * @property {typeof _ICustomFees} ICustomFees - Namespace containing custom fees interfaces
 * @property {typeof _IHCS} IHCS - Namespace containing Hashgraph Consensus Service interfaces
 * @property {typeof _IHTS} IHTS - Namespace containing Hashgraph Token Service interfaces
 * @property {typeof _ITransactions} ITransactions - Namespace containing transaction-related interfaces
 * @property {typeof _IAccounts} IAccounts - Namespace containing account-related interfaces
 * @property {typeof _INetwork} INetwork - Namespace containing network-related interfaces
 * @property {typeof _IAirdrops} IAirdrops - Namespace containing airdrop-related interfaces
 * @example
 * ```typescript
 * // Example usage of the RESTful namespace
 * import { _IRestful } from '@hashgraph/sdk';
 * 
 * // Using the Links interface
 * const links: _IRestful.ILinks = {
 *   next: "api/v1/resource?page=2"
 * };
 * 
 * // Using the Staking namespace
 * const stakingInfo: _IRestful.IStaking.IInfo = {
 *   period_start: "2023-01-01",
 *   period_end: "2023-12-31",
 *   reward_rate: "0.1"
 * };
 * 
 * // Using the Transactions namespace
 * const txDetails: _IRestful.ITransactions.IDetails = {
 *   transaction_id: "0.0.1234@1234567890.000000000",
 *   type: "CRYPTOTRANSFER",
 *   result: "SUCCESS"
 * };
 * ```
 */
export namespace _IRestful {
    /**
     * Links Interface
     * @type {_ILinks}
     * @description Represents the structure of links in API responses, providing navigation
     * and relationship information between resources.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const links: _IRestful.ILinks = {
     *   next: "api/v1/resource?page=2",
     *   prev: "api/v1/resource?page=0"
     * };
     * ```
     */
    export type ILinks = _ILinks

    /**
     * Staking Namespace
     * @type {_IStaking}
     * @description Contains interfaces related to Hashgraph staking operations, including
     * staking rewards, node staking, and staking periods.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const stakingInfo: _IRestful.IStaking.IInfo = {
     *   period_start: "2023-01-01",
     *   period_end: "2023-12-31",
     *   reward_rate: "0.1"
     * };
     * ```
     */
    export import IStaking = _IStaking

    /**
     * Custom Fees Namespace
     * @type {_ICustomFees}
     * @description Contains interfaces for custom fee structures, including fixed fees,
     * fractional fees, and royalty fees.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const customFee: _IRestful.ICustomFees.IFixed = {
     *   amount: 100,
     *   collector_account_id: "0.0.1234"
     * };
     * ```
     */
    export import ICustomFees = _ICustomFees

    /**
     * Hashgraph Consensus Service Namespace
     * @type {_IHCS}
     * @description Contains interfaces related to the Hashgraph Consensus Service (HCS),
     * including topic creation, message submission, and topic information.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const topicInfo: _IRestful.IHCS.ITopicInfo = {
     *   topic_id: "0.0.1234",
     *   sequence_number: 1,
     *   running_hash: "hash",
     *   running_hash_version: 2
     * };
     * ```
     */
    export import IHCS = _IHCS

    /**
     * Hashgraph Token Service Namespace
     * @type {_IHTS}
     * @description Contains interfaces related to the Hashgraph Token Service (HTS),
     * including token creation, management, and transfer operations.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const tokenInfo: _IRestful.IHTS.ITokenInfo = {
     *   token_id: "0.0.1234",
     *   name: "MyToken",
     *   symbol: "MTK",
     *   decimals: 8
     * };
     * ```
     */
    export import IHTS = _IHTS

    /**
     * Transactions Namespace
     * @type {_ITransactions}
     * @description Contains interfaces for transaction-related operations, including
     * transaction details, responses, and transfer operations.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const txDetails: _IRestful.ITransactions.IDetails = {
     *   transaction_id: "0.0.1234@1234567890.000000000",
     *   type: "CRYPTOTRANSFER",
     *   result: "SUCCESS"
     * };
     * ```
     */
    export import ITransactions = _ITransactions

    /**
     * Accounts Namespace
     * @type {_IAccounts}
     * @description Contains interfaces for account-related operations, including
     * account creation, updates, and balance information.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const accountInfo: _IRestful.IAccounts.IInfo = {
     *   account: "0.0.1234",
     *   balance: {
     *     balance: 1000000,
     *     timestamp: "2023-01-01T00:00:00.000Z"
     *   }
     * };
     * ```
     */
    export import IAccounts = _IAccounts

    /**
     * Network Namespace
     * @type {_INetwork}
     * @description Contains interfaces for network-related operations and information,
     * including network status, nodes, and configuration.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const networkStatus: _IRestful.INetwork.IStatus = {
     *   network: "mainnet",
     *   version: "0.27.0",
     *   up: true
     * };
     * ```
     */
    export import INetwork = _INetwork

    /**
     * Airdrops Namespace
     * @type {_IAirdrops}
     * @description Contains interfaces for airdrop-related operations, including
     * airdrop distribution, eligibility, and claim processes.
     * @memberof _IRestful
     * @since 2.0.0
     * @example
     * ```typescript
     * const airdropInfo: _IRestful.IAirdrops.IInfo = {
     *   airdrop_id: "airdrop_123",
     *   token_id: "0.0.1234",
     *   amount: 1000,
     *   status: "ACTIVE"
     * };
     * ```
     */
    export import IAirdrops = _IAirdrops
}
