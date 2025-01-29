import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Transfer } from '../../transfer/hashgraph.restful.transactions.transfer.namespace';
import { _Staking } from '../../../../staking/hashgraph.restful.staking.namespace';

/**
 * @file hashgraph.restful.transactions.models.entity.model.ts
 * @class _Entity
 * @description Comprehensive model representing a Hedera transaction entity.
 * Implements IHashgraph.IRestful.ITransactions.ITransaction.IEntity to provide
 * a complete representation of a transaction's state and properties, including:
 * - Transaction identification and hashing
 * - Fee structures and processing
 * - Temporal information and validity
 * - Transfer operations (crypto, tokens, NFTs)
 * - Staking and rewards
 * - Node assignment and scheduling
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ITransaction.IEntity}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a comprehensive transaction entity
 * const entity = new _Entity({
 *   transaction_id: "0.0.123456@1234567890.123456789",
 *   bytes: "0a1022220a1008921b22a01",
 *   charged_tx_fee: 500000,
 *   consensus_timestamp: "1234567890.123456789",
 *   entity_id: "0.0.123456",
 *   max_fee: "1000000",
 *   memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U=",
 *   name: "CRYPTOTRANSFER",
 *   node: "0.0.3",
 *   result: "SUCCESS",
 *   scheduled: false,
 *   valid_duration_seconds: "120"
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.ITransactions.ITransaction.IEntity {
    /**
     * Raw transaction bytes
     * @type {string}
     * @optional
     * @remarks
     * - Hexadecimal format
     * - Contains complete transaction data
     * - Used for transaction verification
     * - Can be used for transaction reconstruction
     */
    @ApiProperty({
        description: 'Raw transaction data in hexadecimal format for verification and reconstruction',
        required: false,
        type: () => String,
        example: '0a1022220a1008921b22a01'
    })
    @IsString()
    @IsOptional()
    bytes?: string;

    /**
     * Actual transaction fee charged
     * @type {number}
     * @optional
     * @remarks
     * - Denominated in tinybars
     * - Deducted from payer account
     * - Cannot exceed max_fee
     * - Includes node and network fees
     */
    @ApiProperty({
        description: 'Actual transaction fee charged in tinybars, including node and network fees',
        required: false,
        type: () => Number,
        example: 500000
    })
    @IsNumber()
    @IsOptional()
    charged_tx_fee?: number;

    /**
     * Transaction consensus timestamp
     * @type {string}
     * @optional
     * @remarks
     * - Network-agreed timestamp
     * - Format: seconds.nanoseconds
     * - Immutable after consensus
     * - Used for transaction ordering
     */
    @ApiProperty({
        description: 'Network consensus timestamp in seconds.nanoseconds format',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsString()
    @IsOptional()
    consensus_timestamp?: string;

    /**
     * Associated entity identifier
     * @type {string}
     * @optional
     * @remarks
     * - Format: 0.0.{number}
     * - References related entity
     * - Used for entity-specific operations
     * - Links transaction to entity context
     */
    @ApiProperty({
        description: 'Entity identifier in format 0.0.{number} that this transaction affects',
        required: false,
        type: () => String,
        example: '0.0.123456'
    })
    @IsString()
    @IsOptional()
    entity_id?: string;

    /**
     * Maximum allowable transaction fee
     * @type {string}
     * @optional
     * @remarks
     * - Denominated in tinybars
     * - Set by transaction creator
     * - Caps total transaction cost
     * - Protects against excessive fees
     */
    @ApiProperty({
        description: 'Maximum allowable transaction fee in tinybars set by the creator',
        required: false,
        type: () => String,
        example: '1000000'
    })
    @IsString()
    @IsOptional()
    max_fee?: string;

    /**
     * Base64 encoded transaction memo
     * @type {string}
     * @optional
     * @remarks
     * - Contains optional metadata
     * - Base64 encoded format
     * - Limited to 100 bytes decoded
     * - User-defined content
     */
    @ApiProperty({
        description: 'Optional transaction memo in Base64 format, limited to 100 bytes when decoded',
        required: false,
        type: () => String,
        example: 'VHJhbnNmZXIgdG8gQWxpY2U='
    })
    @IsString()
    @IsOptional()
    memo_base64?: string;

    /**
     * Transaction type identifier
     * @type {IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum}
     * @optional
     * @remarks
     * - Defines transaction purpose
     * - Determines processing rules
     * - Affects fee calculation
     * - Validates operation context
     */
    @ApiProperty({
        description: 'Transaction type identifier determining processing rules and context',
        required: false,
        enum: IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum,
        example: IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum.Cryptotransfer
    })
    @IsOptional()
    name?: IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum;

    /**
     * Associated NFT transfers
     * @type {Array<_Transfer.Nft>}
     * @optional
     * @remarks
     * - Lists NFT ownership changes
     * - Includes serial numbers
     * - Tracks sender and receiver
     * - Supports batch transfers
     */
    @ApiProperty({
        description: 'List of NFT transfers including serial numbers and ownership changes',
        required: false,
        type: () => [_Transfer.Nft],
        example: [{
            token_id: '0.0.123456',
            serial_number: 1,
            sender_account_id: '0.0.123456',
            receiver_account_id: '0.0.789012'
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Transfer.Nft)
    nft_transfers?: Array<_Transfer.Nft>;

    /**
     * Processing node identifier
     * @type {string}
     * @optional
     * @remarks
     * - Format: 0.0.{number}
     * - Identifies submitting node
     * - Used for fee distribution
     * - Part of consensus tracking
     */
    @ApiProperty({
        description: 'Node account identifier that submitted and processed the transaction',
        required: false,
        type: () => String,
        example: '0.0.3'
    })
    @IsString()
    @IsOptional()
    node?: string;

    /**
     * Transaction nonce value
     * @type {number}
     * @optional
     * @remarks
     * - Ensures uniqueness
     * - Prevents replay attacks
     * - Increments per transaction
     * - Used in transaction ID
     */
    @ApiProperty({
        description: 'Unique nonce value preventing transaction replay attacks',
        required: false,
        type: () => Number,
        example: 1
    })
    @IsNumber()
    @IsOptional()
    nonce?: number;

    /**
     * Parent transaction timestamp
     * @type {string}
     * @optional
     * @remarks
     * - Links child transactions
     * - Format: seconds.nanoseconds
     * - Used in transaction chains
     * - Tracks transaction hierarchy
     */
    @ApiProperty({
        description: 'Consensus timestamp of parent transaction for child transactions',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsString()
    @IsOptional()
    parent_consensus_timestamp?: string;

    /**
     * Transaction execution result
     * @type {string}
     * @optional
     * @remarks
     * - Indicates final status
     * - Provides error details
     * - Used for confirmation
     * - Determines success/failure
     */
    @ApiProperty({
        description: 'Final execution result status of the transaction',
        required: false,
        type: () => String,
        example: 'SUCCESS'
    })
    @IsString()
    @IsOptional()
    result?: string;

    /**
     * Scheduled transaction flag
     * @type {boolean}
     * @optional
     * @remarks
     * - True for scheduled transactions
     * - Affects execution timing
     * - Requires schedule ID
     * - Used in multi-sig scenarios
     */
    @ApiProperty({
        description: 'Flag indicating if this is a scheduled transaction',
        required: false,
        type: () => Boolean,
        example: false
    })
    @IsBoolean()
    @IsOptional()
    scheduled?: boolean;

    /**
     * Staking reward transfers
     * @type {Array<_Staking.Reward.Transfer>}
     * @optional
     * @remarks
     * - Lists staking rewards
     * - Includes recipient accounts
     * - Tracks reward amounts
     * - Part of staking system
     */
    @ApiProperty({
        description: 'List of staking reward transfers with recipients and amounts',
        required: false,
        type: () => [_Staking.Reward.Transfer],
        example: [{
            account_id: '0.0.123456',
            amount: '100000000'
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Staking.Reward.Transfer)
    staking_reward_transfers?: Array<_Staking.Reward.Transfer>;

    /**
     * Token transfer operations
     * @type {Array<_Transfer.Token>}
     * @optional
     * @remarks
     * - Lists token movements
     * - Includes token IDs
     * - Tracks transfer amounts
     * - Supports multiple tokens
     */
    @ApiProperty({
        description: 'List of token transfers with token IDs and amounts',
        required: false,
        type: () => [_Transfer.Token],
        example: [{
            token_id: '0.0.123456',
            account: '0.0.789012',
            amount: '1000'
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Transfer.Token)
    token_transfers?: Array<_Transfer.Token>;

    /**
     * Transaction hash value
     * @type {string}
     * @optional
     * @remarks
     * - Unique transaction identifier
     * - Used for verification
     * - Cryptographically secure
     * - Immutable after creation
     */
    @ApiProperty({
        description: 'Unique cryptographic hash of the transaction for verification',
        required: false,
        type: () => String,
        example: '0x1234567890abcdef'
    })
    @IsString()
    @IsOptional()
    transaction_hash?: string;

    /**
     * Unique transaction identifier
     * @type {string}
     * @optional
     * @remarks
     * - Format: accountId@timestamp
     * - Globally unique
     * - Used for tracking
     * - References transaction
     */
    @ApiProperty({
        description: 'Unique transaction identifier in format accountId@timestamp',
        required: false,
        type: () => String,
        example: '0.0.123456@1234567890.123456789'
    })
    @IsString()
    @IsOptional()
    transaction_id?: string;

    /**
     * Cryptocurrency transfers
     * @type {Array<_Transfer.Entity>}
     * @optional
     * @remarks
     * - Lists HBAR transfers
     * - Includes accounts
     * - Tracks amounts
     * - Supports multiple transfers
     */
    @ApiProperty({
        description: 'List of cryptocurrency (HBAR) transfers between accounts',
        required: false,
        type: () => [_Transfer.Entity],
        example: [{
            account: '0.0.123456',
            amount: '1000000000'
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Transfer.Entity)
    transfers?: Array<_Transfer.Entity>;

    /**
     * Transaction validity duration
     * @type {string}
     * @optional
     * @remarks
     * - Duration in seconds
     * - Defines validity window
     * - Starts from valid_start
     * - Used for expiration
     */
    @ApiProperty({
        description: 'Duration in seconds for which the transaction remains valid',
        required: false,
        type: () => String,
        example: '120'
    })
    @IsString()
    @IsOptional()
    valid_duration_seconds?: string;

    /**
     * Transaction validity start
     * @type {string}
     * @optional
     * @remarks
     * - Format: seconds.nanoseconds
     * - Defines start time
     * - Used with duration
     * - Part of validity window
     */
    @ApiProperty({
        description: 'Timestamp when the transaction becomes valid in seconds.nanoseconds format',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsString()
    @IsOptional()
    valid_start_timestamp?: string;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransaction.IEntity>} data - Transaction data
     * @remarks
     * - Validates all properties
     * - Transforms nested objects
     * - Ensures data integrity
     * - Initializes transfer arrays
     * 
     * @example
     * ```typescript
     * // Create transaction with transfers
     * const transaction = new _Entity({
     *   transaction_id: "0.0.123456@1234567890.123456789",
     *   transfers: [{
     *     account: "0.0.123456",
     *     amount: "1000000000"
     *   }],
     *   token_transfers: [{
     *     token_id: "0.0.789012",
     *     account: "0.0.123456",
     *     amount: "1000"
     *   }]
     * });
     * ```
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransaction.IEntity>) {
        Object.assign(this, data);

        // Add validations inside constructor
        if (this.charged_tx_fee !== undefined && this.charged_tx_fee < 0) {
            throw new Error('charged_tx_fee must be a non-negative number');
        }

        if (this.consensus_timestamp && !/^\d+\.\d+$/.test(this.consensus_timestamp)) {
            throw new Error('Invalid consensus_timestamp format. Expected format: seconds.nanoseconds');
        }

        if (this.entity_id && !/^\d+\.\d+\.\d+$/.test(this.entity_id)) {
            throw new Error('Invalid entity_id format. Expected format: shard.realm.num');
        }

        // Add more validations as needed for other properties
    }
}