import { _IAccounts } from '../hashgraph.ledger.account.namespace'

/**
 * Comprehensive interface defining all properties and settings of a Hashgraph account
 * @interface _IInfo
 * @description Provides a complete representation of a Hashgraph account's state and configuration, including:
 * - Financial information (balance, thresholds)
 * - Identity and security (accountId, keys, signatures)
 * - Token associations and NFT ownership
 * - Account lifecycle management (expiration, auto-renewal)
 * - Staking configuration and status
 * - Network-specific details (ledger ID, ethereum compatibility)
 * @export
 * @since 2.0.0
 * @category Interfaces
 * @subcategory Account
 * @remarks
 * This interface serves as the primary data structure for retrieving and managing account information
 * on the Hedera Hashgraph network. All monetary values are represented in tinybars (1 ℏ = 100,000,000 tinybars).
 * @example
 * ```typescript
 * const accountInfo: _IInfo = {
 *   balance: "1000000000", // 10 ℏ
 *   accountId: "0.0.123456",
 *   contractAccountId: "0.0.789012",
 *   isDeleted: false,
 *   proxyAccountId: "0.0.234567",
 *   key: "302a300506032b6570032100...",
 *   stakingInfo: {
 *     // staking configuration
 *   }
 * };
 * ```
 */
export interface _IInfo {
    /**
     * The current account balance in tinybars
     * @property {string} balance
     * @description Represents the available balance in the account, denominated in tinybars
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * - 1 ℏ (HBAR) = 100,000,000 tinybars
     * - Balance is represented as a string to handle large numbers precisely
     * @example "1000000000" // 10 ℏ
     */
    balance: string

    /**
     * The unique identifier of the account
     * @property {string} accountId
     * @description Unique identifier in the format shard.realm.num (e.g., 0.0.X)
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * - Format: <shard>.<realm>.<number>
     * - Immutable once assigned
     * - Used for all account-related operations
     * @example "0.0.123456"
     */
    accountId: string

    /**
     * The associated smart app account identifier
     * @property {string} contractAccountId
     * @description Identifier of the smart app account associated with this account
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Only present if this account is associated with a smart app
     * @example "0.0.789012"
     */
    contractAccountId: string

    /**
     * Account deletion status
     * @property {boolean} isDeleted
     * @description Indicates if the account has been deleted from the network
     * @type {boolean}
     * @memberof _IInfo
     * @required
     * @remarks
     * Once deleted, an account cannot be recovered
     * @example false
     */
    isDeleted: boolean

    /**
     * The proxy account identifier
     * @property {string} proxyAccountId
     * @description Account ID of the proxy account if this account is proxied
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Used for stake delegation and proxy staking arrangements
     * @example "0.0.234567"
     */
    proxyAccountId: string

    /**
     * Total amount received as a proxy
     * @property {string} proxyReceived
     * @description Cumulative amount of cryptocurrency received by this account as a proxy
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Represents the total amount of tinybars received through proxy staking
     * @example "500000000" // 5 ℏ
     */
    proxyReceived: string

    /**
     * The account's public key
     * @property {string} key
     * @description Public key associated with this account in hex format
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Used for transaction signing and account security
     * @example "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
     */
    key: string

    /**
     * Threshold for recording outgoing transfers
     * @property {string} sendRecordThreshold
     * @description Minimum amount in tinybars for which outgoing transfer records are created
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Helps in tracking significant outgoing transactions
     * @example "1000000000" // 10 ℏ
     */
    sendRecordThreshold: string

    /**
     * Threshold for recording incoming transfers
     * @property {string} receiveRecordThreshold
     * @description Minimum amount in tinybars for which incoming transfer records are created
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Helps in tracking significant incoming transactions
     * @example "1000000000" // 10 ℏ
     */
    receiveRecordThreshold: string

    /**
     * Receiver signature requirement flag
     * @property {boolean} isReceiverSignatureRequired
     * @description Indicates if transfers to this account require the receiver's signature
     * @type {boolean}
     * @memberof _IInfo
     * @required
     * @remarks
     * Enhanced security feature for incoming transfers
     * @example false
     */
    isReceiverSignatureRequired: boolean

    /**
     * Account expiration timestamp
     * @property {string} expirationTime
     * @description Unix timestamp (seconds since epoch) when the account will expire
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Account will be marked as deleted after this time unless renewed
     * @example "1735689600" // January 1, 2025
     */
    expirationTime: string

    /**
     * Auto-renewal configuration
     * @property {_IAccounts.IAutoRenewPeriod} autoRenewPeriod
     * @description Configuration for automatic account renewal
     * @type {_IAccounts.IAutoRenewPeriod}
     * @memberof _IInfo
     * @required
     * @remarks
     * Determines how long the account will automatically extend its expiration
     * @example { seconds: 7776000 } // 90 days
     */
    autoRenewPeriod: _IAccounts.IAutoRenewPeriod

    /**
     * Account description or note
     * @property {string} accountMemo
     * @description Optional memo or note associated with the account
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Limited to 100 characters maximum
     * @example "Main Treasury Account"
     */
    accountMemo: string

    /**
     * Total NFTs owned
     * @property {string} ownedNfts
     * @description Number of non-fungible tokens owned by this account
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Represents the total count of NFTs across all collections
     * @example "42"
     */
    ownedNfts: string

    /**
     * Maximum automatic token associations
     * @property {string} maxAutomaticTokenAssociations
     * @description Maximum number of tokens that can be automatically associated
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Limits the number of tokens that can be associated without explicit association
     * @example "1000"
     */
    maxAutomaticTokenAssociations: string

    /**
     * Alternative account identifier
     * @property {string} aliasKey
     * @description Alternative public key associated with this account
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Used as an alternative way to identify the account
     * @example "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
     */
    aliasKey: string

    /**
     * Network identifier
     * @property {string} ledgerId
     * @description Identifier of the network where this account exists
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Indicates whether the account is on mainnet, testnet, or other networks
     * @example "mainnet"
     */
    ledgerId: string

    /**
     * Ethereum transaction counter
     * @property {string} ethereumNonce
     * @description Counter for Ethereum-compatible transactions
     * @type {string}
     * @memberof _IInfo
     * @required
     * @remarks
     * Used for maintaining Ethereum transaction ordering
     * @example "42"
     */
    ethereumNonce: string

    /**
     * Staking configuration and status
     * @property {_IAccounts.IStakingInfo} stakingInfo
     * @description Detailed information about the account's staking arrangements
     * @type {_IAccounts.IStakingInfo}
     * @memberof _IInfo
     * @required
     * @remarks
     * Contains all staking-related information including node ID, stake amount, and period
     */
    stakingInfo: _IAccounts.IStakingInfo
}