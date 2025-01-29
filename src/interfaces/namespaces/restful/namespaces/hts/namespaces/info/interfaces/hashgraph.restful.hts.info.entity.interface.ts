import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _PauseStatusEnum } from './hashgraph.restful.hts.info.pause-status.enum'
import { _SupplyTypeEnum } from './hashgraph.restful.hts.info.supply-type.enum'
import { _TypeEnum } from './hashgraph.restful.hts.info.type.enum'

/**
 * @file hashgraph.restful.hts.info.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the comprehensive token information structure for the Hashgraph Token Service (HTS) REST API.
 * Contains all properties and metadata that describe a token's characteristics, permissions, and current state.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Hashgraph Token Information Interface
 * @interface _IEntity
 * @description Comprehensive interface representing a token's complete information on the Hashgraph Token Service (HTS).
 * Includes all token properties such as keys, supply information, timestamps, and metadata that define the token's
 * characteristics and current operational state.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const tokenInfo: _IEntity = {
 *   name: "Example Token",
 *   symbol: "EXT",
 *   decimals: "8",
 *   total_supply: "1000000",
 *   token_id: "0.0.1234567",
 *   type: _TypeEnum.FungibleCommon,
 *   treasury_account_id: "0.0.7654321"
 * };
 * ```
 */
export interface _IEntity {

    /**
     * Admin Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The administrative key that can be used to manage token properties and permissions.
     * This key has the highest level of control over the token.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    admin_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Auto Renew Account
     * @type {string}
     * @description The account ID that will be charged to extend the token's expiry time.
     * If null, auto-renewal is not configured.
     * @required false
     * @example "0.0.1234567"
     * @memberof _IEntity
     * @since 2.0.0
     */
    auto_renew_account?: string | null

    /**
     * Auto Renew Period
     * @type {number}
     * @description The period in seconds that will be added to the token's expiry time when auto-renewal occurs.
     * If null, auto-renewal is not configured.
     * @required false
     * @example 7776000
     * @memberof _IEntity
     * @since 2.0.0
     */
    auto_renew_period?: number | null

    /**
     * Created Timestamp
     * @type {string}
     * @description The timestamp when the token was created on the Hashgraph network.
     * Formatted as an ISO 8601 string.
     * @required false
     * @example "2023-01-01T12:00:00.000Z"
     * @memberof _IEntity
     * @since 2.0.0
     */
    created_timestamp?: string

    /**
     * Decimals
     * @type {string}
     * @description The number of decimal places used to represent the token's smallest unit.
     * Must be between 0 and 18 inclusive.
     * @required false
     * @example "8"
     * @memberof _IEntity
     * @since 2.0.0
     */
    decimals?: string

    /**
     * Deleted
     * @type {boolean}
     * @description Indicates whether the token has been deleted from the network.
     * If true, the token is no longer active.
     * @required false
     * @example false
     * @memberof _IEntity
     * @since 2.0.0
     */
    deleted?: boolean | null

    /**
     * Expiry Timestamp
     * @type {number}
     * @description The Unix timestamp (in seconds) when the token will expire.
     * After this time, the token will no longer be valid unless renewed.
     * @required false
     * @example 1735689600
     * @memberof _IEntity
     * @since 2.0.0
     */
    expiry_timestamp?: number | null

    /**
     * Fee Schedule Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to modify the token's custom fee schedule.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    fee_schedule_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Freeze Default
     * @type {boolean}
     * @description The default freeze status for new token accounts.
     * If true, new accounts will be frozen by default.
     * @required false
     * @example false
     * @memberof _IEntity
     * @since 2.0.0
     */
    freeze_default?: boolean

    /**
     * Freeze Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to freeze or unfreeze token accounts.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    freeze_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Initial Supply
     * @type {string}
     * @description The initial amount of tokens created when the token was deployed.
     * @required false
     * @example "1000000"
     * @memberof _IEntity
     * @since 2.0.0
     */
    initial_supply?: string

    /**
     * KYC Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to grant or revoke KYC status for token accounts.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    kyc_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Max Supply
     * @type {string}
     * @description The maximum number of tokens that can exist for this token type.
     * @required false
     * @example "1000000000"
     * @memberof _IEntity
     * @since 2.0.0
     */
    max_supply?: string

    /**
     * Modified Timestamp
     * @type {string}
     * @description The timestamp when the token was last modified.
     * Formatted as an ISO 8601 string.
     * @required false
     * @example "2023-01-01T12:00:00.000Z"
     * @memberof _IEntity
     * @since 2.0.0
     */
    modified_timestamp?: string

    /**
     * Name
     * @type {string}
     * @description The human-readable name of the token.
     * @required false
     * @example "My Token"
     * @memberof _IEntity
     * @since 2.0.0
     */
    name?: string

    /**
     * Memo
     * @type {string}
     * @description Additional notes or description about the token.
     * @required false
     * @example "Token for testing purposes"
     * @memberof _IEntity
     * @since 2.0.0
     */
    memo?: string

    /**
     * Pause Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to pause or unpause the token.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    pause_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Pause Status
     * @type {_PauseStatusEnum}
     * @description The current pause status of the token.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    pause_status?: _PauseStatusEnum

    /**
     * Supply Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to mint or burn tokens.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    supply_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Supply Type
     * @type {_SupplyTypeEnum}
     * @description The type of supply this token has (e.g., FINITE, INFINITE).
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    supply_type?: _SupplyTypeEnum

    /**
     * Symbol
     * @type {string}
     * @description The token's symbol or ticker.
     * @required false
     * @example "MTK"
     * @memberof _IEntity
     * @since 2.0.0
     */
    symbol?: string

    /**
     * Token ID
     * @type {string}
     * @description The unique identifier of the token on the Hashgraph network.
     * @required false
     * @example "0.0.1234567"
     * @memberof _IEntity
     * @since 2.0.0
     */
    token_id?: string | null

    /**
     * Total Supply
     * @type {string}
     * @description The current total supply of tokens in circulation.
     * @required false
     * @example "1000000"
     * @memberof _IEntity
     * @since 2.0.0
     */
    total_supply?: string

    /**
     * Treasury Account ID
     * @type {string}
     * @description The account that owns the initial supply of tokens.
     * @required false
     * @example "0.0.1234567"
     * @memberof _IEntity
     * @since 2.0.0
     */
    treasury_account_id?: string | null

    /**
     * Type
     * @type {_TypeEnum}
     * @description The type of token (e.g., FUNGIBLE_COMMON, NON_FUNGIBLE_UNIQUE).
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    type?: _TypeEnum

    /**
     * Wipe Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The key that can be used to wipe token balance from an account.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    wipe_key?: IHashgraph.ICommons.IKey.IEntity

    /**
     * Custom Fees
     * @type {IHashgraph.IRestful.ICustomFees.IFees}
     * @description The custom fee schedule associated with this token.
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    custom_fees?: IHashgraph.IRestful.ICustomFees.IFees
}