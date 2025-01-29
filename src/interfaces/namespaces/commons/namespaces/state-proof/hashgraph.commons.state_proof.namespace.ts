import { _IResponse } from './namespaces/response/hashgraph.commons.state_proof.response.namespace';

/**
 * State Proof Namespace
 * @namespace _IStateProof
 * @description Namespace containing types and interfaces related to Hashgraph state proofs.
 * This namespace provides comprehensive types for handling and validating state proofs,
 * which are cryptographic verifications of the network's state at specific points in time.
 * @category Hashgraph
 * @subcategory StateProof
 * @since 2.0.0
 * @public
 * @remarks
 * State proofs are crucial for verifying the authenticity and integrity of network states.
 * They provide cryptographic evidence of the network's state at specific moments,
 * enabling secure verification of transactions and account states.
 * @see _IResponse
 * @example
 * ```typescript
 * import { _IStateProof } from './hashgraph.commons.state_proof.namespace';
 * 
 * // Access state proof response types
 * const response: _IStateProof.IResponse.ICompact = {
 *   address_books: ["0.0.3"],
 *   record_file: recordFileObj,
 *   signature_files: {},
 *   version: 1
 * };
 * ```
 */
export namespace _IStateProof {
    /**
     * State Proof Response Namespace
     * @name IResponse
     * @description Namespace containing types related to state proof responses, including compact and full response formats.
     * Provides structures for both simplified and detailed state proof information.
     * @type {_IResponse}
     * @memberof _IStateProof
     * @since 2.0.0
     * @public
     * @remarks
     * - Supports both compact and full response formats
     * - Includes address book and signature file handling
     * - Used for state verification and validation
     * - Essential for network state integrity checks
     * @see _IResponse
     */
    export import IResponse = _IResponse
}