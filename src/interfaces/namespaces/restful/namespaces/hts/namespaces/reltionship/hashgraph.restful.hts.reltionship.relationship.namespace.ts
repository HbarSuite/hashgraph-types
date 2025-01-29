import { _IEntity } from './interfaces/hashgraph.restful.hts.reltionship.entity.interface'
import { _FreezeStatusEnum } from './interfaces/hashgraph.restful.hts.reltionship.freeze-status.enum'
import { _KycStatusEnum } from './interfaces/hashgraph.restful.hts.reltionship.kyc-status.enum'

/**
 * @file hashgraph.restful.hts.reltionship.relationship.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the namespace for token relationship management in the Hashgraph Token Service (HTS) REST API.
 * This namespace consolidates interfaces and enums for handling token-account relationships, including:
 * - Freeze status management (frozen/unfrozen states)
 * - KYC verification status tracking
 * - Account-token relationship properties
 * @category Namespaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Relationship Namespace
 * @namespace _IRelationship
 * @description Provides a comprehensive set of types and enums for managing token-account relationships
 * in the Hashgraph Token Service (HTS). This namespace includes:
 * - Freeze status controls for restricting token transfers
 * - KYC status tracking for compliance management
 * - Relationship entity definitions for account-token associations
 * Used to maintain and track the state of how accounts interact with tokens.
 * @category Namespaces
 * @subcategory HTS
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example usage of the relationship namespace
 * import { _IRelationship } from '@hashgraph/sdk';
 * 
 * // Define a token relationship
 * const relationship: _IRelationship.IEntity = {
 *   automatic_association: true,
 *   balance: 1000,
 *   created_timestamp: "2023-01-01T00:00:00.000Z",
 *   decimals: 8,
 *   freeze_status: _IRelationship.FreezeStatusEnum.Unfrozen,
 *   kyc_status: _IRelationship.KycStatusEnum.Granted,
 *   token_id: "0.0.123456"
 * };
 * ```
 */
export namespace _IRelationship {
    /**
     * Freeze Status Enumeration
     * @type {_FreezeStatusEnum}
     * @description Defines the possible states for token transfer restrictions:
     * - NOT_APPLICABLE: Freeze feature not enabled for token
     * - FROZEN: Token transfers blocked for account
     * - UNFROZEN: Token transfers allowed for account
     * Used to control whether an account can transfer or receive specific tokens.
     * @see {@link _FreezeStatusEnum}
     * @memberof _IRelationship
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Check if account is frozen
     * const freezeStatus: _IRelationship.FreezeStatusEnum = relationship.freeze_status;
     * if (freezeStatus === _IRelationship.FreezeStatusEnum.Frozen) {
     *   console.log('Account cannot transfer tokens');
     * }
     * ```
     */
    export import FreezeStatusEnum = _FreezeStatusEnum

    /**
     * KYC Status Enumeration
     * @type {_KycStatusEnum}
     * @description Defines the possible states for KYC (Know Your Customer) verification:
     * - NOT_APPLICABLE: KYC not required for token
     * - GRANTED: Account has passed KYC verification
     * - REVOKED: Account's KYC verification is revoked
     * Used to manage compliance requirements for token operations.
     * @see {@link _KycStatusEnum}
     * @memberof _IRelationship
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Verify KYC status
     * const kycStatus: _IRelationship.KycStatusEnum = relationship.kyc_status;
     * if (kycStatus === _IRelationship.KycStatusEnum.Granted) {
     *   console.log('Account is KYC verified');
     * }
     * ```
     */
    export import KycStatusEnum = _KycStatusEnum

    /**
     * Token Relationship Entity Interface
     * @type {_IEntity}
     * @description Defines the complete structure for token-account relationships, including:
     * - Token balance and decimal precision
     * - Association status and settings
     * - KYC and freeze status states
     * - Creation timestamp and identifiers
     * Used to track and manage all aspects of how an account interacts with a specific token.
     * @see {@link _IEntity}
     * @memberof _IRelationship
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a new relationship entity
     * const newRelationship: _IRelationship.IEntity = {
     *   automatic_association: true,
     *   balance: 500,
     *   created_timestamp: new Date().toISOString(),
     *   decimals: 2,
     *   freeze_status: _IRelationship.FreezeStatusEnum.Unfrozen,
     *   kyc_status: _IRelationship.KycStatusEnum.Granted,
     *   token_id: "0.0.789012"
     * };
     * ```
     */
    export type IEntity = _IEntity
}