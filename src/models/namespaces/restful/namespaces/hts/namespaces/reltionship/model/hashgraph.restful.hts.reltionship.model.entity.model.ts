import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsNumber, IsString, IsEnum, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.hts.reltionship.model.entity.model.ts
 * @class _Entity
 * @description Represents the relationship between an account and a token on the Hashgraph Token Service.
 * This class encapsulates various aspects of the token-account relationship, including balance,
 * association status, KYC and freeze statuses, and other relevant information. It provides a
 * comprehensive view of how an account interacts with a specific token and its compliance status.
 * @implements {IHashgraph.IRestful.IHTS.IRelationship.IEntity}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token relationship entity
 * const relationship = new _Entity({
 *   automatic_association: true,
 *   balance: 1000,
 *   created_timestamp: '2023-05-17T12:34:56.789Z',
 *   decimals: 2,
 *   freeze_status: 'UNFROZEN',
 *   kyc_status: 'GRANTED',
 *   token_id: '0.0.1234',
 *   modified_timestamp: '2023-05-17T12:34:56.789Z',
 *   pause_status: 'UNPAUSED'
 * });
 */
export class _Entity implements IHashgraph.IRestful.IHTS.IRelationship.IEntity {
    /**
     * Automatic association status
     * @type {boolean}
     * @description Indicates whether the token is automatically associated with the account.
     * If true, the account can receive this token without explicit association. If false,
     * the account must be associated with the token before receiving any transfers.
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'Whether the token is automatically associated with new accounts',
        required: true,
        example: true
    })
    @IsBoolean()
    automatic_association: boolean;

    /**
     * Token balance
     * @type {number}
     * @description The current balance of the token held by this account.
     * The actual token amount is this value divided by 10^decimals.
     * For example, with 2 decimals, a balance of 1000 represents 10.00 tokens.
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The current token balance held by the account',
        required: true,
        example: 1000
    })
    @IsNumber()
    balance: number;

    /**
     * Creation timestamp
     * @type {string}
     * @description The ISO 8601 formatted timestamp when the token-account relationship
     * was first established. This occurs when the account first associates with the token
     * or receives an automatic association.
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The ISO 8601 timestamp when the token-account relationship was created',
        required: true,
        example: '2023-05-17T12:34:56.789Z'
    })
    @IsString()
    created_timestamp: string;

    /**
     * Token decimals
     * @type {number}
     * @description The number of decimal places used to represent the token's fractional units.
     * This value determines how the raw balance should be interpreted. For example,
     * with 2 decimals, each whole token is represented as 100 units.
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The number of decimal places used for token fractional units',
        required: true,
        example: 2
    })
    @IsNumber()
    decimals: number;

    /**
     * Freeze status
     * @type {IHashgraph.IRestful.IHTS.IRelationship.FreezeStatusEnum}
     * @description The current freeze status of the token for this account.
     * When frozen, the account cannot send or receive this token.
     * Possible values are:
     * - FROZEN: Account cannot transfer tokens
     * - UNFROZEN: Account can transfer tokens
     * - NOT_APPLICABLE: Token does not support freezing
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The current freeze status affecting token transfer capabilities',
        required: true,
        enum: IHashgraph.IRestful.IHTS.IRelationship.FreezeStatusEnum,
        example: 'UNFROZEN'
    })
    @IsEnum(IHashgraph.IRestful.IHTS.IRelationship.FreezeStatusEnum)
    freeze_status: IHashgraph.IRestful.IHTS.IRelationship.FreezeStatusEnum;

    /**
     * KYC status
     * @type {IHashgraph.IRestful.IHTS.IRelationship.KycStatusEnum}
     * @description The current Know Your Customer (KYC) status for this account-token relationship.
     * Determines whether the account is allowed to transact with the token based on KYC verification.
     * Possible values are:
     * - GRANTED: Account has passed KYC and can transact
     * - REVOKED: Account has failed or lost KYC status
     * - NOT_APPLICABLE: Token does not require KYC
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The current KYC status determining transaction permissions',
        required: true,
        enum: IHashgraph.IRestful.IHTS.IRelationship.KycStatusEnum,
        example: 'GRANTED'
    })
    @IsEnum(IHashgraph.IRestful.IHTS.IRelationship.KycStatusEnum)
    kyc_status: IHashgraph.IRestful.IHTS.IRelationship.KycStatusEnum;

    /**
     * Token ID
     * @type {string | null}
     * @description The unique identifier of the token on the Hedera network.
     * This ID is used to uniquely identify the token in all operations and queries.
     * A null value indicates a pending or unassigned token relationship.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({
        description: 'The unique identifier of the token on the Hedera network',
        required: false,
        example: '0.0.1234',
        nullable: true
    })
    @IsString()
    @IsOptional()
    token_id: string | null;

    /**
     * Creates an instance of _Entity.
     * @constructor
     * @param {Partial<_Entity>} data - Initial data to create the relationship entity
     * @description Initializes a new token relationship entity with the provided data.
     * Performs type conversions and validations on the input data to ensure proper
     * formatting and data integrity.
     * @memberof _Entity
     */
    constructor(data: Partial<_Entity>) {
        Object.assign(this, data);
        this.automatic_association = !!data.automatic_association;
        this.balance = Number(data.balance);
        this.created_timestamp = String(data.created_timestamp);
        this.decimals = Number(data.decimals);
        this.freeze_status = data.freeze_status as IHashgraph.IRestful.IHTS.IRelationship.FreezeStatusEnum;
        this.kyc_status = data.kyc_status as IHashgraph.IRestful.IHTS.IRelationship.KycStatusEnum;
        this.token_id = data.token_id !== undefined ? String(data.token_id) : null;
    }
}