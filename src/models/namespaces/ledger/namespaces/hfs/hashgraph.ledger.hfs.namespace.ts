import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Append } from './models/hashgraph.ledger.hfs.models.append.model'
import { _Create } from './models/hashgraph.ledger.hfs.models.create.model'
import { _Delete } from './models/hashgraph.ledger.hfs.models.delete.model'
import { _Update } from './models/hashgraph.ledger.hfs.models.update.model'

/**
 * @file HFS (Hedera File Service) Namespace
 * @namespace _HFS
 * @description Implements comprehensive file management functionality for the
 * Hedera File Service (HFS). This namespace provides a complete set of operations
 * for managing files on the Hedera network.
 * 
 * Core Features:
 * - File Creation
 * - Content Updates
 * - Content Appending
 * - File Deletion
 * - Access Control
 * - Transaction Management
 * 
 * @category Hashgraph
 * @subcategory Ledger
 * @since 2.0.0
 * 
 * @remarks
 * The HFS namespace provides a robust interface for file operations on the
 * Hedera network. It ensures secure file management with proper access control,
 * transaction handling, and error management.
 * 
 * Key Components:
 * - Create: Manages file creation with content and metadata
 * - Update: Handles file content and metadata updates
 * - Append: Supports adding content to existing files
 * - Delete: Manages secure file deletion
 * 
 * @example
 * // Complete file lifecycle management
 * const hfs = new _HFS();
 * 
 * // Create a new file
 * const newFile = await hfs.create({
 *   content: Buffer.from(JSON.stringify({
 *     version: "1.0",
 *     settings: {
 *       timeout: 30000,
 *       retries: 3
 *     }
 *   })),
 *   memo: "System configuration v1.0",
 *   maxTransactionFee: 5000000
 * });
 * 
 * // Update file content
 * await hfs.update({
 *   fileId: newFile.fileId,
 *   content: Buffer.from(JSON.stringify({
 *     version: "1.1",
 *     settings: {
 *       timeout: 60000,
 *       retries: 5
 *     }
 *   })),
 *   memo: "System configuration v1.1",
 *   maxTransactionFee: 5000000
 * });
 * 
 * // Append additional content
 * await hfs.append({
 *   fileId: newFile.fileId,
 *   content: Buffer.from(JSON.stringify({
 *     additionalSettings: {
 *       feature4: true,
 *       feature5: false
 *     }
 *   })),
 *   maxTransactionFee: 3000000
 * });
 * 
 * // Delete the file
 * await hfs.delete({
 *   fileId: newFile.fileId,
 *   maxTransactionFee: 2000000
 * });
 */
export namespace _HFS {
    /**
     * File Creation Interface
     * @interface Create
     * @description Defines the structure for creating new files on the Hedera
     * File Service.
     * 
     * Required Properties:
     * - content: The file content to store
     * 
     * Optional Properties:
     * - memo: File description or metadata
     * - maxTransactionFee: Maximum fee for creation
     * 
     * @example
     * // Create a new configuration file
     * const config = new Create({
     *   content: Buffer.from(JSON.stringify({
     *     api: {
     *       endpoint: "https://api.example.com",
     *       timeout: 30000
     *     }
     *   })),
     *   memo: "API Configuration v1.0",
     *   maxTransactionFee: 5000000
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hfs.Create' })
    export class Create extends _Create {}

    /**
     * File Update Interface
     * @interface Update
     * @description Defines the structure for updating existing files on the
     * Hedera File Service.
     * 
     * Required Properties:
     * - fileId: Target file identifier
     * - content: New file content
     * 
     * Optional Properties:
     * - memo: Updated description
     * - maxTransactionFee: Maximum fee for update
     * 
     * @example
     * // Update an existing configuration
     * const update = new Update({
     *   fileId: "0.0.123456",
     *   content: Buffer.from(JSON.stringify({
     *     api: {
     *       endpoint: "https://api.example.com/v2",
     *       timeout: 60000
     *     }
     *   })),
     *   memo: "API Configuration v2.0",
     *   maxTransactionFee: 5000000
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hfs.Update' })
    export class Update extends _Update {}

    /**
     * File Append Interface
     * @interface Append
     * @description Defines the structure for appending content to existing
     * files on the Hedera File Service.
     * 
     * Required Properties:
     * - fileId: Target file identifier
     * - content: Content to append
     * 
     * Optional Properties:
     * - maxTransactionFee: Maximum fee for append
     * 
     * @example
     * // Append additional settings
     * const append = new Append({
     *   fileId: "0.0.123456",
     *   content: Buffer.from(JSON.stringify({
     *     additionalSettings: {
     *       caching: {
     *         enabled: true,
     *         duration: 3600
     *       }
     *     }
     *   })),
     *   maxTransactionFee: 3000000
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hfs.Append' })
    export class Append extends _Append {}

    /**
     * File Deletion Interface
     * @interface Delete
     * @description Defines the structure for deleting files from the Hedera
     * File Service.
     * 
     * Required Properties:
     * - fileId: Target file identifier
     * 
     * Optional Properties:
     * - maxTransactionFee: Maximum fee for deletion
     * 
     * @example
     * // Delete a configuration file
     * const deleteFile = new Delete({
     *   fileId: "0.0.123456",
     *   maxTransactionFee: 2000000
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hfs.Delete' })
    export class Delete extends _Delete {}
}