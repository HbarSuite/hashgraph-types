import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, IsISO8601, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Commons } from '../../../../commons/hashgraph.commons.namespace';
/**
 * @file hashgraph.restful.accounts.models.info.model.ts
 * @class _Info
 * @description Comprehensive model for managing and retrieving detailed Hashgraph account information.
 * Implements the IHashgraph.IRestful.IAccounts.IInfo interface to provide a complete representation
 * of an account's state and properties within the Hedera network, including:
 * - Account identification (ID, alias, EVM address)
 * - Balance and token holdings
 * - Cryptographic keys and security settings
 * - Staking configuration and rewards
 * - Account lifecycle management (creation, expiry, auto-renewal)
 * - Token association settings
 * - Transaction requirements
 * 
 * @implements {IHashgraph.IRestful.IAccounts.IInfo}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new account info instance with comprehensive configuration
 * const accountInfo = new _Info({
 *   account: "0.0.123456",
 *   balance: {
 *     balance: "1000000000", // in tinybars
 *     tokens: [{
 *       token_id: "0.0.789012",
 *       balance: "1000"
 *     }]
 *   },
 *   key: {
 *     key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 *   },
 *   decline_reward: false,
 *   staked_account_id: "0.0.789012",
 *   stake_period_start: "2023-01-01T00:00:00.000Z",
 *   auto_renew_period: 7776000, // 90 days in seconds
 *   max_automatic_token_associations: 0,
 *   receiver_sig_required: false,
 *   memo: "Main treasury account"
 * });
 * ```
 */
export class _Info implements IHashgraph.IRestful.IAccounts.IInfo {
    /**
     * Unique identifier for the Hashgraph account in the format 0.0.{number}
     * @type {string}
     * @optional
     * @remarks
     * - Follows the standard Hedera account ID format
     * - Must be a valid shard.realm.number format
     * - Example: "0.0.123456"
     */
    @ApiProperty({
        name: 'account',
        description: 'Unique identifier for the Hashgraph account in the format 0.0.{number}',
        type: String,
        required: false,
        example: '0.0.123456'
    })
    @IsOptional()
    @IsString()
    account?: string;

    /**
     * Alternative identifier or alias for the account
     * @type {string}
     * @optional
     * @remarks
     * - Can be used as a human-readable identifier
     * - Must be unique across the network
     * - Supports custom naming conventions
     */
    @ApiProperty({
        name: 'alias',
        description: 'Alternative identifier or alias for the account',
        type: String,
        required: false,
        example: 'my-account-alias'
    })
    @IsOptional()
    @IsString()
    alias?: string;

    /**
     * Duration in seconds for automatic account renewal
     * @type {number}
     * @optional
     * @remarks
     * - Specified in seconds
     * - Typical value is 7776000 (90 days)
     * - Account will auto-renew if sufficient balance
     */
    @ApiProperty({
        name: 'auto_renew_period',
        description: 'Duration in seconds for automatic account renewal',
        type: Number,
        required: false,
        example: 7776000
    })
    @IsOptional()
    @IsNumber()
    auto_renew_period?: number;

    /**
     * Detailed balance information including crypto and token holdings
     * @type {_Commons.Balance.Entity}
     * @optional
     * @remarks
     * - Includes native HBAR balance in tinybars
     * - Lists all associated token balances
     * - Updates in real-time with transactions
     */
    @ApiProperty({
        name: 'balance',
        description: 'Detailed balance information including crypto and token holdings',
        type: () => _Commons.Balance.Entity,
        required: false
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Balance.Entity)
    balance?: _Commons.Balance.Entity;

    /**
     * ISO 8601 timestamp of account creation
     * @type {string}
     * @optional
     * @remarks
     * - Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * - Immutable after account creation
     * - Used for account history tracking
     */
    @ApiProperty({
        name: 'created_timestamp',
        description: 'ISO 8601 timestamp of account creation',
        type: String,
        required: false,
        example: '2023-01-01T00:00:00.000Z'
    })
    @IsOptional()
    @IsISO8601()
    created_timestamp?: string;

    /**
     * Flag indicating opt-out status for staking rewards
     * @type {boolean}
     * @remarks
     * - True: Account will not receive staking rewards
     * - False: Account is eligible for staking rewards
     * - Can be modified through account update transaction
     */
    @ApiProperty({
        name: 'decline_reward',
        description: 'Flag indicating opt-out status for staking rewards',
        type: Boolean,
        required: true,
        example: false
    })
    @IsBoolean()
    decline_reward: boolean;

    /**
     * Flag indicating if the account has been deleted
     * @type {boolean}
     * @optional
     * @remarks
     * - True: Account has been deleted
     * - False: Account is active
     * - Deleted accounts cannot be reactivated
     */
    @ApiProperty({
        name: 'deleted',
        description: 'Flag indicating if the account has been deleted',
        type: Boolean,
        required: false,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    deleted?: boolean;

    /**
     * Current nonce for Ethereum transaction compatibility
     * @type {number}
     * @optional
     * @remarks
     * - Increments with each EVM transaction
     * - Used to prevent transaction replay attacks
     * - Specific to EVM functionality
     */
    @ApiProperty({
        name: 'ethereum_nonce',
        description: 'Current nonce for Ethereum transaction compatibility',
        type: Number,
        required: false,
        example: 0
    })
    @IsOptional()
    @IsNumber()
    ethereum_nonce?: number;

    /**
     * Ethereum Virtual Machine (EVM) compatible address
     * @type {Blob}
     * @optional
     * @remarks
     * - Used for EVM contract interactions
     * - Derived from account's public key
     * - Format follows Ethereum address standard
     */
    @ApiProperty({
        name: 'evm_address',
        description: 'Ethereum Virtual Machine (EVM) compatible address',
        type: 'string',
        format: 'binary',
        required: false
    })
    @IsOptional()
    evm_address?: Blob;

    /**
     * ISO 8601 timestamp of account expiration
     * @type {string}
     * @optional
     * @remarks
     * - Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * - Account becomes inactive after expiry
     * - Can be extended through auto-renewal
     */
    @ApiProperty({
        name: 'expiry_timestamp',
        description: 'ISO 8601 timestamp of account expiration',
        type: String,
        required: false,
        example: '2024-01-01T00:00:00.000Z'
    })
    @IsOptional()
    @IsISO8601()
    expiry_timestamp?: string;

    /**
     * Cryptographic key for account control and transaction signing
     * @type {_Commons.Key.Entity}
     * @remarks
     * - Can be single key or key list
     * - Supports various key types (ED25519, ECDSA, etc.)
     * - Required for transaction authorization
     */
    @ApiProperty({
        name: 'key',
        description: 'Cryptographic key for account control and transaction signing',
        type: () => _Commons.Key.Entity,
        required: true
    })
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    key: _Commons.Key.Entity;

    /**
     * Maximum number of automatic token associations
     * @type {number}
     * @optional
     * @remarks
     * - Limits automatic token associations
     * - Prevents spam token associations
     * - Default is 0 (manual associations only)
     */
    @ApiProperty({
        name: 'max_automatic_token_associations',
        description: 'Maximum number of automatic token associations',
        type: Number,
        required: false,
        example: 0
    })
    @IsOptional()
    @IsNumber()
    max_automatic_token_associations?: number;

    /**
     * Additional notes or metadata for the account
     * @type {string}
     * @optional
     * @remarks
     * - User-defined metadata
     * - Not used for account operations
     * - Limited to 100 characters
     */
    @ApiProperty({
        name: 'memo',
        description: 'Additional notes or metadata for the account',
        type: String,
        required: false,
        example: 'Account memo'
    })
    @IsOptional()
    @IsString()
    memo?: string;

    /**
     * Amount of unclaimed staking rewards
     * @type {number}
     * @optional
     * @remarks
     * - Denominated in tinybars
     * - Accumulates from staking activities
     * - Can be claimed through specific transaction
     */
    @ApiProperty({
        name: 'pending_reward',
        description: 'Amount of unclaimed staking rewards in tinybars',
        type: Number,
        required: false,
        example: 0
    })
    @IsOptional()
    @IsNumber()
    pending_reward?: number;

    /**
     * Flag requiring signature for incoming transfers
     * @type {boolean}
     * @optional
     * @remarks
     * - True: Requires signature for receiving funds
     * - False: Accepts transfers automatically
     * - Enhanced security feature
     */
    @ApiProperty({
        name: 'receiver_sig_required',
        description: 'Flag requiring signature for incoming transfers',
        type: Boolean,
        required: false,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    receiver_sig_required?: boolean;

    /**
     * Account ID to which this account is staked
     * @type {string}
     * @remarks
     * - Must be a valid node account ID
     * - Used for proxy staking
     * - Affects reward distribution
     */
    @ApiProperty({
        name: 'staked_account_id',
        description: 'Account ID to which this account is staked',
        type: String,
        required: true,
        example: '0.0.789012'
    })
    @IsString()
    staked_account_id: string;

    /**
     * Node ID to which this account is staked
     * @type {number}
     * @optional
     * @remarks
     * - Identifies specific network node
     * - Used for direct node staking
     * - Alternative to staked_account_id
     */
    @ApiProperty({
        name: 'staked_node_id',
        description: 'Node ID to which this account is staked',
        type: Number,
        required: false,
        example: 0
    })
    @IsOptional()
    @IsNumber()
    staked_node_id?: number;

    /**
     * ISO 8601 timestamp of current staking period start
     * @type {string}
     * @remarks
     * - Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * - Determines reward calculation period
     * - Updates with each staking period
     */
    @ApiProperty({
        name: 'stake_period_start',
        description: 'ISO 8601 timestamp of current staking period start',
        type: String,
        required: true,
        example: '2023-01-01T00:00:00.000Z'
    })
    @IsISO8601()
    stake_period_start: string;

    /**
     * Creates an instance of _Info
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IAccounts.IInfo>} data - Partial data to initialize the account info
     * @throws {Error} If any of the provided data is invalid
     */
    constructor(data: Partial<IHashgraph.IRestful.IAccounts.IInfo>) {
        Object.assign(this, data);

        if (this.account !== undefined && typeof this.account !== 'string') {
            throw new Error('Invalid account');
        }
        if (this.alias !== undefined && typeof this.alias !== 'string') {
            throw new Error('Invalid alias');
        }
        if (this.auto_renew_period !== undefined && typeof this.auto_renew_period !== 'number') {
            throw new Error('Invalid auto_renew_period');
        }
        if (this.balance !== undefined && !(this.balance instanceof _Commons.Balance.Entity)) {
            throw new Error('Invalid balance');
        }
        if (this.created_timestamp !== undefined && !this.isValidISODate(this.created_timestamp)) {
            throw new Error('Invalid created_timestamp');
        }
        if (typeof this.decline_reward !== 'boolean') {
            throw new Error('Invalid decline_reward');
        }
        if (this.deleted !== undefined && typeof this.deleted !== 'boolean') {
            throw new Error('Invalid deleted');
        }
        if (this.ethereum_nonce !== undefined && typeof this.ethereum_nonce !== 'number') {
            throw new Error('Invalid ethereum_nonce');
        }
        if (this.evm_address !== undefined && !(this.evm_address instanceof Blob)) {
            throw new Error('Invalid evm_address');
        }
        if (this.expiry_timestamp !== undefined && !this.isValidISODate(this.expiry_timestamp)) {
            throw new Error('Invalid expiry_timestamp');
        }
        if (!(this.key instanceof _Commons.Key.Entity)) {
            throw new Error('Invalid key');
        }
        if (this.max_automatic_token_associations !== undefined && typeof this.max_automatic_token_associations !== 'number') {
            throw new Error('Invalid max_automatic_token_associations');
        }
        if (this.memo !== undefined && typeof this.memo !== 'string') {
            throw new Error('Invalid memo');
        }
        if (this.pending_reward !== undefined && typeof this.pending_reward !== 'number') {
            throw new Error('Invalid pending_reward');
        }
        if (this.receiver_sig_required !== undefined && typeof this.receiver_sig_required !== 'boolean') {
            throw new Error('Invalid receiver_sig_required');
        }
        if (typeof this.staked_account_id !== 'string') {
            throw new Error('Invalid staked_account_id');
        }
        if (this.staked_node_id !== undefined && typeof this.staked_node_id !== 'number') {
            throw new Error('Invalid staked_node_id');
        }
        if (!this.isValidISODate(this.stake_period_start)) {
            throw new Error('Invalid stake_period_start');
        }
    }

    /**
     * Validates if a string is a properly formatted ISO 8601 date
     * @private
     * @param {string} dateString - The date string to validate
     * @returns {boolean} True if the date string is valid ISO 8601 format
     */
    private isValidISODate(dateString: string): boolean {
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/;
        return regex.test(dateString) && !isNaN(Date.parse(dateString));
    }
}