import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file mint.interface.ts
 * @module IHashgraph.ILedger.IHTS.IFungibleToken.IMint
 * @description Defines the interface for minting fungible tokens on Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Minting
 */

/**
 * Token mint interface
 * @interface _IMint
 * @description Defines the structure for minting (creating new) fungible tokens on
 * the Hedera Token Service (HTS). Enables controlled token supply expansion with
 * proper authorization and validation.
 * 
 * @remarks
 * Key features:
 * - Supply expansion
 * - Controlled creation
 * - Authorization checks
 * - Transaction tracking
 * 
 * Security measures:
 * - Supply key required
 * - Limit validation
 * - Amount verification
 * - Access control
 * 
 * Common use cases:
 * - Initial distribution
 * - Supply expansion
 * - Reward issuance
 * - Liquidity provision
 * 
 * Effects:
 * - Increases supply
 * - Updates balances
 * - Records transaction
 * - Triggers events
 * 
 * @example
 * ```typescript
 * // Basic token mint
 * const basicMint: _IMint = {
 *   token_id: "0.0.12345",
 *   amount: 1000000 // 1000 tokens with 3 decimals
 * };
 * 
 * // DAO-controlled mint
 * const daoMint: _IMint = {
 *   token_id: "0.0.12345",
 *   amount: 500000, // 500 tokens with 3 decimals
 *   dao: {
 *     topicId: "0.0.67890",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * 
 * // Mint with sender details
 * const senderMint: _IMint = {
 *   token_id: "0.0.12345",
 *   amount: 100000, // 100 tokens with 3 decimals
 *   sender: {
 *     id: AccountId.fromString("0.0.67890"),
 *     key: PublicKey.fromString("302a300506032b6570032100...")
 *   }
 * };
 * ```
 */
export interface _IMint {
    /**
     * Token identifier
     * @property {string} token_id
     * @description The unique identifier of the token to be minted.
     * Must be a valid Hedera token ID in the format "0.0.{number}".
     * @type {string}
     * @memberof _IMint
     * @required
     * @remarks
     * Format rules:
     * - Shard.Realm.Number
     * - Numbers only
     * - Dots as separators
     * - No leading zeros
     * 
     * Validation:
     * - Must exist
     * - Must be active
     * - Must be fungible
     * - Must have supply key
     * 
     * @example
     * ```typescript
     * // Standard token ID
     * token_id: "0.0.12345"
     * 
     * // Testnet token
     * token_id: "0.0.1234567"
     * ```
     */
    token_id: string;

    /**
     * Mint amount
     * @property {number} amount
     * @description The quantity of new tokens to create and add to circulation.
     * Must be a positive integer representing the token amount with proper decimals.
     * @type {number}
     * @memberof _IMint
     * @required
     * @remarks
     * Validation rules:
     * - Positive number
     * - Integer only
     * - Within limits
     * - Proper decimals
     * 
     * Considerations:
     * - Token decimals
     * - Maximum supply
     * - Minimum amounts
     * - Network limits
     * 
     * Effects:
     * - Increases supply
     * - Updates totals
     * - Creates tokens
     * - Network record
     * 
     * @example
     * ```typescript
     * // 1000 tokens with 3 decimals
     * amount: 1000000
     * 
     * // 50 tokens with 2 decimals
     * amount: 5000
     * ```
     */
    amount: number;

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token minting operations.
     * Enables governance oversight and consensus tracking.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IMint
     * @optional
     * @remarks
     * Use cases:
     * - Governance votes
     * - Community decisions
     * - Automated minting
     * - Policy enforcement
     * 
     * Requirements:
     * - Valid topic
     * - Recent consensus
     * - Proper format
     * - Active governance
     * 
     * @example
     * ```typescript
     * dao: {
     *   topicId: "0.0.67890",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig

    /**
     * Sender account details
     * @property {Object} sender
     * @description Account information for the token minting operation.
     * Includes identification and authorization details.
     * @type {Object}
     * @memberof _IMint
     * @optional
     * @remarks
     * Components:
     * - Account ID
     * - Public key
     * - Key list
     * - Authorization
     * 
     * Security:
     * - Key validation
     * - Account status
     * - Permissions
     * - Access control
     * 
     * @example
     * ```typescript
     * sender: {
     *   id: AccountId.fromString("0.0.67890"),
     *   key: PublicKey.fromString("302a300506032b6570032100...")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }
}