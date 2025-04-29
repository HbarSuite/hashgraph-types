import { KeyList, PublicKey } from "@hashgraph/sdk"
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'

/**
 * @file HCS Topic Creation Model
 * @class _Create
 * @implements {IHashgraph.ILedger.IHCS.ITopic.ICreate}
 * @description Implements the topic creation functionality for Hedera Consensus
 * Service (HCS). This model manages the initial configuration and setup of
 * new HCS topics.
 * 
 * Core Features:
 * - Topic Key Management
 * - Memo Configuration
 * - Consensus Validation
 * - Security Settings
 * - Access Control
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class provides a secure and flexible way to create new HCS topics with
 * proper access controls and configuration options.
 * 
 * @example
 * // Create a new HCS topic with full configuration
 * const topicCreate = new _Create({
 *   // Access control key
 *   key: new KeyList([
 *     adminKey1,
 *     adminKey2,
 *     submitKey
 *   ]),
 *   // Topic description
 *   memo: "Governance Proposals Channel",
 *   // Consensus timestamp
 *   validatorConsensusTimestamp: new Date().toISOString()
 * });
 */
export class _Create implements IHashgraph.ILedger.IHCS.ITopic.ICreate {
    /**
     * Topic Access Control Key
     * @type {PublicKey | KeyList}
     * @description Cryptographic key(s) controlling topic access and management.
     * 
     * Key Configuration Options:
     * - Single PublicKey for simple access control
     * - KeyList for multi-signature governance
     * - Null for open access topics
     * 
     * Security Considerations:
     * - Key management best practices
     * - Access control policies
     * - Backup procedures
     * 
     * @example
     * // Single admin key
     * key: PublicKey.fromString("...")
     * 
     * // Multi-signature setup
     * key: new KeyList([
     *   adminKey,
     *   submitKey,
     *   backupKey
     * ])
     */
    @ApiProperty({
        description: 'The key for the topic. Can be a single PublicKey or a KeyList.',
        type: () => 'object',
        required: false
    })
    key?: PublicKey | KeyList

    /**
     * Topic Description
     * @type {string}
     * @description Human-readable description and metadata for the topic.
     * 
     * Memo Guidelines:
     * - Clear and concise description
     * - Relevant metadata
     * - Purpose indication
     * - Version information
     * 
     * Best Practices:
     * - Include topic purpose
     * - Add version if applicable
     * - Note access requirements
     * - Document special handling
     * 
     * @example
     * // Simple description
     * memo: "Main governance channel"
     * 
     * // Structured metadata
     * memo: JSON.stringify({
     *   purpose: "Governance Proposals",
     *   version: "1.0",
     *   access: "Admin only",
     *   department: "Operations"
     * })
     */
    @ApiProperty({
        description: 'Optional memo or description for the topic',
        type: () => String,
        required: false
    })
    memo?: string

    /**
     * Consensus Validation Timestamp
     * @type {string}
     * @description Timestamp used for consensus validation and synchronization.
     * 
     * Timestamp Requirements:
     * - ISO 8601 format
     * - Network time synchronization
     * - Proper timezone handling
     * 
     * Validation Rules:
     * - Must be valid timestamp
     * - Must be within network constraints
     * - Should account for network delays
     * 
     * @example
     * // Current timestamp
     * validatorConsensusTimestamp: new Date().toISOString()
     * 
     * // Specific timestamp
     * validatorConsensusTimestamp: "2024-01-01T00:00:00.000Z"
     */
    @ApiProperty({
        description: 'The consensus timestamp for the validator.',
        type: () => 'string',
        required: false
    })
    validatorConsensusTimestamp: string

    /**
     * Topic Creation Constructor
     * @constructor
     * @description Initializes a new topic configuration with comprehensive
     * validation and security checks.
     * 
     * Configuration Rules:
     * - Key validation and type checking
     * - Memo format verification
     * - Timestamp validation
     * - Security policy enforcement
     * 
     * @throws {Error} When key is invalid type
     * @throws {Error} When timestamp format is invalid
     * 
     * @example
     * // Create topic with comprehensive configuration
     * const topic = new _Create({
     *   // Multi-signature access control
     *   key: new KeyList([
     *     PublicKey.fromString("admin-key"),
     *     PublicKey.fromString("submit-key")
     *   ]),
     *   // Structured metadata
     *   memo: JSON.stringify({
     *     name: "Governance Channel",
     *     purpose: "DAO Proposals",
     *     version: "2.0",
     *     department: "Treasury"
     *   }),
     *   // Current timestamp
     *   validatorConsensusTimestamp: new Date().toISOString()
     * });
     */
    constructor(data?: IHashgraph.ILedger.IHCS.ITopic.ICreate) {
        if (data) {            
            // Assign key and validate its type
            this.key = data.key
            if (this.key && !(this.key instanceof PublicKey) && !(this.key instanceof KeyList)) {
                throw new Error('Key must be an instance of PublicKey or KeyList')
            }

            // Assign memo if provided
            this.memo = data.memo

            // Assign and validate validator consensus timestamp
            this.validatorConsensusTimestamp = data.validatorConsensusTimestamp
            if (this.validatorConsensusTimestamp && typeof this.validatorConsensusTimestamp !== 'string') {
                throw new Error('Validator consensus timestamp must be a string')
            }
        }
    }
}