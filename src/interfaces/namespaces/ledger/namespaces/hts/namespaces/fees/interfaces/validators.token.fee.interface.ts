/**
 * Base Fee Interface
 * @description
 * Defines the fundamental structure for all token fee types in the system.
 * This interface serves as the foundation for various specialized fee interfaces
 * and contains properties common to all fee implementations.
 * 
 * @remarks
 * The Fee interface is the base for all fee types in token operations, including
 * fixed fees, fractional fees, and royalty fees. It establishes the core properties
 * that any fee must have, such as the collector account and exemption settings.
 * 
 * Used in:
 * - Token creation
 * - Token transfers
 * - Custom fee configurations
 * - Fee schedule updates
 * 
 * @example
 * ```typescript
 * const baseFee: _IFee = {
 *   collector_account_id: "0.0.12345",
 *   all_collectors_are_exempt: false
 * };
 * ```
 * 
 * @interface _IFee
 * @since 2.0.0
 */
export interface _IFee {
    /**
     * The account ID that will receive the collected fee
     * @description
     * Specifies the account that will be credited when this fee is collected.
     * This account must be a valid account on the network.
     * 
     * @type {string}
     * @memberof _IFee
     * @example "0.0.12345"
     */
    collector_account_id: string;
    
    /**
     * Indicates whether all collectors are exempt from paying this fee
     * @description
     * When set to true, accounts that are designated as collectors for any fee
     * will not be charged this fee when they participate in transactions.
     * This prevents circular fee charging scenarios.
     * 
     * @type {boolean}
     * @memberof _IFee
     * @default false
     * @example
     * ```typescript
     * // Exempting all collector accounts from paying this fee
     * all_collectors_are_exempt: true
     * ```
     */
    all_collectors_are_exempt: boolean;
}