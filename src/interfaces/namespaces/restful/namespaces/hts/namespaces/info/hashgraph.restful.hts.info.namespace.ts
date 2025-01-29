import { _IEntity } from './interfaces/hashgraph.restful.hts.info.entity.interface'
import { _PauseStatusEnum } from './interfaces/hashgraph.restful.hts.info.pause-status.enum'
import { _SupplyTypeEnum } from './interfaces/hashgraph.restful.hts.info.supply-type.enum'
import { _TypeEnum } from './interfaces/hashgraph.restful.hts.info.type.enum'

/**
 * @file hashgraph.restful.hts.info.namespace.ts
 * @namespace IHashgraph.IRestful._IHTS._IInfo
 * @description Defines the namespace for Hedera Token Service (HTS) token information and metadata.
 * This namespace provides comprehensive type definitions for token properties, status, and characteristics
 * used in the REST API.
 * @category Namespaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Importing and using the HTS Info namespace
 * import { _IHTS } from '@hashgraph/sdk';
 * 
 * // Using token type enum
 * const tokenType: _IHTS.IInfo.TypeEnum = _IHTS.IInfo.TypeEnum.FUNGIBLE;
 * 
 * // Using pause status enum
 * const pauseStatus: _IHTS.IInfo.PauseStatusEnum = _IHTS.IInfo.PauseStatusEnum.UNPAUSED;
 * 
 * // Using token entity interface
 * const tokenEntity: _IHTS.IInfo.IEntity = {
 *   token_id: "0.0.1234",
 *   name: "Example Token",
 *   symbol: "EXT",
 *   decimals: 8,
 *   type: _IHTS.IInfo.TypeEnum.FUNGIBLE,
 *   supply_type: _IHTS.IInfo.SupplyTypeEnum.FINITE,
 *   pause_status: _IHTS.IInfo.PauseStatusEnum.UNPAUSED
 * };
 * ```
 */
export namespace _IInfo {
    /**
     * Token Pause Status Enumeration
     * @description Represents the possible pause states of a token:
     * - PAUSED: Token transfers are temporarily suspended
     * - UNPAUSED: Token transfers are allowed
     * - NOT_APPLICABLE: Pause feature is not enabled for this token
     * @type {_PauseStatusEnum}
     * @see {@link _PauseStatusEnum} for detailed enum values
     * @public
     * 
     * @example
     * ```typescript
     * const pauseStatus = _IInfo.PauseStatusEnum.UNPAUSED;
     * ```
     */
    export import PauseStatusEnum = _PauseStatusEnum

    /**
     * Token Supply Type Enumeration
     * @description Defines the supply characteristics of a token:
     * - FINITE: Token has a fixed maximum supply
     * - INFINITE: Token can have unlimited supply
     * @type {_SupplyTypeEnum}
     * @see {@link _SupplyTypeEnum} for detailed enum values
     * @public
     * 
     * @example
     * ```typescript
     * const supplyType = _IInfo.SupplyTypeEnum.FINITE;
     * ```
     */
    export import SupplyTypeEnum = _SupplyTypeEnum

    /**
     * Token Type Enumeration
     * @description Specifies the fundamental nature of the token:
     * - FUNGIBLE: Tokens are interchangeable (like currency)
     * - NON_FUNGIBLE: Each token is unique (like collectibles)
     * @type {_TypeEnum}
     * @see {@link _TypeEnum} for detailed enum values
     * @public
     * 
     * @example
     * ```typescript
     * const tokenType = _IInfo.TypeEnum.FUNGIBLE;
     * ```
     */
    export import TypeEnum = _TypeEnum

    /**
     * Token Entity Interface
     * @description Comprehensive interface for token properties and configuration:
     * - Basic metadata (name, symbol, decimals)
     * - Supply information and limits
     * - Administrative keys and permissions
     * - Current status and lifecycle properties
     * @type {_IEntity}
     * @see {@link _IEntity} for detailed property definitions
     * @public
     * 
     * @example
     * ```typescript
     * const tokenEntity: IEntity = {
     *   token_id: "0.0.1234",
     *   name: "Example Token",
     *   symbol: "EXT",
     *   decimals: 8,
     *   initial_supply: "1000000",
     *   total_supply: "1000000",
     *   max_supply: "10000000",
     *   type: TypeEnum.FUNGIBLE,
     *   supply_type: SupplyTypeEnum.FINITE,
     *   pause_status: PauseStatusEnum.UNPAUSED
     * };
     * ```
     */
    export type IEntity = _IEntity
}