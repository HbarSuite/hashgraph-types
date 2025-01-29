import { _Register } from './models/hashgraph.did.verification.payload.models.register.model'
import { _Update } from './namespaces/update/hashgraph.did.verification.payload.update.namespace'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file payload.namespace.ts
 * @module hbarsuite/v2/smart-engines/libs/types/src/models/hedera/namespaces/did/namespaces/verification/namespaces/payload
 * @description Defines the Payload Namespace for Hashgraph DID Verification, containing classes for various payload operations.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * 
 * This file provides:
 * - Payload structures for DID operations
 * - Registration and update functionality
 * - Standardized payload formats
 */

/**
 * Namespace for managing DID verification payloads
 * 
 * @namespace _Payload
 * @description Provides comprehensive functionality for managing DID verification payloads including:
 * - Complete payload lifecycle management
 * - Registration and update operations
 * - Validation and verification
 * - Standardized data structures
 * @group DID Components
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This namespace provides a complete suite of tools for:
 * - Verification method registration
 * - Method update operations
 * - Payload validation and verification
 * - Data structure standardization
 * 
 * Key features:
 * - Strict payload validation
 * - Type-safe operations
 * - Complete lifecycle management
 * - Error handling
 * 
 * @example
 * // Using the Register class for new methods
 * const registerPayload = new _Payload.Register({
 *   controller: "did:hedera:testnet:z6MkR...",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkR..."
 * });
 * 
 * // Using the Update namespace for modifications
 * const updatePayload = new _Payload.Update.Entity({
 *   controller: "did:hedera:testnet:z6MkR...",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkR..."
 * });
 */
export namespace _Payload {
    /**
     * Class for managing verification method registration
     * 
     * @class Register
     * @extends {_Register}
     * @description Provides comprehensive functionality for registering verification methods including:
     * - Complete registration process
     * - Input validation and verification
     * - Data structure standardization
     * - Error handling
     * 
     * Key features:
     * - Controller DID validation
     * - Key type verification
     * - Public key format validation
     * - Registration process management
     * 
     * Validation rules:
     * - Valid controller DID format
     * - Supported key type
     * - Proper public key encoding
     * - Complete data structure
     * 
     * @example
     * // Create a new registration payload
     * const register = new Register({
     *   controller: "did:hedera:testnet:z6MkR...",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkR..."
     * });
     * 
     * @throws {Error} When validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Payload.Register' })
    export class Register extends _Register {}

    /**
     * Namespace for managing verification method updates
     * 
     * @namespace Update
     * @description Provides comprehensive functionality for updating verification methods including:
     * - Complete update lifecycle
     * - Method modification
     * - Data validation
     * - Update process management
     * 
     * Key features:
     * - Strict update validation
     * - Type-safe modifications
     * - Complete process tracking
     * - Error state handling
     * 
     * Update capabilities:
     * - Controller updates
     * - Key type changes
     * - Public key modifications
     * - Property updates
     * 
     * @example
     * // Create an update payload
     * const update = new Update.Entity({
     *   controller: "did:hedera:testnet:z6MkR...",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkR..."
     * });
     * 
     * // Handle update body
     * const body = new Update.Body({
     *   // update configuration
     * });
     * 
     * @throws {Error} When validation fails
     */
    export import Update = _Update
}