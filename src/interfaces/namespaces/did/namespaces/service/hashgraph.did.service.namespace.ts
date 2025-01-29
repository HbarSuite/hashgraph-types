import { _IGeneral } from './interfaces/hashgraph.did.service.general.interface'
import { _IRegister } from './interfaces/hashgraph.did.service.register.interface'
import { _IUpdate } from './namespaces/update/hashgraph.did.service.update.namespace'

/**
 * @file service.namespace.ts
 * @module IHashgraph._IDID._IService
 * @description DID Service Interface Namespace for Hashgraph. Provides comprehensive
 * types and interfaces for managing service endpoints in DID Documents, implementing
 * the W3C DID Core specification for service endpoints.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/did-core/#services}
 * @remarks
 * This namespace implements the service endpoint functionality specified in the
 * W3C DID Core specification, enabling DIDs to advertise means of communicating
 * with the DID subject or associated entities.
 */
export namespace _IService {
    /**
     * General Service Type
     * @type {_IGeneral}
     * @description Defines the core structure for DID Document services, including:
     * - Unique service identifiers
     * - Service types and classifications
     * - Service endpoint URLs and configurations
     * - Additional service metadata
     * @see {@link _IGeneral}
     * @remarks
     * - Supports multiple service types
     * - Enables secure endpoint definition
     * - Maintains service discoverability
     * - Supports extensible metadata
     * @example
     * ```typescript
     * const service: IGeneral = {
     *   id: "did:hedera:testnet:z6Mk...#service-1",
     *   type: "LinkedDomains",
     *   serviceEndpoint: "https://example.com",
     *   metadata: {
     *     version: "1.0",
     *     protocol: "https"
     *   }
     * };
     * ```
     */
    export type IGeneral = _IGeneral;

    /**
     * Service Registration Type
     * @type {_IRegister}
     * @description Defines the structure for registering new services in a DID Document,
     * including:
     * - Service configuration
     * - Registration metadata
     * - Validation requirements
     * - Authorization details
     * @see {@link _IRegister}
     * @remarks
     * - Validates service configurations
     * - Ensures unique service IDs
     * - Supports batch registration
     * - Maintains registration history
     * @example
     * ```typescript
     * const register: IRegister = {
     *   service: {
     *     id: "did:hedera:testnet:z6Mk...#service-1",
     *     type: "LinkedDomains",
     *     serviceEndpoint: "https://example.com"
     *   },
     *   metadata: {
     *     timestamp: "2023-12-23T10:42:00Z",
     *     controller: "did:hedera:testnet:z6Mk..."
     *   }
     * };
     * ```
     */
    export type IRegister = _IRegister;

    /**
     * Service Update Namespace
     * @namespace IUpdate
     * @description Provides comprehensive types and interfaces for updating existing
     * services in a DID Document, including:
     * - Endpoint modifications
     * - Service type updates
     * - Metadata management
     * - Version control
     * @see {@link _IUpdate}
     * @remarks
     * - Supports atomic updates
     * - Maintains update history
     * - Validates endpoint changes
     * - Ensures service continuity
     * @example
     * ```typescript
     * const update: IUpdate.Payload = {
     *   id: "did:hedera:testnet:z6Mk...#service-1",
     *   changes: {
     *     serviceEndpoint: "https://new-example.com",
     *     metadata: { version: "2.0" }
     *   },
     *   timestamp: "2023-12-23T10:42:00Z"
     * };
     * ```
     */
    export import IUpdate = _IUpdate;
}