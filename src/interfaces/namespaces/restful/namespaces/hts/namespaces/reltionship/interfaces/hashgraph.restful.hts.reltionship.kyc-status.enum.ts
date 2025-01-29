/**
 * @file hashgraph.restful.hts.reltionship.kyc-status.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the possible KYC (Know Your Customer) states for token-account relationships
 * in the Hashgraph Token Service (HTS) REST API. This enumeration represents the various
 * compliance states that determine an account's ability to transact with a token.
 * @category Enums
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token KYC Status Enumeration
 * @enum {string}
 * @description Represents the possible Know Your Customer (KYC) verification states for a
 * token-account relationship on the Hashgraph Token Service (HTS). This enum defines the
 * compliance states that control whether an account can transact with a token based on
 * its KYC verification status.
 * @readonly
 * @category Enums
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example of checking token KYC status
 * const status: _KycStatusEnum = _KycStatusEnum.Granted;
 * 
 * switch (status) {
 *   case _KycStatusEnum.Granted:
 *     console.log('Account is KYC verified and can transact');
 *     break;
 *   case _KycStatusEnum.Revoked:
 *     console.log('Account KYC is revoked - transactions blocked');
 *     break;
 *   case _KycStatusEnum.NotApplicable:
 *     console.log('No KYC requirements for this token');
 *     break;
 * }
 * ```
 */
export enum _KycStatusEnum {
    /**
     * Not Applicable
     * @description Indicates that KYC verification is not required or relevant for this token.
     * This status means:
     * - The token was created without KYC requirements
     * - KYC verification is not needed for transactions
     * - All accounts can transact without KYC verification
     * Typically used for tokens without regulatory compliance requirements.
     * @since 2.0.0
     */
    NotApplicable = 'NOT_APPLICABLE',

    /**
     * Granted
     * @description Indicates that the account has successfully completed KYC verification.
     * When granted:
     * - Account can perform all token operations
     * - Compliance requirements are satisfied
     * - Full transaction capabilities are enabled
     * Required for tokens with regulatory or compliance requirements.
     * @since 2.0.0
     */
    Granted = 'GRANTED',

    /**
     * Revoked
     * @description Indicates that the account's KYC verification has been revoked.
     * When revoked:
     * - Account cannot perform token transactions
     * - Previous verification is no longer valid
     * - New KYC verification may be required
     * Used for compliance enforcement or when verification expires/fails.
     * @since 2.0.0
     */
    Revoked = 'REVOKED'
}