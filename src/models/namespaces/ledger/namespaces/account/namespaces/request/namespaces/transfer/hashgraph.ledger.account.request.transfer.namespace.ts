import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _FungibleToken } from './models/hashgraph.ledger.account.request.transfer.models.fungible-token.model'
import { _Hbar } from './models/hashgraph.ledger.account.request.transfer.models.hbar.model'
import { _Nft } from './models/hashgraph.ledger.account.request.transfer.models.nft.model'
import { _AtomicSwap } from './models/hashgraph.ledger.account.request.transfer.models.atomic-swap.model'

/**
 * Defines the namespace for different types of account transfers in the Hedera Hashgraph ledger
 * @packageDocumentation
 * @module Hashgraph.Ledger.Account.Request.Transfer
 * @category Account
 * @subcategory Transfer
 */

/**
 * Namespace containing classes for different types of account transfers
 * @namespace _Transfer
 * @description Provides a collection of classes for handling various types of transfers between accounts on the Hedera network:
 * - HBAR transfers for native cryptocurrency transactions
 * - Fungible token transfers for custom token transactions
 * - NFT transfers for non-fungible token operations
 * - Atomic swaps for secure token exchanges
 * @example
 * ```typescript
 * // Example HBAR transfer
 * const hbarTransfer = new _Transfer.Hbar("0.0.123", "100");
 * 
 * // Example fungible token transfer
 * const tokenTransfer = new _Transfer.FungibleToken("0.0.456", "1000", "0.0.789");
 * 
 * // Example NFT transfer
 * const nftTransfer = new _Transfer.Nft("0.0.123", "0.0.456", "1");
 * 
 * // Example atomic swap
 * const swap = new _Transfer.AtomicSwap({
 *   from: "0.0.123",
 *   to: "0.0.456",
 *   tokens: [{tokenId: "0.0.789", amount: "100"}]
 * });
 * ```
 */
export namespace _Transfer {
    /**
     * Class for handling HBAR cryptocurrency transfers
     * @class Hbar
     * @extends {_Hbar}
     * @description Handles the transfer of HBAR cryptocurrency between accounts
     * @example
     * ```typescript
     * const transfer = new _Transfer.Hbar("0.0.123", "50.5");
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Ledger.Account.Request.Transfer.Hbar'
    })  
    export class Hbar extends _Hbar {}

    /**
     * Class for handling fungible token transfers
     * @class FungibleToken
     * @extends {_FungibleToken}
     * @description Manages transfers of fungible tokens between accounts
     * @example
     * ```typescript
     * const transfer = new _Transfer.FungibleToken(
     *   "0.0.123", // recipient
     *   "1000",    // amount
     *   "0.0.456"  // tokenId
     * );
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Ledger.Account.Request.Transfer.FungibleToken'
    })
    export class FungibleToken extends _FungibleToken {}

    /**
     * Class for handling NFT transfers
     * @class Nft
     * @extends {_Nft}
     * @description Manages transfers of non-fungible tokens between accounts
     * @example
     * ```typescript
     * const transfer = new _Transfer.Nft(
     *   "0.0.123",  // sender
     *   "0.0.456",  // recipient
     *   "1"         // serialNumber
     * );
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Ledger.Account.Request.Transfer.Nft'
    })
    export class Nft extends _Nft {}

    /**
     * Class for handling atomic swap transfers
     * @class AtomicSwap
     * @extends {_AtomicSwap}
     * @description Manages atomic swaps of tokens between accounts, ensuring secure and atomic exchanges
     * @example
     * ```typescript
     * const swap = new _Transfer.AtomicSwap({
     *   from: "0.0.123",
     *   to: "0.0.456",
     *   tokens: [
     *     {
     *       tokenId: "0.0.789",
     *       amount: "100"
     *     }
     *   ]
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Ledger.Account.Request.Transfer.AtomicSwap'
    })
    export class AtomicSwap extends _AtomicSwap {}
}