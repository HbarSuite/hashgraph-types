import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Info } from './models/hashgraph.did.vc.list.models.info.model'
import { _Payload } from './models/hashgraph.did.vc.list.models.payload.model'
import { _Response } from './models/hashgraph.did.vc.list.models.response.model'

/**
 * @file list.namespace.ts
 * @namespace Hashgraph.IDID.IVC.List
 * @description This namespace contains interfaces related to Verifiable Credential (VC) lists in the Hashgraph DID system.
 * @module Hashgraph/DID/VC/List
 */
/**
 * Namespace for managing Verifiable Credential lists
 * 
 * @namespace _List
 * @description Provides comprehensive functionality for managing Verifiable Credential (VC) lists including:
 * - List creation and management
 * - Status tracking and updates
 * - Response handling
 * - List metadata management
 * @group DID Components
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This namespace provides a complete suite of tools for:
 * - Managing VC status lists
 * - Handling list operations and responses
 * - Tracking list metadata and history
 * - Processing list-related payloads
 * 
 * @example
 * // Using the List namespace
 * import { _List } from './list.namespace';
 * 
 * // Create list info
 * const info = new _List.Info({
 *   // list information
 * });
 * 
 * // Handle list response
 * const response = new _List.Response({
 *   // response data
 * });
 */
export namespace _List {
    /**
     * Class for managing VC list information
     * 
     * @class Info
     * @extends {_Info}
     * @description Handles all aspects of VC list information including:
     * - List metadata management
     * - Status tracking
     * - Timestamp handling
     * - Entry information
     * 
     * Key features:
     * - Comprehensive metadata tracking
     * - Status history maintenance
     * - Timestamp validation
     * - Entry detail management
     * 
     * @example
     * // Create list info
     * const info = new Info({
     *   // list metadata
     * });
     * 
     * @see {@link _Info}
     * @throws {Error} When invalid list information is provided
     */
    @ApiSchema({ name: 'Hashgraph.Did.Vc.List.Info' })
    export class Info extends _Info {}

    /**
     * Class for handling VC list responses
     * 
     * @class Response
     * @extends {_Response}
     * @description Manages response data for VC list operations including:
     * - Operation results
     * - Status information
     * - Error handling
     * - Response metadata
     * 
     * Features:
     * - Comprehensive response formatting
     * - Error state handling
     * - Success status tracking
     * - Response data validation
     * 
     * @example
     * // Handle list operation response
     * const response = new Response({
     *   success: true,
     *   data: {
     *     // operation results
     *   }
     * });
     * 
     * @see {@link _Response}
     * @throws {Error} When response validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Vc.List.Response' })
    export class Response extends _Response {}

    /**
     * Class for managing VC list operation payloads
     * 
     * @class Payload
     * @extends {_Payload}
     * @description Handles all aspects of VC list operation payloads including:
     * - Request data formatting
     * - Payload validation
     * - Operation specifications
     * - Data transformation
     * 
     * Capabilities:
     * - Request payload formatting
     * - Data validation and verification
     * - Operation type handling
     * - Payload transformation
     * 
     * @example
     * // Create operation payload
     * const payload = new Payload({
     *   operation: 'create',
     *   data: {
     *     // operation data
     *   }
     * });
     * 
     * @see {@link _Payload}
     * @throws {Error} When payload validation fails
     */
    @ApiSchema({ name: 'Hashgraph.Did.Vc.List.Payload' })
    export class Payload extends _Payload {}
}