/**
 * @file hashgraph.restful.hts.info.type.enum.ts
 * @module @hashgraph/sdk
 * @description Defines the enumeration of possible token types in the Hashgraph Token Service (HTS).
 * Distinguishes between fungible and non-fungible tokens, each with their unique characteristics and use cases.
 * @category Enums
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Type Enumeration
 * @enum {string}
 * @description Represents the fundamental types of tokens that can be created on the Hashgraph Token Service (HTS).
 * This enum distinguishes between fungible tokens (which are divisible and interchangeable) and
 * non-fungible tokens (which are unique and non-interchangeable). The token type is a core
 * characteristic that determines the token's behavior and suitable use cases.
 * @readonly
 * @category Enums
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Create a fungible token configuration
 * const tokenConfig = {
 *   type: _TypeEnum.FungibleCommon,
 *   decimals: "8",
 *   initialSupply: "1000000"
 * };
 * 
 * // Create an NFT configuration
 * const nftConfig = {
 *   type: _TypeEnum.NonFungibleUnique,
 *   supplyType: _SupplyTypeEnum.Finite,
 *   maxSupply: "100"
 * };
 * ```
 */
export enum _TypeEnum {
    /**
     * Fungible Common
     * @description Represents a fungible token where each unit is identical and interchangeable.
     * These tokens are divisible and can be traded in fractional amounts. Commonly used for
     * cryptocurrencies, utility tokens, and other assets where one unit is equivalent to another.
     * Supports decimal places and is suitable for representing divisible assets like currencies.
     * @since 2.0.0
     */
    FungibleCommon = 'FUNGIBLE_COMMON',

    /**
     * Non-Fungible Unique
     * @description Represents a non-fungible token where each token is unique and distinct.
     * Each NFT has unique properties and cannot be subdivided. Ideal for representing
     * unique digital assets, collectibles, certificates, or any asset where uniqueness
     * and individuality are essential characteristics. Each token has its own distinct
     * identity and metadata.
     * @since 2.0.0
     */
    NonFungibleUnique = 'NON_FUNGIBLE_UNIQUE'
}