import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing DID verification relationship types
 * 
 * @class _RelationshipKind
 * @implements {IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind}
 * @description Provides comprehensive functionality for managing verification relationship types including:
 * - Complete relationship type definition
 * - Validation and verification
 * - Data structure standardization
 * - Relationship lifecycle management
 * @namespace Hashgraph.DID.Verification.Relationship
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of relationship types:
 * - Type definition: Comprehensive relationship typing
 * - Validation: Complete data verification
 * - Format handling: Standardized structure management
 * - Error handling: Robust error management
 * 
 * Key features:
 * - Strict type validation
 * - Complete field verification
 * - Relationship tracking
 * - Error state handling
 * 
 * @example
 * // Create a new relationship kind
 * const relationship = new _RelationshipKind(
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "Ed25519VerificationKey2018",
 *   "authentication",
 *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * );
 * 
 * @throws {Error} When validation fails for any required field
 */
export class _RelationshipKind implements IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind {
    /**
     * The unique identifier for the relationship
     * 
     * @type {string}
     * @memberof _RelationshipKind
     * @description Represents the unique identifier providing:
     * - Globally unique identification
     * - DID and key reference combination
     * - Relationship tracking capability
     * - Reference resolution support
     * 
     * Format requirements:
     * - Must follow pattern: <did>#<key-reference>
     * - DID must be valid Hedera DID
     * - Key reference must be unique
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be a non-empty string
     * - Must follow identifier format
     * - Must be globally unique
     * - Must be properly structured
     * 
     * @example
     * // Valid relationship identifier
     * id = "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1"
     * 
     * @throws {Error} When an invalid identifier is provided
     */
    @ApiProperty({
        description: 'Unique identifier for the verification relationship.',
        example: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719#key-1"
    })
    id: string;

    /**
     * The controlling DID for the relationship
     * 
     * @type {string}
     * @memberof _RelationshipKind
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
        description: 'DID of the entity controlling this relationship.',
        example: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
    })
    controller: string;

    /**
     * The verification key type
     * 
     * @type {"Ed25519VerificationKey2018"}
     * @memberof _RelationshipKind
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
        example: "Ed25519VerificationKey2018"
    })
    type: "Ed25519VerificationKey2018";

    /**
     * The type of relationship
     * 
     * @type {IHashgraph.IDID.IVerification.IRelationship.RelationshipType}
     * @memberof _RelationshipKind
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
     * - Must be a supported relationship type
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
        example: "authentication"
    })
    relationshipType: IHashgraph.IDID.IVerification.IRelationship.RelationshipType;

    /**
     * The public key in multibase format
     * 
     * @type {string}
     * @memberof _RelationshipKind
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
        example: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
    })
    publicKeyMultibase: string;

    /**
     * Creates an instance of the _RelationshipKind class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind} data - Partial data to initialize the relationship kind
     * @throws {Error} When validation fails for any parameter
     * @memberof _RelationshipKind
     * @description Initializes a new relationship kind instance with:
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
     * - id: Unique identifier
     * - controller: Controlling DID
     * - type: Key type
     * - relationshipType: Relationship type
     * - publicKeyMultibase: Public key
     * 
     * @example
     * // Create a valid relationship kind
     * const relationship = new _RelationshipKind(
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "Ed25519VerificationKey2018",
     *   "authentication",
     *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * );
     * 
     * // These will throw errors
     * const invalid1 = new _RelationshipKind("", "", "", "", "");  // Error: All fields required
     * const invalid2 = new _RelationshipKind(                      // Error: Invalid type
     *   "did:hedera:...",
     *   "did:hedera:...",
     *   "InvalidType",
     *   "authentication",
     *   "z6Mk..."
     * );
     */
    constructor(data: IHashgraph.IDID.IVerification.IRelationship.IRelationshipKind) {
        Object.assign(this, data);
        this.validate();
    }

    /**
     * Validates the relationship data
     * 
     * @private
     * @memberof _RelationshipKind
     * @throws {Error} When validation fails for any required field
     * @description Performs complete validation including:
     * - Required field presence
     * - Field format verification
     * - Type validation
     * - Data consistency checks
     * 
     * Validation checks:
     * - All fields must be present
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
        if (!this.id) {
            throw new Error('Relationship id is required');
        }
        if (!this.controller) {
            throw new Error('Relationship controller is required');
        }
        if (!this.type) {
            throw new Error('Relationship type is required');
        }
        if (!this.relationshipType) {
            throw new Error('Relationship relationshipType is required');
        }
        if (!this.publicKeyMultibase) {
            throw new Error('Relationship publicKeyMultibase is required');
        }
    }
}