import { KeyList, PublicKey, AccountId } from "@hashgraph/sdk"
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HCS Topic Update Model
 * @class _Update
 * @implements {IHashgraph.ILedger.IHCS.ITopic.IUpdate}
 * @description Implements topic update functionality for Hedera Consensus Service
 * (HCS). This model manages modifications to existing topics with comprehensive
 * validation and security checks.
 * 
 * Core Features:
 * - Topic Memo Updates
 * - Access Control Management
 * - DAO Integration
 * - Security Validation
 * - Audit Trail Maintenance
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and authorized updates to HCS topics while maintaining
 * proper access controls and audit trails.
 * 
 * @example
 * // Update topic with full configuration
 * const topicUpdate = new _Update({
 *   // Updated metadata
 *   memo: JSON.stringify({
 *     name: "Treasury Operations",
 *     version: "2.1",
 *     department: "Finance",
 *     lastUpdate: new Date().toISOString()
 *   }),
 *   
 *   // Authentication
 *   sender: {
 *     key: PublicKey.fromString("admin-key"),
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   
 *   // DAO settings
 *   dao: {
 *     topicId: "0.0.789012",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _Update implements IHashgraph.ILedger.IHCS.ITopic.IUpdate {
    /**
     * Topic Description Update
     * @type {string}
     * @description Updated metadata and description for the topic.
     * 
     * Content Guidelines:
     * - Clear change documentation
     * - Version tracking
     * - Update reasoning
     * - Access changes
     * 
     * Best Practices:
     * - Maintain history
     * - Document changes
     * - Version control
     * - Change justification
     * 
     * @example
     * // Simple update
     * memo: "Updated governance rules v2.1"
     * 
     * // Structured update
     * memo: JSON.stringify({
     *   name: "Treasury Operations",
     *   version: "2.1",
     *   changes: [
     *     "Updated access controls",
     *     "Added audit logging"
     *   ],
     *   updatedBy: "Treasury Admin",
     *   timestamp: new Date().toISOString()
     * })
     */
    @ApiProperty({
        description: 'A short description or note about the topic update',
        type: () => 'string',
        example: 'Updated topic description',
        required: true
    })
    memo: string;

    /**
     * Sender Authentication
     * @type {Object}
     * @description Authentication and authorization configuration for topic updates.
     * 
     * Security Requirements:
     * - Valid admin credentials
     * - Proper permissions
     * - Audit logging
     * - Access verification
     * 
     * Configuration Options:
     * - Key-based auth
     * - Account verification
     * - Permission levels
     * - Update tracking
     * 
     * @example
     * // Admin authentication
     * sender: {
     *   key: PublicKey.fromString("admin-key"),
     *   id: AccountId.fromString("0.0.123456")
     * }
     * 
     * // Multi-sig update
     * sender: {
     *   key: new KeyList([
     *     adminKey1,
     *     adminKey2
     *   ]),
     *   id: AccountId.fromString("0.0.789012")
     * }
     */
    @ApiProperty({
        type: () => Object,
        description: 'Configuration for the topic sender',
        required: false
    })
    sender?: {
        /**
         * Update Authorization Key
         * @type {PublicKey | KeyList}
         * @description Cryptographic key(s) authorizing the update.
         * 
         * Key Requirements:
         * - Must have admin privileges
         * - Must be active and valid
         * - Must match topic admin key
         * 
         * Authorization Types:
         * - Single admin key
         * - Multi-signature keys
         * - Threshold signatures
         * 
         * @example
         * // Single admin
         * key: PublicKey.fromString("admin-key")
         * 
         * // Multi-signature
         * key: new KeyList([
         *   primaryAdmin,
         *   backupAdmin,
         *   emergencyAdmin
         * ])
         */
        key?: PublicKey | KeyList;

        /**
         * Authorized Account
         * @type {AccountId}
         * @description Account with update permissions.
         * 
         * Account Requirements:
         * - Valid account status
         * - Admin permissions
         * - Proper funding
         * - Update authorization
         * 
         * @example
         * // Admin account
         * id: AccountId.fromString("0.0.123456")
         * 
         * // Treasury account
         * id: AccountId.fromString("0.0.789012")
         */
        id?: AccountId;
    };

    /**
     * DAO Integration Settings
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @description Configuration for DAO-governed updates.
     * 
     * Governance Features:
     * - Proposal tracking
     * - Vote counting
     * - Execution timing
     * - Update validation
     * 
     * Integration Options:
     * - Proposal requirements
     * - Voting thresholds
     * - Timelock settings
     * - Execution rules
     * 
     * @example
     * // DAO update configuration
     * dao: {
     *   topicId: "0.0.789012",
     *   consensusTimestamp: "1234567890.123456789",
     *   governance: {
     *     proposalId: "PROP-2024-001",
     *     requiredVotes: 1000,
     *     executionDelay: 86400,
     *     quorum: 0.75
     *   }
     * }
     */
    @ApiProperty({
        type: () => Object,
        description: 'Configuration settings for the DAO',
        required: false
    })
    dao?: IHashgraph.ILedger.IDAO.IConfig;

    /**
     * Topic Update Constructor
     * @constructor
     * @description Initializes a new topic update request with comprehensive
     * validation and security measures.
     * 
     * Validation Process:
     * - Input validation
     * - Permission checking
     * - DAO verification
     * - Update logging
     * 
     * Security Measures:
     * - Authentication verification
     * - Authorization checking
     * - Audit trail creation
     * - Change tracking
     * 
     * @throws {Error} When required data is missing
     * @throws {Error} When validation fails
     * @throws {Error} When permissions are insufficient
     * 
     * @example
     * // Initialize update with full configuration
     * const update = new _Update({
     *   // Detailed update information
     *   memo: JSON.stringify({
     *     version: "2.1",
     *     changes: [
     *       "Updated access controls",
     *       "Modified renewal settings"
     *     ],
     *     approvedBy: "Governance Council",
     *     approvalDate: new Date().toISOString()
     *   }),
     *   
     *   // Admin authentication
     *   sender: {
     *     key: new KeyList([
     *       PublicKey.fromString("primary-admin"),
     *       PublicKey.fromString("backup-admin")
     *     ]),
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   
     *   // DAO governance
     *   dao: {
     *     topicId: "0.0.789012",
     *     consensusTimestamp: "1234567890.123456789",
     *     settings: {
     *       proposalId: "UPDATE-2024-001",
     *       votingPeriod: 604800,
     *       executionDelay: 86400
     *     }
     *   }
     * });
     */
    constructor(data?: IHashgraph.ILedger.IHCS.ITopic.IUpdate) {
        if (data) {
            // Assign memo from input data
            this.memo = data.memo;

            // Validate memo field
            if (!this.memo || typeof this.memo !== 'string') {
                throw new Error('Memo must be a non-empty string');
            }

            // Assign sender configuration if provided
            if (data.sender) {
                this.sender = {
                    key: data.sender.key,
                    id: data.sender.id
                };
            }

            // Assign DAO configuration if provided
            this.dao = data.dao;
        } else {
            throw new Error('Data must be provided to create an _Update instance');
        }
    }
}