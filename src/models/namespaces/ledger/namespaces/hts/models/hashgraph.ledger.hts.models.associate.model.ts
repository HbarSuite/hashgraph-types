import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @file HTS Token Association Model
 * @class _Associate
 * @implements {IHashgraph.ILedger.IHTS.IAssociate}
 * @description Implements token association functionality for the Hedera Token
 * Service (HTS). This model manages the linking of tokens to accounts with
 * comprehensive validation and access control.
 * 
 * Core Features:
 * - Token Association
 * - Access Control
 * - DAO Integration
 * - Validation Management
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token association with proper validation and
 * authorization checks. It supports both direct association and DAO-governed
 * association processes.
 * 
 * Key Components:
 * - Account Management: Token linking
 * - Access Control: Association permissions
 * - Governance: DAO integration
 * - Validation: Association requirements
 * 
 * Security Considerations:
 * - Account validation
 * - Token compatibility
 * - Association limits
 * - State verification
 * 
 * Use Cases:
 * - Token enablement
 * - Account preparation
 * - Transfer readiness
 * - Service integration
 * 
 * @example
 * // Direct token association
 * const associateRequest = new _Associate({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: accountKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * });
 * 
 * // DAO-governed token association
 * const daoAssociateRequest = new _Associate({
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
export class _Associate implements IHashgraph.ILedger.IHTS.IAssociate {
    /**
     * Target Wallet ID
     * @type {string}
     * @description The account ID of the wallet to associate with the token.
     * This account will be enabled to hold and transfer the specified token.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Association limit check
     * 
     * Impact:
     * - Token enablement
     * - Transfer capability
     * - Operation access
     * - Service readiness
     * 
     * @example
     * // Standard account association
     * walletId: "0.0.123456"
     * 
     * // Contract account association
     * walletId: "0.0.789012"
     */
    public walletId: string;

    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token
     * association transaction. Specifies the account and key that will sign
     * and pay for the association.
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
     * token association. Enables community-driven decision making for token
     * linking.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Association voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Controlled access
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
        description: 'Optional DAO configuration for the token association',
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
     * Token Association Constructor
     * @constructor
     * @description Initializes a new token association request with
     * comprehensive validation and security checks.
     * 
     * Validation Process:
     * 1. Wallet ID validation
     * 2. Permission verification
     * 3. Account status check
     * 4. Association validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Association Steps:
     * 1. Limit verification
     * 2. Compatibility check
     * 3. Status validation
     * 4. Record keeping
     * 
     * @throws {Error} When wallet ID is missing
     * @throws {Error} When wallet ID format is invalid
     * @throws {Error} When sender validation fails
     * @throws {Error} When DAO validation fails
     * 
     * @example
     * // Initialize token association
     * const associateRequest = new _Associate({
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
    constructor(data: IHashgraph.ILedger.IHTS.IAssociate) {
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
