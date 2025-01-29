/**
 * @file hashgraph.restful.hts.balance.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the token balance structure for the Hashgraph Token Service (HTS) REST API.
 * This interface represents individual token balances and their associated metadata.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Hashgraph Token Balance Entity Interface
 * @interface _IEntity
 * @description Represents a token balance entity on the Hashgraph Token Service (HTS).
 * This interface defines the structure for tracking individual token balances associated
 * with accounts on the Hashgraph network, including the token identifier and its quantity.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a token balance entity
 * const tokenBalance: _IEntity = {
 *   token_id: "0.0.1234567",  // The unique identifier of the token
 *   balance: 1000000          // The balance amount (considering token decimals)
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Token ID
     * @type {string | null}
     * @description The unique identifier of the token on the Hashgraph network.
     * This ID uniquely identifies the token for which the balance is being tracked.
     * Format: `shard.realm.num` (e.g., "0.0.1234567")
     * A null value indicates an unassigned or invalid token ID.
     * @required true
     * @example "0.0.1234567"
     * @memberof _IEntity
     * @since 2.0.0
     */
    token_id: string | null;

    /**
     * Balance
     * @type {number}
     * @description The current balance of the token held by the associated account.
     * This value represents the number of token units, taking into account the token's decimal places.
     * For fungible tokens, this represents the total amount.
     * For non-fungible tokens, this represents the number of NFTs held.
     * Must be a non-negative number.
     * @required true
     * @minimum 0
     * @example 1000000
     * @memberof _IEntity
     * @since 2.0.0
     */
    balance: number;
}