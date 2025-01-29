/**
 * @file delete.interface.ts
 * @module IHashgraph.ILedger.IHFS.IDelete
 * @description Defines the interface for deleting files on Hedera File Service (HFS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category File Operations
 * @subcategory File Deletion
 */

/**
 * File deletion interface for HFS
 * @interface _IDelete
 * @description Defines the structure for deleting existing files on the Hedera
 * File Service (HFS). Enables secure file removal with transaction fee management
 * and proper authorization controls.
 * 
 * @remarks
 * Key features:
 * - File removal
 * - Fee management
 * - Access control
 * - Resource cleanup
 * 
 * Security measures:
 * - Permission checks
 * - Key validation
 * - Access verification
 * - Audit logging
 * 
 * Requirements:
 * - File exists
 * - Valid permissions
 * - Sufficient balance
 * - Network access
 * 
 * Effects:
 * - Removes file
 * - Frees storage
 * - Updates records
 * - Charges fees
 * 
 * @example
 * ```typescript
 * // Basic file deletion
 * const basicDelete: _IDelete = {
 *   maxTransactionFee: 2000000 // 0.02 HBAR
 * };
 * 
 * // High-priority deletion
 * const priorityDelete: _IDelete = {
 *   maxTransactionFee: 5000000 // 0.05 HBAR for faster processing
 * };
 * ```
 */
export interface _IDelete {
    /**
     * Transaction fee limit
     * @property {number} maxTransactionFee
     * @description The maximum fee allowed for the file deletion operation.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * @type {number}
     * @memberof _IDelete
     * @optional
     * @remarks
     * Fee calculation:
     * - Base fee
     * - Network state
     * - Priority level
     * - Operation type
     * 
     * Considerations:
     * - Network congestion
     * - Node pricing
     * - Transaction speed
     * - Priority needs
     * 
     * Management:
     * - Budget control
     * - Cost prediction
     * - Fee optimization
     * - Transaction planning
     * 
     * @example
     * ```typescript
     * // Standard deletion (0.02 HBAR)
     * maxTransactionFee: 2000000
     * 
     * // Priority deletion (0.05 HBAR)
     * maxTransactionFee: 5000000
     * ```
     */
    maxTransactionFee?: number;
}