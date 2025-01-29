/**
 * @file hfs.namespace.ts
 * @module IHashgraph.ILedger._IHFS
 * @description Defines the namespace for Hashgraph File Service (HFS) operations and interfaces
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

import { _IAppend } from './interfaces/hashgraph.ledger.hfs.append.interface'
import { _ICreate } from './interfaces/hashgraph.ledger.hfs.create.interface'
import { _IDelete } from './interfaces/hashgraph.ledger.hfs.delete.interface'
import { _IUpdate } from './interfaces/hashgraph.ledger.hfs.update.interface'

/**
 * File service operations namespace for Hedera File Service (HFS)
 * @namespace _IHFS
 * @description Defines the structure and requirements for HFS operations,
 * providing comprehensive support for file management on the Hedera network.
 * Enables secure, decentralized file storage with versioning and access control.
 * @category Hedera Services
 * @subcategory HFS
 * @remarks
 * Key features:
 * - File creation
 * - Content updates
 * - Append operations
 * - Access control
 * - Metadata management
 * - Version tracking
 * 
 * Common use cases:
 * - Configuration storage
 * - Large message handling
 * - Document verification
 * - Audit trails
 * - System metadata
 * 
 * Requirements:
 * - Valid file IDs
 * - Proper permissions
 * - Size limitations
 * - Network fees
 * @example
 * ```typescript
 * // Creating a file with full configuration
 * const createFile: _IHFS.ICreate = {
 *   content: Buffer.from("File content"),
 *   keys: {
 *     adminKey: myAdminKey,
 *     readKey: myReadKey
 *   },
 *   memo: "Configuration file",
 *   maxChunks: 20,
 *   expirationTime: "2025-12-31T23:59:59.999Z",
 *   metadata: {
 *     type: "config",
 *     version: "1.0.0",
 *     environment: "production"
 *   }
 * };
 * 
 * // Updating file content
 * const updateFile: _IHFS.IUpdate = {
 *   fileId: "0.0.34567",
 *   content: Buffer.from("Updated content"),
 *   memo: "Configuration update",
 *   metadata: {
 *     version: "1.1.0",
 *     updatedAt: new Date().toISOString()
 *   }
 * };
 * 
 * // Appending content
 * const appendFile: _IHFS.IAppend = {
 *   fileId: "0.0.34567",
 *   content: Buffer.from("Additional content"),
 *   metadata: {
 *     appendedAt: new Date().toISOString()
 *   }
 * };
 * 
 * // Deleting a file
 * const deleteFile: _IHFS.IDelete = {
 *   fileId: "0.0.34567",
 *   adminKey: myAdminKey,
 *   memo: "Removing deprecated config"
 * };
 * ```
 */
export namespace _IHFS {
    /**
     * File creation type definition
     * @type {_ICreate}
     * @description Defines the structure for creating new files on HFS with
     * comprehensive configuration options for access control, expiration,
     * and metadata management.
     * @memberof _IHFS
     * @remarks
     * Capabilities:
     * - Content storage
     * - Access control
     * - Metadata handling
     * - Expiration settings
     * - Size management
     * - Version tracking
     * @see {@link _ICreate} for detailed property definitions
     */
    export type ICreate = _ICreate

    /**
     * File update type definition
     * @type {_IUpdate}
     * @description Defines the structure for modifying existing HFS files,
     * enabling content updates while maintaining file identity and
     * access controls.
     * @memberof _IHFS
     * @remarks
     * Features:
     * - Content modification
     * - Metadata updates
     * - Version control
     * - Access validation
     * - Size management
     * - Update tracking
     * @see {@link _IUpdate} for detailed property definitions
     */
    export type IUpdate = _IUpdate

    /**
     * File append type definition
     * @type {_IAppend}
     * @description Defines the structure for adding content to existing HFS files,
     * supporting incremental updates and content aggregation with proper
     * access control.
     * @memberof _IHFS
     * @remarks
     * Capabilities:
     * - Content addition
     * - Size validation
     * - Access control
     * - Metadata updates
     * - Version tracking
     * - Append logging
     * @see {@link _IAppend} for detailed property definitions
     */
    export type IAppend = _IAppend

    /**
     * File deletion type definition
     * @type {_IDelete}
     * @description Defines the structure for removing files from HFS,
     * ensuring proper authorization and cleanup of associated resources.
     * @memberof _IHFS
     * @remarks
     * Requirements:
     * - Admin authorization
     * - Valid file ID
     * - Network fees
     * - Resource cleanup
     * - Audit logging
     * - State validation
     * @see {@link _IDelete} for detailed property definitions
     */
    export type IDelete = _IDelete
}