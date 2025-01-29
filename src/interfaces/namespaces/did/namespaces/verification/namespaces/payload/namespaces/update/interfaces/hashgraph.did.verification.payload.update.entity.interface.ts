import { _IPayload } from '../../../hashgraph.did.verification.payload.namespace';

/**
 * Interface for updating verification method on Hashgraph Token Service
 * @summary Update Payload for Hashgraph DID Verification
 * @description Defines the structure for updating verification methods in Hashgraph DID documents.
 * This interface is used to modify existing verification methods by providing updated cryptographic
 * material and control parameters while maintaining the method's identity.
 * @interface _IEntity
 * @property {_IPayload.IUpdate.IBody} method - The updated verification method details
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const updateEntity: _IEntity = {
 *   method: {
 *     controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *     type: "Ed25519VerificationKey2018",
 *     publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
 *   }
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods} W3C DID Verification Methods
 * @see {@link _IPayload.IUpdate.IBody} Verification Method Update Body Interface
 */
export interface _IEntity {
    /**
     * The updated verification method details
     * @type {_IPayload.IUpdate.IBody}
     * @description Contains the complete verification method information to be updated, including:
     * - controller: The DID that controls this verification method
     * - type: The cryptographic key type (Ed25519VerificationKey2018)
     * - publicKeyMultibase: The public key in multibase format
     * The update operation will modify an existing verification method while preserving its identifier.
     * @required true
     * @example
     * {
     *   controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
     * }
     * @remarks The provided method details must conform to W3C DID specifications and use supported
     * cryptographic key types. The controller should have proper authorization to update the method.
     * @throws {Error} If the method details are invalid or the update operation is unauthorized
     */
    method: _IPayload.IUpdate.IBody;
}