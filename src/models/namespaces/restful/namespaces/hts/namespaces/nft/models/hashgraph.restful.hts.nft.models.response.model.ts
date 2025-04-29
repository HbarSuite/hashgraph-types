import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _Nft } from '../hashgraph.restful.hts.nft.namespace';
/**
 * @file hashgraph.restful.hts.nft.models.response.model.ts
 * @class _Response
 * @description Represents a response containing a collection of NFTs (Non-Fungible Tokens) and associated pagination links.
 * This class provides a structured way to return NFT data along with pagination information from API endpoints.
 * It is commonly used for listing NFTs owned by an account or belonging to a specific token class.
 * @implements {IHashgraph.IRestful.IHTS.INft.IResponse}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new NFT response
 * const response = new _Response({
 *   nfts: [
 *     {
 *       token_id: "0.0.1234",
 *       serial_number: 1,
 *       metadata: "ipfs://QmXxx..."
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/tokens/0.0.1234/nfts?limit=100&start=2"
 *   }
 * });
 */
export class _Response implements IHashgraph.IRestful.IHTS.INft.IResponse {
    /**
     * Collection of NFT entities
     * @type {_Entity[] | undefined}
     * @description An array of NFT entities containing detailed information about each NFT,
     * including ownership, metadata, timestamps, and current state. This field is optional
     * and may be undefined if no NFTs match the query criteria.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'Collection of NFTs returned in the response',
        type: () => [_Nft.Entity],
        isArray: true,
        required: false,
        example: [
            {
                account_id: "0.1.2",
                created_timestamp: "1234567890.0006660001",
                delegating_spender: "0.0.400",
                deleted: false,
                metadata: "VGhpcyBpcyBhIHRlc3QgTkZU",
                modified_timestamp: "1610682445.003266001",
                serial_number: 124,
                spender_id: "0.0.500",
                token_id: "0.0.222"
            }
        ]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Nft.Entity)
    nfts?: _Nft.Entity[];

    /**
     * Pagination links
     * @type {_Links | undefined}
     * @description Links for pagination navigation, including next and previous page URLs.
     * These links facilitate navigation through large sets of NFTs by providing URLs
     * for the next and previous pages of results. The field is optional and may be
     * undefined if there are no additional pages.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'Links for navigating through paginated NFT results',
        type: () => _Links,
        required: false,
        example: {
            next: null
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _Response.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHTS.INft.IResponse>} data - Initial data to create the response
     * @description Initializes a new NFT response instance with the provided data.
     * If NFT data is provided, it creates new Entity instances for each NFT.
     * If pagination links are provided, it creates a new Links instance.
     * @memberof _Response
     */
    constructor(data: Partial<IHashgraph.IRestful.IHTS.INft.IResponse>) {
        if (data) {
            this.nfts = data.nfts ? data.nfts.map(nft => new _Nft.Entity(nft)) : undefined;
            this.links = data.links ? new _Links(data.links.next) : undefined;
        }
    }
}