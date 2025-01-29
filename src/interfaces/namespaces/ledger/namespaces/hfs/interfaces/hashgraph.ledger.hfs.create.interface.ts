/**
 * @file create.interface.ts
 * @module IHashgraph.ILedger.IHFS.ICreate
 * @description Defines the interface for creating files on Hedera File Service (HFS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category File Operations
 * @subcategory File Creation
 */

/**
 * File creation interface for HFS
 * @interface _ICreate
 * @description Defines the structure for creating new files on the Hedera File
 * Service (HFS). Enables secure file storage with configurable metadata and
 * transaction parameters.
 * 
 * @remarks
 * Key features:
 * - Content storage
 * - Metadata support
 * - Fee management
 * - Transaction control
 * 
 * Storage options:
 * - Raw content
 * - Binary data
 * - Text files
 * - Configuration data
 * 
 * Requirements:
 * - Valid content
 * - Network access
 * - Sufficient balance
 * - Storage space
 * 
 * Effects:
 * - Creates file
 * - Stores content
 * - Records metadata
 * - Charges fees
 * 
 * @example
 * ```typescript
 * // Basic file creation
 * const basicFile: _ICreate = {
 *   content: "Simple configuration data",
 *   memo: "App config v1.0",
 *   maxTransactionFee: 2000000 // 0.02 HBAR
 * };
 * 
 * // Large file with higher fee
 * const largeFile: _ICreate = {
 *   content: "Extensive data content...",
 *   memo: "System backup 2023-12-31",
 *   maxTransactionFee: 5000000 // 0.05 HBAR
 * };
 * ```
 */
export interface _ICreate {
    /**
     * File content
     * @property {string} content
     * @description The data to be stored in the new file.
     * Supports various content types encoded as strings.
     * @type {string}
     * @memberof _ICreate
     * @remarks
     * Content types:
     * - Plain text
     * - JSON data
     * - Base64 encoded
     * - UTF-8 strings
     * 
     * Limitations:
     * - Maximum size
     * - Encoding format
     * - Content validation
     * - Storage costs
     * 
     * Best practices:
     * - Validate size
     * - Check encoding
     * - Compress data
     * - Handle errors
     * 
     * @example
     * ```typescript
     * // Plain text
     * content: "Simple configuration settings"
     * 
     * // JSON data
     * content: JSON.stringify({
     *   setting1: "value1",
     *   setting2: "value2"
     * })
     * ```
     */
    content: string;

    /**
     * File metadata
     * @property {string} memo
     * @description A descriptive note or memo providing context about the file's
     * purpose, content, or other relevant information.
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @remarks
     * Best practices:
     * - Clear description
     * - Version info
     * - Usage context
     * - Contact details
     * 
     * Limitations:
     * - 100 bytes max
     * - UTF-8 encoding
     * - Plain text only
     * - No formatting
     * 
     * Usage:
     * - File identification
     * - Content description
     * - Version tracking
     * - Access information
     * 
     * @example
     * ```typescript
     * memo: "Production configuration file v1.0 - System settings"
     * ```
     */
    memo?: string;

    /**
     * Transaction fee limit
     * @property {number} maxTransactionFee
     * @description The maximum fee allowed for the file creation operation.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * @type {number}
     * @memberof _ICreate
     * @optional
     * @remarks
     * Fee calculation:
     * - Base fee
     * - Content size
     * - Network state
     * - Priority level
     * 
     * Considerations:
     * - Network congestion
     * - File size
     * - Operation type
     * - Node pricing
     * 
     * Management:
     * - Budget control
     * - Cost prediction
     * - Fee optimization
     * - Transaction planning
     * 
     * @example
     * ```typescript
     * // 0.02 HBAR for small files
     * maxTransactionFee: 2000000
     * 
     * // 0.05 HBAR for larger files
     * maxTransactionFee: 5000000
     * ```
     */
    maxTransactionFee?: number;
}