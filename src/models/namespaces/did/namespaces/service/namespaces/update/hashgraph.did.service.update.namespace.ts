import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Body } from './models/hashgraph.did.service.update.models.body.model';
import { _Payload } from './models/hashgraph.did.service.update.models.payload.model';

/**
 * Namespace for handling DID service update operations
 * 
 * @namespace _Update
 * @description Provides functionality for updating DID document services including:
 * - Service type updates
 * - Service endpoint modifications
 * - Update payload validation
 * - Complete update workflow management
 * @group DID Service - Update Operations
 * @category Models
 * @subcategory Service Update
 * @since 2.0.0
 * 
 * This namespace contains classes for managing DID service updates:
 * - Body class for update request data
 * - Payload class for complete update payloads
 * - Validation and processing utilities
 * 
 * @example
 * // Using the Update namespace
 * import { _Update } from './hashgraph.did.service.update.namespace';
 * 
 * // Create update components
 * const body = new _Update.Body({
 *   type: "LinkedDomains",
 *   serviceEndpoint: "https://example.com/service"
 * });
 * 
 * const payload = new _Update.Payload({
 *   service: body
 * });
 */
export namespace _Update {
    /**
     * Body class for DID service updates
     * 
     * @class Body
     * @description Represents the body structure for service update requests including:
     * - Service type specification (LinkedDomains or DIDCommMessaging)
     * - Service endpoint URL updates
     * - Request validation through decorators
     * @extends {_Body}
     * @see {@link _Body}
     * @category Update Models
     * @since 2.0.0
     * 
     * This class validates and processes:
     * - Service type changes
     * - Endpoint URL modifications
     * - Update request formatting
     * - Input validation
     * 
     * @example
     * // Create and validate a service update body
     * const updateBody = new _Update.Body({
     *   type: "LinkedDomains",
     *   serviceEndpoint: "https://example.com/updated-service"
     * });
     * 
     * @throws {ValidationError} When validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Service.Update.Body' })
    export class Body extends _Body {}

    /**
     * Payload class for DID service updates
     * 
     * @class Payload
     * @description Represents the complete update payload structure including:
     * - Service update details
     * - Validation requirements
     * - Update processing logic
     * - Nested object handling
     * @extends {_Payload}
     * @see {@link _Payload}
     * @category Update Models
     * @since 2.0.0
     * 
     * This class handles:
     * - Complete update payload validation
     * - Service update processing
     * - Update request management
     * - Nested object validation
     * 
     * @example
     * // Create and validate a service update payload
     * const updatePayload = new _Update.Payload({
     *   service: {
     *     type: "LinkedDomains",
     *     serviceEndpoint: "https://example.com/updated-service"
     *   }
     * });
     * 
     * @throws {ValidationError} When payload validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Service.Update.Payload' })
    export class Payload extends _Payload {}
}