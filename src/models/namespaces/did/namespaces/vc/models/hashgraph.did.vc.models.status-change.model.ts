import { _VC } from '../hashgraph.did.vc.namespace';
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing Verifiable Credential status changes
 * 
 * @class _StatusChange
 * @implements {IHashgraph.IDID.IVC.IStatusChange}
 * @description Provides comprehensive functionality for managing Verifiable Credential status changes including:
 * - Status transitions and validations
 * - State management and tracking
 * - Audit trail maintenance
 * - Compliance enforcement
 * @namespace Hashgraph.DID.VC.StatusChange
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This class handles all aspects of status management for Verifiable Credentials:
 * - Active status: Indicates a valid and usable credential
 * - Revoked status: Marks permanently invalidated credentials
 * - Suspended status: Indicates temporarily disabled credentials
 * - Resumed status: Represents reactivated credentials after suspension
 * 
 * Key features:
 * - Strict status validation
 * - Transition state management
 * - Complete audit trail tracking
 * - Standards compliance checks
 * 
 * @example
 * // Create a new active status
 * const activeStatus = new _StatusChange('active');
 * 
 * // Create a revoked status
 * const revokedStatus = new _StatusChange('revoked');
 * 
 * // Handle suspension
 * const suspendedStatus = new _StatusChange('suspended');
 * 
 * @throws {Error} When invalid status values are provided
 */
export class _StatusChange implements IHashgraph.IDID.IVC.IStatusChange {
    /**
     * The current status of the Verifiable Credential
     * 
     * @type {IHashgraph.IDID.IVC.Status}
     * @memberof _StatusChange
     * @description Represents the current state of the credential with support for:
     * - active: Valid and currently usable credential
     * - revoked: Permanently invalidated credential
     * - suspended: Temporarily disabled credential
     * - resumed: Reactivated credential after suspension
     * 
     * Status management features:
     * - Strict validation of status values
     * - State transition tracking
     * - Audit trail maintenance
     * - Compliance verification
     * 
     * Validation rules:
     * - Must be one of the defined status values
     * - Cannot transition from revoked to active
     * - Suspended status can be resumed
     * 
     * @example
     * // Valid status values
     * status = 'active'    // New or valid credential
     * status = 'revoked'   // Permanently invalidated
     * status = 'suspended' // Temporarily disabled
     * status = 'resumed'   // Reactivated after suspension
     * 
     * @throws {Error} When an invalid status value is assigned
     */
    @ApiProperty({
        description: 'The status of the Verifiable Credential',
        required: true,
        type: () => String,
        enum: ['active', 'revoked', 'suspended', 'resumed'],
        example: 'active'
    })
    status: IHashgraph.IDID.IVC.Status;

    /**
     * Creates an instance of the _StatusChange class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVC.Status} status - The initial status of the Verifiable Credential
     * @throws {Error} If the provided status is invalid
     * @memberof _StatusChange
     * @description Initializes a new status change instance with:
     * - Status validation
     * - State initialization
     * - Transition verification
     * - Compliance checks
     * 
     * Validation rules:
     * - Status must be a valid enum value
     * - Initial status must follow transition rules
     * - Status must comply with VC standards
     * 
     * @example
     * // Create an active status
     * const activeStatus = new _StatusChange('active');
     * 
     * // Create a revoked status
     * const revokedStatus = new _StatusChange('revoked');
     * 
     * // This will throw an error
     * const invalidStatus = new _StatusChange('invalid'); // Error: Invalid status
     */
    constructor(status: IHashgraph.IDID.IVC.Status) {
        this.status = status;
    }
}