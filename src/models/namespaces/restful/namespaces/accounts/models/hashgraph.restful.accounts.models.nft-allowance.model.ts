import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';

/**
 * @file hashgraph.restful.accounts.models.nft-allowance.model.ts
 * @class _NftAllowance
 * @description Model representing an NFT allowance granted by one account to another.
 * Implements IHashgraph.IRestful.IAccounts.INftAllowance to define the structure of
 * NFT transfer approvals between Hedera accounts. Features include:
 * - Blanket or specific NFT approvals
 * - Owner and spender identification
 * - Token and payer specification
 * - Time-based constraints
 * - Automatic validation
 * 
 * @implements {IHashgraph.IRestful.IAccounts.INftAllowance}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new NFT allowance
 * const nftAllowance = new _NftAllowance({
 *   approved_for_all: false,
 *   owner: "0.0.123456",
 *   payer_account_id: "0.0.789012",
 *   spender: "0.0.345678",
 *   token_id: "0.0.999999",
 *   timestamp: {
 *     from: "1651560386.060890949",
 *     to: "1751560386.661997287"
 *   }
 * });
 * ```
 */
export class _NftAllowance implements IHashgraph.IRestful.IAccounts.INftAllowance {
    /**
     * Flag indicating blanket approval for all NFTs
     * @type {boolean}
     * @remarks
     * - True grants access to all NFTs
     * - False requires specific approvals
     * - Overrides individual serial approvals
     * - Can be revoked by owner
     */
    @ApiProperty({
        description: 'Flag indicating whether the spender is approved for all NFTs of the specified token',
        example: false
    })
    @IsBoolean()
    approved_for_all: boolean;

    /**
     * Account ID of the NFT owner
     * @type {string}
     * @remarks
     * - Must be valid account ID
     * - Controls the allowance
     * - Can revoke at any time
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Account ID of the NFT owner in format 0.0.{number}',
        example: '0.0.123456'
    })
    @IsString()
    owner: string;

    /**
     * Account ID responsible for fees
     * @type {string}
     * @remarks
     * - Must be valid account ID
     * - Covers transaction fees
     * - Can be owner or third party
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Account ID responsible for transaction fees in format 0.0.{number}',
        example: '0.0.789012'
    })
    @IsString()
    payer_account_id: string;

    /**
     * Account ID of the approved spender
     * @type {string}
     * @remarks
     * - Must be valid account ID
     * - Can transfer approved NFTs
     * - Subject to time constraints
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Account ID of the approved NFT spender in format 0.0.{number}',
        example: '0.0.345678'
    })
    @IsString()
    spender: string;

    /**
     * Identifier of the NFT token
     * @type {string}
     * @remarks
     * - Must be valid token ID
     * - Represents NFT collection
     * - Links to token properties
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Token ID of the NFT collection in format 0.0.{number}',
        example: '0.0.999999'
    })
    @IsString()
    token_id: string;

    /**
     * Time constraints for the allowance
     * @type {{ from: string; to: string }}
     * @remarks
     * - Uses Hedera timestamp format
     * - Defines validity period
     * - Enforced by network
     * - Format: seconds.nanoseconds
     */
    @ApiProperty({
        description: 'Time constraints defining the validity period of the NFT allowance',
        example: {
            from: '1651560386.060890949',
            to: '1751560386.661997287'
        }
    })
    timestamp: {
        from: string;
        to: string;
    };
}

/**
 * @class _NftAllowanceResponse
 * @description Standardized response model for NFT allowance queries.
 * Implements IHashgraph.IRestful.IAccounts.INftAllowanceResponse to provide
 * a consistent structure for returning NFT allowance information with pagination
 * support. Features include:
 * - Collection of NFT allowance records
 * - HATEOAS-compliant pagination
 * - Automatic data transformation
 * - Type-safe response handling
 * 
 * @implements {IHashgraph.IRestful.IAccounts.INftAllowanceResponse}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create an NFT allowance response
 * const response = new _NftAllowanceResponse({
 *   allowances: [{
 *     approved_for_all: false,
 *     owner: "0.0.123456",
 *     payer_account_id: "0.0.789012",
 *     spender: "0.0.345678",
 *     token_id: "0.0.999999",
 *     timestamp: {
 *       from: "1651560386.060890949",
 *       to: "1751560386.661997287"
 *     }
 *   }],
 *   links: {
 *     next: "https://api.example.com/accounts/0.0.123456/nft-allowances?start=0.0.999999"
 *   }
 * });
 * ```
 */
export class _NftAllowanceResponse implements IHashgraph.IRestful.IAccounts.INftAllowanceResponse {
    /**
     * Collection of NFT allowance records
     * @type {_NftAllowance[]}
     * @remarks
     * - Contains all active NFT allowances
     * - Automatically validated
     * - Sorted by creation time
     * - Paginated for large sets
     */
    @ApiProperty({
        description: 'Collection of active NFT allowance records with detailed information',
        type: [_NftAllowance],
        example: [{
            approved_for_all: false,
            owner: "0.0.123456",
            payer_account_id: "0.0.789012",
            spender: "0.0.345678",
            token_id: "0.0.999999",
            timestamp: {
                from: "1651560386.060890949",
                to: "1751560386.661997287"
            }
        }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _NftAllowance)
    allowances: _NftAllowance[];

    /**
     * HATEOAS-compliant pagination links
     * @type {_Links}
     * @remarks
     * - Facilitates result navigation
     * - Supports RESTful standards
     * - Handles large result sets
     * - Auto-generated by API
     */
    @ApiProperty({
        description: 'HATEOAS-compliant pagination links for navigating through NFT allowances',
        type: _Links,
        example: {
            next: "https://api.example.com/accounts/0.0.123456/nft-allowances?start=0.0.999999"
        }
    })
    @ValidateNested()
    @Type(() => _Links)
    links: _Links;

    /**
     * Creates an instance of _NftAllowanceResponse
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IAccounts.INftAllowanceResponse>} [data] - Optional initialization data
     * @remarks
     * - Transforms input to proper types
     * - Validates all allowances
     * - Creates pagination links
     * - Handles empty responses
     * 
     * @example
     * ```typescript
     * // Create empty response
     * const emptyResponse = new _NftAllowanceResponse();
     * 
     * // Create response with data
     * const response = new _NftAllowanceResponse({
     *   allowances: [{
     *     approved_for_all: false,
     *     owner: "0.0.123456",
     *     token_id: "0.0.999999",
     *     spender: "0.0.345678"
     *   }],
     *   links: {
     *     next: "https://api.example.com/accounts/0.0.123456/nft-allowances?start=0.0.999999"
     *   }
     * });
     * ```
     */
    constructor(data?: Partial<IHashgraph.IRestful.IAccounts.INftAllowanceResponse>) {
        if (data) {
            this.allowances = data.allowances?.map(allowance => Object.assign(new _NftAllowance(), allowance)) || [];
            this.links = data.links ? new _Links(data.links.next) : new _Links(null);
        }
    }
} 