import { _IInfo } from './hashgraph.did.vc.list.info.interface'

/**
 * Response Interface
 * @description Interface representing a response containing file ID and status information
 * @interface _IResponse
 * @property {string} fileId - The ID of the file
 * @property {_IInfo} statusInfo - Status information object
 * @example
 * {
 *   fileId: "0.0.123456",
 *   statusInfo: {
 *     // Status info properties
 *   }
 * }
 */
export interface _IResponse {
    /**
     * The ID of the file
     * @type {string}
     * @description Unique identifier for the file
     * @required true
     * @example "0.0.123456"
     */
    fileId: string

    /**
     * Status information
     * @type {_IInfo}
     * @description Object containing status details and metadata
     * @required true
     * @see _IInfo
     */
    statusInfo: _IInfo
}