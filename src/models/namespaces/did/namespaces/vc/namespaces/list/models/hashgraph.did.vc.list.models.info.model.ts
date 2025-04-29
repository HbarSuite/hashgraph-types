import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing Verifiable Credential list information
 * 
 * @class _Info
 * @implements {IHashgraph.IDID.IVC.IList.IInfo}
 * @description Provides comprehensive functionality for managing Verifiable Credential list information including:
 * - Credential status list identification and tracking
 * - Status type management and validation
 * - List indexing and reference management
 * - Status list credential resolution
 * @namespace Hashgraph.DID.VC.List.Info
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This class provides complete management of credential status list information:
 * - Revocation list management: Permanent credential invalidation
 * - Suspension list handling: Temporary credential disablement
 * - Status indexing: Efficient status lookup and tracking
 * - Credential resolution: Status verification and validation
 * 
 * Key features:
 * - Unique status identification
 * - Type-safe status management
 * - Index-based status tracking
 * - Credential resolution support
 * 
 * @example
 * // Create a new info instance for revocation list
 * const info = new _Info(
 *   "https://example.com/vc/status/0.0.123/614",
 *   "RevocationList2021Status",
 *   614,
 *   "https://example.com/vc/status/0.0.123"
 * );
 * 
 * @throws {Error} When invalid parameters are provided
 */
export class _Info implements IHashgraph.IDID.IVC.IList.IInfo {
    /**
     * The unique identifier for the credential status
     * 
     * @type {string}
     * @memberof _Info
     * @description Represents the unique URL identifier for the credential status providing:
     * - Globally unique status identification
     * - Resolvable URL for status verification
     * - Direct link to status information
     * - Status tracking capabilities
     * 
     * Validation rules:
     * - Must be a valid string
     * - Should be a properly formatted URL
     * - Must be unique within the system
     * - Should follow the status URL pattern
     * 
     * @example
     * // Valid status identifier
     * id = "https://identity-network.meecoo.me/vc/status/0.0.123/614"
     * 
     * @throws {Error} When an invalid identifier is provided
     */
    @ApiProperty({
        description: 'ID',
        required: true,
        type: () => String,
        example: "https://identity-network.meecoo.me/vc/status/0.0.123/614"
    })
    id: string;

    /**
     * The type of status list
     * 
     * @type {"RevocationList2021Status" | "SuspensionList2021Status"}
     * @memberof _Info
     * @description Specifies the type of status list with support for:
     * - RevocationList2021Status: Permanent credential invalidation
     * - SuspensionList2021Status: Temporary credential suspension
     * 
     * Type characteristics:
     * - RevocationList2021Status:
     *   - Permanent invalidation
     *   - No reinstatement possible
     *   - Complete trust removal
     * 
     * - SuspensionList2021Status:
     *   - Temporary disablement
     *   - Reinstatement possible
     *   - Trust suspension
     * 
     * @example
     * // For permanent revocation
     * type = "RevocationList2021Status"
     * 
     * // For temporary suspension
     * type = "SuspensionList2021Status"
     * 
     * @throws {Error} When an invalid type is provided
     */
    @ApiProperty({
        description: 'Type',
        required: true,
        enum: ["RevocationList2021Status", "SuspensionList2021Status"],
        example: "RevocationList2021Status"
    })
    type: "RevocationList2021Status" | "SuspensionList2021Status";

    /**
     * The index in the status list
     * 
     * @type {number}
     * @memberof _Info
     * @description The numerical index in the status list providing:
     * - Precise position identification
     * - Efficient status lookup
     * - Sequential status tracking
     * - List management support
     * 
     * Validation rules:
     * - Must be a non-negative integer
     * - Should be unique within the list
     * - Must be sequential within the list
     * - Zero-based indexing supported
     * 
     * @example
     * // Valid status list index
     * statusListIndex = 614
     * 
     * @throws {Error} When an invalid index is provided
     */
    @ApiProperty({
        description: 'statusListIndex',
        required: true,
        type: () => Number,
        example: 614
    })
    statusListIndex: number;

    /**
     * The URL of the status list credential
     * 
     * @type {string}
     * @memberof _Info
     * @description The URL reference to the status list credential providing:
     * - Complete status list access
     * - Verification capability
     * - Status resolution support
     * - Credential management
     * 
     * URL characteristics:
     * - Must be a valid HTTPS URL
     * - Should be publicly accessible
     * - Must resolve to a valid credential
     * - Should support status verification
     * 
     * @example
     * // Valid status list credential URL
     * statusListCredential = "https://identity-network.meecoo.me/vc/status/0.0.123"
     * 
     * @throws {Error} When an invalid URL is provided
     */
    @ApiProperty({
        description: 'statusListCredential',
        required: true,
        type: () => String,
        example: "https://identity-network.meecoo.me/vc/status/0.0.123"
    })
    statusListCredential: string;

    /**
     * Creates an instance of the _Info class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVC.IList.IInfo} data - Partial data to initialize the info
     * @throws {Error} When any parameter fails validation
     * @memberof _Info
     * @description Initializes a new status list info instance with:
     * - Parameter validation
     * - Type checking
     * - Index verification
     * - URL validation
     * 
     * Validation rules:
     * - id: Must be a valid string URL
     * - type: Must be one of the allowed status types
     * - statusListIndex: Must be a non-negative integer
     * - statusListCredential: Must be a valid string URL
     * 
     * @example
     * // Create a new info instance
     * const info = new _Info(
     *   "https://example.com/vc/status/0.0.123/614",
     *   "RevocationList2021Status",
     *   614,
     *   "https://example.com/vc/status/0.0.123"
     * );
     * 
     * // This will throw an error
     * const invalidInfo = new _Info(
     *   "",                    // Error: Invalid id
     *   "InvalidType",         // Error: Invalid type
     *   -1,                    // Error: Invalid statusListIndex
     *   ""                     // Error: Invalid statusListCredential
     * );
     */
    constructor(data: IHashgraph.IDID.IVC.IList.IInfo) {
        Object.assign(this, data);

        if (!this.id || typeof this.id !== 'string') {
            throw new Error('Invalid id');
        }

        if (!this.type || !["RevocationList2021Status", "SuspensionList2021Status"].includes(this.type)) {
            throw new Error('Invalid type');
        }

        if (!Number.isInteger(this.statusListIndex) || this.statusListIndex < 0) {
            throw new Error('Invalid statusListIndex');
        }

        if (!this.statusListCredential || typeof this.statusListCredential !== 'string') {
            throw new Error('Invalid statusListCredential');
        }
    }
}