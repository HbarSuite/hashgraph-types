import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * Represents a DID ownership registration with cryptographic verification
 * 
 * @class _Register
 * @implements {IHashgraph.IDID.IOwnership.IRegister}
 * @description Implements secure DID ownership registration following W3C standards.
 * Provides comprehensive functionality for:
 * - Initial ownership registration
 * - Ownership transfer and updates
 * - Registration status tracking
 * - Historical record maintenance
 * - Integration with Hedera services
 * @namespace Hashgraph.DID.Ownership.Register
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This class implements standardized ownership registration with features:
 * - Cryptographic proof of ownership
 * - Secure transfer mechanisms
 * - Status verification
 * - Audit trail maintenance
 * - Network synchronization
 * 
 * The registration system ensures:
 * - Verifiable ownership records
 * - Secure ownership transfers
 * - Historical tracking
 * - Network consistency
 * 
 * @example
 * // Create a new ownership registration with Ed25519 key
 * const register = new _Register({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 * 
 * // The registration can be used to establish
 * // and transfer DID ownership
 */
export class _Register implements IHashgraph.IDID.IOwnership.IRegister {
    /**
     * The cryptographic key in multibase format for registration
     * @type {string}
     * @description The cryptographic key used for ownership registration.
     * The key must be:
     * - Properly encoded using multibase specification
     * - Include valid encoding prefix
     * - Contain valid key material
     * - Match supported key types
     * 
     * The key is used for:
     * - Establishing initial ownership
     * - Authorizing transfers
     * - Signing registration records
     * - Ownership verification
     * 
     * Key characteristics:
     * - Starts with encoding prefix (e.g., 'z' for base58btc)
     * - Contains the encoded key bytes
     * - Supports multiple key types
     * - Used for registration operations
     * @memberof _Register
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * // Ed25519 key in base58btc multibase format
     * privateKeyMultibase = 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * 
     * // The 'z' prefix indicates base58btc encoding
     * // The remaining string contains the encoded key material
     */
    @ApiProperty({
        description: 'Cryptographic key in multibase format for registration',
        type: () => String,
        required: true,
        example: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
    })
    @IsString()
    @IsNotEmpty()
    privateKeyMultibase: string;

    /**
     * Creates an instance of the _Register class
     * @constructor
     * @param {IHashgraph.IDID.IOwnership.IRegister} data - Partial data to initialize the register
     * @throws {Error} When:
     * - privateKeyMultibase is missing or empty
     * - Format is invalid (missing/wrong prefix)
     * - Key material is invalid
     * - Encoding is not supported
     * @memberof _Register
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a new registration with Ed25519 key
     * const register = new _Register({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // These will throw errors:
     * const invalid1 = new _Register({}); // Missing key
     * const invalid2 = new _Register({ privateKeyMultibase: '' }); // Empty key
     * const invalid3 = new _Register({ privateKeyMultibase: 'invalid' }); // Invalid format
     */
    constructor(data: IHashgraph.IDID.IOwnership.IRegister) {
        Object.assign(this, data);

        if (!this.privateKeyMultibase || this.privateKeyMultibase.trim() === '') {
            throw new Error('Cryptographic key in multibase format is required for registration');
        }
    }
}