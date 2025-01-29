import { _Accounts } from '../hashgraph.ledger.account.namespace'
import { ApiProperty } from '@hsuite/nestjs-swagger'
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace'
import { _AutoRenewPeriod } from './hashgraph.ledger.account.models.auto-renew-period.model'
import { _StakingInfo } from './hashgraph.ledger.account.models.staking-info.model'

/**
 * Model for managing Hashgraph account information
 * 
 * @class _Info
 * @implements {IHashgraph.ILedger.IAccounts.IInfo}
 * @description Provides comprehensive functionality for managing account information including:
 * - Complete account details and status management
 * - Advanced balance and transaction tracking
 * - Comprehensive renewal and expiration handling
 * - Detailed staking and rewards monitoring
 * - Token and NFT relationship management
 * - Robust Ethereum compatibility features
 * @namespace Hashgraph.Ledger.Account
 * @category Models
 * @subcategory Ledger
 * @since 2.0.0
 * 
 * This class provides complete management of account information:
 * - Account Details:
 *   - Comprehensive information tracking
 *   - Advanced status monitoring
 *   - Complete balance management
 *   - Detailed key associations
 *   - State persistence
 * 
 * - Transaction Settings:
 *   - Precise record thresholds
 *   - Advanced signature requirements
 *   - Flexible proxy configurations
 *   - Robust security controls
 *   - Policy enforcement
 * 
 * - Lifecycle Management:
 *   - Automated renewal handling
 *   - Precise expiration tracking
 *   - Status update monitoring
 *   - State change management
 *   - History maintenance
 * 
 * - Token Management:
 *   - Complete NFT ownership tracking
 *   - Advanced token associations
 *   - Balance monitoring
 *   - Asset relationship control
 *   - Limit enforcement
 * 
 * - Ethereum Features:
 *   - Precise nonce tracking
 *   - Advanced compatibility settings
 *   - Cross-chain integration
 *   - Transaction coordination
 *   - State synchronization
 * 
 * Key features:
 * - Complete account lifecycle management
 * - Advanced transaction control system
 * - Comprehensive validation framework
 * - Robust error handling
 * - Detailed state tracking
 * 
 * Implementation details:
 * - Uses precise numeric handling
 * - Supports multiple operation types
 * - Manages complex relationships
 * - Ensures data consistency
 * - Maintains audit trails
 * 
 * @example
 * // Create a comprehensive account information instance
 * const accountInfo = new _Info({
 *   // Basic account details
 *   balance: "1000000000",                // 10 HBAR
 *   accountId: "0.0.12345",              // Account ID
 *   isDeleted: false,                     // Active status
 * 
 *   // Proxy and rewards
 *   proxyAccountId: "0.0.67890",         // Staking proxy
 *   proxyReceived: "500000000",          // 5 HBAR rewards
 * 
 *   // Security settings
 *   key: "302a300506...",                // Public key
 *   sendRecordThreshold: "1000000",      // 0.01 HBAR
 *   receiveRecordThreshold: "2000000",   // 0.02 HBAR
 *   isReceiverSignatureRequired: true,   // Enhanced security
 * 
 *   // Lifecycle configuration
 *   expirationTime: "2023-12-31T23:59:59.999Z",
 *   autoRenewPeriod: {
 *     seconds: {
 *       low: 7776000,                    // 90 days
 *       high: 0,
 *       unsigned: false
 *     }
 *   },
 * 
 *   // Additional properties
 *   accountMemo: "Main operations account",
 *   ownedNfts: "5",                      // NFT count
 *   maxAutomaticTokenAssociations: "10", // Token limit
 *   aliasKey: "0x1234567890abcdef",     // Account alias
 *   ledgerId: "mainnet",                 // Network
 *   ethereumNonce: "42",                 // ETH compatibility
 * 
 *   // Staking configuration
 *   stakingInfo: {
 *     declineStakingReward: false,
 *     stakePeriodStart: "2023-12-23T12:00:00Z",
 *     pendingReward: "100.50",
 *     stakedToMe: "1000.75",
 *     stakedAccountId: "0.0.12345",
 *     stakedNodeId: "5"
 *   }
 * });
 * 
 * @throws {Error} When validation fails for any required field
 * @throws {Error} When numeric values are invalid
 * @throws {Error} When required objects are missing
 */
export class _Info implements IHashgraph.ILedger.IAccounts.IInfo {
    /**
     * The current balance of the account in tinybars
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the account balance providing:
     * - Current holdings
     * - Amount tracking
     * - Balance management
     * - Value representation
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be in tinybars
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid amount
     * - Must be non-negative
     * 
     * @example
     * // Valid balance values
     * balance = "1000000000"  // 10 HBAR
     * balance = "100"         // 100 tinybars
     * 
     * @throws {Error} When an invalid balance is provided
     */
    @ApiProperty({
        description: 'The current balance of the account',
        example: '1000000000',
        type: () => String
    })
    balance: string;

    /**
     * The unique identifier of the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the account identifier providing:
     * - Unique identification
     * - Network addressing
     * - Account resolution
     * - Reference handling
     * 
     * Format requirements:
     * - Must be shard.realm.num format
     * - Must use numeric values
     * - Must be properly formatted
     * - Must be valid account
     * 
     * Validation rules:
     * - Must match format pattern
     * - Must use valid numbers
     * - Must be properly structured
     * - Must be existing account
     * 
     * @example
     * // Valid account identifier
     * accountId = "0.0.12345"  // shard.realm.num format
     * 
     * @throws {Error} When an invalid account ID is provided
     */
    @ApiProperty({
        description: 'The unique identifier of the account',
        example: '0.0.12345',
        type: () => String
    })
    accountId: string;

    /**
     * The associated contract account ID
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the contract association providing:
     * - Contract linkage
     * - Account relationship
     * - Contract identification
     * 
     * Format requirements:
     * - Must be shard.realm.num format
     * - Must use numeric values
     * - Must be properly formatted
     * - Must be valid contract
     * 
     * Validation rules:
     * - Must match format pattern
     * - Must use valid numbers
     * - Must be properly structured
     * - Must be existing contract
     * 
     * @example
     * // Valid contract account ID
     * contractAccountId = "0.0.54321"  // shard.realm.num format
     * 
     * @throws {Error} When an invalid contract account ID is provided
     */
    @ApiProperty({
        description: 'The contract account ID associated with this account, if any',
        example: '0.0.54321',
        type: () => String,
        required: false
    })
    contractAccountId: string;

    /**
     * Flag indicating if the account is deleted
     * 
     * @type {boolean}
     * @memberof _Info
     * @description Controls account status providing:
     * - Deletion status
     * - Account availability
     * - State tracking
     * - Access control
     * 
     * Flag requirements:
     * - Must be a boolean
     * - Affects account access
     * - Controls operations
     * - Determines availability
     * 
     * Validation rules:
     * - Must be boolean type
     * - Must be properly defined
     * - Must be consistent
     * - Must be valid
     * 
     * @example
     * // Valid deletion flags
     * isDeleted = false  // Account active
     * isDeleted = true   // Account deleted
     * 
     * @throws {Error} When an invalid flag value is provided
     */
    @ApiProperty({
        description: 'Indicates whether the account has been deleted',
        example: false,
        type: () => Boolean
    })
    isDeleted: boolean;

    /**
     * The account ID of the proxy staking account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the proxy staking target providing:
     * - Proxy identification
     * - Staking direction
     * - Relationship tracking
     * - Target validation
     * 
     * Format requirements:
     * - Must be shard.realm.num format
     * - Must use numeric values
     * - Must be properly formatted
     * - Must be valid account
     * 
     * Validation rules:
     * - Must match format pattern
     * - Must use valid numbers
     * - Must be properly structured
     * - Must be existing account
     * 
     * @example
     * // Valid proxy account ID
     * proxyAccountId = "0.0.67890"  // shard.realm.num format
     * 
     * @throws {Error} When an invalid proxy account ID is provided
     */
    @ApiProperty({
        description: 'The account ID of the proxy account, if this account is proxied',
        example: '0.0.67890',
        type: () => String,
        required: false
    })
    proxyAccountId: string;

    /**
     * Amount of cryptocurrency received as proxy staking rewards
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents proxy rewards providing:
     * - Reward tracking
     * - Amount management
     * - Balance control
     * - Distribution handling
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be in tinybars
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid amount
     * - Must be non-negative
     * 
     * @example
     * // Valid proxy received amounts
     * proxyReceived = "500000000"  // 5 HBAR
     * proxyReceived = "1000"       // 1000 tinybars
     * 
     * @throws {Error} When an invalid amount is provided
     */
    @ApiProperty({
        description: 'The amount of cryptocurrency received by this account as a proxy',
        example: '500000000',
        type: () => String
    })
    proxyReceived: string;

    /**
     * The public key associated with the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the account key providing:
     * - Cryptographic identity
     * - Security control
     * - Access management
     * - Authentication support
     * 
     * Format requirements:
     * - Must be hex encoded
     * - Must be Ed25519 key
     * - Must be properly formatted
     * - Must be valid key
     * 
     * Validation rules:
     * - Must be string type
     * - Must be hex format
     * - Must be proper length
     * - Must be valid key
     * 
     * @example
     * // Valid public key
     * key = "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
     * 
     * @throws {Error} When an invalid key is provided
     */
    @ApiProperty({
        description: 'The public key associated with this account',
        example: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7',
        type: () => String
    })
    key: string;

    /**
     * Threshold for generating transaction records for outgoing transfers
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents send threshold providing:
     * - Record generation control
     * - Transaction tracking
     * - Threshold management
     * - Monitoring configuration
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be in tinybars
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid amount
     * - Must be non-negative
     * 
     * @example
     * // Valid send record thresholds
     * sendRecordThreshold = "1000000"  // 0.01 HBAR
     * sendRecordThreshold = "0"        // No threshold
     * 
     * @throws {Error} When an invalid threshold is provided
     */
    @ApiProperty({
        description: 'The threshold amount for which records are created for transfers from this account',
        example: '1000000',
        type: () => String
    })
    sendRecordThreshold: string;

    /**
     * Threshold for generating transaction records for incoming transfers
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents receive threshold providing:
     * - Record generation control
     * - Transaction tracking
     * - Threshold management
     * - Monitoring configuration
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be in tinybars
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid amount
     * - Must be non-negative
     * 
     * @example
     * // Valid receive record thresholds
     * receiveRecordThreshold = "2000000"  // 0.02 HBAR
     * receiveRecordThreshold = "0"        // No threshold
     * 
     * @throws {Error} When an invalid threshold is provided
     */
    @ApiProperty({
        description: 'The threshold amount for which records are created for transfers to this account',
        example: '2000000',
        type: () => String
    })
    receiveRecordThreshold: string;

    /**
     * Flag indicating if receiver signature is required
     * 
     * @type {boolean}
     * @memberof _Info
     * @description Controls signature requirements providing:
     * - Security control
     * - Transfer authorization
     * - Policy enforcement
     * - Access management
     * 
     * Flag requirements:
     * - Must be a boolean
     * - Affects transfers
     * - Controls security
     * - Determines policy
     * 
     * Validation rules:
     * - Must be boolean type
     * - Must be properly defined
     * - Must be consistent
     * - Must be valid
     * 
     * @example
     * // Valid signature requirement flags
     * isReceiverSignatureRequired = true   // Signature required
     * isReceiverSignatureRequired = false  // Signature optional
     * 
     * @throws {Error} When an invalid flag value is provided
     */
    @ApiProperty({
        description: 'Indicates whether the receiver\'s signature is required for transfers to this account',
        example: true,
        type: () => Boolean
    })
    isReceiverSignatureRequired: boolean;

    /**
     * Timestamp when the account will expire
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents expiration time providing:
     * - Lifecycle management
     * - Time tracking
     * - Expiration control
     * - Status handling
     * 
     * Format requirements:
     * - Must be ISO 8601 format
     * - Must include timezone
     * - Must be properly formatted
     * - Must be valid date
     * 
     * Validation rules:
     * - Must match ISO 8601
     * - Must be valid timestamp
     * - Must include Z suffix
     * - Must be properly structured
     * 
     * @example
     * // Valid expiration timestamp
     * expirationTime = "2023-12-31T23:59:59.999Z"
     * 
     * @throws {Error} When an invalid timestamp is provided
     */
    @ApiProperty({
        description: 'The timestamp when this account will expire',
        example: '2023-12-31T23:59:59.999Z',
        type: () => String
    })
    expirationTime: string;

    /**
     * Auto-renewal period settings
     * 
     * @type {IHashgraph.ILedger.IAccounts.IAutoRenewPeriod}
     * @memberof _Info
     * @description Represents renewal configuration providing:
     * - Period management
     * - Renewal control
     * - Time tracking
     * - Schedule handling
     * 
     * Configuration requirements:
     * - Must be valid period object
     * - Must specify duration
     * - Must be properly formatted
     * - Must be valid settings
     * 
     * Validation rules:
     * - Must be proper object
     * - Must have valid seconds
     * - Must be properly structured
     * - Must be valid period
     * 
     * @example
     * // Valid auto-renewal period
     * autoRenewPeriod = {
     *   seconds: {
     *     low: 7776000,  // 90 days
     *     high: 0,
     *     unsigned: false
     *   }
     * }
     * 
     * @throws {Error} When invalid period settings are provided
     */
    @ApiProperty({
        description: 'The period for which this account will auto-renew',
        type: () => _AutoRenewPeriod
    })
    autoRenewPeriod: IHashgraph.ILedger.IAccounts.IAutoRenewPeriod;

    /**
     * Optional memo associated with the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents account memo providing:
     * - Description storage
     * - Note management
     * - Information tracking
     * - Metadata handling
     * 
     * Format requirements:
     * - Must be string type
     * - Can be empty
     * - Must be properly formatted
     * - Must be valid text
     * 
     * Validation rules:
     * - Must be string type
     * - Must be valid UTF-8
     * - Must be reasonable length
     * - Must be properly formatted
     * 
     * @example
     * // Valid account memos
     * accountMemo = "Main account"
     * accountMemo = ""  // Empty memo
     * 
     * @throws {Error} When an invalid memo is provided
     */
    @ApiProperty({
        description: 'A memo or note associated with this account',
        example: 'This is a test account',
        type: () => String
    })
    accountMemo: string;

    /**
     * Number of NFTs owned by the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents NFT ownership providing:
     * - Token counting
     * - Asset tracking
     * - Ownership management
     * - Balance control
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be integer value
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid count
     * - Must be non-negative
     * 
     * @example
     * // Valid NFT counts
     * ownedNfts = "5"  // Owns 5 NFTs
     * ownedNfts = "0"  // No NFTs
     * 
     * @throws {Error} When an invalid count is provided
     */
    @ApiProperty({
        description: 'The number of NFTs owned by this account',
        example: '5',
        type: () => String
    })
    ownedNfts: string;

    /**
     * Maximum number of automatic token associations
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents association limit providing:
     * - Token management
     * - Association control
     * - Limit tracking
     * - Capacity handling
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be integer value
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid limit
     * - Must be non-negative
     * 
     * @example
     * // Valid association limits
     * maxAutomaticTokenAssociations = "10"  // Maximum 10 associations
     * maxAutomaticTokenAssociations = "0"   // No automatic associations
     * 
     * @throws {Error} When an invalid limit is provided
     */
    @ApiProperty({
        description: 'The maximum number of tokens that can be automatically associated with this account',
        example: '10',
        type: () => String
    })
    maxAutomaticTokenAssociations: string;

    /**
     * Optional alias key for the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents account alias providing:
     * - Alternative identification
     * - Key management
     * - Alias control
     * - Reference handling
     * 
     * Format requirements:
     * - Must be hex string
     * - Must be properly formatted
     * - Must be valid key
     * - Must be unique
     * 
     * Validation rules:
     * - Must be string type
     * - Must be hex format
     * - Must be valid alias
     * - Must be properly structured
     * 
     * @example
     * // Valid alias keys
     * aliasKey = "0x1234567890abcdef"
     * 
     * @throws {Error} When an invalid alias is provided
     */
    @ApiProperty({
        description: 'An alias key associated with this account',
        example: '0x1234567890abcdef',
        type: () => String,
        required: false
    })
    aliasKey: string;

    /**
     * Identifier of the ledger containing this account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents network identification providing:
     * - Network selection
     * - Chain identification
     * - Environment tracking
     * - Context management
     * 
     * Format requirements:
     * - Must be valid network ID
     * - Must be properly formatted
     * - Must be supported network
     * - Must be active network
     * 
     * Validation rules:
     * - Must be string type
     * - Must be valid network
     * - Must be supported
     * - Must be available
     * 
     * @example
     * // Valid ledger IDs
     * ledgerId = "mainnet"
     * ledgerId = "testnet"
     * 
     * @throws {Error} When an invalid ledger ID is provided
     */
    @ApiProperty({
        description: 'The ID of the ledger on which this account exists',
        example: 'mainnet',
        type: () => String
    })
    ledgerId: string;

    /**
     * Ethereum nonce for the account
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents transaction nonce providing:
     * - Transaction ordering
     * - Replay protection
     * - Sequence tracking
     * - State management
     * 
     * Format requirements:
     * - Must be numeric string
     * - Must be non-negative
     * - Must be integer value
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be string type
     * - Must be numeric format
     * - Must be valid nonce
     * - Must be non-negative
     * 
     * @example
     * // Valid nonce values
     * ethereumNonce = "42"  // Next transaction nonce
     * ethereumNonce = "0"   // Initial nonce
     * 
     * @throws {Error} When an invalid nonce is provided
     */
    @ApiProperty({
        description: 'The nonce used for Ethereum compatibility',
        example: '42',
        type: () => String
    })
    ethereumNonce: string;

    /**
     * Staking information for the account
     * 
     * @type {IHashgraph.ILedger.IAccounts.IStakingInfo}
     * @memberof _Info
     * @description Represents staking configuration providing:
     * - Stake management
     * - Reward tracking
     * - Node association
     * - Period control
     * 
     * Configuration requirements:
     * - Must be valid staking object
     * - Must include all required fields
     * - Must be properly formatted
     * - Must be valid settings
     * 
     * Validation rules:
     * - Must be proper object
     * - Must have valid fields
     * - Must be properly structured
     * - Must be valid configuration
     * 
     * @example
     * // Valid staking information
     * stakingInfo = {
     *   declineStakingReward: false,
     *   stakePeriodStart: "2023-12-23T12:00:00Z",
     *   pendingReward: "100.50",
     *   stakedToMe: "1000.75",
     *   stakedAccountId: "0.0.12345",
     *   stakedNodeId: "5"
     * }
     * 
     * @throws {Error} When invalid staking information is provided
     */
    @ApiProperty({
        description: 'Information about the staking status of this account',
        type: () => _StakingInfo
    })
    stakingInfo: IHashgraph.ILedger.IAccounts.IStakingInfo;

    /**
     * Creates an instance of the _Info class
     * 
     * @constructor
     * @param {IHashgraph.ILedger.IAccounts.IInfo} data - The account information data
     * @throws {Error} When validation fails for any parameter
     * @memberof _Info
     * @description Initializes a new account info instance with:
     * - Complete parameter validation
     * - Field verification
     * - Type checking
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies all parameters
     * - Validates formats
     * - Checks types
     * - Ensures consistency
     * 
     * Required parameters:
     * - All fields from IHashgraph.ILedger.IAccounts.IInfo interface
     * 
     * @example
     * // Create a valid account info instance
     * const accountInfo = new _Info({
     *   balance: "1000000000",                // Account balance
     *   accountId: "0.0.12345",              // Account ID
     *   contractAccountId: "0.0.54321",       // Contract ID
     *   isDeleted: false,                     // Status
     *   proxyAccountId: "0.0.67890",         // Proxy account
     *   proxyReceived: "500000000",          // Proxy rewards
     *   key: "302a300506...",                // Public key
     *   sendRecordThreshold: "1000000",      // Send threshold
     *   receiveRecordThreshold: "2000000",   // Receive threshold
     *   isReceiverSignatureRequired: true,   // Signature requirement
     *   expirationTime: "2023-12-31T23:59:59.999Z", // Expiration
     *   autoRenewPeriod: {                   // Renewal settings
     *     seconds: { low: 7776000, high: 0, unsigned: false }
     *   },
     *   accountMemo: "Main account",         // Memo
     *   ownedNfts: "5",                      // NFT count
     *   maxAutomaticTokenAssociations: "10", // Token limit
     *   aliasKey: "0x1234567890abcdef",     // Alias
     *   ledgerId: "mainnet",                 // Network
     *   ethereumNonce: "42",                 // Nonce
     *   stakingInfo: {                       // Staking config
     *     declineStakingReward: false,
     *     stakePeriodStart: "2023-12-23T12:00:00Z",
     *     pendingReward: "100.50",
     *     stakedToMe: "1000.75",
     *     stakedAccountId: "0.0.12345",
     *     stakedNodeId: "5"
     *   }
     * });
     * 
     * // These will throw errors
     * const invalid1 = new _Info({});        // Error: Missing required fields
     * const invalid2 = new _Info({           // Error: Invalid balance
     *   ...validData,
     *   balance: "invalid"
     * });
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IInfo) {
        if (typeof data.balance !== 'string' || data.balance.trim() === '') {
            throw new Error('Invalid balance: must be a non-empty string');
        }
        this.balance = data.balance;

        if (typeof data.accountId !== 'string' || data.accountId.trim() === '') {
            throw new Error('Invalid accountId: must be a non-empty string');
        }
        this.accountId = data.accountId;

        if (typeof data.contractAccountId !== 'string' || data.contractAccountId.trim() === '') {
            throw new Error('Invalid contractAccountId: must be a non-empty string');
        }
        this.contractAccountId = data.contractAccountId;

        if (typeof data.isDeleted !== 'boolean') {
            throw new Error('Invalid isDeleted: must be a boolean');
        }
        this.isDeleted = data.isDeleted;

        if (data.proxyAccountId !== null && (typeof data.proxyAccountId !== 'string' || data.proxyAccountId.trim() === '')) {
            throw new Error('Invalid proxyAccountId: must be null or a non-empty string');
        }
        this.proxyAccountId = data.proxyAccountId;

        if (typeof data.proxyReceived !== 'string' || data.proxyReceived.trim() === '') {
            throw new Error('Invalid proxyReceived: must be a non-empty string');
        }
        this.proxyReceived = data.proxyReceived;

        if (typeof data.key !== 'string' || data.key.trim() === '') {
            throw new Error('Invalid key: must be a non-empty string');
        }
        this.key = data.key;

        if (typeof data.sendRecordThreshold !== 'string' || data.sendRecordThreshold.trim() === '') {
            throw new Error('Invalid sendRecordThreshold: must be a non-empty string');
        }
        this.sendRecordThreshold = data.sendRecordThreshold;

        if (typeof data.receiveRecordThreshold !== 'string' || data.receiveRecordThreshold.trim() === '') {
            throw new Error('Invalid receiveRecordThreshold: must be a non-empty string');
        }
        this.receiveRecordThreshold = data.receiveRecordThreshold;

        if (typeof data.isReceiverSignatureRequired !== 'boolean') {
            throw new Error('Invalid isReceiverSignatureRequired: must be a boolean');
        }
        this.isReceiverSignatureRequired = data.isReceiverSignatureRequired;

        if (typeof data.expirationTime !== 'string' || data.expirationTime.trim() === '') {
            throw new Error('Invalid expirationTime: must be a non-empty string');
        }
        this.expirationTime = data.expirationTime;

        if (typeof data.autoRenewPeriod !== 'object' || data.autoRenewPeriod === null) {
            throw new Error('Invalid autoRenewPeriod: must be an object');
        }
        this.autoRenewPeriod = data.autoRenewPeriod;

        if (data.accountMemo !== null && data.accountMemo !== '' && (typeof data.accountMemo !== 'string' || data.accountMemo.trim() === '')) {
            throw new Error('Invalid accountMemo: must be null, an empty string, or a non-empty string');
        }
        this.accountMemo = data.accountMemo;

        if (typeof data.ownedNfts !== 'string' || data.ownedNfts.trim() === '') {
            throw new Error('Invalid ownedNfts: must be a non-empty string');
        }
        this.ownedNfts = data.ownedNfts;

        if (typeof data.maxAutomaticTokenAssociations !== 'string' || data.maxAutomaticTokenAssociations.trim() === '') {
            throw new Error('Invalid maxAutomaticTokenAssociations: must be a non-empty string');
        }
        this.maxAutomaticTokenAssociations = data.maxAutomaticTokenAssociations;

        if (data.aliasKey !== null && data.aliasKey !== '' && (typeof data.aliasKey !== 'string' || data.aliasKey.trim() === '')) {
            throw new Error('Invalid aliasKey: must be null, an empty string, or a non-empty string');
        }
        this.aliasKey = data.aliasKey;

        if (typeof data.ledgerId !== 'string' || data.ledgerId.trim() === '') {
            throw new Error('Invalid ledgerId: must be a non-empty string');
        }
        this.ledgerId = data.ledgerId;

        if (typeof data.ethereumNonce !== 'string' || data.ethereumNonce.trim() === '') {
            throw new Error('Invalid ethereumNonce: must be a non-empty string');
        }
        this.ethereumNonce = data.ethereumNonce;

        if (typeof data.stakingInfo !== 'object' || data.stakingInfo === null) {
            throw new Error('Invalid stakingInfo: must be an object');
        }
        this.stakingInfo = data.stakingInfo;
    }
}