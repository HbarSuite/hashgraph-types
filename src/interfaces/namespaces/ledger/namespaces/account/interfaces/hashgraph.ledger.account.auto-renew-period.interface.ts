import { _IAccounts } from '../hashgraph.ledger.account.namespace';

/**
 * Interface defining the auto-renewal period configuration for Hashgraph accounts
 * @interface _IAutoRenewPeriod
 * @description Specifies the duration for which an account will automatically renew its existence on the Hashgraph network.
 * The auto-renewal mechanism ensures account persistence by automatically extending its validity period.
 * @memberof IHashgraph.ILedger.IAccounts
 * @property {_IAccounts.ISeconds} seconds - The duration in seconds for which the account will automatically renew
 * @remarks The auto-renewal period must be within the network-defined limits (maximum 7890000 seconds or ~91.3 days)
 * @example
 * ```typescript
 * // Example of setting a 30-day auto-renewal period
 * const autoRenewPeriod: _IAutoRenewPeriod = {
 *   seconds: 2592000 // 30 days in seconds
 * };
 * ```
 */
export interface _IAutoRenewPeriod {
    /**
     * The duration of the auto-renewal period in seconds
     * @property {_IAccounts.ISeconds} seconds
     * @description Defines how long the account will automatically maintain its existence on the network.
     * When this period elapses, the account will automatically renew if it has sufficient balance.
     * @type {_IAccounts.ISeconds}
     * @memberof _IAutoRenewPeriod
     * @required
     * @remarks
     * - Maximum value: 7890000 seconds (~91.3 days)
     * - Minimum value: Network-defined minimum (typically 6999999 seconds)
     * - Renewal requires sufficient balance in the account
     * @example
     * ```typescript
     * seconds: 7776000 // 90 days in seconds
     * ```
     */
    seconds: _IAccounts.ISeconds;
}