import { _IRelationship } from '../hashgraph.did.verification.relationship.namespace';

/**
 * Interface for registering a relationship in the Hashgraph DID verification system
 * @summary Verification Relationship Registration Interface
 * @description Defines the structure for registering a new relationship in the Hashgraph DID system.
 * Used to establish verification relationships like authentication or assertion between DIDs and
 * verification methods. The relationship registration allows linking cryptographic material to
 * specific verification purposes while maintaining proper authorization control.
 * @interface _IRegister
 * @property {_IRelationship.IRelationshipKind} relationship - The relationship details to be registered
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const registerPayload: _IRegister = {
 *   relationship: {
 *     id: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1",
 *     controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *     type: "Ed25519VerificationKey2018",
 *     relationshipType: "authentication",
 *     publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
 *   }
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-relationships} W3C DID Verification Relationships
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export interface _IRegister {
    /**
     * The relationship details to be registered
     * @type {_IRelationship.IRelationshipKind}
     * @description Contains the complete details of the relationship to be registered, including:
     * - id: The unique identifier for the relationship and associated verification method
     * - controller: The DID that controls this relationship
     * - type: The cryptographic key type (e.g. Ed25519VerificationKey2018)
     * - relationshipType: The type of verification relationship (e.g. authentication, assertionMethod)
     * - publicKeyMultibase: The public key in multibase format
     * The relationship establishes how a verification method can be used for specific purposes like
     * authentication or making assertions. The registration process adds this relationship to the
     * DID Document's verification relationships section.
     * @required true
     * @example
     * {
     *   id: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1",
     *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
     *   type: "Ed25519VerificationKey2018",
     *   relationshipType: "authentication",
     *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
     * }
     * @remarks Must contain valid values that conform to DID and multibase specifications.
     * The id must be unique within the DID Document. The controller should typically be
     * the DID itself or a trusted entity. The type must be a recognized verification key type.
     * The relationshipType must be a valid verification relationship type as defined in the
     * DID Core specification.
     * @throws {Error} If the relationship details are invalid or malformed
     * @see {@link _IRelationship.IRelationshipKind} Relationship Kind Interface
     */
    relationship: _IRelationship.IRelationshipKind;
}