/**
 * DID Document Registration Interface
 * @export
 * @interface _IRegister 
 * @namespace IHashgraph.IDID.IDocument._IRegister
 * @description Defines the structure for registering new DID Documents in the
 * Hashgraph network. This interface specifies the minimum required information
 * needed to create a valid DID Document, following the W3C DID Core specification
 * and Hedera-specific requirements.
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @remarks
 * - Implements W3C DID Core registration requirements
 * - Supports Hedera DID Method specifications
 * - Ensures proper key material formatting
 * - Enables secure document creation
 * @example
 * ```typescript
 * const registration: _IRegister = {
 *   publicKeyMultibase: "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH",
 * };
 * ```
 */
export interface _IRegister {
    /**
     * Initial verification key
     * @type {string}
     * @description The primary public key for the DID Document, encoded in
     * multibase format. This key becomes the first verification method and is
     * used to establish control over the DID.
     * @required true
     * @memberof _IRegister
     * @since 2.0.0
     * @remarks
     * - Must use multibase encoding
     * - Typically uses base58-btc
     * - Critical for document control
     * - Used for initial authentication
     * @example "z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH"
     */
    publicKeyMultibase: string;
}