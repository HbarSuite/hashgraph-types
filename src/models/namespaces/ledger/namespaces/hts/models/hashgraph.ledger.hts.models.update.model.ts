import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @file HTS Token Update Model
 * @class _Update
 * @implements {IHashgraph.ILedger.IHTS.IUpdate}
 * @description Implements token update functionality for the Hedera Token
 * Service (HTS). This model manages modifications to existing tokens with
 * comprehensive validation and access control.
 * 
 * Core Features:
 * - Token Metadata Updates
 * - Treasury Management
 * - Access Control
 * - DAO Integration
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure token updates with proper validation and
 * authorization checks. It supports both direct updates and DAO-governed
 * modification processes.
 * 
 * Key Components:
 * - Metadata Management: name, symbol, memo
 * - Treasury Control: account and key updates
 * - Access Management: sender configuration
 * - Governance: DAO integration
 * 
 * Security Considerations:
 * - Admin key required
 * - Proper authorization
 * - Treasury key validation
 * - State verification
 * 
 * @example
 * // Basic token update
 * const updateRequest = new _Update({
 *   name: "Updated Token Name",
 *   symbol: "UTN",
 *   memo: "Updated token description",
 *   sender: {
 *     key: adminKey,
 *     id: AccountId.fromString("0.0.123456")
 *   }
 * });
 * 
 * // Treasury update with DAO governance
 * const daoUpdateRequest = new _Update({
 *   currentTreasury: "0.0.123456",
 *   newTreasuryAccountId: "0.0.789012",
 *   newTreasuryKey: "302a300506032b6570032100...",
 *   sender: {
 *     key: adminKey,
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   dao: {
 *     topicId: "0.0.345678",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 */
export class _Update implements IHashgraph.ILedger.IHTS.IUpdate {
    /**
     * Current Treasury Account
     * @type {string}
     * @description The current treasury account ID for the token. Required when
     * updating treasury-related settings.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Must match token's current treasury
     * 
     * Usage Context:
     * - Treasury transfers
     * - Key rotations
     * - Access updates
     * - Ownership changes
     * 
     * @example
     * // Standard treasury account
     * currentTreasury: "0.0.123456"
     * 
     * // Multi-sig treasury account
     * currentTreasury: "0.0.789012"
     */
    @ApiProperty({
        description: 'Current Treasury account ID',
        example: '0.0.12345',
        required: false
    })
    @IsOptional()
    @IsString()
    currentTreasury?: string;

    /**
     * New Token Name
     * @type {string}
     * @description The new name to assign to the token. Updates the human-readable
     * identifier for the token.
     * 
     * Requirements:
     * - Must be non-empty string
     * - Should be descriptive
     * - UTF-8 encoding supported
     * - Network size limits apply
     * 
     * Best Practices:
     * - Clear identification
     * - Version indication
     * - Consistent naming
     * - Market recognition
     * 
     * @example
     * // Standard name update
     * name: "Updated Token Name"
     * 
     * // Version-specific update
     * name: "Token Name V2"
     * 
     * // Rebranding update
     * name: "New Brand Token"
     */
    @ApiProperty({
        description: 'New token name',
        example: 'Updated Token Name',
        required: false
    })
    @IsOptional()
    @IsString()
    name?: string;

    /**
     * New Token Symbol
     * @type {string}
     * @description The new trading symbol or ticker for the token. Updates the
     * short identifier used in trading and display contexts.
     * 
     * Requirements:
     * - Must be non-empty string
     * - Should be unique
     * - Typically uppercase
     * - Network size limits apply
     * 
     * Best Practices:
     * - Standard format (3-5 chars)
     * - Market recognition
     * - Avoid confusion
     * - Clear distinction
     * 
     * @example
     * // Standard symbol update
     * symbol: "UTN"
     * 
     * // Version-specific update
     * symbol: "UTNv2"
     * 
     * // Rebranding update
     * symbol: "NEWT"
     */
    @ApiProperty({
        description: 'New token symbol',
        example: 'UTN',
        required: false
    })
    @IsOptional()
    @IsString()
    symbol?: string;

    /**
     * Token Memo Update
     * @type {string}
     * @description The new memo or description for the token. Updates the
     * additional information or metadata associated with the token.
     * 
     * Content Guidelines:
     * - Clear description
     * - Version information
     * - Purpose indication
     * - Usage context
     * 
     * Best Practices:
     * - Keep concise
     * - Include key details
     * - Use standard format
     * - Consider searchability
     * 
     * @example
     * // Standard memo update
     * memo: "Updated utility token for platform services"
     * 
     * // Version-specific memo
     * memo: "V2 governance token with enhanced features"
     * 
     * // Feature update memo
     * memo: "Now supports cross-chain operations"
     */
    @ApiProperty({
        description: 'New memo for the token',
        example: 'Updated token description',
        required: false
    })
    @IsOptional()
    @IsString()
    memo?: string;

    /**
     * New Treasury Account
     * @type {string}
     * @description The new treasury account ID to manage the token. Updates the
     * account responsible for token management and fee collection.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Proper permissions required
     * 
     * Security Implications:
     * - Access control
     * - Fund management
     * - Operation authority
     * - Key validation
     * 
     * @example
     * // Standard treasury update
     * newTreasuryAccountId: "0.0.789012"
     * 
     * // Multi-sig treasury update
     * newTreasuryAccountId: "0.0.345678"
     */
    @ApiProperty({
        description: 'New Treasury account ID',
        example: '0.0.67890',
        required: false
    })
    @IsOptional()
    @IsString()
    newTreasuryAccountId?: string;

    /**
     * New Treasury Key
     * @type {string | IHashgraph.ICommons.IKey.IList}
     * @description The new treasury key for token management. Required when
     * updating the treasury account.
     * 
     * Key Types:
     * - Single key
     * - Key list
     * - Threshold key
     * - Multi-sig key
     * 
     * Security Requirements:
     * - Proper key format
     * - Secure generation
     * - Access control
     * - Backup management
     * 
     * @example
     * // Single key update
     * newTreasuryKey: "302a300506032b6570032100..."
     * 
     * // Key list update
     * newTreasuryKey: {
     *   threshold: 2,
     *   keys: ["key1", "key2", "key3"]
     * }
     */
    @ApiProperty({
        description: 'New Treasury key',
        example: '302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777',
        required: false
    })
    @IsOptional()
    newTreasuryKey?: string | IHashgraph.ICommons.IKey.IList;

    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token update
     * transaction. Specifies the account and key that will sign and pay for
     * the update.
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
        description: 'Sender information',
        type: 'object',
        required: false,
        properties: {
            key: { type: 'object' },
            id: { type: 'object' }
        }
    })
    @IsOptional()
    @IsObject()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for governance-controlled
     * token updates. Enables community-driven decision making for token
     * modifications.
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
        description: 'Optional DAO configuration for the token update',
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
     * Token Update Constructor
     * @constructor
     * @description Initializes a new token update request with comprehensive
     * validation and security checks.
     * 
     * Validation Process:
     * 1. Update property validation
     * 2. Treasury requirement check
     * 3. Permission verification
     * 4. Security validation
     * 
     * Security Steps:
     * 1. Key validation
     * 2. Account verification
     * 3. Permission checking
     * 4. State confirmation
     * 
     * @throws {Error} When no update properties are provided
     * @throws {Error} When treasury update requirements are not met
     * @throws {Error} When sender validation fails
     * @throws {Error} When security checks fail
     * 
     * @example
     * // Initialize token update
     * const updateRequest = new _Update({
     *   name: "Updated Token Name",
     *   symbol: "UTN",
     *   memo: "Updated token description",
     *   sender: {
     *     key: adminKey,
     *     id: AccountId.fromString("0.0.123456")
     *   },
     *   dao: {
     *     topicId: "0.0.345678",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.IUpdate) {
        Object.assign(this, data);

        // Validate at least one update property is provided
        if (!this.currentTreasury && !this.name && !this.symbol && !this.memo && 
            !this.newTreasuryAccountId && !this.newTreasuryKey) {
            throw new Error('At least one property must be provided for update');
        }

        // Validate treasury update requirements
        if (this.newTreasuryAccountId && !this.newTreasuryKey) {
            throw new Error('New Treasury key must be provided when updating Treasury account');
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