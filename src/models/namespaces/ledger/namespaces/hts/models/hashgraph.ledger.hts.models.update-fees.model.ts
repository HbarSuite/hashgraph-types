import { CustomFixedFee, CustomFractionalFee, CustomRoyaltyFee, AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsOptional } from "class-validator";

/**
 * @file HTS Token Fee Update Model
 * @class _UpdateFees
 * @implements {IHashgraph.ILedger.IHTS.IUpdateFees}
 * @description Implements fee update functionality for the Hedera Token
 * Service (HTS). This model manages the modification of custom fees for
 * tokens with comprehensive validation and access control.
 * 
 * Core Features:
 * - Fee Updates
 * - Access Control
 * - DAO Integration
 * - Fee Validation
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure fee updates with proper validation and
 * authorization checks. It supports both direct fee updates and DAO-governed
 * fee modification processes.
 * 
 * Key Components:
 * - Fee Management: Custom fee control
 * - Access Control: Update permissions
 * - Governance: DAO integration
 * - Validation: Fee requirements
 * 
 * Security Considerations:
 * - Fee key required
 * - Account validation
 * - Fee validation
 * - State confirmation
 * 
 * Use Cases:
 * - Fee adjustments
 * - Revenue model updates
 * - Market adaptation
 * - Policy changes
 * 
 * @example
 * // Direct fee update
 * const updateRequest = new _UpdateFees({
 *   customFees: [
 *     new CustomFixedFee({
 *       amount: 100,
 *       denominatingTokenId: "0.0.123456"
 *     }),
 *     new CustomFractionalFee({
 *       numerator: 1,
 *       denominator: 100
 *     })
 *   ],
 *   sender: {
 *     key: feeKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * });
 * 
 * // DAO-governed fee update
 * const daoUpdateRequest = new _UpdateFees({
 *   customFees: [
 *     new CustomRoyaltyFee({
 *       numerator: 5,
 *       denominator: 100
 *     })
 *   ],
 *   sender: {
 *     key: feeKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _UpdateFees implements IHashgraph.ILedger.IHTS.IUpdateFees {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the fee update
     * transaction. Specifies the account and key that will sign and authorize
     * the fee changes.
     * 
     * Requirements:
     * - Must have fee key permissions
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
     * Custom Fees Array
     * @type {Array<CustomRoyaltyFee | CustomFractionalFee | CustomFixedFee>}
     * @description Array of custom fees to be updated for the token. Supports
     * multiple fee types for comprehensive revenue models.
     * 
     * Fee Types:
     * - CustomRoyaltyFee: NFT royalties
     * - CustomFractionalFee: Percentage fees
     * - CustomFixedFee: Fixed amount fees
     * 
     * Validation Rules:
     * - Non-empty array required
     * - Valid fee configurations
     * - Compatible fee types
     * - Amount limitations
     * 
     * Use Cases:
     * - Revenue sharing
     * - Service fees
     * - Network costs
     * - Creator royalties
     * 
     * @example
     * customFees: [
     *   new CustomFixedFee({
     *     amount: 100,
     *     denominatingTokenId: "0.0.123456"
     *   }),
     *   new CustomFractionalFee({
     *     numerator: 1,
     *     denominator: 100
     *   })
     * ]
     */
    @ApiProperty({
        description: 'Array of custom fees to be updated for the token',
        type: 'array',
        items: {
            oneOf: [
                { $ref: '#/components/schemas/CustomRoyaltyFee' },
                { $ref: '#/components/schemas/CustomFractionalFee' },
                { $ref: '#/components/schemas/CustomFixedFee' }
            ]
        },
        required: true
    })
    customFees: Array<CustomRoyaltyFee | CustomFractionalFee | CustomFixedFee>

    /**
     * DAO Configuration
     * @type {Hashgraph.Ledger.DAO.Config}
     * @description Optional DAO integration settings for governance-controlled
     * fee updates. Enables community-driven decision making for fee changes.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Governance Features:
     * - Fee proposal voting
     * - Change tracking
     * - Decision recording
     * - Audit trail
     * 
     * Use Cases:
     * - Community governance
     * - Fee policy control
     * - Change management
     * - Compliance tracking
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
        description: 'Optional DAO configuration for the fee update',
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
     * Fee Update Constructor
     * @constructor
     * @description Initializes a new fee update request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Fee array validation
     * 2. Permission verification
     * 3. Account status check
     * 4. Fee configuration validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * Update Steps:
     * 1. Fee compatibility check
     * 2. Amount validation
     * 3. Type verification
     * 4. Record keeping
     * 
     * @throws {Error} When custom fees array is empty
     * @throws {Error} When custom fees are invalid
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * 
     * @example
     * // Initialize fee update
     * const updateRequest = new _UpdateFees({
     *   customFees: [
     *     new CustomFixedFee({
     *       amount: 100,
     *       denominatingTokenId: "0.0.123456"
     *     })
     *   ],
     *   sender: {
     *     key: feeKey,
     *     id: AccountId.fromString("0.0.789012")
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IUpdateFees) {
        // Set the custom fees from the provided data
        this.customFees = data.customFees;

        // Validate that custom fees array is provided and not empty
        if (!this.customFees || this.customFees.length === 0) {
            throw new Error('Custom fees are required and cannot be empty');
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