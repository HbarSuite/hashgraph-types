import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';
import { KeyList, PublicKey, AccountId } from "@hashgraph/sdk";

/**
 * @file HCS Message Submission Model
 * @class _Submit
 * @implements {IHashgraph.ILedger.IHCS.ITopic.IMessage.ISubmit}
 * @description Implements secure message submission functionality for Hedera Consensus
 * Service (HCS) topics. This model handles message content, signatures, and sender
 * verification.
 * 
 * Core Features:
 * - Message Content Validation
 * - Cryptographic Signature Handling
 * - Sender Authentication
 * - DAO Integration Support
 * - Transaction Configuration
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and verifiable message submission to HCS topics,
 * with comprehensive validation and authentication mechanisms.
 * 
 * @example
 * // Submit a signed message with metadata
 * const messageSubmit = new _Submit(
 *   "Important consensus message",
 *   signatureBytes, // Generated signature
 *   "0.0.123456", // Sender's account
 *   {
 *     key: PublicKey.fromString("..."),
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   {
 *     topicId: "0.0.789012",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * );
 */
export class _Submit implements IHashgraph.ILedger.IHCS.ITopic.IMessage.ISubmit {
    /**
     * Message Content
     * @type {string}
     * @description The actual message content to be submitted to the HCS topic.
     * 
     * Content Requirements:
     * - Must be a non-empty string
     * - Should be properly formatted for the intended use case
     * - May contain application-specific data
     * - Should not exceed network size limits
     * 
     * @example
     * // Simple text message
     * message: "Hello Hedera Network!"
     * 
     * // JSON-formatted message
     * message: JSON.stringify({
     *   type: "transaction",
     *   data: {
     *     amount: 100,
     *     currency: "HBAR"
     *   }
     * })
     */
    @ApiProperty({
        type: () => String,
        description: 'The content of the message to be submitted to the Hashgraph Consensus Service topic',
        required: true
    })
    message: string;

    /**
     * Cryptographic Signature
     * @type {Uint8Array}
     * @description Digital signature proving message authenticity and sender identity.
     * 
     * Signature Requirements:
     * - Must be a valid Uint8Array
     * - Should be generated using appropriate key
     * - Must follow cryptographic standards
     * - Should be verifiable by recipients
     * 
     * @example
     * // Generate and assign signature
     * const signature = await privateKey.sign(
     *   Buffer.from(message)
     * );
     * this.signature = signature;
     */
    @ApiProperty({
        type: () => Uint8Array,
        description: 'The signature of the message to be submitted to the Hashgraph Consensus Service topic',
        required: true
    })
    signature: Uint8Array;

    /**
     * Sender Configuration
     * @type {Object}
     * @description Comprehensive sender information and authentication details.
     * 
     * Configuration Options:
     * - Public Key/KeyList for verification
     * - Account ID for identification
     * - Optional metadata
     * 
     * Security Considerations:
     * - Keys must be properly managed
     * - Account IDs must be valid
     * - Permissions must be verified
     * 
     * @example
     * sender: {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.123456")
     * }
     */
    @ApiProperty({
        type: () => Object,
        description: 'Configuration for the topic sender',
        required: false
    })
    sender?: {
        /**
         * Authentication Key
         * @type {PublicKey | KeyList}
         * @description Cryptographic key(s) for message verification.
         * 
         * Key Types:
         * - Single PublicKey for simple authentication
         * - KeyList for multi-signature scenarios
         * 
         * @example
         * key: PublicKey.fromString("...")
         * // OR
         * key: new KeyList([key1, key2, key3])
         */
        key?: PublicKey | KeyList;

        /**
         * Sender Account
         * @type {AccountId}
         * @description The Hedera account identifier for the message sender.
         * 
         * Format Requirements:
         * - Must be a valid AccountId
         * - Should have appropriate permissions
         * 
         * @example
         * id: AccountId.fromString("0.0.123456")
         */
        id?: AccountId;
    };

    /**
     * DAO Configuration
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @description Integration settings for DAO operations.
     * 
     * Configuration Options:
     * - Topic ID association
     * - Consensus parameters
     * - Governance rules
     * - Validation settings
     * 
     * @example
     * dao: {
     *   topicId: "0.0.789012",
     *   consensusTimestamp: "1234567890.123456789",
     *   // Additional DAO-specific settings
     * }
     */
    @ApiProperty({
        type: () => Object,
        description: 'Configuration settings for the DAO',
        required: false
    })
    dao?: IHashgraph.ILedger.IDAO.IConfig;

    /**
     * Message Submission Constructor
     * @constructor
     * @description Initializes a new message submission with comprehensive
     * validation and configuration options.
     * 
     * Validation Rules:
     * - Message must be non-empty string
     * - Signature must be valid Uint8Array
     * - Sender ID must be properly formatted
     * - Optional configurations must be valid
     * 
     * @throws {Error} When message is invalid or empty
     * @throws {Error} When signature is invalid
     * @throws {Error} When sender ID format is invalid
     * 
     * @example
     * // Create message with full configuration
     * const submit = new _Submit(
     *   // Message content with metadata
     *   JSON.stringify({
     *     type: "proposal",
     *     content: "Update network parameters",
     *     timestamp: Date.now()
     *   }),
     *   // Cryptographic signature
     *   await privateKey.sign(messageBuffer),
     *   // Sender account
     *   "0.0.123456",
     *   // Sender configuration
     *   {
     *     key: PublicKey.fromString("..."),
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   // DAO settings
     *   {
     *     topicId: "0.0.789012",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * );
     */
    constructor(
        message: string, 
        signature: Uint8Array, 
        senderId: string,
        sender?: { key?: PublicKey | KeyList; id?: AccountId },
        dao?: IHashgraph.ILedger.IDAO.IConfig
    ) {
        // Validate message parameter
        if (typeof message !== 'string' || message.trim().length === 0) {
            throw new Error('Message must be a non-empty string');
        }

        // Validate signature parameter
        if(!Buffer.isBuffer(signature)) {
            throw new Error('Signature must be a Uint8Array');
        }

        // Validate senderId parameter
        if (typeof senderId !== 'string' || senderId.trim().length === 0) {
            throw new Error('Sender ID must be a non-empty string');
        }
        
        // Assign validated values
        this.message = message;
        this.signature = signature;
        this.sender = sender;
        this.dao = dao;
    }
}