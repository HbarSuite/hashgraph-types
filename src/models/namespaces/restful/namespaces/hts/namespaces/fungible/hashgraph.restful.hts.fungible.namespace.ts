/**
 * @file hashgraph.restful.hts.fungible.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for Fungible Token operations in the Hashgraph Token Service (HTS) REST API.
 * This namespace consolidates interfaces and types related to fungible token management.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

import { _Entity } from "./models/hashgraph.restful.hts.fungible.entity.model";

/**
 * Fungible Token Namespace
 * @namespace _Fungible
 * @description Provides interfaces and types for working with Fungible Tokens
 * on the Hedera network through the REST API. Includes definitions for token
 * balances, transfers, and account holdings.
 * @public
 * 
 * @example
 * ```typescript
 * // Example usage of fungible token types
 * const tokenHolding: _Fungible.IEntity = {
 *   account: "0.0.123456",      // Account holding tokens
 *   balance: "1000000",         // Raw balance amount
 *   decimals: 8                 // Decimal precision
 * };
 * ```
 */
export namespace _Fungible {
    /**
     * Fungible Token Entity Model
     * @class IEntity
     * @extends {_Entity}
     * @description Represents a fungible token holding on the Hashgraph network.
     * This class implements the essential properties that characterize a fungible token balance, including:
     * - Account ownership information
     * - Token balance and decimal precision
     * - Token identification
     * @category Models
     * @subcategory HTS
     * @since 2.0.0
     */
    export class Entity extends _Entity {}
}