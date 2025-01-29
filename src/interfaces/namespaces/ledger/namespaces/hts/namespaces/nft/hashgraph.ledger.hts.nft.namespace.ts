/**
 * @file hashgraph.ledger.hts.nft.namespace.ts
 * @module IHashgraph.ILedger.IHTS.INFT
 * @description Namespace for NFT-related operations in the Hashgraph Token Service (HTS).
 * This module provides interfaces for managing non-fungible tokens on the Hedera network.
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Namespaces
 * @subcategory HTS
 */

import { _IBurn } from './interfaces/hashgraph.ledger.hts.nft.burn.interface';
import { _IInfo } from './interfaces/hashgraph.ledger.hts.nft.info.interface';
import { _IMint } from './interfaces/hashgraph.ledger.hts.nft.mint.interface';
import { _IWipe } from './interfaces/hashgraph.ledger.hts.nft.wipe.interface';

/**
 * Namespace for NFT-related interfaces in Hashgraph Token Service
 * @namespace _INft
 * @description Contains comprehensive interfaces for managing NFTs on the Hedera network,
 * including operations for wiping, minting, burning, and retrieving NFT information.
 * All operations support optional DAO governance integration.
 * @category Namespaces
 * @subcategory HTS
 */
export namespace _INft {
    /**
     * Interface for wiping an NFT
     * @type {_IWipe}
     * @description Defines the structure for wiping (removing) an NFT from a specified account.
     * Supports optional DAO governance and sender authentication.
     * @see _IWipe
     */
    export type IWipe = _IWipe

    /**
     * Interface for minting an NFT
     * @type {_IMint}
     * @description Defines the structure for minting new NFTs with specified metadata.
     * Includes support for IPFS CID storage and optional DAO governance.
     * @see _IMint
     */
    export type IMint = _IMint

    /**
     * Interface for burning an NFT
     * @type {_IBurn}
     * @description Defines the structure for burning (permanently removing) NFTs from circulation.
     * Supports optional DAO governance and sender authentication.
     * @see _IBurn
     */
    export type IBurn = _IBurn

    /**
     * Interface for getting NFT info
     * @type {_IInfo}
     * @description Defines the structure for retrieving detailed information about an NFT,
     * including its metadata and current state on the network.
     * @see _IInfo
     */
    export type IInfo = _IInfo
}