import { _ITransfer } from './namespaces/transfer/hashgraph.ledger.account.request.transfer.namespace'
import { _IAllowanceApproval } from './interfaces/hashgraph.ledger.account.request.allowance-approval.interface'
import { _IAllowanceDelete } from './interfaces/hashgraph.ledger.account.request.allowance-delete.interface'
import { _ICreate } from './interfaces/hashgraph.ledger.account.request.create.interface'
import { _IDelete } from './interfaces/hashgraph.ledger.account.request.delete.interface'
import { _IUpdate } from './interfaces/hashgraph.ledger.account.request.update.interface'

/**
 * Comprehensive namespace for all Hashgraph account operation requests
 * @namespace _IRequest
 * @description Centralizes all request interfaces for Hashgraph account operations, including:
 * - Account lifecycle management (create, update, delete)
 * - Permission management (allowances, approvals)
 * - Asset operations (transfers, token management)
 * @export
 * @since 2.0.0
 * @category Namespaces
 * @subcategory Account
 * @remarks
 * This namespace serves as the primary entry point for all account-related operations
 * on the Hedera network. It provides type-safe interfaces for every supported
 * account management operation.
 * @example
 * ```typescript
 * // Example of using various request types
 * const createRequest: _IRequest.ICreate = {
 *   // Account creation parameters
 * };
 * 
 * const updateRequest: _IRequest.IUpdate = {
 *   // Account update parameters
 * };
 * 
 * const transferRequest: _IRequest.ITransfer = {
 *   // Transfer operation parameters
 * };
 * ```
 */
export namespace _IRequest {
    /**
     * Type definition for account deletion requests
     * @type {_IDelete}
     * @description Specifies the parameters required to delete an existing Hashgraph account
     * @memberof _IRequest
     * @see _IDelete
     * @remarks
     * - Account deletion is permanent and cannot be undone
     * - Requires appropriate authorization
     * - May have implications for associated tokens and contracts
     */
    export type IDelete = _IDelete

    /**
     * Type definition for account update requests
     * @type {_IUpdate}
     * @description Defines the modifiable parameters for existing Hashgraph accounts
     * @memberof _IRequest
     * @see _IUpdate
     * @remarks
     * - Supports partial updates
     * - Maintains account ID and other immutable properties
     * - Allows modification of keys, thresholds, and other mutable settings
     */
    export type IUpdate = _IUpdate

    /**
     * Type definition for account creation requests
     * @type {_ICreate}
     * @description Specifies all parameters needed to create a new Hashgraph account
     * @memberof _IRequest
     * @see _ICreate
     * @remarks
     * - Defines initial account configuration
     * - Sets up security parameters
     * - Establishes initial balance and properties
     */
    export type ICreate = _ICreate

    /**
     * Type definition for allowance approval requests
     * @type {_IAllowanceApproval}
     * @description Defines parameters for granting and managing account allowances
     * @memberof _IRequest
     * @see _IAllowanceApproval
     * @remarks
     * - Used for delegating spending authority
     * - Supports both fungible and non-fungible tokens
     * - Enables granular permission control
     */
    export type IAllowanceApproval = _IAllowanceApproval

    /**
     * Type definition for allowance deletion requests
     * @type {_IAllowanceDelete}
     * @description Specifies parameters for revoking previously granted allowances
     * @memberof _IRequest
     * @see _IAllowanceDelete
     * @remarks
     * - Primarily used for NFT allowance management
     * - Requires appropriate authorization
     * - Affects existing delegated permissions
     */
    export type IAllowanceDelete = _IAllowanceDelete

    /**
     * Interface for account transfer operations
     * @property {_ITransfer} ITransfer
     * @description Comprehensive interface for managing all types of transfers between accounts
     * @type {_ITransfer}
     * @memberof _IRequest
     * @see _ITransfer
     * @remarks
     * - Supports HBAR transfers
     * - Handles token transfers
     * - Manages atomic swaps
     * - Includes multi-party transactions
     */
    export import ITransfer = _ITransfer
}