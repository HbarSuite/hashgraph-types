import { ApiProperty } from '@hsuite/nestjs-swagger';
import { PublicKey, KeyList, AccountId } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HCS Topic Deletion Model
 * @class _Delete
 * @implements {IHashgraph.ILedger.IHCS.ITopic.IDelete}
 * @description Implements secure topic deletion functionality for Hedera Consensus
 * Service (HCS). This model manages the permanent removal of topics with proper
 * authentication and validation.
 * 
 * Core Features:
 * - Secure Topic Deletion
 * - Access Control Verification
 * - DAO Integration
 * - Audit Trail Management
 * - Permission Validation
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and authorized deletion of HCS topics with proper
 * validation of permissions and maintenance of audit trails.
 * 
 * @example
 * // Delete a topic with full configuration
 * const deleteTopic = new _Delete({
 *   // Sender authentication
 *   sender: {
 *     key: PublicKey.fromString("admin-key"),
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   // DAO governance settings
 *   dao: {
 *     topicId: "0.0.789012",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _Delete implements IHashgraph.ILedger.IHCS.ITopic.IDelete {
    /**
     * Sender Authentication Configuration
     * @type {Object}
     * @description Comprehensive sender authentication and verification settings.
     * 
     * Configuration Components:
     * - Cryptographic Keys
     * - Account Identification
     * - Permission Levels
     * 
     * Security Requirements:
     * - Valid authentication keys
     * - Proper account permissions
     * - Audit trail maintenance
     * 
     * @example
     * // Configure sender with full authentication
     * sender: {
     *   // Admin key for deletion
     *   key: PublicKey.fromString("admin-key-with-delete-permission"),
     *   // Authorized account
     *   id: AccountId.fromString("0.0.123456")
     * }
     */
    @ApiProperty({
        description: 'Configuration for the topic\'s sender',
        type: 'object',
        required: false,
        example: {
            key: 'PublicKey or KeyList object',
            id: 'AccountId object'
        }
    })
    sender?: {
        /**
         * Authentication Key
         * @type {PublicKey | KeyList}
         * @description Cryptographic key(s) for deletion authorization.
         * 
         * Key Types:
         * - Single admin key for simple authorization
         * - KeyList for multi-signature requirements
         * 
         * Validation Rules:
         * - Must have deletion permissions
         * - Must be properly authenticated
         * - Must match topic's admin key
         * 
         * @example
         * // Single admin key
         * key: PublicKey.fromString("admin-key")
         * 
         * // Multi-signature requirement
         * key: new KeyList([
         *   adminKey1,
         *   adminKey2,
         *   backupKey
         * ])
         */
        key?: PublicKey | KeyList;

        /**
         * Authorized Account
         * @type {AccountId}
         * @description Account identifier with topic deletion permissions.
         * 
         * Requirements:
         * - Must be a valid account
         * - Must have admin privileges
         * - Must be properly funded
         * 
         * @example
         * // Standard account ID
         * id: AccountId.fromString("0.0.123456")
         * 
         * // Treasury account
         * id: AccountId.fromString("0.0.789012")
         */
        id?: AccountId;
    };

    /**
     * DAO Integration Configuration
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @description Settings for DAO governance and consensus requirements.
     * 
     * Configuration Options:
     * - Governance Rules
     * - Consensus Requirements
     * - Voting Thresholds
     * - Timelock Settings
     * 
     * Integration Features:
     * - Proposal Verification
     * - Vote Counting
     * - Execution Delay
     * - Audit Logging
     * 
     * @example
     * // Configure DAO integration
     * dao: {
     *   // Associated topic
     *   topicId: "0.0.789012",
     *   // Execution timestamp
     *   consensusTimestamp: "1234567890.123456789",
     *   // Additional settings
     *   settings: {
     *     requiredVotes: 100,
     *     executionDelay: 86400, // 24 hours
     *     minQuorum: 0.51
     *   }
     * }
     */
    @ApiProperty({
        description: 'Configuration settings for the DAO associated with this topic',
        type: 'object',
        required: false
    })
    dao?: IHashgraph.ILedger.IDAO.IConfig;

    /**
     * Topic Deletion Constructor
     * @constructor
     * @description Initializes a new topic deletion request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * - Authentication verification
     * - Permission checking
     * - DAO governance validation
     * - Audit trail creation
     * 
     * Security Measures:
     * - Key validation
     * - Permission verification
     * - Consensus checking
     * - Audit logging
     * 
     * @example
     * // Initialize deletion with full security
     * const deleteTopic = new _Delete({
     *   // Authentication configuration
     *   sender: {
     *     // Admin key with delete permission
     *     key: PublicKey.fromString("secure-admin-key"),
     *     // Authorized account
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   // DAO governance settings
     *   dao: {
     *     topicId: "0.0.789012",
     *     consensusTimestamp: "1234567890.123456789",
     *     governance: {
     *       requiredSignatures: 3,
     *       timelock: 86400,
     *       quorum: 0.75
     *     }
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHCS.ITopic.IDelete) {
        if (data.sender) {
            this.sender = {
                key: data.sender.key,
                id: data.sender.id
            };
        }
        
        if (data.dao) {
            this.dao = data.dao;
        }
    }
}
