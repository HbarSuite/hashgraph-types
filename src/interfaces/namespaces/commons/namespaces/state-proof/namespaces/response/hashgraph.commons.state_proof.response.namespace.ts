import { _ICompact } from './interfaces/hashgraph.commons.state_proof.response.compact.interface';
import { _IFull } from './interfaces/hashgraph.commons.state_proof.response.full.interface';
import { _IRecordFile } from './interfaces/hashgraph.commons.state_proof.response.record-file.interface';

/**
 * State Proof Response Namespace
 * @namespace _IResponse
 * @description Namespace containing types related to state proof responses in Hashgraph network.
 * This namespace provides comprehensive type definitions for handling different formats of
 * state proof responses, including compact and full representations, along with record file structures.
 * @category Hashgraph
 * @subcategory StateProof
 * @since 2.0.0
 * @public
 * @remarks
 * State proof responses are critical for verifying network state and transaction validity.
 * The namespace supports multiple response formats to balance between efficiency and completeness,
 * allowing for both lightweight and detailed state verification scenarios.
 * @see _ICompact
 * @see _IFull
 * @see _IRecordFile
 * @example
 * ```typescript
 * import { _IResponse } from './hashgraph.commons.state_proof.response.namespace';
 * 
 * const compactResponse: _IResponse.ICompact = {
 *   address_books: ["0.0.3"],
 *   record_file: recordFileObj,
 *   signature_files: {},
 *   version: 1
 * };
 * ```
 */
export namespace _IResponse {
    /**
     * Compact State Proof Response Type
     * @type {_ICompact}
     * @description Represents a compact state proof response with optimized data structure.
     * Provides essential verification information while minimizing data size.
     * @memberof _IResponse
     * @since 2.0.0
     * @public
     * @remarks
     * - Optimized for efficient network transmission
     * - Contains minimal required verification data
     * - Suitable for lightweight clients
     * - Maintains cryptographic security guarantees
     * @see _ICompact
     */
    export type ICompact = _ICompact

    /**
     * Full State Proof Response Type
     * @type {_IFull}
     * @description Represents a complete state proof response with all details.
     * Contains comprehensive information for thorough state verification.
     * @memberof _IResponse
     * @since 2.0.0
     * @public
     * @remarks
     * - Includes complete verification data
     * - Suitable for full nodes and auditors
     * - Provides maximum verification capabilities
     * - Enables detailed state analysis
     * @see _IFull
     */
    export type IFull = _IFull

    /**
     * Record File Type
     * @type {_IRecordFile}
     * @description Represents a record file containing transaction details in a state proof response.
     * Stores detailed information about transactions and their effects on network state.
     * @memberof _IResponse
     * @since 2.0.0
     * @public
     * @remarks
     * - Contains transaction records and metadata
     * - Essential for transaction verification
     * - Supports state transition validation
     * - Includes cryptographic proofs
     * @see _IRecordFile
     */
    export type IRecordFile = _IRecordFile
}