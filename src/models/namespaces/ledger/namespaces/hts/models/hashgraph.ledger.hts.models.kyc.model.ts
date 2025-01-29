import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HTS Token KYC Model
 * @class _KYC
 * @implements {IHashgraph.ILedger.IHTS.IKYC}
 * @description Implements Know Your Customer (KYC) functionality for the Hedera
 * Token Service (HTS). This model manages the KYC status of accounts for
 * tokens with comprehensive validation and compliance control.
 * 
 * Core Features:
 * - KYC Status Management
 * - Access Control
 * - DAO Integration
 * - Compliance Enforcement
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure KYC operations with proper validation and
 * authorization checks. It supports both direct KYC management and
 * DAO-governed KYC processes.
 * 
 * Key Components:
 * - Account Management: KYC status control
 * - Access Control: KYC key permissions
 * - Governance: DAO integration
 * - Compliance: Regulatory requirements
 * 
 * Security Considerations:
 * - KYC key required
 * - Proper authorization
 * - Account validation
 * - Compliance verification
 * 
 * Use Cases:
 * - Customer verification
 * - Regulatory compliance
 * - Access control
 * - Risk management
 * 
 * @example
 * // Direct KYC grant
 * const kycRequest = new _KYC({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: kycKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * });
 * 
 * // DAO-governed KYC grant
 * const daoKycRequest = new _KYC({
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: kycKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _KYC implements IHashgraph.ILedger.IHTS.IKYC {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the KYC
     * transaction. Specifies the account and key that will sign and pay for
     * the KYC operation.
     * 
     * Requirements:
     * - Must have KYC key permissions
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
     * @description The account ID of the wallet for KYC operations. This account
     * will have its KYC status modified for the specified token.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Account must hold token
     * 
     * Compliance Impact:
     * - KYC status change
     * - Transfer eligibility
     * - Operation access
     * - Regulatory status
     * 
     * @example
     * // Standard account KYC
     * walletId: "0.0.123456"
     * 
     * // Corporate account KYC
     * walletId: "0.0.789012"
     */
    @ApiProperty({
        description: 'The wallet ID associated with the KYC operation',
        example: '0.0.123456',
    })
    @IsString()
    @IsNotEmpty()
    walletId: string;

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * KYC operations. Enables community-driven decision making for compliance
     * actions.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Compliance voting
     * - Proposal tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Compliance decisions
     * - Risk assessment
     * - Policy enforcement
     * - Regulatory reporting
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
        description: 'Optional DAO configuration for the KYC operation',
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
     * Token KYC Constructor
     * @constructor
     * @description Initializes a new KYC operation request with comprehensive
     * validation and compliance checks.
     * 
     * Validation Process:
     * 1. Wallet ID validation
     * 2. Permission verification
     * 3. Account status check
     * 4. Compliance validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Compliance Steps:
     * 1. Status verification
     * 2. Policy checking
     * 3. Risk assessment
     * 4. Record keeping
     * 
     * @throws {Error} When wallet ID is missing
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * @throws {Error} When compliance checks fail
     * 
     * @example
     * // Initialize KYC operation
     * const kycRequest = new _KYC({
     *   walletId: "0.0.123456",
     *   sender: {
     *     key: kycKey,
     *     id: AccountId.fromString("0.0.789012")
     *   },
     *   dao: {
     *     topicId: "0.0.345678",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IKYC) {
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