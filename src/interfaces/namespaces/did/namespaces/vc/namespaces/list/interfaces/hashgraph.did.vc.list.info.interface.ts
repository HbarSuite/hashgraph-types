/**
 * Interface representing status list information for Verifiable Credentials
 * @summary Status List Info Interface
 * @description Defines the structure for status list information used in Verifiable Credentials,
 * including identifiers, type specifications, and status list details
 * @interface _IInfo
 * @property {string} id - Unique identifier for the status list entry
 * @property {("RevocationList2021Status"|"SuspensionList2021Status")} type - Type of status list
 * @property {number} statusListIndex - Index position in the status list
 * @property {string} statusListCredential - URL of the status list credential
 * @category Hashgraph
 * @subcategory DID
 * @since 2.0.0
 * @public
 * @example
 * ```typescript
 * const statusInfo: _IInfo = {
 *   id: "https://identity-network.meecoo.me/vc/status/0.0.123/614",
 *   type: "RevocationList2021Status",
 *   statusListIndex: 614,
 *   statusListCredential: "https://identity-network.meecoo.me/vc/status/0.0.123"
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Unique identifier for the status list entry
     * @type {string}
     * @description Full URL path that uniquely identifies this status list entry
     * @required true
     * @example "https://identity-network.meecoo.me/vc/status/0.0.123/614"
     * @remarks Should be a valid URL string that can be used to locate this specific status entry
     */
    id: string

    /**
     * Type of status list
     * @type {("RevocationList2021Status"|"SuspensionList2021Status")}
     * @description Specifies whether this is a revocation or suspension status list entry
     * @required true
     * @example "RevocationList2021Status"
     * @remarks Only RevocationList2021Status and SuspensionList2021Status are currently supported
     */
    type: "RevocationList2021Status" | "SuspensionList2021Status"

    /**
     * Index position in the status list
     * @type {number}
     * @description Numerical index indicating the position of this entry in the status list
     * @required true
     * @example 614
     * @remarks Must be a non-negative integer
     */
    statusListIndex: number

    /**
     * URL of the status list credential
     * @type {string}
     * @description Base URL for the status list credential that contains this entry
     * @required true
     * @example "https://identity-network.meecoo.me/vc/status/0.0.123"
     * @remarks Should be a valid URL string pointing to the parent status list credential
     */
    statusListCredential: string
}