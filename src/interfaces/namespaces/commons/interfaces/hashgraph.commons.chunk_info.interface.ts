import { IHashgraph } from '../../../hashgraph.namespace'

/**
 * Chunk Information Interface
 * @export
 * @interface _IChunkInfo
 * @namespace IHashgraph.ICommons._IChunkInfo
 * @description Provides information about a chunk in a multi-chunk transaction, including its sequence number and total chunks.
 * This interface is essential for managing large transactions that need to be split into multiple parts
 * for efficient processing and transmission.
 * @property {IHashgraph.IRestful.ITransactions.ITransaction.IId} initial_transaction_id - The transaction ID of the first chunk
 * @property {number} number - The sequence number of this chunk
 * @property {number} total - The total number of chunks
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @public
 * @remarks
 * Chunk information is crucial for maintaining transaction integrity when dealing with
 * large transactions that exceed network size limits. The chunking mechanism ensures
 * reliable transmission and proper reassembly of transaction data.
 * @see IHashgraph.IRestful.ITransactions.ITransaction.IId
 * @example
 * ```typescript
 * const chunkInfo: _IChunkInfo = {
 *   initial_transaction_id: { transaction_id: "0.0.1@1234567890.000000000" },
 *   number: 2,
 *   total: 5
 * };
 * ```
 */
export interface _IChunkInfo {
    /**
     * The initial transaction ID for the multi-chunk transaction
     * @property {IHashgraph.IRestful.ITransactions.ITransaction.IId} initial_transaction_id
     * @memberof _IChunkInfo
     * @type {IHashgraph.IRestful.ITransactions.ITransaction.IId}
     * @description The transaction ID of the first chunk in a multi-chunk transaction.
     * Used to link all chunks together and ensure proper sequencing.
     * @optional
     * @since 2.0.0
     * @throws {Error} If transaction ID format is invalid
     * @remarks
     * - Must be a valid Hedera transaction ID format
     * - Used for chunk correlation and reassembly
     * - Remains constant across all chunks of the same transaction
     * @see IHashgraph.IRestful.ITransactions.ITransaction.IId
     * @example { "transaction_id": "0.0.1@1234567890.000000000" }
     */
    initial_transaction_id?: IHashgraph.IRestful.ITransactions.ITransaction.IId

    /**
     * The number of the current chunk
     * @property {number} number
     * @memberof _IChunkInfo
     * @type {number}
     * @description The sequence number of this chunk within the multi-chunk transaction.
     * Used to determine the order of chunks during reassembly.
     * @optional
     * @minimum 1
     * @since 2.0.0
     * @throws {Error} If number is less than 1 or greater than total
     * @remarks
     * - Must be a positive integer
     * - Must be less than or equal to total chunks
     * - Used for ordering during reassembly
     * @example 2
     */
    number?: number

    /**
     * The total number of chunks in the transaction
     * @property {number} total
     * @memberof _IChunkInfo
     * @type {number}
     * @description The total number of chunks that make up the complete transaction.
     * Used to verify that all chunks have been received.
     * @optional
     * @minimum 1
     * @since 2.0.0
     * @throws {Error} If total is less than 1
     * @remarks
     * - Must be a positive integer
     * - Represents the complete set of chunks
     * - Used for completion verification
     * @example 5
     */
    total?: number

    /**
     * The nonce for the current chunk
     * @property {number} nonce
     * @memberof _IChunkInfo
     * @type {number}
     * @description The nonce for this chunk within the multi-chunk transaction.
     * Used for uniqueness and security purposes.
     * @optional
     * @since 2.0.0
     * @throws {Error} If nonce is negative
     * @remarks
     * - Must be a non-negative integer
     * - Used for replay protection
     * - Should be unique per chunk
     * @example 3
     */
    nonce?: number

    /**
     * Whether the current chunk is scheduled
     * @property {boolean} scheduled
     * @memberof _IChunkInfo
     * @type {boolean}
     * @description Whether this chunk is scheduled within the multi-chunk transaction.
     * Indicates if the chunk is part of a scheduled transaction.
     * @optional
     * @since 2.0.0
     * @remarks
     * - Affects transaction processing timing
     * - Used for coordinating scheduled operations
     * - Must be consistent across all chunks
     * @example true
     */
    scheduled?: boolean
}