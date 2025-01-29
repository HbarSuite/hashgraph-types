/**
 * @file hashgraph.ledger.hts.nft.info.interface.ts
 * @module IHashgraph.ILedger.IHTS.INFT.IInfo
 * @description Defines the interface for retrieving NFT information on Hashgraph Token Service (HTS).
 * This interface enables querying detailed metadata and current state of NFTs.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Interfaces
 * @subcategory NFT Operations
 */

/**
 * Hashgraph Token Service NFT Info Interface
 * @summary Interface for retrieving NFT information on Hashgraph Token Service
 * @description Defines the structure for getting detailed information about a specific non-fungible token (NFT)
 * using the Hashgraph Token Service (HTS). This interface allows querying metadata, ownership status,
 * and other properties of an individual NFT. The information returned includes the token's current state,
 * metadata URI, and other relevant details stored on the Hedera network.
 * @interface _IInfo
 * @property {string} token_id - The unique identifier of the NFT token to query
 * @property {number} serial_number - The unique serial number of the specific NFT to query
 * @memberof HashgraphHTS
 * 
 * @example
 * ```typescript
 * const nftInfoQuery: _IInfo = {
 *   token_id: "0.0.12345",
 *   serial_number: 1
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Token ID
     * @property {string} token_id
     * @description The unique identifier of the NFT token to query.
     * Must be in the format "0.0.{number}" representing a valid Hashgraph token.
     * This token must exist and be of NFT type for the query to succeed.
     * @type {string}
     * @memberof _IInfo
     * @required true
     * @example "0.0.12345"
     * @since 2.0.0
     */
    token_id: string;

    /**
     * Serial Number
     * @property {number} serial_number
     * @description The unique serial number of the specific NFT to query.
     * Must be a positive integer representing an existing NFT in the collection.
     * Used to identify the specific instance of the NFT within its token class.
     * @type {number}
     * @memberof _IInfo
     * @required true
     * @example 1
     * @since 2.0.0
     */
    serial_number: number;
}