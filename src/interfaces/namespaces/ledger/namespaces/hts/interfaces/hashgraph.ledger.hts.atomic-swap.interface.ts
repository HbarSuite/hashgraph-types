import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @file atomic-swap.interface.ts
 * @module IHashgraph.ILedger.IHTS.IAtomicSwap
 * @description Defines the interface for performing atomic swaps on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Atomic Swaps
 */

/**
 * Atomic swap interface for secure token exchanges
 * @interface _IAtomicSwap
 * @description Defines the structure for performing atomic swaps between accounts
 * on the Hashgraph Token Service (HTS). Atomic swaps ensure transaction atomicity,
 * meaning either both transfers complete successfully or both fail, preventing
 * partial or incomplete exchanges.
 * 
 * @remarks
 * Key features:
 * - Atomic execution guarantee
 * - Multi-token support
 * - Secure exchange mechanism
 * - Transaction validation
 * - Rollback protection
 * 
 * Requirements:
 * - Valid account IDs
 * - Sufficient token balances
 * - Token associations
 * - Network fees
 * 
 * Security features:
 * - Transaction atomicity
 * - Validation checks
 * - Rollback handling
 * - Error recovery
 * 
 * @example
 * ```typescript
 * // Basic atomic swap
 * const basicSwap: _IAtomicSwap = {
 *   from: "0.0.12345",
 *   to: "0.0.67890",
 *   token_id: "0.0.54321",
 *   decimals: 8,
 *   amount: 1000,
 *   memo: "Token swap: HBAR for NFT"
 * };
 * 
 * // Advanced atomic swap with sender config
 * const advancedSwap: _IAtomicSwap = {
 *   from: "0.0.12345",
 *   to: "0.0.67890",
 *   token_id: "0.0.54321",
 *   decimals: 8,
 *   amount: 1000,
 *   sender: {
 *     key: myPublicKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   },
 *   memo: "DAO-governed token swap"
 * };
 * ```
 */
export interface _IAtomicSwap {
    /**
     * Sender account ID
     * @property {string} from
     * @description The account ID of the sender initiating the atomic swap.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * The sender must have sufficient balance and proper token associations.
     * @type {string}
     * @memberof _IAtomicSwap
     * @required true
     * @example "0.0.12345"
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - Sufficient balance
     */
    from: string;

    /**
     * Receiver account ID
     * @property {string} to
     * @description The account ID of the receiver in the atomic swap.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * The receiver must have proper token associations to receive the tokens.
     * @type {string}
     * @memberof _IAtomicSwap
     * @required true
     * @example "0.0.67890"
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - Not frozen (if applicable)
     */
    to: string;

    /**
     * Token identifier
     * @property {string} token_id
     * @description The unique identifier of the token being exchanged.
     * Must be a valid token ID in the format "0.0.{number}".
     * Supports both fungible and non-fungible tokens.
     * @type {string}
     * @memberof _IAtomicSwap
     * @required true
     * @example "0.0.54321"
     * @remarks
     * Requirements:
     * - Valid token format
     * - Active token status
     * - Not paused
     * - Proper permissions
     */
    token_id: string;

    /**
     * Token decimal places
     * @property {number} decimals
     * @description The number of decimal places for the token being exchanged.
     * Used to calculate the actual transfer amount and validate the transaction.
     * For NFTs, this should typically be 0.
     * @type {number}
     * @memberof _IAtomicSwap
     * @required true
     * @example 8
     * @remarks
     * Calculation:
     * Actual amount = amount * (10 ^ decimals)
     * Example with 8 decimals:
     * 1.5 tokens = 150000000 base units
     */
    decimals: number;

    /**
     * Transfer amount
     * @property {number} amount
     * @description The quantity of tokens to transfer in the atomic swap.
     * For fungible tokens, this is multiplied by 10^decimals.
     * For NFTs, this represents the number of NFTs to transfer.
     * @type {number}
     * @memberof _IAtomicSwap
     * @required true
     * @example 1000
     * @remarks
     * Validation:
     * - Must be positive
     * - Must not exceed balance
     * - Must respect token limits
     * - Must be whole number for NFTs
     */
    amount: number;

    /**
     * Transaction memo
     * @property {string} [memo]
     * @description Optional memo field for additional transaction context.
     * Can store metadata, references, or descriptions about the swap.
     * Limited to 100 bytes.
     * @type {string}
     * @memberof _IAtomicSwap
     * @required false
     * @example "Token swap: HBAR for NFT"
     * @remarks
     * Best practices:
     * - Keep memos concise
     * - Use for reference data
     * - Include swap purpose
     * - Add transaction context
     */
    memo?: string;

    /**
     * DAO configuration
     * @property {Object} [dao]
     * @description Optional DAO governance configuration for the atomic swap.
     * Enables DAO-controlled token exchanges with consensus tracking.
     * @type {{topicId: string, consensusTimestamp: string}}
     * @memberof _IAtomicSwap
     * @optional true
     * @example
     * ```typescript
     * {
     *   topicId: "0.0.98765",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     * @remarks
     * Features:
     * - DAO governance
     * - Consensus tracking
     * - Audit support
     * - Compliance validation
     */
    dao?: {
        topicId: string;
        consensusTimestamp: string;
    }

    /**
     * Sender configuration
     * @property {Object} [sender]
     * @description Optional configuration for the sender's transaction authorization.
     * Includes public key or key list for multi-sig and account identification.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IAtomicSwap
     * @optional true
     * @example
     * ```typescript
     * {
     *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   id: AccountId.fromString("0.0.12345")
     * }
     * ```
     * @remarks
     * Use cases:
     * - Multi-signature support
     * - Enhanced security
     * - Custom authorization
     * - Transaction validation
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }
}