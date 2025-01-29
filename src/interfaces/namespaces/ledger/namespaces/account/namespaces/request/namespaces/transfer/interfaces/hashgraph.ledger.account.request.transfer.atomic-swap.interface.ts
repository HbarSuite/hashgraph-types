import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../hashgraph.namespace'

/**
 * Interface for atomic swap operations on the Hedera network
 * @interface _IAtomicSwap
 * @description Defines the structure and requirements for atomic swap transactions,
 * enabling secure, simultaneous exchanges of different assets between accounts.
 * An atomic swap ensures transaction atomicity - either all transfers succeed or all fail.
 * @memberof IHashgraph.ILedger.IAccount.IRequest.ITransfer
 * @remarks
 * Key features of atomic swaps:
 * - Guaranteed atomicity (all-or-nothing execution)
 * - Support for multiple asset types
 * - Built-in security mechanisms
 * - DAO governance integration
 * - Transaction validation
 * 
 * Common use cases:
 * - Token-to-token exchanges
 * - HBAR-to-token swaps
 * - Multi-party trades
 * - Decentralized exchanges
 * @example
 * ```typescript
 * // Basic token swap
 * const basicSwap: _IAtomicSwap = {
 *   from: "0.0.12345",
 *   to: "0.0.67890",
 *   token_id: "0.0.54321",
 *   decimals: 8,
 *   amount: 1000,
 *   memo: "Token swap: 1000 tokens for 50 HBAR"
 * };
 * 
 * // DAO-governed swap
 * const daoSwap: _IAtomicSwap = {
 *   from: "0.0.12345",
 *   to: "0.0.67890",
 *   token_id: "0.0.54321",
 *   decimals: 8,
 *   amount: 1000,
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   },
 *   sender: {
 *     key: daoKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * ```
 */
export interface _IAtomicSwap {
    /**
     * Initiating account identifier
     * @property {string} from
     * @description Account ID of the party initiating the atomic swap
     * @type {string}
     * @memberof _IAtomicSwap
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must have sufficient balance
     * - Must authorize the transaction
     * - Must own the assets being swapped
     * @example
     * ```typescript
     * from: "0.0.12345" // Account initiating the swap
     * ```
     */
    from: string;

    /**
     * Receiving account identifier
     * @property {string} to
     * @description Account ID of the party receiving assets in the swap
     * @type {string}
     * @memberof _IAtomicSwap
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must have appropriate token associations
     * - Cannot be same as sender
     * - Must be able to receive the assets
     * @example
     * ```typescript
     * to: "0.0.67890" // Account receiving the swapped assets
     * ```
     */
    to: string;

    /**
     * Asset identifier for the swap
     * @property {string} token_id
     * @description Unique identifier of the token being exchanged
     * @type {string}
     * @memberof _IAtomicSwap
     * @required
     * @remarks
     * - Must be a valid token ID in shard.realm.num format
     * - Token must exist on the network
     * - Both parties must be associated with the token
     * - Token must be transferable
     * @example
     * ```typescript
     * token_id: "0.0.54321" // Token being swapped
     * ```
     */
    token_id: string;

    /**
     * Token precision configuration
     * @property {number} decimals
     * @description Number of decimal places supported by the token
     * @type {number}
     * @memberof _IAtomicSwap
     * @required
     * @remarks
     * - Determines token divisibility
     * - Affects amount calculations
     * - Must match token's configuration
     * - Used for display formatting
     * @example
     * ```typescript
     * // 8 decimals means smallest unit is 0.00000001
     * decimals: 8
     * ```
     */
    decimals: number;

    /**
     * Quantity being swapped
     * @property {number} amount
     * @description Amount of tokens to transfer in the swap
     * @type {number}
     * @memberof _IAtomicSwap
     * @required
     * @remarks
     * - Must be positive number
     * - Actual transfer amount = amount * (10 ^ decimals)
     * - Must not exceed available balance
     * - Subject to token's transfer limits
     * @example
     * ```typescript
     * // Transfer 1000 tokens
     * amount: 1000
     * ```
     */
    amount: number;

    /**
     * Transaction description
     * @property {string} memo
     * @description Optional note or reference for the swap
     * @type {string}
     * @memberof _IAtomicSwap
     * @optional
     * @remarks
     * - Maximum 100 characters
     * - Stored on-chain
     * - Publicly visible
     * - Useful for transaction tracking
     * @example
     * ```typescript
     * memo: "Swap: 1000 tokens for 50 HBAR"
     * ```
     */
    memo?: string;

    /**
     * DAO governance settings
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled atomic swaps
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IAtomicSwap
     * @optional
     * @remarks
     * - Required for DAO-governed swaps
     * - Must follow governance rules
     * - Requires consensus validation
     * - Enables decentralized control
     * @example
     * ```typescript
     * dao: {
     *   // DAO controlling the swap
     *   topicId: "0.0.34567",
     *   
     *   // Governance timestamp
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig

    /**
     * Transaction authorization details
     * @property {Object} sender
     * @description Authentication and identification for the swap initiator
     * @type {Object}
     * @memberof _IAtomicSwap
     * @optional
     * @remarks
     * - Provides transaction security
     * - Supports multi-signature setups
     * - Enables delegated execution
     * - Required for complex swaps
     * @example
     * ```typescript
     * sender: {
     *   // Authorization key
     *   key: myPublicKey,
     *   
     *   // Sender's account
     *   id: AccountId.fromString("0.0.12345")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }
}