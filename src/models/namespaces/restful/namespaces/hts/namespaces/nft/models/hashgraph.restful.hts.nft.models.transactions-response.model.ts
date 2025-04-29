import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.hts.nft.models.transactions-response.model.ts
 * @class _TransactionsResponse
 * @description Represents a response model for NFT transaction transfers in the Hashgraph Token Service (HTS).
 * This class encapsulates details about NFT transfers including timestamps, accounts involved, and transaction metadata.
 * It provides a comprehensive view of NFT movement between accounts and the associated transaction details.
 * @implements {IHashgraph.IRestful.IHTS.INft.ITransactionsResponse}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new NFT transaction response
 * const txResponse = new _TransactionsResponse({
 *   consensus_timestamp: "2023-01-01T00:00:00.000Z",
 *   is_approval: false,
 *   nonce: 1,
 *   receiver_account_id: "0.0.123456",
 *   sender_account_id: "0.0.789012",
 *   transaction_id: "0.0.123456@1234567890.000000000",
 *   type: "CRYPTOTRANSFER"
 * });
 */
export class _TransactionsResponse implements IHashgraph.IRestful.IHTS.INft.ITransactionsResponse  {
    /**
     * The consensus timestamp of the transaction
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the transaction reached consensus
     * on the Hedera network. This timestamp is used for ordering and uniquely identifying transactions.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The ISO 8601 formatted consensus timestamp of the transaction', 
        required: true,
        example: "2023-01-01T00:00:00.000Z"
    })
    @IsString()
    consensus_timestamp: string;

    /**
     * The approval status of the transaction
     * @type {boolean}
     * @description Indicates if this transaction is an approval operation. True indicates
     * the transaction grants or revokes approval for another account to transfer the NFT,
     * while false indicates a direct transfer.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'Indicates if this is an approval transaction for NFT transfers', 
        required: true,
        example: false
    })
    @IsBoolean()
    is_approval: boolean;

    /**
     * The nonce value of the transaction
     * @type {number}
     * @description A unique sequential number used to identify and order transactions
     * from the same account. Helps prevent transaction replay and ensures transaction uniqueness.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The unique nonce value identifying the transaction sequence', 
        required: true,
        example: 1
    })
    @IsNumber()
    nonce: number;

    /**
     * The account ID of the receiver
     * @type {string}
     * @description Hashgraph account ID of the NFT receiver. This identifies the account
     * that will own the NFT after the transfer is complete.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The Hashgraph account ID of the NFT receiver', 
        required: true,
        example: "0.0.123456"
    })
    @IsString()
    receiver_account_id: string;

    /**
     * The account ID of the sender
     * @type {string}
     * @description Hashgraph account ID of the NFT sender. This identifies the account
     * that owned the NFT before the transfer and initiated the transaction.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The Hashgraph account ID of the NFT sender', 
        required: true,
        example: "0.0.789012"
    })
    @IsString()
    sender_account_id: string;

    /**
     * The unique transaction identifier
     * @type {string}
     * @description Unique identifier for the transaction in the format "accountId@seconds.nanoseconds".
     * This ID can be used to look up the transaction status and details across the network.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The unique identifier for the transaction in accountId@timestamp format', 
        required: true,
        example: "0.0.123456@1234567890.000000000"
    })
    @IsString()
    transaction_id: string;

    /**
     * The type of transaction
     * @type {IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum}
     * @description Enumerated type of the transaction (e.g., CRYPTOTRANSFER, TOKENBURN).
     * This field indicates the specific operation performed on the NFT.
     * @memberof _TransactionsResponse
     */
    @ApiProperty({ 
        description: 'The type of transaction operation performed on the NFT', 
        required: true, 
        enum: IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum,
        example: "CRYPTOTRANSFER"
    })
    @IsString()
    type: IHashgraph.IRestful.ITransactions.ITransaction.TypeEnum;

    /**
     * Creates an instance of _TransactionsResponse.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHTS.INft.ITransactionsResponse>} data - Initial data to create the transaction response
     * @description Initializes a new NFT transaction response with the provided data.
     * All properties are mapped directly from the input data object, maintaining their
     * original types and formats.
     * @memberof _TransactionsResponse
     */
    constructor(data: Partial<IHashgraph.IRestful.IHTS.INft.ITransactionsResponse>) {
        if (data) {
            Object.assign(this, {
                consensus_timestamp: data.consensus_timestamp,
                is_approval: data.is_approval,
                nonce: data.nonce,
                receiver_account_id: data.receiver_account_id,
                sender_account_id: data.sender_account_id,
                transaction_id: data.transaction_id,
                type: data.type
            });
        }
    }
}