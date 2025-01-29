import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file hashgraph.ledger.hts.nft.wipe.interface.ts
 * @module IHashgraph.ILedger.IHTS.INFT.IWipe
 * @description Defines the interface for wiping NFTs on Hashgraph Token Service (HTS).
 * This interface enables the removal of NFTs from specific accounts while maintaining the token's existence.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Interfaces
 * @subcategory NFT Operations
 */

/**
 * Hashgraph Token Service NFT Wipe Interface
 * @summary Interface for wiping NFTs on Hashgraph Token Service
 * @description Defines the structure for wiping (removing) a non-fungible token (NFT)
 * from a specific account using the Hashgraph Token Service (HTS). Unlike burning,
 * wiping removes the NFT from a specific account while maintaining the token's existence
 * in the network. This operation can be governed by DAO controls and requires appropriate
 * authorization.
 * @interface _IWipe
 * @property {string} token_id - The unique identifier of the NFT token to be wiped
 * @property {number} serial_number - The serial number of the specific NFT to wipe
 * @property {string} account_id - The account from which the NFT will be wiped
 * @property {IHashgraph.ILedger.IDAO.IConfig} [dao] - Optional DAO governance configuration
 * @property {Object} [sender] - Optional sender account details for authentication
 * @memberof HashgraphHTS
 * 
 * @example
 * ```typescript
 * const wipeOperation: _IWipe = {
 *   token_id: "0.0.12345",
 *   serial_number: 1,
 *   account_id: "0.0.67890",
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
export interface _IWipe {
    /**
     * Token ID
     * @property {string} token_id
     * @description The unique identifier of the NFT token to be wiped.
     * Must be in the format "0.0.{number}" representing a valid Hashgraph token.
     * This token must exist and be of NFT type with wipe privileges enabled.
     * @type {string}
     * @memberof _IWipe
     * @required true
     * @example "0.0.12345"
     * @since 2.0.0
     */
    token_id: string;

    /**
     * Serial Number
     * @property {number} serial_number
     * @description The unique serial number of the specific NFT to be wiped.
     * Must be a positive integer representing an existing NFT in the collection.
     * The NFT must be owned by the specified account for the wipe to succeed.
     * @type {number}
     * @memberof _IWipe
     * @required true
     * @example 1
     * @since 2.0.0
     */
    serial_number: number;

    /**
     * Account ID
     * @property {string} account_id
     * @description The account identifier from which the NFT will be wiped.
     * Must be in the format "0.0.{number}" representing a valid Hashgraph account.
     * The account must currently own the specified NFT for the wipe to succeed.
     * @type {string}
     * @memberof _IWipe
     * @required true
     * @example "0.0.67890"
     * @since 2.0.0
     */
    account_id: string;

    /**
     * DAO Configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} [dao]
     * @description Optional configuration for DAO-controlled NFT wiping.
     * When provided, the wipe operation must be approved through DAO governance.
     * Contains the topic ID and consensus timestamp for verification.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IWipe
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
     * Required when the wipe operation needs specific account permissions.
     * @property {PublicKey | KeyList} [sender.key] - The public key or key list for authorization
     * @property {AccountId} [sender.id] - The account ID of the sender
     * @type {Object}
     * @memberof _IWipe
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