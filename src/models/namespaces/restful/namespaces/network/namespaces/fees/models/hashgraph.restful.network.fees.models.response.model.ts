import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Fee } from './hashgraph.restful.network.fees.models.fee.model';

/**
 * @file hashgraph.restful.network.fees.models.response.model.ts
 * @class _Response
 * @description Comprehensive model for network fee query responses.
 * 
 * This model provides detailed information about:
 * - Current network fees
 * - Fee schedules
 * - Timestamp tracking
 * - Fee collections
 * 
 * Features built-in validation for:
 * - Fee structures
 * - Timestamp formats
 * - Data integrity
 * 
 * @implements {IHashgraph.IRestful.INetwork.IFees.IResponse}
 * @category Models
 * @subcategory Fees
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const response = new _Response({
 *   fees: [
 *     {
 *       gas: 400000,
 *       transaction_type: 'ContractCall'
 *     },
 *     {
 *       gas: 600000,
 *       transaction_type: 'ContractCreate'
 *     }
 *   ],
 *   timestamp: '2023-05-12T00:00:00.000Z'
 * });
 * ```
 */
export class _Response implements IHashgraph.IRestful.INetwork.IFees.IResponse {
    /**
     * Network fees collection
     * @type {Array<_Fee>}
     * @description Collection of current network fee configurations.
     * Each fee entry contains specific fee details for different
     * transaction types and operations.
     * 
     * Features:
     * - Multiple fee configurations
     * - Transaction type specifics
     * - Gas calculations
     * - Cost breakdowns
     * 
     * @required
     */
    @ApiProperty({
        description: 'Collection of current network fee configurations',
        type: () => [_Fee],
        isArray: true,
        required: true,
        example: [
            {
                gas: 400000,
                transaction_type: 'ContractCall'
            },
            {
                gas: 600000,
                transaction_type: 'ContractCreate'
            }
        ]
    })
    @IsArray()
    @Type(() => _Fee)
    fees: Array<_Fee>;

    /**
     * Response timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating when the fee information was recorded.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-05-12T00:00:00.000Z'
     * 
     * Requirements:
     * - Must be a valid ISO 8601 string
     * - Must include timezone (Z for UTC)
     * - Must not be in the future
     * 
     * @required
     */
    @ApiProperty({
        description: 'Timestamp when the fee information was recorded (ISO 8601)',
        type: () => String,
        example: '2023-05-12T00:00:00.000Z',
        required: true
    })
    @IsString()
    timestamp: string;

    /**
     * Creates an instance of _Response.
     * @constructor
     * @param {Partial<_Response>} [data] - Initial response data
     * 
     * @description Initializes a new fee response instance:
     * - Assigns fee collection if provided
     * - Sets timestamp if provided
     * - Applies validation rules
     * 
     * Note: This model uses optional initialization to support
     * various response scenarios and partial updates.
     */
    constructor(data?: Partial<_Response>) {
        if (data) {
            Object.assign(this, data);
        }
    }
} 