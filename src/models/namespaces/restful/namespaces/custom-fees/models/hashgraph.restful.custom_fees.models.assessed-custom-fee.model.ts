import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional, IsString, IsArray } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file assessed-custom-fee.model.ts
 * @class _AssessedCustomFee
 * @description Represents an assessed custom fee on the Hashgraph network. This class defines the structure 
 * of an assessed custom fee, including properties such as amount, collector account, effective payer accounts, 
 * and associated token.
 * @implements {IHashgraph.IRestful.ICustomFees.IAssessedCustomFee}
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Fees} for the complete fee structure
 * 
 * @example
 * // Create a new assessed custom fee instance
 * const assessedCustomFee = new _AssessedCustomFee({
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   effective_payer_account_ids: ["0.0.5678", "0.0.9012"],
 *   token_id: "0.0.3456"
 * });
 */
export class _AssessedCustomFee implements IHashgraph.IRestful.ICustomFees.IAssessedCustomFee {
    /**
     * The amount of the assessed custom fee
     * @type {number}
     * @optional
     * @description The fee amount in the smallest denomination of the token (e.g., tinybar for HBAR)
     * @remarks This amount represents the final calculated fee after assessment
     */
    @ApiProperty({
        description: 'The amount of the assessed custom fee in the smallest denomination of the token (e.g., tinybar for HBAR)',
        required: false,
        example: 100
    })
    @IsOptional()
    @IsNumber()
    amount?: number;

    /**
     * The account ID of the fee collector
     * @type {string | null}
     * @optional
     * @description The account that will receive the collected fee. Can be null if there's no specific collector.
     * @remarks The collector account must be a valid Hedera account ID
     */
    @ApiProperty({
        description: 'The account ID of the fee collector. Can be null if there\'s no specific collector.',
        required: false,
        example: "0.0.1234"
    })
    @IsOptional()
    @IsString()
    collector_account_id?: string | null;

    /**
     * Array of payer account IDs
     * @type {Array<string>}
     * @optional
     * @description List of account IDs that are responsible for paying this assessed custom fee
     * @remarks Each account ID in the array must be a valid Hedera account ID
     */
    @ApiProperty({
        description: 'An array of account IDs that are responsible for paying this assessed custom fee',
        required: false,
        example: ["0.0.5678", "0.0.9012"]
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    effective_payer_account_ids?: Array<string>;

    /**
     * The associated token ID
     * @type {string | null}
     * @optional
     * @description The token ID for which this fee is assessed. Can be null for fees in HBAR.
     * @remarks Must be a valid Hedera token ID if specified
     */
    @ApiProperty({
        description: 'The token ID associated with this assessed custom fee. Can be null for fees in HBAR.',
        required: false,
        example: "0.0.3456"
    })
    @IsOptional()
    @IsString()
    token_id?: string | null;

    /**
     * Creates an instance of _AssessedCustomFee
     * @constructor
     * @param {Partial<_AssessedCustomFee>} data - Initial data to create the assessed custom fee
     * @throws {Error} If any of the provided data is invalid
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<_AssessedCustomFee>) {
        Object.assign(this, data);

        // Validate amount is a number if provided
        if (this.amount !== undefined && typeof this.amount !== 'number') {
            throw new Error('Invalid amount');
        }

        // Validate collector account ID is string or null if provided
        if (this.collector_account_id !== undefined && this.collector_account_id !== null && typeof this.collector_account_id !== 'string') {
            throw new Error('Invalid collector_account_id');
        }

        // Validate effective payer account IDs array contains only strings
        if (this.effective_payer_account_ids !== undefined && (!Array.isArray(this.effective_payer_account_ids) || !this.effective_payer_account_ids.every(id => typeof id === 'string'))) {
            throw new Error('Invalid effective_payer_account_ids');
        }

        // Validate token ID is string or null if provided
        if (this.token_id !== undefined && this.token_id !== null && typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id');
        }
    }
}