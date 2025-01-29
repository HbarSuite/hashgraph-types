import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HFS File Creation Model
 * @class _Create
 * @implements {IHashgraph.ILedger.IHFS.ICreate}
 * @description Implements secure file creation functionality for Hedera File
 * Service (HFS). This model manages the initial creation and configuration of
 * files in the Hedera network.
 * 
 * Core Features:
 * - Content Management
 * - Metadata Configuration
 * - Transaction Control
 * - Input Validation
 * - Error Handling
 * 
 * @category Hashgraph
 * @subcategory HFS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure and validated file creation with proper content
 * management and transaction control.
 * 
 * @example
 * // Create a new file with full configuration
 * const file = new _Create({
 *   // File content (can be JSON, text, or binary)
 *   content: Buffer.from(JSON.stringify({
 *     version: "1.0",
 *     settings: {
 *       timeout: 30000,
 *       retries: 3
 *     }
 *   })),
 *   
 *   // Metadata
 *   memo: "System configuration file v1.0",
 *   
 *   // Transaction control
 *   maxTransactionFee: 5000000
 * });
 */
export class _Create implements IHashgraph.ILedger.IHFS.ICreate {
    /**
     * File Content
     * @type {string}
     * @description The actual content to be stored in the Hedera File Service.
     * 
     * Content Requirements:
     * - Must be non-empty string
     * - Can contain any valid string data
     * - Size limits apply based on network rules
     * - Supports various data formats
     * 
     * Best Practices:
     * - Use appropriate encoding
     * - Consider content structure
     * - Validate before submission
     * - Handle large content appropriately
     * 
     * @example
     * // Text content
     * content: "Simple text content"
     * 
     * // JSON content
     * content: JSON.stringify({
     *   type: "configuration",
     *   version: "1.0",
     *   settings: {
     *     feature1: true,
     *     feature2: false
     *   }
     * })
     * 
     * // Binary content
     * content: Buffer.from([...]).toString('base64')
     */
    @ApiProperty({
        description: 'The actual content to be stored in the file on HFS',
        type: () => 'string',
        required: true
    })
    content: string;

    /**
     * File Metadata
     * @type {string}
     * @description Optional descriptive metadata for the file providing context
     * and searchable information.
     * 
     * Metadata Guidelines:
     * - Clear description
     * - Version information
     * - Purpose indication
     * - Access requirements
     * 
     * Best Practices:
     * - Keep concise but informative
     * - Include version if applicable
     * - Note special handling
     * - Document dependencies
     * 
     * @example
     * // Simple memo
     * memo: "Configuration file for dApp"
     * 
     * // Structured memo
     * memo: JSON.stringify({
     *   type: "configuration",
     *   version: "1.0",
     *   department: "Operations",
     *   lastUpdate: new Date().toISOString()
     * })
     */
    @ApiProperty({
        description: 'An optional memo or description associated with the file',
        type: () => 'string',
        required: false
    })
    memo?: string;

    /**
     * Transaction Fee Control
     * @type {number}
     * @description Optional maximum transaction fee (in tinybars) for the file
     * creation operation.
     * 
     * Fee Considerations:
     * - Network conditions
     * - File size impact
     * - Priority requirements
     * - Network congestion
     * 
     * Configuration Guidelines:
     * - Set appropriate limits
     * - Consider file size
     * - Account for network state
     * - Balance cost and speed
     * 
     * @example
     * // Standard fee
     * maxTransactionFee: 5000000 // 0.05 HBAR
     * 
     * // Priority operation
     * maxTransactionFee: 10000000 // 0.1 HBAR
     * 
     * // Large file handling
     * maxTransactionFee: 20000000 // 0.2 HBAR
     */
    @ApiProperty({
        description: 'The optional maximum fee to be paid for the file creation transaction',
        type: () => 'number',
        required: false
    })
    maxTransactionFee?: number;

    /**
     * File Creation Constructor
     * @constructor
     * @description Initializes a new file creation request with comprehensive
     * validation and configuration options.
     * 
     * Validation Rules:
     * - Content must be non-empty string
     * - Memo must be valid string if provided
     * - Transaction fee must be positive if specified
     * 
     * Configuration Process:
     * - Content validation
     * - Metadata processing
     * - Fee validation
     * - Error checking
     * 
     * @throws {Error} When content is empty or invalid
     * @throws {Error} When memo format is invalid
     * @throws {Error} When transaction fee is invalid
     * 
     * @example
     * // Create file with comprehensive configuration
     * const file = new _Create({
     *   // Content with structured data
     *   content: Buffer.from(JSON.stringify({
     *     appSettings: {
     *       api: {
     *         endpoint: "https://api.example.com",
     *         timeout: 30000,
     *         retries: 3
     *       },
     *       features: {
     *         featureA: true,
     *         featureB: false
     *       }
     *     }
     *   })),
     *   
     *   // Detailed metadata
     *   memo: JSON.stringify({
     *     type: "configuration",
     *     version: "1.0.0",
     *     environment: "production",
     *     lastUpdate: new Date().toISOString(),
     *     maintainer: "DevOps Team"
     *   }),
     *   
     *   // Optimized transaction fee
     *   maxTransactionFee: 5000000 // 0.05 HBAR
     * });
     */
    constructor(data: IHashgraph.ILedger.IHFS.ICreate) {
        // Validate that content is a non-empty string
        if (!data.content || typeof data.content !== 'string' || data.content.trim() === '') {
            throw new Error('Content must be a non-empty string');
        }
        this.content = data.content;

        // Validate optional memo if provided
        if (data.memo !== undefined) {
            if (typeof data.memo !== 'string') {
                throw new Error('Memo must be a string');
            }
            this.memo = data.memo;
        }

        // Validate optional maxTransactionFee if provided
        if (data.maxTransactionFee !== undefined) {
            if (typeof data.maxTransactionFee !== 'number' || data.maxTransactionFee <= 0) {
                throw new Error('Maximum transaction fee must be a positive number');
            }
            this.maxTransactionFee = data.maxTransactionFee;
        }
    }
}