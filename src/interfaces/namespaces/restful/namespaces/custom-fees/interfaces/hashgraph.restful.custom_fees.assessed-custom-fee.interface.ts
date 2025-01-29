/**
 * @file hashgraph.restful.custom_fees.assessed-custom-fee.interface.ts
 * @namespace IHashgraph.IRestful._ICustomFees
 * @description Defines the structure for assessed custom fees in the Hedera REST API
 */

/**
 * Interface representing an assessed custom fee
 * @interface _IAssessedCustomFee
 * @description Defines the structure of a custom fee after it has been assessed for a transaction.
 * This includes details about the fee amount, collector, payers, and associated token.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const assessedFee: _IAssessedCustomFee = {
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   effective_payer_account_ids: ["0.0.5678"],
 *   token_id: "0.0.3456"
 * };
 * ```
 */
export interface _IAssessedCustomFee {
    /**
     * Amount of the assessed custom fee
     * @property {number} amount
     * @description The amount of the assessed custom fee in the smallest denomination 
     * of the token (e.g., tinybar for HBAR, smallest unit for custom tokens)
     * @type {number}
     * @memberof _IAssessedCustomFee
     * @required
     */
    amount?: number;

    /**
     * Collector account identifier
     * @property {string | null} collector_account_id
     * @description The Hedera account ID that will receive the assessed fee, in the format 0.0.x
     * Can be null if there's no specific collector designated
     * @type {string | null}
     * @memberof _IAssessedCustomFee
     * @required
     */
    collector_account_id?: string | null;

    /**
     * Effective payer account identifiers
     * @property {Array<string>} effective_payer_account_ids
     * @description List of Hedera account IDs (in format 0.0.x) that are responsible 
     * for paying this assessed custom fee. Multiple payers may be specified for split payments
     * @type {Array<string>}
     * @memberof _IAssessedCustomFee
     * @required
     */
    effective_payer_account_ids?: Array<string>;

    /**
     * Associated token identifier
     * @property {string | null} token_id
     * @description The Hedera token ID associated with this assessed custom fee in the format 0.0.x
     * Null indicates the fee is assessed in HBAR
     * @type {string | null}
     * @memberof _IAssessedCustomFee
     * @required
     */
    token_id?: string | null;
}