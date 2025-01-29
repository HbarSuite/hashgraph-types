import { _ISchedule } from './namespaces/schedule/hashgraph.restful.transactions.schedule.interface'
import { _ITransaction } from './namespaces/transactions/hashgraph.restful.transactions.transaction.namespace'
import { _ITransfer } from './namespaces/transfer/hashgraph.restful.transactions.transfer.namespace'

/**
 * @file hashgraph.restful.transactions.namespace.ts
 * @module @hashgraph/sdk
 * @description Defines the transactions namespace for the Hashgraph Network REST API.
 * This namespace provides comprehensive types and interfaces for managing all transaction-related
 * operations, including standard transactions, transfers, and scheduled transactions.
 * @category Namespaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Transactions Namespace
 * @namespace _ITransactions
 * @description Represents the root namespace for all transaction-related functionality in the Hashgraph network.
 * This namespace encapsulates:
 * - Standard transaction operations and responses
 * - Transfer operations (cryptocurrency, NFT, tokens)
 * - Scheduled transaction management
 * - Transaction status tracking
 * - Transaction history and receipts
 * @category Namespaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of using the transactions namespace
 * import { _ITransactions } from '@hashgraph/sdk';
 * 
 * // Using transaction interfaces
 * const txResponse: _ITransactions.ITransaction.IResponse = {
 *   transaction_id: "0.0.1234@1234567890.000000000",
 *   status: "SUCCESS",
 *   hash: "0x1234..."
 * };
 * 
 * // Using transfer interfaces
 * const transfer: _ITransactions.ITransfer.IEntity = {
 *   from: "0.0.1234",
 *   to: "0.0.5678",
 *   amount: 100000000  // 1 HBAR
 * };
 * 
 * // Using schedule interfaces
 * const schedule: _ITransactions.ISchedule = {
 *   creator_account_id: "0.0.1234",
 *   payer_account_id: "0.0.5678",
 *   transaction_body: "..."
 * };
 * ```
 */
export namespace _ITransactions {
    /**
     * Transaction Namespace
     * @type {_ITransaction}
     * @description Provides comprehensive interfaces for managing Hashgraph transactions.
     * Key features:
     * - Transaction creation and submission
     * - Response handling and status tracking
     * - Transaction ID and hash management
     * - Receipt and record access
     * 
     * Core components:
     * - Transaction entity structures
     * - Response formats
     * - Status tracking interfaces
     * 
     * @see {@link _ITransaction}
     * @memberof _ITransactions
     * @since 2.0.0
     */
    export import ITransaction = _ITransaction;

    /**
     * Transfer Namespace
     * @type {_ITransfer}
     * @description Provides interfaces for all transfer-related operations.
     * Supported transfer types:
     * - Cryptocurrency (HBAR) transfers
     * - Token transfers (fungible and non-fungible)
     * - NFT transfers
     * - Atomic swaps
     * 
     * Key features:
     * - Multi-party transfer support
     * - Batch transfer operations
     * - Transfer status tracking
     * - Balance verification
     * 
     * @see {@link _ITransfer}
     * @memberof _ITransactions
     * @since 2.0.0
     */
    export import ITransfer = _ITransfer;

    /**
     * Schedule Namespace
     * @type {_ISchedule}
     * @description Provides interfaces for managing scheduled transactions.
     * Key features:
     * - Future transaction scheduling
     * - Multi-signature coordination
     * - Schedule modification and deletion
     * - Execution time management
     * 
     * Core components:
     * - Schedule creation and management
     * - Signature collection
     * - Execution parameters
     * - Status tracking
     * 
     * @see {@link _ISchedule}
     * @memberof _ITransactions
     * @since 2.0.0
     */
    export import ISchedule = _ISchedule;
}