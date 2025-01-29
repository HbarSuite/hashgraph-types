import { _IInfo } from './interfaces/hashgraph.did.document.info.interface'
import { _IRegister } from './interfaces/hashgraph.did.document.register.interface'

/**
 * @file document.namespace.ts
 * @module IHashgraph._IDID._IDocument
 * @description DID Document Interface Namespace for Hashgraph. Provides comprehensive
 * types and interfaces for managing DID Documents, implementing the W3C DID Core
 * specification for document structure, creation, and management.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/did-core/#did-documents}
 * @remarks
 * This namespace implements the core DID Document functionality as specified in
 * the W3C DID Core specification, providing types for document creation,
 * management, and verification.
 */
export namespace _IDocument {
    /**
     * DID Document Information Type
     * @type {_IInfo}
     * @description Defines the complete structure of a DID Document, including:
     * - Document context and metadata
     * - Verification methods and relationships
     * - Service endpoints
     * - Authentication mechanisms
     * Following the W3C DID Core specification requirements.
     * @memberof _IDocument
     * @since 2.0.0
     * @remarks
     * - Implements W3C DID Document structure
     * - Supports multiple verification methods
     * - Enables service endpoint management
     * - Maintains document integrity
     * @example
     * ```typescript
     * const docInfo: IInfo = {
     *   "@context": ["https://www.w3.org/ns/did/v1"],
     *   id: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
     *   verificationMethod: [{
     *     id: "#key-1",
     *     type: "Ed25519VerificationKey2020",
     *     controller: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
     *     publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     *   }],
     *   authentication: ["#key-1"],
     *   service: [{
     *     id: "#service-1",
     *     type: "LinkedDomains",
     *     serviceEndpoint: "https://example.com"
     *   }]
     * };
     * ```
     * @see _IInfo
     */
    export type IInfo = _IInfo;

    /**
     * DID Document Registration Type
     * @type {_IRegister}
     * @description Defines the structure for registering new DID Documents, including:
     * - Initial verification key material
     * - Document metadata
     * - Optional service endpoints
     * - Registration parameters
     * @memberof _IDocument
     * @since 2.0.0
     * @remarks
     * - Validates registration requirements
     * - Ensures proper key formatting
     * - Supports service initialization
     * - Enables document creation
     * @example
     * ```typescript
     * const registration: IRegister = {
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   metadata: {
     *     created: "2023-12-23T10:42:00Z",
     *     network: "testnet"
     *   },
     *   services: [{
     *     type: "LinkedDomains",
     *     endpoint: "https://example.com"
     *   }]
     * };
     * ```
     * @see _IRegister
     */
    export type IRegister = _IRegister;
}