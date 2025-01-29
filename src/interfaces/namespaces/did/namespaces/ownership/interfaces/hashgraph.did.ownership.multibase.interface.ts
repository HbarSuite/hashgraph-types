/**
 * Multibase Encoding Interface for DID Ownership
 * @export
 * @interface _IMultiBase
 * @namespace IHashgraph.IDID.IOwnership._IMultiBase
 * @description Defines the structure for handling multibase-encoded cryptographic
 * keys in the DID ownership context. This interface ensures consistent handling
 * of private keys using the multibase specification for cross-platform
 * compatibility and unambiguous encoding.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @see {@link https://github.com/multiformats/multibase}
 * @remarks
 * - Implements multibase specification standards
 * - Ensures consistent key encoding
 * - Supports cross-platform compatibility
 * - Critical for cryptographic operations
 * @example
 * ```typescript
 * const multibase: _IMultiBase = {
 *   privateKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
 * };
 * ```
 */
export interface _IMultiBase {
    /**
     * Private key in multibase format
     * @type {string}
     * @description The private key encoded using multibase format, which includes:
     * - Base encoding prefix (e.g., 'z' for base58btc)
     * - Encoded key material
     * - Consistent format for all keys
     * @required true
     * @memberof _IMultiBase
     * @since 2.0.0
     * @remarks
     * - Must use valid multibase encoding
     * - Typically uses base58btc (z-prefix)
     * - Critical for key operations
     * - Ensures secure key handling
     * @example "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     */
    privateKeyMultibase: string;
}