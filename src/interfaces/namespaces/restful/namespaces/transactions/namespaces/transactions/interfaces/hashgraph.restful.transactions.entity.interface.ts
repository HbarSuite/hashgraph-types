import { _ITransactions } from '../../../hashgraph.restful.transactions.namespace'
import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _TypeEnum } from './hashgraph.restful.transactions.type.enum'
import { _ITransfer } from '../../transfer/hashgraph.restful.transactions.transfer.namespace'

/**
 * @file hashgraph.restful.transactions.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for transaction entities in the Hashgraph Network REST API.
 * This interface represents individual transactions with their complete details and state.
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Entity Interface
 * @interface _IEntity
 * @description Represents a transaction in the Hashgraph network.
 * This interface captures all essential information about a transaction, including:
 * - Transaction identification and metadata
 * - Execution details and status
 * - Associated transfers (HBAR, tokens, NFTs)
 * - Timing and validity parameters
 * Used for tracking and managing individual transactions.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a basic transaction
 * const transaction: _IEntity = {
 *   transaction_id: "0.0.1234@1234567890.000000000",
 *   consensus_timestamp: "1234567890.000000000",
 *   name: _TypeEnum.CryptoTransfer,
 *   charged_tx_fee: 500000,  // 0.005 HBAR
 *   result: "SUCCESS",
 *   transfers: [
 *     {
 *       account: "0.0.1234",
 *       amount: -100000000  // -1 HBAR
 *     },
 *     {
 *       account: "0.0.5678",
 *       amount: 100000000   // +1 HBAR
 *     }
 *   ]
 * };
 * 
 * // Example of a token transfer transaction
 * const tokenTx: _IEntity = {
 *   transaction_id: "0.0.1234@1234567890.000000001",
 *   name: _TypeEnum.TokenTransfer,
 *   token_transfers: [
 *     {
 *       token_id: "0.0.9012",
 *       account: "0.0.1234",
 *       amount: 1000
 *     }
 *   ],
 *   memo_base64: "VG9rZW4gdHJhbnNmZXI="  // "Token transfer"
 * };
 * 
 * // Example of validating a transaction
 * const validateTransaction = (tx: _IEntity): boolean => {
 *   const timestampPattern = /^\d+\.\d+$/;
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   
 *   return (
 *     !!tx.transaction_id &&
 *     !!tx.name &&
 *     timestampPattern.test(tx.consensus_timestamp ?? "") &&
 *     (!tx.node || accountPattern.test(tx.node))
 *   );
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Transaction Bytes
     * @type {string}
     * @description The raw transaction data in hexadecimal format.
     * Properties:
     * - Optional field
     * - Hexadecimal string format
     * - Contains complete transaction data
     * - Used for transaction verification
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0a1b2c3d..."  // Truncated for brevity
     */
    bytes?: string;

    /**
     * Transaction Fee
     * @type {number}
     * @description The actual fee charged for transaction execution.
     * Properties:
     * - Optional field
     * - Amount in tinybars (1 HBAR = 100,000,000 tinybars)
     * - Network-calculated based on resource usage
     * - Must not exceed max_fee
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example 500000  // 0.005 HBAR
     */
    charged_tx_fee?: number;

    /**
     * Consensus Timestamp
     * @type {string}
     * @description The network consensus timestamp of transaction finality.
     * Format: `seconds.nanoseconds` (e.g., "1234567890.000000000")
     * Properties:
     * - Optional field (set by network)
     * - Network-assigned timestamp
     * - Used for transaction ordering
     * - Represents finality achievement
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    consensus_timestamp?: string;

    /**
     * Entity Identifier
     * @type {string}
     * @description The Hedera entity ID involved in the transaction.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field
     * - Must be a valid Hedera entity ID
     * - Can reference various entity types
     * - Used for entity operations
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234"
     */
    entity_id?: string;

    /**
     * Maximum Fee
     * @type {string}
     * @description The maximum fee the payer authorizes.
     * Properties:
     * - Optional field
     * - Amount in tinybars
     * - Upper limit for charged_tx_fee
     * - Transaction fails if exceeded
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "1000000"  // Max 0.01 HBAR
     */
    max_fee?: string;

    /**
     * Transaction Memo
     * @type {string}
     * @description Additional transaction information in base64.
     * Properties:
     * - Optional field
     * - Base64 encoded string
     * - Maximum 100 bytes after decoding
     * - Used for transaction notes
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "VG9rZW4gdHJhbnNmZXI="  // "Token transfer"
     */
    memo_base64?: string;

    /**
     * Transaction Type
     * @type {_TypeEnum}
     * @description The type of transaction operation.
     * Properties:
     * - Optional field
     * - Determines transaction behavior
     * - Affects required parameters
     * - Used for transaction routing
     * @required false
     * @see {@link _TypeEnum}
     * @memberof _IEntity
     * @since 2.0.0
     * @example _TypeEnum.CryptoTransfer
     */
    name?: _TypeEnum;

    /**
     * NFT Transfer List
     * @type {Array<_ITransfer.INft>}
     * @description Collection of NFT transfers in this transaction.
     * Properties:
     * - Optional field
     * - Present for NFT operations
     * - Contains transfer details
     * - Tracks NFT movement
     * @required false
     * @see {@link _ITransfer.INft}
     * @memberof _IEntity
     * @since 2.0.0
     */
    nft_transfers?: Array<_ITransfer.INft>;

    /**
     * Submitting Node
     * @type {string}
     * @description The node that submitted the transaction.
     * Format: `shard.realm.num` (e.g., "0.0.3")
     * Properties:
     * - Optional field
     * - Must be a valid node ID
     * - Used for transaction routing
     * - Affects network fees
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.3"
     */
    node?: string;

    /**
     * Transaction Nonce
     * @type {number}
     * @description Sequential number for transaction ordering.
     * Properties:
     * - Optional field
     * - Used with identical timestamps
     * - Network-assigned value
     * - Ensures deterministic ordering
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example 1
     */
    nonce?: number;

    /**
     * Parent Transaction Time
     * @type {string}
     * @description Parent transaction's consensus timestamp.
     * Format: `seconds.nanoseconds` (e.g., "1234567890.000000000")
     * Properties:
     * - Optional field
     * - Present for child transactions
     * - Links related transactions
     * - Used for transaction tracking
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    parent_consensus_timestamp?: string;

    /**
     * Transaction Result
     * @type {string}
     * @description The execution outcome of the transaction.
     * Properties:
     * - Optional field
     * - Standard result codes
     * - Indicates success/failure
     * - Contains error details
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "SUCCESS"
     */
    result?: string;

    /**
     * Schedule Status
     * @type {boolean}
     * @description Indicates if this is a scheduled transaction.
     * Properties:
     * - Optional field
     * - true: scheduled execution
     * - false: immediate execution
     * - Affects execution timing
     * @required false
     * @default false
     * @memberof _IEntity
     * @since 2.0.0
     * @example false
     */
    scheduled?: boolean;

    /**
     * Staking Reward Transfers
     * @type {Array<IHashgraph.IRestful.IStaking.IReward.ITransfer>}
     * @description Collection of staking reward distributions.
     * Properties:
     * - Optional field
     * - Present for reward distributions
     * - Contains reward details
     * - Tracks staking rewards
     * @required false
     * @see {@link IHashgraph.IRestful.IStaking.IReward.ITransfer}
     * @memberof _IEntity
     * @since 2.0.0
     */
    staking_reward_transfers?: Array<IHashgraph.IRestful.IStaking.IReward.ITransfer>;

    /**
     * Token Transfer List
     * @type {Array<_ITransfer.IToken>}
     * @description Collection of token transfers in this transaction.
     * Properties:
     * - Optional field
     * - Present for token operations
     * - Contains transfer details
     * - Tracks token movement
     * @required false
     * @see {@link _ITransfer.IToken}
     * @memberof _IEntity
     * @since 2.0.0
     */
    token_transfers?: Array<_ITransfer.IToken>;

    /**
     * Transaction Hash
     * @type {string}
     * @description The SHA384 hash of transaction contents.
     * Properties:
     * - Optional field
     * - Hexadecimal string format
     * - Used for verification
     * - Ensures data integrity
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0x1234..."  // Truncated for brevity
     */
    transaction_hash?: string;

    /**
     * Transaction Identifier
     * @type {string}
     * @description The unique identifier for this transaction.
     * Format: `shard.realm.num@seconds.nanos`
     * Properties:
     * - Optional field
     * - Network-wide unique ID
     * - Used for transaction lookup
     * - Contains timing information
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))@\d+\.\d+$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234@1234567890.000000000"
     */
    transaction_id?: string;

    /**
     * HBAR Transfer List
     * @type {Array<_ITransfer.IEntity>}
     * @description Collection of HBAR transfers in this transaction.
     * Properties:
     * - Optional field
     * - Present for HBAR transfers
     * - Contains transfer details
     * - Tracks HBAR movement
     * @required false
     * @see {@link _ITransfer.IEntity}
     * @memberof _IEntity
     * @since 2.0.0
     */
    transfers?: Array<_ITransfer.IEntity>;

    /**
     * Validity Duration
     * @type {string}
     * @description The transaction's valid time window in seconds.
     * Properties:
     * - Optional field
     * - Duration from valid_start_timestamp
     * - Transaction expires after window
     * - Used for transaction timing
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     * @example "120"  // Valid for 2 minutes
     */
    valid_duration_seconds?: string;

    /**
     * Validity Start Time
     * @type {string}
     * @description The earliest allowed execution time.
     * Format: `seconds.nanoseconds` (e.g., "1234567890.000000000")
     * Properties:
     * - Optional field
     * - Start of validity window
     * - Used with valid_duration_seconds
     * - Controls execution timing
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    valid_start_timestamp?: string;
}