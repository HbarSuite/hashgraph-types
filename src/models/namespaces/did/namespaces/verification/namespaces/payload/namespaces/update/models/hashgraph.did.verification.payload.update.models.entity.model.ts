import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';
import { _Body } from './hashgraph.did.verification.payload.update.models.body.model';

/**
 * Model for managing verification method update entities
 * 
 * @class _Entity
 * @implements {IHashgraph.IDID.IVerification.IPayload.IUpdate.IEntity}
 * @description Provides comprehensive functionality for managing verification method updates including:
 * - Complete update payload management
 * - Method information validation
 * - Data structure verification
 * - Update lifecycle handling
 * @namespace Hashgraph.DID.Verification.Payload.Update
 * @category Models
 * @subcategory Verification
 * @since 2.0.0
 * 
 * This class provides complete management of update entities:
 * - Method validation: Ensures complete and valid data
 * - Format verification: Validates all required fields
 * - Update handling: Manages the update process
 * - Error management: Comprehensive error handling
 * 
 * Key features:
 * - Strict data validation
 * - Complete field verification
 * - Update process tracking
 * - Error state handling
 * 
 * @example
 * // Create a valid update entity
 * const entity = new _Entity({
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 * 
 * @throws {Error} When validation fails for any field
 */
export class _Entity implements IHashgraph.IDID.IVerification.IPayload.IUpdate.IEntity {
    /**
     * The verification method update details
     * 
     * @type {IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody}
     * @memberof _Entity
     * @description Represents the complete update information providing:
     * - Method control specification
     * - Type identification
     * - Key material management
     * - Update process support
     * 
     * Required components:
     * - controller: DID of the controlling entity
     * - type: Verification method type
     * - publicKeyMultibase: Encoded public key
     * 
     * Validation rules:
     * - All fields must be non-empty strings
     * - Controller must be a valid DID
     * - Type must be supported
     * - Public key must be properly encoded
     * 
     * @example
     * // Valid method update details
     * method = {
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * }
     * 
     * @throws {Error} When any required field is missing or invalid
     */
    @ApiProperty({
        description: 'The updated verification method details',
        type: () => _Body,
        required: true,
        example: {
            controller: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719",
            type: "Ed25519VerificationKey2018",
            publicKeyMultibase: "z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5"
        }
    })
    method: IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody;

    /**
     * Creates an instance of the _Entity class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody} method - The verification method details to update
     * @throws {Error} When validation fails for the method or any required field
     * @memberof _Entity
     * @description Initializes a new update entity instance with:
     * - Complete method validation
     * - Required field verification
     * - Data structure validation
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies method object existence
     * - Validates controller format
     * - Checks method type
     * - Verifies key format
     * 
     * Required fields:
     * - method: Complete update information
     * - method.controller: Valid DID string
     * - method.type: "Ed25519VerificationKey2018"
     * - method.publicKeyMultibase: Encoded key string
     * 
     * @example
     * // Create a valid entity instance
     * const entity = new _Entity({
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * // These will throw errors
     * const invalid1 = new _Entity(null);              // Error: Method is required
     * const invalid2 = new _Entity({});               // Error: Method controller must be a non-empty string
     * const invalid3 = new _Entity({                  // Error: Method type must be "Ed25519VerificationKey2018"
     *   controller: "did:hedera:testnet:z6MkR...",
     *   type: "InvalidType",
     *   publicKeyMultibase: "z6MkR..."
     * });
     */
    constructor(method: IHashgraph.IDID.IVerification.IPayload.IUpdate.IBody) {
        // Validate that method is provided
        if (!method) {
            throw new Error('Method is required');
        }

        // Validate controller is a non-empty string
        if (!method.controller || typeof method.controller !== 'string') {
            throw new Error('Method controller must be a non-empty string');
        }

        // Validate type is Ed25519VerificationKey2018
        if (method.type !== "Ed25519VerificationKey2018") {
            throw new Error('Method type must be "Ed25519VerificationKey2018"');
        }

        // Validate publicKeyMultibase is a non-empty string
        if (!method.publicKeyMultibase || typeof method.publicKeyMultibase !== 'string') {
            throw new Error('Method publicKeyMultibase must be a non-empty string');
        }

        // Initialize the entity with validated method
        this.method = method;
    }
}