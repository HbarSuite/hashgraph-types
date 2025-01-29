import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Claim } from './models/hashgraph.did.ownership.models.claim.model';
import { _MultiBase } from './models/hashgraph.did.ownership.models.multibase.model';
import { _Register } from './models/hashgraph.did.ownership.models.register.model';

/**
 * Namespace containing DID Ownership related interfaces and types
 * 
 * @module Hashgraph
 * @namespace _Ownership
 * @description Provides comprehensive functionality for managing DID ownership in the Hashgraph network.
 * Implements secure and standardized ownership management with features including:
 * - Multibase key encoding/decoding for cryptographic operations
 * - Ownership claims with cryptographic proof
 * - Ownership registration and transfer
 * - Ownership verification and validation
 * - Key management and rotation
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * 
 * This namespace implements W3C DID Core specification for ownership management,
 * providing a comprehensive set of tools for:
 * - Secure key management with multibase encoding support
 * - Cryptographic proof generation and verification
 * - Ownership claim creation and validation
 * - Registration and transfer of DID ownership
 * - Integration with Hedera network for ownership records
 * 
 * @example
 * // Import and use ownership namespace
 * import { _Ownership } from './hashgraph.did.ownership.namespace';
 * 
 * // Create new multibase key for ownership operations
 * const key = new _Ownership.MultiBase({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 * 
 * // Make ownership claim with cryptographic proof
 * const claim = new _Ownership.Claim({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 * 
 * // Register DID ownership
 * const registration = new _Ownership.Register({
 *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
 * });
 */
export namespace _Ownership {
    /**
     * Class for handling multibase-encoded cryptographic keys
     * 
     * @class MultiBase
     * @extends {_MultiBase}
     * @description Provides comprehensive functionality for working with multibase-encoded keys.
     * Features include:
     * - Key validation and format verification
     * - Format conversion and encoding
     * - Cryptographic operation support
     * - Key type compatibility checks
     * - Security characteristic validation
     * @memberof _Ownership
     * @public
     * @since 2.0.0
     * 
     * The MultiBase class implements standardized key handling following multibase specification:
     * - Self-describing key format with encoding prefix
     * - Support for multiple encoding schemes
     * - Consistent key representation
     * - Error detection and validation
     * - Interoperability with W3C standards
     * 
     * @example
     * // Create a new multibase key instance
     * const key = new MultiBase({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // The 'z' prefix indicates base58btc encoding
     * // The remaining string contains the encoded key material
     */
    @ApiSchema({ name: 'Hashgraph.Did.Ownership.MultiBase' })
    export class MultiBase extends _MultiBase {}

    /**
     * Class for managing DID ownership claims
     * 
     * @class Claim
     * @extends {_Claim}
     * @description Provides comprehensive functionality for DID ownership claims.
     * Features include:
     * - Claim creation with cryptographic proof
     * - Claim verification and validation
     * - Claim status management
     * - Proof generation and verification
     * - Challenge-response support
     * @memberof _Ownership
     * @public
     * @since 2.0.0
     * 
     * The Claim class implements secure ownership claims following W3C standards:
     * - Cryptographic proof generation
     * - Timestamp-based claim validity
     * - Challenge-response mechanisms
     * - Claim revocation support
     * - Integration with Hedera network
     * 
     * @example
     * // Create a new ownership claim
     * const claim = new Claim({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // The claim can be used to prove ownership
     * // and generate cryptographic proofs
     */
    @ApiSchema({ name: 'Hashgraph.Did.Ownership.Claim' })
    export class Claim extends _Claim {}

    /**
     * Class for handling DID ownership registration
     * 
     * @class Register
     * @extends {_Register}
     * @description Provides comprehensive functionality for DID ownership registration.
     * Features include:
     * - Initial ownership registration
     * - Ownership transfer and updates
     * - Registration status tracking
     * - Historical record maintenance
     * - Integration with Hedera services
     * @memberof _Ownership
     * @public
     * @since 2.0.0
     * 
     * The Register class implements secure ownership registration following W3C standards:
     * - Cryptographic proof of ownership
     * - Secure transfer mechanisms
     * - Status verification
     * - Audit trail maintenance
     * - Network synchronization
     * 
     * @example
     * // Create a new ownership registration
     * const register = new Register({
     *   privateKeyMultibase: 'z6LShs9GGnqk85isEBzzshkuVWrVKsRp24GnDuHk8QWkARMW'
     * });
     * 
     * // The registration can be used to establish
     * // and transfer DID ownership
     */
    @ApiSchema({ name: 'Hashgraph.Did.Ownership.Register' })
    export class Register extends _Register {}
}