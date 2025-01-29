import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Commons } from '../../../../../../commons/hashgraph.commons.namespace';
import { _CustomFees } from '../../../../custom-fees/hashgraph.restful.custom_fees.namespace';

/**
 * @file hashgraph.restful.hts.info.models.entity.model.ts
 * @class _Entity
 * @description Represents detailed information about a token on the Hashgraph Token Service (HTS).
 * This class encapsulates various properties of a token, including its keys, supply details,
 * administrative settings, custom fees, and associated metadata. It provides a comprehensive
 * view of a token's configuration and current state on the Hedera network.
 * @implements {IHashgraph.IRestful.IHTS.IInfo.IEntity}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token info entity
 * const tokenInfo = new _Entity({
 *   token_id: "0.0.1234567",
 *   name: "My Token",
 *   symbol: "TKN",
 *   decimals: "8",
 *   total_supply: "1000000",
 *   treasury_account_id: "0.0.98765",
 *   admin_key: { key: "302a300506032b6570032100..." },
 *   supply_type: "FINITE",
 *   max_supply: "10000000",
 *   custom_fees: {
 *     fixed_fees: [],
 *     fractional_fees: []
 *   }
 * });
 */
export class _Entity {
    /**
     * The admin key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can perform administrative operations on the token.
     * This key has the highest level of control and can modify token properties,
     * update keys, and perform other administrative functions.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The administrative key that can modify token properties and permissions',
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    admin_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The auto renew account for the token
     * @type {string | null}
     * @description The account that will be charged to automatically extend the token's
     * expiration period. This account must contain sufficient HBAR to pay for the renewal
     * fees when the auto_renew_period is reached.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The account responsible for paying token renewal fees', 
        required: false, 
        nullable: true,
        example: "0.0.1234567"
    })
    @IsOptional()
    @IsString()
    auto_renew_account?: string | null;

    /**
     * The auto renew period for the token
     * @type {number | null}
     * @description The period in seconds that will automatically extend the token's expiry.
     * When this period is reached, and if an auto_renew_account is set, the token's
     * expiration will be extended by this duration.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The duration in seconds for automatic token renewal', 
        required: false, 
        nullable: true,
        example: 7776000 // 90 days in seconds
    })
    @IsOptional()
    @IsNumber()
    auto_renew_period?: number | null;

    /**
     * The timestamp when the token was created
     * @type {string}
     * @description The ISO 8601 formatted timestamp when the token was initially created
     * on the network. This value is immutable and represents the token's birth date.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The ISO 8601 formatted timestamp of token creation', 
        required: false,
        example: "2023-01-01T00:00:00.000Z"
    })
    @IsOptional()
    @IsString()
    created_timestamp?: string;

    /**
     * The number of decimal places for the token
     * @type {string}
     * @description The number of decimal places used to represent the token's fractional parts.
     * This value determines the smallest unit of the token that can be transferred.
     * For example, 8 decimals means 1.00000000 is the smallest unit.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The number of decimal places for token fractional units', 
        required: false,
        example: "8"
    })
    @IsOptional()
    @IsString()
    decimals?: string;

    /**
     * The deleted status of the token
     * @type {boolean | null}
     * @description Indicates whether the token has been deleted from the network.
     * Once a token is deleted, it cannot be recovered or reused, and all its
     * properties become immutable.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'Indicates if the token has been permanently deleted', 
        required: false, 
        nullable: true,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    deleted?: boolean | null;

    /**
     * The expiry timestamp of the token
     * @type {number | null}
     * @description The Unix timestamp when the token will expire if not renewed.
     * After expiration, the token can no longer be transferred but can still
     * be renewed if auto_renew_account has sufficient balance.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The Unix timestamp when the token will expire', 
        required: false, 
        nullable: true,
        example: 1735689600 // Unix timestamp
    })
    @IsOptional()
    @IsNumber()
    expiry_timestamp?: number | null;

    /**
     * The fee schedule key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can modify the token's custom fee schedule.
     * This key allows updating fixed fees, fractional fees, and other fee-related
     * parameters after token creation.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can modify the token\'s custom fee schedule', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    fee_schedule_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The freeze default status of the token
     * @type {boolean}
     * @description The default freeze status for new token holders.
     * If true, new accounts receiving the token will start in a frozen state
     * and must be explicitly unfrozen to transfer tokens.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The default freeze status for new token holders', 
        required: false,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    freeze_default?: boolean;

    /**
     * The freeze key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can freeze or unfreeze token holders.
     * This key controls the ability to prevent specific accounts from
     * transferring tokens, typically used for compliance purposes.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can freeze or unfreeze token holders', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    freeze_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The initial supply of the token
     * @type {string}
     * @description The initial amount of tokens created during token deployment.
     * This value is immutable and represents the starting supply of the token.
     * The actual number of tokens is this value * 10^decimals.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The initial amount of tokens created at deployment', 
        required: false,
        example: "1000000"
    })
    @IsOptional()
    @IsString()
    initial_supply?: string;

    /**
     * The KYC key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can grant or revoke KYC status to token holders.
     * This key is used for compliance purposes to control which accounts are
     * allowed to hold and transfer the token based on KYC verification.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can grant or revoke KYC status for token holders', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    kyc_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The maximum supply of the token
     * @type {string}
     * @description The maximum number of tokens that can exist.
     * For finite supply tokens, this represents the absolute cap on token supply.
     * The actual maximum number of tokens is this value * 10^decimals.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The maximum possible supply of tokens', 
        required: false,
        example: "100000000"
    })
    @IsOptional()
    @IsString()
    max_supply?: string;

    /**
     * The timestamp when the token was last modified
     * @type {string}
     * @description The ISO 8601 formatted timestamp of the last modification to the token's
     * properties or state. This is updated whenever any mutable property is changed.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The ISO 8601 formatted timestamp of the last token modification', 
        required: false,
        example: "2023-01-01T12:00:00.000Z"
    })
    @IsOptional()
    @IsString()
    modified_timestamp?: string;

    /**
     * The name of the token
     * @type {string}
     * @description The human-readable name of the token.
     * This is typically a descriptive name that helps identify the token's
     * purpose or brand.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The human-readable name of the token', 
        required: false,
        example: "My Token"
    })
    @IsOptional()
    @IsString()
    name?: string;

    /**
     * The memo field of the token
     * @type {string}
     * @description Additional notes or description about the token.
     * This field can contain any arbitrary string data up to 100 bytes.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'Additional notes or description about the token', 
        required: false,
        example: "Token for testing purposes"
    })
    @IsOptional()
    @IsString()
    memo?: string;

    /**
     * The pause key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can pause or unpause all token transfers.
     * When a token is paused, no transfers can occur between any accounts
     * until the token is unpaused.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can pause or unpause all token transfers', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    pause_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The pause status of the token
     * @type {IHashgraph.IRestful.IHTS.IInfo.PauseStatusEnum}
     * @description The current pause status of the token.
     * Indicates whether token transfers are currently allowed or paused.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The current pause status of token transfers', 
        required: false, 
        enum: IHashgraph.IRestful.IHTS.IInfo.PauseStatusEnum,
        example: "UNPAUSED"
    })
    @IsOptional()
    pause_status?: IHashgraph.IRestful.IHTS.IInfo.PauseStatusEnum;

    /**
     * The supply key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can change the token's supply.
     * This key allows minting new tokens or burning existing ones,
     * subject to the supply_type and max_supply constraints.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can mint or burn tokens to change the supply', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    supply_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The supply type of the token
     * @type {IHashgraph.IRestful.IHTS.IInfo.SupplyTypeEnum}
     * @description The type of supply mechanism for the token.
     * Determines whether the token has a finite maximum supply or can
     * have an infinite supply.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The type of supply mechanism (FINITE or INFINITE)', 
        required: false, 
        enum: IHashgraph.IRestful.IHTS.IInfo.SupplyTypeEnum,
        example: "FINITE"
    })
    @IsOptional()
    supply_type?: IHashgraph.IRestful.IHTS.IInfo.SupplyTypeEnum;

    /**
     * The symbol of the token
     * @type {string}
     * @description The abbreviated symbol or ticker of the token.
     * This is typically a short string used to identify the token
     * in trading or display contexts.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The abbreviated symbol or ticker of the token', 
        required: false,
        example: "TKN"
    })
    @IsOptional()
    @IsString()
    symbol?: string;

    /**
     * The token identifier
     * @type {string | null}
     * @description The unique identifier of the token on the Hedera network.
     * This ID is used to uniquely identify the token in all operations
     * and queries.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The unique identifier of the token on the Hedera network', 
        required: false, 
        nullable: true,
        example: "0.0.1234567"
    })
    @IsOptional()
    @IsString()
    token_id?: string | null;

    /**
     * The total supply of the token
     * @type {string}
     * @description The current total supply of the token in circulation.
     * This value changes when tokens are minted or burned. The actual
     * number of tokens is this value * 10^decimals.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The current total supply of tokens in circulation', 
        required: false,
        example: "1000000"
    })
    @IsOptional()
    @IsString()
    total_supply?: string;

    /**
     * The treasury account identifier
     * @type {string | null}
     * @description The account that owns the initial token supply and receives
     * any tokens minted after creation. This account has special privileges
     * for token operations.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The account that owns the initial supply and receives minted tokens', 
        required: false, 
        nullable: true,
        example: "0.0.1234568"
    })
    @IsOptional()
    @IsString()
    treasury_account_id?: string | null;

    /**
     * The type of the token
     * @type {IHashgraph.IRestful.IHTS.IInfo.TypeEnum}
     * @description The classification of the token.
     * Determines whether the token is fungible or non-fungible and
     * its specific variant type.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The classification of the token (e.g., FUNGIBLE_COMMON, NON_FUNGIBLE_UNIQUE)', 
        required: false, 
        enum: IHashgraph.IRestful.IHTS.IInfo.TypeEnum,
        example: "FUNGIBLE_COMMON"
    })
    @IsOptional()
    type?: IHashgraph.IRestful.IHTS.IInfo.TypeEnum;

    /**
     * The wipe key of the token
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can wipe token balance from an account.
     * This key allows forcibly removing tokens from any account,
     * typically used for regulatory compliance.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The key that can wipe token balances from accounts', 
        required: false,
        example: {
            key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Commons.Key.Entity)
    wipe_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * The custom fees configuration
     * @type {IHashgraph.IRestful.ICustomFees.IFees}
     * @description The custom fee schedule for the token.
     * Defines any fixed or fractional fees that are charged on token
     * transfers, including fee collectors and thresholds.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The custom fee schedule for token transfers', 
        required: false,
        example: {
            created_timestamp: "2023-01-01T00:00:00.000Z",
            fixed_fees: [],
            fractional_fees: []
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _CustomFees.Fees)
    custom_fees?: IHashgraph.IRestful.ICustomFees.IFees;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {IHashgraph.IRestful.IHTS.IInfo.IEntity} data - Initial data to create the token info entity
     * @description Initializes a new token info entity with the provided data.
     * All properties are optional and will be set based on the provided data object.
     * @memberof _Entity
     */
    constructor(data: IHashgraph.IRestful.IHTS.IInfo.IEntity) {
        Object.assign(this, data);

        // Validate types
        if (this.admin_key && !(this.admin_key instanceof _Commons.Key.Entity)) {
            throw new Error('Invalid admin_key: must be an instance of IHashgraph.ICommons.IKey.Entity');
        }
        if (this.auto_renew_account !== undefined && this.auto_renew_account !== null && typeof this.auto_renew_account !== 'string') {
            throw new Error('Invalid auto_renew_account: must be a string or null');
        }
        if (this.auto_renew_period !== undefined && this.auto_renew_period !== null && typeof this.auto_renew_period !== 'number') {
            throw new Error('Invalid auto_renew_period: must be a number or null');
        }

        if (this.custom_fees && !(this.custom_fees instanceof _CustomFees.Fees)) {
            throw new Error('Invalid custom_fees: must be an instance of IHashgraph.IRestful.ICustomFees.Fees');
        }
    }
}