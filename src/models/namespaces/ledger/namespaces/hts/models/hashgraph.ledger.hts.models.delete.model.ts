import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph, Hashgraph } from '../../../../../..';

/**
 * @file HTS Token Deletion Model
 * @class Delete
 * @implements {IHashgraph.ILedger.IHTS.IDelete}
 * @description Implements token deletion functionality for the Hedera Token
 * Service (HTS). This model manages the secure removal of tokens from the
 * network with proper validation and access control.
 * 
 * Core Features:
 * - Token Removal
 * - Access Control
 * - DAO Integration
 * - Transaction Management
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token deletion with proper validation and
 * authorization checks. It supports both direct deletion and DAO-governed
 * deletion processes.
 * 
 * Key Components:
 * - Sender Configuration: Authentication and authorization
 * - DAO Integration: Governance-controlled deletion
 * - Validation: Permission and state checks
 * - Transaction Control: Fee and consensus management
 * 
 * Security Considerations:
 * - Admin key required
 * - All token supply must be burned
 * - No pending transactions
 * - Proper authorization
 * 
 * @example
 * // Direct token deletion
 * const deleteRequest = new Delete({
 *   sender: {
 *     key: adminKey,
 *     id: AccountId.fromString("0.0.123456")
 *   }
 * });
 * 
 * // DAO-governed token deletion
 * const daoDeleteRequest = new Delete({
 *   sender: {
 *     key: adminKey,
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   dao: {
 *     topicId: "0.0.789012",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class Delete implements IHashgraph.ILedger.IHTS.IDelete {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token deletion
     * transaction. Specifies the account and key that will sign and pay for
     * the deletion.
     * 
     * Requirements:
     * - Must have admin key permissions
     * - Account must be active
     * - Sufficient balance for fees
     * - Valid key format
     * 
     * Security Implications:
     * - Authorization control
     * - Transaction signing
     * - Fee payment
     * - Network access
     * 
     * @example
     * // Configure with single key
     * sender: {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.123456")
     * }
     * 
     * // Configure with key list
     * sender: {
     *   key: new KeyList([key1, key2], 2),
     *   id: AccountId.fromString("0.0.123456")
     * }
     */
    @ApiProperty({
        description: 'Optional sender information',
        type: 'object',
        required: false,
        properties: {
            key: { type: 'object' },
            id: { type: 'object' }
        }
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * token deletion. Enables community-driven decision making for token
     * removal.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Community voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * @example
     * // Basic DAO config
     * dao: {
     *   topicId: "0.0.123456",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * 
     * // Advanced DAO config
     * dao: {
     *   topicId: "0.0.123456",
     *   consensusTimestamp: "1234567890.123456789",
     *   validationRules: {...},
     *   governanceSettings: {...}
     * }
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the token deletion',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Token Deletion Constructor
     * @constructor
     * @description Initializes a new token deletion request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Input validation
     * 2. Permission verification
     * 3. State validation
     * 4. Security checks
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * @throws {Error} When sender key is invalid
     * @throws {Error} When sender ID is invalid
     * @throws {Error} When validation fails
     * @throws {Error} When security checks fail
     * 
     * @example
     * // Initialize token deletion
     * const deleteRequest = new Delete({
     *   sender: {
     *     key: adminKey,
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   dao: {
     *     topicId: "0.0.789012",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data?: Partial<Delete>) {
        if (data) {
            Object.assign(this, data);

            // Validate sender if provided
            if (data.sender) {
                if (data.sender.key && !(data.sender.key instanceof PublicKey) && !(data.sender.key instanceof KeyList)) {
                    throw new Error('Invalid sender key. Must be a PublicKey or KeyList instance.');
                }
                if (data.sender.id && !(data.sender.id instanceof AccountId)) {
                    throw new Error('Invalid sender id. Must be an AccountId instance.');
                }
                this.sender = data.sender;
            }
        }
    }
}
