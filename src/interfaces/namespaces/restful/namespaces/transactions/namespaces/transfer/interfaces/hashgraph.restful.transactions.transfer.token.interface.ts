/**
 * @file hashgraph.restful.transactions.transfer.token.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for token transfer operations in the Hashgraph Network REST API.
 * This interface represents the transfer of fungible tokens between accounts.
 * @category Interfaces
 * @subcategory Transfers
 * @since 2.0.0
 */

/**
 * Token Transfer Interface
 * @interface _IToken
 * @description Represents a fungible token transfer operation in the Hashgraph network.
 * This interface captures all essential information about a token transfer, including:
 * - Token identification
 * - Account information
 * - Transfer amount
 * - Transfer type (direct or approval)
 * Used for managing and tracking token ownership changes.
 * @category Interfaces
 * @subcategory Transfers
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a direct token transfer
 * const tokenTransfer: _IToken = {
 *   token_id: "0.0.1234",
 *   account: "0.0.5678",
 *   amount: 1000,              // Transfer 1000 tokens
 *   is_approval: false
 * };
 * 
 * // Example of a token approval
 * const tokenApproval: _IToken = {
 *   token_id: "0.0.1234",
 *   account: "0.0.5678",       // Approved spender
 *   amount: 5000,              // Approve spending of 5000 tokens
 *   is_approval: true
 * };
 * 
 * // Example of validating a token transfer
 * const validateTokenTransfer = (transfer: _IToken): boolean => {
 *   const idPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   return (
 *     idPattern.test(transfer.token_id ?? "") &&
 *     idPattern.test(transfer.account ?? "") &&
 *     transfer.amount !== 0
 *   );
 * };
 * ```
 */
export interface _IToken {
    /**
     * Token ID
     * @type {string}
     * @description The Hedera token ID of the fungible token.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (may be undefined for special operations)
     * - Must be a valid Hedera token ID
     * - Must represent a fungible token
     * - Used to identify the token being transferred
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IToken
     * @since 2.0.0
     * @example "0.0.1234"
     */
    token_id?: string;

    /**
     * Account ID
     * @type {string}
     * @description The Hedera account ID involved in the transfer operation.
     * Format: `shard.realm.num` (e.g., "0.0.5678")
     * Properties:
     * - Optional field (may be undefined for special operations)
     * - Must be a valid Hedera account ID when specified
     * - Used for both source and destination accounts
     * - Must be authorized for token operations
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IToken
     * @since 2.0.0
     * @example "0.0.5678"
     */
    account?: string;

    /**
     * Transfer Amount
     * @type {number}
     * @description The quantity of tokens to transfer or approve.
     * Properties:
     * - Required field
     * - Must be a non-zero integer
     * - Positive values indicate incoming transfers
     * - Negative values indicate outgoing transfers
     * - Must not exceed available balance for transfers
     * @required true
     * @memberof _IToken
     * @since 2.0.0
     * @example 1000  // Transfer 1000 tokens
     */
    amount: number;

    /**
     * Approval Flag
     * @type {boolean}
     * @description Indicates whether this transfer represents an approval operation.
     * Properties:
     * - Optional field (defaults to false)
     * - true: represents a token allowance grant
     * - false: represents a direct token transfer
     * Used for distinguishing between direct transfers and approval operations.
     * @required false
     * @default false
     * @memberof _IToken
     * @since 2.0.0
     * @example true  // Indicates an approval operation
     */
    is_approval?: boolean;
}