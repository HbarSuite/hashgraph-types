import { _IEntity } from './interfaces/hashgraph.restful.transactions.schedule.entity.interface';
import { _IResponse } from './interfaces/hashgraph.restful.transactions.schedule.response.interface';
import { _ISignature } from './interfaces/hashgraph.restful.transactions.schedule.signature.interface';
import { _TypeEnum } from './interfaces/hashgraph.restful.transactions.schedule.type.enum';

/**
 * @file schedule.interface.ts
 * @module @hashgraph/sdk
 * @namespace _ISchedule
 * @description Namespace containing interfaces and types related to Hashgraph scheduled transactions.
 * This namespace provides type definitions and interfaces for working with scheduled transactions,
 * including entities, responses, signatures, and enumerated types.
 * @category Interfaces
 * @subcategory Transactions
 * @group Hashgraph
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Import the schedule namespace
 * import { _ISchedule } from '@hashgraph/sdk';
 * 
 * // Use the interfaces and types
 * const signature: _ISchedule.ISignature = {
 *   type: _ISchedule.TypeEnum.Ed25519,
 *   signature: "0x..."
 * };
 * ```
 * 
 * @property {_TypeEnum} TypeEnum - Enumeration of supported cryptographic signature types
 * @property {_IEntity} IEntity - Interface for schedule entity structure
 * @property {_IResponse} IResponse - Interface for schedule API responses
 * @property {_ISignature} ISignature - Interface for cryptographic signatures
 */
export namespace _ISchedule {
    /**
     * Schedule Signature Types
     * @description Enumeration of cryptographic signature types supported for scheduled transactions.
     * Includes various algorithms like Ed25519, RSA, ECDSA, etc.
     * @type {_TypeEnum}
     * @see {@link _TypeEnum}
     * @memberof _ISchedule
     * @since 2.0.0
     * @example
     * ```typescript
     * const signatureType = _ISchedule.TypeEnum.Ed25519;
     * ```
     * @public
     */
    export import TypeEnum = _TypeEnum;

    /**
     * Schedule Entity Interface
     * @description Interface defining the structure of a schedule entity.
     * Contains properties like admin key, timestamps, transaction details, and signatures.
     * @type {_IEntity}
     * @see {@link _IEntity}
     * @memberof _ISchedule
     * @since 2.0.0
     * @example
     * ```typescript
     * const scheduleEntity: _ISchedule.IEntity = {
     *   admin_key: "0x...",
     *   creator_account_id: "0.0.1234",
     *   executed_timestamp: "1234567890.000000000"
     * };
     * ```
     * @public
     */
    export type IEntity = _IEntity;

    /**
     * Schedule Response Interface
     * @description Interface defining the structure of schedule API responses.
     * Includes arrays of schedule entities and pagination links.
     * @type {_IResponse}
     * @see {@link _IResponse}
     * @memberof _ISchedule
     * @since 2.0.0
     * @example
     * ```typescript
     * const response: _ISchedule.IResponse = {
     *   schedules: [],
     *   links: {
     *     next: "/api/v1/schedules?limit=25&timestamp=lt:1234567890.000000000"
     *   }
     * };
     * ```
     * @public
     */
    export type IResponse = _IResponse;

    /**
     * Schedule Signature Interface
     * @description Interface defining the structure of cryptographic signatures
     * associated with scheduled transactions.
     * @type {_ISignature}
     * @see {@link _ISignature}
     * @memberof _ISchedule
     * @since 2.0.0
     * @example
     * ```typescript
     * const signature: _ISchedule.ISignature = {
     *   type: _ISchedule.TypeEnum.Ed25519,
     *   signature: "0x...",
     *   public_key_prefix: "0x..."
     * };
     * ```
     * @public
     */
    export type ISignature = _ISignature;
}