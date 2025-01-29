import { _IRestful } from '../../../../../hashgraph.restful.namespace'

/**
 * @file hashgraph.restful.hts.nft.transactions-response.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for individual NFT transaction records in the Hashgraph Token Service (HTS) REST API.
 * This interface represents detailed information about specific NFT transfer operations and their properties.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * NFT Transaction Response Interface
 * @interface _ITransactionsResponse
 * @description Represents a detailed record of an NFT transaction on the Hashgraph Token Service (HTS).
 * This interface captures all relevant information about an NFT transfer operation, including:
 * - Transaction timing and consensus details
 * - Participating accounts and their roles
 * - Transaction type and approval status
 * - Sequence and identification information
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete NFT transaction record
 * const transaction: _ITransactionsResponse = {
 *   consensus_timestamp: "1234567890.000000000",  // When consensus was reached
 *   transaction_id: "0.0.1234@1234567890.000",    // Unique transaction identifier
 *   sender_account_id: "0.0.1234",                // Account initiating transfer
 *   receiver_account_id: "0.0.5678",              // Account receiving NFT
 *   type: "NFT_TRANSFER",                         // Type of operation
 *   is_approval: false,                           // Not an approval operation
 *   nonce: 1                                      // Transaction sequence number
 * };
 * ```
 */
export interface _ITransactionsResponse {
    /**
     * Consensus Timestamp
     * @type {string}
     * @description The precise timestamp when the transaction reached consensus on the network.
     * Format: seconds.nanoseconds (e.g., "1234567890.000000000")
     * This timestamp is used for:
     * - Determining transaction finality
     * - Ordering transactions in a sequence
     * - Historical record keeping
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    consensus_timestamp: string;

    /**
     * Is Approval
     * @type {boolean}
     * @description Indicates whether this transaction represents an approval operation.
     * - true: Transaction is granting/revoking approval for NFT operations
     * - false: Transaction is a direct transfer or other operation
     * This flag helps distinguish between direct transfers and approval management.
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example false
     */
    is_approval: boolean;

    /**
     * Nonce
     * @type {number}
     * @description A sequential number used to maintain transaction order and prevent replay attacks.
     * The nonce ensures:
     * - Transaction uniqueness
     * - Proper sequencing
     * - Protection against replay attacks
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example 42
     */
    nonce: number;

    /**
     * Receiver Account ID
     * @type {string}
     * @description The Hashgraph account ID of the NFT recipient.
     * Format: `shard.realm.num` (e.g., "0.0.12345")
     * Identifies the account that:
     * - Receives the NFT in a transfer
     * - Gains rights in an approval
     * - Is targeted by the operation
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example "0.0.12345"
     */
    receiver_account_id: string;

    /**
     * Sender Account ID
     * @type {string | null}
     * @description The Hashgraph account ID of the NFT sender.
     * Format: `shard.realm.num` (e.g., "0.0.67890")
     * - For transfers: The current owner initiating the transfer
     * - For minting: Null, as the NFT is being created
     * - For approvals: The account granting approval
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example "0.0.67890"
     */
    sender_account_id: string;

    /**
     * Transaction ID
     * @type {string}
     * @description Unique identifier for the transaction on the Hashgraph network.
     * Format: `account@seconds.nanos` (e.g., "0.0.12345@1234567890.000000000")
     * This ID:
     * - Is globally unique
     * - Contains the initiating account and timestamp
     * - Can be used to look up transaction status and results
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example "0.0.12345@1234567890.000000000"
     */
    transaction_id: string;

    /**
     * Transaction Type
     * @type {_IRestful.ITransactions.ITransaction.TypeEnum}
     * @description Enumerated type indicating the specific kind of NFT operation.
     * Common types include:
     * - NFT_TRANSFER: Direct transfer between accounts
     * - NFT_MINT: Creation of new NFT
     * - NFT_BURN: Permanent removal of NFT
     * - NFT_APPROVE: Granting transfer rights
     * @required true
     * @memberof _ITransactionsResponse
     * @since 2.0.0
     * @example "NFT_TRANSFER"
     */
    type: _IRestful.ITransactions.ITransaction.TypeEnum;
}