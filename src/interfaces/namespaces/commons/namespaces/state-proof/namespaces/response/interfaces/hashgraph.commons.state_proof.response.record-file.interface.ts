/**
 * Record File Interface
 * @export
 * @interface _IRecordFile
 * @namespace IHashgraph.ICommons.IStateProof.IResponse._IRecordFile
 * @description Provides detailed information about a compact record file in a state proof response,
 * including hashes, block number and record stream data. This interface represents the core
 * data structure for tracking and verifying state changes in the network.
 * @category Hashgraph
 * @subcategory StateProof
 * @since 2.0.0
 * @public
 * @remarks
 * Record files are fundamental to maintaining the integrity of the network state.
 * They contain cryptographic proofs and transaction data that enable verification
 * of state transitions and ensure the consistency of the network's state.
 * @see IHashgraph.ICommons.IStateProof.IResponse._ICompact
 * @example
 * ```typescript
 * const recordFile: _IRecordFile = {
 *   head: "0.0.3-2023-04-15T14:30:00Z",
 *   start_running_hash_object: "0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
 *   end_running_hash_object: "9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k",
 *   hashes_before: ["hash1", "hash2"],
 *   hashes_after: ["hash3", "hash4"],
 *   record_stream_object: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p",
 *   block_number: "123456"
 * };
 * ```
 */
export interface _IRecordFile {
    /**
     * The head of the record file
     * @property {string} head
     * @memberof _IRecordFile
     * @type {string}
     * @description A string representing the head of the record file, containing node ID and timestamp.
     * This field uniquely identifies the record file in the network's history.
     * @required
     * @since 2.0.0
     * @throws {Error} If head format is invalid
     * @remarks
     * - Must follow format: nodeId-timestamp
     * - Timestamp must be in ISO 8601 format
     * - Used for record file identification
     * - Critical for temporal ordering
     * @example "0.0.3-2023-04-15T14:30:00Z"
     */
    head: string

    /**
     * The start running hash object
     * @property {string} start_running_hash_object
     * @memberof _IRecordFile
     * @type {string}
     * @description A string representing the start running hash object for the record file.
     * This hash links to the previous state and ensures continuity of the chain.
     * @required
     * @since 2.0.0
     * @throws {Error} If hash format is invalid
     * @remarks
     * - Must be a valid cryptographic hash
     * - Links to previous state
     * - Used for chain continuity verification
     * - Critical for state integrity
     * @example "0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p"
     */
    start_running_hash_object: string

    /**
     * The end running hash object
     * @property {string} end_running_hash_object
     * @memberof _IRecordFile
     * @type {string}
     * @description A string representing the end running hash object for the record file.
     * This hash captures the final state after all transactions in this record.
     * @required
     * @since 2.0.0
     * @throws {Error} If hash format is invalid
     * @remarks
     * - Must be a valid cryptographic hash
     * - Represents final state
     * - Used for state verification
     * - Links to next record file
     * @example "9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k"
     */
    end_running_hash_object: string

    /**
     * The hashes before the current record
     * @property {Array<string>} hashes_before
     * @memberof _IRecordFile
     * @type {Array<string>}
     * @description An array of strings representing the cryptographic hashes before the current record.
     * These hashes provide proof of the state chain leading up to this record.
     * @required
     * @since 2.0.0
     * @throws {Error} If any hash is invalid
     * @remarks
     * - Each hash must be cryptographically valid
     * - Order is significant
     * - Used for chain verification
     * - Enables state reconstruction
     * @example ["hash1", "hash2", "hash3"]
     */
    hashes_before: Array<string>

    /**
     * The hashes after the current record
     * @property {Array<string>} hashes_after
     * @memberof _IRecordFile
     * @type {Array<string>}
     * @description An array of strings representing the cryptographic hashes after the current record.
     * These hashes provide proof of state changes resulting from this record.
     * @required
     * @since 2.0.0
     * @throws {Error} If any hash is invalid
     * @remarks
     * - Each hash must be cryptographically valid
     * - Order is significant
     * - Used for state transition verification
     * - Enables forward chain validation
     * @example ["hash4", "hash5", "hash6"]
     */
    hashes_after: Array<string>

    /**
     * The record stream object
     * @property {string} record_stream_object
     * @memberof _IRecordFile
     * @type {string}
     * @description A string representing the record stream object containing transaction data.
     * Contains the actual transaction records and their effects on the network state.
     * @required
     * @since 2.0.0
     * @throws {Error} If stream object is invalid
     * @remarks
     * - Contains transaction details
     * - Must be properly formatted
     * - Used for transaction verification
     * - Critical for state reconstruction
     * @example "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p"
     */
    record_stream_object: string

    /**
     * The block number
     * @property {string} block_number
     * @memberof _IRecordFile
     * @type {string}
     * @description A string representing the block number in the chain.
     * Identifies the position of this record in the blockchain sequence.
     * @required
     * @since 2.0.0
     * @throws {Error} If block number is invalid
     * @remarks
     * - Must be a valid block number
     * - Used for chronological ordering
     * - Critical for chain traversal
     * - Enables efficient state lookup
     * @example "123456"
     */
    block_number: string
}