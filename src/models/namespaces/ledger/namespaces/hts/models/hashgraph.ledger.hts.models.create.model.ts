import { CustomFixedFee, CustomFractionalFee, CustomRoyaltyFee, TokenSupplyType, TokenType, PublicKey, KeyList, AccountId } from "@hashgraph/sdk"
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsString, IsNumber, IsOptional, IsArray, ValidateNested, Min, Max, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Hashgraph } from '../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HTS Token Creation Model
 * @class _Create
 * @implements {IHashgraph.ILedger.IHTS.ICreate}
 * @description Implements comprehensive token creation functionality for the
 * Hedera Token Service (HTS). This model manages the creation of both fungible
 * and non-fungible tokens with extensive configuration options.
 * 
 * Core Features:
 * - Token Metadata Management
 * - Supply Configuration
 * - Key Management
 * - Fee Structure Definition
 * - Compliance Settings
 * - Transaction Control
 * - DAO Integration
 * 
 * @category Hashgraph
 * @subcategory HTS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and validated token creation with proper
 * configuration management and error handling. It supports both fungible and
 * non-fungible tokens with customizable properties.
 * 
 * Key Components:
 * - Basic Properties: name, symbol, decimals
 * - Supply Management: initial/max supply, supply type
 * - Key Configuration: admin, kyc, freeze, wipe, supply, fee schedule
 * - Fee Structure: custom fees, royalties
 * - Compliance: KYC, freeze settings
 * - Transaction Control: max fees, consensus
 * 
 * @example
 * // Create a fungible token with comprehensive configuration
 * const token = new _Create({
 *   // Basic Properties
 *   name: "Example Token",
 *   symbol: "EXT",
 *   decimals: 8,
 *   
 *   // Supply Configuration
 *   initialSupply: "1000000",
 *   maxSupply: "10000000",
 *   supplyType: TokenSupplyType.Finite,
 *   
 *   // Treasury Configuration
 *   treasuryAccountId: "0.0.123456",
 *   
 *   // Key Management
 *   adminKey: true,
 *   kycKey: true,
 *   freezeKey: true,
 *   wipeKey: true,
 *   supplyKey: true,
 *   feeScheduleKey: true,
 *   
 *   // Fee Structure
 *   customFees: [{
 *     feeType: "royalty",
 *     numerator: 5,
 *     denominator: 100,
 *     fallbackFee: { hbarAmount: 1 },
 *     feeCollectorAccountId: "0.0.789012"
 *   }],
 *   
 *   // Compliance Settings
 *   freezeDefault: false,
 *   
 *   // Transaction Control
 *   maxTransactionFee: 5000000,
 *   validatorConsensusTimestamp: "1718800000000000",
 *   
 *   // Additional Settings
 *   memo: "Example token for decentralized application",
 *   tokenType: TokenType.FungibleCommon,
 *   
 *   // Optional DAO Integration
 *   dao: {
 *     topicId: "0.0.234567",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * });
 * 
 * // Create an NFT collection
 * const nftCollection = new _Create({
 *   name: "Example NFT Collection",
 *   symbol: "ENFT",
 *   tokenType: TokenType.NonFungibleUnique,
 *   supplyType: TokenSupplyType.Finite,
 *   maxSupply: "1000",
 *   treasuryAccountId: "0.0.123456",
 *   adminKey: true,
 *   supplyKey: true,
 *   freezeDefault: false,
 *   maxTransactionFee: 5000000,
 *   validatorConsensusTimestamp: "1718800000000000",
 *   memo: "Limited edition NFT collection"
 * });
 */
export class _Create implements IHashgraph.ILedger.IHTS.ICreate {
    /**
     * Sender Configuration
     * @type {Object}
     * @description Optional sender account configuration for the token creation
     * transaction.
     * 
     * Configuration Options:
     * - Public Key or Key List for transaction signing
     * - Account ID for transaction fee payment
     * 
     * Security Considerations:
     * - Key must have sufficient permissions
     * - Account must have sufficient balance
     * - Network access must be verified
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
     * Token Name
     * @type {string}
     * @description The human-readable name of the token.
     * 
     * Requirements:
     * - Must be non-empty string
     * - Should be descriptive and unique
     * - UTF-8 encoding supported
     * - Network size limits apply
     * 
     * Best Practices:
     * - Use clear, recognizable names
     * - Include version or variant info
     * - Consider searchability
     * - Follow naming conventions
     * 
     * @example
     * // Standard token name
     * name: "Example Token"
     * 
     * // Version-specific name
     * name: "Example Token V2"
     * 
     * // Collection name
     * name: "Example NFT Collection"
     */
    @ApiProperty({ 
        description: 'The name of the token',
        type: () => String,
        example: 'My Token'
    })
    @IsString()
    name: string;

    /**
     * Treasury Account
     * @type {string}
     * @description The account that will serve as the token's treasury,
     * receiving the initial supply and managing token operations.
     * 
     * Requirements:
     * - Must be valid account ID
     * - Account must exist
     * - Account must be active
     * - Proper permissions required
     * 
     * Responsibilities:
     * - Holds initial supply
     * - Manages token distribution
     * - Handles fee collection
     * - Controls token operations
     * 
     * @example
     * // Standard treasury account
     * treasuryAccountId: "0.0.123456"
     * 
     * // Multi-sig treasury account
     * treasuryAccountId: "0.0.789012"
     */
    @ApiProperty({ 
        description: 'The account ID that will act as the treasury for the token',
        required: false,
        type: () => String,
        example: '0.0.12345'
    })
    @IsOptional()
    @IsString()
    treasuryAccountId?: string;

    /**
     * Token Symbol
     * @type {string}
     * @description The trading symbol or ticker for the token.
     * 
     * Requirements:
     * - Must be non-empty string
     * - Should be unique
     * - Typically uppercase
     * - Network size limits apply
     * 
     * Best Practices:
     * - Use standard format (3-5 chars)
     * - Avoid common symbols
     * - Consider uniqueness
     * - Follow market conventions
     * 
     * @example
     * // Standard token symbol
     * symbol: "EXT"
     * 
     * // Version-specific symbol
     * symbol: "EXTv2"
     * 
     * // NFT collection symbol
     * symbol: "ENFT"
     */
    @ApiProperty({ 
        description: 'The symbol of the token',
        type: () => String,
        example: 'MTK'
    })
    @IsString()
    symbol: string;

    /**
     * Token Decimals
     * @type {number}
     * @description The number of decimal places the token can be divided into,
     * defining its divisibility.
     * 
     * Requirements:
     * - Must be between 0 and 18
     * - Applies to fungible tokens
     * - Immutable after creation
     * - Affects display format
     * 
     * Common Values:
     * - 0: Indivisible tokens
     * - 2: Cent-like division
     * - 6: Micro-unit division
     * - 8: Crypto-standard (BTC-like)
     * - 18: Ethereum-standard
     * 
     * @example
     * // Indivisible token
     * decimals: 0
     * 
     * // Standard crypto token
     * decimals: 8
     * 
     * // Ethereum-compatible token
     * decimals: 18
     */
    @ApiProperty({ 
        description: 'The number of decimal places a token is divisible by',
        type: () => Number,
        minimum: 0,
        maximum: 18,
        example: 8
    })
    @IsNumber()
    @Min(0)
    @Max(18)
    decimals: number;

    /**
     * Initial Supply
     * @type {number}
     * @description The initial amount of tokens to be created and assigned to
     * the treasury account.
     * 
     * Requirements:
     * - Must be non-negative
     * - Must not exceed maxSupply
     * - Proper decimal handling
     * - Treasury must be specified
     * 
     * Considerations:
     * - Token economics
     * - Distribution plan
     * - Market impact
     * - Treasury management
     * 
     * @example
     * // Standard initial supply
     * initialSupply: 1000000 // 1M tokens
     * 
     * // Zero initial supply
     * initialSupply: 0 // Mint later
     * 
     * // Large initial supply
     * initialSupply: 1000000000 // 1B tokens
     */
    @ApiProperty({ 
        description: 'The initial supply of tokens to be put in circulation',
        required: false,
        type: () => Number,
        minimum: 0,
        example: 1000000
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    initialSupply?: number;

    /**
     * Supply Type
     * @type {TokenSupplyType}
     * @description Defines whether the token has a finite or infinite maximum
     * supply.
     * 
     * Types Available:
     * - Finite: Fixed maximum supply
     * - Infinite: No supply limit
     * 
     * Considerations:
     * - Token economics
     * - Use case requirements
     * - Market dynamics
     * - Regulatory compliance
     * 
     * @example
     * // Finite supply token
     * supplyType: TokenSupplyType.Finite
     * 
     * // Infinite supply token
     * supplyType: TokenSupplyType.Infinite
     */
    @ApiProperty({ 
        description: 'The supply type of the token',
        type: () => TokenSupplyType,
        example: TokenSupplyType.Finite
    })
    supplyType: TokenSupplyType;

    /**
     * Maximum Supply
     * @type {number}
     * @description The maximum number of tokens that can ever exist for this
     * token.
     * 
     * Requirements:
     * - Must be non-negative
     * - Must be >= initialSupply
     * - Only for finite supply
     * - Immutable after creation
     * 
     * Considerations:
     * - Token economics
     * - Market cap targets
     * - Growth projections
     * - Regulatory limits
     * 
     * @example
     * // Standard max supply
     * maxSupply: 10000000 // 10M tokens
     * 
     * // Limited edition
     * maxSupply: 1000 // 1K tokens
     * 
     * // Large max supply
     * maxSupply: 1000000000 // 1B tokens
     */
    @ApiProperty({ 
        description: 'The maximum number of tokens that can be in circulation',
        required: false,
        type: () => Number,
        minimum: 0,
        example: 10000000
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    maxSupply?: number;

    /**
     * Maximum Transaction Fee
     * @type {number}
     * @description The maximum transaction fee (in tinybars) that the client is
     * willing to pay for the token creation transaction.
     * 
     * Requirements:
     * - Must be non-negative
     * - Must be sufficient for network
     * - Account must have balance
     * - Network limits apply
     * 
     * Considerations:
     * - Network conditions
     * - Priority level
     * - Cost optimization
     * - Operation complexity
     * 
     * @example
     * // Standard fee
     * maxTransactionFee: 5000000 // 0.05 HBAR
     * 
     * // Priority fee
     * maxTransactionFee: 10000000 // 0.1 HBAR
     * 
     * // Complex operation fee
     * maxTransactionFee: 20000000 // 0.2 HBAR
     */
    @ApiProperty({ 
        description: 'The maximum transaction fee the client is willing to pay',
        type: () => Number,
        minimum: 0,
        example: 1000000
    })
    @IsNumber()
    @Min(0)
    maxTransactionFee: number;

    /**
     * Token Type
     * @type {TokenType}
     * @description Specifies the type of token to be created.
     * 
     * Available Types:
     * - FungibleCommon: Standard fungible tokens
     * - NonFungibleUnique: Unique NFTs
     * - FungibleCommon: Common fungible tokens
     * 
     * Type Characteristics:
     * - Fungible: Interchangeable units
     * - Non-Fungible: Unique items
     * - Common: Standard features
     * - Unique: Individual properties
     * 
     * @example
     * // Fungible token
     * tokenType: TokenType.FungibleCommon
     * 
     * // NFT collection
     * tokenType: TokenType.NonFungibleUnique
     */
    @ApiProperty({ 
        description: 'The type of token',
        type: () => TokenType,
        example: TokenType.FungibleCommon
    })
    tokenType: TokenType;

    /**
     * Freeze Key Flag
     * @type {boolean}
     * @description Indicates whether to create a freeze key for the token,
     * enabling freeze/unfreeze operations.
     * 
     * Key Capabilities:
     * - Freeze accounts
     * - Unfreeze accounts
     * - Manage transfers
     * - Control compliance
     * 
     * Security Implications:
     * - Access control
     * - Compliance management
     * - Account restrictions
     * - Regulatory requirements
     * 
     * @example
     * // Enable freeze key
     * freezeKey: true
     * 
     * // Disable freeze key
     * freezeKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a freeze key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    freezeKey?: boolean;

    /**
     * Pause Key Flag
     * @type {boolean}
     * @description Indicates whether to create a pause key for the token,
     * enabling pause/unpause operations.
     * 
     * Key Capabilities:
     * - Pause all transfers
     * - Unpause transfers
     * - Emergency control
     * - System maintenance
     * 
     * Security Implications:
     * - System control
     * - Emergency response
     * - Market protection
     * - Upgrade management
     * 
     * @example
     * // Enable pause key
     * pauseKey: true
     * 
     * // Disable pause key
     * pauseKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a pause key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    pauseKey?: boolean;

    /**
     * Admin Key Flag
     * @type {boolean}
     * @description Indicates whether to create an admin key for the token,
     * enabling administrative operations.
     * 
     * Key Capabilities:
     * - Update token properties
     * - Change keys
     * - Manage settings
     * - Control features
     * 
     * Security Implications:
     * - Governance control
     * - Feature management
     * - Security updates
     * - Policy enforcement
     * 
     * @example
     * // Enable admin key
     * adminKey: true
     * 
     * // Disable admin key
     * adminKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include an admin key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    adminKey?: boolean;

    /**
     * KYC Key Flag
     * @type {boolean}
     * @description Indicates whether to create a KYC key for the token,
     * enabling Know Your Customer compliance operations.
     * 
     * Key Capabilities:
     * - Grant KYC status
     * - Revoke KYC status
     * - Manage compliance
     * - Control transfers
     * 
     * Compliance Implications:
     * - Regulatory compliance
     * - User verification
     * - Transfer control
     * - Reporting support
     * 
     * @example
     * // Enable KYC key
     * kycKey: true
     * 
     * // Disable KYC key
     * kycKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a KYC key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    kycKey?: boolean;

    /**
     * Wipe Key Flag
     * @type {boolean}
     * @description Indicates whether to create a wipe key for the token,
     * enabling token removal operations.
     * 
     * Key Capabilities:
     * - Wipe token balance
     * - Remove from account
     * - Compliance enforcement
     * - Emergency response
     * 
     * Security Implications:
     * - Balance control
     * - Compliance management
     * - Risk mitigation
     * - Account cleanup
     * 
     * @example
     * // Enable wipe key
     * wipeKey: true
     * 
     * // Disable wipe key
     * wipeKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a wipe key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    wipeKey?: boolean;

    /**
     * Supply Key Flag
     * @type {boolean}
     * @description Indicates whether to create a supply key for the token,
     * enabling supply management operations.
     * 
     * Key Capabilities:
     * - Mint new tokens
     * - Burn tokens
     * - Manage circulation
     * - Control supply
     * 
     * Economic Implications:
     * - Supply control
     * - Inflation management
     * - Market stability
     * - Growth control
     * 
     * @example
     * // Enable supply key
     * supplyKey: true
     * 
     * // Disable supply key
     * supplyKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a supply key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    supplyKey?: boolean;

    /**
     * Fee Schedule Key Flag
     * @type {boolean}
     * @description Indicates whether to create a fee schedule key for the token,
     * enabling fee structure management.
     * 
     * Key Capabilities:
     * - Update fee structure
     * - Modify rates
     * - Manage royalties
     * - Control economics
     * 
     * Economic Implications:
     * - Revenue model
     * - Market dynamics
     * - User incentives
     * - Protocol sustainability
     * 
     * @example
     * // Enable fee schedule key
     * feeScheduleKey: true
     * 
     * // Disable fee schedule key
     * feeScheduleKey: false
     */
    @ApiProperty({ 
        description: 'Whether to include a fee schedule key',
        required: false,
        type: () => Boolean,
        example: true
    })
    @IsOptional()
    @IsBoolean()
    feeScheduleKey?: boolean;

    /**
     * Custom Fee Configuration
     * @type {Array}
     * @description Defines custom fee structures for token operations including
     * fixed, fractional, and royalty fees.
     * 
     * Fee Types:
     * - Fixed: Set amount per transaction
     * - Fractional: Percentage of transaction
     * - Royalty: Creator compensation
     * 
     * Configuration Options:
     * - Fee amounts
     * - Collection accounts
     * - Thresholds
     * - Fallback settings
     * 
     * @example
     * // Royalty fee
     * customFees: [{
     *   feeType: "royalty",
     *   numerator: 5,
     *   denominator: 100,
     *   fallbackFee: { hbarAmount: 1 },
     *   feeCollectorAccountId: "0.0.123456"
     * }]
     * 
     * // Fixed fee
     * customFees: [{
     *   feeType: "fixed",
     *   amount: 10,
     *   tokenId: "0.0.123456"
     * }]
     * 
     * // Fractional fee
     * customFees: [{
     *   feeType: "fractional",
     *   numerator: 1,
     *   denominator: 100,
     *   minimumAmount: 1,
     *   maximumAmount: 100
     * }]
     */
    @ApiProperty({ 
        description: 'Custom fees to apply to the token',
        required: false,
        type: () => [CustomRoyaltyFee, CustomFractionalFee, CustomFixedFee],
        example: [
            {
                feeType: 'royalty',
                numerator: 5,
                denominator: 100,
                fallbackFee: { hbarAmount: 1 },
                feeCollectorAccountId: '0.0.12345'
            }
        ]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CustomRoyaltyFee, {
        discriminator: {
            property: 'feeType',
            subTypes: [
                { value: CustomRoyaltyFee, name: 'royalty' },
                { value: CustomFractionalFee, name: 'fractional' },
                { value: CustomFixedFee, name: 'fixed' },
            ],
        },
    })
    customFees?: CustomRoyaltyFee[] | CustomFractionalFee[] | CustomFixedFee[];

    /**
     * Default Freeze Status
     * @type {boolean}
     * @description Determines whether new accounts should be frozen by default
     * when they receive the token.
     * 
     * Status Impact:
     * - Transfer restrictions
     * - Account access
     * - Compliance control
     * - Distribution management
     * 
     * Use Cases:
     * - Compliance requirements
     * - Controlled distribution
     * - Security measures
     * - Market protection
     * 
     * @example
     * // Freeze by default
     * freezeDefault: true
     * 
     * // No default freeze
     * freezeDefault: false
     */
    @ApiProperty({ 
        description: 'Whether accounts should be frozen by default when they receive the token',
        type: () => Boolean,
        example: false
    })
    @IsBoolean()
    freezeDefault: boolean;

    /**
     * Validator Consensus Timestamp
     * @type {string}
     * @description The consensus timestamp for token creation validation.
     * 
     * Format Requirements:
     * - Proper timestamp format
     * - Network-compatible value
     * - Future-dated allowed
     * - Validation rules apply
     * 
     * Usage:
     * - Creation timing
     * - Validation control
     * - Network synchronization
     * - Operation ordering
     * 
     * @example
     * // Current timestamp
     * validatorConsensusTimestamp: "1718800000000000"
     * 
     * // Future timestamp
     * validatorConsensusTimestamp: "1718900000000000"
     */
    @ApiProperty({ 
        description: 'The validator consensus timestamp',
        type: () => String,
        example: '1718800000000000'
    })
    @IsString()
    validatorConsensusTimestamp: string;

    /**
     * Token Memo
     * @type {string}
     * @description Optional descriptive text or metadata about the token.
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
     * // Simple memo
     * memo: "Utility token for platform services"
     * 
     * // Detailed memo
     * memo: "Governance token v1.0 for DAO operations"
     * 
     * // NFT collection memo
     * memo: "Limited edition digital art collection"
     */
    @ApiProperty({ 
        description: 'The memo for the token',
        required: false,
        type: () => String,
        example: 'My Token'
    })
    @IsOptional()
    @IsString()
    memo?: string;

    /**
     * DAO Configuration
     * @type {Object}
     * @description Optional DAO integration settings for token creation.
     * 
     * Configuration Options:
     * - Topic ID for governance
     * - Consensus timestamp
     * - Validation rules
     * - Integration settings
     * 
     * Integration Features:
     * - Governance control
     * - Decision tracking
     * - Member participation
     * - Proposal management
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
        description: 'Optional DAO configuration for the token creation',
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
     * Token Creation Constructor
     * @constructor
     * @description Initializes a new token creation request with comprehensive
     * validation and configuration options.
     * 
     * Validation Process:
     * 1. Basic property validation
     * 2. Supply configuration check
     * 3. Key permission verification
     * 4. Fee structure validation
     * 5. Compliance setting check
     * 
     * Configuration Steps:
     * 1. Property initialization
     * 2. Type validation
     * 3. Constraint checking
     * 4. Security verification
     * 
     * @throws {Error} When required properties are missing
     * @throws {Error} When property validation fails
     * @throws {Error} When configuration is invalid
     * @throws {Error} When security checks fail
     * 
     * @example
     * // Initialize token creation
     * const token = new _Create({
     *   name: "Example Token",
     *   symbol: "EXT",
     *   decimals: 8,
     *   initialSupply: "1000000",
     *   maxSupply: "10000000",
     *   treasury: "0.0.123456",
     *   adminKey: true,
     *   kycKey: true,
     *   freezeKey: true,
     *   wipeKey: true,
     *   supplyKey: true,
     *   feeScheduleKey: true,
     *   customFees: [{
     *     feeType: "royalty",
     *     numerator: 5,
     *     denominator: 100,
     *     fallbackFee: { hbarAmount: 1 },
     *     feeCollectorAccountId: "0.0.789012"
     *   }],
     *   freezeDefault: false,
     *   maxTransactionFee: 5000000,
     *   validatorConsensusTimestamp: "1718800000000000",
     *   memo: "Example token for decentralized application",
     *   tokenType: TokenType.FungibleCommon,
     *   dao: {
     *     topicId: "0.0.234567",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * });
     */
    constructor(data: IHashgraph.ILedger.IHTS.ICreate) {
        Object.assign(this, data);

        // Validate required fields
        if (!this.name || !this.symbol || this.decimals === undefined || this.supplyType === undefined || 
            this.maxTransactionFee === undefined || this.tokenType === undefined || this.freezeDefault === undefined) {
            throw new Error('Missing required fields');
        }

        // Validate numeric constraints
        if (this.initialSupply !== undefined && this.initialSupply < 0) {
            throw new Error('Initial supply must be non-negative');
        }

        if (this.maxSupply !== undefined && this.maxSupply < 0) {
            throw new Error('Max supply must be non-negative');
        }

        if (this.maxTransactionFee < 0) {
            throw new Error('Max transaction fee must be non-negative');
        }

        if (this.decimals < 0 || this.decimals > 18) {
            throw new Error('Decimals must be between 0 and 18');
        }

        // Validate field types
        if (this.validatorConsensusTimestamp && typeof this.validatorConsensusTimestamp !== 'string') {
            throw new Error('Validator consensus timestamp must be a string')
        }

        if (this.memo && typeof this.memo !== 'string') {
            throw new Error('Memo must be a string')
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
    }
}