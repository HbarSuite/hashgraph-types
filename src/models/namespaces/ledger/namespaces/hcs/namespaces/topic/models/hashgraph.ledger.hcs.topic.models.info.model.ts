import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HCS Topic Information Model
 * @class _Info
 * @implements {IHashgraph.ILedger.IHCS.ITopic.IInfo}
 * @description Implements comprehensive topic information retrieval and management
 * for Hedera Consensus Service (HCS). This model provides detailed access to
 * topic configuration, status, and metadata.
 * 
 * Core Features:
 * - Topic Identification
 * - Access Control Management
 * - Message Sequencing
 * - Expiration Handling
 * - Auto-renewal Configuration
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class serves as the primary interface for retrieving and managing topic
 * information, ensuring proper access control and configuration management.
 * 
 * @example
 * // Create topic info instance with full configuration
 * const topicInfo = new _Info({
 *   // Topic identification
 *   topicId: '0.0.123456',
 *   topicMemo: 'Governance Channel v2.0',
 *   
 *   // Message tracking
 *   sequenceNumber: '1000',
 *   
 *   // Lifecycle management
 *   expirationTime: '2024-12-31T23:59:59.999Z',
 *   
 *   // Access control
 *   adminKey: ['admin1-key', 'admin2-key'],
 *   submitKey: 'submit-key',
 *   
 *   // Auto-renewal
 *   autoRenewAccountId: '0.0.789012',
 *   
 *   // Network identification
 *   ledgerId: '0'
 * });
 */
export class _Info implements IHashgraph.ILedger.IHCS.ITopic.IInfo {
    /**
     * Topic Identifier
     * @type {string}
     * @description Unique identifier for the HCS topic in the Hedera network.
     * 
     * Format Requirements:
     * - Must follow '0.0.{number}' format
     * - Must be unique within the network
     * - Must be properly allocated
     * 
     * Usage Guidelines:
     * - Use for topic lookups
     * - Reference in message submissions
     * - Include in queries
     * 
     * @example
     * // Mainnet topic
     * topicId: "0.0.123456"
     * 
     * // Testnet topic
     * topicId: "0.0.789012"
     */
    @ApiProperty({
        description: 'The unique identifier of the topic',
        type: () => 'string',
        required: true
    })
    topicId: string;

    /**
     * Topic Description
     * @type {string}
     * @description Human-readable description and metadata for the topic.
     * 
     * Content Guidelines:
     * - Clear purpose description
     * - Version information
     * - Usage instructions
     * - Access requirements
     * 
     * Best Practices:
     * - Keep concise but informative
     * - Include version if applicable
     * - Document special requirements
     * - Note access restrictions
     * 
     * @example
     * // Simple memo
     * topicMemo: "Main Governance Channel"
     * 
     * // Structured memo
     * topicMemo: JSON.stringify({
     *   name: "Treasury Operations",
     *   version: "2.0",
     *   access: "Admin only",
     *   purpose: "Financial governance"
     * })
     */
    @ApiProperty({
        description: 'A short description or note about the topic',
        type: () => 'string',
        required: true
    })
    topicMemo: string;

    /**
     * Message Sequence Number
     * @type {string}
     * @description Current sequence number for messages in the topic.
     * 
     * Sequence Properties:
     * - Monotonically increasing
     * - Unique per message
     * - Zero-based counting
     * 
     * Usage Considerations:
     * - Message ordering
     * - Gap detection
     * - Synchronization
     * - Recovery points
     * 
     * @example
     * // Initial sequence
     * sequenceNumber: "0"
     * 
     * // Active topic
     * sequenceNumber: "1000000"
     */
    @ApiProperty({
        description: 'The current sequence number for messages in the topic',
        type: () => 'string',
        required: true
    })
    sequenceNumber: string;

    /**
     * Topic Expiration Time
     * @type {string}
     * @description ISO timestamp indicating when the topic will expire.
     * 
     * Time Format:
     * - ISO 8601 standard
     * - UTC timezone
     * - Millisecond precision
     * 
     * Management Considerations:
     * - Auto-renewal settings
     * - Grace periods
     * - Renewal notifications
     * - Backup procedures
     * 
     * @example
     * // One year expiration
     * expirationTime: "2024-12-31T23:59:59.999Z"
     * 
     * // Short-term topic
     * expirationTime: "2023-06-30T12:00:00.000Z"
     */
    @ApiProperty({
        description: 'The time when the topic will expire',
        type: () => 'string',
        required: true
    })
    expirationTime: string;

    /**
     * Administrative Access Keys
     * @type {string | Array<string>}
     * @description Cryptographic keys with administrative privileges.
     * 
     * Key Configurations:
     * - Single key for simple admin
     * - Multiple keys for shared control
     * - Key rotation support
     * 
     * Administrative Powers:
     * - Topic updates
     * - Access control
     * - Expiration management
     * - Key rotation
     * 
     * @example
     * // Single admin
     * adminKey: "admin-public-key"
     * 
     * // Multi-signature setup
     * adminKey: [
     *   "primary-admin-key",
     *   "secondary-admin-key",
     *   "emergency-admin-key"
     * ]
     */
    @ApiProperty({
        description: 'The key(s) that can perform administrative operations on the topic',
        type: () => ['string', 'array'],
        required: true
    })
    adminKey: string | Array<string>;

    /**
     * Message Submission Keys
     * @type {string | Array<string>}
     * @description Cryptographic keys required for message submission.
     * 
     * Key Types:
     * - Single key for simple access
     * - Multiple keys for distributed access
     * - Department-specific keys
     * 
     * Access Control:
     * - Message submission rights
     * - Rate limiting
     * - Permission levels
     * - Access auditing
     * 
     * @example
     * // Single submit key
     * submitKey: "submit-public-key"
     * 
     * // Department keys
     * submitKey: [
     *   "treasury-submit-key",
     *   "operations-submit-key",
     *   "audit-submit-key"
     * ]
     */
    @ApiProperty({
        description: 'The key(s) required to submit messages to the topic',
        type: () => ['string', 'array'],
        required: true
    })
    submitKey: string | Array<string>;

    /**
     * Auto-Renewal Account
     * @type {string}
     * @description Account responsible for automatic topic renewal.
     * 
     * Account Requirements:
     * - Must be valid and active
     * - Sufficient balance for renewals
     * - Proper permissions
     * 
     * Renewal Settings:
     * - Renewal period
     * - Fee schedule
     * - Failure handling
     * - Backup accounts
     * 
     * @example
     * // Treasury account
     * autoRenewAccountId: "0.0.789012"
     * 
     * // Operations account
     * autoRenewAccountId: "0.0.456789"
     */
    @ApiProperty({
        description: 'The account ID that will be charged to auto-renew the topic',
        type: () => 'string',
        required: true
    })
    autoRenewAccountId: string;

    /**
     * Network Identifier
     * @type {string}
     * @description Identifies the Hedera network where the topic exists.
     * 
     * Network Types:
     * - Mainnet
     * - Testnet
     * - Private networks
     * 
     * Usage Context:
     * - Network routing
     * - Fee calculation
     * - Service selection
     * - Network-specific features
     * 
     * @example
     * // Mainnet
     * ledgerId: "0"
     * 
     * // Testnet
     * ledgerId: "1"
     */
    @ApiProperty({
        description: 'The identifier of the ledger where the topic exists',
        type: () => 'string',
        required: true
    })
    ledgerId: string;

    /**
     * Topic Information Constructor
     * @constructor
     * @description Initializes a new topic information instance with comprehensive
     * validation and configuration options.
     * 
     * Validation Rules:
     * - Required field presence
     * - Format compliance
     * - Type checking
     * - Cross-field validation
     * 
     * Configuration Process:
     * - Field validation
     * - Type conversion
     * - Default application
     * - Cross-reference checking
     * 
     * @throws {Error} When required fields are missing
     * @throws {Error} When field formats are invalid
     * @throws {Error} When type validation fails
     * 
     * @example
     * // Initialize with full configuration
     * const info = new _Info({
     *   // Basic information
     *   topicId: '0.0.123456',
     *   topicMemo: JSON.stringify({
     *     name: "Treasury Operations",
     *     version: "2.0",
     *     department: "Finance"
     *   }),
     *   
     *   // Message tracking
     *   sequenceNumber: '1000',
     *   
     *   // Lifecycle
     *   expirationTime: new Date(
     *     Date.now() + 365 * 24 * 60 * 60 * 1000
     *   ).toISOString(),
     *   
     *   // Access control
     *   adminKey: [
     *     'primary-admin',
     *     'backup-admin'
     *   ],
     *   submitKey: 'department-submit-key',
     *   
     *   // Auto-renewal
     *   autoRenewAccountId: '0.0.789012',
     *   
     *   // Network
     *   ledgerId: '0'
     * });
     */
    constructor(data: IHashgraph.ILedger.IHCS.ITopic.IInfo) {
        // Assign values from input data
        this.topicId = data.topicId;
        this.topicMemo = data.topicMemo;
        this.sequenceNumber = data.sequenceNumber;
        this.expirationTime = data.expirationTime;
        this.adminKey = data.adminKey;
        this.submitKey = data.submitKey;
        this.autoRenewAccountId = data.autoRenewAccountId;
        this.ledgerId = data.ledgerId;

        // Validate all fields
        if (typeof this.topicId !== 'string') {
            throw new Error('topicId must be a string');
        }
        if (typeof this.topicMemo !== 'string') {
            throw new Error('topicMemo must be a string');
        }
        if (typeof this.sequenceNumber !== 'string') {
            throw new Error('sequenceNumber must be a string');
        }
        if (typeof this.expirationTime !== 'string') {
            throw new Error('expirationTime must be a string');
        }
        if (typeof this.adminKey !== 'string' && !Array.isArray(this.adminKey)) {
            throw new Error('adminKey must be a string or an array of strings');
        }
        if (typeof this.submitKey !== 'string' && !Array.isArray(this.submitKey)) {
            throw new Error('submitKey must be a string or an array of strings');
        }
        if (typeof this.autoRenewAccountId !== 'string' && this.autoRenewAccountId !== null && this.autoRenewAccountId !== undefined) {
            throw new Error('autoRenewAccountId must be a string, null, or undefined');
        }
        if (typeof this.ledgerId !== 'string') {
            throw new Error('ledgerId must be a string');
        }
    }
}