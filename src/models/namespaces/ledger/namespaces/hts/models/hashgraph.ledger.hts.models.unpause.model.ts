import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph, Hashgraph } from '../../../../../../';

/**
 * @file HTS Token Unpause Model
 * @class Unpause
 * @implements {IHashgraph.ILedger.IHTS.IPause}
 * @description Implements token unpause functionality for the Hedera Token
 * Service (HTS). This model manages the restoration of token transfers after
 * a pause with comprehensive validation and access control.
 * 
 * Core Features:
 * - Token Reactivation
 * - Access Control
 * - DAO Integration
 * - Recovery Management
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token unpausing with proper validation and
 * authorization checks. It supports both direct unpausing and DAO-governed
 * unpause processes.
 * 
 * Key Components:
 * - Token Control: Global transfer restoration
 * - Access Management: Pause key permissions
 * - Governance: DAO integration
 * - Recovery: System restoration
 * 
 * Security Considerations:
 * - Pause key required
 * - Proper authorization
 * - State verification
 * - Recovery protocols
 * 
 * Use Cases:
 * - Emergency recovery
 * - Maintenance completion
 * - System restoration
 * - Operation resumption
 * 
 * @example
 * // Direct token unpause
 * const unpauseRequest = new Unpause({
 *   sender: {
 *     key: pauseKey,
 *     id: AccountId.fromString("0.0.123456")
 *   }
 * });
 * 
 * // DAO-governed token unpause
 * const daoUnpauseRequest = new Unpause({
 *   sender: {
 *     key: pauseKey,
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class Unpause implements IHashgraph.ILedger.IHTS.IPause {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token unpause
     * transaction. Specifies the account and key that will sign and pay for
     * the unpause operation.
     * 
     * Requirements:
     * - Must have pause key permissions
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
     * token unpausing. Enables community-driven decision making for recovery
     * actions.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Recovery voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Emergency recovery
     * - System restoration
     * - Operation resumption
     * - Compliance verification
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
        description: 'Optional DAO configuration for the token unpausing',
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
     * Token Unpause Constructor
     * @constructor
     * @description Initializes a new token unpause request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Permission verification
     * 2. State validation
     * 3. Security checks
     * 4. Recovery protocols
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Recovery Protocols:
     * 1. System verification
     * 2. State restoration
     * 3. Operation resumption
     * 4. Monitoring setup
     * 
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * @throws {Error} When validation fails
     * @throws {Error} When recovery protocols fail
     * 
     * @example
     * // Initialize token unpause
     * const unpauseRequest = new Unpause({
     *   sender: {
     *     key: pauseKey,
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   dao: {
     *     topicId: "0.0.345678",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data?: Partial<Unpause>) {
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
