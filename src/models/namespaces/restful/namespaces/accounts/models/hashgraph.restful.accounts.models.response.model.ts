import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { _Info } from './hashgraph.restful.accounts.models.info.model';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';

/**
 * @file hashgraph.restful.accounts.models.response.model.ts
 * @class _Response
 * @description Standardized response model for Hashgraph account-related API endpoints.
 * Implements the IHashgraph.IRestful.IAccounts.IResponse interface to provide a consistent
 * structure for returning account information with pagination support. Features include:
 * - Collection of account information objects
 * - HATEOAS-compliant pagination links
 * - Automatic data transformation and validation
 * - Type-safe response handling
 * 
 * @implements {IHashgraph.IRestful.IAccounts.IResponse}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a paginated response with multiple accounts
 * const response = new _Response({
 *   accounts: [
 *     {
 *       account: '0.0.123456',
 *       balance: {
 *         balance: '1000000000',
 *         tokens: [{
 *           token_id: '0.0.789012',
 *           balance: '1000'
 *         }]
 *       }
 *     },
 *     {
 *       account: '0.0.789012',
 *       balance: {
 *         balance: '2000000000'
 *       }
 *     }
 *   ],
 *   links: {
 *     next: 'https://api.example.com/accounts?limit=25&start=0.0.789013'
 *   }
 * });
 * ```
 */
export class _Response implements IHashgraph.IRestful.IAccounts.IResponse {
    /**
     * Collection of account information objects
     * @type {Array<_Info>}
     * @remarks
     * - Contains detailed information for each account
     * - Automatically validates each account object
     * - Supports empty array when no results found
     * - Maximum size typically limited by API configuration
     */
    @ApiProperty({
        description: 'Collection of account information objects containing detailed account data and properties.',
        type: () => Array<_Info>,
        required: true,
        example: [{
            account: '0.0.8',
            alias: 'HIQQEXWKW53RKN4W6XXC4Q232SYNZ3SZANVZZSUME5B5PRGXL663UAQA',
            auto_renew_period: 7776000,
            balance: {
                timestamp: '0.000002345',
                balance: 80,
                tokens: [{
                    token_id: '0.0.200001',
                    balance: 8
                }]
            },
            created_timestamp: '2019-07-08T14:32:08.000Z',
            decline_reward: false,
            ethereum_nonce: 0,
            evm_address: '0xac384c53f03855fa1b3616052f8ba32c6c2a2fec',
            expiry_timestamp: '2024-07-08T14:32:08.000Z',
            key: {
                key: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7'
            },
            max_automatic_token_associations: 200,
            memo: 'entity memo',
            pending_reward: 100,
            receiver_sig_required: false,
            staked_account_id: '0.0.3',
            staked_node_id: 3,
            stake_period_start: '2023-01-01T00:00:00.000Z'
        }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Info)
    accounts: Array<_Info>;

    /**
     * HATEOAS-compliant pagination links
     * @type {_Links}
     * @remarks
     * - Provides navigation to next page of results
     * - Supports RESTful API best practices
     * - Facilitates efficient result set traversal
     * - Automatically handled by API infrastructure
     */
    @ApiProperty({
        description: 'HATEOAS-compliant pagination links for navigating through result sets.',
        type: () => _Links,
        required: true,
        example: {
            next: 'https://api.example.com/accounts?limit=25&start=0.0.9'
        }
    })
    @ValidateNested()
    @Type(() => _Links)
    links: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IAccounts.IResponse>} [data] - Optional initialization data
     * @remarks
     * - Automatically transforms input data to proper types
     * - Initializes empty arrays if no accounts provided
     * - Creates default links object if none specified
     * - Validates all input data during construction
     * 
     * @example
     * ```typescript
     * // Create empty response
     * const emptyResponse = new _Response();
     * 
     * // Create response with data
     * const response = new _Response({
     *   accounts: [{
     *     account: '0.0.123456',
     *     balance: { balance: '1000000000' }
     *   }],
     *   links: { next: 'https://api.example.com/accounts?start=0.0.123457' }
     * });
     * ```
     */
    constructor(data?: Partial<IHashgraph.IRestful.IAccounts.IResponse>) {
        if (data) {
            this.accounts = data.accounts ? data.accounts.map(account => new _Info(account)) : [];
            this.links = data.links ? new _Links(data.links.next) : new _Links(null);
        }
    }
} 