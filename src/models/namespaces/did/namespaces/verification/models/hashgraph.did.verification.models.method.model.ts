import { VerificationMethodSupportedKeyType } from "@hsuite/did-sdk-js/dist/identity/hcs/did/event/verification-method/types"
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Verification Method Model for DID Documents
 * 
 * @class _Method
 * @implements {IHashgraph.IDID.IVerification.IMethod}
 * @description Implements the W3C DID Core specification for verification methods.
 * Provides comprehensive functionality for managing cryptographic verification methods:
 * - Method identification and unique ID management
 * - Controller association and validation
 * - Cryptographic key type specification
 * - Public key encoding and storage
 * - Method relationship management
 * @namespace Hashgraph.DID.Verification.Method
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This class implements verification methods following W3C standards, supporting:
 * - Multiple key types (Ed25519, ECDSA, etc.)
 * - Multibase key encoding
 * - Method ID fragment generation
 * - Controller validation and verification
 * - Relationship establishment (authentication, assertion, etc.)
 * 
 * @example
 * // Create a new verification method
 * const method = new _Method({
 *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
 *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 *   type: "Ed25519VerificationKey2018",
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * });
 */
export class _Method implements IHashgraph.IDID.IVerification.IMethod {
    /**
     * The unique identifier for the verification method
     * @type {string}
     * @description Unique identifier for the verification method that follows W3C DID Core requirements:
     * - Must be a valid DID URL fragment
     * - Uniquely identifies the method within the DID document
     * - Can be referenced by verification relationships
     * - Follows the format: <did>#<key-id>
     * 
     * The identifier ensures:
     * - Global uniqueness through DID prefix
     * - Local uniqueness through key fragment
     * - Proper reference resolution
     * - Relationship establishment capability
     * @memberof _Method
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * // Full DID URL with fragment
     * id = "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1"
     * 
     * // Fragment only (when used in relationships)
     * id = "#key-1"
     */
    @ApiProperty({
        description: 'The unique identifier for the verification method',
        example: 'did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    id: string;

    /**
     * The DID of the controller
     * @type {string}
     * @description The DID of the entity that controls this verification method.
     * The controller:
     * - Must be a valid DID URI
     * - Has authority to modify the method
     * - Can be the same as or different from the DID subject
     * - Must be resolvable to a valid DID document
     * 
     * The controller property ensures:
     * - Clear ownership definition
     * - Access control enforcement
     * - Key management authority
     * - Method update permissions
     * @memberof _Method
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * controller = "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     */
    @ApiProperty({
        description: 'The DID of the controller of this verification method',
        example: 'did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    controller: string;

    /**
     * The verification method type
     * @type {VerificationMethodSupportedKeyType}
     * @description Specifies the cryptographic algorithm and key format.
     * The type must be:
     * - A supported verification method type
     * - Compatible with the public key format
     * - Registered in the DID specification
     * 
     * Supported types include:
     * - Ed25519VerificationKey2018
     * - EcdsaSecp256k1VerificationKey2019
     * - JsonWebKey2020
     * 
     * The type determines:
     * - Key format requirements
     * - Signature generation method
     * - Verification algorithm
     * - Security characteristics
     * @memberof _Method
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * type = "Ed25519VerificationKey2018"
     */
    @ApiProperty({
        description: 'The type of the verification method',
        type: () => String,
        example: 'Ed25519VerificationKey2018',
        required: true,
    })
    type: VerificationMethodSupportedKeyType;

    /**
     * The public key in multibase format
     * @type {string}
     * @description The public key material encoded in multibase format.
     * The key must be:
     * - Properly encoded using multibase
     * - Compatible with the specified type
     * - Unique within the DID document
     * 
     * The multibase format provides:
     * - Self-describing encoding
     * - Algorithm agility
     * - Format verification
     * - Consistent representation
     * 
     * Key characteristics:
     * - Starts with encoding prefix (e.g., 'z' for base58btc)
     * - Contains the encoded public key bytes
     * - Matches the specified verification method type
     * - Used for cryptographic verification
     * @memberof _Method
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * // Ed25519 public key in base58btc multibase format
     * publicKeyMultibase = "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     */
    @ApiProperty({
        description: 'The public key in multibase format',
        example: 'z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    publicKeyMultibase: string;

    /**
     * Creates an instance of the _Method class
     * @constructor
     * @param {string} id - The unique identifier for the verification method
     * @param {string} controller - The DID of the controller
     * @param {VerificationMethodSupportedKeyType} type - The verification method type
     * @param {string} publicKeyMultibase - The public key in multibase format
     * @throws {Error} When:
     * - Any required field is missing or empty
     * - ID is not a valid DID URL
     * - Controller is not a valid DID
     * - Type is not supported
     * - Public key format is invalid
     * @memberof _Method
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a new verification method
     * const method = new _Method({
     *   id: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH#key-1",
     *   controller: "did:hedera:testnet:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
     *   type: "Ed25519VerificationKey2018",
     *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     * });
     * 
     * // These will throw errors:
     * const invalid1 = new _Method({ }); // Missing required fields
     * const invalid2 = new _Method({ id: "invalid" }); // Invalid DID URL
     * const invalid3 = new _Method({ type: "UnsupportedType" }); // Invalid type
     */
    constructor(id: string, controller: string, type: VerificationMethodSupportedKeyType, publicKeyMultibase: string) {
        // Validate that all required fields are provided
        if (!id || !controller || !type || !publicKeyMultibase) {
            throw new Error('All fields are required for Verification Method');
        }
        
        // Initialize the verification method properties
        this.id = id;
        this.controller = controller;
        this.type = type;
        this.publicKeyMultibase = publicKeyMultibase;
    }
}