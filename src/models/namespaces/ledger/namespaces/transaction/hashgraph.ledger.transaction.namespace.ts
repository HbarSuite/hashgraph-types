import { _Receipt } from "./models/hashgraph.ledger.transaction.receipt.model";
import { _Record } from "./models/hashgraph.ledger.transaction.record.model";

/**
 * @file transaction.namespace.ts
 * @namespace _Transaction
 * @description Namespace for Hashgraph transaction-related interfaces and types.
 * Provides functionality for handling transaction signing and multisig operations.
 * @category Hashgraph
 * @subcategory Transaction
 * @since 2.0.0
 */
export namespace _Transaction {
    /**
     * Transaction Record Model
     * @class Record
     * @extends _Record
     * @description Represents a transaction record from the Hedera network.
     * 
     */
    export class Record extends _Record {}

    /**
     * Transaction Receipt Model
     * @class Receipt
     * @extends _Receipt
     * @description Represents a transaction receipt from the Hedera network.
     * 
     */
    export class Receipt extends _Receipt {}
}