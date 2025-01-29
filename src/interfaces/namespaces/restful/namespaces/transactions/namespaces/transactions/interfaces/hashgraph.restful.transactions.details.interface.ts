import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _ITransfer } from '../../transfer/hashgraph.restful.transactions.transfer.namespace'
import { _TypeEnum } from './hashgraph.restful.transactions.type.enum'

/**
 * @file hashgraph.restful.transactions.details.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the detailed structure for transactions in the Hashgraph Network REST API.
 * This interface represents the complete transaction information including execution details,
 * transfers, and custom fees.
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transaction Details Interface
 * @interface _IDetails
 * @description Represents the complete details of a transaction in the Hashgraph network.
 * This interface captures all information about a transaction, including:
 * - Core transaction data and metadata
 * - Execution details and status
 * - All associated transfers (HBAR, tokens, NFTs)
 * - Custom fees and assessments
 * - Timing and validity parameters
 * Used for detailed transaction analysis and tracking.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a detailed crypto transfer transaction
 * const txDetails: _IDetails = {
 *   transaction_id: "0.0.1234@1234567890.000000000",
 *   consensus_timestamp: "1234567890.000000000",
 *   name: _TypeEnum.CryptoTransfer,
 *   charged_tx_fee: 500000,  // 0.005 HBAR
 *   max_fee: "1000000",      // 0.01 HBAR max
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
 *   ],
 *   memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U="  // "Transfer to Alice"
 * };
 * 
 * // Example of a detailed token transfer with custom fees
 * const tokenTxDetails: _IDetails = {
 *   transaction_id: "0.0.1234@1234567890.000000001",
 *   name: _TypeEnum.TokenTransfer,
 *   token_transfers: [
 *     {
 *       token_id: "0.0.9012",
 *       account: "0.0.1234",
 *       amount: 1000
 *     }
 *   ],
 *   assessed_custom_fees: [
 *     {
 *       amount: 50,  // 50 tokens as fee
 *       collector_account_id: "0.0.8765",
 *       token_id: "0.0.9012"
 *     }
 *   ]
 * };
 * 
 * // Example of validating transaction details
 * const validateDetails = (details: _IDetails): boolean => {
 *   const timestampPattern = /^\d+\.\d+$/;
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   
 *   return (
 *     !!details.transaction_id &&
 *     !!details.name &&
 *     timestampPattern.test(details.consensus_timestamp ?? "") &&
 *     (!details.node || accountPattern.test(details.node)) &&
 *     (details.charged_tx_fee ?? 0) <= parseInt(details.max_fee ?? "0")
 *   );
 * };
 * ```
 */
export interface _IDetails {
    /**
     * Transaction Bytes
     * @type {string}
     * @description The raw transaction data in hexadecimal format.
     * Properties:
     * - Optional field
     * - Hexadecimal string format
     * - Contains complete transaction data
     * - Used for transaction verification
     * - Can be null for some transaction types
     * @required false
     * @memberof _IDetails
     * @since 2.0.0
     * @example "0x1234abcd..."  // Truncated for brevity
     */
    bytes?: string | null;

    /**
     * Transaction Fee
     * @type {number}
     * @description The actual fee charged for transaction execution.
     * Properties:
     * - Optional field
     * - Amount in tinybars (1 HBAR = 100,000,000 tinybars)
     * - Network-calculated based on resource usage
     * - Must not exceed max_fee
     * - Includes all operation costs
     * @required false
     * @memberof _IDetails
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
     * @memberof _IDetails
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
     * @memberof _IDetails
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
     * - Set by transaction creator
     * @required false
     * @memberof _IDetails
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
     * - Human-readable after decoding
     * @required false
     * @memberof _IDetails
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
     * - Defines validation rules
     * @required false
     * @see {@link _TypeEnum}
     * @memberof _IDetails
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
     * - Includes serial numbers
     * @required false
     * @see {@link _ITransfer.INft}
     * @memberof _IDetails
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
     * - Part of consensus process
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IDetails
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
     * - Prevents duplicate transactions
     * @required false
     * @memberof _IDetails
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
     * - Enables transaction grouping
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IDetails
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
     * - Used for status tracking
     * @required false
     * @memberof _IDetails
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
     * - Links to schedule entity
     * @required false
     * @default false
     * @memberof _IDetails
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
     * - Includes recipient accounts
     * @required false
     * @see {@link IHashgraph.IRestful.IStaking.IReward.ITransfer}
     * @memberof _IDetails
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
     * - Includes token IDs
     * @required false
     * @see {@link _ITransfer.IToken}
     * @memberof _IDetails
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
     * - Unique transaction identifier
     * @required false
     * @memberof _IDetails
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
     * - Includes payer account
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))@\d+\.\d+$
     * @memberof _IDetails
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
     * - Includes account balances
     * @required false
     * @see {@link _ITransfer.IEntity}
     * @memberof _IDetails
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
     * - Affects execution window
     * @required false
     * @memberof _IDetails
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
     * - Prevents early execution
     * @required false
     * @pattern ^\d+\.\d+$
     * @memberof _IDetails
     * @since 2.0.0
     * @example "1234567890.000000000"
     */
    valid_start_timestamp?: string;

    /**
     * Custom Fee Assessments
     * @type {Array<IHashgraph.IRestful.ICustomFees.IAssessedCustomFee>}
     * @description Collection of custom fees assessed during execution.
     * Properties:
     * - Optional field
     * - Present when custom fees apply
     * - Contains fee calculations
     * - Includes collector accounts
     * - Tracks fee distributions
     * @required false
     * @see {@link IHashgraph.IRestful.ICustomFees.IAssessedCustomFee}
     * @memberof _IDetails
     * @since 2.0.0
     */
    assessed_custom_fees?: Array<IHashgraph.IRestful.ICustomFees.IAssessedCustomFee>;
}