import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.transaction-identity.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for transaction identity in the Hashgraph Network.
 * This model represents the unique identification components of a transaction, including:
 * - Account information
 * - Transaction timing
 * - Scheduling status
 * - Uniqueness controls
 * @category Models
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Identity Model
 * @class _TransactionIdentity
 * @implements {IHashgraph.ITransactionIdentity}
 * @description Represents the identity and validation parameters of a transaction.
 * This class provides:
 * - Transaction identification
 * - Temporal validation
 * - Scheduling controls
 * - Replay protection
 * Used for transaction creation and validation.
 * @category Models
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic transaction identity
 * const basicTx = new _TransactionIdentity(
 *   "0.0.1234",
 *   undefined,
 *   false,
 *   "2024-01-02T15:30:00.000Z"
 * );
 * 
 * // Example of creating a scheduled transaction identity
 * const scheduledTx = new _TransactionIdentity(
 *   "0.0.5678",
 *   1,
 *   true,
 *   "2024-01-03T12:00:00.000Z"
 * );
 * 
 * // Example of validating transaction identity parameters
 * const validateTxIdentity = (txId: _TransactionIdentity): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   
 *   return (
 *     (!txId.account_id || accountPattern.test(txId.account_id)) &&
 *     (!txId.nonce || (Number.isInteger(txId.nonce) && txId.nonce >= 0)) &&
 *     (txId.scheduled === undefined || typeof txId.scheduled === 'boolean') &&
 *     (!txId.transaction_valid_start || !isNaN(Date.parse(txId.transaction_valid_start)))
 *   );
 * };
 * 
 * // Example of formatting transaction identity for display
 * const formatTxIdentity = (txId: _TransactionIdentity): string => {
 *   const parts = [
 *     `Account: ${txId.account_id || 'N/A'}`,
 *     txId.nonce !== undefined ? `Nonce: ${txId.nonce}` : null,
 *     `Scheduled: ${txId.scheduled ? 'Yes' : 'No'}`,
 *     `Valid From: ${txId.transaction_valid_start || 'N/A'}`
 *   ];
 *   
 *   return parts.filter(Boolean).join(', ');
 * };
 * ```
 */
export class _TransactionIdentity implements IHashgraph.ITransactionIdentity {
    /**
     * Account Identifier
     * @type {string}
     * @description The account that initiated or is involved in the transaction.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field
     * - Must be a valid Hedera account ID
     * - Identifies transaction participant
     * - Part of unique transaction ID
     * - Used for authorization
     * @memberof _TransactionIdentity
     * @public
     * @since 2.0.0
     * @example "0.0.1234"
     */
    @ApiProperty({
        description: "Unique identifier of the account initiating or involved in the transaction",
        type: () => String,
        required: false,
        example: "0.0.1234"
    })
    account_id?: string;

    /**
     * Transaction Nonce
     * @type {number}
     * @description Sequential number for transaction uniqueness.
     * Properties:
     * - Optional field
     * - Must be a non-negative integer
     * - Makes identical transactions unique
     * - Prevents replay attacks
     * - Used with identical timestamps
     * @memberof _TransactionIdentity
     * @public
     * @since 2.0.0
     * @example 1
     */
    @ApiProperty({
        description: "A unique number used to ensure the uniqueness of the transaction and prevent replay attacks",
        type: () => Number,
        required: false,
        example: 1
    })
    nonce?: number;

    /**
     * Schedule Status
     * @type {boolean}
     * @description Indicates if this is a scheduled transaction.
     * Properties:
     * - Optional field
     * - true: scheduled execution
     * - false: immediate execution
     * - Affects execution timing
     * - Links to schedule entity
     * @memberof _TransactionIdentity
     * @public
     * @since 2.0.0
     * @default false
     * @example false
     */
    @ApiProperty({
        description: "Flag to determine if the transaction is scheduled for future execution",
        type: () => Boolean,
        required: false,
        example: false
    })
    scheduled?: boolean;

    /**
     * Validity Start Time
     * @type {string}
     * @description The earliest allowed execution time.
     * Format: ISO 8601 timestamp (e.g., "2024-01-02T15:30:00.000Z")
     * Properties:
     * - Optional field
     * - Start of validity window
     * - Must be valid ISO 8601
     * - Controls execution timing
     * - Part of transaction ID
     * @memberof _TransactionIdentity
     * @public
     * @since 2.0.0
     * @example "2024-01-02T15:30:00.000Z"
     */
    @ApiProperty({
        description: "ISO 8601 formatted timestamp indicating when the transaction becomes valid for processing",
        type: () => String,
        required: false,
        example: "2024-01-02T15:30:00.000Z"
    })
    transaction_valid_start?: string;

    /**
     * Creates a new transaction identity instance.
     * @constructor
     * @param {string} [account_id] - The account ID in shard.realm.num format
     * @param {number} [nonce] - Non-negative integer for transaction uniqueness
     * @param {boolean} [scheduled] - Whether the transaction is scheduled
     * @param {string} [transaction_valid_start] - ISO 8601 timestamp for validity start
     * @throws {Error} If account_id is not a string in shard.realm.num format
     * @throws {Error} If nonce is not a non-negative integer
     * @throws {Error} If scheduled is not a boolean
     * @throws {Error} If transaction_valid_start is not a valid ISO 8601 string
     * @memberof _TransactionIdentity
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic transaction identity
     * const txId = new _TransactionIdentity(
     *   "0.0.1234",
     *   1,
     *   false,
     *   "2024-01-02T15:30:00.000Z"
     * );
     * 
     * // Create a scheduled transaction identity
     * const scheduledTxId = new _TransactionIdentity(
     *   "0.0.5678",
     *   undefined,
     *   true,
     *   "2024-01-03T12:00:00.000Z"
     * );
     * ```
     */
    constructor(
        account_id?: string,
        nonce?: number,
        scheduled?: boolean,
        transaction_valid_start?: string
    ) {
        // Validate account_id parameter
        if (account_id !== undefined && typeof account_id !== 'string') {
            throw new Error('Invalid account_id: must be a string')
        }
        this.account_id = account_id

        // Validate nonce parameter
        if (nonce !== undefined && (!Number.isInteger(nonce) || nonce < 0)) {
            throw new Error('Invalid nonce: must be a non-negative integer')
        }
        this.nonce = nonce

        // Validate scheduled parameter
        if (scheduled !== undefined && typeof scheduled !== 'boolean') {
            throw new Error('Invalid scheduled: must be a boolean')
        }
        this.scheduled = scheduled

        // Validate transaction_valid_start parameter
        if (transaction_valid_start !== undefined) {
            if (typeof transaction_valid_start !== 'string' || isNaN(Date.parse(transaction_valid_start))) {
                throw new Error('Invalid transaction_valid_start: must be a valid ISO 8601 formatted string')
            }
            this.transaction_valid_start = transaction_valid_start
        }
    }
}