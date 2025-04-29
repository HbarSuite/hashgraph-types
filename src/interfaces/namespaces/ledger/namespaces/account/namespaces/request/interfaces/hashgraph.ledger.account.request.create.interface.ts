import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Interface for creating new accounts on the Hedera network
 * @interface _ICreate
 * @description Defines the structure and parameters required for creating a new account
 * on the Hedera Hashgraph network, including security settings, initial balance,
 * and operational configurations.
 * @memberof IHashgraph.ILedger.IAccounts
 * @remarks
 * This interface supports various account creation scenarios:
 * - Standard account creation with basic settings
 * - Enhanced security configurations
 * - Automated token association settings
 * - DAO-governed account creation
 * - Online and offline transaction processing
 * @example
 * ```typescript
 * // Example of creating a basic account
 * const createAccount: _ICreate = {
 *   validatorConsensusTimestamp: "1234567890.123456789",
 *   balance: 1000000000, // 10 ℏ
 *   sender: {
 *     key: myPublicKey,
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   memo: "Main treasury account",
 *   maxAutomaticTokenAssociations: 100,
 *   isReceiverSignatureRequired: true
 * };
 * 
 * // Example of creating a DAO-controlled account
 * const createDaoAccount: _ICreate = {
 *   validatorConsensusTimestamp: "1234567890.123456789",
 *   balance: 5000000000, // 50 ℏ
 *   sender: {
 *     key: daoPublicKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _ICreate {
    /**
     * Network consensus timestamp for account creation
     * @property {string} validatorConsensusTimestamp
     * @description Timestamp when the account creation was validated by the network
     * @type {string}
     * @memberof _ICreate
     * @required
     * @remarks
     * - Format: seconds.nanoseconds
     * - Used for transaction ordering and validation
     * - Must be within the valid transaction window
     * @example
     * ```typescript
     * validatorConsensusTimestamp: "1234567890.123456789"
     * ```
     */
    validatorConsensusTimestamp: string

    /**
     * Account description or note
     * @property {string} memo
     * @description Optional descriptive text associated with the account
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Maximum length: 100 characters
     * - Stored on-chain
     * - Publicly visible
     * @example
     * ```typescript
     * memo: "Main treasury account for Project X"
     * ```
     */
    memo?: string

    /**
     * Account creation authority
     * @property {Object} sender
     * @description Entity responsible for creating and funding the new account
     * @type {Object}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Must have sufficient balance for account creation fee
     * - Must have permission to create accounts
     * - Controls initial account configuration
     * @example
     * ```typescript
     * sender: {
     *   key: myPublicKey, // Sender's authentication key
     *   id: AccountId.fromString("0.0.123456") // Sender's account ID
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Initial account funding
     * @property {number} balance
     * @description Starting balance for the new account in tinybars
     * @type {number}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Minimum balance requirements apply
     * - 1 ℏ = 100,000,000 tinybars
     * - Must be non-negative
     * - Sender must have sufficient balance
     * @example
     * ```typescript
     * // Set initial balance to 10 ℏ
     * balance: 1000000000
     * ```
     */
    balance?: number

    /**
     * Automatic token association limit
     * @property {number} maxAutomaticTokenAssociations
     * @description Maximum number of tokens that can be automatically associated
     * @type {number}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Affects gas costs for token transfers
     * - Higher limits increase account creation cost
     * - Cannot be decreased once set
     * - Default is 0 if not specified
     * @example
     * ```typescript
     * // Allow up to 100 automatic token associations
     * maxAutomaticTokenAssociations: 100
     * ```
     */
    maxAutomaticTokenAssociations?: number

    /**
     * Enhanced security option for incoming transfers
     * @property {boolean} isReceiverSignatureRequired
     * @description Controls whether incoming transfers require account owner's signature
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Provides additional security for incoming transfers
     * - May impact transaction processing time
     * - Cannot be changed after account creation
     * - Default is false if not specified
     * @example
     * ```typescript
     * // Require signature for incoming transfers
     * isReceiverSignatureRequired: true
     * ```
     */
    isReceiverSignatureRequired?: boolean

    /**
     * Offline transaction processing flag
     * @property {boolean} isOfflineTransaction
     * @description Indicates if the account creation should be processed offline
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Affects transaction processing flow
     * - May have different fee structures
     * - Requires special handling by the network
     * - Default is false if not specified
     * @example
     * ```typescript
     * // Process as offline transaction
     * isOfflineTransaction: true
     * ```
     */
    isOfflineTransaction?: boolean

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Settings for DAO-controlled account creation
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Required for DAO-governed accounts
     * - Must reference valid DAO topic
     * - Enables governance features
     * - Affects account permissions
     * @example
     * ```typescript
     * dao: {
     *   // DAO controlling the account
     *   topicId: "0.0.34567",
     *   
     *   // Governance decision timestamp
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}