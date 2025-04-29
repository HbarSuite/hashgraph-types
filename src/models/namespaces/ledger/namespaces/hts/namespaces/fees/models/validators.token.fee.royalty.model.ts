import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Amount } from "./validators.token.fee.amount.model";
import { _FixedFee } from "./validators.token.fee.fixed.model";
import { CustomFixedFee, CustomRoyaltyFee, Hbar, TokenId } from '@hashgraph/sdk';

/**
 * Royalty Fee Class
 * @description
 * Implements the structure for representing royalty-based fees in token operations.
 * This class extends the base Fee interface and specifies a fractional amount
 * for royalty payments and a fallback fixed fee when royalty cannot be assessed.
 * 
 * @remarks
 * Royalty fees are commonly used in NFT and digital asset transactions to ensure
 * that original creators or rights holders receive compensation for secondary sales
 * or transfers of their assets. The royalty is typically calculated as a percentage
 * of the transaction value, with a fixed fallback fee as a safety mechanism.
 * 
 * Used in:
 * - NFT marketplace transactions
 * - Digital content royalty distributions
 * - Creator compensation models
 * - Secondary sales of tokenized assets
 * 
 * @example
 * ```typescript
 * const royaltyFee = new _RoyaltyFee({
 *   collector_account_id: "0.0.12345",        // Creator's account
 *   all_collectors_are_exempt: false,
 *   amount: { numerator: 10, denominator: 100 }, // 10% royalty
 *   fallback_fee: {                           // Fallback fee if royalty can't be calculated
 *     amount: 5,
 *     denominating_token_id: "0.0.123456",
 *     collector_account_id: "0.0.12345",
 *     all_collectors_are_exempt: false
 *   }
 * });
 * ```
 * 
 * @class _RoyaltyFee
 * @implements {IHashgraph.ILedger.IHTS.IFees.IRoyaltyFee}
 * @since 2.0.0
 */
export class _RoyaltyFee implements IHashgraph.ILedger.IHTS.IFees.IRoyaltyFee {
    /**
     * The fractional amount to be charged as a royalty fee
     * @description
     * Represents the percentage of the transaction value to be paid as a royalty,
     * expressed as a fraction with numerator and denominator.
     * 
     * @type {_Amount}
     * @memberof _RoyaltyFee
     * @example
     * ```typescript
     * // 2.5% royalty
     * amount: { numerator: 25, denominator: 1000 }
     * ```
     */
    @ApiProperty({
        description: 'The fractional amount to be charged as a royalty fee',
        type: _Amount,
        required: true,
        example: { numerator: 25, denominator: 1000 }
    })
    amount: _Amount;
    
    /**
     * The fixed fee to be charged when royalty cannot be assessed
     * @description
     * Provides a fallback mechanism when the royalty percentage cannot be applied,
     * such as when the transaction value is unknown or in certain types of transfers.
     * This ensures that creators still receive compensation even when percentage-based
     * calculations aren't possible.
     * 
     * @type {_FixedFee}
     * @memberof _RoyaltyFee
     * @example
     * ```typescript
     * fallback_fee: {
     *   amount: 10,
     *   denominating_token_id: "0.0.789012",
     *   collector_account_id: "0.0.12345",
     *   all_collectors_are_exempt: false
     * }
     * ```
     */
    @ApiProperty({
        description: 'The fixed fee to be charged when royalty cannot be assessed',
        type: _FixedFee,
        required: true
    })
    fallback_fee: _FixedFee;

    /**
     * The account ID that will collect the fee
     * @description
     * Specifies which account will receive the royalty fee payment.
     * This is typically the creator's account or a designated rights holder.
     * 
     * @type {string}
     * @memberof _RoyaltyFee
     * @example
     * ```typescript
     * collector_account_id: "0.0.12345"
     * ```
     */
    @ApiProperty({
        description: 'The account ID that will collect the fee',
        type: String,
        required: true,
        example: "0.0.12345"
    })
    collector_account_id: string;

    /**
     * Flag indicating if all collectors are exempt from the fee
     * @description
     * When set to true, accounts designated as collectors will not be charged this fee
     * when they participate in token operations.
     * 
     * @type {boolean}
     * @memberof _RoyaltyFee
     * @example
     * ```typescript
     * all_collectors_are_exempt: false
     * ```
     */
    @ApiProperty({
        description: 'Flag indicating if all collectors are exempt from the fee',
        type: Boolean,
        required: true,
        example: false
    })
    all_collectors_are_exempt: boolean;

    /**
     * Creates a new instance of the _RoyaltyFee class
     * @description
     * Initializes a new _RoyaltyFee object, optionally using values from an existing
     * IRoyaltyFee object to set the properties.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.IRoyaltyFee} [royaltyFee] - Optional royalty fee object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with default values
     * const emptyFee = new _RoyaltyFee();
     * 
     * // Create from existing royalty fee object
     * const existingFee = {
     *   amount: { numerator: 10, denominator: 100 },
     *   fallback_fee: {
     *     amount: 5,
     *     denominating_token_id: "0.0.123456",
     *     collector_account_id: "0.0.12345",
     *     all_collectors_are_exempt: false
     *   },
     *   collector_account_id: "0.0.12345",
     *   all_collectors_are_exempt: false
     * };
     * const royaltyFee = new _RoyaltyFee(existingFee);
     * ```
     */
    constructor(royaltyFee?: IHashgraph.ILedger.IHTS.IFees.IRoyaltyFee) {
        this.amount = royaltyFee?.amount ? new _Amount(royaltyFee.amount) : new _Amount();
        this.fallback_fee = royaltyFee?.fallback_fee ? new _FixedFee(royaltyFee.fallback_fee) : new _FixedFee();
        this.collector_account_id = royaltyFee?.collector_account_id ?? '';
        this.all_collectors_are_exempt = royaltyFee?.all_collectors_are_exempt ?? false;
    }

    /**
     * Returns the royalty fee as a CustomRoyaltyFee object
     * @returns {CustomRoyaltyFee} The royalty fee as a CustomRoyaltyFee object
     */
    toCustomRoyaltyFee(): CustomRoyaltyFee {
        let customRoyaltyFee = new CustomRoyaltyFee()
        .setNumerator(this.amount.numerator)
        .setDenominator(this.amount.denominator)
        .setFeeCollectorAccountId(this.collector_account_id);

        if (this.fallback_fee.amount) {
            let fallbackFee = new CustomFixedFee();

            if (this.fallback_fee.denominating_token_id) {
                fallbackFee
                    .setAmount(this.fallback_fee.amount)
                    .setDenominatingTokenId(TokenId.fromString(this.fallback_fee.denominating_token_id));
            } else {
                fallbackFee.setHbarAmount(new Hbar(this.fallback_fee.amount));
            }

            customRoyaltyFee.setFallbackFee(fallbackFee);
        }

        if (this.all_collectors_are_exempt) {
            customRoyaltyFee.setAllCollectorsAreExempt(true);
        }

        return customRoyaltyFee;
    }
}