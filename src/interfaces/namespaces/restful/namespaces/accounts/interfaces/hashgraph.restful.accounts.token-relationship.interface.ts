/**
 * @file hashgraph.restful.accounts.token-relationship.interface.ts
 * @namespace IHashgraph.IRestful._IAccounts
 * @description Defines the response structure for token relationship queries in the Hedera REST API
 */

import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Interface representing the response structure for token relationship queries
 * @interface _ITokenRelationshipResponse
 * @description Defines the standardized response format for token relationship API endpoints,
 * providing information about tokens associated with an account and pagination controls
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const response: _ITokenRelationshipResponse = {
 *   tokens: [{
 *     tokenId: "0.0.123456",
 *     balance: 1000,
 *     frozen: false,
 *     kyc_status: true
 *   }],
 *   links: {
 *     next: "/api/v1/accounts/0.0.123456/tokens?page=2"
 *   }
 * };
 * ```
 */
export interface _ITokenRelationshipResponse {
    /**
     * List of token relationships
     * @property {Array<IHashgraph.IRestful.IHTS.IRelationship.IEntity>} tokens
     * @description Array containing detailed information about the tokens associated with the account,
     * including balances, permissions, and other relationship attributes
     * @type {Array<IHashgraph.IRestful.IHTS.IRelationship.IEntity>}
     * @memberof _ITokenRelationshipResponse
     * @required
     */
    tokens: Array<IHashgraph.IRestful.IHTS.IRelationship.IEntity>

    /**
     * Pagination links
     * @property {IHashgraph.IRestful.ILinks} links
     * @description Navigation links for paginated results, including next, previous, and other relevant URLs
     * @type {IHashgraph.IRestful.ILinks}
     * @memberof _ITokenRelationshipResponse
     * @required
     */
    links: IHashgraph.IRestful.ILinks
}
