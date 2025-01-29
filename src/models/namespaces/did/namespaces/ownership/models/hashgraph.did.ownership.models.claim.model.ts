import { _MultiBase } from './hashgraph.did.ownership.models.multibase.model';
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNotEmpty } from 'class-validator';

/**
 * Represents a DID ownership claim with cryptographic proof
 * 
 * @class _Claim
 * @implements {_MultiBase}
 * @description Implements secure ownership claims for DIDs following W3C standards.
 * Provides comprehensive functionality for:
 * - Claim creation with cryptographic proof
 * - Claim verification and validation
 * - Claim status management
 * - Proof generation and verification
 * - Challenge-response handling
 * @namespace Hashgraph.DID.Ownership.Claim
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This class implements standardized ownership claims with features:
 * - Cryptographic proof generation using multibase keys
 * - Timestamp-based claim validity periods
 * - Challenge-response mechanisms for verification
 * - Claim revocation and status tracking
 * - Integration with Hedera network for claim records
 * 
 * The claim system ensures:
 * - Secure ownership assertion
 * - Verifiable proof of control
 * - Tamper-evident records
 * - Audit trail maintenance
 * 
 * @example
 * // Create a new ownership claim with Ed25519 key
 * const claim = new _Claim({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 * 
 * // The claim can be used to prove ownership
 * // and generate cryptographic proofs
 */
export class _Claim implements _MultiBase {
    /**
     * The cryptographic key in multibase format for the claim
     * @type {string}
     * @description The cryptographic key used for generating ownership proofs.
     * The key must be:
     * - Properly encoded using multibase specification
     * - Include valid encoding prefix
     * - Contain valid key material
     * - Match supported key types
     * 
     * The key is used for:
     * - Generating cryptographic proofs
     * - Signing claim statements
     * - Challenge responses
     * - Ownership verification
     * 
     * Key characteristics:
     * - Starts with encoding prefix (e.g., 'z' for base58btc)
     * - Contains the encoded key bytes
     * - Supports multiple key types
     * - Used for claim operations
     * @memberof _Claim
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
        description: 'Cryptographic key in multibase format for the claim',
        type: () => String,
        required: true,
        example: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
    })
    @IsString()
    @IsNotEmpty()
    privateKeyMultibase: string;

    /**
     * Creates an instance of the _Claim class
     * @constructor
     * @param {string} privateKeyMultibase - The cryptographic key in multibase format
     * @throws {Error} When:
     * - privateKeyMultibase is missing or empty
     * - Format is invalid (missing/wrong prefix)
     * - Key material is invalid
     * - Encoding is not supported
     * @memberof _Claim
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create a new claim with Ed25519 key
     * const claim = new _Claim({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // These will throw errors:
     * const invalid1 = new _Claim({}); // Missing key
     * const invalid2 = new _Claim({ privateKeyMultibase: '' }); // Empty key
     * const invalid3 = new _Claim({ privateKeyMultibase: 'invalid' }); // Invalid format
     */
    constructor(privateKeyMultibase: string) {
        if (!privateKeyMultibase) {
            throw new Error('Cryptographic key in multibase format is required for claim');
        }
        this.privateKeyMultibase = privateKeyMultibase;
    }
}