/**
 * @file hashgraph.restful.transactions.id.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for transaction identifiers in the Hashgraph Network REST API.
 * This interface represents the unique identification components of a transaction, including:
 * - Initiating account information
 * - Transaction timing parameters
 * - Scheduling status
 * - Uniqueness controls
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Identifier Interface
 * @interface _IId
 * @description Represents the unique identifier structure for transactions in the Hashgraph network.
 * This interface provides:
 * - Unique transaction identification
 * - Temporal validity controls
 * - Scheduling indicators
 * - Account attribution
 * Used for transaction tracking and reference.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a basic transaction ID
 * const basicId: _IId = {
 *   account_id: "0.0.1234",
 *   transaction_valid_start: "1234567890.000000000"
 * };
 * 
 * // Example of a scheduled transaction ID with nonce
 * const scheduledId: _IId = {
 *   account_id: "0.0.5678",
 *   nonce: 1,
 *   scheduled: true,
 *   transaction_valid_start: "1234567890.000000000"
 * };
 * 
 * // Example of validating a transaction ID
 * const validateTransactionId = (id: _IId): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   const timestampPattern = /^\d+\.\d+$/;
 *   
 *   return (
 *     !!id.account_id &&
 *     accountPattern.test(id.account_id) &&
 *     !!id.transaction_valid_start &&
 *     timestampPattern.test(id.transaction_valid_start) &&
 *     (id.nonce === undefined || Number.isInteger(id.nonce)) &&
 *     (id.scheduled === undefined || typeof id.scheduled === 'boolean')
 *   );
 * };
 * 
 * // Example of generating a transaction ID string
 * const generateTransactionIdString = (id: _IId): string => {
 *   const base = `${id.account_id}@${id.transaction_valid_start}`;
 *   return id.nonce !== undefined ? `${base}/${id.nonce}` : base;
 * };
 * ```
 */
export interface _IId {
    /**
     * Account Identifier
     * @type {string}
     * @description The account that initiated the transaction.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field
     * - Must be a valid Hedera account ID
     * - Identifies transaction payer
     * - Part of unique transaction ID
     * - Used for authorization
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IId
     * @since 2.0.0
     * @example "0.0.1234"
     */
    account_id?: string;

    /**
     * Transaction Nonce
     * @type {number}
     * @description Sequential number for transaction uniqueness.
     * Properties:
     * - Optional field
     * - Client-generated value
     * - Makes identical transactions unique
     * - Must be a positive integer
     * - Used with identical timestamps
     * @required false
     * @memberof _IId
     * @since 2.0.0
     * @example 1
     */
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
     * @required false
     * @default false
     * @memberof _IId
     * @since 2.0.0
     * @example false
     */
    scheduled?: boolean;

    /**
     * Validity Start Time
     * @type {string}
     * @description The earliest allowed execution time.
     * Format: `seconds.nanoseconds` (e.g., "1234567890.000000000")
     * Properties:
     * - Optional field
     * - Start of validity window
     * - Network consensus time
     * - Part of unique transaction ID
     * - Controls execution timing
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IId
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    transaction_valid_start?: string;
}