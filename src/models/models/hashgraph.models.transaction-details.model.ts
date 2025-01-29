import { Status, TransactionId } from "@hashgraph/sdk"
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.transaction-details.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for transaction details in the Hashgraph Network.
 * This model represents the complete state of a transaction, including:
 * - Transaction status
 * - Unique identification
 * - Processing state
 * - Execution tracking
 * @category Models
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Details Model
 * @class _TransactionDetails
 * @implements {IHashgraph.ITransactionDetails}
 * @description Represents the execution state of a transaction.
 * This class provides:
 * - Status tracking
 * - Transaction identification
 * - State management
 * - Result monitoring
 * Used for tracking transaction execution and outcomes.
 * @category Models
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating basic transaction details
 * const basicDetails = new _TransactionDetails(
 *   Status.Success,
 *   TransactionId.fromString("0.0.1234@1234567890.000000000")
 * );
 * 
 * // Example of creating transaction details with validation
 * const createDetails = (
 *   status: Status,
 *   accountId: string,
 *   timestamp: number
 * ): _TransactionDetails => {
 *   // Validate account ID format
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   if (!accountPattern.test(accountId)) {
 *     throw new Error('Invalid account ID format');
 *   }
 *   
 *   // Create transaction ID with validation
 *   const txId = TransactionId.fromString(
 *     `${accountId}@${timestamp}.000000000`
 *   );
 *   
 *   return new _TransactionDetails(status, txId);
 * };
 * 
 * // Example of validating transaction details
 * const validateDetails = (details: _TransactionDetails): boolean => {
 *   return (
 *     details.status instanceof Status &&
 *     details.transactionId instanceof TransactionId &&
 *     details.transactionId.toString().includes('@')
 *   );
 * };
 * 
 * // Example of formatting transaction details
 * const formatDetails = (details: _TransactionDetails): string => {
 *   const txIdParts = details.transactionId.toString().split('@');
 *   const accountId = txIdParts[0];
 *   const timestamp = new Date(Number(txIdParts[1].split('.')[0]) * 1000);
 *   
 *   return [
 *     `Status: ${details.status.toString()}`,
 *     `Account: ${accountId}`,
 *     `Time: ${timestamp.toISOString()}`,
 *     `Complete ID: ${details.transactionId.toString()}`
 *   ].join('\n');
 * };
 * ```
 */
export class _TransactionDetails implements IHashgraph.ITransactionDetails {
    /**
     * Transaction Status
     * @type {Status}
     * @description The current execution status.
     * Properties:
     * - Required field
     * - Execution state
     * - Processing result
     * - Network confirmed
     * - Final outcome
     * @memberof _TransactionDetails
     * @public
     * @since 2.0.0
     * @example Status.Success
     */
    @ApiProperty({
        description: "The current status of the transaction",
        type: () => Status,
        required: true,
        example: Status.Success
    })
    status: Status;

    /**
     * Transaction Identifier
     * @type {TransactionId}
     * @description The unique transaction identifier.
     * Format: `accountId@seconds.nanos`
     * Properties:
     * - Required field
     * - Network unique
     * - Contains timestamp
     * - Identifies payer
     * - Enables lookup
     * @memberof _TransactionDetails
     * @public
     * @since 2.0.0
     * @example TransactionId.fromString("0.0.1234@1234567890.000000000")
     */
    @ApiProperty({
        description: "The unique identifier for the transaction",
        type: () => TransactionId,
        required: true,
        example: "0.0.1234@1234567890.000000000"
    })
    transactionId: TransactionId;

    /**
     * Creates a new transaction details instance.
     * @constructor
     * @param {Status} status - Transaction execution status
     * @param {TransactionId} transactionId - Unique transaction identifier
     * @throws {Error} If status is not a valid Status instance
     * @throws {Error} If transactionId is not a valid TransactionId instance
     * @memberof _TransactionDetails
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create basic transaction details
     * const basicDetails = new _TransactionDetails(
     *   Status.Success,
     *   TransactionId.fromString("0.0.1234@1234567890.000000000")
     * );
     * 
     * // Create details with current timestamp
     * const currentDetails = new _TransactionDetails(
     *   Status.Pending,
     *   TransactionId.fromString(
     *     `0.0.1234@${Math.floor(Date.now() / 1000)}.000000000`
     *   )
     * );
     * 
     * // Log transaction details
     * console.log(`Status: ${basicDetails.status.toString()}`);
     * console.log(`ID: ${basicDetails.transactionId.toString()}`);
     * ```
     */
    constructor(status: Status, transactionId: TransactionId) {
        // Validate status parameter
        if (!(status instanceof Status)) {
            throw new Error('Invalid status: must be an instance of Status')
        }
        this.status = status

        // Validate transactionId parameter
        if (!(transactionId instanceof TransactionId)) {
            throw new Error('Invalid transactionId: must be an instance of TransactionId')
        }
        this.transactionId = transactionId
    }
}