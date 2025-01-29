import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { _Entity } from './hashgraph.restful.network.nodes.models.entity.model';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';

/**
 * @file hashgraph.restful.network.nodes.models.response.model.ts
 * @class _Response
 * @description Comprehensive model for network nodes query responses.
 * 
 * This model provides detailed information about:
 * - Network node listings
 * - Node configurations
 * - Pagination support
 * - Response metadata
 * 
 * Features built-in validation for:
 * - Node collections
 * - Pagination links
 * - Data integrity
 * - Response format
 * 
 * @implements {IHashgraph.IRestful.INetwork.INodes.IResponse}
 * @category Models
 * @subcategory Nodes
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const response = new _Response({
 *   nodes: [
 *     {
 *       description: 'Main consensus node',
 *       node_id: 3,
 *       node_account_id: '0.0.3',
 *       service_endpoints: [
 *         {
 *           ip_address: '35.237.200.180',
 *           port: 50211
 *         }
 *       ]
 *     }
 *   ],
 *   links: {
 *     next: null
 *   }
 * });
 * ```
 */
export class _Response implements IHashgraph.IRestful.INetwork.INodes.IResponse {
    /**
     * Network nodes collection
     * @type {Array<IHashgraph.IRestful.INetwork.INodes.IEntity>}
     * @description Collection of network nodes with their configurations.
     * Each node entry contains detailed information about:
     * - Node identification
     * - Service endpoints
     * - Staking parameters
     * - Security details
     * 
     * @required
     */
    @ApiProperty({
        description: 'Collection of network nodes with their configurations',
        type: () => _Entity,
        isArray: true,
        required: true,
        example: [
            {
                description: 'Main consensus node',
                node_id: 3,
                node_account_id: '0.0.3',
                service_endpoints: [
                    {
                        ip_address: '35.237.200.180',
                        port: 50211
                    }
                ]
            }
        ]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Entity)
    nodes: Array<IHashgraph.IRestful.INetwork.INodes.IEntity>;

    /**
     * Response pagination links
     * @type {IHashgraph.IRestful.ILinks}
     * @description Links for navigating paginated responses.
     * Supports efficient traversal of large node collections.
     * 
     * Features:
     * - Next page link
     * - Previous page link
     * - First page link
     * - Last page link
     * 
     * @required
     */
    @ApiProperty({
        description: 'Links for navigating paginated responses',
        type: () => _Links,
        required: true,
        example: {
            next: null,
            prev: null,
            first: null,
            last: null
        }
    })
    @ValidateNested()
    @Type(() => _Links)
    links: IHashgraph.IRestful.ILinks;

    /**
     * Creates an instance of _Response.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.INetwork.INodes.IResponse>} [data] - Initial response data
     * 
     * @description Initializes a new nodes response instance:
     * - Assigns node collection if provided
     * - Sets pagination links if provided
     * - Applies validation rules
     * 
     * Note: This model uses optional initialization to support
     * various response scenarios and partial updates.
     */
    constructor(data?: Partial<IHashgraph.IRestful.INetwork.INodes.IResponse>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
