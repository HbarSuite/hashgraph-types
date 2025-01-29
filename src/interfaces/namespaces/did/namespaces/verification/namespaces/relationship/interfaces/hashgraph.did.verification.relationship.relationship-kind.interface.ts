import { _IRelationship } from '../hashgraph.did.verification.relationship.namespace'

/**
 * Interface for managing verification relationships in the Hashgraph DID system
 * @summary Verification Relationship Kind Interface
 * @description Defines the structure for verification relationships in the Hashgraph DID system.
 * Used to establish cryptographic relationships like authentication or assertion between DIDs and
 * verification methods. The relationship kind contains the cryptographic material and metadata
 * needed to verify claims and authenticate interactions.
 * @interface _IRelationshipKind
 * @property {string} id - Unique identifier for the verification relationship
 * @property {string} controller - DID of the entity controlling this relationship
 * @property {"Ed25519VerificationKey2018"} type - Type of verification key used
 * @property {_IRelationship.RelationshipType} relationshipType - Type of verification relationship
 * @property {string} publicKeyMultibase - Public key in multibase format
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const relationship: _IRelationshipKind = {
 *   id: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1",
 *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *   type: "Ed25519VerificationKey2018",
 *   relationshipType: "authentication",
 *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-relationships} W3C DID Verification Relationships
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export interface _IRelationshipKind {
    /**
     * Unique identifier for the verification relationship
     * @type {string}
     * @description The unique identifier for this verification relationship within the DID document.
     * Must be a valid DID fragment that can be used to reference this relationship. The ID typically
     * combines the DID with a key fragment to ensure uniqueness.
     * @required true
     * @example "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1"
     * @remarks Must be unique within the DID document and follow the DID URL syntax specification.
     * The fragment portion (#key-1) should be unique for each verification method.
     * @throws {Error} If the ID is not a valid DID URL or is not unique
     */
    id: string;

    /**
     * DID of the entity controlling this relationship
     * @type {string}
     * @description The DID of the entity that has control over this verification relationship.
     * The controller has the authority to update or revoke the relationship. Must be a valid DID
     * that can be resolved on the network to verify control authority.
     * @required true
     * @example "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * @remarks The controller must have proper authorization to manage this relationship.
     * Typically the controller is either the DID subject or a trusted entity.
     * @throws {Error} If the controller DID is invalid or cannot be resolved
     */
    controller: string;

    /**
     * Type of verification key used
     * @type {"Ed25519VerificationKey2018"}
     * @description The cryptographic key type used for this verification relationship.
     * Ed25519VerificationKey2018 represents an Ed25519 public key that follows the 2018
     * specification for digital signatures.
     * @required true
     * @example "Ed25519VerificationKey2018"
     * @remarks Currently only supports Ed25519VerificationKey2018 key type. This type is widely used
     * for its security properties and performance characteristics.
     * @throws {Error} If an unsupported key type is specified
     */
    type: "Ed25519VerificationKey2018";

    /**
     * Type of verification relationship
     * @type {_IRelationship.RelationshipType}
     * @description Specifies how this verification relationship can be used. Common types include
     * authentication for proving identity and assertionMethod for making verifiable claims.
     * The relationship type determines the valid use cases for the verification method.
     * @required true
     * @example "authentication"
     * @see {@link _IRelationship.RelationshipType}
     * @remarks Must be a valid relationship type as defined in the DID Core specification.
     * The type affects how the relationship can be used in verifiable credentials and presentations.
     * @throws {Error} If an invalid relationship type is specified
     */
    relationshipType: _IRelationship.RelationshipType;

    /**
     * Public key in multibase format
     * @type {string}
     * @description The public key associated with this verification relationship, encoded in
     * multibase format for interoperability. The multibase prefix 'z' indicates base58btc
     * encoding, commonly used for Ed25519 public keys.
     * @required true
     * @example "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
     * @remarks Must be a valid multibase-encoded public key matching the specified type.
     * The key must be properly formatted with the correct multibase prefix and valid
     * base58btc encoding.
     * @throws {Error} If the public key is not properly multibase encoded or invalid for Ed25519
     * @see {@link https://datatracker.ietf.org/doc/html/draft-multiformats-multibase} Multibase Specification
     */
    publicKeyMultibase: string;
}