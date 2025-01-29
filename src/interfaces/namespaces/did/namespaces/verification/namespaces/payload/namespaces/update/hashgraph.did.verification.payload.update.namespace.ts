import { _IBody } from './interfaces/hashgraph.did.verification.payload.update.body.interface'
import { _IEntity } from './interfaces/hashgraph.did.verification.payload.update.entity.interface'

/**
 * Namespace containing interfaces and types for updating verification methods in Hashgraph DID documents
 * @namespace _IUpdate
 * @description Namespace for update-related interfaces in the Hashgraph DID Verification system.
 * Contains types for updating verification method properties like controller, type and public key.
 * The namespace provides a structured way to handle verification method updates in DID documents.
 * @category Namespaces
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const updatePayload: _IUpdate.IEntity = {
 *   method: {
 *     controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
 *     type: "Ed25519VerificationKey2018",
 *     publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
 *   }
 * };
 * ```
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods} W3C DID Verification Methods
 * @see {@link https://w3c-ccg.github.io/security-vocab/#Ed25519VerificationKey2018} Ed25519VerificationKey2018
 */
export namespace _IUpdate {
    /**
     * Type representing the body structure for updating a verification method
     * @typedef {_IBody} IBody
     * @description Represents the body structure for updating a verification method.
     * Contains the updated properties like controller, type and public key.
     * The body includes:
     * - controller: The DID that controls this verification method
     * - type: The cryptographic key type (Ed25519VerificationKey2018)
     * - publicKeyMultibase: The public key in multibase format
     * @see {@link _IBody}
     * @category Types
     * @since 2.0.0
     * @throws {Error} If the body contains invalid or malformed data
     * @remarks The body must conform to W3C DID specifications and use supported key types
     */
    export type IBody = _IBody

    /**
     * Type representing the complete update payload entity
     * @typedef {_IEntity} IEntity
     * @description Represents the payload structure for update operations in the verification process.
     * Wraps the update body in a method property for processing. The entity structure ensures proper
     * encapsulation of the update data and maintains consistency in the update process.
     * @see {@link _IEntity}
     * @category Types
     * @since 2.0.0
     * @throws {Error} If the entity structure is invalid or missing required fields
     * @remarks The entity must contain a valid method object with all required properties
     * @example
     * ```typescript
     * const entity: IEntity = {
     *   method: {
     *     controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
     *     type: "Ed25519VerificationKey2018",
     *     publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
     *   }
     * };
     * ```
     */
    export type IEntity = _IEntity
}
