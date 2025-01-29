import { _IGeneral } from './hashgraph.did.service.general.interface';

/**
 * DID Service Registration Interface
 * @export
 * @interface _IRegister
 * @namespace IHashgraph.IDID.IService._IRegister
 * @description Defines the structure for registering new services in a DID Document.
 * This interface provides a standardized way to add service endpoints that enable
 * trusted interactions with the DID subject, following the W3C DID Core specification
 * for service registration.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements W3C DID Core service registration requirements
 * - Ensures proper service configuration validation
 * - Maintains service registration integrity
 * - Supports multiple service types and protocols
 * @example
 * ```typescript
 * const register: _IRegister = {
 *   service: {
 *     id: "did:hedera:testnet:z6Mk...#service-1",
 *     type: "LinkedDomains",
 *     serviceEndpoint: "https://example.com",
 *     metadata: {
 *       version: "1.0",
 *       description: "Domain verification service"
 *     }
 *   }
 * };
 * ```
 */
export interface _IRegister {
    /**
     * Service Configuration
     * @type {_IGeneral}
     * @description The complete service endpoint configuration that will be registered
     * in the DID Document. This includes:
     * - Unique service identifier
     * - Service type classification
     * - Endpoint URL and configuration
     * - Optional service metadata
     * @required true
     * @memberof _IRegister
     * @since 2.0.0
     * @remarks
     * - Must follow W3C DID Core service format
     * - Service ID must be unique in the DID
     * - Endpoint must be properly configured
     * - Type must be from supported types
     * @see {@link _IGeneral} for detailed service properties
     */
    service: _IGeneral;
}