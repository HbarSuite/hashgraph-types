/**
 * @file hashgraph.restful.airdrops.response.interface.ts
 * @namespace IHashgraph.IRestful._IAirdrops
 * @description Defines the response structure for airdrop-related queries in the Hedera REST API
 */

import { IHashgraph } from '../../../../../hashgraph.namespace';
import { _IEntity } from './hashgraph.restful.airdrops.entity.interface';

/**
 * Interface representing the response structure for airdrop queries
 * @interface _IResponse
 * @description Defines the standardized response format for airdrop-related API endpoints,
 * including the list of airdrop entities and pagination controls
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const response: _IResponse = {
 *   airdrops: [{
 *     amount: 1000,
 *     receiver_id: "0.0.123456",
 *     token_id: "0.0.345678"
 *   }],
 *   links: {
 *     next: "/api/v1/airdrops?page=2"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Array of airdrop entities
     * @property {Array<_IEntity>} airdrops
     * @description Collection of airdrop operations matching the query criteria
     * @type {Array<_IEntity>}
     * @memberof _IResponse
     * @required
     */
    airdrops: Array<_IEntity>;

    /**
     * Pagination links
     * @property {IHashgraph.IRestful.ILinks} links
     * @description Navigation links for paginated results, including next, previous, and other relevant URLs
     * @type {IHashgraph.IRestful.ILinks}
     * @memberof _IResponse
     * @required
     */
    links: IHashgraph.IRestful.ILinks;
} 