import { _IRelationship } from '../hashgraph.did.verification.relationship.namespace';

/**
 * Interface for updating verification relationships in the Hashgraph DID system
 * @summary Verification Relationship Update Payload Interface
 * @description Defines the structure for updating an existing verification relationship in the Hashgraph DID system.
 * Used to modify relationship properties like controller, type, public key and relationship type. The update payload
 * wraps the update body in a relationship property for processing through the Hashgraph Token Service.
 * @interface _IUpdatePayload
 * @property {_IRelationship.IUpdateBody} relationship - The relationship details to be updated
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const updatePayload: _IUpdatePayload = {
 *   relationship: {
 *     controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *     type: "Ed25519VerificationKey2018",
 *     publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5",
 *     relationshipType: "authentication"
 *   }
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-relationships} W3C DID Verification Relationships
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export interface _IUpdatePayload {
    /**
     * The relationship details to be updated
     * @type {_IRelationship.IUpdateBody}
     * @description Contains the complete details of the relationship to be updated, including:
     * - controller: The DID that controls this relationship
     * - type: The cryptographic key type (e.g. Ed25519VerificationKey2018)
     * - publicKeyMultibase: The public key in multibase format
     * - relationshipType: The type of verification relationship (e.g. authentication)
     * The update operation modifies an existing relationship while preserving its identity.
     * The relationship establishes how a verification method can be used for specific purposes.
     * @required true
     * @example
     * {
     *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5",
     *   relationshipType: "authentication"
     * }
     * @remarks The provided relationship details must conform to W3C DID specifications and use supported
     * cryptographic key types. The controller should have proper authorization to update the relationship.
     * @throws {Error} If the relationship details are invalid or the update operation is unauthorized
     * @memberof _IUpdatePayload
     */
    relationship: _IRelationship.IUpdateBody;
}