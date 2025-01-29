/**
 * @file update.interface.ts
 * @module IHashgraph.ILedger.IAccounts._IUpdate
 * @description Defines the structure for an account update request in the Hashgraph ledger, allowing modification of account properties
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Interface for modifying existing account configurations on the Hedera network
 * @interface _IUpdate
 * @description Defines the structure for updating various aspects of a Hedera account,
 * including security settings, operational parameters, and governance configurations.
 * @export
 * @since 2.0.0
 * @category Interfaces
 * @subcategory Account
 * @remarks
 * This interface supports multiple update scenarios:
 * - Security configuration updates
 * - Token association management
 * - Staking preferences
 * - Account metadata
 * - DAO governance settings
 * 
 * All fields are optional, allowing for partial updates.
 * Only specified fields will be modified; others remain unchanged.
 * @example
 * ```typescript
 * // Basic account update
 * const basicUpdate: _IUpdate = {
 *   memo: "Primary Treasury Account",
 *   maxAutomaticTokenAssociations: 100,
 *   isReceiverSignatureRequired: true
 * };
 * 
 * // Security-focused update
 * const securityUpdate: _IUpdate = {
 *   isReceiverSignatureRequired: true,
 *   sender: {
 *     key: newSecurityKey,
 *     id: AccountId.fromString("0.0.123456")
 *   }
 * };
 * 
 * // Staking configuration update
 * const stakingUpdate: _IUpdate = {
 *   stakingNode: 3,
 *   memo: "Staking to Node 3"
 * };
 * 
 * // DAO-governed update
 * const daoUpdate: _IUpdate = {
 *   memo: "DAO Treasury",
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IUpdate {
    /**
     * Account description or note
     * @property {string} memo
     * @description Human-readable description or purpose of the account
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Maximum length: 100 characters
     * - Publicly visible on-chain
     * - Can be updated at any time
     * - Useful for account identification
     * @example
     * ```typescript
     * // Set descriptive memo
     * memo: "Primary Treasury - Department A"
     * ```
     */
    memo?: string;

    /**
     * Transaction authorization configuration
     * @property {Object} sender
     * @description Entity authorized to perform the account update
     * @type {Object}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Must have update authority
     * - Can specify new key configuration
     * - Supports multi-signature setups
     * - Critical for security changes
     * @example
     * ```typescript
     * sender: {
     *   // New account control key
     *   key: newSecurityKey,
     *   
     *   // Account performing the update
     *   id: AccountId.fromString("0.0.123456")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Automatic token association limit
     * @property {number} maxAutomaticTokenAssociations
     * @description Maximum number of tokens that can be automatically associated
     * @type {number}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Prevents spam token associations
     * - Cannot be decreased once set
     * - Affects gas costs for token transfers
     * - Important for token-heavy accounts
     * @example
     * ```typescript
     * // Allow up to 100 automatic associations
     * maxAutomaticTokenAssociations: 100
     * ```
     */
    maxAutomaticTokenAssociations?: number;

    /**
     * Enhanced security for incoming transfers
     * @property {boolean} isReceiverSignatureRequired
     * @description Controls whether incoming transfers require explicit approval
     * @type {boolean}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Adds additional security layer
     * - Affects all incoming transfers
     * - May impact transaction processing time
     * - Recommended for high-value accounts
     * @example
     * ```typescript
     * // Enable signature requirement
     * isReceiverSignatureRequired: true
     * ```
     */
    isReceiverSignatureRequired?: boolean

    /**
     * Network participation configuration
     * @property {number} stakingNode
     * @description Target node identifier for HBAR staking
     * @type {number}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Must be a valid node ID
     * - Affects staking rewards
     * - Part of network consensus
     * - Can be changed periodically
     * @example
     * ```typescript
     * // Stake to node 3
     * stakingNode: 3
     * ```
     */
    stakingNode?: number;

    /**
     * DAO governance parameters
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled account updates
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * - Required for DAO-governed accounts
     * - Must follow governance protocols
     * - Ensures decentralized control
     * - Requires consensus validation
     * @example
     * ```typescript
     * dao: {
     *   // DAO controlling the update
     *   topicId: "0.0.34567",
     *   
     *   // Governance decision timestamp
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}