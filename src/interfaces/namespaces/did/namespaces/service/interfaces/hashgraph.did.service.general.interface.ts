/**
 * General Service Interface for DID Documents
 * @export
 * @interface _IGeneral
 * @description Defines the structure for service endpoints in a DID Document.
 * Services enable trusted interactions with a DID subject by providing standardized
 * endpoints for various types of communication and verification. Each service
 * includes a unique identifier, type classification, and endpoint URL.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements W3C DID Core service endpoint specification
 * - Supports multiple service types per DID
 * - Enables service discovery and verification
 * - Maintains compatibility with DID resolution
 * @example
 * ```typescript
 * const service: _IGeneral = {
 *   id: "did:hedera:testnet:z6Mkf...#service-1",
 *   type: "LinkedDomains",
 *   serviceEndpoint: "https://example.com"
 * };
 * ```
 */
export interface _IGeneral {
    /**
     * Unique service identifier
     * @type {string}
     * @description A composite identifier consisting of:
     * 1. The DID document identifier that owns the service
     * 2. A unique fragment identifier in the format "#service-{number}"
     * This ensures global uniqueness and proper service association.
     * @required true
     * @memberof _IGeneral
     * @since 2.0.0
     * @remarks
     * - Must follow the DID URL syntax
     * - Fragment must be unique within the DID document
     * - Used for service resolution and reference
     * - Critical for service management operations
     * @example "did:hedera:testnet:z6Mkf...#service-1"
     */
    id: string;

    /**
     * Service type classification
     * @type {"LinkedDomains" | "DIDCommMessaging"}
     * @description Specifies the service's purpose and protocol. Currently supports:
     * - LinkedDomains: For domain verification and association
     * - DIDCommMessaging: For secure DID-based communication
     * Each type defines specific behavior and endpoint requirements.
     * @required true
     * @memberof _IGeneral
     * @since 2.0.0
     * @remarks
     * - Must match supported service types
     * - Determines endpoint validation rules
     * - Affects service discovery behavior
     * - Influences security requirements
     * @example "LinkedDomains" or "DIDCommMessaging"
     */
    type: "LinkedDomains" | "DIDCommMessaging";

    /**
     * Service endpoint location
     * @type {string}
     * @description The URL where the service can be accessed. This must be:
     * - A valid URI following RFC 3986
     * - Accessible via the specified protocol
     * - Properly configured for the service type
     * - Secured appropriately for the use case
     * @required true
     * @memberof _IGeneral
     * @since 2.0.0
     * @remarks
     * - Must be a valid URL
     * - Should use HTTPS for production
     * - Must be accessible and stable
     * - Should implement proper security measures
     * @example "https://example.com/did-comm"
     */
    serviceEndpoint: string;
}