import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * DID Document Info Interface
 * @export
 * @interface _IInfo
 * @namespace IHashgraph.IDID.IDocument._IInfo
 * @description Represents the complete structure of a DID (Decentralized Identifier)
 * Document, following the W3C DID Core specification. This interface defines all
 * core properties, verification methods, and relationships required for a valid
 * DID Document.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements W3C DID Core Document requirements
 * - Supports all verification relationship types
 * - Enables service endpoint management
 * - Maintains document integrity and structure
 * @example
 * ```typescript
 * const didDocument: _IInfo = {
 *   "@context": ["https://www.w3.org/ns/did/v1"],
 *   id: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
 *   controller: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
 *   verificationMethod: [{
 *     id: "#key-1",
 *     type: "Ed25519VerificationKey2020",
 *     controller: "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm",
 *     publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 *   }],
 *   authentication: ["#key-1"],
 *   assertionMethod: ["#key-1"],
 *   service: ["#service-1"]
 * };
 * ```
 */
export interface _IInfo {
    /**
     * JSON-LD context declarations
     * @type {string[]}
     * @description Defines the JSON-LD context for the DID document, including:
     * - W3C DID Core context
     * - Additional method-specific contexts
     * - Extension contexts as needed
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must include W3C DID Core context
     * - Order is significant
     * - Affects term resolution
     * - Critical for interoperability
     * @example ["https://www.w3.org/ns/did/v1", "https://w3id.org/security/suites/ed25519-2020/v1"]
     */
    "@context": string[];

    /**
     * Document controller identifier
     * @type {string}
     * @description The DID of the entity that has the authority to make changes
     * to this DID document. Can be the same as or different from the document
     * subject (id).
     * @optional
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must be a valid DID
     * - Controls document updates
     * - Enables delegation
     * - Critical for access control
     * @example "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm"
     */
    controller?: string;

    /**
     * Verification methods
     * @type {IHashgraph.IDID.IVerification.IMethod[]}
     * @description Array of cryptographic verification methods associated with
     * the DID, including:
     * - Public key material
     * - Biometric templates
     * - Other verification mechanisms
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Each method must be unique
     * - Supports multiple key types
     * - Used by verification relationships
     * - Critical for security operations
     */
    verificationMethod: IHashgraph.IDID.IVerification.IMethod[];

    /**
     * Authentication method references
     * @type {string[]}
     * @description References to verification methods that can be used to
     * authenticate as the DID subject. These methods prove control over the DID.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid methods
     * - Used for authentication
     * - Critical for identity proof
     * - Enables access control
     * @example ["#key-1"]
     */
    authentication: string[];

    /**
     * Assertion method references
     * @type {string[]}
     * @description References to verification methods that can be used to make
     * verifiable assertions on behalf of the DID subject.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid methods
     * - Used for making claims
     * - Enables verifiable credentials
     * - Supports attestations
     * @example ["#key-1"]
     */
    assertionMethod: string[];

    /**
     * Key agreement method references
     * @type {string[]}
     * @description References to verification methods used for key agreement
     * protocols. These enable secure communication channels with the DID subject.
     * @optional
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid methods
     * - Enables secure messaging
     * - Supports encryption
     * - Critical for privacy
     * @example ["#key-2"]
     */
    keyAgreement?: string[];

    /**
     * Capability invocation method references
     * @type {string[]}
     * @description References to verification methods that can be used to invoke
     * capabilities as the DID subject, enabling authorized actions.
     * @optional
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid methods
     * - Enables capability invocation
     * - Supports authorization
     * - Controls access rights
     * @example ["#key-3"]
     */
    capabilityInvocation?: string[];

    /**
     * Capability delegation method references
     * @type {string[]}
     * @description References to verification methods that can be used to delegate
     * capabilities to other DIDs, enabling authorized delegation.
     * @optional
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid methods
     * - Enables delegation
     * - Supports authorization chains
     * - Controls delegation rights
     * @example ["#key-4"]
     */
    capabilityDelegation?: string[];

    /**
     * Service endpoint references
     * @type {string[]}
     * @description References to service endpoints associated with the DID subject,
     * enabling interaction with various services and resources.
     * @optional
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must reference valid services
     * - Enables service discovery
     * - Supports interactions
     * - Maintains endpoint registry
     * @example ["#service-1"]
     */
    service?: string[];

    /**
     * Document subject identifier
     * @type {string}
     * @description The unique DID that this document describes and represents.
     * This is the primary identifier for the DID subject.
     * @required true
     * @memberof _IInfo
     * @since 2.0.0
     * @remarks
     * - Must be a valid DID
     * - Globally unique
     * - Primary document identifier
     * - Critical for resolution
     * @example "did:hedera:mainnet:7Prd74ry1Uct87nZqL3ny7aR7Cg46JamVbJgk8azVgUm"
     */
    id: string;
}