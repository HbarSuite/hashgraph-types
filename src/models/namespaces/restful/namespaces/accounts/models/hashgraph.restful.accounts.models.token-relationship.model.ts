import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';
import { Hashgraph } from '../../../../../hashgraph.namespace';

/**
 * @file hashgraph.restful.accounts.models.token-relationship.model.ts
 * @class _TokenRelationshipResponse
 * @description Standardized response model for token relationships associated with a Hedera account.
 * Implements IHashgraph.IRestful.IAccounts.ITokenRelationshipResponse to provide detailed information
 * about an account's relationship with various tokens, including:
 * - Token association status
 * - Balance information
 * - KYC and freeze status
 * - Association timestamps
 * - Automatic association settings
 * 
 * @implements {IHashgraph.IRestful.IAccounts.ITokenRelationshipResponse}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a token relationship response
 * const response = new _TokenRelationshipResponse({
 *   tokens: [{
 *     token_id: "0.0.27335",
 *     balance: 5,
 *     automatic_association: true,
 *     created_timestamp: "123456789.000000001",
 *     decimals: 3,
 *     freeze_status: "UNFROZEN",
 *     kyc_status: "GRANTED"
 *   }],
 *   links: {
 *     next: "https://api.example.com/accounts/0.0.123456/tokens?start=0.0.27336"
 *   }
 * });
 * ```
 */
export class _TokenRelationshipResponse implements IHashgraph.IRestful.IAccounts.ITokenRelationshipResponse {
    /**
     * Collection of token relationships for the account
     * @type {Array<IHashgraph.IRestful.IHTS.IRelationship.IEntity>}
     * @remarks
     * - Lists all tokens associated with the account
     * - Includes detailed status for each token
     * - Provides real-time balance information
     * - Shows compliance status (KYC, freeze)
     */
    @ApiProperty({
        description: 'Collection of token relationships detailing the account\'s association with various tokens',
        type: () => [Hashgraph.Restful.HTS.Relationship.Entity],
        required: true,
        example: [{
            automatic_association: true,
            balance: 5,
            created_timestamp: "123456789.000000001",
            decimals: 3,
            freeze_status: "UNFROZEN",
            kyc_status: "GRANTED",
            token_id: "0.0.27335"
        }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Hashgraph.Restful.HTS.Relationship.Entity)
    tokens: Array<IHashgraph.IRestful.IHTS.IRelationship.IEntity>;

    /**
     * HATEOAS-compliant pagination links
     * @type {IHashgraph.IRestful.ILinks}
     * @remarks
     * - Facilitates navigation through token relationships
     * - Supports efficient result set traversal
     * - Implements RESTful pagination standards
     * - Handles large token association lists
     */
    @ApiProperty({
        description: 'HATEOAS-compliant pagination links for navigating through token relationships',
        type: () => _Links,
        required: true,
        example: {
            next: "https://api.example.com/accounts/0.0.123456/tokens?start=0.0.27336"
        }
    })
    @ValidateNested()
    @Type(() => _Links)
    links: IHashgraph.IRestful.ILinks;

    /**
     * Creates an instance of _TokenRelationshipResponse
     * @constructor
     * @param {IHashgraph.IRestful.IAccounts.ITokenRelationshipResponse} data - Token relationship data
     * @remarks
     * - Automatically transforms token data to proper types
     * - Validates all relationships during construction
     * - Creates pagination links for result navigation
     * - Ensures type safety for all properties
     * 
     * @example
     * ```typescript
     * const response = new _TokenRelationshipResponse({
     *   tokens: [{
     *     token_id: "0.0.27335",
     *     balance: 5,
     *     automatic_association: true,
     *     freeze_status: "UNFROZEN"
     *   }],
     *   links: {
     *     next: "https://api.example.com/accounts/0.0.123456/tokens?start=0.0.27336"
     *   }
     * });
     * ```
     */
    constructor(data: IHashgraph.IRestful.IAccounts.ITokenRelationshipResponse) {
        this.tokens = data.tokens.map(token => new Hashgraph.Restful.HTS.Relationship.Entity(token));
        this.links = new _Links(data.links.next);
    }
}