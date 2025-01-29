import { _IVerification } from '../../hashgraph.did.verification.namespace'
import { _IRegister } from './interfaces/hashgraph.did.verification.payload.register.interface'
import { _IUpdate } from './namespaces/update/hashgraph.did.verification.payload.update.namespace'

/**
 * @file payload.namespace.ts
 * @module IHashgraph._IDID._IVerification._IPayload
 * @description Defines the Payload Interface Namespace for Hashgraph DID Verification.
 * This namespace provides comprehensive types and interfaces for managing verification
 * method payloads throughout their lifecycle, including registration, updates, and
 * revocation operations.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods}
 */

/**
 * @namespace _IPayload
 * @description Encapsulates interfaces for Hashgraph DID Verification payload operations.
 * Provides comprehensive type definitions for managing verification method lifecycles,
 * including:
 * - Initial registration of verification methods
 * - Updates to existing methods
 * - Key rotation operations
 * - Method revocation
 * - Relationship management
 * @category Interfaces
 * @subcategory DID
 * @remarks
 * This namespace implements the payload structures required for all verification
 * method operations in the Hedera DID method, ensuring consistency and security
 * in method management.
 */
export namespace _IPayload {
    /**
     * @typedef {_IRegister} IRegister
     * @description Specifies the structure for registering a new verification method
     * in the Hashgraph DID system. This interface defines the complete payload format
     * required when adding a new verification method to a DID document.
     * @see {@link _IRegister}
     * @remarks
     * - Used for initial method registration
     * - Includes all required cryptographic material
     * - Supports multiple key types
     * - Enables relationship establishment
     * @example
     * ```typescript
     * const registerPayload: IRegister = {
     *   id: "did:hedera:testnet:123#key-1",
     *   type: "Ed25519VerificationKey2020",
     *   controller: "did:hedera:testnet:123",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * };
     * ```
     */
    export type IRegister = _IRegister;

    /**
     * @typedef {_IUpdate} IUpdate
     * @description Specifies the structure for updating an existing verification method
     * in the Hashgraph DID system. This interface defines the payload format required
     * when modifying or rotating an existing verification method.
     * @see {@link _IUpdate}
     * @remarks
     * - Supports key rotation operations
     * - Maintains method relationships
     * - Preserves verification history
     * - Enables controlled updates
     * @example
     * ```typescript
     * const updatePayload: IUpdate = {
     *   id: "did:hedera:testnet:123#key-1",
     *   newPublicKey: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   timestamp: "2023-12-23T10:42:00Z"
     * };
     * ```
     */
    export import IUpdate = _IUpdate;
}