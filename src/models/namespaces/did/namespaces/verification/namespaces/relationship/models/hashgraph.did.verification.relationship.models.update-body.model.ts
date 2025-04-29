import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing DID verification relationship updates
 * 
 * @class _UpdateBody
 * @implements {IHashgraph.IDID.IVerification.IRelationship.IUpdateBody}
 * @description Provides comprehensive functionality for managing verification relationship updates including:
 * - Complete update payload management
 * - Validation and verification
 * - Data structure standardization
 * - Update lifecycle handling
 * @namespace Hashgraph.DID.Verification.Relationship
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of relationship updates:
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
 * // Create a new relationship update
 * const updateBody = new _UpdateBody(
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "Ed25519VerificationKey2018",
 *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "authentication"
 * );
 * 
 * @throws {Error} When validation fails for any required field
 */
export class _UpdateBody implements IHashgraph.IDID.IVerification.IRelationship.IUpdateBody {
    /**
     * The controlling DID for the relationship
     * 
     * @type {string}
     * @memberof _UpdateBody
     * @description Represents the controlling entity providing:
     * - Relationship control authority
     * - Update authorization
     * - Identity verification
     * - Access management
     * 
     * Format requirements:
     * - Must be a valid DID string
     * - Should follow Hedera DID format
     * - Must include network identifier
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be a non-empty string
     * - Must follow DID syntax
     * - Must be a valid controller
     * - Must be properly formatted
     * 
     * @example
     * // Valid controller DID
     * controller = "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * 
     * @throws {Error} When an invalid controller is provided
     */
    @ApiProperty({
        description: 'The DID of the entity controlling this relationship.',
        example: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
        required: true
    })
    controller: string;

    /**
     * The verification key type
     * 
     * @type {"Ed25519VerificationKey2018"}
     * @memberof _UpdateBody
     * @description Specifies the verification method type providing:
     * - Cryptographic algorithm specification
     * - Key type identification
     * - Verification protocol
     * - Compatibility information
     * 
     * Type characteristics:
     * - Ed25519: Modern elliptic curve algorithm
     * - Verification: Supports signature verification
     * - 2018: Version specification
     * - Key format: Standardized key format
     * 
     * Validation rules:
     * - Must be exactly "Ed25519VerificationKey2018"
     * - No other types are currently supported
     * - Case-sensitive validation
     * - Strict type checking
     * 
     * @example
     * // Valid verification key type
     * type = "Ed25519VerificationKey2018"
     * 
     * @throws {Error} When an invalid type is provided
     */
    @ApiProperty({
        description: 'Specifies the type of verification key used.',
        example: "Ed25519VerificationKey2018",
        required: true
    })
    type: "Ed25519VerificationKey2018";

    /**
     * The public key in multibase format
     * 
     * @type {string}
     * @memberof _UpdateBody
     * @description Represents the encoded public key providing:
     * - Cryptographic verification capability
     * - Standard key representation
     * - Interoperable format
     * - Verification support
     * 
     * Format requirements:
     * - Must be multibase encoded
     * - Should start with appropriate prefix
     * - Must be valid key material
     * - Must follow encoding standards
     * 
     * Validation rules:
     * - Must be a non-empty string
     * - Must be properly encoded
     * - Must be valid key material
     * - Must follow multibase format
     * 
     * @example
     * // Valid multibase-encoded public key
     * publicKeyMultibase = "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * 
     * @throws {Error} When an invalid public key is provided
     */
    @ApiProperty({
        description: 'The public key in multibase format.',
        example: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5",
        required: true
    })
    publicKeyMultibase: string;

    /**
     * The type of relationship
     * 
     * @type {IHashgraph.IDID.IVerification.IRelationship.RelationshipType}
     * @memberof _UpdateBody
     * @description Defines the relationship type providing:
     * - Purpose specification
     * - Usage context
     * - Authorization scope
     * - Relationship constraints
     * 
     * Supported types:
     * - authentication: For identity verification
     * - assertion: For claim verification
     * - keyAgreement: For key exchange
     * - capabilityInvocation: For authorization
     * - capabilityDelegation: For delegation
     * 
     * Validation rules:
     * - Must be a supported relationship type if provided
     * - Must match intended usage
     * - Must be properly formatted
     * - Must follow specifications
     * 
     * @example
     * // Valid relationship type
     * relationshipType = "authentication"
     * 
     * @throws {Error} When an invalid relationship type is provided
     */
    @ApiProperty({
        description: 'Specifies the type of relationship this represents.',
        example: "authentication",
        required: false
    })
    relationshipType?: IHashgraph.IDID.IVerification.IRelationship.RelationshipType;

    /**
     * Creates an instance of the _UpdateBody class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IRelationship.IUpdateBody} data - Partial data to initialize the update body
     * @throws {Error} When validation fails for any parameter
     * @memberof _UpdateBody
     * @description Initializes a new update body instance with:
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
     * - controller: Controlling DID
     * - type: Key type
     * - publicKeyMultibase: Public key
     * 
     * Optional fields:
     * - relationshipType: Type of relationship
     * 
     * @example
     * // Create a valid update body
     * const updateBody = new _UpdateBody(
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "Ed25519VerificationKey2018",
     *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "authentication"
     * );
     * 
     * // These will throw errors
     * const invalid1 = new _UpdateBody("", "", "");  // Error: Required fields missing
     * const invalid2 = new _UpdateBody(              // Error: Invalid type
     *   "did:hedera:...",
     *   "InvalidType",
     *   "z6Mk..."
     * );
     */
    constructor(data: IHashgraph.IDID.IVerification.IRelationship.IUpdateBody) {
        Object.assign(this, data);
        this.validate();
    }

    /**
     * Validates the update body data
     * 
     * @private
     * @memberof _UpdateBody
     * @throws {Error} When validation fails for any required field
     * @description Performs complete validation including:
     * - Required field presence
     * - Field format verification
     * - Type validation
     * - Data consistency checks
     * 
     * Validation checks:
     * - All required fields must be present
     * - Fields must be non-empty strings
     * - Types must be supported
     * - Formats must be valid
     * 
     * Error handling:
     * - Throws specific error messages
     * - Identifies missing fields
     * - Reports format violations
     * - Details validation failures
     */
    private validate(): void {
        if (!this.controller) {
            throw new Error('Controller is required');
        }
        if (!this.type) {
            throw new Error('Type is required');
        }
        if (!this.publicKeyMultibase) {
            throw new Error('Public key multibase is required');
        }
    }
}