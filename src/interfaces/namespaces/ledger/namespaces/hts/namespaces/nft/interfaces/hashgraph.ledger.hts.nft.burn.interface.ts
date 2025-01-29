import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file hashgraph.ledger.hts.nft.burn.interface.ts
 * @module IHashgraph.ILedger.IHTS.INFT.IBurn
 * @description Defines the interface for burning NFTs on Hashgraph Token Service (HTS).
 * Burning permanently removes an NFT from circulation and cannot be undone.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Interfaces
 * @subcategory NFT Operations
 */

/**
 * Hashgraph Token Service NFT Burn Interface
 * @summary Interface for burning NFTs on Hashgraph Token Service
 * @description Defines the structure for burning (permanently destroying) a non-fungible token (NFT)
 * using the Hashgraph Token Service (HTS). Each burned NFT is permanently removed from circulation
 * and cannot be recovered. This operation requires appropriate authorization and can be governed
 * by DAO controls if configured.
 * @interface _IBurn
 * @property {string} token_id - The unique identifier of the NFT token to be burned
 * @property {number} serial_number - The serial number of the specific NFT to burn
 * @property {IHashgraph.ILedger.IDAO.IConfig} [dao] - Optional DAO governance configuration
 * @property {Object} [sender] - Optional sender account details for authentication
 * @memberof HashgraphHTS
 * 
 * @example
 * ```typescript
 * const burnOperation: _IBurn = {
 *   token_id: "0.0.12345",
 *   serial_number: 1,
 *   dao: {
 *     topicId: "0.0.12345",
 *     consensusTimestamp: "1234567890.123456789"
 *   },
 *   sender: {
 *     id: AccountId.fromString("0.0.12345"),
 *     key: new PublicKey(...)
 *   }
 * };
 * ```
 */
export interface _IBurn {
    /**
     * Token ID
     * @property {string} token_id
     * @description The unique identifier of the NFT token to be burned.
     * Must be in the format "0.0.{number}" representing a valid Hashgraph token.
     * This token must exist and be of NFT type.
     * @type {string}
     * @memberof _IBurn
     * @required true
     * @example "0.0.12345"
     * @since 2.0.0
     */
    token_id: string;

    /**
     * Serial Number
     * @property {number} serial_number
     * @description The unique serial number of the specific NFT to be burned.
     * Must be a positive integer representing an existing NFT in the collection.
     * Once burned, this serial number cannot be reused.
     * @type {number}
     * @memberof _IBurn
     * @required true
     * @example 1
     * @since 2.0.0
     */
    serial_number: number;

    /**
     * DAO Configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} [dao]
     * @description Optional configuration for DAO-controlled NFT burns.
     * When provided, the burn operation must be approved through DAO governance.
     * Contains the topic ID and consensus timestamp for verification.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IBurn
     * @optional
     * @since 2.0.0
     * @example
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig;

    /**
     * Sender information
     * @property {Object} sender
     * @description Optional sender account details for authentication and authorization.
     * Required when the burn operation needs specific account permissions.
     * @property {PublicKey | KeyList} [sender.key] - The public key or key list for authorization
     * @property {AccountId} [sender.id] - The account ID of the sender
     * @type {Object}
     * @memberof _IBurn
     * @optional
     * @example
     * sender: {
     *   id: AccountId.fromString("0.0.12345"),
     *   key: new PublicKey(...)
     * }
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }
}