/**
 * @file hashgraph.restful.transactions.transfer.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for transfer entities in the Hashgraph Network REST API.
 * This interface represents individual transfer operations, including cryptocurrency and token transfers.
 * @category Interfaces
 * @subcategory Transfers
 * @since 2.0.0
 */

/**
 * Transfer Entity Interface
 * @interface _IEntity
 * @description Represents a single transfer operation in the Hashgraph network.
 * This interface captures all essential information about a transfer, including:
 * - Account identification (sender or receiver)
 * - Transfer amount in appropriate denomination
 * - Transfer type (direct or approval)
 * Used for tracking and managing individual transfer operations.
 * @category Interfaces
 * @subcategory Transfers
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a standard HBAR transfer
 * const hbarTransfer: _IEntity = {
 *   account: "0.0.1234",
 *   amount: 100000000,  // 1 HBAR
 *   is_approval: false
 * };
 * 
 * // Example of a token approval
 * const tokenApproval: _IEntity = {
 *   account: "0.0.5678",
 *   amount: 1000,       // 1000 tokens
 *   is_approval: true
 * };
 * 
 * // Example of validating a transfer
 * const validateTransfer = (transfer: _IEntity): boolean => {
 *   return (
 *     /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/.test(transfer.account ?? "") &&
 *     transfer.amount !== 0
 *   );
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Account Identifier
     * @type {string}
     * @description The Hedera account ID involved in the transfer operation.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (may be undefined for special operations)
     * - Must be a valid Hedera account ID when specified
     * - Used for both source and destination accounts
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234"
     */
    account?: string;

    /**
     * Transfer Amount
     * @type {number}
     * @description The quantity being transferred in the smallest denomination.
     * Properties:
     * - For HBAR: amount in tinybars (1 HBAR = 100,000,000 tinybars)
     * - For tokens: amount in the token's smallest unit
     * - Positive values indicate incoming transfers
     * - Negative values indicate outgoing transfers
     * - Must be non-zero
     * @required true
     * @memberof _IEntity
     * @since 2.0.0
     * @example 100000000  // 1 HBAR
     */
    amount: number;

    /**
     * Approval Flag
     * @type {boolean}
     * @description Indicates whether this transfer represents an approval operation.
     * Properties:
     * - Optional field (defaults to false)
     * - true: represents an allowance/approval grant
     * - false: represents a direct transfer
     * Used for distinguishing between direct transfers and approval operations.
     * @required false
     * @default false
     * @memberof _IEntity
     * @since 2.0.0
     * @example true  // Indicates an approval operation
     */
    is_approval?: boolean;
}