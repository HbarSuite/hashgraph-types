import { _IStatusChange } from './interfaces/hashgraph.did.vc.status-change.interface'
import { _IList } from './namespaces/list/hashgraph.did.vc.list.namespace'

/**
 * @file vc.namespace.ts
 * @module IHashgraph._IDID._IVC
 * @description Verifiable Credentials (VC) Interface Namespace for Hashgraph.
 * Provides comprehensive types and interfaces for managing Verifiable Credentials,
 * implementing the W3C VC Data Model specification. This namespace handles
 * credential lifecycle, status management, and verification.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory DID
 * @see {@link https://www.w3.org/TR/vc-data-model/}
 * @remarks
 * This namespace implements the W3C Verifiable Credentials Data Model,
 * providing types and interfaces for creating, managing, and verifying
 * credentials in the Hedera DID ecosystem.
 */
export namespace _IVC {
    /**
     * Verifiable Credential Status Type
     * @type {Status}
     * @description Defines the possible states of a Verifiable Credential
     * throughout its lifecycle:
     * - revoked: Credential has been permanently invalidated
     * - suspended: Credential is temporarily invalid
     * - resumed: Previously suspended credential is now valid
     * - active: Credential is currently valid and usable
     * @remarks
     * - Status changes are permanent for revoked
     * - Suspended credentials can be resumed
     * - Active is the default valid state
     * - Status changes are tracked with timestamps
     * @example
     * ```typescript
     * const status: Status = "active";
     * // or
     * const status: Status = "suspended";
     * ```
     */
    export type Status = "revoked" | "suspended" | "resumed" | "active";

    /**
     * Credential Status Change Type
     * @type {IStatusChange}
     * @description Defines the structure for tracking and managing Verifiable
     * Credential status changes, including:
     * - Status transition details
     * - Timestamp information
     * - Change authorization
     * - Reason documentation
     * @see {@link _IStatusChange}
     * @remarks
     * - Tracks status history
     * - Maintains audit trail
     * - Supports verification
     * - Enables status management
     * @example
     * ```typescript
     * const statusChange: IStatusChange = {
     *   credentialId: "did:hedera:mainnet:7Prd74...#vc-1",
     *   status: "suspended",
     *   timestamp: "2023-12-23T10:42:00Z",
     *   reason: "Temporary suspension for review"
     * };
     * ```
     */
    export type IStatusChange = _IStatusChange;

    /**
     * Credential List Management Type
     * @type {IList}
     * @description Provides interfaces for managing collections of Verifiable
     * Credentials, supporting:
     * - Credential grouping
     * - Batch operations
     * - List validation
     * - Collection management
     * @see {@link _IList}
     * @remarks
     * - Enables bulk operations
     * - Maintains list integrity
     * - Supports filtering
     * - Facilitates organization
     * @example
     * ```typescript
     * const credentialList: IList = {
     *   credentials: [
     *     { id: "did:hedera:mainnet:7Prd74...#vc-1", type: "DegreeCredential" },
     *     { id: "did:hedera:mainnet:7Prd74...#vc-2", type: "LicenseCredential" }
     *   ],
     *   metadata: {
     *     created: "2023-12-23T10:42:00Z",
     *     owner: "did:hedera:mainnet:7Prd74..."
     *   }
     * };
     * ```
     */
    export import IList = _IList;
}