import { VerificationMethodSupportedKeyType } from "@hsuite/did-sdk-js/dist/identity/hcs/did/event/verification-method/types"

/**
 * Interface representing a verification method in a Decentralized Identifier (DID) document
 * @summary Verification Method Interface
 * @description Defines the structure for verification methods used in DID documents,
 * providing a standardized way to represent cryptographic verification materials.
 * This interface follows the W3C DID Core specification for verification methods.
 * @interface _IMethod
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements the W3C DID Core verification method specification
 * - Supports multiple key types through the VerificationMethodSupportedKeyType
 * - Uses multibase encoding for cross-platform compatibility
 * - Enables flexible key management and rotation
 * @example
 * ```typescript
 * const method: _IMethod = {
 *   id: "did:hedera:testnet:z6MkR3...#key-1",
 *   controller: "did:hedera:testnet:z6MkR3...",
 *   type: "Ed25519VerificationKey2020",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * };
 * ```
 */
export interface _IMethod {
    /**
     * The unique identifier for the verification method
     * @type {string}
     * @description A unique identifier for the verification method, composed of the
     * controller's DID and a key fragment. Must be unique within the DID document.
     * @required true
     * @example "did:hedera:testnet:z6MkR3...#key-1"
     * @remarks
     * - Must be a valid DID URL
     * - Should be globally unique
     * - Fragment identifier (#) must be unique within the DID
     * - Used for referencing this method in relationships
     */
    id: string;

    /**
     * The DID of the controller of this verification method
     * @type {string}
     * @description The DID of the entity that has authority over this verification
     * method. The controller can update, rotate, or revoke the method.
     * @required true
     * @example "did:hedera:testnet:z6MkR3..."
     * @remarks
     * - Must be a valid DID
     * - Can be the same as or different from the DID document subject
     * - Critical for authorization and access control
     * - Enables delegation and key management
     */
    controller: string;

    /**
     * The type of the verification method
     * @type {VerificationMethodSupportedKeyType}
     * @description Specifies the cryptographic key type and signature suite used by
     * this verification method. Must be one of the supported verification method types.
     * @required true
     * @example "Ed25519VerificationKey2020"
     * @remarks
     * - Must be a recognized key type from VerificationMethodSupportedKeyType
     * - Determines the cryptographic operations available
     * - Affects interoperability with other systems
     * - Should align with security requirements
     */
    type: VerificationMethodSupportedKeyType;

    /**
     * The public key in multibase format
     * @type {string}
     * @description The public key associated with this verification method, encoded
     * in multibase format for cross-platform compatibility and unambiguous encoding.
     * @required true
     * @example "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * @remarks
     * - Must be encoded using multibase format
     * - Encoding prefix must match the key type
     * - Used for cryptographic operations
     * - Critical for security and verification
     */
    publicKeyMultibase: string;
}