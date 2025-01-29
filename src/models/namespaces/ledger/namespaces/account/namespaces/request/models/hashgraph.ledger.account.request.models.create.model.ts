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
     * Sender account information containing optional key and ID
     * @example
     * ```typescript
     * {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.123")
     * }
     * ```
     */
    @ApiProperty({
        description: 'The sender account details',
        type: () => Object,
        required: false
    })
    sender: {
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
    balance: number;

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
     * @param balance - Initial account balance in tinybars (must be non-negative)
     * @param sender - Optional sender account details including key and ID
     * @param maxAutomaticTokenAssociations - Optional maximum number of automatic token associations
     * @param isReceiverSignatureRequired - Optional flag requiring receiver signatures
     * @param isOfflineTransaction - Optional flag for offline transactions
     * @param memo - Optional memo string for the account
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
     * const basic = new _Create(1000000);
     * 
     * // Full featured account
     * const full = new _Create(
     *   1000000,
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
    constructor(
        balance: number,
        sender?: { key?: PublicKey | KeyList; id?: AccountId },
        maxAutomaticTokenAssociations?: number,
        isReceiverSignatureRequired?: boolean,
        isOfflineTransaction?: boolean,
        memo?: string
    ) {
        // Validate memo if provided
        if (memo !== undefined && (typeof memo !== 'string' || memo.trim() === '')) {
            throw new Error('Invalid memo. Must be a non-empty string.');
        }
        this.memo = memo;

        // Validate balance is non-negative number
        if (typeof balance !== 'number' || balance < 0) {
            throw new Error('Invalid balance. Must be a non-negative number.');
        }
        this.balance = balance;
        
        // Validate sender key and id if provided
        if (sender) {
            if (sender.key && !(sender.key instanceof PublicKey) && !(sender.key instanceof KeyList)) {
                throw new Error('Invalid sender key. Must be an instance of PublicKey or KeyList.');
            }
            if (sender.id && !(sender.id instanceof AccountId)) {
                throw new Error('Invalid sender id. Must be an instance of AccountId.');
            }
            this.sender = sender;
        }

        // Validate maxAutomaticTokenAssociations if provided
        if (maxAutomaticTokenAssociations !== undefined && (typeof maxAutomaticTokenAssociations !== 'number' || maxAutomaticTokenAssociations < 0)) {
            throw new Error('Invalid maxAutomaticTokenAssociations. Must be a non-negative number.');
        }
        this.maxAutomaticTokenAssociations = maxAutomaticTokenAssociations;

        // Validate isReceiverSignatureRequired is boolean if provided
        if (isReceiverSignatureRequired !== undefined && typeof isReceiverSignatureRequired !== 'boolean') {
            throw new Error('Invalid isReceiverSignatureRequired. Must be a boolean.');
        }
        this.isReceiverSignatureRequired = isReceiverSignatureRequired;

        // Validate isOfflineTransaction is boolean if provided
        if (isOfflineTransaction !== undefined && typeof isOfflineTransaction !== 'boolean') {
            throw new Error('Invalid isOfflineTransaction. Must be a boolean.');
        }
        this.isOfflineTransaction = isOfflineTransaction;
    }
}