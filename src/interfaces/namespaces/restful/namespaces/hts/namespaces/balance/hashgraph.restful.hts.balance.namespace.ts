/**
 * @file hashgraph.restful.hts.balance.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace and types for managing token balances in the Hashgraph Token Service (HTS).
 * This file contains the core balance-related interfaces and type definitions used throughout the HTS REST API.
 * @category Namespaces
 * @subcategory HTS
 * @since 2.0.0
 */

import { _IEntity } from './interfaces/hashgraph.restful.hts.balance.entity.interface'
import { _IInner } from './interfaces/hashgraph.restful.hts.balance.inner.interface'
import { _IResponse } from './interfaces/hashgraph.restful.hts.balance.response.interface'

/**
 * Hashgraph Token Service Balance Namespace
 * @namespace _IBalance
 * @description Contains types and interfaces related to token balances in the Hashgraph Token Service (HTS).
 * This namespace provides comprehensive type definitions for managing and querying token balances,
 * including entity structures, response formats, and detailed balance information.
 * @category Namespaces
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example usage of balance namespace types
 * const tokenBalance: _IBalance.IEntity = {
 *   token_id: "0.0.1234567",  // Unique token identifier
 *   balance: 1000000          // Token balance amount
 * };
 * 
 * const balanceResponse: _IBalance.IResponse = {
 *   timestamp: "2023-01-01T00:00:00Z",
 *   balances: [tokenBalance],
 *   links: {
 *     next: "/api/balances?page=2"
 *   }
 * };
 * ```
 */
export namespace _IBalance {
    /**
     * Token Balance Entity
     * @type {_IEntity}
     * @description Represents a single token balance entity in the Hashgraph Token Service.
     * Contains essential information about a token's balance including:
     * - Token identifier (token_id)
     * - Balance amount
     * - Associated metadata
     * Used for tracking individual token holdings and performing balance-related operations.
     * @see {@link _IEntity} For detailed property definitions
     * @memberof _IBalance
     * @since 2.0.0
     */
    export type IEntity = _IEntity

    /**
     * Token Balance Response
     * @type {_IResponse}
     * @description Represents the standardized response structure for token balance queries.
     * Includes:
     * - Timestamp of the balance query
     * - Array of token balances
     * - Pagination links for navigating large result sets
     * - Additional metadata about the query results
     * Used for handling API responses related to balance inquiries.
     * @see {@link _IResponse} For detailed response structure
     * @memberof _IBalance
     * @since 2.0.0
     */
    export type IResponse = _IResponse

    /**
     * Token Balance Inner
     * @type {_IInner}
     * @description Represents the detailed token distribution and balance information structure.
     * Provides comprehensive account-specific token details including:
     * - Account identifier
     * - Token balance amounts
     * - Decimal precision information
     * - Token-specific metadata
     * Used for detailed balance reporting and account-level token management.
     * @see {@link _IInner} For detailed property definitions
     * @memberof _IBalance
     * @since 2.0.0
     */
    export type IInner = _IInner
}