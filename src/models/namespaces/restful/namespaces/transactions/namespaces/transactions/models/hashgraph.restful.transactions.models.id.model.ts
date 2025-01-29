import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

/**
 * @file id.model.ts
 * @class _Id
 * @description Comprehensive model representing a unique transaction identifier in the Hashgraph network.
 * Implements IHashgraph.IRestful.ITransactions.ITransaction.IId to provide a complete
 * representation of transaction identification components, including:
 * - Account identification and ownership
 * - Transaction uniqueness guarantees
 * - Scheduling capabilities
 * - Temporal validity controls
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ITransaction.IId}
 * @category Hashgraph
 * @subcategory Transactions
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new transaction ID with all properties
 * const transactionId = new _Id({
 *   account_id: '0.0.12345',
 *   nonce: 1234,
 *   scheduled: false,
 *   transaction_valid_start: '1234567890.123456789'
 * });
 * 
 * // Create a minimal transaction ID
 * const minimalId = new _Id({
 *   account_id: '0.0.54321'
 * });
 * ```
 */
export class _Id implements IHashgraph.IRestful.ITransactions.ITransaction.IId {

    /**
     * Account identifier
     * @type {string | undefined}
     * @description The Hedera account initiating the transaction in shard.realm.num format.
     * Represents the entity responsible for transaction fees and execution.
     * @remarks
     * - Required format: shard.realm.num
     * - Example: 0.0.12345
     * - Must match regex: /^\d+\.\d+\.\d+$/
     * @memberof _Id
     * @optional
     */
    @ApiProperty({
        description: 'The identifier of the account that initiated this transaction. Format: shard.realm.num',
        required: false,
        type: () => String,
        example: '0.0.12345'
    })
    @IsString()
    @IsOptional()
    account_id?: string;

    /**
     * Transaction nonce
     * @type {number | undefined}
     * @description Client-generated number ensuring transaction uniqueness within the same account.
     * Prevents transaction replay attacks and guarantees idempotency.
     * @remarks
     * - Must be non-negative integer
     * - Typically auto-incremented by client
     * - Used for transaction deduplication
     * @memberof _Id
     * @optional
     */
    @ApiProperty({
        description: 'A client-generated number to ensure transaction uniqueness',
        required: false,
        type: () => Number,
        example: 1234
    })
    @IsNumber()
    @IsOptional()
    nonce?: number;

    /**
     * Scheduled transaction flag
     * @type {boolean | undefined}
     * @description Indicates whether this transaction is scheduled for future execution.
     * When true, the transaction will be executed at a predetermined time.
     * @remarks
     * - Default: false
     * - Requires additional scheduling parameters
     * - Affects transaction processing flow
     * @memberof _Id
     * @optional
     */
    @ApiProperty({
        description: 'Indicates if the transaction is scheduled for future execution',
        required: false,
        type: () => Boolean,
        example: false
    })
    @IsBoolean()
    @IsOptional()
    scheduled?: boolean;

    /**
     * Transaction valid start timestamp
     * @type {string | undefined}
     * @description The earliest time when the transaction can be executed.
     * Represents network time in seconds.nanoseconds format.
     * @remarks
     * - Format: seconds.nanoseconds
     * - Must be valid timestamp
     * - Used for transaction ordering
     * @memberof _Id
     * @optional
     */
    @ApiProperty({
        description: 'The timestamp when the transaction becomes valid for execution. Format: seconds.nanoseconds',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsString()
    @IsOptional()
    transaction_valid_start?: string;

    /**
     * Creates an instance of _Id.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransaction.IId>} data - Initial data to create the transaction ID
     * @throws {Error} When validation fails for account_id, nonce, or transaction_valid_start format
     * @remarks
     * - Performs strict format validation
     * - Handles partial initialization
     * - Ensures data integrity
     * 
     * @example
     * ```typescript
     * // Valid construction
     * new _Id({
     *   account_id: '0.0.12345',
     *   nonce: 1234
     * });
     * 
     * // Invalid construction (throws Error)
     * new _Id({
     *   account_id: 'invalid',
     *   nonce: -1
     * });
     * ```
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransaction.IId>) {
        Object.assign(this, data);

        // Validate account ID format (shard.realm.num)
        if (this.account_id && !/^\d+\.\d+\.\d+$/.test(this.account_id)) {
            throw new Error('Invalid account_id format. Expected format: shard.realm.num');
        }

        // Validate nonce is non-negative integer
        if (this.nonce !== undefined && (this.nonce < 0 || !Number.isInteger(this.nonce))) {
            throw new Error('Nonce must be a non-negative integer');
        }

        // Validate transaction valid start timestamp format
        if (this.transaction_valid_start) {
            const [seconds, nanoseconds] = this.transaction_valid_start.split('.');
            if (!/^\d+$/.test(seconds) || (nanoseconds && !/^\d+$/.test(nanoseconds))) {
                throw new Error('Invalid transaction_valid_start format. Expected format: seconds.nanoseconds');
            }
        }
    }
}