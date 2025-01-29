/**
 * Transaction Identity Interface
 * @export
 * @interface _ITransactionIdentity
 * @namespace IHashgraph._ITransactionIdentity
 * @description Represents the identity details of a transaction in the Hashgraph network.
 * This interface captures the essential identifying information that makes a transaction
 * unique and traceable within the network.
 * @property {string} account_id - The unique identifier of the account involved in the transaction
 * @property {number} nonce - A unique number to prevent replay attacks
 * @property {boolean} scheduled - Flag indicating if the transaction is scheduled
 * @property {string} transaction_valid_start - ISO 8601 timestamp when transaction becomes valid
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Transaction identity is crucial for transaction tracking, replay protection,
 * and scheduled transaction management. All timestamps use ISO 8601 format.
 * @see IHashgraph._ITransactionDetails
 * @example
 * ```typescript
 * const txIdentity: _ITransactionIdentity = {
 *   account_id: "0.0.123456",
 *   nonce: 1,
 *   scheduled: false,
 *   transaction_valid_start: "2023-01-01T00:00:00.000Z"
 * };
 * ```
 */
export interface _ITransactionIdentity {

    /**
     * The account ID associated with the transaction
     * @property {string} account_id
     * @memberof _ITransactionIdentity
     * @type {string}
     * @description Unique identifier of the account initiating or involved in the transaction.
     * Must be in the format of `shard.realm.number` (e.g., 0.0.123456).
     * @optional
     * @since 2.0.0
     * @throws {Error} If the account ID format is invalid
     * @remarks
     * - Must be a valid Hedera account ID format
     * - Represents the account involved in the transaction
     * - Used for transaction tracking and authorization
     * @example "0.0.123456"
     */
    account_id?: string

    /**
     * The nonce value for the transaction
     * @property {number} nonce
     * @memberof _ITransactionIdentity
     * @type {number}
     * @description A unique number used to ensure the uniqueness of the transaction and prevent replay attacks.
     * Must be a positive integer that hasn't been used before for the same account.
     * @optional
     * @since 2.0.0
     * @throws {Error} If nonce is negative or not an integer
     * @remarks
     * - Must be unique for the account
     * - Used as part of replay attack prevention
     * - Should be monotonically increasing
     * @example 1
     */
    nonce?: number

    /**
     * Indicates if the transaction is scheduled
     * @property {boolean} scheduled
     * @memberof _ITransactionIdentity
     * @type {boolean}
     * @description Flag to determine if the transaction is scheduled for future execution.
     * Scheduled transactions are executed at a later time based on network conditions.
     * @optional
     * @since 2.0.0
     * @remarks
     * - When true, the transaction is queued for future execution
     * - Affects transaction handling and processing
     * - Related to scheduled transaction feature set
     * @example false
     */
    scheduled?: boolean

    /**
     * The timestamp when the transaction becomes valid
     * @property {string} transaction_valid_start
     * @memberof _ITransactionIdentity
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the transaction becomes valid for processing.
     * Transactions are only processed after this timestamp.
     * @optional
     * @since 2.0.0
     * @throws {Error} If timestamp is invalid or in wrong format
     * @remarks
     * - Must be in ISO 8601 format
     * - Used for transaction timing control
     * - Cannot be in the past when submitted
     * @example "2023-01-01T00:00:00.000Z"
     */
    transaction_valid_start?: string
}