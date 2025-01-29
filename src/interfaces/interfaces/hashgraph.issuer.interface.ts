/**
 * Issuer Interface
 * @export
 * @interface _IIssuer
 * @namespace IHashgraph._IIssuer
 * @description Represents the configuration for an issuer in the Hashgraph network.
 * This interface defines the properties required for an entity that can issue
 * verifiable credentials or perform other issuer-related operations.
 * @property {string} did - The Decentralized Identifier (DID) of the issuer
 * @property {string} key - The cryptographic key used for signing/verification
 * @property {string} fileKey - The key used for file operations
 * @property {string} [host] - Optional host information
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Issuers are critical components in the DID ecosystem, responsible for creating
 * and managing verifiable credentials. Their DIDs must be properly registered
 * and maintained on the network.
 * @see IHashgraph._ITransactionIdentity
 * @example
 * ```typescript
 * const issuer: _IIssuer = {
 *   did: "did:hedera:testnet:z6MkrCD1Qs5qxGkTzJWLjDiXK5WYPM8yHW5zp3RGJX3RDJke",
 *   key: "302a300506032b6570032100e2dbf0bb...",
 *   fileKey: "0.0.123456",
 *   host: "https://example.com"
 * };
 * ```
 */
export interface _IIssuer {
    /**
     * The Decentralized Identifier (DID) of the issuer
     * @property {string} did
     * @memberof _IIssuer
     * @type {string}
     * @description Unique identifier for the issuer in the form of a DID.
     * Must follow the Hedera DID method specification format.
     * @required
     * @since 2.0.0
     * @throws {Error} If DID format is invalid or not properly registered
     * @remarks
     * - Must be a valid Hedera DID format
     * - Should be registered on the network
     * - Used for credential issuance and verification
     * @example "did:hedera:testnet:z6MkrCD1Qs5qxGkTzJWLjDiXK5WYPM8yHW5zp3RGJX3RDJke"
     */
    did: string

    /**
     * The key associated with the issuer
     * @property {string} key
     * @memberof _IIssuer
     * @type {string}
     * @description Cryptographic key used for signing or verifying operations related to the issuer.
     * Must be a valid cryptographic key in the specified format.
     * @required
     * @since 2.0.0
     * @throws {Error} If key format is invalid or corrupted
     * @remarks
     * - Used for digital signatures
     * - Must be securely stored
     * - Typically ED25519 or similar format
     * @example "302a300506032b6570032100e2dbf0bb..."
     */
    key: string

    /**
     * The file key associated with the issuer
     * @property {string} fileKey
     * @memberof _IIssuer
     * @type {string}
     * @description Key used for file-related operations or identification.
     * Represents a Hedera file ID or similar identifier.
     * @required
     * @since 2.0.0
     * @throws {Error} If file key format is invalid
     * @remarks
     * - Must be a valid Hedera file ID format
     * - Used for document storage and retrieval
     * - Associated with issuer's file operations
     * @example "0.0.123456"
     */
    fileKey: string

    /**
     * The host associated with the issuer
     * @property {string} host
     * @memberof _IIssuer
     * @type {string}
     * @description Optional host information for the issuer.
     * Typically a URL where the issuer's services can be accessed.
     * @optional
     * @since 2.0.0
     * @throws {Error} If host URL format is invalid
     * @remarks
     * - Must be a valid URL if provided
     * - Used for service endpoint resolution
     * - Should support HTTPS for security
     * @example "https://example.com"
     */
    host?: string
}