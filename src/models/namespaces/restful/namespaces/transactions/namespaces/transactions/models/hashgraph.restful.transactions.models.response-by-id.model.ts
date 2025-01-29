import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Details } from './hashgraph.restful.transactions.models.details.model';

/**
 * @file hashgraph.restful.transactions.models.response-by-id.model.ts
 * @class _ResponseById
 * @description Specialized response model for retrieving Hedera transactions by their unique identifier.
 * Implements IHashgraph.IRestful.ITransactions.ITransaction.IResponseById to provide
 * a focused view of transaction details when querying by ID. Features include:
 * - Single transaction lookup
 * - Comprehensive transaction details
 * - Type-safe response handling
 * - Automatic data validation
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ITransaction.IResponseById}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a detailed transaction response
 * const response = new _ResponseById({
 *   transactions: [{
 *     transaction_id: "0.0.123456@1234567890.123456789",
 *     type: "CRYPTOTRANSFER",
 *     result: "SUCCESS",
 *     timestamp: "1234567890.123456789",
 *     charged_tx_fee: "500000",
 *     memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U=",
 *     entity_id: "0.0.789012",
 *     node: "0.0.3",
 *     valid_duration_seconds: "120"
 *   }]
 * });
 * ```
 */
export class _ResponseById implements IHashgraph.IRestful.ITransactions.ITransaction.IResponseById {
    /**
     * Transaction details collection
     * @type {Array<_Details>}
     * @optional
     * @remarks
     * - Contains detailed transaction data
     * - Usually contains single transaction
     * - Automatically validates details
     * - Supports empty result case
     */
    @ApiProperty({
        description: 'Collection of detailed transaction information for the queried transaction ID',
        type: () => [_Details],
        required: false,
        example: [{
            transaction_id: "0.0.123456@1234567890.123456789",
            type: "CRYPTOTRANSFER",
            result: "SUCCESS",
            timestamp: "1234567890.123456789",
            charged_tx_fee: "500000",
            memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U=",
            entity_id: "0.0.789012",
            node: "0.0.3",
            valid_duration_seconds: "120"
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Details)
    transactions?: Array<_Details>;

    /**
     * Creates an instance of _ResponseById
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransaction.IResponseById>} data - Transaction response data
     * @remarks
     * - Validates input data
     * - Transforms transaction details
     * - Handles empty responses
     * - Ensures type safety
     * 
     * @example
     * ```typescript
     * // Create empty response
     * const emptyResponse = new _ResponseById({});
     * 
     * // Create response with transaction details
     * const response = new _ResponseById({
     *   transactions: [{
     *     transaction_id: "0.0.123456@1234567890.123456789",
     *     type: "CRYPTOTRANSFER",
     *     result: "SUCCESS",
     *     timestamp: "1234567890.123456789",
     *     charged_tx_fee: "500000",
     *     memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U="
     *   }]
     * });
     * ```
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransaction.IResponseById>) {
        Object.assign(this, data);

        if (this.transactions) {
            this.transactions = this.transactions.map(transaction => new _Details(transaction));
        }
    }
}