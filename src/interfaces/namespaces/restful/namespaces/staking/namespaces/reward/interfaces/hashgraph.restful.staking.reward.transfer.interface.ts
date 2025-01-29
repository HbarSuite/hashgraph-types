/**
 * @file transfer.interface.ts
 * @module @hashgraph/sdk
 * @interface _ITransfer
 * @description Interface defining the structure of a staking reward transfer in the Hashgraph network.
 * Represents a transfer of staking rewards to an account, including the recipient account identifier
 * and the amount transferred in tinybars.
 * @category Interfaces
 * @subcategory Staking
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example of a staking reward transfer to account 0.0.1234
 * const stakingTransfer: _ITransfer = {
 *   account: "0.0.1234",
 *   amount: 1000000000 // 10 HBAR
 * };
 * 
 * // Example with null account (unknown recipient)
 * const unknownRecipient: _ITransfer = {
 *   account: null,
 *   amount: 500000000 // 5 HBAR
 * };
 * ```
 */
export interface _ITransfer {
    /**
     * Account identifier for the staking reward recipient
     * @type {string | null}
     * @description The account ID (in shard.realm.num format) or alias of the account receiving the staking reward.
     * A null value indicates the recipient account is unknown or not applicable.
     * @required false
     * @example "0.0.1234" or "alice@example.com"
     * @memberof _ITransfer
     * @since 2.0.0
     * @remarks
     * - Must be a valid account ID in shard.realm.num format or a registered alias
     * - Can be null in cases where the recipient cannot be determined
     */
    account: string | null;

    /**
     * Staking reward amount in tinybars
     * @type {number}
     * @description The amount of HBAR (denominated in tinybars) transferred as a staking reward.
     * One HBAR equals 100,000,000 tinybars.
     * @required true
     * @example 1000000000 // 10 HBAR
     * @min 0
     * @memberof _ITransfer
     * @since 2.0.0
     * @remarks
     * - Must be a non-negative integer
     * - Value is always in tinybars (1 HBAR = 100,000,000 tinybars)
     * - Common values range from 1 to billions of tinybars
     */
    amount: number;
}