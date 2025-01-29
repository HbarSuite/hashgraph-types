import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.issuer.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for issuers in the Hashgraph Network.
 * This model represents the configuration and identity of an issuer, including:
 * - Decentralized identity (DID)
 * - Cryptographic credentials
 * - File system access
 * - Network connectivity
 * @category Models
 * @subcategory Identity
 * @since 2.0.0
 */

/**
 * Issuer Model
 * @class _Issuer
 * @implements {IHashgraph.IIssuer}
 * @description Represents an entity capable of issuing and managing assets.
 * This class provides:
 * - Identity management
 * - Cryptographic operations
 * - File system access
 * - Network configuration
 * Used for issuer authentication and authorization.
 * @category Models
 * @subcategory Identity
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic issuer
 * const basicIssuer = new _Issuer(
 *   "did:hedera:testnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5",
 *   "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a",
 *   "0.0.1234"
 * );
 * 
 * // Example of creating an issuer with host information
 * const hostedIssuer = new _Issuer(
 *   "did:hedera:mainnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5",
 *   "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a",
 *   "0.0.5678",
 *   "https://api.issuer.example.com"
 * );
 * 
 * // Example of validating issuer parameters
 * const validateIssuer = (issuer: _Issuer): boolean => {
 *   const didPattern = /^did:hedera:(testnet|mainnet):.+$/;
 *   const keyPattern = /^[0-9a-fA-F]+$/;
 *   const fileKeyPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   const urlPattern = /^https?:\/\/.+/;
 *   
 *   return (
 *     didPattern.test(issuer.did) &&
 *     keyPattern.test(issuer.key) &&
 *     fileKeyPattern.test(issuer.fileKey) &&
 *     (!issuer.host || urlPattern.test(issuer.host))
 *   );
 * };
 * 
 * // Example of formatting issuer information
 * const formatIssuer = (issuer: _Issuer): string => {
 *   const parts = [
 *     `DID: ${issuer.did}`,
 *     `Key: ${issuer.key.substring(0, 8)}...${issuer.key.substring(issuer.key.length - 8)}`,
 *     `File Key: ${issuer.fileKey}`
 *   ];
 *   
 *   if (issuer.host) {
 *     parts.push(`Host: ${issuer.host}`);
 *   }
 *   
 *   return parts.join('\n');
 * };
 * ```
 */
export class _Issuer implements IHashgraph.IIssuer {
    /**
     * Decentralized Identifier
     * @type {string}
     * @description The issuer's decentralized identifier (DID).
     * Format: `did:hedera:(testnet|mainnet):<method-specific-id>`
     * Properties:
     * - Required field
     * - Network-specific format
     * - Globally unique
     * - Resolvable identifier
     * - Used for authentication
     * @memberof _Issuer
     * @public
     * @since 2.0.0
     * @example "did:hedera:testnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5"
     */
    @ApiProperty({
        description: "Unique identifier for the issuer in the form of a DID",
        example: "did:hedera:testnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5"
    })
    did: string;

    /**
     * Cryptographic Key
     * @type {string}
     * @description The issuer's cryptographic key for operations.
     * Format: Hexadecimal string
     * Properties:
     * - Required field
     * - Used for signing
     * - Enables verification
     * - Secures operations
     * - Maintains integrity
     * @memberof _Issuer
     * @public
     * @since 2.0.0
     * @example "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a"
     */
    @ApiProperty({
        description: "Cryptographic key used for signing or verifying operations related to the issuer",
        example: "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a"
    })
    key: string;

    /**
     * File System Key
     * @type {string}
     * @description The issuer's key for file operations.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Required field
     * - Must be valid Hedera file ID
     * - Enables file access
     * - Manages permissions
     * - Tracks operations
     * @memberof _Issuer
     * @public
     * @since 2.0.0
     * @example "0.0.1234"
     */
    @ApiProperty({
        description: "Key used for file-related operations or identification",
        example: "0.0.1234"
    })
    fileKey: string;

    /**
     * Host Information
     * @type {string}
     * @description The issuer's network endpoint.
     * Format: URL (e.g., "https://api.issuer.example.com")
     * Properties:
     * - Optional field
     * - Must be valid URL
     * - Enables connectivity
     * - Supports API access
     * - Configures routing
     * @memberof _Issuer
     * @public
     * @since 2.0.0
     * @example "https://api.issuer.example.com"
     */
    @ApiProperty({
        description: "Optional host information for the issuer",
        example: "https://api.issuer.example.com",
        required: false
    })
    host?: string;

    /**
     * Creates a new issuer instance.
     * @constructor
     * @param {string} did - Decentralized identifier in Hedera DID format
     * @param {string} key - Cryptographic key in hexadecimal format
     * @param {string} fileKey - File system key in shard.realm.num format
     * @param {string} [host] - Optional network endpoint URL
     * @throws {Error} If did is not a valid Hedera DID string
     * @throws {Error} If key is not a valid hexadecimal string
     * @throws {Error} If fileKey is not a valid Hedera file ID
     * @throws {Error} If host is provided but not a valid URL string
     * @memberof _Issuer
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic issuer
     * const basicIssuer = new _Issuer(
     *   "did:hedera:testnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5",
     *   "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a",
     *   "0.0.1234"
     * );
     * 
     * // Create an issuer with host information
     * const hostedIssuer = new _Issuer(
     *   "did:hedera:mainnet:z6MkrJVnaZkeFzdQyMZu1cgjg7k1pZZ6pvBQ7XJPt4swbTQ5",
     *   "302a300506032b6570032100a6da6e6fdddf9c4a9b8a8f0cf957b249e93e13378077355e30be29a8c98314a",
     *   "0.0.5678",
     *   "https://api.issuer.example.com"
     * );
     * ```
     */
    constructor(did: string, key: string, fileKey: string, host?: string) {
        // Validate DID parameter
        if (!did || typeof did !== 'string') {
            throw new Error('Invalid DID');
        }
        this.did = did;

        // Validate key parameter
        if (!key || typeof key !== 'string') {
            throw new Error('Invalid key');
        }
        this.key = key;

        // Validate fileKey parameter
        if (!fileKey || typeof fileKey !== 'string') {
            throw new Error('Invalid file key');
        }
        this.fileKey = fileKey;

        // Validate optional host parameter if provided
        if (host !== undefined && typeof host !== 'string') {
            throw new Error('Invalid host');
        }
        this.host = host;
    }
}