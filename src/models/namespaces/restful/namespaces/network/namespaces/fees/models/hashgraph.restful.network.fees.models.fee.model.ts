import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.network.fees.models.fee.model.ts
 * @class _Fee
 * @description Comprehensive model for individual network fee configurations.
 * 
 * This model provides detailed information about:
 * - Gas consumption
 * - Transaction types
 * - Fee calculations
 * - Cost components
 * 
 * Features built-in validation for:
 * - Gas amounts
 * - Transaction types
 * - Required fields
 * 
 * @implements {IHashgraph.IRestful.INetwork.IFees.IFee}
 * @category Models
 * @subcategory Fees
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const fee = new _Fee({
 *   gas: 400000,
 *   transaction_type: 'ContractCall'
 * });
 * ```
 */
export class _Fee implements IHashgraph.IRestful.INetwork.IFees.IFee {
    /**
     * Gas consumption
     * @type {number}
     * @description Amount of gas required for the transaction.
     * Used for fee calculations and resource tracking.
     * 
     * Format:
     * - Non-negative integer
     * - Represents computational units
     * - Used in fee calculations
     * 
     * @required
     */
    @ApiProperty({
        description: 'Gas amount required for the transaction execution',
        type: () => Number,
        example: 400000,
        required: true
    })
    @IsNumber()
    gas: number;

    /**
     * Transaction type
     * @type {string}
     * @description Type of transaction being executed.
     * Determines fee calculation method and base costs.
     * 
     * Common values:
     * - 'ContractCall'
     * - 'ContractCreate'
     * - 'CryptoTransfer'
     * - 'ConsensusSubmitMessage'
     * 
     * @required
     */
    @ApiProperty({
        description: 'Type of transaction being executed',
        type: () => String,
        example: 'ContractCall',
        required: true
    })
    @IsString()
    transaction_type: string;

    /**
     * Creates an instance of _Fee.
     * @constructor
     * @param {Partial<IHashgraph.IRestful.INetwork.IFees.IFee>} [data] - Initial fee configuration
     * 
     * @description Initializes a new fee configuration instance:
     * - Assigns gas amount if provided
     * - Sets transaction type if provided
     * - Applies validation rules
     * 
     * Note: This model uses optional initialization to support
     * various fee calculation scenarios and updates.
     */
    constructor(data?: Partial<IHashgraph.IRestful.INetwork.IFees.IFee>) {
        if (data) {
            Object.assign(this, data);
        }
    }
} 