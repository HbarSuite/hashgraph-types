import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IsOptional } from 'class-validator';

/**
 * Class implementing the Hashgraph account creation request interface.
 * Provides functionality for creating new accounts with various configurations.
 * 
 * @description This class handles account creation parameters including:
 * - Initial balance setting
 * - Key management (single key or key list)
 * - Token association limits
 * - Signature requirements
 * - Transaction settings
 * - DAO configurations
 * 
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.ICreate}
 * @example
 * ```typescript
 * // Create basic account
 * const request = new _Create(1000000);
 * 
 * // Create account with full options
 * const fullRequest = new _Create(
 *   1000000, // Initial balance
 *   { // Sender details
 *     key: PublicKey.fromString("..."),
 *     id: AccountId.fromString("0.0.123")
 *   },
 *   5, // Max token associations
 *   true, // Require receiver signature
 *   false, // Not offline transaction
 *   "New Account" // Memo
 * );
 * ```
 */
export class _Create implements IHashgraph.ILedger.IAccounts.IRequest.ICreate {
    /**
     * Consensus timestamp from the validator in ISO 8601 format
     * @example "2023-01-01T12:00:00.000Z"
     */
    @ApiProperty({
        description: 'Validator consensus timestamp',
        type: () => String,
        required: true
    })
    validatorConsensusTimestamp: string;

    /**
     * Optional memo field for adding notes or descriptions to the account
     * @example "Corporate expense account"
     */
    @ApiProperty({
        description: 'Memo',
        type: () => String,
        required: false
    })
    memo?: string;

    /**
     * Account creation authority
     * @property {Object} sender
     * @description Entity responsible for creating and funding the new account
     * @type {Object}
     * @memberof _ICreate
     * @optional
     * @remarks
     * - Must have sufficient balance for account creation fee
     * - Must have permission to create accounts
     * - Controls initial account configuration
     * @example
     * ```typescript
     * sender: {
     *   key: myPublicKey, // Sender's authentication key
     *   id: AccountId.fromString("0.0.123456") // Sender's account ID
     * }
     * ```
     */
    @ApiProperty({
        description: 'The sender account details',
        type: () => Object,
        required: false
    })
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * Initial account balance in tinybars (1 Hbar = 100,000,000 tinybars)
     * @example 1000000 // 0.01 Hbar
     */
    @ApiProperty({
        description: 'Initial balance of the account in tinybars',
        type: () => Number,
        required: true
    })
    balance?: number;

    /**
     * Maximum number of tokens that can be associated with this account automatically
     * @example 5
     */
    @ApiProperty({
        description: 'Maximum number of tokens that can be associated with this account automatically',
        type: () => Number,
        required: false
    })
    maxAutomaticTokenAssociations?: number;

    /**
     * Flag indicating if transfers to this account require the receiver's signature
     * @example true
     */
    @ApiProperty({
        description: 'Whether the receiver signature is required for transfers to this account',
        type: () => Boolean,
        required: false
    })
    isReceiverSignatureRequired?: boolean;

    /**
     * Flag indicating if this is an offline transaction
     * @example false
     */
    @ApiProperty({
        description: 'Whether this is an offline transaction',
        type: () => Boolean,
        required: false
    })
    isOfflineTransaction?: boolean;

    /**
     * Optional DAO configuration for the account creation
     * @example
     * ```typescript
     * {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the account creation',
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
     * Creates a new account creation request with the specified parameters
     * 
     * @param {IHashgraph.ILedger.IAccounts.IRequest.ICreate} data - Partial data to initialize the create
     * 
     * @throws {Error} If balance is negative or invalid
     * @throws {Error} If sender key is not PublicKey or KeyList
     * @throws {Error} If sender ID is not AccountId
     * @throws {Error} If maxAutomaticTokenAssociations is negative
     * @throws {Error} If isReceiverSignatureRequired is not boolean
     * @throws {Error} If isOfflineTransaction is not boolean
     * @throws {Error} If memo is empty string
     * 
     * @example
     * ```typescript
     * // Basic account with just balance
     * const basic = new _Create(1000000, "none");
     * 
     * // Full featured account
     * const full = new _Create(
     *   1000000,
     *   "partial",
     *   {
     *     key: PublicKey.fromString("..."),
     *     id: AccountId.fromString("0.0.123")
     *   },
     *   5,
     *   true,
     *   false,
     *   "Corporate Account"
     * );
     * ```
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.ICreate) {
        Object.assign(this, data);

        // Validate memo if provided
        if (this.memo !== undefined && (typeof this.memo !== 'string' || this.memo.trim() === '')) {
            throw new Error('Invalid memo. Must be a non-empty string.');
        }
        this.memo = this.memo;

        // Validate balance is non-negative number
        if (typeof this.balance !== 'number' || this.balance < 0) {
            throw new Error('Invalid balance. Must be a non-negative number.');
        }
        
        // Validate sender key and id if provided
        if (this.sender) {
            if (this.sender.key && !(this.sender.key instanceof PublicKey) && !(this.sender.key instanceof KeyList)) {
                throw new Error('Invalid sender key. Must be an instance of PublicKey or KeyList.');
            }
            if (this.sender.id && !(this.sender.id instanceof AccountId)) {
                throw new Error('Invalid sender id. Must be an instance of AccountId.');
            }
        }

        // Validate maxAutomaticTokenAssociations if provided
        if (this.maxAutomaticTokenAssociations !== undefined && (typeof this.maxAutomaticTokenAssociations !== 'number' || this.maxAutomaticTokenAssociations < 0)) {
            throw new Error('Invalid maxAutomaticTokenAssociations. Must be a non-negative number.');
        }

        // Validate isReceiverSignatureRequired is boolean if provided
        if (this.isReceiverSignatureRequired !== undefined && typeof this.isReceiverSignatureRequired !== 'boolean') {
            throw new Error('Invalid isReceiverSignatureRequired. Must be a boolean.');
        }

        // Validate isOfflineTransaction is boolean if provided
        if (this.isOfflineTransaction !== undefined && typeof this.isOfflineTransaction !== 'boolean') {
            throw new Error('Invalid isOfflineTransaction. Must be a boolean.');
        }
    }
}