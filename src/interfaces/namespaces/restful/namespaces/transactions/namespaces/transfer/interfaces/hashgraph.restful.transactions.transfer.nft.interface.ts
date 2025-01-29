/**
 * @file hashgraph.restful.transactions.transfer.nft.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for NFT transfer operations in the Hashgraph Network REST API.
 * This interface represents the transfer of non-fungible tokens between accounts.
 * @category Interfaces
 * @subcategory Transfers
 * @since 2.0.0
 */

/**
 * NFT Transfer Interface
 * @interface _INft
 * @description Represents a non-fungible token transfer operation in the Hashgraph network.
 * This interface captures all essential information about an NFT transfer, including:
 * - Source and destination accounts
 * - NFT identification (token ID and serial number)
 * - Transfer type (direct or approval)
 * Used for managing and tracking NFT ownership changes.
 * @category Interfaces
 * @subcategory Transfers
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a direct NFT transfer
 * const nftTransfer: _INft = {
 *   is_approval: false,
 *   sender_account_id: "0.0.1234",
 *   receiver_account_id: "0.0.5678",
 *   token_id: "0.0.9012",
 *   serial_number: 1
 * };
 * 
 * // Example of an NFT approval
 * const nftApproval: _INft = {
 *   is_approval: true,
 *   sender_account_id: "0.0.1234",    // Owner
 *   receiver_account_id: "0.0.5678",   // Approved operator
 *   token_id: "0.0.9012",
 *   serial_number: 1
 * };
 * 
 * // Example of validating an NFT transfer
 * const validateNftTransfer = (transfer: _INft): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   return (
 *     accountPattern.test(transfer.sender_account_id ?? "") &&
 *     accountPattern.test(transfer.receiver_account_id ?? "") &&
 *     accountPattern.test(transfer.token_id ?? "") &&
 *     transfer.serial_number > 0
 *   );
 * };
 * ```
 */
export interface _INft {
    /**
     * Approval Flag
     * @type {boolean}
     * @description Indicates whether this transfer represents an approval operation.
     * Properties:
     * - Required field
     * - true: represents an NFT approval grant
     * - false: represents a direct NFT transfer
     * Used for distinguishing between direct transfers and approval operations.
     * @required true
     * @memberof _INft
     * @since 2.0.0
     * @example true  // Indicates an approval operation
     */
    is_approval: boolean;

    /**
     * Receiver Account ID
     * @type {string}
     * @description The Hedera account ID that will receive the NFT or approval.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (may be undefined for special operations)
     * - Must be a valid Hedera account ID when specified
     * - Must be different from sender_account_id
     * - Must be authorized to receive NFTs
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _INft
     * @since 2.0.0
     * @example "0.0.5678"
     */
    receiver_account_id?: string;

    /**
     * Sender Account ID
     * @type {string}
     * @description The Hedera account ID that owns or is authorized to transfer the NFT.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (may be undefined for special operations)
     * - Must be a valid Hedera account ID when specified
     * - Must own or have approval for the NFT
     * - Must be different from receiver_account_id
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _INft
     * @since 2.0.0
     * @example "0.0.1234"
     */
    sender_account_id?: string;

    /**
     * NFT Serial Number
     * @type {number}
     * @description The unique identifier of the specific NFT within its collection.
     * Properties:
     * - Required field
     * - Must be a positive integer
     * - Must be unique within the token_id collection
     * - Used to identify the specific NFT being transferred
     * @required true
     * @minimum 1
     * @memberof _INft
     * @since 2.0.0
     * @example 1
     */
    serial_number: number;

    /**
     * Token Collection ID
     * @type {string}
     * @description The Hedera token ID of the NFT collection.
     * Format: `shard.realm.num` (e.g., "0.0.9012")
     * Properties:
     * - Required field
     * - Must be a valid Hedera token ID
     * - Must represent an NFT collection
     * - Used to identify the NFT's parent collection
     * @required true
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _INft
     * @since 2.0.0
     * @example "0.0.9012"
     */
    token_id?: string
}