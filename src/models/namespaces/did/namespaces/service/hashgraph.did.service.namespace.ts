import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _General } from './models/hashgraph.did.service.models.general.model'
import { _Register } from './models/hashgraph.did.service.models.register.model'
import { _Update } from './namespaces/update/hashgraph.did.service.update.namespace'

/**
 * Namespace for managing DID document services
 * 
 * @namespace _Service
 * @description Provides functionality for managing DID document services including:
 * - General service management
 * - Service registration
 * - Service updates
 * @category Models
 * @subcategory Service Management
 * @since 2.0.0
 * 
 * This namespace contains classes and sub-namespaces for complete service lifecycle:
 * - General class for basic service functionality
 * - Register class for service registration
 * - Update namespace for service modifications
 * 
 * The namespace supports:
 * - LinkedDomains and DIDCommMessaging service types
 * - Service endpoint management
 * - Complete validation workflows
 * - Secure service updates
 * 
 * @example
 * // Using the Service namespace
 * import { _Service } from './hashgraph.did.service.namespace';
 * 
 * // Create a new service
 * const service = new _Service.General(
 *   'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5#service-1',
 *   'LinkedDomains',
 *   'https://example.com'
 * );
 * 
 * // Register a service
 * const registration = new _Service.Register({
 *   service: {
 *     id: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5#service-1',
 *     type: 'LinkedDomains',
 *     serviceEndpoint: 'https://example.com'
 *   }
 * });
 */
export namespace _Service {
    /**
     * General service class for DID documents
     * 
     * @class General
     * @extends {_General}
     * @description Handles core service functionality including:
     * - Service identification
     * - Service type management
     * - Endpoint validation
     * - Service configuration
     * @see {@link _General}
     * @category Service Models
     * @since 2.0.0
     * 
     * This class provides:
     * - Service ID validation
     * - Type checking (LinkedDomains/DIDCommMessaging)
     * - Endpoint URL validation
     * - Complete service configuration
     * 
     * @example
     * // Create a general service
     * const service = new General(
     *   'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5#service-1',
     *   'LinkedDomains',
     *   'https://example.com'
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Did.Service.General' })
    export class General extends _General {}

    /**
     * Service registration class for DID documents
     * 
     * @class Register
     * @extends {_Register}
     * @description Manages service registration including:
     * - Service validation
     * - Registration processing
     * - Data verification
     * - Complete registration workflow
     * @see {@link _Register}
     * @category Service Models
     * @since 2.0.0
     * 
     * This class handles:
     * - Service registration validation
     * - Registration data processing
     * - Complete registration workflow
     * - Service configuration verification
     * 
     * @example
     * // Register a new service
     * const registration = new Register({
     *   service: {
     *     id: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5#service-1',
     *     type: 'LinkedDomains',
     *     serviceEndpoint: 'https://example.com'
     *   }
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Did.Service.Register' })
    export class Register extends _Register {}

    /**
     * Namespace for service update operations
     * 
     * @namespace Update
     * @description Provides functionality for updating services including:
     * - Service type updates
     * - Endpoint modifications
     * - Update validation
     * - Complete update workflow
     * @see {@link _Update}
     * @category Service Models
     * @since 2.0.0
     * 
     * This namespace contains:
     * - Update request validation
     * - Service modification processing
     * - Complete update workflows
     * - Data verification utilities
     * 
     * @example
     * // Update a service
     * const updateBody = new _Service.Update.Body({
     *   type: 'LinkedDomains',
     *   serviceEndpoint: 'https://updated-example.com'
     * });
     */
    export import Update = _Update
}