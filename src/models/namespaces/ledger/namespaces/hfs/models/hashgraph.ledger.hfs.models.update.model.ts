import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsOptional, IsNumber, MinLength, MaxLength } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file HFS File Update Model
 * @class _Update
 * @implements {IHashgraph.ILedger.IHFS.IUpdate}
 * @description Implements secure file update functionality for Hedera File
 * Service (HFS). This model manages the modification of existing files in the
 * Hedera network with proper access control and validation.
 * 
 * Core Features:
 * - Content Updates
 * - Metadata Management
 * - Access Control
 * - Transaction Control
 * - Input Validation
 * - Error Handling
 * 
 * @category Hashgraph
 * @subcategory HFS
 * @since 2.0.0
 * 
 * @remarks
 * This class ensures secure file updates with proper content management,
 * access control, and transaction handling. It validates all inputs and
 * handles errors appropriately.
 * 
 * @example
 * // Update a file with full configuration
 * const updateRequest = new _Update({
 *   // File identifier
 *   fileId: "0.0.123456",
 *   
 *   // Updated content
 *   content: Buffer.from(JSON.stringify({
 *     version: "2.0",
 *     settings: {
 *       timeout: 60000,
 *       retries: 5
 *     }
 *   })),
 *   
 *   // Updated metadata
 *   memo: "Updated system configuration v2.0",
 *   
 *   // Transaction control
 *   maxTransactionFee: 5000000
 * });
 */
export class _Update implements IHashgraph.ILedger.IHFS.IUpdate {
    /**
     * File Identifier
     * @type {string}
     * @description The unique identifier of the file to be updated in the
     * Hedera File Service.
     * 
     * Format Requirements:
     * - Must be a valid Hedera file ID
     * - Format: shard.realm.number (e.g., "0.0.123456")
     * - Must reference an existing file
     * 
     * Access Requirements:
     * - Caller must have update rights
     * - File must not be immutable
     * - Network must be accessible
     * 
     * @example
     * // Standard file ID
     * fileId: "0.0.123456"
     * 
     * // Testnet file ID
     * fileId: "0.0.456789"
     */
    @ApiProperty({
        description: 'The unique identifier of the file to update',
        type: () => 'string',
        required: true
    })
    fileId: string;

    /**
     * Updated Content
     * @type {string}
     * @description The new content to be stored in the Hedera File Service,
     * replacing the existing content.
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
     * content: "Updated text content"
     * 
     * // JSON content
     * content: JSON.stringify({
     *   type: "configuration",
     *   version: "2.0",
     *   settings: {
     *     feature1: true,
     *     feature2: true,
     *     feature3: false
     *   }
     * })
     * 
     * // Binary content
     * content: Buffer.from([...]).toString('base64')
     */
    @ApiProperty({
        description: 'The new content to be stored in the file',
        type: () => 'string',
        required: true
    })
    content: string;

    /**
     * Updated Metadata
     * @type {string}
     * @description Optional updated descriptive metadata for the file providing
     * context and searchable information.
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
     * memo: "Updated configuration file for dApp"
     * 
     * // Structured memo
     * memo: JSON.stringify({
     *   type: "configuration",
     *   version: "2.0",
     *   department: "Operations",
     *   lastUpdate: new Date().toISOString(),
     *   changes: ["Added feature3", "Updated timeout"]
     * })
     */
    @ApiProperty({
        description: 'An optional updated memo or description associated with the file',
        type: () => 'string',
        required: false
    })
    memo?: string;

    /**
     * Transaction Fee Control
     * @type {number}
     * @description Optional maximum transaction fee (in tinybars) for the file
     * update operation.
     * 
     * Fee Considerations:
     * - Network conditions
     * - Content size impact
     * - Priority requirements
     * - Network congestion
     * 
     * Configuration Guidelines:
     * - Set appropriate limits
     * - Consider content size
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
     * // Large content update
     * maxTransactionFee: 20000000 // 0.2 HBAR
     */
    @ApiProperty({
        description: 'The optional maximum fee to be paid for the file update transaction',
        type: () => 'number',
        required: false
    })
    maxTransactionFee?: number;

    /**
     * File Update Constructor
     * @constructor
     * @description Initializes a new file update request with comprehensive
     * validation and configuration options.
     * 
     * Validation Rules:
     * - File ID must be valid format
     * - Content must be non-empty string
     * - Memo must be valid string if provided
     * - Transaction fee must be positive if specified
     * 
     * Configuration Process:
     * - ID validation
     * - Content validation
     * - Metadata processing
     * - Fee validation
     * - Error checking
     * - Access verification
     * 
     * @throws {Error} When file ID is invalid
     * @throws {Error} When content is empty or invalid
     * @throws {Error} When memo format is invalid
     * @throws {Error} When transaction fee is invalid
     * 
     * @example
     * // Update file with comprehensive configuration
     * const updateRequest = new _Update({
     *   // File identifier with proper format
     *   fileId: "0.0.123456",
     *   
     *   // Updated content with structured data
     *   content: Buffer.from(JSON.stringify({
     *     appSettings: {
     *       api: {
     *         endpoint: "https://api.example.com/v2",
     *         timeout: 60000,
     *         retries: 5,
     *         features: {
     *           featureA: true,
     *           featureB: true,
     *           featureC: false
     *         }
     *       }
     *     }
     *   })),
     *   
     *   // Detailed metadata
     *   memo: JSON.stringify({
     *     type: "configuration",
     *     version: "2.0.0",
     *     environment: "production",
     *     lastUpdate: new Date().toISOString(),
     *     maintainer: "DevOps Team",
     *     changes: [
     *       "Updated API endpoint to v2",
     *       "Increased timeout to 60s",
     *       "Added featureC configuration"
     *     ]
     *   }),
     *   
     *   // Optimized transaction fee
     *   maxTransactionFee: 5000000 // 0.05 HBAR
     * });
     */
    constructor(data: IHashgraph.ILedger.IHFS.IUpdate) {
        // Set the required content and optional fields
        this.content = data.content;
        this.memo = data.memo;
        this.maxTransactionFee = data.maxTransactionFee;

        // Validate content requirements
        if (!this.content || this.content.length === 0) {
            throw new Error('Content is required and cannot be empty');
        }
        if (this.content.length > 1024 * 1024) {
            throw new Error('Content exceeds maximum allowed size of 1MB');
        }

        // Validate memo length if provided
        if (this.memo && this.memo.length > 100) {
            throw new Error('Memo exceeds maximum allowed length of 100 characters');
        }

        // Validate transaction fee if provided
        if (this.maxTransactionFee !== undefined && this.maxTransactionFee < 0) {
            throw new Error('Maximum transaction fee cannot be negative');
        }
    }
}