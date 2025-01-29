import { _IAllowance, _IAllowanceResponse } from './interfaces/hashgraph.restful.accounts.allowance.interface';
import { _IInfo } from './interfaces/hashgraph.restful.accounts.info.interface';
import { _INftAllowance, _INftAllowanceResponse } from './interfaces/hashgraph.restful.accounts.nft-allowance.interface';
import { _IResponse } from './interfaces/hashgraph.restful.accounts.response.interface';
import { _ITokenAllowance, _ITokenAllowanceResponse } from './interfaces/hashgraph.restful.accounts.token-allowance.interface';
import { _ITokenRelationshipResponse } from './interfaces/hashgraph.restful.accounts.token-relationship.interface';

/**
 * @file accounts.namespace.ts
 * @module @hashgraph/sdk
 * @description Namespace containing interfaces and types for Hashgraph accounts in REST API context
 * @since 2.0.0
 */

/**
 * Accounts Namespace
 * @namespace _IAccounts
 * @description Namespace for Hashgraph account-related interfaces and types within the REST API context.
 * This namespace provides type definitions and interfaces for working with account information,
 * balances, and other account-related data through the REST API.
 * @memberof IHashgraph.IRestful
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example usage of accounts namespace
 * const accountInfo: IHashgraph.IRestful._IAccounts.IInfo = {
 *   account: "0.0.123456",
 *   balance: {
 *     balance: 1000,
 *     tokens: []
 *   }
 * };
 * ```
 */
export namespace _IAccounts {
    /**
     * Account Information Type
     * @type {_IInfo}
     * @description Represents detailed information about a Hashgraph account.
     * This type includes comprehensive account details such as:
     * - Account identifier and aliases
     * - Account balance and token holdings
     * - Creation and expiry timestamps
     * - Associated keys and permissions
     * - Staking information and rewards
     * - Account settings and preferences
     * @memberof _IAccounts
     * @see {@link _IInfo} for detailed property definitions
     */
    export type IInfo = _IInfo

    /**
     * @type {_Response}
     * @description Represents the response structure for account-related API endpoints.
     * Contains an array of account information objects and pagination links for navigating
     * through multiple results. Used to standardize the format of responses when retrieving
     * account data through the Hashgraph REST API.
     */
    export type IResponse = _IResponse

    /**
     * @type {_IAllowance}
     * @description Represents the allowance structure.
     */
    export type IAllowance = _IAllowance

    /**
     * @type {_IAllowanceResponse}
     * @description Represents the allowance response structure.
     */
    export type IAllowanceResponse = _IAllowanceResponse

    /**
     * @type {_INftAllowance}
     * @description Represents the NFT allowance structure.
     */
    export type INftAllowance = _INftAllowance

    /**
     * @type {_INftAllowanceResponse}
     * @description Represents the NFT allowance response structure.
     */
    export type INftAllowanceResponse = _INftAllowanceResponse

    /**
     * @type {_ITokenAllowanceResponse}
     * @description Represents the allowance response structure.
     */
    export type ITokenAllowanceResponse = _ITokenAllowanceResponse

    /**
     * @type {_ITokenRelationshipResponse}
     * @description Represents the token relationship response structure.
     */
    export type ITokenRelationshipResponse = _ITokenRelationshipResponse
}
