/**
 * @file append.interface.ts
 * @module IHashgraph.ILedger.IHFS.IAppend
 * @description Defines the interface for appending content to files on Hedera File Service (HFS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category File Operations
 * @subcategory File Append
 */

/**
 * File append interface for HFS
 * @interface _IAppend
 * @description Defines the structure for appending content to existing files on the
 * Hedera File Service (HFS). Enables secure and efficient file modifications while
 * maintaining data integrity and access controls.
 * 
 * @remarks
 * Key features:
 * - Content appending
 * - Fee management
 * - Size validation
 * - Transaction control
 * 
 * Limitations:
 * - Maximum file size
 * - Content format
 * - Network fees
 * - Transaction limits
 * 
 * Requirements:
 * - File exists
 * - Valid permissions
 * - Sufficient balance
 * - Network access
 * 
 * Effects:
 * - Appends content
 * - Updates metadata
 * - Charges fees
 * - Records transaction
 * 
 * @example
 * ```typescript
 * // Basic file append
 * const basicAppend: _IAppend = {
 *   content: "Additional content for the file",
 *   maxTransactionFee: 2000000 // 0.02 HBAR
 * };
 * 
 * // Large content append with higher fee
 * const largeAppend: _IAppend = {
 *   content: "Extensive content to be appended...",
 *   maxTransactionFee: 5000000 // 0.05 HBAR
 * };
 * ```
 */
export interface _IAppend {
    /**
     * File content
     * @property {string} content
     * @description The content to be appended to the existing file.
     * Can be any string data that will be added to the end of the file.
     * @type {string}
     * @memberof _IAppend
     * @remarks
     * Content handling:
     * - UTF-8 encoding
     * - No size validation
     * - Sequential append
     * - Atomic operation
     * 
     * Limitations:
     * - Max file size
     * - Content format
     * - Network limits
     * - Fee constraints
     * 
     * Best practices:
     * - Validate size
     * - Check encoding
     * - Handle errors
     * - Monitor costs
     * 
     * @example
     * ```typescript
     * content: "New content to be appended to the existing file"
     * ```
     */
    content: string;

    /**
     * Transaction fee limit
     * @property {number} maxTransactionFee
     * @description The maximum fee allowed for the append operation.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * @type {number}
     * @memberof _IAppend
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
     * - Content size
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
     * // 0.02 HBAR
     * maxTransactionFee: 2000000
     * 
     * // 0.05 HBAR for larger content
     * maxTransactionFee: 5000000
     * ```
     */
    maxTransactionFee?: number;
}