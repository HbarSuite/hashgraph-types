import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _HTS } from '../hashgraph.restful.hts.namespace';
import { _Restful } from '../../../hashgraph.restful.namespace';
import { _Token } from './hashgraph.restful.hts.models.token.model';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';

/**
 * @file hashgraph.restful.hts.models.response.model.ts
 * @class _Response
 * @description Represents a response from the Hashgraph Token Service (HTS) containing token information
 * and pagination links. This class provides a structured format for token-related API responses.
 * @implements {IHashgraph.IRestful.IHTS.IResponse}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new HTS response instance
 * const response = new _Response({
 *   tokens: [
 *     {
 *       tokenId: "0.0.1234",
 *       name: "MyToken",
 *       symbol: "MTK",
 *       decimals: 8
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/tokens?limit=100&start=0.0.1235"
 *   }
 * });
 */
export class _Response implements IHashgraph.IRestful.IHTS.IResponse {
    /**
     * List of tokens returned in the response
     * @type {Array<_Token> | undefined}
     * @description An array of token objects containing details about each token
     * such as token ID, name, symbol, and decimals. This field is optional and may
     * be undefined if no tokens are returned.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'The list of tokens returned in the response',
        type: () => _Token,
        isArray: true,
        required: true,
        example: [{
            admin_key: { key: "xodkeihfuhwqeuh" },
            decimals: 8,
            metadata: "https://example.com/metadata.json",
            name: "MyToken",
            symbol: "MTK",
            tokenId: "0.0.1234",
            type: "FUNGIBLE_COMMON"
        }]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Token)
    tokens?: Array<_Token>;

    /**
     * Links for pagination
     * @type {_Links | undefined}
     * @description Contains links for pagination, typically including a 'next' link
     * to retrieve the next page of results. This field is optional and may be undefined
     * if there are no additional pages.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'The links associated with the response, typically for pagination',
        type: () => _Links,
        required: true,
        example: { "next": "/api/v1/tokens?limit=100&start=0.0.1235" }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHTS.IResponse>} data - Initial data to create the response
     * @description Initializes a new HTS response instance, mapping token data and pagination links.
     * If token data is provided, it creates new Token instances for each token. If links are provided,
     * it creates a new Links instance.
     * @memberof _Response
     */
    constructor(data: Partial<IHashgraph.IRestful.IHTS.IResponse>) {
        if (data) {
            // Map token data to Token instances if provided
            this.tokens = data.tokens ? data.tokens.map(token => new _Token(token)) : undefined;
            // Create Links instance if next link is provided
            this.links = data.links ? new _Links(data.links.next) : undefined;
        }
    }
}