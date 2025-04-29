/**
 * @file hashgraph.restful.hts.fungible.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for Fungible Token operations in the Hashgraph Token Service (HTS) REST API.
 * This namespace consolidates interfaces and types related to fungible token management.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

import { _IEntity } from "./interfaces/hashgraph.restful.hts.fungible.entity.interface";

/**
 * Fungible Token Namespace
 * @namespace _IFungible
 * @description Provides interfaces and types for working with Fungible Tokens
 * on the Hedera network through the REST API. Includes definitions for token
 * balances, transfers, and account holdings.
 * @public
 * 
 * @example
 * ```typescript
 * // Example usage of fungible token types
 * const tokenHolding: _IFungible.IEntity = {
 *   account: "0.0.123456",      // Account holding tokens
 *   balance: "1000000",         // Raw balance amount
 *   decimals: 8                 // Decimal precision
 * };
 * ```
 */
export namespace _IFungible {
    /**
     * Fungible Token Entity Interface
     * @description Defines the structure for fungible token holdings and balances.
     * Includes account ownership, balance information, and token properties.
     * @type {_IEntity}
     * @see {@link _IEntity} for detailed property definitions
     * @public
     */
    export type IEntity = _IEntity
}