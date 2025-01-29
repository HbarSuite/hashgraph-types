/**
 * @file update.interface.ts
 * @module IHashgraph.ILedger.IHFS.IUpdate
 * @description Defines the interface for updating files on Hedera File Service (HFS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category File Operations
 * @subcategory File Updates
 */

/**
 * File update interface for HFS
 * @interface _IUpdate
 * @description Defines the structure for updating existing files on the Hedera
 * File Service (HFS). Enables content modification with metadata updates and
 * transaction fee management.
 * 
 * @remarks
 * Key features:
 * - Content updates
 * - Metadata changes
 * - Fee management
 * - Version control
 * 
 * Update types:
 * - Content replacement
 * - Metadata modification
 * - Permission changes
 * - Resource updates
 * 
 * Requirements:
 * - File exists
 * - Valid permissions
 * - Sufficient balance
 * - Network access
 * 
 * Effects:
 * - Updates content
 * - Modifies metadata
 * - Records changes
 * - Charges fees
 * 
 * @example
 * ```typescript
 * // Basic file update
 * const basicUpdate: _IUpdate = {
 *   content: "Updated configuration settings",
 *   memo: "Config update 2023-12-31",
 *   maxTransactionFee: 2000000 // 0.02 HBAR
 * };
 * 
 * // Large content update
 * const largeUpdate: _IUpdate = {
 *   content: "Extensive updated content...",
 *   memo: "Major system update v2.0",
 *   maxTransactionFee: 5000000 // 0.05 HBAR
 * };
 * ```
 */
export interface _IUpdate {
    /**
     * Updated content
     * @property {string} content
     * @description The new content to replace the existing file data.
     * Supports various content types encoded as strings.
     * @type {string}
     * @memberof _IUpdate
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
     * // Plain text update
     * content: "Updated configuration settings v2.0"
     * 
     * // JSON data update
     * content: JSON.stringify({
     *   setting1: "updated1",
     *   setting2: "updated2"
     * })
     * ```
     */
    content: string;

    /**
     * Update metadata
     * @property {string} memo
     * @description A descriptive note or memo providing context about the update's
     * purpose, changes, or other relevant information.
     * @type {string}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * Best practices:
     * - Change description
     * - Version info
     * - Update reason
     * - Contact details
     * 
     * Limitations:
     * - 100 bytes max
     * - UTF-8 encoding
     * - Plain text only
     * - No formatting
     * 
     * Usage:
     * - Change tracking
     * - Version history
     * - Audit logging
     * - Update context
     * 
     * @example
     * ```typescript
     * memo: "System configuration update v2.0 - Enhanced security settings"
     * ```
     */
    memo?: string;

    /**
     * Transaction fee limit
     * @property {number} maxTransactionFee
     * @description The maximum fee allowed for the file update operation.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * @type {number}
     * @memberof _IUpdate
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
     * - Update size
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
     * // Standard update (0.02 HBAR)
     * maxTransactionFee: 2000000
     * 
     * // Large update (0.05 HBAR)
     * maxTransactionFee: 5000000
     * ```
     */
    maxTransactionFee?: number;
}