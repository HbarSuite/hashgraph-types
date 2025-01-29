import { _IValidateErrorJSON } from './interfaces/hashgraph.did.validate-error.interface'
import { _IDocument } from './namespaces/document/hashgraph.did.document.namespace'
import { _IOwnership } from './namespaces/ownership/hashgraph.did.ownership.namespace'
import { _IService } from './namespaces/service/hashgraph.did.service.namespace'
import { _IVC } from './namespaces/vc/hashgraph.did.vc.namespace'
import { _IVerification } from './namespaces/verification/hashgraph.did.verification.namespace'

/**
 * @file hashgraph.did.namespace.ts
 * @module IHashgraph._IDID
 * @description Decentralized Identifier (DID) Interface Namespace for Hashgraph
 * Contains comprehensive types and interfaces for managing DIDs in the Hashgraph ecosystem,
 * including document management, verification methods, and service endpoints.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @see {@link https://www.w3.org/TR/did-core/}
 * @category Hashgraph
 * @subcategory DID
 */

/**
 * Namespace containing interfaces and types for Hashgraph DIDs
 * @namespace _IDID
 * @description Provides comprehensive types and interfaces for DID operations including:
 * - DID Document management and manipulation
 * - Verification methods and cryptographic proofs
 * - DID ownership and control mechanisms
 * - Service endpoint definitions and management
 * - Verifiable Credentials handling
 * @export
 * @since 2.0.0
 * @category Namespaces
 * @subcategory DID
 */
export namespace _IDID {
    /**
     * Type representing validation errors in JSON format
     * @type {IValidateErrorJSON}
     * @description Defines the structure for validation error messages and details
     * @see {@link _IValidateErrorJSON}
     * @example
     * ```typescript
     * const error: IValidateErrorJSON = {
     *   message: "Invalid DID format",
     *   details: ["DID must start with 'did:hedera:'"]
     * };
     * ```
     */
    export type IValidateErrorJSON = _IValidateErrorJSON

    /**
     * Namespace containing verification-related interfaces and types
     * @namespace IVerification
     * @description Provides types for DID verification including:
     * - Verification methods
     * - Verification relationships
     * - Authentication mechanisms
     * @see {@link _IVerification}
     */
    export import IVerification = _IVerification

    /**
     * Namespace containing DID document interfaces and types
     * @namespace IDocument
     * @description Defines structures for DID documents including:
     * - Core document properties
     * - Document metadata
     * - Document operations
     * @see {@link _IDocument}
     */
    export import IDocument = _IDocument

    /**
     * Namespace containing DID ownership interfaces and types
     * @namespace IOwnership
     * @description Provides types for managing DID ownership:
     * - Owner identification
     * - Control authority
     * - Transfer mechanisms
     * @see {@link _IOwnership}
     */
    export import IOwnership = _IOwnership

    /**
     * Namespace containing DID service interfaces and types
     * @namespace IService
     * @description Defines structures for DID services:
     * - Service endpoints
     * - Service types
     * - Service properties
     * @see {@link _IService}
     */
    export import IService = _IService

    /**
     * Namespace containing Verifiable Credential interfaces and types
     * @namespace IVC
     * @description Provides types for Verifiable Credentials:
     * - Credential schemas
     * - Proof formats
     * - Verification methods
     * @see {@link _IVC}
     */
    export import IVC = _IVC
}