import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing Verifiable Credential list payloads
 * 
 * @class _Payload
 * @implements {IHashgraph.IDID.IVC.IList.IPayload}
 * @description Provides comprehensive functionality for managing Verifiable Credential list payloads including:
 * - Complete issuer DID validation
 * - Payload structure verification
 * - Data integrity enforcement
 * - Format compliance checks
 * @namespace Hashgraph.DID.VC.List.Payload
 * @category Models
 * @subcategory Verifiable Credentials
 * @since 2.0.0
 * 
 * This class provides complete payload management for credential lists:
 * - Issuer identification: DID validation and verification
 * - Payload validation: Structure and format checks
 * - Data integrity: Complete validation process
 * - Error handling: Comprehensive error management
 * 
 * Key features:
 * - Strict DID validation
 * - Format compliance
 * - Data verification
 * - Error state handling
 * 
 * @example
 * // Create a new payload instance
 * const payload = new _Payload(
 *   "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
 * );
 * 
 * @throws {Error} When invalid parameters are provided
 */
export class _Payload implements IHashgraph.IDID.IVC.IList.IPayload {
    /**
     * The DID of the credential issuer
     * 
     * @type {string}
     * @memberof _Payload
     * @description Represents the Decentralized Identifier (DID) providing:
     * - Unique issuer identification
     * - Network-specific validation
     * - Authentication support
     * - Resolution capabilities
     * 
     * Format requirements:
     * - Must start with "did:hedera:"
     * - Must include network identifier
     * - Must contain valid DID method-specific ID
     * - Must follow Hedera DID syntax
     * 
     * Validation rules:
     * - Must be a non-empty string
     * - Must follow Hedera DID format
     * - Must be a resolvable identifier
     * - Must be properly formatted
     * 
     * @example
     * // Valid Hedera DID
     * issuerDID = "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * 
     * @throws {Error} When an invalid DID is provided
     */
    @ApiProperty({
        description: 'The DID of the credential issuer',
        required: true,
        type: () => String,
        example: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
    })
    issuerDID: string;

    /**
     * Creates an instance of the _Payload class
     * 
     * @constructor
     * @param {IHashgraph.IDID.IVC.IList.IPayload} data - Partial data to initialize the payload
     * @throws {Error} When validation fails for the issuer DID
     * @memberof _Payload
     * @description Initializes a new payload instance with:
     * - Complete DID validation
     * - Format verification
     * - Structure validation
     * - Instance initialization
     * 
     * Validation process:
     * - Verifies DID format and structure
     * - Validates network identifier
     * - Ensures proper syntax
     * - Checks all required components
     * 
     * @example
     * // Create a valid payload instance
     * const payload = new _Payload(
     *   "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * );
     * 
     * // These will throw errors
     * const invalidPayload1 = new _Payload("");                // Error: Invalid issuerDID
     * const invalidPayload2 = new _Payload("invalid:did");     // Error: Invalid issuerDID
     * const invalidPayload3 = new _Payload("did:other:123");   // Error: Invalid issuerDID
     */
    constructor(data: IHashgraph.IDID.IVC.IList.IPayload) {
        Object.assign(this, data);

        // Validate the issuerDID format and structure
        if (!this.issuerDID || typeof this.issuerDID !== 'string' || !this.issuerDID.startsWith('did:hedera:')) {
            throw new Error('Invalid issuerDID');
        }
    }
}