/**
 * @file hashgraph.did.service.update.body.interface.ts
 * @interface _IBody
 * @description Interface representing the body structure for DID service updates.
 * This interface defines the required properties for updating service endpoints 
 * and their types in a DID document. It supports two main service types:
 * LinkedDomains for domain verification and DIDCommMessaging for secure messaging.
 * @category DID
 * @subcategory Service
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example of a LinkedDomains service update
 * const linkedDomainsUpdate: _IBody = {
 *   type: "LinkedDomains",
 *   serviceEndpoint: "https://example.com/verify"
 * };
 * 
 * // Example of a DIDCommMessaging service update
 * const didCommUpdate: _IBody = {
 *   type: "DIDCommMessaging", 
 *   serviceEndpoint: "https://example.com/didcomm"
 * };
 * ```
 */
export interface _IBody {

    /**
     * The type of service being updated
     * @type {("LinkedDomains"|"DIDCommMessaging")}
     * @description Specifies the service type for the endpoint:
     * - LinkedDomains: Used for domain verification and linking
     * - DIDCommMessaging: Used for secure DID-based communication
     * @required true
     * @example "LinkedDomains"
     * @remarks Only LinkedDomains and DIDCommMessaging are currently supported.
     * Additional service types may be added in future versions.
     * @memberof _IBody
     * @since 2.0.0
     */
    type: "LinkedDomains" | "DIDCommMessaging"

    /**
     * The service endpoint URL
     * @type {string}
     * @description The URL where the service can be accessed. This should be:
     * - A valid URL string
     * - Publicly accessible
     * - Properly configured for the specified service type
     * - Secured with HTTPS
     * @required true
     * @example "https://example.com/didcomm"
     * @remarks 
     * - Must be a valid URL string
     * - Should follow security best practices
     * - Must be compatible with the specified service type
     * @memberof _IBody
     * @since 2.0.0
     */
    serviceEndpoint: string
}