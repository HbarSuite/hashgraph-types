import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Commons } from '../../../../commons/hashgraph.commons.namespace';

/**
 * @file hashgraph.restful.hts.models.token.model.ts
 * @class _Token
 * @description Represents a token on the Hashgraph Token Service (HTS). This class defines the structure
 * and properties of a token, including its metadata, configuration, and identifiers. It provides
 * a standardized way to interact with tokens across the Hashgraph network.
 * @implements {IHashgraph.IRestful.IHTS.IToken}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token instance
 * const token = new _Token({
 *   admin_key: { key: "302a300506032b6570032100..." },
 *   decimals: 8,
 *   name: "My Token",
 *   symbol: "MTK",
 *   token_id: "0.0.1234",
 *   type: "FUNGIBLE_COMMON"
 * });
 */
export class _Token implements IHashgraph.IRestful.IHTS.IToken {
    /**
     * The administrative key for the token
     * @type {_Commons.Key.Entity}
     * @description The key that has administrative privileges over the token,
     * including the ability to modify token properties and permissions
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The administrative key associated with the token, used for managing token properties and permissions.',
        type: () => _Commons.Key.Entity,
        required: true
    })
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    admin_key: _Commons.Key.Entity;

    /**
     * The number of decimal places
     * @type {number}
     * @description Specifies the number of decimal places used to represent
     * the token's fractional units
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The number of decimal places used to represent the token\'s fractional units.',
        example: 8,
        required: true
    })
    @IsNumber()
    decimals: number;

    /**
     * The token metadata
     * @type {string}
     * @description Additional metadata associated with the token, typically a URI
     * pointing to token information
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The metadata associated with the token',
        example: 'https://example.com/metadata.json'
    })
    @IsString()
    metadata: string;

    /**
     * The token name
     * @type {string}
     * @description The human-readable name of the token
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The human-readable name of the token.',
        example: 'My Token',
        required: true
    })
    @IsString()
    name: string;

    /**
     * The token symbol
     * @type {string}
     * @description The abbreviated symbol or ticker used to identify the token
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The abbreviated symbol or ticker of the token, typically used for trading and identification.',
        example: 'MTK',
        required: true
    })
    @IsString()
    symbol: string;

    /**
     * The token identifier
     * @type {string | null}
     * @description The unique identifier of the token on the Hashgraph network
     * @optional
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The unique identifier of the token on the Hashgraph network.',
        example: '0.0.1234',
        nullable: true,
        required: false
    })
    @IsString()
    @IsOptional()
    token_id: string | null;

    /**
     * The token type
     * @type {string}
     * @description The classification or category of the token (e.g., FUNGIBLE_COMMON, NON_FUNGIBLE_UNIQUE)
     * @memberof _Token
     */
    @ApiProperty({
        description: 'The classification or category of the token (e.g., fungible, non-fungible).',
        example: 'FUNGIBLE_COMMON',
        required: true
    })
    @IsString()
    type: string;

    /**
     * Creates an instance of _Token
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHTS.IToken>} data - Initial data to create the token
     * @description Initializes a new token instance with the provided data,
     * performing type conversions as needed
     * @memberof _Token
     */
    constructor(data: Partial<IHashgraph.IRestful.IHTS.IToken>) {
        if (data) {
            // Create new admin key instance if provided
            this.admin_key = data.admin_key ? new _Commons.Key.Entity(data.admin_key) : undefined;
            // Convert decimals to number
            this.decimals = Number(data.decimals);
            // Convert name to string
            this.name = String(data.name);
            // Convert symbol to string
            this.symbol = String(data.symbol);
            // Convert token_id to string or set as null if undefined
            this.token_id = data.token_id !== undefined ? String(data.token_id) : null;
            // Convert type to string
            this.type = String(data.type);
        }
    }
}