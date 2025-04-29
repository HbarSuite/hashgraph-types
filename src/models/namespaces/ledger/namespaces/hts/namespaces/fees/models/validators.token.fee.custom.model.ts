import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _FixedFee } from "./validators.token.fee.fixed.model";
import { _FractionalFee } from "./validators.token.fee.fractional.model";
import { _RoyaltyFee } from "./validators.token.fee.royalty.model";
import { CustomFixedFee, CustomFractionalFee, CustomRoyaltyFee } from '@hashgraph/sdk';

/**
 * Custom Fees Class
 * @description
 * Implements the structure for representing custom fee configurations in token operations.
 * This class aggregates different types of fees that can be applied to token transactions,
 * extending the IValidators.IToken.IFees.ICustomFee interface.
 * 
 * @remarks
 * Custom fees provide flexibility in defining various fee structures for token operations.
 * They can include fixed fees (specific amount), fractional fees (percentage-based),
 * and royalty fees (for creators/owners). This implementation allows for comprehensive
 * fee management across different transaction types.
 * 
 * Used in:
 * - Token creation and configuration
 * - Token transfers and exchanges
 * - NFT marketplace transactions
 * - Complex token operations requiring custom fee structures
 * - Revenue distribution models
 * 
 * @example
 * ```typescript
 * const tokenFees = new _CustomFees({
 *   fixed_fees: [
 *     { amount: 10, denominating_token_id: "0.0.123456", collector_account_id: "0.0.789", all_collectors_are_exempt: false }
 *   ],
 *   fractional_fees: [
 *     { 
 *       amount: { numerator: 5, denominator: 100 },
 *       minimum: 1,
 *       maximum: 100,
 *       net_of_transfers: false,
 *       collector_account_id: "0.0.789",
 *       all_collectors_are_exempt: false
 *     }
 *   ],
 *   royalty_fees: []
 * });
 * ```
 * 
 * @class _CustomFees
 * @implements {IHashgraph.ILedger.IHTS.IFees.ICustomFees}
 * @since 2.0.0
 */
export class _CustomFees implements IHashgraph.ILedger.IHTS.IFees.ICustomFees {
    /**
     * Array of fixed fees to be applied
     * @description
     * Fixed fees represent specific amounts to be charged for token operations.
     * Each fixed fee specifies an exact amount and the token in which it should be paid.
     * These fees are constant regardless of the transaction value.
     * 
     * @example
     * ```typescript
     * customFees.fixed_fees = [
     *   { 
     *     amount: 10, 
     *     denominating_token_id: "0.0.123456", 
     *     collector_account_id: "0.0.789", 
     *     all_collectors_are_exempt: false 
     *   }
     * ];
     * ```
     * 
     * @type {Array<_FixedFee>}
     * @memberof _CustomFees
     */
    @ApiProperty({
        description: 'Array of fixed fees to be applied to token operations',
        type: [_FixedFee],
        isArray: true,
        required: true
    })
    fixed_fees: Array<_FixedFee>;
    
    /**
     * Array of fractional fees to be applied
     * @description
     * Fractional fees represent percentage-based fees calculated from the transaction value.
     * These fees are defined as fractions with configurable minimum and maximum amounts.
     * They provide a proportional fee structure that scales with transaction size.
     * 
     * @example
     * ```typescript
     * customFees.fractional_fees = [
     *   { 
     *     amount: { numerator: 5, denominator: 100 },
     *     minimum: 1,
     *     maximum: 100,
     *     net_of_transfers: false,
     *     collector_account_id: "0.0.789",
     *     all_collectors_are_exempt: false
     *   }
     * ];
     * ```
     * 
     * @type {Array<_FractionalFee>}
     * @memberof _CustomFees
     */
    @ApiProperty({
        description: 'Array of fractional fees to be applied to token operations',
        type: [_FractionalFee],
        isArray: true,
        required: true
    })
    fractional_fees: Array<_FractionalFee>;
    
    /**
     * Array of royalty fees to be applied
     * @description
     * Royalty fees are specialized fees typically used to compensate creators or rights holders.
     * They include a fractional component and a fallback fixed fee mechanism.
     * These are particularly important for NFTs and digital content where creator compensation
     * for secondary sales is a key feature.
     * 
     * @example
     * ```typescript
     * customFees.royalty_fees = [
     *   {
     *     amount: { numerator: 10, denominator: 100 },
     *     fallback_fee: {
     *       amount: 5,
     *       denominating_token_id: "0.0.123456",
     *       collector_account_id: "0.0.12345",
     *       all_collectors_are_exempt: false
     *     },
     *     collector_account_id: "0.0.12345",
     *     all_collectors_are_exempt: false
     *   }
     * ];
     * ```
     * 
     * @type {Array<_RoyaltyFee>}
     * @memberof _CustomFees
     */
    @ApiProperty({
        description: 'Array of royalty fees to be applied to token operations',
        type: [_RoyaltyFee],
        isArray: true,
        required: true
    })
    royalty_fees: Array<_RoyaltyFee>;

    /**
     * Creates a new instance of the _CustomFees class
     * @description
     * Initializes a new _CustomFees object, optionally using values from an existing
     * ICustomFee object to set the fee arrays.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.ICustomFees} [customFee] - Optional custom fee object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with empty fee arrays
     * const emptyFees = new _CustomFees();
     * 
     * // Create from existing custom fee object
     * const existingFees = {
     *   fixed_fees: [{ amount: 10, denominating_token_id: "0.0.123456", collector_account_id: "0.0.789", all_collectors_are_exempt: false }],
     *   fractional_fees: [],
     *   royalty_fees: []
     * };
     * const tokenFees = new _CustomFees(existingFees);
     * ```
     */
    constructor(customFee?: IHashgraph.ILedger.IHTS.IFees.ICustomFees) {
        this.fixed_fees = customFee?.fixed_fees.map((fee) => new _FixedFee(fee));
        this.fractional_fees = customFee?.fractional_fees.map((fee) => new _FractionalFee(fee));
        this.royalty_fees = customFee?.royalty_fees.map((fee) => new _RoyaltyFee(fee));
    }

    /**
     * Generates the fixed fees
     */
    private generateFixedFees(): Array<CustomFixedFee> {
        const hashgraphFixedFees: Array<CustomFixedFee> = [];
        hashgraphFixedFees.push(...this.fixed_fees.map(fee => fee.toCustomFixedFee()));
        return hashgraphFixedFees;
    }

    /**
     * Generates the fractional fees
    
     */
    private generateFractionalFees(): Array<CustomFractionalFee> {
        const hashgraphFractionalFees: Array<CustomFractionalFee> = [];
        hashgraphFractionalFees.push(...this.fractional_fees.map(fee => fee.toCustomFractionalFee()));
        return hashgraphFractionalFees;
    }
    
    /**
     * Generates the royalty fees
     */
    private generateRoyaltyFees(): Array<CustomRoyaltyFee> {
        const hashgraphRoyaltyFees: Array<CustomRoyaltyFee> = [];
        hashgraphRoyaltyFees.push(...this.royalty_fees.map(fee => fee.toCustomRoyaltyFee()));
        return hashgraphRoyaltyFees;
    }

    /**
     * Gets all fees
     * @returns {Array<CustomFixedFee | CustomFractionalFee | CustomRoyaltyFee>} All fees
     */
    getAllFees(): Array<CustomFixedFee | CustomFractionalFee | CustomRoyaltyFee> {
        return [...this.generateFixedFees(), ...this.generateFractionalFees(), ...this.generateRoyaltyFees()];
    }

    /**
     * Validates the custom fees configuration
     * @description
     * Ensures that at least one fee is defined across the three fee arrays.
     * Custom fees cannot have all three arrays (fixed_fees, fractional_fees, royalty_fees) empty.
     * 
     * @returns {boolean} True if the custom fees configuration is valid, false otherwise
     * 
     * @example
     * ```typescript
     * const customFees = new _CustomFees();
     * const isValid = customFees.validate(); // Returns false as all arrays are empty
     * 
     * customFees.fixed_fees.push(new _FixedFee({...}));
     * const isNowValid = customFees.validate(); // Returns true as fixed_fees has an entry
     * ```
     */
    validate(): boolean {
        const isValid = this.fixed_fees.length > 0 || 
                        this.fractional_fees.length > 0 || 
                        this.royalty_fees.length > 0;

        if (!isValid) {
            throw new Error('Custom fees configuration must contain at least one fee type');
        }

        return isValid;
    }
}