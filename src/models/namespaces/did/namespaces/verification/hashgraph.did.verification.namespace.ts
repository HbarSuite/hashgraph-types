import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Method } from './models/hashgraph.did.verification.models.method.model'
import { _Payload } from './namespaces/payload/hashgraph.did.verification.payload.namespace'
import { _Relationship } from './namespaces/relationship/hashgraph.did.verification.relationship.namespace'

/**
 * @file hashgraph.did.verification.namespace.ts
 * @module Hashgraph.IDID
 * @namespace Hashgraph.IDID.Verification
 * @description Verification Interface Namespace for Hashgraph DID.
 * Implements W3C DID Core specification for verification methods and relationships.
 * This namespace provides comprehensive functionality for:
 * - Cryptographic verification method management
 * - Verification payload processing
 * - DID relationship management and validation
 * - Proof generation and verification
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 */

/**
 * @namespace _Verification
 * @description Namespace containing interfaces and types related to verification in the Hashgraph DID context.
 * Implements comprehensive verification functionality including:
 * - Cryptographic verification methods (Ed25519, ECDSA, etc.)
 * - Verification payload creation and processing
 * - Relationship management between DIDs
 * - Proof formats and validation
 * - Key management and rotation
 * @public
 * @since 2.0.0
 * 
 * @example
 * // Create a new verification method
 * const method = new _Verification.Method({
 *   id: '#key-1',
 *   type: 'Ed25519VerificationKey2018',
 *   controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
 *   publicKeyMultibase: 'z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'
 * });
 * 
 * // Create a verification payload
 * const payload = new _Verification.Payload.Create({
 *   type: 'Ed25519Signature2018',
 *   verificationMethod: '#key-1',
 *   created: '2023-01-01T00:00:00Z',
 *   proofPurpose: 'authentication'
 * });
 * 
 * // Register a verification relationship
 * const relationship = new _Verification.Relationship.Register({
 *   type: 'authentication',
 *   verificationMethod: '#key-1',
 *   controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'
 * });
 */
export namespace _Verification {
    /**
     * Verification method implementation
     * @class Method
     * @extends {_Method}
     * @description Implements cryptographic verification methods following W3C standards.
     * Provides functionality for:
     * - Key type management (Ed25519, ECDSA, etc.)
     * - Public key encoding and validation
     * - Controller association
     * - Method ID generation and validation
     * - Proof verification
     * @memberof _Verification
     * @public
     * @since 2.0.0
     * @see _Method
     * 
     * @example
     * const method = new Method({
     *   id: '#key-1',
     *   type: 'Ed25519VerificationKey2018',
     *   controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *   publicKeyMultibase: 'z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK'
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Did.Verification.Method' })
    export class Method extends _Method { }

    /**
     * Verification payload namespace
     * @namespace Payload
     * @description Namespace containing interfaces and implementations for verification payloads.
     * Implements functionality for:
     * - Proof creation and validation
     * - Signature generation and verification
     * - Timestamp management
     * - Purpose specification
     * - Challenge-response handling
     * - Domain validation
     * @memberof _Verification
     * @public
     * @since 2.0.0
     * @see _Payload
     * 
     * @example
     * const payload = new Payload.Create({
     *   type: 'Ed25519Signature2018',
     *   verificationMethod: '#key-1',
     *   created: '2023-01-01T00:00:00Z',
     *   proofPurpose: 'authentication',
     *   challenge: 'abc123',
     *   domain: 'example.com'
     * });
     */
    export import Payload = _Payload;

    /**
     * Verification relationship namespace
     * @namespace Relationship
     * @description Namespace containing interfaces and types for managing verification relationships.
     * Provides functionality for:
     * - Relationship type management
     * - Authentication methods
     * - Assertion methods
     * - Key agreement
     * - Capability invocation
     * - Capability delegation
     * @memberof _Verification
     * @public
     * @since 2.0.0
     * @see _Relationship
     * 
     * @example
     * const relationship = new Relationship.Register({
     *   type: 'authentication',
     *   verificationMethod: '#key-1',
     *   controller: 'did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK',
     *   relationship: 'authentication'
     * });
     */
    export import Relationship = _Relationship;
}