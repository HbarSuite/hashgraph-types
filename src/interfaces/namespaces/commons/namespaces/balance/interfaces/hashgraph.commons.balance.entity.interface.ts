import { _ITokensInner } from './hashgraph.commons.balance.balance-tokens-inner.interface'

/**
 * Balance Entity Interface
 * @export
 * @interface _IEntity
 * @namespace IHashgraph.ICommons.IBalance._IEntity
 * @description Represents the balance information for an account, including timestamp, balance, and associated tokens.
 * This interface provides a comprehensive snapshot of an account's financial state at a specific point in time,
 * including both HBAR and custom token balances.
 * @property {string} timestamp - ISO 8601 formatted timestamp indicating when the balance information was captured
 * @property {number} balance - The balance of the account in tinybars (1 tinybar = 10^-8 HBAR)
 * @property {Array<_ITokensInner>} tokens - An array of token balances associated with the account
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Balance
 * @public
 * @remarks
 * The balance entity is a fundamental component for tracking account value in the Hedera network.
 * It combines native HBAR balance with custom token holdings, providing a complete financial picture.
 * All monetary values are stored in their smallest units (tinybars for HBAR) for precision.
 * @see _ITokensInner
 * @example
 * ```typescript
 * const balanceEntity: _IEntity = {
 *   timestamp: "2023-04-15T14:30:00Z",
 *   balance: 1000000000, // 10 HBAR
 *   tokens: [
 *     {
 *       token_id: "0.0.1234",
 *       balance: 1000000
 *     }
 *   ]
 * };
 * ```
 */
export interface _IEntity {
    /**
     * The timestamp of when the balance was recorded
     * @property {string} timestamp
     * @memberof _IEntity
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the balance information was captured.
     * Provides temporal context for the balance snapshot.
     * @required
     * @since 2.0.0
     * @throws {Error} If timestamp format is invalid
     * @remarks
     * - Must be in valid ISO 8601 format
     * - Used for balance history and tracking
     * - Represents network time of balance query
     * @example "2023-04-15T14:30:00Z"
     */
    timestamp: string

    /**
     * The account balance
     * @property {number} balance
     * @memberof _IEntity
     * @type {number}
     * @description The balance of the account in tinybars (1 tinybar = 10^-8 HBAR).
     * Represents the native HBAR cryptocurrency balance of the account.
     * @required
     * @minimum 0
     * @since 2.0.0
     * @throws {Error} If balance is negative
     * @remarks
     * - Must be a non-negative integer
     * - Stored in tinybars for maximum precision
     * - Convert to HBAR by dividing by 10^8
     * @example 1000000000 // Represents 10 HBAR
     */
    balance: number

    /**
     * The tokens associated with the account
     * @property {Array<_ITokensInner>} tokens
     * @memberof _IEntity
     * @type {Array<_ITokensInner>}
     * @description An array of token balances associated with the account.
     * Contains all custom tokens held by the account with their respective balances.
     * @required
     * @since 2.0.0
     * @throws {Error} If any token balance is invalid
     * @remarks
     * - Can be empty if no tokens are held
     * - Each entry includes token ID and balance
     * - Token balances use token-specific decimal places
     * @see _ITokensInner
     * @example [{ token_id: "0.0.1234", balance: 1000000 }]
     */
    tokens: Array<_ITokensInner>
}