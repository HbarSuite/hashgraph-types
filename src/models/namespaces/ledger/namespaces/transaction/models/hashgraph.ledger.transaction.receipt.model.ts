import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';
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
import { ApiProperty } from '@nestjs/swagger';

/**
 * @file hashgraph.ledger.transaction.receipt.model.ts
 * @module IHashgraph.ILedger.ITransaction._Receipt
 * @description Model representing a transaction receipt in the Hedera Hashgraph network.
 * A transaction receipt contains information about the result of a transaction,
 * including its status and any entities that may have been created.
 * @category Models
 * @subcategory Transaction
 * @since 2.0.0
 * @public
 * 
 * @example
 * ```typescript
 * const receipt = new _Receipt({
 *   status: Status.SUCCESS,
 *   accountId: AccountId.fromString("0.0.1234"),
 *   tokenId: TokenId.fromString("0.0.5678")
 * });
 * ```
 */
export class _Receipt implements IHashgraph.ILedger.ITransaction.IReceipt {
    /**
     * The status of the transaction (success, failure, or unknown)
     * @type {Status}
     * @memberof _Receipt
     * @public
     * @description Indicates whether the transaction succeeded, failed, or is in an unknown state
     */
    @ApiProperty({
        description: 'The status of the transaction (success, failure, or unknown)',
        example: 'SUCCESS'
    })
    public status: Status;

    /**
     * The account ID, if a new account was created by this transaction
     * @type {AccountId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created account, or null if no account was created
     */
    @ApiProperty({
        description: 'The account ID, if a new account was created by this transaction',
        type: String,
        example: '0.0.1234',
        nullable: true
    })
    public accountId: AccountId | null;

    /**
     * The file ID, if a new file was created by this transaction
     * @type {FileId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created file, or null if no file was created
     */
    @ApiProperty({
        description: 'The file ID, if a new file was created by this transaction',
        type: String,
        example: '0.0.5678',
        nullable: true
    })
    public fileId: FileId | null;

    /**
     * The contract ID, if a new contract was created by this transaction
     * @type {ContractId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created smart contract, or null if no contract was created
     */
    @ApiProperty({
        description: 'The contract ID, if a new contract was created by this transaction',
        type: String,
        example: '0.0.9012',
        nullable: true
    })
    public contractId: ContractId | null;

    /**
     * The topic ID, if a new consensus topic was created by this transaction
     * @type {TopicId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created consensus topic, or null if no topic was created
     */
    @ApiProperty({
        description: 'The topic ID, if a new consensus topic was created by this transaction',
        type: String,
        example: '0.0.3456',
        nullable: true
    })
    public topicId: TopicId | null;

    /**
     * The token ID, if a new token was created by this transaction
     * @type {TokenId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created token, or null if no token was created
     */
    @ApiProperty({
        description: 'The token ID, if a new token was created by this transaction',
        type: String,
        example: '0.0.7890',
        nullable: true
    })
    public tokenId: TokenId | null;

    /**
     * The schedule ID, if a new schedule was created by this transaction
     * @type {ScheduleId | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the newly created schedule, or null if no schedule was created
     */
    @ApiProperty({
        description: 'The schedule ID, if a new schedule was created by this transaction',
        type: String,
        example: '0.0.2345',
        nullable: true
    })
    public scheduleId: ScheduleId | null;

    /**
     * The current exchange rate of Hbars to cents (USD)
     * @type {ExchangeRate | null}
     * @memberof _Receipt
     * @public
     * @description The exchange rate in effect when the transaction was processed
     */
    @ApiProperty({
        description: 'The current exchange rate of Hbars to cents (USD)',
        type: Object,
        nullable: true
    })
    public exchangeRate: ExchangeRate | null;

    /**
     * The next exchange rate of Hbars to cents (USD)
     * @type {ExchangeRate | null}
     * @memberof _Receipt
     * @public
     * @description The exchange rate that will go into effect in the next rate period
     */
    @ApiProperty({
        description: 'The next exchange rate of Hbars to cents (USD)',
        type: Object,
        nullable: true
    })
    public nextExchangeRate: ExchangeRate | null;

    /**
     * The updated sequence number for a consensus service topic
     * @type {Long | null}
     * @memberof _Receipt
     * @public
     * @description The sequence number assigned to a ConsensusSubmitMessage transaction
     */
    @ApiProperty({
        description: 'The updated sequence number for a consensus service topic',
        type: Number,
        example: 42,
        nullable: true
    })
    public topicSequenceNumber: Long | null;

    /**
     * The updated running hash for a consensus service topic
     * @type {Uint8Array | null}
     * @memberof _Receipt
     * @public
     * @description The running hash of a topic after a ConsensusSubmitMessage transaction
     */
    @ApiProperty({
        description: 'The updated running hash for a consensus service topic',
        type: 'string',
        format: 'byte',
        nullable: true
    })
    public topicRunningHash: Uint8Array | null;

    /**
     * The updated total supply for a token
     * @type {Long | null}
     * @memberof _Receipt
     * @public
     * @description The new total supply of a token after a mint/burn operation
     */
    @ApiProperty({
        description: 'The updated total supply for a token',
        type: Number,
        example: 1000000,
        nullable: true
    })
    public totalSupply: Long | null;

    /**
     * The ID of a scheduled transaction
     * @type {TransactionId | null}
     * @memberof _Receipt
     * @public
     * @description The transaction ID of the scheduled transaction that was executed
     */
    @ApiProperty({
        description: 'The ID of a scheduled transaction',
        type: String,
        example: '0.0.1234@1626282600.000000000',
        nullable: true
    })
    public scheduledTransactionId: TransactionId | null;

    /**
     * Serial numbers of NFTs minted by this transaction
     * @type {Long[]}
     * @memberof _Receipt
     * @public
     * @description Array of serial numbers for NFTs that were minted in this transaction
     */
    @ApiProperty({
        description: 'Serial numbers of NFTs minted by this transaction',
        type: [Number],
        example: [1, 2, 3, 4, 5]
    })
    public serials: Long[];

    /**
     * Receipts for duplicate transactions
     * @type {_Receipt[]}
     * @memberof _Receipt
     * @public
     * @description Array of receipts for transactions that were identified as duplicates
     */
    @ApiProperty({
        description: 'Receipts for duplicate transactions',
        type: [_Receipt]
    })
    public duplicates: _Receipt[];

    /**
     * Child transaction receipts
     * @type {_Receipt[]}
     * @memberof _Receipt
     * @public
     * @description Array of receipts for child transactions that were executed as part of this transaction
     */
    @ApiProperty({
        description: 'Child transaction receipts',
        type: [_Receipt]
    })
    public children: _Receipt[];

    /**
     * The node ID, if a node was created, updated, or deleted by this transaction
     * @type {Long | null}
     * @memberof _Receipt
     * @public
     * @description The ID of the node that was affected by this transaction
     */
    @ApiProperty({
        description: 'The node ID, if a node was created, updated, or deleted by this transaction',
        type: Number,
        example: 3,
        nullable: true
    })
    public nodeId: Long | null;

    /**
     * Creates a new instance of _Receipt
     * @constructor
     * @memberof _Receipt
     * @public
     * @param {IHashgraph.ILedger.ITransaction.IReceipt} receipt - The receipt data to initialize this instance with
     * @description Initializes a new transaction receipt with the provided data
     */
    constructor(receipt: IHashgraph.ILedger.ITransaction.IReceipt) {
        Object.assign(this, receipt);
    }
}
