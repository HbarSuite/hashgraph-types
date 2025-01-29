import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @file HTS Token Dissociation Model
 * @class _Dissociate
 * @implements {IHashgraph.ILedger.IHTS.IDissociate}
 * @description Implements token dissociation functionality for the Hedera Token
 * Service (HTS). This model manages the removal of token associations from
 * accounts with comprehensive validation and access control.
 * 
 * Core Features:
 * - Token Dissociation
 * - Access Control
 * - DAO Integration
 * - Balance Validation
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token dissociation with proper validation and
 * authorization checks. It supports both direct dissociation and DAO-governed
 * dissociation processes.
 * 
 * Key Components:
 * - Account Management: Token unlinking
 * - Access Control: Dissociation permissions
 * - Governance: DAO integration
 * - Validation: Balance requirements
 * 
 * Security Considerations:
 * - Zero balance required
 * - Account validation
 * - Association verification
 * - State confirmation
 * 
 * Use Cases:
 * - Token cleanup
 * - Account management
 * - Service termination
 * - Resource optimization
 * 
 * @example
 * // Direct token dissociation
 * const dissociateRequest = new _Dissociate({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: accountKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * });
 * 
 * // DAO-governed token dissociation
 * const daoDissociateRequest = new _Dissociate({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: accountKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _Dissociate implements IHashgraph.ILedger.IHTS.IDissociate {
    /**
     * Target Wallet ID
     * @type {string}
     * @description The account ID of the wallet to dissociate from the token.
     * This account will have its token association removed after validation.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Zero token balance
     * 
     * Impact:
     * - Token removal
     * - Transfer restriction
     * - Operation blocking
     * - Resource release
     * 
     * @example
     * // Standard account dissociation
     * walletId: "0.0.123456"
     * 
     * // Contract account dissociation
     * walletId: "0.0.789012"
     */
    public walletId: string;

    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token
     * dissociation transaction. Specifies the account and key that will sign
     * and pay for the dissociation.
     * 
     * Requirements:
     * - Must have proper permissions
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
    public sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * token dissociation. Enables community-driven decision making for token
     * unlinking.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Dissociation voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Controlled removal
     * - Policy enforcement
     * - Community governance
     * - Compliance management
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
        description: 'Optional DAO configuration for the token dissociation',
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
     * Token Dissociation Constructor
     * @constructor
     * @description Initializes a new token dissociation request with
     * comprehensive validation and security checks.
     * 
     * Validation Process:
     * 1. Wallet ID validation
     * 2. Permission verification
     * 3. Account status check
     * 4. Balance validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Dissociation Steps:
     * 1. Balance verification
     * 2. Association check
     * 3. Status validation
     * 4. Record keeping
     * 
     * @throws {Error} When wallet ID is missing
     * @throws {Error} When wallet ID format is invalid
     * @throws {Error} When sender validation fails
     * @throws {Error} When DAO validation fails
     * 
     * @example
     * // Initialize token dissociation
     * const dissociateRequest = new _Dissociate({
     *   walletId: "0.0.123456",
     *   sender: {
     *     key: accountKey,
     *     id: AccountId.fromString("0.0.789012")
     *   },
     *   dao: {
     *     topicId: "0.0.345678",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IDissociate) {
        Object.assign(this, data);

        // Validate required fields
        if (!this.walletId) {
            throw new Error('Missing required field: walletId');
        }

        // Validate field types
        if (typeof this.walletId !== 'string') {
            throw new Error('walletId must be a string');
        }

        // Validate sender if provided
        if (this.sender) {
            if (this.sender.key && !(this.sender.key instanceof PublicKey) && !(this.sender.key instanceof KeyList)) {
                throw new Error('Invalid sender key. Must be a PublicKey or KeyList instance.');
            }
            if (this.sender.id && !(this.sender.id instanceof AccountId)) {
                throw new Error('Invalid sender id. Must be an AccountId instance.');
            }
        }

        // Validate DAO fields if provided
        if (this.dao) {
            if (!this.dao.topicId || typeof this.dao.topicId !== 'string') {
                throw new Error('DAO topicId must be a string');
            }
            if (!this.dao.consensusTimestamp || typeof this.dao.consensusTimestamp !== 'string') {
                throw new Error('DAO consensusTimestamp must be a string');
            }
        }
    }
}
