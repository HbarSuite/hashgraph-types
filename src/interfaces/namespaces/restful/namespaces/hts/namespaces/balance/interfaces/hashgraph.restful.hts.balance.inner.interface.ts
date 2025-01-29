import { _ITokensInner } from '../../../../../../commons/namespaces/balance/interfaces/hashgraph.commons.balance.balance-tokens-inner.interface';

/**
 * @file hashgraph.restful.hts.balance.inner.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the detailed token distribution interface for the Hashgraph Token Service (HTS) REST API.
 * This interface provides comprehensive token balance information including account details and token metadata.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Distribution Inner Interface
 * @interface _IInner
 * @description Represents the detailed token distribution information for an account on the Hashgraph Token Service (HTS).
 * This interface provides a comprehensive structure for tracking token balances, associated metadata,
 * and account information. It is typically used as part of token balance queries and distribution reports.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a token distribution record
 * const distribution: _IInner = {
 *   account: "0.0.1234567",    // The account holding the tokens
 *   balance: 1000000,          // Total balance across all tokens
 *   tokens: [{                 // Detailed information for each token
 *     token_id: "0.0.7654321",
 *     balance: 500000,
 *     decimals: 8
 *   }]
 * };
 * ```
 */
export interface _IInner {
    /**
     * Account ID
     * @type {string | null}
     * @description The unique identifier of the account holding the token balance on the Hashgraph network.
     * Format: `shard.realm.num` (e.g., "0.0.1234567")
     * This ID uniquely identifies the account for which token balances are being tracked.
     * A null value indicates an unassigned or invalid account ID.
     * @required true
     * @example "0.0.1234567"
     * @memberof _IInner
     * @since 2.0.0
     */
    account: string | null;

    /**
     * Token Balance
     * @type {number}
     * @description The aggregate balance of all tokens held by the associated account.
     * This value represents the total number of token units across all token types,
     * taking into account each token's decimal places. Must be a non-negative number.
     * For accurate per-token balances, refer to the tokens array.
     * @required true
     * @minimum 0
     * @example 1000000
     * @memberof _IInner
     * @since 2.0.0
     */
    balance: number;

    /**
     * Token Details Array
     * @type {Array<_ITokensInner>}
     * @description An array containing detailed information about each token held by the account.
     * Each element provides specific token information including token ID, balance, and decimal places.
     * This array allows tracking multiple token balances for a single account.
     * @required true
     * @see _ITokensInner
     * @memberof _IInner
     * @since 2.0.0
     */
    tokens: Array<_ITokensInner>;
}