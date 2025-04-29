import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Base Fee Class
 * @description
 * Implements the fundamental structure for all token fee types in the system.
 * This class serves as the foundation for various specialized fee implementations
 * and contains properties common to all fee types.
 * 
 * @remarks
 * The _Fee class is the implementation of the _IFee interface and serves as the base
 * for all fee types in token operations, including fixed fees, fractional fees, and royalty fees.
 * It provides the core properties and functionality that any fee must have, such as the collector
 * account and exemption settings.
 * 
 * Used in:
 * - Token creation
 * - Token transfers
 * - Custom fee configurations
 * - Fee schedule updates
 * 
 * @example
 * ```typescript
 * const _Fee = new _Fee({
 *   collector_account_id: "0.0.12345",
 *   all_collectors_are_exempt: false
 * });
 * ```
 * 
 * @class _Fee
 * @implements {IHashgraph.ILedger.IHTS.IFees.IFee}
 * @since 2.0.0
 */
export class _Fee implements IHashgraph.ILedger.IHTS.IFees.IFee {
    /**
     * The account ID that will receive the collected fee
     * @description
     * Specifies the account that will be credited when this fee is collected.
     * This account must be a valid account on the network.
     * 
     * @type {string}
     * @memberof _Fee
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The account ID that will collect the fee',
        type: String,
        required: true,
        example: "0.0.12345"
    })
    collector_account_id: string;
    
    /**
     * Indicates whether all collectors are exempt from paying this fee
     * @description
     * When set to true, accounts that are designated as collectors for any fee
     * will not be charged this fee when they participate in transactions.
     * This prevents circular fee charging scenarios.
     * 
     * @type {boolean}
     * @memberof _Fee
     * @default false
     * @example
     * ```typescript
     * // Exempting all collector accounts from paying this fee
     * all_collectors_are_exempt: true
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
     * Creates a new instance of the _Fee class
     * @description
     * Initializes a new _Fee object, optionally using values from an existing
     * _IFee object to set the properties.
     * 
     * @param {IHashgraph.ILedger.IHTS.IFees.IFee} [fee] - Optional fee object to initialize from
     * 
     * @example
     * ```typescript
     * // Create with default values
     * const emptyFee = new _Fee();
     * 
     * // Create from existing fee object
     * const existingFee = {
     *   collector_account_id: "0.0.12345",
     *   all_collectors_are_exempt: false
     * };
     * const tokenFee = new _Fee(existingFee);
     * ```
     */
    constructor(fee?: IHashgraph.ILedger.IHTS.IFees.IFee) {
        this.collector_account_id = fee?.collector_account_id ?? '';
        this.all_collectors_are_exempt = fee?.all_collectors_are_exempt ?? false;
    }
}