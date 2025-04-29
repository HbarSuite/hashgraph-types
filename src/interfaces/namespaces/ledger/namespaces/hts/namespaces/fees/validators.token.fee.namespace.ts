import { _ICustomFees } from "./interfaces/validators.token.fee.custom.interface";
import { _IFixedFee } from "./interfaces/validators.token.fee.fixed.interface";
import { _IFractionalFee } from "./interfaces/validators.token.fee.fractional.interface";
import { _IRoyaltyFee } from "./interfaces/validators.token.fee.royalty.interface";
import { _IFee } from "./interfaces/validators.token.fee.interface";
import { _IAmount } from "./interfaces/validators.token.fee.amount.interface";

/**
 * Token Fees Namespace
 * @description
 * Provides a comprehensive collection of interfaces for defining and managing
 * various types of token fees. This namespace encapsulates all fee-related
 * structures used in token operations, including fixed fees, fractional fees,
 * royalty fees, and custom fee configurations.
 * 
 * @remarks
 * The namespace serves as a central point for accessing different fee types
 * that can be applied to token transactions. Each fee type has specific
 * properties and behaviors that determine how fees are calculated and applied.
 * 
 * Supported fee types:
 * - Fixed fees: Constant amount charged per transaction
 * - Fractional fees: Percentage-based fees calculated from transaction value
 * - Royalty fees: Special percentage-based fees with fallback mechanisms
 * - Custom fees: User-defined fee structures for specialized use cases
 * 
 * Use cases:
 * - Token creation with fee schedules
 * - Fee updates for existing tokens
 * - Complex fee structure definitions
 * - Fee validation and calculation
 * 
 * @example
 * ```typescript
 * // Define a fixed fee
 * const fixedFee: _IFees.IFixedFee = {
 *   amount: "1.0",
 *   denominatingTokenId: "0.0.123456",
 *   collector: "0.0.789012"
 * };
 * 
 * // Define a fractional fee
 * const fractionalFee: _IFees.IFractionalFee = {
 *   percentage: {
 *     numerator: 5,
 *     denominator: 100
 *   },
 *   minimumAmount: "0.01",
 *   maximumAmount: "100.0",
 *   collector: "0.0.789012"
 * };
 * ```
 * 
 * @namespace
 * @category Namespaces
 * @subcategory Fees
 * @since 2.0.0
 */
export namespace _IFees {
    /**
     * Amount Interface
     * @description
     * Defines the structure for representing fractional fee amounts in token operations.
     * This type is an alias for the _IAmount interface, providing a way to specify
     * fractional fee amounts.
     * 
     * @type {_IAmount}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type IAmount = _IAmount;

    /**
     * Custom Fees Interface
     * @description
     * Defines the structure for custom fee configurations that can be applied to tokens.
     * This type is an alias for the _ICustomFees interface, providing a way to specify
     * specialized fee structures beyond the standard fee types.
     * 
     * @remarks
     * Custom fees allow for complex fee arrangements that may combine multiple fee types
     * or implement unique calculation logic. They provide flexibility for specialized
     * token economics and business models.
     * 
     * @type {_ICustomFees}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type ICustomFees = _ICustomFees;

    /**
     * Fixed Fee Interface
     * @description
     * Defines the structure for fixed fee configurations that can be applied to tokens.
     * This type is an alias for the _IFixedFee interface, specifying a constant fee
     * amount charged per transaction regardless of the transaction value.
     * 
     * @remarks
     * Fixed fees are straightforward fee structures that apply a consistent charge
     * for each transaction. They are useful for covering base operational costs
     * and are predictable for users.
     * 
     * @type {_IFixedFee}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type IFixedFee = _IFixedFee;

    /**
     * Fractional Fee Interface
     * @description
     * Defines the structure for fractional (percentage-based) fee configurations
     * that can be applied to tokens. This type is an alias for the _IFractionalFee
     * interface, specifying a fee that is calculated as a percentage of the
     * transaction value.
     * 
     * @remarks
     * Fractional fees scale with transaction size, making them suitable for
     * value-based fee models. They typically include minimum and maximum bounds
     * to ensure fees remain reasonable for very small or very large transactions.
     * 
     * @type {_IFractionalFee}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type IFractionalFee = _IFractionalFee;

    /**
     * Royalty Fee Interface
     * @description
     * Defines the structure for royalty fee configurations that can be applied to tokens.
     * This type is an alias for the _IRoyaltyFee interface, specifying a specialized
     * percentage-based fee typically used for creator royalties or similar use cases.
     * 
     * @remarks
     * Royalty fees are a specialized form of fractional fees often used to provide
     * ongoing compensation to content creators, artists, or original token issuers.
     * They may include fallback mechanisms and special collection rules.
     * 
     * @type {_IRoyaltyFee}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type IRoyaltyFee = _IRoyaltyFee;

    /**
     * Generic Fee Interface
     * @description
     * Defines the base structure for all fee types that can be applied to tokens.
     * This type is an alias for the _IFee interface, providing common properties
     * shared across different fee implementations.
     * 
     * @remarks
     * The generic fee interface serves as a foundation for all specific fee types,
     * ensuring consistent structure and behavior across the fee system. It defines
     * the essential properties that any fee must implement.
     * 
     * @type {_IFee}
     * @memberof _IFees
     * @since 2.0.0
     */
    export type IFee = _IFee;
}