import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Restful } from '../../../../../hashgraph.restful.namespace';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _Transaction } from '../hashgraph.restful.transactions.transaction.namespace';
import { _Entity } from './hashgraph.restful.transactions.models.entity.model';

/**
 * @file hashgraph.restful.transactions.models.response.model.ts
 * @class _Response
 * @description Standardized response model for Hedera transaction queries.
 * Implements IHashgraph.IRestful.ITransactions.ITransaction.IResponse to provide
 * a consistent structure for returning transaction information with pagination
 * support. Features include:
 * - Collection of transaction entities
 * - HATEOAS-compliant pagination
 * - Automatic data transformation
 * - Type-safe response handling
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ITransaction.IResponse}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a paginated transaction response
 * const response = new _Response({
 *   transactions: [{
 *     transaction_id: "0.0.123456@1234567890.123456789",
 *     type: "CRYPTOTRANSFER",
 *     result: "SUCCESS",
 *     consensus_timestamp: "1234567890.123456789",
 *     charged_tx_fee: "1000000",
 *     valid_duration_seconds: 120,
 *     memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U="
 *   }],
 *   links: {
 *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.123456789"
 *   }
 * });
 * ```
 */
export class _Response implements IHashgraph.IRestful.ITransactions.ITransaction.IResponse {
    /**
     * Collection of transaction entities
     * @type {Array<_Transaction.Entity>}
     * @optional
     * @remarks
     * - Contains detailed transaction information
     * - Automatically validates each transaction
     * - Supports empty array when no results
     * - Maximum size limited by API configuration
     */
    @ApiProperty({
        description: 'Collection of transaction entities containing detailed transaction data and properties',
        type: () => [_Entity],
        required: false,
        example: [{
            transaction_id: "0.0.123456@1234567890.123456789",
            type: "CRYPTOTRANSFER",
            result: "SUCCESS",
            consensus_timestamp: "1234567890.123456789",
            charged_tx_fee: "1000000",
            valid_duration_seconds: 120,
            node: "0.0.3",
            memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U=",
            entity_id: "0.0.789012"
        }]
    })
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Transaction.Entity)
    transactions?: Array<_Transaction.Entity>;

    /**
     * HATEOAS-compliant pagination links
     * @type {_Links}
     * @optional
     * @remarks
     * - Facilitates result navigation
     * - Supports RESTful standards
     * - Handles large result sets
     * - Auto-generated by API
     */
    @ApiProperty({
        description: 'HATEOAS-compliant pagination links for navigating through transaction results',
        type: () => _Links,
        required: false,
        example: {
            next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.123456789"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {Partial<IHashgraph.IRestful.ITransactions.ITransaction.IResponse>} data - Optional initialization data
     * @remarks
     * - Transforms input to proper types
     * - Validates all transactions
     * - Creates pagination links
     * - Handles empty responses
     * 
     * @example
     * ```typescript
     * // Create empty response
     * const emptyResponse = new _Response({});
     * 
     * // Create response with transactions
     * const response = new _Response({
     *   transactions: [{
     *     transaction_id: "0.0.123456@1234567890.123456789",
     *     type: "CRYPTOTRANSFER",
     *     result: "SUCCESS",
     *     consensus_timestamp: "1234567890.123456789",
     *     charged_tx_fee: "1000000"
     *   }],
     *   links: {
     *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.123456789"
     *   }
     * });
     * ```
     */
    constructor(data: Partial<IHashgraph.IRestful.ITransactions.ITransaction.IResponse>) {
        // Copy all properties from data to this instance
        Object.assign(this, data);

        // Transform transaction data into _Entity instances if present
        if (this.transactions) {
            this.transactions = this.transactions.map(transaction => new _Transaction.Entity(transaction));
        }

        // Transform links data into _Links instance if present
        if (this.links) {
            this.links = new _Links(this.links.next);
        }
    }
}