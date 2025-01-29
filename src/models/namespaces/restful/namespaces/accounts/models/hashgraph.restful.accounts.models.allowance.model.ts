import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../models/hashgraph.restful.models.links.model';

/**
 * @file hashgraph.restful.accounts.models.allowance.model.ts
 * @class _Allowance
 * @description Model representing a crypto allowance granted by one account to another.
 * Implements IHashgraph.IRestful.IAccounts.IAllowance to define the structure of
 * crypto transfer approvals between Hedera accounts. Features include:
 * - Current and original allowance amounts
 * - Owner and spender account identification
 * - Time-based constraints
 * - Automatic validation
 * 
 * @implements {IHashgraph.IRestful.IAccounts.IAllowance}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a new allowance
 * const allowance = new _Allowance({
 *   amount: 75,
 *   amount_granted: 100,
 *   owner: "0.0.123456",
 *   spender: "0.0.789012",
 *   timestamp: {
 *     from: "1586567700.453054000",
 *     to: "1687567700.453054000"
 *   }
 * });
 * ```
 */
export class _Allowance implements IHashgraph.IRestful.IAccounts.IAllowance {
    /**
     * Current remaining amount of the allowance
     * @type {number}
     * @remarks
     * - Denominated in tinybars
     * - Decreases with each approved transfer
     * - Cannot exceed amount_granted
     * - Updates in real-time with transfers
     */
    @ApiProperty({
        description: 'Current remaining amount of the allowance in tinybars',
        example: 75
    })
    @IsNumber()
    amount: number;

    /**
     * Original amount granted in the allowance
     * @type {number}
     * @remarks
     * - Denominated in tinybars
     * - Immutable after creation
     * - Used as maximum cap
     * - Reference for allowance usage
     */
    @ApiProperty({
        description: 'Original amount granted in tinybars when allowance was created',
        example: 100
    })
    @IsNumber()
    amount_granted: number;

    /**
     * Account ID of the allowance grantor
     * @type {string}
     * @remarks
     * - Must be valid account ID
     * - Controls the allowance
     * - Can revoke at any time
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Account ID of the allowance grantor in format 0.0.{number}',
        example: '0.0.123456'
    })
    @IsString()
    owner: string;

    /**
     * Account ID of the approved spender
     * @type {string}
     * @remarks
     * - Must be valid account ID
     * - Can initiate transfers
     * - Limited by amount and time
     * - Format: 0.0.{number}
     */
    @ApiProperty({
        description: 'Account ID of the approved spender in format 0.0.{number}',
        example: '0.0.789012'
    })
    @IsString()
    spender: string;

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
        description: 'Time constraints defining the validity period of the allowance',
        example: {
            from: '1586567700.453054000',
            to: '1687567700.453054000'
        }
    })
    timestamp: {
        from: string;
        to: string;
    };
}

/**
 * @class _AllowanceResponse
 * @description Standardized response model for crypto allowance queries.
 * Implements IHashgraph.IRestful.IAccounts.IAllowanceResponse to provide
 * a consistent structure for returning allowance information with pagination
 * support. Features include:
 * - Collection of allowance records
 * - HATEOAS-compliant pagination
 * - Automatic data transformation
 * - Type-safe response handling
 * 
 * @implements {IHashgraph.IRestful.IAccounts.IAllowanceResponse}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create an allowance response
 * const response = new _AllowanceResponse({
 *   allowances: [{
 *     amount: 75,
 *     amount_granted: 100,
 *     owner: "0.0.123456",
 *     spender: "0.0.789012",
 *     timestamp: {
 *       from: "1586567700.453054000",
 *       to: "1687567700.453054000"
 *     }
 *   }],
 *   links: {
 *     next: "https://api.example.com/accounts/0.0.123456/allowances?start=0.0.789013"
 *   }
 * });
 * ```
 */
export class _AllowanceResponse implements IHashgraph.IRestful.IAccounts.IAllowanceResponse {
    /**
     * Collection of allowance records
     * @type {_Allowance[]}
     * @remarks
     * - Contains all active allowances
     * - Automatically validated
     * - Sorted by creation time
     * - Paginated for large sets
     */
    @ApiProperty({
        description: 'Collection of active allowance records with detailed information',
        type: [_Allowance],
        example: [{
            amount: 75,
            amount_granted: 100,
            owner: "0.0.123456",
            spender: "0.0.789012",
            timestamp: {
                from: "1586567700.453054000",
                to: "1687567700.453054000"
            }
        }]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _Allowance)
    allowances: _Allowance[];

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
        description: 'HATEOAS-compliant pagination links for navigating through allowances',
        type: _Links,
        example: {
            next: "https://api.example.com/accounts/0.0.123456/allowances?start=0.0.789013"
        }
    })
    @ValidateNested()
    @Type(() => _Links)
    links: _Links;

    /**
     * Creates an instance of _AllowanceResponse
     * @constructor
     * @param {Partial<_AllowanceResponse>} [data] - Optional initialization data
     * @remarks
     * - Transforms input to proper types
     * - Validates all allowances
     * - Creates pagination links
     * - Handles empty responses
     * 
     * @example
     * ```typescript
     * // Create empty response
     * const emptyResponse = new _AllowanceResponse();
     * 
     * // Create response with data
     * const response = new _AllowanceResponse({
     *   allowances: [{
     *     amount: 75,
     *     amount_granted: 100,
     *     owner: "0.0.123456",
     *     spender: "0.0.789012"
     *   }],
     *   links: {
     *     next: "https://api.example.com/accounts/0.0.123456/allowances?start=0.0.789013"
     *   }
     * });
     * ```
     */
    constructor(data?: Partial<_AllowanceResponse>) {
        if (data) {
            this.allowances = data.allowances?.map(allowance => Object.assign(new _Allowance(), allowance)) || [];
            this.links = data.links ? new _Links(data.links.next) : new _Links(null);
        }
    }
} 