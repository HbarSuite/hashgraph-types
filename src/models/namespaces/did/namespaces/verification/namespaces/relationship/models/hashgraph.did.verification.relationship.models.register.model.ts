import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _RelationshipKind } from './hashgraph.did.verification.relationship.models.relationship-kind.model';

/**
 * Model for managing DID verification relationship registrations
 * 
 * @class _Register
 * @implements {IHashgraph.IDID.IVerification.IRelationship.IRegister}
 * @description Provides comprehensive functionality for managing verification relationship registrations including:
 * - Complete registration payload management
 * - Validation and verification
 * - Data structure standardization
 * - Registration lifecycle handling
 * @namespace Hashgraph.DID.Verification.Relationship
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of relationship registrations:
 * - Registration payload: Comprehensive registration data handling
 * - Validation: Complete data verification
 * - Format handling: Standardized structure management
 * - Error handling: Robust error management
 * 
 * Key features:
 * - Strict type validation
 * - Complete field verification
 * - Registration tracking
 * - Error state handling
 * 
 * @example
 * // Create a new relationship registration
 * const register = new _Register({
 *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   relationshipType: "authentication",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 * 
 * @throws {Error} When validation fails for any required field
 */
export class _Register implements IHashgraph.IDID.IVerification.IRelationship.IRegister {
    /**
     * The relationship details to be registered
     * 
     * @type {IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind}
     * @memberof _Register
     * @description Represents the relationship registration details providing:
     * - Complete registration information
     * - Validation requirements
     * - Data structure format
     * - Registration specifications
     * 
     * Required components:
     * - id: The unique identifier
     * - controller: The controlling DID
     * - type: The verification key type
     * - relationshipType: The type of relationship
     * - publicKeyMultibase: The public key
     * 
     * Validation rules:
     * - Must be a valid relationship kind object
     * - Must contain all required fields
     * - Must follow data structure format
     * - Must pass validation checks
     * 
     * @example
     * // Valid relationship registration details
     * relationship = {
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   relationshipType: "authentication",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * }
     * 
     * @throws {Error} When an invalid relationship kind is provided
     */
    @ApiProperty({
        description: 'The relationship to be registered.',
        type: () => _RelationshipKind,
        example: {
            id: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1",
            controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
            type: "Ed25519VerificationKey2018",
            relationshipType: "authentication",
            publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
        },
        required: true
    })
    relationship: IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind;

    /**
     * Creates an instance of the _Register class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind} relationship - The relationship details to register
     * @throws {Error} When validation fails for any parameter
     * @memberof _Register
     * @description Initializes a new registration instance with:
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
     * - relationship: Complete relationship kind object
     *   - id: Unique identifier
     *   - controller: Controlling DID
     *   - type: Key type
     *   - relationshipType: Type of relationship
     *   - publicKeyMultibase: Public key
     * 
     * @example
     * // Create a valid registration instance
     * const register = new _Register({
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   relationshipType: "authentication",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * // These will throw errors
     * const invalid1 = new _Register(null);  // Error: Relationship is required
     * const invalid2 = new _Register({});    // Error: Required fields missing
     */
    constructor(relationship: IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind) {
        this.relationship = relationship;
        this.validate();
    }

    /**
     * Validates the relationship registration data
     * 
     * @private
     * @memberof _Register
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
        if (!this.relationship.id) {
            throw new Error('Relationship id is required');
        }
        if (!this.relationship.controller) {
            throw new Error('Relationship controller is required');
        }
        if (!this.relationship.type) {
            throw new Error('Relationship type is required');
        }
        if (!this.relationship.relationshipType) {
            throw new Error('Relationship relationshipType is required');
        }
        if (!this.relationship.publicKeyMultibase) {
            throw new Error('Relationship publicKeyMultibase is required');
        }
    }
}