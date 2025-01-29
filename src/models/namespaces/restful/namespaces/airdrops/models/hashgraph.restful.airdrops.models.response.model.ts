import { ApiProperty, ApiSchema } from '@hsuite/nestjs-swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { _Entity } from './hashgraph.restful.airdrops.models.entity.model';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file response.model.ts
 * @class _Response
 * @description Represents the response structure for airdrop-related queries and operations
 * in the Hashgraph network. This class encapsulates both the airdrop data and pagination
 * information for listing and querying airdrops.
 * @implements {IHashgraph.IRestful.IAirdrops.IResponse}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Airdrops} for the parent namespace
 * @see {@link _Entity} for the airdrop entity structure
 * @see {@link _Links} for the pagination structure
 * 
 * @example
 * // Create a response with airdrop data and pagination
 * const response = new _Response({
 *   airdrops: [
 *     new _Entity({
 *       amount: 100,
 *       token_id: "0.0.1234",
 *       sender_id: "0.0.5678",
 *       receiver_id: "0.0.9012",
 *       serial_number: null,
 *       timestamp: {
 *         from: "2023-01-01T00:00:00.000Z",
 *         to: "2023-12-31T23:59:59.999Z"
 *       }
 *     })
 *   ],
 *   links: new _Links({
 *     next: "/api/airdrops?page=2",
 *     prev: null
 *   })
 * });
 */
@ApiSchema({ name: 'Hashgraph.Restful.Airdrops.Response' })
export class _Response implements IHashgraph.IRestful.IAirdrops.IResponse {
    /**
     * Array of airdrop entities
     * @type {_Entity[]}
     * @description Collection of airdrop entities returned by the query
     * @remarks Each entity represents a single token distribution event
     * @see {@link _Entity} for the airdrop entity structure
     */
    @ApiProperty({
        description: 'Collection of airdrop entities returned by the query',
        type: () => [_Entity]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Entity)
    public airdrops: _Entity[];

    /**
     * Pagination links
     * @type {_Links}
     * @description Navigation links for paginated airdrop results
     * @remarks Contains URLs for next/previous pages when applicable
     * @see {@link _Links} for the pagination structure details
     */
    @ApiProperty({
        description: 'Navigation links for paginated airdrop results',
        type: () => _Links
    })
    @ValidateNested()
    @Type(() => _Links)
    public links: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {Object} response - The response data
     * @param {_Entity[]} response.airdrops - Array of airdrop entities
     * @param {_Links} response.links - Pagination links
     * @remarks Both airdrops and links are required fields
     */
    constructor(response: { airdrops: _Entity[]; links: _Links }) {
        this.airdrops = response.airdrops;
        this.links = response.links;
    }
}
