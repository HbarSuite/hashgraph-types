import { _Response } from './namespaces/response/hashgraph.commons.state_proof.response.namespace';

/**
 * Namespace containing types and interfaces related to Hashgraph state proofs
 * @module Hashgraph.Commons
 * @namespace Hashgraph.Commons.IStateProof
 * @description Contains classes and types for working with Hashgraph state proofs, which provide cryptographic verification of transaction records.
 * Includes functionality for handling different response formats and record file management.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 * 
 * @example
 * // Import and use state proof types
 * import { _StateProof } from './hashgraph.commons.state_proof.namespace';
 * 
 * // Access response types
 * const response: _StateProof.Response.Full = new _StateProof.Response.Full({
 *   address_books: ['0.0.3'],
 *   record_file: '2023-04-15.rcd',
 *   signature_files: {'0.0.3': 'sig123'}
 * });
 */
export namespace _StateProof {
    /**
     * Namespace containing types related to state proof responses
     * @name Response
     * @description Contains classes for different state proof response formats including:
     * - Compact: Condensed version with essential data
     * - Full: Complete state proof with all details
     * - RecordFile: Record file specific information
     * @type {_Response}
     * @since 2.0.0
     * @memberof _StateProof
     * @public
     */
    export import Response = _Response
}