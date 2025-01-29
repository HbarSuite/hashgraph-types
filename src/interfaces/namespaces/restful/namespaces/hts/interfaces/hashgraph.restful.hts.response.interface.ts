import { _IRestful } from '../../../hashgraph.restful.namespace'
import { _IHTS } from '../hashgraph.restful.hts.namespace'

/**
 * @file hashgraph.restful.hts.response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the response structure for token queries in the Hashgraph Token Service (HTS) REST API.
 * This interface represents the complete response format including token data and navigation links.
 * @since 2.0.0
 */

/**
 * Hashgraph Tokens Response Interface
 * @interface _IResponse
 * @description Represents the complete response structure for token queries from the Hashgraph Token Service (HTS).
 * This interface defines the format of responses containing token information and HATEOAS navigation links
 * for API traversal.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a token response
 * const response: _IResponse = {
 *   tokens: [{
 *     tokenId: "0.0.1234",
 *     name: "MyToken",
 *     symbol: "MTK", 
 *     decimals: 8,
 *     totalSupply: "1000000",
 *     maxSupply: "2000000",
 *     treasury: "0.0.5678"
 *   }],
 *   links: {
 *     next: "/api/v1/tokens?limit=100&start=0.0.1235",
 *     self: "/api/v1/tokens?limit=100&start=0.0.1234"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Tokens Array
     * @type {Array<_IHTS.IToken>}
     * @description Array containing detailed information about tokens in the Hashgraph network.
     * Each element provides comprehensive token details including:
     * - Token identifier
     * - Token name and symbol
     * - Supply information
     * - Treasury account
     * - Custom fees
     * - Token properties and configuration
     * @required false
     * @see {@link _IHTS.IToken} for detailed token property definitions
     * @memberof _IResponse
     * @since 2.0.0
     */
    tokens?: Array<_IHTS.IToken>;

    /**
     * Navigation Links
     * @type {_IRestful.ILinks}
     * @description HATEOAS (Hypermedia as the Engine of Application State) links for API navigation.
     * These links facilitate pagination and resource discovery, including references to:
     * - next: Link to the next page of results
     * - previous: Link to the previous page of results
     * - self: Link to the current page
     * Used for traversing large token datasets in a RESTful manner.
     * @required false
     * @see {@link _IRestful.ILinks} for detailed link property definitions
     * @memberof _IResponse
     * @since 2.0.0
     */
    links?: _IRestful.ILinks;
}