import { _CustomFees } from "./models/validators.token.fee.custom.model";
import { _FixedFee } from "./models/validators.token.fee.fixed.model";
import { _FractionalFee } from "./models/validators.token.fee.fractional.model";
import { _RoyaltyFee } from "./models/validators.token.fee.royalty.model";
import { _Fee } from "./models/validators.token.fee.model";

/**
 * Token Fees Namespace
 * @description
 * Provides a comprehensive collection of classes for defining and managing
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
 * // Create a fixed fee
 * const fixedFee = new _Fees.FixedFee({
 *   amount: 1,
 *   denominating_token_id: "0.0.123456",
 *   collector_account_id: "0.0.789012",
 *   all_collectors_are_exempt: false
 * });
 * 
 * // Create a fractional fee
 * const fractionalFee = new _Fees.FractionalFee({
 *   amount: { numerator: 5, denominator: 100 },
 *   minimum: 1,
 *   maximum: 100,
 *   net_of_transfers: false,
 *   collector_account_id: "0.0.789012",
 *   all_collectors_are_exempt: false
 * });
 * ```
 * 
 * @namespace
 * @category Namespaces
 * @subcategory Fees
 * @since 2.0.0
 */
export namespace _Fees {
    /**
     * Custom Fees Class
     * @description
     * Provides a class for custom fee configurations that can be applied to tokens.
     * This class extends the _CustomFees class, providing a way to specify
     * specialized fee structures beyond the standard fee types.
     * 
     * @remarks
     * Custom fees allow for complex fee arrangements that may combine multiple fee types
     * or implement unique calculation logic. They provide flexibility for specialized
     * token economics and business models.
     * 
     * @class CustomFees
     * @extends {_CustomFees}
     * @memberof _Fees
     * @since 2.0.0
     */
    export class CustomFees extends _CustomFees { }

    /**
     * Fixed Fee Class
     * @description
     * Provides a class for fixed fee configurations that can be applied to tokens.
     * This class extends the _FixedFee class, specifying a constant fee
     * amount charged per transaction regardless of the transaction value.
     * 
     * @remarks
     * Fixed fees are straightforward fee structures that apply a consistent charge
     * for each transaction. They are useful for covering base operational costs
     * and are predictable for users.
     * 
     * @class FixedFee
     * @extends {_FixedFee}
     * @memberof _Fees
     * @since 2.0.0
     */
    export class FixedFee extends _FixedFee { }

    /**
     * Fractional Fee Class
     * @description
     * Provides a class for fractional (percentage-based) fee configurations
     * that can be applied to tokens. This class extends the _FractionalFee
     * class, specifying a fee that is calculated as a percentage of the
     * transaction value.
     * 
     * @remarks
     * Fractional fees scale with transaction size, making them suitable for
     * value-based fee models. They typically include minimum and maximum bounds
     * to ensure fees remain reasonable for very small or very large transactions.
     * 
     * @class FractionalFee
     * @extends {_FractionalFee}
     * @memberof _Fees
     * @since 2.0.0
     */
    export class FractionalFee extends _FractionalFee { }

    /**
     * Royalty Fee Class
     * @description
     * Provides a class for royalty fee configurations that can be applied to tokens.
     * This class extends the _RoyaltyFee class, specifying a specialized
     * percentage-based fee typically used for creator royalties or similar use cases.
     * 
     * @remarks
     * Royalty fees are a specialized form of fractional fees often used to provide
     * ongoing compensation to content creators, artists, or original token issuers.
     * They may include fallback mechanisms and special collection rules.
     * 
     * @class RoyaltyFee
     * @extends {_RoyaltyFee}
     * @memberof _Fees
     * @since 2.0.0
     */
    export class RoyaltyFee extends _RoyaltyFee { }

    /**
     * Generic Fee Interface
     * @description
     * Defines the base structure for all fee types that can be applied to tokens.
     * This type is an alias for the _Fee interface, providing common properties
     * shared across different fee implementations.
     * 
     * @remarks
     * The generic fee interface serves as a foundation for all specific fee types,
     * ensuring consistent structure and behavior across the fee system. It defines
     * the essential properties that any fee must implement.
     * 
     * @type {_Fee}
     * @memberof _Fees
     * @since 2.0.0
     */
    export type IFee = _Fee;
}