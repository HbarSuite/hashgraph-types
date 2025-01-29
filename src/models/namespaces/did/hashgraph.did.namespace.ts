import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _ValidateErrorJSON } from './models/hashgraph.did.models.validate-error.model'
import { _Document } from './namespaces/document/hashgraph.did.document.namespace'
import { _Ownership } from './namespaces/ownership/hashgraph.did.ownership.namespace'
import { _Service } from './namespaces/service/hashgraph.did.service.namespace'
import { _VC } from './namespaces/vc/hashgraph.did.vc.namespace'
import { _Verification } from './namespaces/verification/hashgraph.did.verification.namespace'

/**
 * @file hashgraph.did.namespace.ts
 * @module Hashgraph.DID
 * @namespace Hashgraph.DID
 * @description Decentralized Identifier (DID) Interface Namespace.
 * This namespace provides comprehensive functionality for managing Decentralized Identifiers
 * in the Hashgraph network, including:
 * - DID document management (creation, updates, deletion)
 * - Verification methods and relationship management
 * - Service endpoint configuration and handling
 * - Ownership and access control management
 * - Verifiable Credentials (VC) processing
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * The namespace implements:
 * - W3C DID Core specification compliance
 * - Standardized DID operations and methods
 * - Robust validation mechanisms
 * - Secure identity and credential management
 * - Interoperable service endpoints
 * 
 * @example
 * // Using DID validation
 * const error = new _DID.ValidateErrorJSON({
 *   message: "Invalid DID format",
 *   code: "INVALID_DID"
 * });
 * 
 * // Working with DID documents
 * const doc = new _DID.Document.Create({
 *   id: "did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK",
 *   controller: ["did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"]
 * });
 * 
 * // Managing verification methods
 * const verify = new _DID.Verification.Method({
 *   id: "#key-1",
 *   type: "Ed25519VerificationKey2018",
 *   controller: "did:hedera:testnet:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
 * });
 */
export namespace _DID {
    /**
     * Validation error JSON structure for DID operations
     * @class ValidateErrorJSON
     * @extends {_ValidateErrorJSON}
     * @description Represents the structure of a validation error in JSON format.
     * Used for standardized error reporting in DID operations, providing:
     * - Detailed error messages
     * - Error codes
     * - Additional context when available
     * @memberof _DID
     * @public
     * @since 2.0.0
     * 
     * @example
     * const error = new ValidateErrorJSON({
     *   message: "Invalid DID format",
     *   code: "INVALID_DID",
     *   context: { did: "invalid:did:format" }
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Did.ValidateErrorJSON' })
    export class ValidateErrorJSON extends _ValidateErrorJSON {}

    /**
     * DID Verification namespace
     * @namespace Verification
     * @description Namespace containing interfaces and types for DID verification.
     * Provides comprehensive verification functionality including:
     * - Verification methods (Ed25519, ECDSA, etc.)
     * - Cryptographic proof generation and validation
     * - Relationship management (authentication, assertion, etc.)
     * - Key management and rotation
     * @memberof _DID
     * @public
     * @since 2.0.0
     * @see _Verification
     */
    export import Verification = _Verification

    /**
     * DID Document namespace
     * @namespace Document
     * @description Namespace for DID document operations and management.
     * Implements functionality for:
     * - Document creation and initialization
     * - Document updates and versioning
     * - Document validation and verification
     * - Context and metadata management
     * @memberof _DID
     * @public
     * @since 2.0.0
     * @see _Document
     */
    export import Document = _Document

    /**
     * DID Ownership namespace
     * @namespace Ownership
     * @description Namespace for managing DID ownership and control.
     * Provides capabilities for:
     * - Ownership transfers and delegation
     * - Access control and permissions
     * - Controller management
     * - Multi-party ownership structures
     * @memberof _DID
     * @public
     * @since 2.0.0
     * @see _Ownership
     */
    export import Ownership = _Ownership

    /**
     * DID Service namespace
     * @namespace Service
     * @description Namespace for DID service endpoint management.
     * Handles all aspects of services including:
     * - Service endpoint definitions and types
     * - Endpoint configuration and updates
     * - Service validation and verification
     * - Protocol support and interoperability
     * @memberof _DID
     * @public
     * @since 2.0.0
     * @see _Service
     */
    export import Service = _Service

    /**
     * Verifiable Credentials namespace
     * @namespace VC
     * @description Namespace for managing Verifiable Credentials in DID context.
     * Implements comprehensive VC functionality:
     * - Credential issuance and revocation
     * - Verification and validation
     * - Credential schema management
     * - Proof formats and signatures
     * @memberof _DID
     * @public
     * @since 2.0.0
     * @see _VC
     */
    export import VC = _VC
}