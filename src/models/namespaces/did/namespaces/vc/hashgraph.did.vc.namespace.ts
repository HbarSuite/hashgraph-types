import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _StatusChange } from './models/hashgraph.did.vc.models.status-change.model'
import { _List } from './namespaces/list/hashgraph.did.vc.list.namespace'

/**
 * Namespace for managing Verifiable Credentials (VCs)
 * 
 * @namespace _VC
 * @description Provides comprehensive functionality for managing Verifiable Credentials including:
 * - Status change tracking and management
 * - List operations and maintenance
 * - Standardized VC interfaces and models
 * - Validation and verification utilities
 * @group DID Components
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This namespace provides a complete suite of tools for:
 * - Status change tracking for VCs (active, revoked, suspended)
 * - List management capabilities (creation, updates, queries)
 * - Standardized VC interfaces for consistent implementation
 * - Validation and verification of credential states
 * 
 * @example
 * // Using the VC namespace
 * import { _VC } from './hashgraph.did.vc.namespace';
 * 
 * // Create a status change
 * const status = new _VC.StatusChange('active');
 * 
 * // Work with VC lists
 * const list = new _VC.List.Create({
 *   // list configuration
 * });
 */
export namespace _VC {
    /**
     * Class for managing Verifiable Credential status changes
     * 
     * @class StatusChange
     * @extends {_StatusChange}
     * @description Handles all aspects of VC status management including:
     * - Status transitions and updates
     * - State validation and verification
     * - Status history tracking and auditing
     * - Compliance with VC standards
     * 
     * This class ensures:
     * - Proper status change validation
     * - Consistent state transitions
     * - Complete audit trail maintenance
     * - Standards compliance
     * 
     * @example
     * // Create and manage status changes
     * const status = new StatusChange('active');
     * const revokedStatus = new StatusChange('revoked');
     * 
     * @see {@link _StatusChange}
     * @throws {Error} When invalid status transitions are attempted
     */
    @ApiSchema({ name: 'Hashgraph.Did.Vc.StatusChange' })
    export class StatusChange extends _StatusChange { }

    /**
     * Namespace for Verifiable Credential list operations
     * 
     * @namespace List
     * @description Comprehensive namespace for VC list management providing:
     * - List creation and configuration
     * - Status list operations and updates
     * - List metadata handling and queries
     * - Batch operations support
     * 
     * This namespace includes functionality for:
     * - Creating and managing VC lists
     * - Tracking status changes across lists
     * - Managing list metadata and properties
     * - Performing batch list operations
     * - Querying and filtering list contents
     * 
     * @example
     * // Using the List namespace
     * import { _VC } from '../vc.namespace';
     * 
     * const list = new _VC.List.Create({
     *   // list configuration
     * });
     * 
     * @see {@link _List}
     */
    export import List = _List
}