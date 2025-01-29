import { _IInfo } from './interfaces/hashgraph.did.vc.list.info.interface'
import { _IPayload } from './interfaces/hashgraph.did.vc.list.payload.interface'
import { _IResponse } from './interfaces/hashgraph.did.vc.list.response.interface'

/**
 * Verifiable Credential List Management Namespace
 * @file hashgraph.did.vc.list.namespace.ts
 * @module IHashgraph._IDID._IVC._IList
 * @description Comprehensive namespace for managing Verifiable Credential lists
 * in the Hashgraph DID ecosystem. Implements the W3C Status List 2021 specification
 * for credential status management, providing:
 * - Status list information handling
 * - Operation responses
 * - Payload management
 * - List operations
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://w3c.github.io/vc-status-list-2021/}
 * @remarks
 * This namespace implements the W3C Status List 2021 specification for managing
 * Verifiable Credential status lists. It provides comprehensive types and
 * interfaces for creating, updating, and verifying credential status lists
 * in the Hedera DID ecosystem.
 * @example
 * ```typescript
 * // Creating a status list entry
 * const info: _IList.IInfo = {
 *   id: "did:hedera:mainnet:7Prd74...#status-1",
 *   type: "StatusList2021Entry",
 *   statusListIndex: "42",
 *   statusListCredential: "did:hedera:mainnet:7Prd74...#status-list-1",
 *   statusPurpose: "revocation"
 * };
 * 
 * // Handling a list operation response
 * const response: _IList.IResponse = {
 *   fileId: "0.0.123456",
 *   statusInfo: info,
 *   timestamp: "2023-12-23T10:42:00Z",
 *   transactionId: "0.0.123456@1703321520.000000000"
 * };
 * 
 * // Creating an operation payload
 * const payload: _IList.IPayload = {
 *   issuerDid: "did:hedera:mainnet:7Prd74...",
 *   operation: "create",
 *   listType: "StatusList2021",
 *   purpose: "revocation"
 * };
 * ```
 */
export namespace _IList {
    /**
     * Status List Entry Information Type
     * @type {IInfo}
     * @description Defines the structure for Verifiable Credential status list
     * entries, implementing the W3C Status List 2021 Entry specification.
     * Includes:
     * - Entry identification
     * - Status list reference
     * - Index tracking
     * - Purpose specification
     * @see {@link _IInfo}
     * @since 2.0.0
     * @remarks
     * - Implements W3C standard
     * - Supports revocation
     * - Enables verification
     * - Maintains consistency
     * @example
     * ```typescript
     * const info: IInfo = {
     *   id: "did:hedera:mainnet:7Prd74...#status-1",
     *   type: "StatusList2021Entry",
     *   statusListIndex: "42",
     *   statusListCredential: "did:hedera:mainnet:7Prd74...#status-list-1",
     *   statusPurpose: "revocation"
     * };
     * ```
     */
    export type IInfo = _IInfo;

    /**
     * List Operation Response Type
     * @type {IResponse}
     * @description Defines the structure for responses returned by Verifiable
     * Credential list operations. Contains:
     * - Operation results
     * - Status information
     * - Transaction details
     * - Temporal data
     * @see {@link _IResponse}
     * @since 2.0.0
     * @remarks
     * - Tracks operations
     * - Provides verification
     * - Maintains history
     * - Enables auditing
     * @example
     * ```typescript
     * const response: IResponse = {
     *   fileId: "0.0.123456",
     *   statusInfo: info,
     *   timestamp: "2023-12-23T10:42:00Z",
     *   transactionId: "0.0.123456@1703321520.000000000"
     * };
     * ```
     */
    export type IResponse = _IResponse;

    /**
     * List Operation Payload Type
     * @type {IPayload}
     * @description Defines the structure for payloads used in Verifiable
     * Credential list operations. Includes:
     * - Authentication data
     * - Operation type
     * - List specifications
     * - Purpose declaration
     * @see {@link _IPayload}
     * @since 2.0.0
     * @remarks
     * - Ensures security
     * - Validates operations
     * - Maintains integrity
     * - Supports management
     * @example
     * ```typescript
     * const payload: IPayload = {
     *   issuerDid: "did:hedera:mainnet:7Prd74...",
     *   operation: "create",
     *   listType: "StatusList2021",
     *   purpose: "revocation"
     * };
     * ```
     */
    export type IPayload = _IPayload;
}