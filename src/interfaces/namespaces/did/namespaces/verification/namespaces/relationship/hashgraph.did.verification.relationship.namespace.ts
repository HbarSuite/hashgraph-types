import { _IRegister } from './interfaces/hashgraph.did.verification.relationship.register.interface'
import { _IRelationshipKind } from './interfaces/hashgraph.did.verification.relationship.relationship-kind.interface'
import { _IUpdateBody } from './interfaces/hashgraph.did.verification.relationship.update-body.interface'
import { _IUpdatePayload } from './interfaces/hashgraph.did.verification.relationship.update-payload.interface'

/**
 * @file relationship.namespace.ts
 * @module IHashgraph._IDID._IVerification._IRelationship
 * @description Relationship Interface Namespace for Hashgraph DID Verification.
 * Provides comprehensive types and interfaces for managing verification relationships
 * between DIDs and verification methods, implementing the W3C DID Core specification
 * for verification relationships.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/did-core/#verification-relationships}
 */
export namespace _IRelationship {

    /**
     * Types of verification relationships in the Hashgraph DID system
     * @description Defines the standard verification relationship types as specified
     * in the W3C DID Core specification, each serving a specific verification purpose.
     * @enum {string}
     * @remarks
     * - authentication: Used for identity verification and authentication
     * - assertionMethod: Used for making verifiable claims and assertions
     * - keyAgreement: Used for establishing secure communication channels
     * - capabilityDelegation: Used for delegating authority to other DIDs
     * - capabilityInvocation: Used for invoking delegated capabilities
     */
    export type RelationshipType =
        | "authentication"
        | "assertionMethod"
        | "keyAgreement"
        | "capabilityDelegation"
        | "capabilityInvocation"

    /**
     * Interface representing a relationship kind
     * @interface IRelationshipKind
     * @description Defines the structure and properties of a verification relationship,
     * specifying how verification methods are associated with specific relationship types.
     * @see {@link _IRelationshipKind}
     * @remarks
     * - Supports multiple verification methods per relationship
     * - Enables flexible relationship management
     * - Maintains relationship history
     * - Supports relationship constraints
     * @example
     * ```typescript
     * const relationshipKind: IRelationshipKind = {
     *   type: "authentication",
     *   methods: ["did:hedera:testnet:123#key-1"],
     *   controller: "did:hedera:testnet:123"
     * };
     * ```
     */
    export type IRelationshipKind = _IRelationshipKind

    /**
     * Interface for registering a new relationship
     * @interface IRegister
     * @description Defines the structure for registering new verification relationships,
     * including all necessary properties to establish a relationship between a DID and
     * its verification methods.
     * @see {@link _IRegister}
     * @remarks
     * - Supports multiple relationship types
     * - Validates method compatibility
     * - Ensures proper authorization
     * - Maintains relationship integrity
     * @example
     * ```typescript
     * const register: IRegister = {
     *   type: "authentication",
     *   methodId: "did:hedera:testnet:123#key-1",
     *   controller: "did:hedera:testnet:123"
     * };
     * ```
     */
    export type IRegister = _IRegister

    /**
     * Interface for updating an existing relationship
     * @interface IUpdateBody
     * @description Defines the structure for updating existing verification relationships,
     * allowing modification of relationship properties while maintaining security and
     * integrity.
     * @see {@link _IUpdateBody}
     * @remarks
     * - Preserves relationship history
     * - Validates update authorization
     * - Maintains relationship consistency
     * - Supports partial updates
     * @example
     * ```typescript
     * const updateBody: IUpdateBody = {
     *   type: "authentication",
     *   newMethods: ["did:hedera:testnet:123#key-2"],
     *   timestamp: "2023-12-23T10:42:00Z"
     * };
     * ```
     */
    export type IUpdateBody = _IUpdateBody

    /**
     * Interface for the payload when updating a relationship
     * @interface IUpdatePayload
     * @description Defines the complete payload structure for relationship updates,
     * including all necessary information for validating and processing the update.
     * @see {@link _IUpdatePayload}
     * @remarks
     * - Includes update metadata
     * - Supports authorization proof
     * - Enables atomic updates
     * - Maintains audit trail
     * @example
     * ```typescript
     * const updatePayload: IUpdatePayload = {
     *   relationship: "authentication",
     *   changes: { addMethods: ["did:hedera:testnet:123#key-2"] },
     *   proof: "..."
     * };
     * ```
     */
    export type IUpdatePayload = _IUpdatePayload
}