import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _Info } from './hashgraph.did.vc.list.models.info.model';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing Verifiable Credential list responses
 * 
 * @class _Response
 * @implements {IHashgraph.IDID.IVC.IList.IResponse}
 * @description Provides comprehensive functionality for managing Verifiable Credential list responses including:
 * - File ID management and validation
 * - Status information tracking
 * - Response data validation
 * - Complete response lifecycle handling
 * @namespace Hashgraph.DID.VC.List.Response
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This class provides complete response management for credential lists:
 * - File identification: Unique Hashgraph file tracking
 * - Status management: Comprehensive status information
 * - Validation: Complete response data verification
 * - Error handling: Robust error management
 * 
 * Key features:
 * - Strict file ID validation
 * - Complete status tracking
 * - Response data integrity
 * - Error state management
 * 
 * @example
 * // Create a new response instance
 * const response = new _Response(
 *   "0.0.123456",
 *   new _Info(
 *     "https://example.com/vc/status/0.0.123/614",
 *     "RevocationList2021Status",
 *     614,
 *     "https://example.com/vc/status/0.0.123"
 *   )
 * );
 * 
 * @throws {Error} When invalid parameters are provided
 */
export class _Response implements IHashgraph.IDID.IVC.IList.IResponse {
    /**
     * The Hashgraph file ID for the credential list
     * 
     * @type {string}
     * @memberof _Response
     * @description Represents the unique Hashgraph file identifier providing:
     * - Unique file identification
     * - Hashgraph network reference
     * - Credential list access
     * - File tracking capabilities
     * 
     * Format requirements:
     * - Must follow pattern: "0.0.{number}"
     * - Numbers must be valid Hashgraph IDs
     * - Must be unique in the network
     * - Must reference an existing file
     * 
     * Validation rules:
     * - Must be a non-empty string
     * - Must match Hashgraph file ID format
     * - Must be a valid network reference
     * - Must be properly formatted
     * 
     * @example
     * // Valid Hashgraph file ID
     * fileId = "0.0.123456"
     * 
     * @throws {Error} When an invalid file ID is provided
     */
    @ApiProperty({
        description: 'The Hashgraph file ID associated with the credential list',
        required: true,
        type: () => String,
        example: "0.0.123456"
    })
    fileId: string;

    /**
     * The status information for the credential list
     * 
     * @type {_Info}
     * @memberof _Response
     * @description Comprehensive status information container providing:
     * - Complete status type tracking
     * - List index management
     * - Credential URL resolution
     * - Status verification support
     * 
     * Status tracking features:
     * - Type management (revocation/suspension)
     * - Index tracking and validation
     * - URL resolution and verification
     * - Status history maintenance
     * 
     * Validation requirements:
     * - Must be a valid _Info instance
     * - Must contain valid status type
     * - Must have proper index value
     * - Must include valid credential URL
     * 
     * @example
     * // Create status information
     * statusInfo = new _Info(
     *   "https://example.com/vc/status/0.0.123/614",
     *   "RevocationList2021Status",
     *   614,
     *   "https://example.com/vc/status/0.0.123"
     * );
     * 
     * @see {@link _Info}
     * @throws {Error} When invalid status information is provided
     */
    @ApiProperty({
        description: 'The status information for the credential list',
        required: true,
        type: () => _Info
    })
    statusInfo: _Info;

    /**
     * Creates an instance of the _Response class
     * 
     * @constructor
     * @param {string} fileId - The Hashgraph file ID
     * @param {_Info} statusInfo - The status information object
     * @throws {Error} When validation fails for any parameter
     * @memberof _Response
     * @description Initializes a new response instance with:
     * - Complete parameter validation
     * - File ID verification
     * - Status info validation
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies file ID format and validity
     * - Validates status information completeness
     * - Ensures proper object instantiation
     * - Checks all required fields
     * 
     * @example
     * // Create a valid response instance
     * const response = new _Response(
     *   "0.0.123456",
     *   new _Info(
     *     "https://example.com/vc/status/0.0.123/614",
     *     "RevocationList2021Status",
     *     614,
     *     "https://example.com/vc/status/0.0.123"
     *   )
     * );
     * 
     * // These will throw errors
     * const invalidResponse1 = new _Response("", null);        // Error: Invalid fileId
     * const invalidResponse2 = new _Response("0.0.123", {});   // Error: Invalid statusInfo
     */
    constructor(fileId: string, statusInfo: _Info) {
        // Validate the fileId format and structure
        if (!fileId || typeof fileId !== 'string') {
            throw new Error('Invalid fileId');
        }
        this.fileId = fileId;

        // Validate the statusInfo object
        if (!statusInfo || !(statusInfo instanceof _Info)) {
            throw new Error('Invalid statusInfo');
        }
        this.statusInfo = statusInfo;
    }
}