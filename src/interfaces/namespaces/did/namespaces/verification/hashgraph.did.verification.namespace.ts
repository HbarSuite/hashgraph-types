import { _IMethod } from './interfaces/hashgraph.did.verification.method.interface'
import { _IPayload } from './namespaces/payload/hashgraph.did.verification.payload.namespace'
import { _IRelationship } from './namespaces/relationship/hashgraph.did.verification.relationship.namespace'

/**
 * @file verification.namespace.ts
 * @module IHashgraph._IDID._IVerification
 * @description Verification Interface Namespace for Hashgraph DID. Provides a comprehensive
 * set of types and interfaces for managing DID verification methods, payloads, and relationships.
 * This namespace is crucial for implementing the verification aspects of the DID specification.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @see {@link https://www.w3.org/TR/did-core/#verification-methods}
 * @category Hashgraph
 * @subcategory DID
 */

/**
 * Namespace containing interfaces and types related to verification in the Hashgraph DID context
 * @namespace _IVerification
 * @description Provides comprehensive types and interfaces for DID verification including:
 * - Cryptographic verification methods and their management
 * - Verification payloads for different operations
 * - Verification relationships and their lifecycle
 * - Authentication and authorization mechanisms
 * - Key management and rotation capabilities
 * @export
 * @since 2.0.0
 * @category Namespaces
 * @subcategory DID
 * @remarks
 * This namespace implements the W3C DID Core specification's verification requirements,
 * ensuring compatibility with the broader DID ecosystem while providing Hedera-specific
 * optimizations and features.
 */
export namespace _IVerification {
    /**
     * Type representing a verification method
     * @type {_IMethod}
     * @description Defines the structure of a verification method used for authentication,
     * authorization, and other cryptographic operations in the DID context. Each method
     * includes identifiers, controllers, and cryptographic material.
     * @see {@link _IMethod}
     * @example
     * ```typescript
     * const method: IMethod = {
     *   id: "did:hedera:testnet:123#key-1",
     *   type: "Ed25519VerificationKey2020",
     *   controller: "did:hedera:testnet:123",
     *   publicKeyMultibase: "z6MkqRYqQiSgvZQdnBytw86Qbs2ZWUkGv22od935YF4s8M7V"
     * };
     * ```
     */
    export type IMethod = _IMethod;

    /**
     * Namespace containing interfaces related to verification payloads
     * @namespace IPayload
     * @description Contains interfaces for structuring and managing verification payloads,
     * supporting operations such as:
     * - Key registration and updates
     * - Relationship establishment and modification
     * - Method revocation and rotation
     * - Proof generation and validation
     * @see {@link _IPayload}
     * @remarks
     * Payloads are designed to be extensible while maintaining backward compatibility
     * and interoperability with different DID methods.
     */
    export import IPayload = _IPayload;

    /**
     * Namespace containing interfaces and types related to verification relationships
     * @namespace IRelationship
     * @description Defines interfaces for managing the relationships between DIDs and
     * verification methods, including:
     * - Authentication relationships for identity verification
     * - Assertion relationships for claims and proofs
     * - Key agreement relationships for secure communication
     * - Capability relationships for authorization
     * @see {@link _IRelationship}
     * @remarks
     * Relationships are fundamental to the DID architecture, enabling flexible and
     * secure delegation of authority and capabilities between DIDs.
     */
    export import IRelationship = _IRelationship;
}