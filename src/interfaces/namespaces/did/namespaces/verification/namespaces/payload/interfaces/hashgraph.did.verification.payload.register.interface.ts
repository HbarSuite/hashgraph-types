import { _IVerification } from '../../../hashgraph.did.verification.namespace';

/**
 * Interface for registering a verification method in the Hashgraph DID system
 * @summary Verification Method Registration Interface
 * @description Defines the structure for registering a new verification method in the Hashgraph DID system.
 * Used to add new verification methods to existing DID documents. The verification method contains
 * cryptographic material that can be used to authenticate or authorize interactions with the DID subject.
 * @interface _IRegister
 * @property {_IVerification.IMethod} method - The verification method to be registered
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const registerPayload: _IRegister = {
 *   method: {
 *     id: "did:hedera:testnet:z6MkR3...#key-1",
 *     controller: "did:hedera:testnet:z6MkR3...",
 *     type: "Ed25519VerificationKey2020",
 *     publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 *   }
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods} W3C DID Verification Methods
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2020} Ed25519VerificationKey2020
 */
export interface _IRegister {
    /**
     * The verification method to be registered
     * @type {_IVerification.IMethod}
     * @description Contains the complete details of the verification method to be registered,
     * including its unique identifier, controller DID, key type and public key. The verification
     * method must follow W3C DID specifications and use supported key types like Ed25519 or ECDSA.
     * The method will be added to the DID Document's verification methods section and can be
     * referenced by authentication and assertion relationships.
     * @required true
     * @see _IVerification.IMethod
     * @example
     * {
     *   id: "did:hedera:testnet:z6MkR3...#key-1",
     *   controller: "did:hedera:testnet:z6MkR3...",
     *   type: "Ed25519VerificationKey2020", 
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * }
     * @remarks Must contain valid values that conform to DID and multibase specifications.
     * The id must be unique within the DID Document. The controller should typically be
     * the DID itself or a trusted entity. The type must be a recognized verification key type.
     * The publicKeyMultibase must be a valid multibase-encoded public key.
     */
    method: _IVerification.IMethod;
}