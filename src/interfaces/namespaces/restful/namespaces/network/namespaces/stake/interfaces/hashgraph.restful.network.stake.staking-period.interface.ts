/**
 * @file hashgraph.restful.network.stake.staking-period.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for staking period information in the Hashgraph Network REST API.
 * This interface represents the time boundaries of a staking period.
 * @category Interfaces
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Staking Period Interface
 * @interface _IStakingPeriod
 * @description Represents a time period during which staking rewards are calculated.
 * This interface defines the start and end timestamps of a staking period,
 * used for reward calculations and staking participation tracking.
 * @category Interfaces
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a staking period
 * const stakingPeriod: _IStakingPeriod = {
 *   from: "2023-01-01T00:00:00.000Z",  // Period start
 *   to: "2023-01-08T00:00:00.000Z"     // Period end
 * };
 * 
 * // Example of checking if a timestamp is within the period
 * const isInPeriod = (timestamp: string, period: _IStakingPeriod): boolean => {
 *   const time = new Date(timestamp).getTime();
 *   return time >= new Date(period.from).getTime() &&
 *          time <= new Date(period.to).getTime();
 * };
 * ```
 */
export interface _IStakingPeriod {
    /**
     * Period Start Timestamp
     * @type {string}
     * @description The ISO 8601 UTC timestamp marking the start of the staking period.
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * All staking activities after this timestamp are included in the period.
     * @required true
     * @memberof _IStakingPeriod
     * @since 2.0.0
     * @example "2023-01-01T00:00:00.000Z"
     */
    from: string;

    /**
     * Period End Timestamp
     * @type {string}
     * @description The ISO 8601 UTC timestamp marking the end of the staking period.
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * All staking activities before this timestamp are included in the period.
     * @required true
     * @memberof _IStakingPeriod
     * @since 2.0.0
     * @example "2023-01-08T00:00:00.000Z"
     */
    to: string;
}
