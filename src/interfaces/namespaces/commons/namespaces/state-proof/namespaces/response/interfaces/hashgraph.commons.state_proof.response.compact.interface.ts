import { _ICommons } from '../../../../../hashgraph.commons.namespace'
import { _IRecordFile } from './hashgraph.commons.state_proof.response.record-file.interface'

/**
 * State Proof Response Compact Interface
 * @export
 * @interface _ICompact
 * @namespace IHashgraph.ICommons.IStateProof.IResponse._ICompact
 * @description Represents the compact format of a state proof response in the Hashgraph network.
 * This interface provides an optimized structure for state proof data, balancing between
 * completeness and efficiency in network transmission.
 * @property {Array<string>} address_books - Array of address book entries in string format
 * @property {_IRecordFile} record_file - The record file containing transaction details
 * @property {Object} signature_files - Map of signature files with string keys and values
 * @property {number} version - Version number of the state proof format
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory StateProof
 * @public
 * @remarks
 * The compact format is designed for efficient network transmission while maintaining
 * all necessary information for state verification. It includes essential components
 * like address books, record files, and signatures in an optimized structure.
 * @see _IRecordFile
 * @see IHashgraph.ICommons.IStateProof.IResponse._IFull
 * @example
 * ```typescript
 * const stateProof: _ICompact = {
 *   address_books: ["address1", "address2"],
 *   record_file: recordFileObj,
 *   signature_files: { "sig1": "value1" },
 *   version: 1
 * };
 * ```
 */
export interface _ICompact {
    /**
     * Address Books array
     * @property {Array<string>} address_books
     * @memberof _ICompact
     * @type {Array<string>}
     * @description Array containing address book entries as strings.
     * Each entry represents a node address in the network's address book.
     * @required
     * @since 2.0.0
     * @throws {Error} If array contains invalid address formats
     * @remarks
     * - Each entry must be a valid node address
     * - Order of entries is significant
     * - Used for node identification and routing
     * - Critical for network topology verification
     * @example ["address1", "address2"]
     */
    address_books: Array<string>

    /**
     * Record File object
     * @property {_IRecordFile} record_file
     * @memberof _ICompact
     * @type {_IRecordFile}
     * @description Contains the record file information for the state proof.
     * Stores transaction records and their effects on network state.
     * @required
     * @since 2.0.0
     * @throws {Error} If record file is invalid or corrupted
     * @remarks
     * - Contains transaction details and metadata
     * - Essential for state verification
     * - Includes cryptographic proofs
     * - Must maintain data integrity
     * @see _IRecordFile
     */
    record_file: _IRecordFile

    /**
     * Signature Files mapping
     * @property {Object} signature_files
     * @memberof _ICompact
     * @type {{ [key: string]: string }}
     * @description Key-value pairs of signature files where both key and value are strings.
     * Maps file identifiers to their corresponding signature data.
     * @required
     * @since 2.0.0
     * @throws {Error} If signature format is invalid
     * @remarks
     * - Keys must be unique identifiers
     * - Values contain cryptographic signatures
     * - Used for authenticity verification
     * - Critical for security validation
     * @example { "sig1": "value1", "sig2": "value2" }
     */
    signature_files: { [key: string]: string }

    /**
     * Version number
     * @property {number} version
     * @memberof _ICompact
     * @type {number}
     * @description The version number of the state proof format.
     * Indicates the protocol version used for the state proof.
     * @required
     * @since 2.0.0
     * @throws {Error} If version is unsupported
     * @remarks
     * - Must be a positive integer
     * - Determines format compatibility
     * - Used for protocol versioning
     * - Affects parsing and validation rules
     * @example 1
     */
    version: number
}