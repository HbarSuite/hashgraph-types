/**
 * @file hashgraph.restful.accounts.token-allowance.interface.ts
 * @namespace IHashgraph.IRestful._IAccounts
 * @description Defines interfaces for token allowance operations in the Hedera REST API
 */

import { IHashgraph } from '../../../../../hashgraph.namespace';

/**
 * Interface representing a token allowance query parameters
 * @interface _ITokenAllowance
 * @description Defines the structure for querying token allowances with various filters and pagination options
 * @property {string} idOrAliasOrEvmAddress - The account identifier, alias, or EVM address to query allowances for
 * @property {string} [spenderId] - Optional filter for a specific spender account
 * @property {string} [tokenId] - Optional filter for a specific token
 * @property {number} [limit] - Optional limit for the number of results to return
 * @property {'asc' | 'desc'} [order] - Optional sort order for the results
 */
export interface _ITokenAllowance {
    idOrAliasOrEvmAddress: string;
    spenderId?: string;
    tokenId?: string;
    limit?: number;
    order?: 'asc' | 'desc';
}

/**
 * Interface representing the response structure for token allowance queries
 * @interface _ITokenAllowanceResponse
 * @description Defines the structure of the API response for token allowance-related queries
 * @property {Array<_ITokenAllowance>} allowances - Array of token allowance objects
 * @property {IHashgraph.IRestful.ILinks} links - Navigation links for pagination
 */
export interface _ITokenAllowanceResponse {
    allowances: Array<_ITokenAllowance>;
    links: IHashgraph.IRestful.ILinks;
} 