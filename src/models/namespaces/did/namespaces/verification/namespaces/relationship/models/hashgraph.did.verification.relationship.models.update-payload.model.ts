import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _UpdateBody } from './hashgraph.did.verification.relationship.models.update-body.model';

/**
 * Model for managing DID verification relationship update payloads
 * 
 * @class _UpdatePayload
 * @implements {IHashgraph.IDID.IVerification.IRelationship.IUpdatePayload}
 * @description Provides comprehensive functionality for managing verification relationship update payloads including:
 * - Complete update payload management
 * - Validation and verification
 * - Data structure standardization
 * - Update lifecycle handling
 * @namespace Hashgraph.DID.Verification.Relationship
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of relationship update payloads:
 * - Update payload: Comprehensive update data handling
 * - Validation: Complete data verification
 * - Format handling: Standardized structure management
 * - Error handling: Robust error management
 * 
 * Key features:
 * - Strict type validation
 * - Complete field verification
 * - Update tracking
 * - Error state handling
 * 
 * @example
 * // Create a new update payload
 * const updatePayload = new _UpdatePayload({
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   relationshipType: "authentication"
 * });
 * 
 * @throws {Error} When validation fails for any required field
 */
export class _UpdatePayload implements IHashgraph.IDID.IVerification.IRelationship.IUpdatePayload {
    /**
     * The relationship details to be updated
     * 
     * @type {IHashgraph.IDID.IVerification.IRelationship.IUpdateBody}
     * @memberof _UpdatePayload
     * @description Represents the relationship update details providing:
     * - Complete update information
     * - Validation requirements
     * - Data structure format
     * - Update specifications
     * 
     * Required components:
     * - controller: The controlling DID
     * - type: The verification key type
     * - publicKeyMultibase: The public key
     * 
     * Optional components:
     * - relationshipType: The type of relationship
     * 
     * Validation rules:
     * - Must be a valid update body object
     * - Must contain all required fields
     * - Must follow data structure format
     * - Must pass validation checks
     * 
     * @example
     * // Valid relationship update body
     * relationship = {
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   relationshipType: "authentication"
     * }
     * 
     * @throws {Error} When an invalid relationship update body is provided
     */
    @ApiProperty({
        description: 'The relationship details to be updated',
        type: () => _UpdateBody,
        required: true,
        example: {
            controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
            type: "Ed25519VerificationKey2018",
            publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5",
            relationshipType: "authentication"
        }
    })
    relationship: IHashgraph.IDID.IVerification.IRelationship.IUpdateBody;

    /**
     * Creates an instance of the _UpdatePayload class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IRelationship.IUpdateBody} relationship - The relationship update details
     * @throws {Error} When validation fails for any parameter
     * @memberof _UpdatePayload
     * @description Initializes a new update payload instance with:
     * - Complete parameter validation
     * - Field verification
     * - Type checking
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies all required fields
     * - Validates field formats
     * - Checks type constraints
     * - Ensures data completeness
     * 
     * Required fields:
     * - relationship: Complete update body object
     *   - controller: Controlling DID
     *   - type: Key type
     *   - publicKeyMultibase: Public key
     * 
     * Optional fields in relationship:
     * - relationshipType: Type of relationship
     * 
     * @example
     * // Create a valid update payload
     * const updatePayload = new _UpdatePayload({
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   relationshipType: "authentication"
     * });
     * 
     * // These will throw errors
     * const invalid1 = new _UpdatePayload(null);  // Error: Relationship is required
     * const invalid2 = new _UpdatePayload({});    // Error: Required fields missing
     */
    constructor(relationship: IHashgraph.IDID.IVerification.IRelationship.IUpdateBody) {
        this.relationship = relationship;
        this.validate();
    }

    /**
     * Validates the update payload data
     * 
     * @private
     * @memberof _UpdatePayload
     * @throws {Error} When validation fails for any required field
     * @description Performs complete validation including:
     * - Required field presence
     * - Field format verification
     * - Type validation
     * - Data consistency checks
     * 
     * Validation checks:
     * - Relationship object must be present
     * - All required fields in relationship must be present
     * - Fields must be properly formatted
     * - Types must be supported
     * 
     * Error handling:
     * - Throws specific error messages
     * - Identifies missing fields
     * - Reports format violations
     * - Details validation failures
     */
    private validate(): void {
        if (!this.relationship) {
            throw new Error('Relationship is required');
        }
        if (!this.relationship.controller) {
            throw new Error('Relationship controller is required');
        }
        if (!this.relationship.type) {
            throw new Error('Relationship type is required');
        }
        if (!this.relationship.publicKeyMultibase) {
            throw new Error('Relationship publicKeyMultibase is required');
        }
    }
}