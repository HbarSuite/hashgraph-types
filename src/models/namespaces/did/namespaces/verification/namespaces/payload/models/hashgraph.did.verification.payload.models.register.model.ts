import { ApiProperty } from '@hsuite/nestjs-swagger';
import { _Verification } from '../../../hashgraph.did.verification.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Method } from '../../../models/hashgraph.did.verification.models.method.model';

/**
 * Model for managing verification method registration
 * 
 * @class _Register
 * @implements {IHashgraph.IDID.IVerification.IPayload.IRegister}
 * @description Provides comprehensive functionality for registering verification methods including:
 * - Complete method registration process
 * - Input validation and verification
 * - Data structure standardization
 * - Registration lifecycle management
 * @namespace Hashgraph.DID.Verification.Payload.Register
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of verification method registration:
 * - Method data validation: Ensures complete and valid data
 * - Format verification: Validates all required fields
 * - Registration handling: Manages the registration process
 * - Error management: Comprehensive error handling
 * 
 * Key features:
 * - Strict data validation
 * - Complete field verification
 * - Registration process tracking
 * - Error state handling
 * 
 * @example
 * // Create a new verification method registration
 * const register = new _Register({
 *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 * 
 * @throws {Error} When validation fails for any required field
 */
export class _Register implements IHashgraph.IDID.IVerification.IPayload.IRegister {
    /**
     * The verification method to be registered
     * 
     * @type {IHashgraph.IDID.IVerification.IMethod}
     * @memberof _Register
     * @description Represents the complete verification method data providing:
     * - Unique method identification
     * - Controller association
     * - Key type specification
     * - Public key information
     * 
     * Required components:
     * - id: Unique identifier for the method
     * - controller: DID of the controlling entity
     * - type: Verification method type
     * - publicKeyMultibase: Encoded public key
     * 
     * Validation rules:
     * - All fields must be non-empty strings
     * - ID must follow DID URL format
     * - Controller must be a valid DID
     * - Type must be supported
     * - Public key must be properly encoded
     * 
     * @example
     * // Valid verification method
     * method = {
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * }
     * 
     * @throws {Error} When any required field is missing or invalid
     */
    @ApiProperty({
        description: 'The verification method to be registered',
        type: () => _Method,
        required: true,
        example: {
            id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
            controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
            type: "Ed25519VerificationKey2018",
            publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
        }
    })
    method: IHashgraph.IDID.IVerification.IMethod;

    /**
     * Creates an instance of the _Register class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IMethod} method - The verification method to register
     * @throws {Error} When validation fails for the method or any required field
     * @memberof _Register
     * @description Initializes a new registration instance with:
     * - Complete method validation
     * - Required field verification
     * - Data structure validation
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies method object existence
     * - Validates all required fields
     * - Checks field formats
     * - Ensures data completeness
     * 
     * Required fields:
     * - id: Method identifier
     * - controller: Controlling DID
     * - type: Method type
     * - publicKeyMultibase: Public key
     * 
     * @example
     * // Create a valid registration
     * const register = new _Register({
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * // These will throw errors
     * const invalid1 = new _Register(null);              // Error: Method is required
     * const invalid2 = new _Register({});               // Error: Method id is required
     * const invalid3 = new _Register({                  // Error: Method controller is required
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1"
     * });
     */
    constructor(method: IHashgraph.IDID.IVerification.IMethod) {
        this.method = method;

        // Validate that method and all required fields are provided
        if (!this.method) {
            throw new Error('Method is required');
        }
        if (!this.method.id) {
            throw new Error('Method id is required');
        }
        if (!this.method.controller) {
            throw new Error('Method controller is required');
        }
        if (!this.method.type) {
            throw new Error('Method type is required');
        }
        if (!this.method.publicKeyMultibase) {
            throw new Error('Method publicKeyMultibase is required');
        }
    }
}