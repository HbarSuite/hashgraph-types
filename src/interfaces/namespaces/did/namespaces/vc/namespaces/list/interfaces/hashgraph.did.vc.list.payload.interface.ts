/**
 * Interface representing the payload for Verifiable Credential list operations
 * @summary VC List Payload Interface
 * @description Defines the structure for payloads used in Verifiable Credential list operations,
 * containing the issuer's DID for authentication and authorization purposes
 * @interface _IPayload
 * @property {string} issuerDID - The DID of the credential issuer
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const payload: _IPayload = {
 *   issuerDID: "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
 * };
 * ```
 */
export interface _IPayload {
    /**
     * The DID of the credential issuer
     * @type {string}
     * @description Decentralized Identifier (DID) of the entity issuing the Verifiable Credential.
     * Used to verify the authority and authenticity of list operations.
     * @required true
     * @example "did:hedera:testnet:z6Mkfza16PqnyMyxPZd7dVhs6ySUettURTztjNJ8qBKwyHg5_0.0.30835719"
     * @remarks Must be a valid Hashgraph DID string that can be resolved on the network
     */
    issuerDID: string
}