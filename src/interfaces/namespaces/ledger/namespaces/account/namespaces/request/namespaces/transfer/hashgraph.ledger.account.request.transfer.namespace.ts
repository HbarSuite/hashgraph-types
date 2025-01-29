import { _IAtomicSwap } from './interfaces/hashgraph.ledger.account.request.transfer.atomic-swap.interface'
import { _IFungibleToken } from './interfaces/hashgraph.ledger.account.request.transfer.fungible-token.interface'
import { _IHbar } from './interfaces/hashgraph.ledger.account.request.transfer.hbar.interface'
import { _INft } from './interfaces/hashgraph.ledger.account.request.transfer.nft.interface'

/**
 * Comprehensive namespace for all asset transfer operations on Hedera
 * @namespace _ITransfer
 * @description Centralizes type definitions for all supported transfer operations on the
 * Hedera Token Service (HTS), providing type-safe interfaces for:
 * - Native cryptocurrency (HBAR) transfers
 * - Fungible token operations
 * - Non-fungible token (NFT) transfers
 * - Atomic swaps and complex exchanges
 * @category Interfaces
 * @subcategory Transfer
 * @remarks
 * This namespace serves as the foundation for all transfer-related operations,
 * ensuring type safety and standardization across different asset types.
 * Each transfer type has its own specific requirements and validation rules.
 * @example
 * ```typescript
 * // HBAR transfer example
 * const hbarTransfer: _ITransfer.IHbar = {
 *   amount: "1000000000", // 10 ℏ
 *   recipientId: "0.0.123456"
 * };
 * 
 * // Fungible token transfer
 * const tokenTransfer: _ITransfer.IFungibleToken = {
 *   tokenId: "0.0.234567",
 *   amount: 1000,
 *   recipientId: "0.0.123456"
 * };
 * 
 * // NFT transfer
 * const nftTransfer: _ITransfer.INft = {
 *   tokenId: "0.0.345678",
 *   serialNumbers: [1, 2, 3],
 *   recipientId: "0.0.123456"
 * };
 * 
 * // Atomic swap example
 * const atomicSwap: _ITransfer.IAtomicSwap = {
 *   hbarTransfer: hbarTransfer,
 *   tokenTransfer: tokenTransfer
 * };
 * ```
 */
export namespace _ITransfer {
    /**
     * Type definition for HBAR transfers
     * @type {_IHbar}
     * @description Specifies the structure for native cryptocurrency transfers
     * @memberof _ITransfer
     * @remarks
     * - Handles native HBAR cryptocurrency
     * - Amounts in tinybars (1 ℏ = 100,000,000 tinybars)
     * - Supports account balance transfers
     * - Requires sufficient balance and gas
     */
    export type IHbar = _IHbar

    /**
     * Type definition for fungible token transfers
     * @type {_IFungibleToken}
     * @description Defines the structure for transferring HTS-compliant fungible tokens
     * @memberof _ITransfer
     * @remarks
     * - Supports all HTS fungible tokens
     * - Requires token association
     * - Handles decimal precision
     * - Validates token balances
     */
    export type IFungibleToken = _IFungibleToken

    /**
     * Type definition for NFT transfers
     * @type {_INft}
     * @description Specifies the structure for non-fungible token transfers
     * @memberof _ITransfer
     * @remarks
     * - Handles unique digital assets
     * - Supports single or batch transfers
     * - Requires NFT ownership verification
     * - Maintains token provenance
     */
    export type INft = _INft

    /**
     * Type definition for atomic swaps
     * @type {_IAtomicSwap}
     * @description Defines the structure for atomic swap operations
     * @memberof _ITransfer
     * @remarks
     * - Ensures transaction atomicity
     * - Supports multi-asset exchanges
     * - Handles complex trading scenarios
     * - Provides transaction guarantees
     */
    export type IAtomicSwap = _IAtomicSwap
}