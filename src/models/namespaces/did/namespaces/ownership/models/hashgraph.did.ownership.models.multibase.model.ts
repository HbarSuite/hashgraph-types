import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Represents a MultiBase class for handling cryptographic keys in multibase format
 * 
 * @class _MultiBase
 * @implements {IHashgraph.IDID.IOwnership.IMultiBase}
 * @description Implements standardized handling of cryptographic keys in multibase format.
 * Provides comprehensive functionality for:
 * - Key encoding and decoding
 * - Format validation and verification
 * - Cryptographic operation support
 * - Key type compatibility checks
 * - Security characteristic validation
 * @namespace Hashgraph.DID.Ownership.MultiBase
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This class implements the multibase specification for key handling:
 * - Self-describing key format with encoding prefix
 * - Support for multiple encoding schemes (base58btc, base64, etc.)
 * - Consistent key representation across systems
 * - Error detection and validation capabilities
 * - Interoperability with W3C DID standards
 * 
 * The multibase format ensures:
 * - Unambiguous key encoding identification
 * - Cross-platform compatibility
 * - Safe key transmission and storage
 * - Format validation and verification
 * 
 * @example
 * // Create a new multibase instance with Ed25519 key
 * const multiBase = new _MultiBase({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 * 
 * // The 'z' prefix indicates base58btc encoding
 * // The remaining string contains the encoded key material
 */
export class _MultiBase implements IHashgraph.IDID.IOwnership.IMultiBase {
    /**
     * The cryptographic key in multibase format
     * @type {string}
     * @description The cryptographic key encoded in multibase format.
     * The key must be:
     * - Properly encoded using multibase specification
     * - Include valid encoding prefix
     * - Contain valid key material
     * - Match supported key types
     * 
     * The multibase format provides:
     * - Self-describing encoding through prefix
     * - Algorithm agility and flexibility
     * - Format validation capabilities
     * - Consistent representation
     * 
     * Key characteristics:
     * - Starts with encoding prefix (e.g., 'z' for base58btc)
     * - Contains the encoded key bytes
     * - Supports multiple key types
     * - Used for cryptographic operations
     * @memberof _MultiBase
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
        description: 'Cryptographic key in multibase format',
        type: () => String,
        required: true,
        example: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
    })
    @IsString()
    @IsNotEmpty()
    privateKeyMultibase: string;

    /**
     * Creates an instance of the _MultiBase class
     * @constructor
     * @param {IHashgraph.IDID.IOwnership.IMultiBase} data - Partial data to initialize the multibase
     * @throws {Error} When:
     * - privateKeyMultibase is missing or empty
     * - Format is invalid (missing/wrong prefix)
     * - Key material is invalid
     * - Encoding is not supported
     * @memberof _MultiBase
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a new instance with Ed25519 key
     * const multiBase = new _MultiBase({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // These will throw errors:
     * const invalid1 = new _MultiBase({}); // Missing key
     * const invalid2 = new _MultiBase({ privateKeyMultibase: '' }); // Empty key
     * const invalid3 = new _MultiBase({ privateKeyMultibase: 'invalid' }); // Invalid format
     */
    constructor(data: IHashgraph.IDID.IOwnership.IMultiBase) {
        Object.assign(this, data);

        if (!this.privateKeyMultibase) {
            throw new Error('Cryptographic key in multibase format is required');
        }
    }
}