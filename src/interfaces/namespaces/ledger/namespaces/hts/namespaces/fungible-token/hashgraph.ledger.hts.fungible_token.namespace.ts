/**
 * @file fungible-token.namespace.ts
 * @module IHashgraph.ILedger.IHTS.IFungibleToken
 * @description Defines the namespace for fungible token operations on Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Fungible Tokens
 */

import { _IBurn } from './interfaces/hashgraph.ledger.hts.fungible_token.burn.interface'
import { _IMint } from './interfaces/hashgraph.ledger.hts.fungible_token.mint.interface'
import { _IWipe } from './interfaces/hashgraph.ledger.hts.fungible_token.wipe.interface'

/**
 * Fungible token operations namespace
 * @namespace _IFungibleToken
 * @description Defines the structure for managing fungible tokens on the Hedera
 * Token Service (HTS). Provides comprehensive interfaces for token lifecycle
 * operations including minting, burning, and wiping.
 * 
 * @remarks
 * Key features:
 * - Token minting
 * - Token burning
 * - Token wiping
 * - Supply management
 * 
 * Token characteristics:
 * - Fungibility
 * - Divisibility
 * - Transferability
 * - Standardization
 * 
 * Security measures:
 * - Access control
 * - Supply limits
 * - Operation validation
 * - Audit tracking
 * 
 * Common use cases:
 * - Cryptocurrency
 * - Loyalty points
 * - Gaming tokens
 * - Stablecoins
 * 
 * @example
 * ```typescript
 * // Minting new tokens
 * const mintOperation: _IFungibleToken.IMint = {
 *   token_id: "0.0.12345",
 *   amount: 1000000, // 1000 tokens with 3 decimals
 *   metadata: "Initial supply mint"
 * };
 * 
 * // Burning tokens
 * const burnOperation: _IFungibleToken.IBurn = {
 *   token_id: "0.0.12345",
 *   amount: 500000, // 500 tokens with 3 decimals
 *   metadata: "Token burn for supply reduction"
 * };
 * 
 * // Wiping tokens from account
 * const wipeOperation: _IFungibleToken.IWipe = {
 *   token_id: "0.0.12345",
 *   account_id: "0.0.67890",
 *   amount: 100000, // 100 tokens with 3 decimals
 *   metadata: "Regulatory compliance wipe"
 * };
 * ```
 */
export namespace _IFungibleToken {
    /**
     * Token wipe operations
     * @type {_IWipe}
     * @description Interface for removing tokens from specific accounts.
     * Enables compliant token removal with proper authorization.
     * @see _IWipe
     * @since 2.0.0
     * @remarks
     * Use cases:
     * - Regulatory compliance
     * - Account cleanup
     * - Balance adjustment
     * - Security measures
     * 
     * Requirements:
     * - Wipe key
     * - Valid account
     * - Sufficient balance
     * - Proper authorization
     */
    export type IWipe = _IWipe

    /**
     * Token minting operations
     * @type {_IMint}
     * @description Interface for creating new tokens and adding to supply.
     * Controls token creation and distribution process.
     * @see _IMint
     * @since 2.0.0
     * @remarks
     * Use cases:
     * - Initial supply
     * - Supply expansion
     * - Reward distribution
     * - Liquidity management
     * 
     * Requirements:
     * - Supply key
     * - Valid amount
     * - Supply limits
     * - Proper authorization
     */
    export type IMint = _IMint

    /**
     * Token burn operations
     * @type {_IBurn}
     * @description Interface for permanently removing tokens from supply.
     * Manages token supply reduction and retirement.
     * @see _IBurn
     * @since 2.0.0
     * @remarks
     * Use cases:
     * - Supply reduction
     * - Token retirement
     * - Deflationary mechanics
     * - Balance adjustment
     * 
     * Requirements:
     * - Supply key
     * - Valid amount
     * - Sufficient balance
     * - Proper authorization
     */
    export type IBurn = _IBurn
}