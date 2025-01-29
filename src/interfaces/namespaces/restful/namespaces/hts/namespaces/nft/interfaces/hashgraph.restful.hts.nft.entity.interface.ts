/**
 * @file hashgraph.restful.hts.nft.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the comprehensive structure for Non-Fungible Tokens (NFTs) in the Hashgraph Token Service (HTS) REST API.
 * This interface encapsulates all properties and metadata that define an NFT's state and ownership.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * NFT Entity Interface
 * @interface _IEntity
 * @description Represents a complete Non-Fungible Token (NFT) entity on the Hashgraph Token Service (HTS).
 * This interface defines all properties that characterize an NFT, including:
 * - Ownership and delegation information
 * - Temporal metadata (creation and modification timestamps)
 * - Token identification and serial numbers
 * - Associated metadata and state flags
 * @category Interfaces
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete NFT entity
 * const nft: _IEntity = {
 *   account_id: "0.0.123456",         // Current owner
 *   token_id: "0.0.789012",           // NFT collection ID
 *   serial_number: 1,                 // Unique identifier within collection
 *   metadata: "QmXwd8Y5...",         // IPFS CID or other metadata
 *   created_timestamp: "2023-01-01T12:00:00.000Z",
 *   spender: "0.0.345678",           // Approved spender
 *   deleted: false                    // NFT exists and is active
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Account ID
     * @type {string | null}
     * @description The Hashgraph account ID that currently owns this NFT.
     * Format: `shard.realm.num` (e.g., "0.0.123456")
     * A null value indicates the NFT is not currently owned or is in a transitional state.
     * @required false
     * @example "0.0.123456"
     * @memberof _IEntity
     * @since 2.0.0
     */
    account_id?: string | null;

    /**
     * Created Timestamp
     * @type {string | null}
     * @description The timestamp when this NFT was minted/created on the network.
     * Format: ISO 8601 UTC timestamp (e.g., "2023-01-01T12:00:00.000Z")
     * A null value indicates the creation time is unknown or not recorded.
     * @required false
     * @example "2023-01-01T12:00:00.000Z"
     * @memberof _IEntity
     * @since 2.0.0
     */
    created_timestamp?: string | null;

    /**
     * Delegating Spender
     * @type {string | null}
     * @description The account ID that has been delegated spending authority for this NFT.
     * This represents a temporary authorization to transfer the NFT, distinct from
     * the primary spender. Format: `shard.realm.num` (e.g., "0.0.234567")
     * @required false
     * @example "0.0.234567"
     * @memberof _IEntity
     * @since 2.0.0
     */
    delegating_spender?: string | null;

    /**
     * Deleted
     * @type {boolean}
     * @description Indicates whether this NFT has been deleted (burned) from the network.
     * Once an NFT is deleted, it cannot be recovered or reused.
     * - true: NFT has been permanently deleted/burned
     * - false: NFT exists and is active
     * @required true
     * @example false
     * @memberof _IEntity
     * @since 2.0.0
     */
    deleted?: boolean;

    /**
     * Metadata
     * @type {string}
     * @description The metadata associated with this NFT, typically stored as:
     * - IPFS CID (Content Identifier)
     * - URI pointing to metadata JSON
     * - Direct base64 encoded metadata
     * This field contains the immutable characteristics and attributes of the NFT.
     * @required false
     * @example "QmXwd8Y5..."
     * @memberof _IEntity
     * @since 2.0.0
     */
    metadata?: string;

    /**
     * Modified Timestamp
     * @type {string}
     * @description The timestamp when this NFT was last modified (e.g., transferred, metadata updated).
     * Format: ISO 8601 UTC timestamp (e.g., "2023-01-02T15:30:00.000Z")
     * Tracks the most recent state change of the NFT.
     * @required false
     * @example "2023-01-02T15:30:00.000Z"
     * @memberof _IEntity
     * @since 2.0.0
     */
    modified_timestamp?: string;

    /**
     * Serial Number
     * @type {number}
     * @description The unique serial number identifying this NFT within its token class.
     * This number is:
     * - Unique within the token_id
     * - Immutable once assigned
     * - Used to distinguish between NFTs in the same collection
     * @required false
     * @example 1
     * @memberof _IEntity
     * @since 2.0.0
     */
    serial_number?: number;

    /**
     * Spender
     * @type {string}
     * @description The account ID that has been granted spending authority for this NFT.
     * This represents the primary approved address that can transfer the NFT on behalf
     * of the owner. Format: `shard.realm.num` (e.g., "0.0.345678")
     * @required false
     * @example "0.0.345678"
     * @memberof _IEntity
     * @since 2.0.0
     */
    spender?: string;

    /**
     * Token ID
     * @type {string}
     * @description The Hashgraph token ID that this NFT belongs to (the collection ID).
     * Format: `shard.realm.num` (e.g., "0.0.789012")
     * Identifies the smart app or token class that defines this NFT's properties.
     * @required false
     * @example "0.0.789012"
     * @memberof _IEntity
     * @since 2.0.0
     */
    token_id?: string;
}