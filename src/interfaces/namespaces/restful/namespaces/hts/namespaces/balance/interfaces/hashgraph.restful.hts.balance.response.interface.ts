import { _IRestful } from '../../../../../hashgraph.restful.namespace'
import { _ITokensInner } from '../../../../../../commons/namespaces/balance/interfaces/hashgraph.commons.balance.balance-tokens-inner.interface'
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * @file hashgraph.restful.hts.balance.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for token balance queries in the Hashgraph Token Service (HTS) REST API.
 * This interface represents the complete response format including balance data, timestamps, and navigation links.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Hashgraph Token Balances Response Interface
 * @interface _IResponse
 * @description Represents the complete response structure for token balance queries from the Hashgraph Token Service (HTS).
 * This interface defines the format of responses containing token balance information, including timestamps
 * for data freshness, detailed balance information for multiple tokens, and HATEOAS navigation links
 * for API traversal.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a token balance response
 * const response: _IResponse = {
 *   timestamp: "2023-01-01T12:00:00.000Z",  // When the data was retrieved
 *   balances: [{
 *     account: "0.0.1234567",               // Account holding the tokens
 *     balance: 1000000,                     // Total balance
 *     tokens: [{                            // Individual token details
 *       token_id: "0.0.7654321",
 *       balance: 500000,
 *       decimals: 8
 *     }]
 *   }],
 *   links: {                                // HATEOAS navigation links
 *     next: "/api/v1/tokens/balances?page=2",
 *     self: "/api/v1/tokens/balances?page=1"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the balance information was retrieved.
     * This timestamp helps track data freshness and can be used for caching purposes.
     * Format: ISO 8601 (e.g., "2023-01-01T12:00:00.000Z")
     * @required false
     * @example "2023-01-01T12:00:00.000Z"
     * @memberof _IResponse
     * @since 2.0.0
     */
    timestamp?: string | null;

    /**
     * Token Balances
     * @type {Array<IHashgraph.IRestful.IHTS.IBalance.IInner>}
     * @description Array containing detailed information about token balances across different accounts.
     * Each element provides comprehensive token balance details including account information,
     * token-specific balances, and associated metadata as defined in the IInner interface.
     * @required false
     * @see IHashgraph.IRestful.IHTS.IBalance.IInner
     * @memberof _IResponse
     * @since 2.0.0
     */
    balances?: Array<IHashgraph.IRestful.IHTS.IBalance.IInner>;

    /**
     * Navigation Links
     * @type {_IRestful.ILinks}
     * @description HATEOAS (Hypermedia as the Engine of Application State) links for API navigation.
     * These links facilitate pagination and resource discovery, including references to:
     * - next: Link to the next page of results
     * - prev: Link to the previous page of results
     * - self: Link to the current resource
     * @required true
     * @see _IRestful.ILinks
     * @memberof _IResponse
     * @since 2.0.0
     */
    links?: _IRestful.ILinks;
}