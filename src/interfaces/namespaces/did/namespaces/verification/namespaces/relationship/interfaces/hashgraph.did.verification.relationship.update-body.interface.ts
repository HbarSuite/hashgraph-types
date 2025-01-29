import { _IRelationship } from '../hashgraph.did.verification.relationship.namespace';

/**
 * Interface for updating verification relationships in the Hashgraph DID system
 * @summary Verification Relationship Update Body Interface
 * @description Defines the structure for updating an existing verification relationship in the Hashgraph DID system.
 * Used to modify relationship properties like controller, type, public key and relationship type. The update operation
 * allows changing the cryptographic material and control parameters while maintaining the relationship's identity.
 * @interface _IUpdateBody
 * @property {string} controller - The DID of the controller of this verification relationship
 * @property {"Ed25519VerificationKey2018"} type - The type of the verification key
 * @property {string} publicKeyMultibase - The public key in multibase format
 * @property {_IRelationship.RelationshipType} [relationshipType] - The type of verification relationship
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const updateBody: _IUpdateBody = {
 *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5",
 *   relationshipType: "authentication"
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-relationships} W3C DID Verification Relationships
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export interface _IUpdateBody {
    /**
     * The DID of the controller of this verification relationship
     * @type {string}
     * @description The DID of the entity that controls this verification relationship and can update or revoke it.
     * The controller must have the authority to manage the relationship and is responsible for its lifecycle.
     * @required true
     * @example "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * @remarks Must be a valid DID that can be resolved on the network. The controller DID should be active
     * and have the necessary permissions to manage verification relationships.
     * @throws {Error} If the controller DID is invalid or cannot be resolved
     */
    controller: string;

    /**
     * The type of the verification key
     * @type {"Ed25519VerificationKey2018"}
     * @description The cryptographic key type used by this verification relationship. Ed25519VerificationKey2018
     * represents an Ed25519 public key that follows the 2018 specification for digital signatures.
     * @required true
     * @example "Ed25519VerificationKey2018"
     * @remarks Currently only supports Ed25519VerificationKey2018 key type. This type is widely used
     * for its security properties and performance characteristics.
     * @throws {Error} If an unsupported key type is specified
     */
    type: "Ed25519VerificationKey2018";

    /**
     * The public key in multibase format
     * @type {string}
     * @description The public key associated with this verification relationship, encoded in multibase format
     * for interoperability. The multibase prefix 'z' indicates base58btc encoding, commonly used
     * for Ed25519 public keys.
     * @required true
     * @example "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
     * @remarks Must be a valid multibase-encoded public key matching the Ed25519 type. The key must
     * be properly formatted with the correct multibase prefix and valid base58btc encoding.
     * @throws {Error} If the public key is not properly multibase encoded or invalid for Ed25519
     * @see {@link https://datatracker.ietf.org/doc/html/draft-multiformats-multibase} Multibase Specification
     */
    publicKeyMultibase: string;

    /**
     * The type of verification relationship
     * @type {_IRelationship.RelationshipType}
     * @description Specifies how this verification relationship can be used in the DID document.
     * Common types include authentication, assertionMethod, keyAgreement, etc. The relationship type
     * determines the cryptographic operations this relationship is authorized to perform.
     * @required false
     * @example "authentication"
     * @remarks Must be one of the standardized relationship types defined in the W3C DID Core specification.
     * The relationship type affects the security model and usage constraints of the verification method.
     * @throws {Error} If an invalid or unsupported relationship type is specified
     * @see {@link _IRelationship.RelationshipType} Available relationship types
     * @see {@link https://www.w3.org/TR/did-core/#verification-relationships} W3C Verification Relationships
     */
    relationshipType?: _IRelationship.RelationshipType;
}