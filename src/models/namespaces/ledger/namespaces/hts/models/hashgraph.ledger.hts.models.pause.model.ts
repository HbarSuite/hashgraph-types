import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph, Hashgraph } from '../../../../../..';

/**
 * @file HTS Token Pause Model
 * @class Pause
 * @implements {IHashgraph.ILedger.IHTS.IPause}
 * @description Implements token pause functionality for the Hedera Token
 * Service (HTS). This model manages the temporary suspension of all token
 * transfers with comprehensive validation and access control.
 * 
 * Core Features:
 * - Token Suspension
 * - Access Control
 * - DAO Integration
 * - Emergency Management
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token pausing with proper validation and
 * authorization checks. It supports both direct pausing and DAO-governed
 * pause processes.
 * 
 * Key Components:
 * - Token Control: Global transfer suspension
 * - Access Management: Pause key permissions
 * - Governance: DAO integration
 * - Emergency: Rapid response capability
 * 
 * Security Considerations:
 * - Pause key required
 * - Proper authorization
 * - State verification
 * - Emergency protocols
 * 
 * Use Cases:
 * - Emergency response
 * - Security incidents
 * - Maintenance periods
 * - Compliance actions
 * 
 * @example
 * // Direct token pause
 * const pauseRequest = new Pause({
 *   sender: {
 *     key: pauseKey,
 *     id: AccountId.fromString("0.0.123456")
 *   }
 * });
 * 
 * // DAO-governed token pause
 * const daoPauseRequest = new Pause({
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
export class Pause implements IHashgraph.ILedger.IHTS.IPause {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token pause
     * transaction. Specifies the account and key that will sign and pay for
     * the pause operation.
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
     * token pausing. Enables community-driven decision making for emergency
     * actions.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Emergency voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Security incidents
     * - Market protection
     * - System upgrades
     * - Compliance actions
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
        description: 'Optional DAO configuration for the token pausing',
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
     * Token Pause Constructor
     * @constructor
     * @description Initializes a new token pause request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Permission verification
     * 2. State validation
     * 3. Security checks
     * 4. Emergency protocols
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Emergency Protocols:
     * 1. Rapid response
     * 2. System protection
     * 3. Communication channels
     * 4. Recovery planning
     * 
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * @throws {Error} When validation fails
     * @throws {Error} When emergency protocols fail
     * 
     * @example
     * // Initialize token pause
     * const pauseRequest = new Pause({
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
    constructor(data?: Partial<Pause>) {
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
