import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Amount } from "./validators.token.fee.amount.model";
import { AccountId, CustomFractionalFee, FeeAssessmentMethod } from '@hashgraph/sdk';

/**
 * Fractional Fee Class
 * @description
 * Implements the structure for representing percentage-based fees in token operations.
 * This class extends the base Fee interface and specifies a fractional amount,
 * minimum and maximum fee limits, and whether the fee applies to net transfers.
 * 
 * @remarks
 * Fractional fees are used when a percentage of the transaction value needs to be
 * charged as a fee. The fee is calculated based on the fractional amount (numerator/denominator)
 * and can be constrained by minimum and maximum values. The net_of_transfers flag determines
 * whether the fee is calculated based on the net amount transferred or the gross amount.
 * 
 * Used in:
 * - Token transfer fees
 * - Transaction fees
 * - Service fees
 * - Revenue sharing models
 * - Marketplace commission structures
 * 
 * @example
 * ```typescript
 * const fractionalFee = new _FractionalFee({
 *   amount: { numerator: 5, denominator: 100 }, // 5% fee
 *   minimum: 1,                                 // Minimum fee of 1 token
 *   maximum: 100,                               // Maximum fee of 100 tokens
 *   net_of_transfers: false,                    // Fee applies to gross amount
 *   collector_account_id: "0.0.789012",         // Account collecting the fee
 *   all_collectors_are_exempt: false            // Collectors are not exempt
 * });
 * ```
 * 
 * @class _FractionalFee
 * @implements {IHashgraph.ILedger.IHTS.IFees.IFractionalFee}
 * @since 2.0.0
 */
export class _FractionalFee implements IHashgraph.ILedger.IHTS.IFees.IFractionalFee {
    /**
     * The fractional amount to be charged as a fee
     * @description
     * Represents the percentage of the transaction value to be paid as a fee,
     * expressed as a fraction with numerator and denominator.
     * 
     * @example
     * // Setting a 5% fee (5/100)
     * fractionalFee.amount = { numerator: 5, denominator: 100 };
     * 
     * @type {_Amount}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'The fractional amount to be charged as a fee',
        type: _Amount,
        required: true,
        example: { numerator: 5, denominator: 100 }
    })
    amount: _Amount;
    
    /**
     * The minimum fee amount that can be charged
     * @description
     * Sets a floor for the fee amount. If the calculated fractional fee is less than
     * this value, the minimum fee will be charged instead.
     * 
     * @example
     * // Setting a minimum fee of 1 token
     * fractionalFee.minimum = 1;
     * 
     * @type {number}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'The minimum fee amount that can be charged',
        type: Number,
        required: true,
        example: 1
    })
    minimum: number;
    
    /**
     * The maximum fee amount that can be charged
     * @description
     * Sets a ceiling for the fee amount. If the calculated fractional fee exceeds
     * this value, the maximum fee will be charged instead.
     * 
     * @example
     * // Setting a maximum fee of 100 tokens
     * fractionalFee.maximum = 100;
     * 
     * @type {number}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'The maximum fee amount that can be charged',
        type: Number,
        required: true,
        example: 100
    })
    maximum: number;
    
    /**
     * Determines if the fee applies to net transfers
     * @description
     * When true, the fee is calculated based on the net amount transferred
     * (excluding other fees). When false, the fee is calculated based on the
     * gross amount (including other fees).
     * 
     * @example
     * // Setting fee to apply to net transfers
     * fractionalFee.net_of_transfers = true;
     * 
     * @type {boolean}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'Determines if the fee applies to net transfers',
        type: Boolean,
        required: true,
        example: false
    })
    net_of_transfers: boolean;

    /**
     * The account ID that will collect the fee
     * @description
     * Specifies which account should receive the fee payment.
     * This is represented as a string in the format "0.0.{accountNum}".
     * 
     * @example
     * // Setting the fee collector to account 0.0.789012
     * fractionalFee.collector_account_id = "0.0.789012";
     * 
     * @type {string}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'The account ID that will collect the fee',
        type: String,
        required: true,
        example: "0.0.789012"
    })
    collector_account_id: string;

    /**
     * Flag indicating if all collectors are exempt from the fee
     * @description
     * When set to true, accounts designated as collectors will not be charged this fee
     * when they participate in token operations.
     * 
     * @example
     * // Exempting all collectors from the fee
     * fractionalFee.all_collectors_are_exempt = true;
     * 
     * @type {boolean}
     * @memberof _FractionalFee
     */
    @ApiProperty({
        description: 'Flag indicating if all collectors are exempt from the fee',
        type: Boolean,
        required: true,
        example: false
    })
    all_collectors_are_exempt: boolean;

    /**
     * Creates a new instance of the _FractionalFee class
     * @description
     * Initializes a new _FractionalFee object, optionally using values from an existing
     * IFractionalFee object to set the properties.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.IFractionalFee} [fractionalFee] - Optional fractional fee object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with default values
     * const emptyFee = new _FractionalFee();
     * 
     * // Create from existing fractional fee object
     * const existingFee = {
     *   amount: { numerator: 5, denominator: 100 },
     *   minimum: 1,
     *   maximum: 100,
     *   net_of_transfers: false,
     *   collector_account_id: "0.0.789012",
     *   all_collectors_are_exempt: false
     * };
     * const tokenFee = new _FractionalFee(existingFee);
     * ```
     */
    constructor(fractionalFee?: IHashgraph.ILedger.IHTS.IFees.IFractionalFee) {
        this.amount = fractionalFee?.amount ? new _Amount(fractionalFee.amount) : new _Amount();
        this.minimum = fractionalFee?.minimum ?? 0;
        this.maximum = fractionalFee?.maximum ?? 0;
        this.net_of_transfers = fractionalFee?.net_of_transfers ?? false;
        this.collector_account_id = fractionalFee?.collector_account_id ?? '';
        this.all_collectors_are_exempt = fractionalFee?.all_collectors_are_exempt ?? false;
    }

    /**
     * Returns the fractional fee as a CustomFractionalFee object
     * @returns {CustomFractionalFee} The fractional fee as a CustomFractionalFee object
     */
    toCustomFractionalFee(): CustomFractionalFee {
        let customFractionalFee = new CustomFractionalFee()
        .setNumerator(this.amount.numerator)
        .setDenominator(this.amount.denominator)
        .setFeeCollectorAccountId(AccountId.fromString(this.collector_account_id));

        if (this.all_collectors_are_exempt) {
            customFractionalFee.setAllCollectorsAreExempt(true);
        }

        if (this.minimum) {
            customFractionalFee.setMin(this.minimum);
        }

        if (this.maximum) {
            customFractionalFee.setMax(this.maximum);
        }

        if (this.net_of_transfers) {
            customFractionalFee.setAssessmentMethod(
                FeeAssessmentMethod._fromValue(this.net_of_transfers)
            );
        }

        return customFractionalFee;
    }
}