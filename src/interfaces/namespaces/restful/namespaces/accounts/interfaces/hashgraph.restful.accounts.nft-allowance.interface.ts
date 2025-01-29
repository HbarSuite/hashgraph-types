/**
 * @file hashgraph.restful.accounts.nft-allowance.interface.ts
 * @namespace IHashgraph.IRestful._IAccounts
 * @description Defines interfaces for NFT allowance operations in the Hedera REST API
 */

import { IHashgraph } from '../../../../../hashgraph.namespace';

/**
 * Interface representing an NFT allowance
 * @interface _INftAllowance
 * @description Defines the structure of an NFT allowance, including approval status and temporal constraints
 * @property {boolean} approved_for_all - Indicates if the spender is approved for all NFTs of this type
 * @property {string} owner - The account ID of the NFT owner who granted the allowance
 * @property {string} payer_account_id - The account ID responsible for paying transaction fees
 * @property {string} spender - The account ID of the spender who received the allowance
 * @property {Object} timestamp - Time constraints for the allowance
 * @property {string} timestamp.from - Start timestamp of the allowance validity
 * @property {string} timestamp.to - End timestamp of the allowance validity
 * @property {string} token_id - The identifier of the NFT token
 */
export interface _INftAllowance {
    approved_for_all: boolean;
    owner: string;
    payer_account_id: string;
    spender: string;
    timestamp: {
        from: string;
        to: string;
    };
    token_id: string;
}

/**
 * Interface representing the response structure for NFT allowance queries
 * @interface _INftAllowanceResponse
 * @description Defines the structure of the API response for NFT allowance-related queries
 * @property {Array<_INftAllowance>} allowances - Array of NFT allowance objects
 * @property {IHashgraph.IRestful.ILinks} links - Navigation links for pagination
 */
export interface _INftAllowanceResponse {
    allowances: Array<_INftAllowance>;
    links: IHashgraph.IRestful.ILinks;
} 