/**
 * @file hashgraph.restful.hts.reltionship.freeze-status.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the possible freeze states for token-account relationships in the Hashgraph Token Service (HTS) REST API.
 * This enumeration represents the various states that control an account's ability to transfer tokens.
 * @category Enums
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Freeze Status Enumeration
 * @enum {string}
 * @description Represents the possible freeze states for a token-account relationship on the
 * Hashgraph Token Service (HTS). This enum defines the states that control whether an account
 * can transfer or receive tokens, providing a mechanism for token compliance and control.
 * @readonly
 * @category Enums
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example of checking token freeze status
 * const status: _FreezeStatusEnum = _FreezeStatusEnum.Frozen;
 * 
 * if (status === _FreezeStatusEnum.Frozen) {
 *   console.log('Token transfers are currently disabled');
 * } else if (status === _FreezeStatusEnum.Unfrozen) {
 *   console.log('Token transfers are allowed');
 * }
 * ```
 */
export enum _FreezeStatusEnum {
    /**
     * Not Applicable
     * @description Indicates that the freeze functionality is not enabled or relevant for this token.
     * This status means:
     * - The token was created without freeze capability
     * - Freeze/unfreeze operations cannot be performed
     * - Transfers are not controlled by freeze status
     * @since 2.0.0
     */
    NotApplicable = 'NOT_APPLICABLE',

    /**
     * Frozen
     * @description Indicates that the account's ability to transfer this token is currently frozen.
     * When frozen:
     * - The account cannot send tokens
     * - The account cannot receive tokens
     * - Only administrative operations are allowed
     * Used for compliance, security, or administrative purposes.
     * @since 2.0.0
     */
    Frozen = 'FROZEN',

    /**
     * Unfrozen
     * @description Indicates that the account has normal transfer capabilities for this token.
     * When unfrozen:
     * - The account can send tokens freely
     * - The account can receive tokens
     * - Normal token operations are permitted
     * This is the standard operational state for active accounts.
     * @since 2.0.0
     */
    Unfrozen = 'UNFROZEN'
}