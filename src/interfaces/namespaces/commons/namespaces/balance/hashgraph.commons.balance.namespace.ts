import { _ITokensInner } from './interfaces/hashgraph.commons.balance.balance-tokens-inner.interface';
import { _IEntity } from './interfaces/hashgraph.commons.balance.entity.interface';

/**
 * Balance Namespace
 * @namespace _IBalance
 * @description Namespace containing interfaces related to balance information in the Hashgraph network.
 * This namespace provides comprehensive types for managing and tracking account balances,
 * including both HBAR and custom token balances.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Balance
 * @public
 * @remarks
 * The Balance namespace is essential for financial operations within the Hedera network.
 * It provides structured types for representing and managing various forms of value,
 * ensuring accurate balance tracking and token management.
 * @see _IEntity
 * @see _ITokensInner
 * @example
 * ```typescript
 * // Using the balance interfaces
 * const balance: _IBalance.IEntity = {
 *   timestamp: "2023-04-15T14:30:00Z",
 *   balance: 1000000000,
 *   tokens: [
 *     {
 *       token_id: "0.0.1234",
 *       balance: 1000000
 *     }
 *   ]
 * };
 * ```
 */
export namespace _IBalance {
    /**
     * Entity Interface Type
     * @type {_IEntity}
     * @memberof _IBalance
     * @description Represents the balance information for an account, including timestamp, balance, and associated tokens.
     * Provides a complete snapshot of an account's financial state at a specific point in time.
     * @see {@link _IEntity} for detailed interface definition
     * @since 2.0.0
     * @remarks
     * - Used for tracking both HBAR and token balances
     * - Includes timestamp for point-in-time balance representation
     * - Supports multiple token types and denominations
     * @example
     * ```typescript
     * const accountBalance: _IBalance.IEntity = {
     *   timestamp: "2023-04-15T14:30:00Z",
     *   balance: 1000000000,
     *   tokens: []
     * };
     * ```
     */
    export type IEntity = _IEntity

    /**
     * Tokens Inner Interface Type
     * @type {_ITokensInner}
     * @memberof _IBalance
     * @description Represents the inner structure of balance tokens in Hashgraph Restful API responses.
     * Defines the format for individual token balance entries within an account.
     * @see {@link _ITokensInner} for detailed interface definition
     * @since 2.0.0
     * @remarks
     * - Used for representing individual token balances
     * - Part of the token balance array in account entities
     * - Includes token identification and amount information
     * @example
     * ```typescript
     * const tokenBalance: _IBalance.ITokensInner = {
     *   token_id: "0.0.1234",
     *   balance: 1000000
     * };
     * ```
     */
    export type ITokensInner = _ITokensInner
}