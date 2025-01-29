import { _IAutoRenewPeriod } from './interfaces/hashgraph.ledger.account.auto-renew-period.interface'
import { _IInfo } from './interfaces/hashgraph.ledger.account.info.interface'
import { _ISeconds } from './interfaces/hashgraph.ledger.account.seconds.interface'
import { _IStakingInfo } from './interfaces/hashgraph.ledger.account.staking-info.interface'
import { _IRequest } from './namespaces/request/hashgraph.ledger.account.request.namespace'

/**
 * Namespace containing interfaces related to Hashgraph account operations
 * @namespace _IAccounts
 * @description This namespace encapsulates all interfaces and types related to Hashgraph account management and operations.
 * Provides a comprehensive set of type definitions for handling account lifecycle, staking, timing, and information.
 * @category Hashgraph
 * @subcategory Account Management
 * @remarks
 * Key features:
 * - Account request handling
 * - Staking management
 * - Time-based operations
 * - Auto-renewal configuration
 * - Account information tracking
 * 
 * Usage areas:
 * - Account creation and updates
 * - Staking operations
 * - Account maintenance
 * - Information retrieval
 * @example
 * ```typescript
 * // Using account request namespace
 * const createRequest: _IAccounts.IRequest.ICreate = {
 *   initialBalance: 100,
 *   maxAutomaticTokenAssociations: 10
 * };
 * 
 * // Using staking info
 * const stakingInfo: _IAccounts.IStakingInfo = {
 *   declineReward: false,
 *   stakePeriodStart: "2023-01-01"
 * };
 * ```
 */
export namespace _IAccounts {
    /**
     * Contains interfaces for various account-related requests
     * @namespace IRequest
     * @description Provides type definitions for account operations including creation, deletion, updates, and transfers
     * @see {@link _IRequest} For detailed request interface definitions
     * @remarks
     * Supported operations:
     * - Account creation
     * - Account updates
     * - Account deletion
     * - Balance transfers
     * - Token associations
     * @example
     * ```typescript
     * // Account creation request
     * const createRequest: IRequest.ICreate = {
     *   initialBalance: 1000,
     *   receiverSignature: true
     * };
     * ```
     */
    export import IRequest = _IRequest

    /**
     * Interface defining account staking information
     * @type {_IStakingInfo}
     * @description Contains properties related to account staking status, configuration, and rewards
     * @remarks
     * Key features:
     * - Staking status tracking
     * - Reward preferences
     * - Staking period management
     * - Node relationships
     * @example
     * ```typescript
     * const stakingInfo: IStakingInfo = {
     *   declineReward: false,
     *   stakePeriodStart: "2023-01-01",
     *   pendingReward: 100
     * };
     * ```
     */
    export type IStakingInfo = _IStakingInfo

    /**
     * Interface representing time duration in seconds
     * @type {_ISeconds}
     * @description Defines a type for handling time-based operations in seconds for account settings and operations
     * @remarks
     * Used for:
     * - Transaction timeouts
     * - Operation deadlines
     * - Time-based configurations
     * - Duration calculations
     * @example
     * ```typescript
     * const duration: ISeconds = {
     *   seconds: 3600 // 1 hour
     * };
     * ```
     */
    export type ISeconds = _ISeconds

    /**
     * Interface for account auto-renewal period settings
     * @type {_IAutoRenewPeriod}
     * @description Specifies the configuration for automatic account renewal and maintenance
     * @remarks
     * Features:
     * - Auto-renewal period configuration
     * - Account maintenance settings
     * - Expiration management
     * - Renewal triggers
     * @example
     * ```typescript
     * const renewalPeriod: IAutoRenewPeriod = {
     *   period: 7776000, // 90 days
     *   autoRenewEnabled: true
     * };
     * ```
     */
    export type IAutoRenewPeriod = _IAutoRenewPeriod

    /**
     * Interface containing comprehensive account information
     * @type {_IInfo}
     * @description Provides detailed account information including balance, keys, settings, and status
     * @remarks
     * Information covered:
     * - Account balance
     * - Key configuration 
     * - Account settings
     * - Staking status
     * - Token associations
     * - Account relationships
     * @example
     * ```typescript
     * const accountInfo: IInfo = {
     *   balance: 1000000,
     *   accountId: "0.0.1234",
     *   isDeleted: false,
     *   autoRenewPeriod: 7776000
     * };
     * ```
     */
    export type IInfo = _IInfo
}