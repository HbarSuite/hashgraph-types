import { Hbar } from "@hashgraph/sdk"
import { IHashgraph } from '../hashgraph.namespace'

/**
 * Account Balance Interface
 * @export
 * @interface _IAccountBalance
 * @namespace IHashgraph._IAccountBalance
 * @description Represents the balance information for a Hashgraph account, including HBAR and token balances.
 * This interface provides a comprehensive view of an account's assets, including both native HBAR
 * cryptocurrency and any associated tokens.
 * @property {string} wallet - The unique identifier for the account, typically in the format of 0.0.xxx
 * @property {Hbar} hbars - The current balance of HBAR cryptocurrency in the account
 * @property {Array<IHashgraph.ITokenBalance>} tokens - An array of token balances held by the account
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Account balances are fundamental to the Hedera network, representing both HBAR and token holdings.
 * All balances are real-time values at the moment of query.
 * @see IHashgraph._ITokenBalance
 * @see Hbar
 * @example
 * ```typescript
 * const accountBalance: _IAccountBalance = {
 *   wallet: "0.0.123456",
 *   hbars: new Hbar(100),
 *   tokens: []
 * };
 * ```
 */
export interface _IAccountBalance {
    /**
     * The wallet address or account ID
     * @property {string} wallet
     * @memberof _IAccountBalance
     * @type {string}
     * @description The unique identifier for the account, typically in the format of 0.0.xxx.
     * This ID is used across the Hedera network to identify the account.
     * @required
     * @since 2.0.0
     * @throws {Error} If wallet address format is invalid
     * @remarks
     * - Must be in valid Hedera account ID format (shard.realm.number)
     * - Used for all account-related operations
     * - Immutable once assigned
     * @example "0.0.123456"
     */
    wallet: string

    /**
     * The HBAR balance of the account
     * @property {Hbar} hbars
     * @memberof _IAccountBalance
     * @type {Hbar}
     * @description The current balance of HBAR cryptocurrency in the account.
     * Represented using the Hbar class for precise calculations.
     * @required
     * @since 2.0.0
     * @throws {Error} If HBAR balance is negative or invalid
     * @remarks
     * - Must be non-negative
     * - Used for transaction fees and transfers
     * - Updates in real-time with network operations
     * @see Hbar
     * @example new Hbar(100)
     */
    hbars: Hbar

    /**
     * The token balances associated with the account
     * @property {Array<IHashgraph.ITokenBalance>} tokens
     * @memberof _IAccountBalance
     * @type {Array<IHashgraph.ITokenBalance>}
     * @description An array of token balances, each representing a different token held by the account.
     * Includes all tokens associated with this account.
     * @required
     * @since 2.0.0
     * @throws {Error} If any token balance in the array is invalid
     * @remarks
     * - Can be empty if no tokens are held
     * - Each entry contains token ID, balance, and decimals
     * - Updated in real-time with token transactions
     * @see IHashgraph._ITokenBalance
     * @example []
     */
    tokens: Array<IHashgraph.ITokenBalance>
}