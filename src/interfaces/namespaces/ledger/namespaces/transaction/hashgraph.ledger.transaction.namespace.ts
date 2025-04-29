/**
 * @file transaction.namespace.ts
 * @module IHashgraph.ILedger.ITransaction
 * @description Defines the namespace for Hashgraph transaction operations and types
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Namespaces
 * @subcategory Transaction
 */

import { _IReceipt } from "./interfaces/hashgraph.ledger.transaction.receipt.interface";
import { _IRecord } from "./interfaces/hashgraph.ledger.transaction.record.interface";

/**
 * Transaction Namespace
 * @namespace _ITransaction
 * @description Namespace containing interfaces and types for Hashgraph transaction operations.
 * Provides comprehensive type definitions for creating, signing, and executing transactions
 * on the Hedera network.
 * 
 * @remarks
 * Key features:
 * - Transaction creation
 * - Transaction signing
 * - Fee calculation
 * - Execution handling
 * 
 * Transaction types:
 * - Cryptocurrency transfers
 * - Token operations
 * - File operations
 * - Topic operations
 * 
 * Security aspects:
 * - Multi-signature support
 * - Key validation
 * - Node selection
 * - Fee management
 * 
 * @memberof IHashgraph.ILedger
 * @category Interfaces
 * @subcategory Transaction
 * @public
 * 
 * @example
 * ```typescript
 * // Basic cryptocurrency transfer transaction
 * const transfer: IHashgraph.ILedger._ITransaction.ITransfer = {
 *   from: "0.0.12345",
 *   to: "0.0.67890",
 *   amount: "100",
 *   memo: "Payment for services"
 * };
 * 
 */
export namespace _ITransaction {
    /**
     * Interface representing a transaction record from the Hedera network.
     * Contains the consensus result for a transaction, which might not be currently known,
     * or may succeed or fail.
     */
    export type IRecord = _IRecord;

    /**
     * Interface representing a transaction receipt from the Hedera network.
     * Contains the consensus result for a transaction, which might not be currently known,
     * or may succeed or fail.
     */
    export type IReceipt = _IReceipt;
}