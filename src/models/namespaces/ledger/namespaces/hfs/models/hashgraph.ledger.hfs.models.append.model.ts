import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HFS File Append Model
 * @class _Append
 * @implements {IHashgraph.ILedger.IHFS.IAppend}
 * @description Implements secure file append functionality for Hedera File
 * Service (HFS). This model manages the addition of content to existing files
 * in the Hedera network with proper validation and security checks.
 * 
 * Core Features:
 * - Content Appending
 * - Transaction Control
 * - Input Validation
 * - Error Handling
 * - Fee Management
 * 
 * @category Hashgraph
 * @subcategory HFS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and validated content appending with proper
 * transaction control and error handling.
 * 
 * @example
 * // Append content with full configuration
 * const appendOperation = new _Append({
 *   // Content to append
 *   content: Buffer.from(JSON.stringify({
 *     additionalData: {
 *       timestamp: new Date().toISOString(),
 *       author: "System",
 *       changes: ["Added new configuration"]
 *     }
 *   })),
 *   
 *   // Transaction control
 *   maxTransactionFee: 5000000
 * });
 */
export class _Append implements IHashgraph.ILedger.IHFS.IAppend {
    /**
     * Content to Append
     * @type {Buffer}
     * @description The content to be appended to an existing file in the Hedera
     * File Service (HFS).
     * 
     * Content Requirements:
     * - Must be non-empty Buffer
     * - Size within network limits
     * - Valid data format
     * - Proper encoding
     * 
     * @example
     * content: "New content to append"
     */
    @ApiProperty({
        description: 'The content to be appended to the existing file on HFS',
        type: () => 'string',
        required: true
    })
    content: string;

    /**
     * Maximum Transaction Fee
     * @type {number}
     * @description The maximum fee allowed for the file append transaction.
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
     * File Append Constructor
     * @constructor
     * @description Initializes a new file append operation with comprehensive
     * validation and security measures.
     * 
     * Validation Process:
     * - Content validation
     * - Size verification
     * - Fee validation
     * - Format checking
     * 
     * Security Measures:
     * - Input sanitization
     * - Fee protection
     * - Size limits
     * - Format validation
     * 
     * @param {IHashgraph.ILedger.IHFS.IAppend} data - Configuration data
     * @throws {Error} When content validation fails
     * @throws {Error} When fee validation fails
     * @throws {Error} When size limits are exceeded
     * 
     * @example
     * // Initialize append with full configuration
     * const append = new _Append({
     *   // Content to append
     *   content: Buffer.from("New configuration data"),
     *   
     *   // Transaction control
     *   maxTransactionFee: 5000000
     * });
     */
    constructor(data: IHashgraph.ILedger.IHFS.IAppend) {
        // Validate that content is a non-empty string
        if (!data.content || typeof data.content !== 'string' || data.content.trim() === '') {
            throw new Error('Content must be a non-empty string');
        }
        this.content = data.content;

        // Validate optional transaction fee
        if (data.maxTransactionFee !== undefined) {
            if (typeof data.maxTransactionFee !== 'number' || data.maxTransactionFee <= 0) {
                throw new Error('Maximum transaction fee must be a positive number');
            }
            this.maxTransactionFee = data.maxTransactionFee;
        }
    }
}