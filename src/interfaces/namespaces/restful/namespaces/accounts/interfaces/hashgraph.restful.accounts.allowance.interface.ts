/**
 * @file hashgraph.restful.accounts.allowance.interface.ts
 * @namespace IHashgraph.IRestful._IAccounts
 * @description Defines interfaces for account allowance operations in the Hedera REST API
 */

import { IHashgraph } from '../../../../../hashgraph.namespace';

/**
 * Interface representing an account allowance
 * @interface _IAllowance
 * @description Defines the structure of an account allowance, including amount details and temporal constraints
 * @property {number} amount - The current allowance amount
 * @property {number} amount_granted - The initially granted allowance amount
 * @property {string} owner - The account ID of the owner who granted the allowance
 * @property {string} spender - The account ID of the spender who received the allowance
 * @property {Object} timestamp - Time constraints for the allowance
 * @property {string} timestamp.from - Start timestamp of the allowance validity
 * @property {string} timestamp.to - End timestamp of the allowance validity
 */
export interface _IAllowance {
    amount: number;
    amount_granted: number;
    owner: string;
    spender: string;
    timestamp: {
        from: string;
        to: string;
    };
}

/**
 * Interface representing the response structure for allowance queries
 * @interface _IAllowanceResponse
 * @description Defines the structure of the API response for allowance-related queries
 * @property {Array<_IAllowance>} allowances - Array of allowance objects
 * @property {IHashgraph.IRestful.ILinks} links - Navigation links for pagination
 */
export interface _IAllowanceResponse {
    allowances: Array<_IAllowance>;
    links: IHashgraph.IRestful.ILinks;
} 