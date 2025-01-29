import { _IBody } from './interfaces/hashgraph.did.service.update.body.interface';
import { _IPayload } from './interfaces/hashgraph.did.service.update.payload.interface';

/**
 * @file update.namespace.ts
 * @module IHashgraph._IDID._IService._IUpdate
 * @description DID Service Update Namespace for Hashgraph. Provides comprehensive
 * types and interfaces for managing updates to service endpoints in DID Documents,
 * implementing the W3C DID Core specification for service modification.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements W3C DID Core service update requirements
 * - Ensures atomic service updates
 * - Maintains service history and versioning
 * - Supports partial and complete updates
 * @example
 * ```typescript
 * // Update body containing new service properties
 * const updateBody: _IUpdate.IBody = {
 *   type: "LinkedDomains",
 *   serviceEndpoint: "https://new-example.com",
 *   metadata: {
 *     version: "2.0",
 *     updated: "2023-12-23T10:42:00Z"
 *   }
 * };
 * 
 * // Complete update payload with service ID
 * const updatePayload: _IUpdate.IPayload = {
 *   id: "did:hedera:testnet:z6Mk...#service-1",
 *   service: updateBody,
 *   timestamp: "2023-12-23T10:42:00Z"
 * };
 * ```
 */
export namespace _IUpdate {
    /**
     * Service Update Body Type
     * @type {_IBody}
     * @description Defines the structure for service update operations, including:
     * - Service type modifications
     * - Endpoint URL updates
     * - Metadata changes
     * - Configuration adjustments
     * @see {@link _IBody}
     * @remarks
     * - Supports partial updates
     * - Validates update properties
     * - Maintains type consistency
     * - Ensures endpoint validity
     * @since 2.0.0
     */
    export type IBody = _IBody;

    /**
     * Service Update Payload Type
     * @type {_IPayload}
     * @description Defines the complete payload structure for service updates:
     * - Service identifier
     * - Update body content
     * - Timestamp information
     * - Authorization details
     * @see {@link _IPayload}
     * @remarks
     * - Ensures update atomicity
     * - Maintains update history
     * - Validates authorization
     * - Supports rollback capability
     * @since 2.0.0
     */
    export type IPayload = _IPayload;
}