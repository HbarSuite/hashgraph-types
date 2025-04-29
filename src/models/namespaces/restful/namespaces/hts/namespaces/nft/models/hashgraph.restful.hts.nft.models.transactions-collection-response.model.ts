import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _TransactionsResponse } from './hashgraph.restful.hts.nft.models.transactions-response.model';

/**
 * @file hashgraph.restful.hts.nft.models.transactions-collection-response.model.ts
 * @class _TransactionsCollectionResponse
 * @description Represents a response containing a collection of NFT transactions and associated pagination links.
 * This class provides a structured format for returning multiple NFT transactions in a single response,
 * typically used for historical queries or bulk transaction retrieval. It includes support for
 * pagination to handle large sets of transactions efficiently.
 * @implements {IHashgraph.IRestful.IHTS.INft.ITransactionsCollectionResponse}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new NFT transactions collection response
 * const response = new _TransactionsCollectionResponse({
 *   transactions: [{
 *     consensus_timestamp: "1618591023.997420021",
 *     is_approval: false,
 *     nonce: 0,
 *     receiver_account_id: "0.0.11",
 *     sender_account_id: "0.0.10",
 *     transaction_id: "0.0.19789-1618591023-997420021",
 *     type: "CRYPTOTRANSFER"
 *   }],
 *   links: {
 *     next: "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=100"
 *   }
 * });
 */
export class _TransactionsCollectionResponse implements IHashgraph.IRestful.IHTS.INft.ITransactionsCollectionResponse {
    /**
     * Collection of NFT transactions
     * @type {Array<_TransactionsResponse> | undefined}
     * @description An array of NFT transaction responses, each containing detailed information
     * about a specific NFT transfer or approval operation. This field is optional and may be
     * undefined if no transactions match the query criteria.
     * @optional
     * @memberof _TransactionsCollectionResponse
     */
    @ApiProperty({
        description: 'Collection of NFT transactions in chronological order',
        type: () => [_TransactionsResponse],
        isArray: true,
        required: false,
        example: [{
            consensus_timestamp: "1618591023.997420021",
            is_approval: false,
            nonce: 0,
            receiver_account_id: "0.0.11",
            sender_account_id: "0.0.10",
            transaction_id: "0.0.19789-1618591023-997420021",
            type: "CRYPTOTRANSFER"
        }]
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => _TransactionsResponse)
    transactions?: Array<_TransactionsResponse>;

    /**
     * Pagination links for the transaction collection
     * @type {_Links | undefined}
     * @description Links for navigating through the transaction collection, including
     * URLs for the next and previous pages of results. This field is optional and may
     * be undefined if there are no additional pages of transactions.
     * @optional
     * @memberof _TransactionsCollectionResponse
     */
    @ApiProperty({
        description: 'Links for navigating through paginated transaction results',
        type: () => _Links,
        required: false,
        example: { next: "/api/v1/tokens/0.0.1234/nfts/1/transactions?limit=100" }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _TransactionsCollectionResponse
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHTS.INft.ITransactionsCollectionResponse>} data - Initial data to create the collection response
     * @description Initializes a new NFT transactions collection response with the provided data.
     * If transaction data is provided, it creates new TransactionsResponse instances for each transaction.
     * If pagination links are provided, it creates a new Links instance.
     * @memberof _TransactionsCollectionResponse
     */
    constructor(data: Partial<IHashgraph.IRestful.IHTS.INft.ITransactionsCollectionResponse>) {
        if (data) {
            this.transactions = data.transactions ? data.transactions.map(tx => new _TransactionsResponse(tx)) : undefined;
            this.links = data.links ? new _Links(data.links.next) : undefined;
        }
    }
} 