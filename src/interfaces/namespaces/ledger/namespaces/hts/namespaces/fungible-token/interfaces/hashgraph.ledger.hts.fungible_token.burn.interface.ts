import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file burn.interface.ts
 * @module IHashgraph.ILedger.IHTS.IFungibleToken.IBurn
 * @description Defines the interface for burning fungible tokens on Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Burning
 */

/**
 * Token burn interface
 * @interface _IBurn
 * @description Defines the structure for burning (destroying) fungible tokens on the
 * Hedera Token Service (HTS). Enables permanent token removal from circulation with
 * proper authorization and validation.
 * 
 * @remarks
 * Key features:
 * - Supply reduction
 * - Permanent removal
 * - Authorization control
 * - Transaction tracking
 * 
 * Security measures:
 * - Supply key required
 * - Balance validation
 * - Amount verification
 * - Access control
 * 
 * Common use cases:
 * - Supply management
 * - Token retirement
 * - Value adjustment
 * - Governance actions
 * 
 * Effects:
 * - Reduces supply
 * - Updates balances
 * - Records transaction
 * - Triggers events
 * 
 * @example
 * ```typescript
 * // Basic token burn
 * const basicBurn: _IBurn = {
 *   token_id: "0.0.12345",
 *   amount: 1000000 // 1000 tokens with 3 decimals
 * };
 * 
 * // DAO-controlled burn
 * const daoBurn: _IBurn = {
 *   token_id: "0.0.12345",
 *   amount: 500000, // 500 tokens with 3 decimals
 *   dao: {
 *     topicId: "0.0.67890",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * 
 * // Burn with sender details
 * const senderBurn: _IBurn = {
 *   token_id: "0.0.12345",
 *   amount: 100000, // 100 tokens with 3 decimals
 *   sender: {
 *     id: AccountId.fromString("0.0.67890"),
 *     key: PublicKey.fromString("302a300506032b6570032100...")
 *   }
 * };
 * ```
 */
export interface _IBurn {
    /**
     * Token identifier
     * @property {string} token_id
     * @description The unique identifier of the token to be burned.
     * Must be a valid Hedera token ID in the format "0.0.{number}".
     * @type {string}
     * @memberof _IBurn
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
     * Burn amount
     * @property {number} amount
     * @description The quantity of tokens to permanently remove from circulation.
     * Must be a positive integer representing the token amount with proper decimals.
     * @type {number}
     * @memberof _IBurn
     * @required
     * @remarks
     * Validation rules:
     * - Positive number
     * - Integer only
     * - Within supply
     * - Proper decimals
     * 
     * Considerations:
     * - Token decimals
     * - Available supply
     * - Minimum amounts
     * - Network limits
     * 
     * Effects:
     * - Reduces supply
     * - Updates totals
     * - Permanent action
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
     * @description Configuration for DAO-controlled token burn operations.
     * Enables governance oversight and consensus tracking.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IBurn
     * @optional
     * @remarks
     * Use cases:
     * - Governance votes
     * - Community decisions
     * - Automated burns
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
     * @description Account information for the token burn operation.
     * Includes identification and authorization details.
     * @type {Object}
     * @memberof _IBurn
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