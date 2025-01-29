import Decimal from "decimal.js"

/**
 * Token Balance Interface
 * @export
 * @interface _ITokenBalance
 * @namespace IHashgraph._ITokenBalance
 * @description Represents the balance information for a specific token.
 * This interface provides detailed information about a token's balance and its
 * decimal precision, ensuring accurate representation of token amounts.
 * @property {string} tokenId - The unique identifier of the token
 * @property {Decimal} balance - The current balance of the token
 * @property {Decimal} decimals - The number of decimal places for the token
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Token balances are represented using the Decimal.js library to ensure precise
 * numerical calculations without floating-point errors.
 * @see Decimal
 * @see IHashgraph._IAccountBalance
 * @example
 * ```typescript
 * const tokenBalance: _ITokenBalance = {
 *   tokenId: "0.0.123456",
 *   balance: new Decimal(1000),
 *   decimals: new Decimal(8)
 * };
 * ```
 */
export interface _ITokenBalance {
    /**
     * The unique identifier of the token
     * @property {string} tokenId
     * @memberof _ITokenBalance
     * @type {string}
     * @description Unique identifier for the token on the Hashgraph network.
     * Must be in the format of `shard.realm.number` (e.g., 0.0.123456).
     * @required
     * @since 2.0.0
     * @throws {Error} If the token ID format is invalid
     * @remarks
     * - Must reference an existing token on the network
     * - Format follows the standard Hedera token ID format
     * @example "0.0.123456"
     */
    tokenId: string

    /**
     * The balance of the token
     * @property {Decimal} balance
     * @memberof _ITokenBalance
     * @type {Decimal}
     * @description The current balance of the token held by an account.
     * Uses Decimal.js for precise numerical representation.
     * @required
     * @since 2.0.0
     * @throws {Error} If the balance is negative or invalid
     * @remarks
     * - Must be a non-negative value
     * - Represents the raw token amount (before decimal adjustment)
     * - Use with decimals property to get the actual token amount
     * @see Decimal
     * @example new Decimal(1000)
     */
    balance: Decimal

    /**
     * The number of decimal places for the token
     * @property {Decimal} decimals
     * @memberof _ITokenBalance
     * @type {Decimal}
     * @description The number of decimal places used to represent the token's smallest unit.
     * Used for proper display and calculation of token amounts.
     * @required
     * @since 2.0.0
     * @throws {Error} If decimals is negative or exceeds maximum allowed
     * @remarks
     * - Must be a non-negative integer
     * - Maximum value depends on token type (typically 18 for fungible tokens)
     * - Used to calculate the display amount: balance / (10 ^ decimals)
     * @see Decimal
     * @example new Decimal(8)
     */
    decimals: Decimal
}