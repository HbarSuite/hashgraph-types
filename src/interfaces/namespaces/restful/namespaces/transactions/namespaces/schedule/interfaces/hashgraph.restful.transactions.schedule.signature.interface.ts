import { _TypeEnum } from './hashgraph.restful.transactions.schedule.type.enum';

/**
 * @file hashgraph.restful.transactions.schedule.signature.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for cryptographic signatures in the Hashgraph Network REST API.
 * This interface represents the signatures required for scheduled transaction execution.
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Schedule Signature Interface
 * @interface _ISignature
 * @description Represents a cryptographic signature for a scheduled transaction.
 * This interface captures all essential information about a signature, including:
 * - Timing and consensus details
 * - Cryptographic components
 * - Signature verification data
 * Used for multi-signature coordination and transaction authorization.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a complete signature
 * const signature: _ISignature = {
 *   consensus_timestamp: "1234567890.000000000",
 *   public_key_prefix: "302a300506032b6570032100",
 *   signature: "7c1b9d58e...",
 *   type: _TypeEnum.Ed25519
 * };
 * 
 * // Example of validating a signature
 * const validateSignature = (sig: _ISignature): boolean => {
 *   return (
 *     !!sig.signature &&
 *     !!sig.public_key_prefix &&
 *     !!sig.type &&
 *     /^\d+\.\d+$/.test(sig.consensus_timestamp ?? "")
 *   );
 * };
 * 
 * // Example of creating a signature collection
 * const signatures: _ISignature[] = [
 *   {
 *     type: _TypeEnum.Ed25519,
 *     public_key_prefix: "302a300506032b6570032100",
 *     signature: "7c1b9d58e..."
 *   },
 *   {
 *     type: _TypeEnum.ECDSA_secp256k1,
 *     public_key_prefix: "3056301006072a8648ce3d020106052b8104000a034200",
 *     signature: "9a2b8d47c..."
 *   }
 * ];
 * ```
 */
export interface _ISignature {
    /**
     * Consensus Timestamp
     * @type {string}
     * @description The network consensus timestamp of signature addition.
     * Format: `seconds.nanoseconds` (e.g., "1234567890.000000000")
     * Properties:
     * - Optional field (set by network)
     * - Network-assigned timestamp
     * - Used for signature ordering and tracking
     * - Represents consensus achievement time
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _ISignature
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    consensus_timestamp?: string;

    /**
     * Public Key Prefix
     * @type {string}
     * @description The ASN.1 DER-encoded public key prefix.
     * Properties:
     * - Optional field
     * - Hexadecimal string format
     * - Contains algorithm parameters
     * - Used for signature verification
     * - Must match signature type
     * @required false
     * @memberof _ISignature
     * @since 2.0.0
     * @example "302a300506032b6570032100"  // Ed25519 prefix
     */
    public_key_prefix?: string;

    /**
     * Signature Data
     * @type {string}
     * @description The cryptographic signature in hexadecimal format.
     * Properties:
     * - Optional field
     * - Hexadecimal string format
     * - Created with corresponding private key
     * - Must be verifiable with public key
     * - Length depends on signature type
     * @required false
     * @memberof _ISignature
     * @since 2.0.0
     * @example "7c1b9d58e..."  // Truncated for brevity
     */
    signature?: string;

    /**
     * Signature Type
     * @type {_TypeEnum}
     * @description The cryptographic algorithm used for the signature.
     * Properties:
     * - Optional field
     * - Must match key and signature format
     * - Determines verification method
     * - Affects signature length and format
     * @required false
     * @see {@link _TypeEnum}
     * @memberof _ISignature
     * @since 2.0.0
     * @example _TypeEnum.Ed25519
     */
    type?: _TypeEnum;
}