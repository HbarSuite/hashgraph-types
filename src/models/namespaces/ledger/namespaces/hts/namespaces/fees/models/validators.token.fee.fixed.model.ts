import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { AccountId, CustomFixedFee, Hbar, TokenId } from '@hashgraph/sdk';

/**
 * Fixed Fee Class
 * @description
 * Implements the structure for representing fixed fee amounts in token operations.
 * This class extends the base Fee interface and specifies a concrete amount
 * and the token ID in which the fee should be paid.
 * 
 * @remarks
 * Fixed fees are used when a specific, unchanging amount needs to be charged for
 * token operations, regardless of the transaction value. The fee can be denominated
 * in any token specified by its ID.
 * 
 * Used in:
 * - Token creation fees
 * - Token transfer fees
 * - Administrative operation fees
 * - As fallback fees for other fee types
 * - Custom fee structures
 * 
 * @example
 * ```typescript
 * const fixedFee = new _FixedFee({
 *   amount: 10,
 *   denominating_token_id: "0.0.123456",
 *   collector_account_id: "0.0.789012",
 *   all_collectors_are_exempt: false
 * });
 * ```
 * 
 * @class _FixedFee
 * @implements {IHashgraph.ILedger.IHTS.IFees.IFixedFee}
 * @since 2.0.0
 */
export class _FixedFee implements IHashgraph.ILedger.IHTS.IFees.IFixedFee {
    /**
     * The fixed amount to be charged as a fee
     * @description
     * Represents the exact quantity of tokens to be paid as a fee
     * for the token operation.
     * 
     * @example
     * // Setting a fixed fee of 10 tokens
     * fixedFee.amount = 10;
     * 
     * @type {number}
     * @memberof _FixedFee
     */
    @ApiProperty({
        description: 'The fixed amount to be charged as a fee',
        type: Number,
        example: 10,
        required: true
    })
    amount: number;
    
    /**
     * The ID of the token in which the fee is denominated
     * @description
     * Specifies which token should be used to pay the fee.
     * This is represented as a string in the format "0.0.{tokenNum}".
     * 
     * @example
     * // Setting the fee to be paid in token 0.0.123456
     * fixedFee.denominating_token_id = "0.0.123456";
     * 
     * @type {string}
     * @memberof _FixedFee
     */
    @ApiProperty({
        description: 'The ID of the token in which the fee is denominated',
        type: String,
        example: '0.0.123456',
        required: true
    })
    denominating_token_id: string;

    /**
     * The account ID that will collect the fee
     * @description
     * Specifies the account that will receive the fee payment.
     * This is represented as a string in the format "0.0.{accountNum}".
     * 
     * @example
     * // Setting the collector account to 0.0.789012
     * fixedFee.collector_account_id = "0.0.789012";
     * 
     * @type {string}
     * @memberof _FixedFee
     */
    @ApiProperty({
        description: 'The account ID that will collect the fee',
        type: String,
        example: '0.0.789012',
        required: true
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
     * fixedFee.all_collectors_are_exempt = true;
     * 
     * @type {boolean}
     * @memberof _FixedFee
     */
    @ApiProperty({
        description: 'Flag indicating if all collectors are exempt from the fee',
        type: Boolean,
        example: false,
        required: true
    })
    all_collectors_are_exempt: boolean;

    /**
     * Creates a new instance of the _FixedFee class
     * @description
     * Initializes a new _FixedFee object, optionally using values from an existing
     * IFixedFee object to set the properties.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.IFixedFee} [fixedFee] - Optional fixed fee object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with default values
     * const emptyFee = new _FixedFee();
     * 
     * // Create from existing fixed fee object
     * const existingFee = {
     *   amount: 10,
     *   denominating_token_id: "0.0.123456",
     *   collector_account_id: "0.0.789012",
     *   all_collectors_are_exempt: false
     * };
     * const tokenFee = new _FixedFee(existingFee);
     * ```
     */
    constructor(fixedFee?: IHashgraph.ILedger.IHTS.IFees.IFixedFee) {
        this.amount = fixedFee?.amount ?? 0;
        this.denominating_token_id = fixedFee?.denominating_token_id ?? '';
        this.collector_account_id = fixedFee?.collector_account_id ?? '';
        this.all_collectors_are_exempt = fixedFee?.all_collectors_are_exempt ?? false;
    }

    /**
     * Returns the fixed fee as a CustomFixedFee object
     * @returns {CustomFixedFee} The fixed fee as a CustomFixedFee object
     */
    toCustomFixedFee(): CustomFixedFee {
        let customFixedFee = new CustomFixedFee()
        .setFeeCollectorAccountId(AccountId.fromString(this.collector_account_id));

        if (this.denominating_token_id) {
            customFixedFee
                .setAmount(this.amount)
                .setDenominatingTokenId(TokenId.fromString(this.denominating_token_id));
        } else {
            customFixedFee
                .setHbarAmount(new Hbar(this.amount))
        }

        if (this.all_collectors_are_exempt) {
            customFixedFee.setAllCollectorsAreExempt(true);
        }

        return customFixedFee;
    }
    
}