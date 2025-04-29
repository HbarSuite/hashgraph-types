import { Status, TransactionId } from "@hashgraph/sdk"

/**
 * Transaction Details Interface
 * @export
 * @interface _ITransactionDetails
 * @namespace IHashgraph._ITransactionDetails
 * @description Represents the details of a transaction, including its status and unique identifier.
 * This interface provides essential information about a transaction's current state and
 * tracking information in the Hedera network.
 * @property {Status} status - The current status of the transaction (success, failure, etc.)
 * @property {TransactionId} transactionId - The unique identifier for tracking the transaction
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Transaction details are used to track and verify the state of transactions on the network.
 * The status indicates the current state, while the transactionId provides a unique reference.
 * @see Status
 * @see TransactionId
 * @see IHashgraph._ITransactionIdEntity
 * @example
 * ```typescript
 * const txDetails: _ITransactionDetails = {
 *   status: Status.SUCCESS,
 *   transactionId: TransactionId.generate(myAccountId)
 * };
 * ```
 */
export interface _ITransactionDetails {

    /**
     * The current status of the transaction
     * @property {Status} status
     * @memberof _ITransactionDetails
     * @type {Status}
     * @description Indicates the current state of the transaction (e.g., success, failure, pending).
     * This status is updated as the transaction progresses through the network.
     * @required
     * @since 2.0.0
     * @throws {Error} If status is not a valid Status enum value
     * @remarks
     * - Status values are defined in the @hashgraph/sdk Status enum
     * - Final statuses include SUCCESS and various failure states
     * - Intermediate states include PENDING and PROCESSING
     * @see Status
     * @example Status.SUCCESS
     */
    status: Status

    /**
     * The unique identifier for the transaction
     * @property {TransactionId} transactionId
     * @memberof _ITransactionDetails
     * @type {TransactionId}
     * @description A unique identifier assigned to the transaction for tracking and reference purposes.
     * Combines the payer account ID with a timestamp for uniqueness.
     * @required
     * @since 2.0.0
     * @throws {Error} If transactionId is invalid or improperly formatted
     * @remarks
     * - Generated using TransactionId.generate() with a valid account ID
     * - Unique across the entire network
     * - Used for receipt and record retrieval
     * @see TransactionId
     * @example TransactionId.generate(myAccountId)
     */
    transactionId: TransactionId
}