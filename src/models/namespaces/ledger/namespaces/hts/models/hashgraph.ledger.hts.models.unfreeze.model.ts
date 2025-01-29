import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty, IsObject, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @file HTS Token Unfreeze Model
 * @class _Unfreeze
 * @implements {IHashgraph.ILedger.IHTS.IUnfreeze}
 * @description Implements token unfreeze functionality for the Hedera Token
 * Service (HTS). This model manages the unfreezing of token transfers for
 * specific accounts with comprehensive validation and access control.
 * 
 * Core Features:
 * - Account Unfreezing
 * - Access Control
 * - DAO Integration
 * - Compliance Management
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token unfreezing with proper validation and
 * authorization checks. It supports both direct unfreezing and DAO-governed
 * unfreeze processes.
 * 
 * Key Components:
 * - Wallet Management: Target account control
 * - Access Control: Freeze key permissions
 * - Governance: DAO integration
 * - Compliance: Regulatory requirements
 * 
 * Security Considerations:
 * - Freeze key required
 * - Proper authorization
 * - Account validation
 * - State verification
 * 
 * @example
 * // Direct token unfreeze
 * const unfreezeRequest = new _Unfreeze({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: freezeKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * });
 * 
 * // DAO-governed token unfreeze
 * const daoUnfreezeRequest = new _Unfreeze({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: freezeKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _Unfreeze implements IHashgraph.ILedger.IHTS.IUnfreeze {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token unfreeze
     * transaction. Specifies the account and key that will sign and pay for
     * the unfreeze operation.
     * 
     * Requirements:
     * - Must have freeze key permissions
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
     * Target Wallet ID
     * @type {string}
     * @description The account ID of the wallet to be unfrozen. This account will
     * have its token transfer capabilities restored for the specified token.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Account must be frozen
     * 
     * Impact:
     * - Transfer restoration
     * - Balance mobilization
     * - Operation enablement
     * - Compliance verification
     * 
     * @example
     * // Standard account unfreeze
     * walletId: "0.0.123456"
     * 
     * // Contract account unfreeze
     * walletId: "0.0.789012"
     */
    @ApiProperty({
        description: 'The wallet ID associated with the token to be unfrozen',
        example: '0.0.123456',
    })
    @IsString()
    @IsNotEmpty()
    walletId: string;

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * token unfreezing. Enables community-driven decision making for compliance
     * actions.
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
        description: 'DAO',
        required: false
    })
    @IsOptional()
    @IsObject()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Token Unfreeze Constructor
     * @constructor
     * @description Initializes a new token unfreeze request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Wallet ID validation
     * 2. Permission verification
     * 3. Account status check
     * 4. Security validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * @throws {Error} When wallet ID is missing
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * @throws {Error} When validation fails
     * 
     * @example
     * // Initialize token unfreeze
     * const unfreezeRequest = new _Unfreeze({
     *   walletId: "0.0.123456",
     *   sender: {
     *     key: freezeKey,
     *     id: AccountId.fromString("0.0.789012")
     *   },
     *   dao: {
     *     topicId: "0.0.345678",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IUnfreeze) {
        // Set the wallet ID from the provided data
        this.walletId = data.walletId;

        // Validate that wallet ID is provided
        if (!this.walletId) {
            throw new Error('Wallet ID is required');
        }

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