/**
 * Inner Token Balance Interface
 * @export
 * @interface _ITokensInner
 * @namespace IHashgraph.ICommons.IBalance._ITokensInner
 * @description Represents the inner structure of token balance information in Hashgraph Restful API responses.
 * This interface defines the format for individual token balance entries within an account's token holdings,
 * providing essential information about specific token balances.
 * @property {string | null} token_id - The unique identifier of the token
 * @property {number} balance - The balance amount of the token
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Balance
 * @public
 * @remarks
 * Token balances are represented in their smallest units, with the actual value
 * depending on the token's decimal places. The interface supports both fungible
 * and non-fungible tokens through its flexible structure.
 * @see IHashgraph.ICommons.IBalance._IEntity
 * @example
 * ```typescript
 * const tokenBalance: _ITokensInner = {
 *   token_id: "0.0.1234",
 *   balance: 1000000
 * };
 * ```
 */
export interface _ITokensInner {
    /**
     * The unique identifier of the token
     * @property {string | null} token_id
     * @memberof _ITokensInner
     * @type {string | null}
     * @description Unique identifier for the token on the Hashgraph network.
     * Must be in the format of `shard.realm.number` (e.g., 0.0.1234) or null.
     * @optional
     * @since 2.0.0
     * @throws {Error} If token_id format is invalid when provided
     * @remarks
     * - Must follow Hedera token ID format when provided
     * - Null value indicates a pending or unassigned token
     * - Used for token identification and operations
     * @example "0.0.1234"
     */
    token_id?: string | null;

    /**
     * The balance amount of the token
     * @property {number} balance
     * @memberof _ITokensInner
     * @type {number}
     * @description The current balance amount held for this token.
     * Represents the number of token units in the smallest denomination.
     * @optional
     * @since 2.0.0
     * @throws {Error} If balance is negative
     * @remarks
     * - Must be a non-negative integer
     * - Actual value depends on token's decimal places
     * - For NFTs, represents the number of NFTs held
     * @example 1000000
     */
    balance?: number;
}