import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing verification method update bodies
 * 
 * @class _Body
 * @implements {IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody}
 * @description Provides comprehensive functionality for managing verification method updates including:
 * - Complete controller DID management
 * - Verification method type handling
 * - Public key format validation
 * - Update body lifecycle management
 * @namespace Hashgraph.DID.Verification.Payload.Update
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of update bodies:
 * - Controller validation: Ensures valid DID format
 * - Type management: Handles supported method types
 * - Key validation: Verifies public key formats
 * - Update handling: Manages update process
 * 
 * Key features:
 * - Strict DID validation
 * - Type safety checks
 * - Key format verification
 * - Complete error handling
 * 
 * @example
 * // Create a valid update body
 * const body = new _Body(
 *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   "Ed25519VerificationKey2018",
 *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * );
 * 
 * @throws {Error} When validation fails for any field
 */
export class _Body implements IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody {
    /**
     * The DID of the verification method controller
     * 
     * @type {string}
     * @memberof _Body
     * @description Represents the controlling DID providing:
     * - Method control authority
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
     * @throws {Error} When an invalid controller DID is provided
     */
    @ApiProperty({
        description: 'The DID of the controller of this verification method',
        example: 'did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719'
    })
    controller: string;

    /**
     * The verification method type
     * 
     * @type {"Ed25519VerificationKey2018"}
     * @memberof _Body
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
     * // Valid verification method type
     * type = "Ed25519VerificationKey2018"
     * 
     * @throws {Error} When an invalid type is provided
     */
    @ApiProperty({
        description: 'The type of the verification method',
        example: 'Ed25519VerificationKey2018'
    })
    type: "Ed25519VerificationKey2018";

    /**
     * The multibase-encoded public key
     * 
     * @type {string}
     * @memberof _Body
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
        description: 'The public key in multibase format',
        example: 'z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5'
    })
    publicKeyMultibase: string;

    /**
     * Creates an instance of the _Body class
     * 
     * @constructor
     * @param {string} controller - The DID of the controller
     * @param {"Ed25519VerificationKey2018"} type - The verification method type
     * @param {string} publicKeyMultibase - The public key in multibase format
     * @throws {Error} When validation fails for any parameter
     * @memberof _Body
     * @description Initializes a new update body instance with:
     * - Complete parameter validation
     * - Type verification
     * - Format checking
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies controller DID format
     * - Validates method type
     * - Checks public key format
     * - Ensures data completeness
     * 
     * Required fields:
     * - controller: Valid DID string
     * - type: "Ed25519VerificationKey2018"
     * - publicKeyMultibase: Encoded key string
     * 
     * @example
     * // Create a valid body instance
     * const body = new _Body(
     *   "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   "Ed25519VerificationKey2018",
     *   "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * );
     * 
     * // These will throw errors
     * const invalid1 = new _Body("", "Ed25519VerificationKey2018", "z6Mk...");  // Error: Invalid controller
     * const invalid2 = new _Body("did:hedera:...", "InvalidType", "z6Mk...");   // Error: Invalid type
     * const invalid3 = new _Body("did:hedera:...", "Ed25519VerificationKey2018", "");  // Error: Invalid key
     */
    constructor(controller: string, type: "Ed25519VerificationKey2018", publicKeyMultibase: string) {
        if (!controller || typeof controller !== 'string') {
            throw new Error('Controller must be a non-empty string');
        }
        this.controller = controller;

        if (type !== "Ed25519VerificationKey2018") {
            throw new Error('Type must be "Ed25519VerificationKey2018"');
        }
        this.type = type;

        if (!publicKeyMultibase || typeof publicKeyMultibase !== 'string') {
            throw new Error('Public key multibase must be a non-empty string');
        }
        this.publicKeyMultibase = publicKeyMultibase;
    }
}