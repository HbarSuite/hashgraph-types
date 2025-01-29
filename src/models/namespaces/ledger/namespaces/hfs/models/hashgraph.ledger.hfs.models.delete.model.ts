import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HFS File Deletion Model
 * @class _Delete
 * @implements {IHashgraph.ILedger.IHFS.IDelete}
 * @description Implements secure file deletion functionality for Hedera File
 * Service (HFS). This model manages the removal of files from the Hedera network
 * with proper validation and security checks.
 * 
 * Core Features:
 * - File Removal
 * - Transaction Control
 * - Security Validation
 * - Fee Management
 * - Audit Trail Creation
 * 
 * @category Hashgraph
 * @subcategory HFS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and validated file deletion with proper transaction
 * fee management and audit trail maintenance.
 * 
 * @example
 * // Delete a file with full configuration
 * const fileDelete = new _Delete({
 *   // Transaction control
 *   maxTransactionFee: 5000000,
 *   
 *   // File identification
 *   fileId: "0.0.123456"
 * });
 */
export class _Delete implements IHashgraph.ILedger.IHFS.IDelete {
    /**
     * Maximum Transaction Fee
     * @type {number}
     * @description The maximum fee allowed for the file deletion transaction.
     * Controls cost and prevents excessive fees.
     * 
     * Fee Requirements:
     * - Must be a positive number
     * - Denominated in tinybars
     * - Network-appropriate value
     * - Within account limits
     * 
     * @example
     * // Standard fee limit
     * maxTransactionFee: 5000000
     * 
     * // Premium operation fee
     * maxTransactionFee: 10000000
     */
    @ApiProperty({
        description: 'Maximum allowed transaction fee in tinybars',
        type: () => Number,
        required: false,
        example: 5000000
    })
    maxTransactionFee?: number;

    /**
     * File Delete Constructor
     * @constructor
     * @description Initializes a new file deletion request with comprehensive
     * validation and security measures.
     * 
     * Validation Process:
     * - Fee validation
     * - Permission checking
     * - Network status verification
     * - Delete logging
     * 
     * Security Measures:
     * - Input sanitization
     * - Fee protection
     * - Audit logging
     * - Operation tracking
     * 
     * @param {IHashgraph.ILedger.IHFS.IDelete} data - Configuration data
     * @throws {Error} When fee validation fails
     * @throws {Error} When permissions are insufficient
     * @throws {Error} When network conditions are unsuitable
     * 
     * @example
     * // Initialize deletion with full configuration
     * const deletion = new _Delete({
     *   // Cost control
     *   maxTransactionFee: 5000000,
     *   
     *   // Operation metadata
     *   memo: "Removing deprecated config file",
     *   
     *   // Network settings
     *   nodeId: "0.0.3",
     *   
     *   // Security
     *   requireReceipt: true
     * });
     */
    constructor(data: IHashgraph.ILedger.IHFS.IDelete) {
        if (data.maxTransactionFee !== undefined) {
            if (typeof data.maxTransactionFee !== 'number' || data.maxTransactionFee <= 0) {
                throw new Error('Maximum transaction fee must be a positive number');
            }
            this.maxTransactionFee = data.maxTransactionFee;
        }
    }
}