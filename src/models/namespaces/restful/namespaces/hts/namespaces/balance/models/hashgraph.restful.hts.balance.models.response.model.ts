import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsArray, IsOptional, ValidateNested, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Inner } from './hashgraph.restful.hts.balance.models.inner.model';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _ITokensInner } from '../../../../../../../../interfaces/namespaces/commons/namespaces/balance/interfaces/hashgraph.commons.balance.balance-tokens-inner.interface';

/**
 * @file hashgraph.restful.hts.balance.models.response.model.ts
 * @class _Response
 * @description Represents a response from the Hashgraph Token Service (HTS) containing token balance information
 * and pagination links. This class provides a structured format for token balance-related API responses,
 * including detailed balance information for multiple accounts and tokens, with support for pagination.
 * @implements {IHashgraph.IRestful.IHTS.IBalance.IResponse}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new HTS balance response instance
 * const response = new _Response({
 *   timestamp: "2023-05-17T12:34:56.789Z",
 *   balances: [
 *     {
 *       account: "0.0.1234567",
 *       balance: 1000000,
 *       tokens: [{
 *         token_id: "0.0.7654321",
 *         balance: 500000,
 *         decimals: 8
 *       }]
 *     }
 *   ],
 *   links: {
 *     next: "/api/v1/tokens/balances?limit=100&start=0.0.1235"
 *   }
 * });
 */
export class _Response implements IHashgraph.IRestful.IHTS.IBalance.IResponse {
    /**
     * The timestamp of the response
     * @type {string | null | undefined}
     * @description The ISO 8601 formatted timestamp when the balance information was retrieved.
     * This timestamp represents the point in time at which the balance data was accurate.
     * Optional field that may be undefined or null if timing information is not relevant.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'The ISO 8601 formatted timestamp when the balance data was retrieved',
        example: '2023-05-17T12:34:56.789Z',
        required: false,
        nullable: true,
    })
    @IsOptional()
    @IsString()
    timestamp?: string | null;

    /**
     * List of token balances
     * @type {Array<_Inner> | undefined}
     * @description An array of token balance objects containing detailed information about each
     * account's token holdings. Each object includes the account ID, HBAR balance, and an array
     * of token-specific balances with their respective decimal places. This field is optional
     * and may be undefined if no balance data is available.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        description: 'Array of detailed token balance information for accounts and their tokens',
        type: () => [_Inner],
        required: false,
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Inner)
    balances?: Array<_Inner>;

    /**
     * Links for pagination
     * @type {_Links}
     * @description Contains links for pagination navigation through balance results.
     * Includes a 'next' link to retrieve the next page of balance data. This field
     * is required and helps manage large sets of balance data by providing a way
     * to navigate through paginated results.
     * @memberof _Response
     */
    @ApiProperty({
        description: 'Links for navigating through paginated balance results',
        type: () => _Links,
        required: true,
    })
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => _Links)
    links: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {IHashgraph.IRestful.IHTS.IBalance.IResponse} data - Initial data to create the response
     * @description Initializes a new HTS balance response instance with the provided data.
     * Performs validation checks to ensure the timestamp is a valid string or null,
     * balances is a valid array of Inner instances, and required links are present.
     * Creates new Inner instances for each balance record and a Links instance for
     * pagination data.
     * @throws {Error} If timestamp is invalid (not a string, null, or undefined)
     * @throws {Error} If balances is invalid (not undefined or an array)
     * @throws {Error} If links are missing (required field)
     * @memberof _Response
     */
    constructor(data: IHashgraph.IRestful.IHTS.IBalance.IResponse) {
        this.timestamp = data.timestamp;
        this.balances = data.balances ? data.balances.map(balance => new _Inner(balance)) : undefined;
        this.links = new _Links(data.links.next);

        // Validate timestamp is either undefined, null, or a string
        if (this.timestamp !== undefined && this.timestamp !== null && typeof this.timestamp !== 'string') {
            throw new Error('Invalid timestamp: must be a string or null');
        }

        // Validate balances is either undefined or an array
        if (this.balances !== undefined && !Array.isArray(this.balances)) {
            throw new Error('Invalid balances: must be an array of _Inner instances');
        }

        // Validate links are present
        if (!this.links) {
            throw new Error('Links are required');
        }
    }
}