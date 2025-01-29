/**
 * @file hashgraph.restful.hts.info.pause-status.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the enumeration of possible pause states for tokens in the Hashgraph Token Service (HTS).
 * Used to control and indicate the current transfer status of a token.
 * @category Enums
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Pause Status Enumeration
 * @enum {string}
 * @description Represents the possible pause states of a token on the Hashgraph Token Service (HTS).
 * Controls whether token transfers are currently allowed, paused, or if the pause feature
 * is not applicable to the token. This is part of the token's compliance and control features.
 * @readonly
 * @category Enums
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Check if token transfers are currently paused
 * const pauseStatus: _PauseStatusEnum = _PauseStatusEnum.Paused;
 * if (pauseStatus === _PauseStatusEnum.Paused) {
 *   console.log('Token transfers are currently paused');
 * }
 * ```
 */
export enum _PauseStatusEnum {
    /**
     * Not Applicable
     * @description Indicates that the pause feature is not configured or not applicable for this token.
     * This status is typically set for tokens that don't implement the pause feature.
     * @since 2.0.0
     */
    NotApplicable = 'NOT_APPLICABLE',

    /**
     * Paused
     * @description Indicates that token transfers are currently paused and not allowed.
     * When in this state, no transfers of the token can occur until the token is unpaused.
     * @since 2.0.0
     */
    Paused = 'PAUSED',

    /**
     * Unpaused
     * @description Indicates that token transfers are currently allowed and can proceed normally.
     * This is the normal operational state for tokens that implement the pause feature.
     * @since 2.0.0
     */
    Unpaused = 'UNPAUSED'
}