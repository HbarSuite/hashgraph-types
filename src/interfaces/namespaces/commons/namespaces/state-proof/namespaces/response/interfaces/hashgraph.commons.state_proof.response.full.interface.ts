/**
 * Full State Proof Response Interface
 * @export
 * @interface _IFull
 * @namespace IHashgraph.ICommons.IStateProof.IResponse._IFull
 * @description Provides detailed information about a state proof response, including address books,
 * record file, and signature files. This interface represents the complete state proof data
 * with maximum detail for thorough verification.
 * @category Hashgraph
 * @subcategory StateProof
 * @since 2.0.0
 * @public
 * @remarks
 * The full state proof response contains comprehensive information needed for complete
 * state verification. It is designed for scenarios requiring detailed analysis and
 * verification of network state, suitable for auditors and full nodes.
 * @see IHashgraph.ICommons.IStateProof.IResponse._ICompact
 * @example
 * ```typescript
 * const fullStateProof: _IFull = {
 *   address_books: ["0.0.3", "0.0.4", "0.0.5"],
 *   record_file: "0.0.3/2023-04-15T14:30:00Z.rcd",
 *   signature_files: {
 *     "0.0.3": "signature_data_1",
 *     "0.0.4": "signature_data_2"
 *   }
 * };
 * ```
 */
export interface _IFull {
    /**
     * The address books associated with the state proof
     * @property {Array<string>} address_books
     * @memberof _IFull
     * @type {Array<string>}
     * @description An array of strings representing the address books. Each string represents
     * a node address in the network, providing a complete map of network participants.
     * @required
     * @since 2.0.0
     * @throws {Error} If any address format is invalid
     * @remarks
     * - Each entry must be a valid node address
     * - Order of addresses is significant
     * - Used for network topology verification
     * - Critical for consensus validation
     * @example ["0.0.3", "0.0.4", "0.0.5"]
     */
    address_books: Array<string>

    /**
     * The record file associated with the state proof
     * @property {string} record_file
     * @memberof _IFull
     * @type {string}
     * @description A string representation of the record file. Contains the node ID and
     * timestamp of the record, providing a complete history of state changes.
     * @required
     * @since 2.0.0
     * @throws {Error} If record file format is invalid
     * @remarks
     * - Must follow the format: nodeId/timestamp.rcd
     * - Timestamp must be in ISO 8601 format
     * - Contains complete state transition history
     * - Essential for audit trail verification
     * @example "0.0.3/2023-04-15T14:30:00Z.rcd"
     */
    record_file: string

    /**
     * The signature files associated with the state proof
     * @property {Object} signature_files
     * @memberof _IFull
     * @type {{ [key: string]: string }}
     * @description An object containing key-value pairs of signature files. Keys are node IDs
     * and values are their corresponding signatures, providing cryptographic proof of consensus.
     * @required
     * @since 2.0.0
     * @throws {Error} If any signature is invalid or missing
     * @remarks
     * - Keys must be valid node IDs
     * - Values must be valid cryptographic signatures
     * - Used for consensus verification
     * - Critical for security validation
     * @example { "0.0.3": "signature_data_1", "0.0.4": "signature_data_2" }
     */
    signature_files: { [key: string]: string }
}