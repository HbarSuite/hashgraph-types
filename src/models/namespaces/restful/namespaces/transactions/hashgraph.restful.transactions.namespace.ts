import { _Schedule } from './namespaces/schedule/hashgraph.restful.transactions.schedule.namespace'
import { _Transaction } from './namespaces/transactions/hashgraph.restful.transactions.transaction.namespace'
import { _Transfer } from './namespaces/transfer/hashgraph.restful.transactions.transfer.namespace'

/**
 * @file hashgraph.restful.transactions.namespace.ts
 * @namespace _Transactions
 * @description Comprehensive namespace for Hedera transaction-related operations and models.
 * Implements standardized interfaces and types for managing all aspects of Hedera
 * transactions through the RESTful API, including:
 * - Core transaction operations (create, submit, query)
 * - Transfer operations (crypto, tokens, NFTs)
 * - Scheduled transactions
 * - Transaction validation and processing
 * - Response handling and pagination
 * 
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Import and use transaction models
 * const transaction = new _Transactions.Transaction.Model({
 *   transaction_id: '0.0.123@1234567890.000000000',
 *   node: '0.0.3',
 *   valid_duration_seconds: 120,
 *   max_fee: '1000000000',
 *   memo: 'Example transaction'
 * });
 * 
 * // Create a token transfer
 * const transfer = new _Transactions.Transfer.Token({
 *   token_id: '0.0.789012',
 *   account: '0.0.123456',
 *   amount: '1000',
 *   is_approval: false
 * });
 * 
 * // Schedule a future transaction
 * const schedule = new _Transactions.Schedule.Model({
 *   creator_account_id: '0.0.123456',
 *   payer_account_id: '0.0.789012',
 *   expiration_time: '2024-01-01T00:00:00.000Z',
 *   wait_for_expiry: false
 * });
 * ```
 */
export namespace _Transactions {
    /**
     * Core transaction functionality
     * @type {_Transaction}
     * @description Comprehensive models and interfaces for managing Hedera transactions.
     * Provides functionality for:
     * - Transaction creation and submission
     * - Status tracking and queries
     * - Fee calculation and management
     * - Transaction receipt handling
     * - Error processing and validation
     * 
     * @example
     * ```typescript
     * // Create and configure a transaction
     * const txn = new _Transactions.Transaction.Model({
     *   transaction_id: '0.0.123456@1234567890.000000000',
     *   node: '0.0.3',
     *   valid_duration_seconds: 120,
     *   max_fee: '1000000000',
     *   charged_fee: '500000000',
     *   memo: 'Example transaction',
     *   consensus_timestamp: '1234567890.000000000'
     * });
     * 
     * // Query transaction status
     * const status = await _Transactions.Transaction.getStatus(txn.transaction_id);
     * ```
     */
    export import Transaction = _Transaction

    /**
     * Transfer operations and models
     * @type {_Transfer}
     * @description Comprehensive interfaces for managing all types of Hedera transfers:
     * - Cryptocurrency (HBAR) transfers
     * - Fungible token transfers
     * - Non-fungible token transfers
     * - Atomic swaps
     * - Allowance-based transfers
     * 
     * Features include:
     * - Multi-party transfers
     * - Fractional transfers
     * - Transfer validation
     * - Fee handling
     * 
     * @example
     * ```typescript
     * // Create a token transfer
     * const tokenTransfer = new _Transactions.Transfer.Token({
     *   token_id: '0.0.789012',
     *   account: '0.0.123456',
     *   amount: '1000',
     *   is_approval: false,
     *   decimals: 8
     * });
     * 
     * // Create an NFT transfer
     * const nftTransfer = new _Transactions.Transfer.NFT({
     *   token_id: '0.0.789012',
     *   sender: '0.0.123456',
     *   receiver: '0.0.345678',
     *   serial_numbers: ['1', '2', '3']
     * });
     * ```
     */
    export import Transfer = _Transfer

    /**
     * Scheduled transaction management
     * @type {_Schedule}
     * @description Comprehensive interfaces for managing scheduled (future) transactions:
     * - Schedule creation and configuration
     * - Multi-signature coordination
     * - Execution time management
     * - Schedule deletion and updates
     * 
     * Features include:
     * - Flexible scheduling options
     * - Expiration handling
     * - Required signatures tracking
     * - Fee management
     * 
     * @example
     * ```typescript
     * // Create a scheduled transaction
     * const schedule = new _Transactions.Schedule.Model({
     *   creator_account_id: '0.0.123456',
     *   payer_account_id: '0.0.789012',
     *   expiration_time: '2024-01-01T00:00:00.000Z',
     *   wait_for_expiry: false,
     *   memo: 'Scheduled token transfer',
     *   required_signatures: ['0.0.123456', '0.0.789012']
     * });
     * 
     * // Add signature to scheduled transaction
     * await schedule.addSignature({
     *   account_id: '0.0.123456',
     *   signature: 'ed25519signature'
     * });
     * ```
     */
    export import Schedule = _Schedule
}