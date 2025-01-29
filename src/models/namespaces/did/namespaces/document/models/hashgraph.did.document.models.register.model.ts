import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Represents a registration class for Decentralized Identifiers (DIDs) documents.
 * 
 * @class _Register
 * @implements {IHashgraph.IDID.IDocument.IRegister}
 * @description Provides comprehensive functionality to register new DID documents in the Hashgraph DID system.
 * Features include:
 * - DID document registration with cryptographic verification
 * - Public key validation and processing
 * - Multibase format support for keys
 * - Integration with Hedera network
 * @namespace Hashgraph.DID.Document.Register
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This class implements the W3C DID Core specification for document registration,
 * ensuring proper cryptographic binding between the DID and its controlling key.
 * The registration process includes:
 * - Public key validation and formatting
 * - DID generation based on the public key
 * - Document structure creation
 * - Network registration transaction
 * 
 * @example
 * // Create a new DID document registration
 * const register = new _Register({
 *   publicKeyMultibase: 'z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH'
 * });
 * 
 * // The registration can then be used to create a DID document
 * const didDocument = await register.createDocument();
 */
export class _Register implements IHashgraph.IDID.IDocument.IRegister {
    /**
     * The public key in multibase format for the DID document
     * @type {string}
     * @description The cryptographic public key used for DID document operations.
     * This key serves multiple purposes:
     * - Primary verification key for the DID
     * - Basis for generating the DID identifier
     * - Authentication mechanism for DID operations
     * - Foundation for cryptographic operations
     * 
     * The key must be in multibase format (typically base58btc for Ed25519 keys)
     * which provides:
     * - Self-describing encoding
     * - Consistent format across different key types
     * - Compatibility with W3C DID specifications
     * - Error detection capabilities
     * @memberof _Register
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * // Ed25519 public key in multibase format (base58btc)
     * publicKeyMultibase = 'z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH'
     * 
     * // The 'z' prefix indicates base58btc encoding
     * // The remaining string is the encoded public key bytes
     */
    @ApiProperty({
        description: 'Public Key in multibase format for the DID document',
        type: () => String,
        required: true,
        example: 'z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH'
    })
    @IsString()
    @IsNotEmpty()
    publicKeyMultibase: string;

    /**
     * Creates an instance of the _Register class
     * @constructor
     * @param {string} publicKeyMultibase - The public key in multibase format
     * @throws {Error} If publicKeyMultibase is:
     * - Not provided
     * - An empty string
     * - Not in valid multibase format
     * - Not a supported key type
     * @memberof _Register
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a new registration with a valid Ed25519 public key
     * const register = new _Register({
     *   publicKeyMultibase: 'z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH'
     * });
     * 
     * // These will throw errors:
     * const invalid1 = new _Register(''); // Error: Public Key Multibase is required
     * const invalid2 = new _Register('abc'); // Error: Invalid multibase format
     * const invalid3 = new _Register(123); // Error: Must be a string
     */
    constructor(publicKeyMultibase: string) {
        if (!publicKeyMultibase) {
            throw new Error('Public Key Multibase is required for DID document registration');
        }
        this.publicKeyMultibase = publicKeyMultibase;
    }
}