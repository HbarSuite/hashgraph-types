/**
 * Interface for updating a verification method in the Hashgraph DID system
 * @summary Verification Method Update Body Interface
 * @description Defines the structure for updating an existing verification method in the Hashgraph DID system.
 * Used to modify verification method properties like controller, type and public key. The update operation
 * allows changing the cryptographic material and control parameters while maintaining the method's identity.
 * @interface _IBody
 * @property {string} controller - The DID of the controller of this verification method
 * @property {"Ed25519VerificationKey2018"} type - The type of the verification method
 * @property {string} publicKeyMultibase - The public key in multibase format
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const updateBody: _IBody = {
 *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods} W3C DID Verification Methods
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export interface _IBody {
    /**
     * The DID of the controller of this verification method
     * @type {string}
     * @description The DID of the entity that controls this verification method and can update or revoke it.
     * The controller must have the authority to manage the verification method and is responsible for its lifecycle.
     * @required true
     * @example "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * @remarks Must be a valid DID that can be resolved on the network. The controller DID should be active
     * and have the necessary permissions to manage verification methods.
     * @throws {Error} If the controller DID is invalid or cannot be resolved
     */
    controller: string;

    /**
     * The type of the verification method
     * @type {"Ed25519VerificationKey2018"}
     * @description The cryptographic key type used by this verification method. Ed25519VerificationKey2018
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
     * @description The public key associated with this verification method, encoded in multibase format
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
}