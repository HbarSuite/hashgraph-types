import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file hashgraph.ledger.hts.nft.mint.interface.ts
 * @module IHashgraph.ILedger.IHTS.INFT.IMint
 * @description Defines the interface for minting NFTs on Hashgraph Token Service (HTS).
 * This interface enables the creation of new NFTs with associated metadata.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Interfaces
 * @subcategory NFT Operations
 */

/**
 * Hashgraph Token Service NFT Mint Interface
 * @summary Interface for minting NFTs on Hashgraph Token Service
 * @description Defines the structure for minting (creating) a new non-fungible token (NFT)
 * using the Hashgraph Token Service (HTS). Each minted NFT is unique and has associated metadata
 * stored via IPFS or similar decentralized storage. The minting process can be governed by
 * DAO controls and requires appropriate authorization.
 * @interface _IMint
 * @property {string} token_id - The unique identifier of the NFT token to be minted
 * @property {string} cid - The Content Identifier (CID) containing the NFT's metadata
 * @property {IHashgraph.ILedger.IDAO.IConfig} [dao] - Optional DAO governance configuration
 * @property {Object} [sender] - Optional sender account details for authentication
 * @memberof HashgraphHTS
 * 
 * @example
 * ```typescript
 * const mintOperation: _IMint = {
 *   token_id: "0.0.12345",
 *   cid: "QmXw5s7gf...",
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
export interface _IMint {
    /**
     * Token ID
     * @property {string} token_id
     * @description The unique identifier of the NFT token to be minted.
     * Must be in the format "0.0.{number}" representing a valid Hashgraph token.
     * This token must exist and be configured for NFT minting.
     * @type {string}
     * @memberof _IMint
     * @required true
     * @example "0.0.12345"
     * @since 2.0.0
     */
    token_id: string;

    /**
     * CID (Content Identifier)
     * @property {string} cid
     * @description The Content Identifier (CID) that points to the NFT's metadata or content,
     * typically stored on IPFS or similar decentralized storage. The CID must be valid and
     * the content must be accessible. This metadata defines the NFT's properties and characteristics.
     * @type {string}
     * @memberof _IMint
     * @required true
     * @example "QmXw5s7gf..."
     * @since 2.0.0
     */
    cid: string;

    /**
     * DAO Configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} [dao]
     * @description Optional configuration for DAO-controlled NFT minting.
     * When provided, the mint operation must be approved through DAO governance.
     * Contains the topic ID and consensus timestamp for verification.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IMint
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
     * Required when the mint operation needs specific account permissions.
     * @property {PublicKey | KeyList} [sender.key] - The public key or key list for authorization
     * @property {AccountId} [sender.id] - The account ID of the sender
     * @type {Object}
     * @memberof _IMint
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