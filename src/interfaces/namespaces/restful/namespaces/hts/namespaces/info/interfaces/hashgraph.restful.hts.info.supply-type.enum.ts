/**
 * @file hashgraph.restful.hts.info.supply-type.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the enumeration of possible supply types for tokens in the Hashgraph Token Service (HTS).
 * Determines whether a token has a fixed maximum supply or can have an unlimited supply.
 * @category Enums
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Supply Type Enumeration
 * @enum {string}
 * @description Represents the possible supply types of a token on the Hashgraph Token Service (HTS).
 * This enum determines the token's supply model, indicating whether it has a fixed maximum supply (Finite)
 * or can have an unlimited supply through minting (Infinite). This is a fundamental characteristic
 * that affects the token's economics and utility.
 * @readonly
 * @category Enums
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Create a token with finite supply
 * const supplyType: _SupplyTypeEnum = _SupplyTypeEnum.Finite;
 * const tokenConfig = {
 *   supplyType,
 *   maxSupply: "1000000" // Only required for Finite supply type
 * };
 * ```
 */
export enum _SupplyTypeEnum {
    /**
     * Finite
     * @description Indicates that the token has a fixed maximum supply that cannot be exceeded.
     * Tokens with finite supply have a predetermined cap on the total number of tokens that
     * can ever exist, making them suitable for deflationary economic models.
     * @since 2.0.0
     */
    Finite = 'FINITE',

    /**
     * Infinite
     * @description Indicates that the token can have an unlimited supply through minting.
     * Tokens with infinite supply can be minted as needed, allowing for flexible supply
     * management and potential future expansion of the token supply.
     * @since 2.0.0
     */
    Infinite = 'INFINITE'
}