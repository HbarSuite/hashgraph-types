import {
    AccountId, 
    ContractId, 
    ExchangeRate, 
    FileId, 
    ScheduleId, 
    Status, 
    TokenId, 
    TopicId, 
    TransactionId 
} from "@hashgraph/sdk";
import Long from "long";

/**
 * @file hashgraph.ledger.transaction.receipt.interface.ts
 * @module IHashgraph.ILedger.ITransaction._IReceipt
 * @description Interface representing a transaction receipt in the Hedera Hashgraph network.
 * A transaction receipt contains information about the result of a transaction,
 * including its status and any entities that may have been created.
 * @category Interfaces
 * @subcategory Transaction
 * @since 2.0.0
 * @public
 * 
 * @example
 * ```typescript
 * // Example of using the receipt interface
 * const receipt: _IReceipt = {
 *   status: Status.SUCCESS,
 *   accountId: AccountId.fromString("0.0.1234"),
 *   fileId: null,
 *   contractId: null,
 *   topicId: null,
 *   tokenId: null,
 *   scheduleId: null,
 *   exchangeRate: null,
 *   nextExchangeRate: null,
 *   topicSequenceNumber: null,
 *   topicRunningHash: null,
 *   totalSupply: null,
 *   scheduledTransactionId: null,
 *   serials: [],
 *   duplicates: [],
 *   children: [],
 *   nodeId: null
 * };
 * ```
 */
export interface _IReceipt {
    /**
     * The status of the transaction (success, failure, or unknown)
     * @type {Status}
     * @memberof _IReceipt
     * @public
     */
    status: Status;
    
    /**
     * The account ID, if a new account was created by this transaction
     * @type {AccountId | null}
     * @memberof _IReceipt
     * @public
     */
    accountId: AccountId | null;
    
    /**
     * The file ID, if a new file was created by this transaction
     * @type {FileId | null}
     * @memberof _IReceipt
     * @public
     */
    fileId: FileId | null;
    
    /**
     * The contract ID, if a new contract was created by this transaction
     * @type {ContractId | null}
     * @memberof _IReceipt
     * @public
     */
    contractId: ContractId | null;
    
    /**
     * The topic ID, if a new consensus topic was created by this transaction
     * @type {TopicId | null}
     * @memberof _IReceipt
     * @public
     */
    topicId: TopicId | null;
    
    /**
     * The token ID, if a new token was created by this transaction
     * @type {TokenId | null}
     * @memberof _IReceipt
     * @public
     */
    tokenId: TokenId | null;
    
    /**
     * The schedule ID, if a new schedule was created by this transaction
     * @type {ScheduleId | null}
     * @memberof _IReceipt
     * @public
     */
    scheduleId: ScheduleId | null;
    
    /**
     * The current exchange rate of Hbars to cents (USD)
     * @type {ExchangeRate | null}
     * @memberof _IReceipt
     * @public
     */
    exchangeRate: ExchangeRate | null;
    
    /**
     * The next exchange rate of Hbars to cents (USD)
     * @type {ExchangeRate | null}
     * @memberof _IReceipt
     * @public
     */
    nextExchangeRate: ExchangeRate | null;
    
    /**
     * The updated sequence number for a consensus service topic
     * @type {Long | null}
     * @memberof _IReceipt
     * @public
     */
    topicSequenceNumber: Long | null;
    
    /**
     * The updated running hash for a consensus service topic
     * @type {Uint8Array | null}
     * @memberof _IReceipt
     * @public
     */
    topicRunningHash: Uint8Array | null;
    
    /**
     * The updated total supply for a token
     * @type {Long | null}
     * @memberof _IReceipt
     * @public
     */
    totalSupply: Long | null;
    
    /**
     * The ID of a scheduled transaction
     * @type {TransactionId | null}
     * @memberof _IReceipt
     * @public
     */
    scheduledTransactionId: TransactionId | null;
    
    /**
     * Serial numbers of NFTs minted by this transaction
     * @type {Long[]}
     * @memberof _IReceipt
     * @public
     */
    serials: Long[];
    
    /**
     * Receipts for duplicate transactions
     * @type {_IReceipt[]}
     * @memberof _IReceipt
     * @public
     */
    duplicates: _IReceipt[];
    
    /**
     * Child transaction receipts
     * @type {_IReceipt[]}
     * @memberof _IReceipt
     * @public
     */
    children: _IReceipt[];
    
    /**
     * The node ID, if a node was created, updated, or deleted by this transaction
     * @type {Long | null}
     * @memberof _IReceipt
     * @public
     */
    nodeId: Long | null;
}