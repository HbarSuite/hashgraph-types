import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace';

/**
 * @file wipe.interface.ts
 * @module IHashgraph.ILedger.IHTS.IFungibleToken.IWipe
 * @description Defines the interface for wiping fungible tokens on Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Wiping
 */

/**
 * Token wipe interface
 * @interface _IWipe
 * @description Defines the structure for wiping (removing) fungible tokens from
 * specific accounts on the Hedera Token Service (HTS). Enables compliant token
 * removal with proper authorization and validation.
 * 
 * @remarks
 * Key features:
 * - Token removal
 * - Account targeting
 * - Authorization checks
 * - Transaction tracking
 * 
 * Security measures:
 * - Wipe key required
 * - Balance validation
 * - Amount verification
 * - Access control
 * 
 * Common use cases:
 * - Regulatory compliance
 * - Account cleanup
 * - Balance adjustment
 * - Security actions
 * 
 * Effects:
 * - Reduces balance
 * - Updates records
 * - Triggers events
 * - Maintains history
 * 
 * @example
 * ```typescript
 * // Basic token wipe
 * const basicWipe: _IWipe = {
 *   token_id: "0.0.12345",
 *   account_id: "0.0.67890",
 *   amount: 1000000 // 1000 tokens with 3 decimals
 * };
 * 
 * // DAO-controlled wipe
 * const daoWipe: _IWipe = {
 *   token_id: "0.0.12345",
 *   account_id: "0.0.67890",
 *   amount: 500000, // 500 tokens with 3 decimals
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * 
 * // Wipe with sender details
 * const senderWipe: _IWipe = {
 *   token_id: "0.0.12345",
 *   account_id: "0.0.67890",
 *   amount: 100000, // 100 tokens with 3 decimals
 *   sender: {
 *     id: AccountId.fromString("0.0.54321"),
 *     key: PublicKey.fromString("302a300506032b6570032100...")
 *   }
 * };
 * ```
 */
export interface _IWipe {
    /**
     * Token identifier
     * @property {string} token_id
     * @description The unique identifier of the token to be wiped.
     * Must be a valid Hedera token ID in the format "0.0.{number}".
     * @type {string}
     * @memberof _IWipe
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
     * - Must have wipe key
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
     * Wipe amount
     * @property {number} amount
     * @description The quantity of tokens to remove from the specified account.
     * Must be a positive integer representing the token amount with proper decimals.
     * @type {number}
     * @memberof _IWipe
     * @required
     * @remarks
     * Validation rules:
     * - Positive number
     * - Integer only
     * - Within balance
     * - Proper decimals
     * 
     * Considerations:
     * - Token decimals
     * - Account balance
     * - Minimum amounts
     * - Network limits
     * 
     * Effects:
     * - Reduces balance
     * - Updates records
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
     * Target account identifier
     * @property {string} account_id
     * @description The account from which tokens will be wiped.
     * Must be a valid Hedera account ID in the format "0.0.{number}".
     * @type {string}
     * @memberof _IWipe
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
     * - Has balance
     * - Allows wiping
     * 
     * @example
     * ```typescript
     * // Standard account ID
     * account_id: "0.0.67890"
     * 
     * // Testnet account
     * account_id: "0.0.7654321"
     * ```
     */
    account_id: string;

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token wipe operations.
     * Enables governance oversight and consensus tracking.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IWipe
     * @optional
     * @remarks
     * Use cases:
     * - Governance votes
     * - Community decisions
     * - Automated wiping
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
     * @description Account information for the token wipe operation.
     * Includes identification and authorization details.
     * @type {Object}
     * @memberof _IWipe
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