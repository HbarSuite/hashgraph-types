/**
 * @file hashgraph.restful.accounts.response.interface.ts
 * @namespace IHashgraph.IRestful._IAccounts
 * @description Defines the response structure for account-related queries in the Hedera REST API
 */

import { _IInfo } from './hashgraph.restful.accounts.info.interface';
import { IHashgraph } from '../../../../../hashgraph.namespace';

/**
 * Interface representing the standard response structure for account queries
 * @interface _IResponse
 * @description Defines the standardized response format for account-related API endpoints,
 * including the list of account information and pagination controls
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const response: _IResponse = {
 *   accounts: [{
 *     account: "0.0.123456",
 *     balance: { balance: 1000, tokens: [] }
 *   }],
 *   links: {
 *     next: "/api/v1/accounts?page=2"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * List of account information
     * @property {Array<_IInfo>} accounts
     * @description Array containing detailed information about multiple accounts
     * @type {Array<_IInfo>}
     * @memberof _IResponse
     * @required
     */
    accounts?: Array<_IInfo>

    /**
     * Pagination links
     * @property {IHashgraph.IRestful.ILinks} links
     * @description Navigation links for paginated results, including next, previous, and other relevant URLs
     * @type {IHashgraph.IRestful.ILinks}
     * @memberof _IResponse
     * @required
     */
    links?: IHashgraph.IRestful.ILinks
} 