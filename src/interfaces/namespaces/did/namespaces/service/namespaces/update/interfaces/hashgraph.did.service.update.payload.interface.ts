import { _IUpdate } from '../hashgraph.did.service.update.namespace';

/**
 * @file hashgraph.did.service.update.payload.interface.ts
 * @interface _IPayload
 * @description Defines the payload structure for updating service endpoints in a DID Document.
 * This interface encapsulates the service update details including type and endpoint changes.
 * @category DID
 * @subcategory Service
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example of updating a LinkedDomains service
 * const linkedDomainsPayload: _IPayload = {
 *   service: {
 *     type: "LinkedDomains",
 *     serviceEndpoint: "https://example.com/verify"
 *   }
 * };
 * 
 * // Example of updating a DIDCommMessaging service
 * const didCommPayload: _IPayload = {
 *   service: {
 *     type: "DIDCommMessaging",
 *     serviceEndpoint: "https://example.com/didcomm"
 *   }
 * };
 * ```
 * 
 * @remarks
 * - The payload must contain a valid service update configuration
 * - Service type must be either "LinkedDomains" or "DIDCommMessaging"
 * - ServiceEndpoint must be a valid HTTPS URL
 * - Updates are atomic - the entire update succeeds or fails
 */
export interface _IPayload {
    /**
     * Service Update Configuration
     * @type {_IUpdate.IBody}
     * @description Contains the service update details including:
     * - Service type specification ("LinkedDomains" or "DIDCommMessaging")
     * - New endpoint URL for the service
     * - Configuration for modifying existing service endpoints
     * 
     * The service update allows:
     * - Changing service type
     * - Updating endpoint URLs
     * - Modifying service configurations
     * 
     * @required true
     * @example
     * ```typescript
     * service: {
     *   type: "LinkedDomains",
     *   serviceEndpoint: "https://example.com/verify"
     * }
     * ```
     * 
     * @remarks
     * - Must provide both type and serviceEndpoint
     * - ServiceEndpoint must be a valid URL
     * - Type must match supported service types
     * - Updates replace existing service configurations
     * 
     * @memberof _IPayload
     * @since 2.0.0
     * @see {@link _IUpdate.IBody} for detailed update properties
     */
    service: _IUpdate.IBody
}