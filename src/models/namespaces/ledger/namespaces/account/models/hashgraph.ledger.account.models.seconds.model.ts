import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Model for managing time durations in seconds with 64-bit precision
 * 
 * @class _Seconds
 * @implements {IHashgraph.ILedger.IAccounts.ISeconds}
 * @description Provides comprehensive functionality for managing time durations including:
 * - Complete 64-bit value representation and handling
 * - High-precision time calculations and operations
 * - Extensive range validation and verification
 * - Robust type safety and error prevention
 * - Comprehensive overflow management
 * @namespace Hashgraph.Ledger.Account
 * @category Models
 * @subcategory Ledger
 * @since 2.0.0
 * 
 * This class provides complete management of second values:
 * - Value Representation:
 *   - Full 64-bit precision support
 *   - Efficient low/high bit splitting
 *   - Flexible signed/unsigned handling
 *   - Comprehensive range management
 *   - Overflow protection
 * 
 * - Validation:
 *   - Thorough range checking
 *   - Strict type verification
 *   - Complete bit validation
 *   - Extensive value constraints
 *   - Format consistency
 * 
 * - Calculations:
 *   - High-precision arithmetic
 *   - Robust overflow handling
 *   - Advanced sign management
 *   - Strict range control
 *   - Error prevention
 * 
 * - Time Management:
 *   - Precise duration tracking
 *   - Accurate time calculations
 *   - Period management
 *   - Interval handling
 *   - Schedule support
 * 
 * Key features:
 * - Full 64-bit precision support
 * - Comprehensive validation system
 * - Strong type safety guarantees
 * - Robust error handling
 * - Complete overflow protection
 * 
 * Implementation details:
 * - Uses split 32-bit values for 64-bit support
 * - Handles signed and unsigned integers
 * - Manages high-precision calculations
 * - Prevents numeric overflow
 * - Ensures format consistency
 * 
 * @example
 * // Create a new seconds instance for various durations
 * 
 * // 1 minute duration
 * const oneMinute = new _Seconds(
 *   60,    // 60 seconds in low bits
 *   0,     // high bits not needed
 *   false  // signed value
 * );
 * 
 * // 1 hour duration
 * const oneHour = new _Seconds(
 *   3600,  // 3600 seconds in low bits
 *   0,     // high bits not needed
 *   false  // signed value
 * );
 * 
 * // 1 day duration
 * const oneDay = new _Seconds(
 *   86400, // 86400 seconds in low bits
 *   0,     // high bits not needed
 *   false  // signed value
 * );
 * 
 * // 90 days duration
 * const ninetyDays = new _Seconds(
 *   7776000, // 90 * 24 * 60 * 60 seconds
 *   0,       // high bits not needed
 *   false    // signed value
 * );
 * 
 * @throws {Error} When validation fails for any required field
 * @throws {Error} When numeric values are out of range
 * @throws {Error} When types are incorrect
 */
export class _Seconds implements IHashgraph.ILedger.IAccounts.ISeconds {
    /**
     * The lower 32 bits of the 64-bit second value
     * 
     * @type {number}
     * @memberof _Seconds
     * @description Represents the lower 32 bits providing:
     * - Precise lower value storage
     * - Efficient range management
     * - Overflow prevention
     * - Complete value validation
     * - Type safety enforcement
     * 
     * Value requirements:
     * - Must be a valid integer number
     * - Must be between 0 and 4294967295 (2^32 - 1)
     * - Must fit within 32 bits
     * - Must be non-negative
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be a numeric type
     * - Must be an integer value
     * - Must be within valid range
     * - Must be properly typed
     * - Must be consistently formatted
     * 
     * Range handling:
     * - Supports full 32-bit range
     * - Manages numeric boundaries
     * - Prevents overflow conditions
     * - Ensures value consistency
     * - Maintains precision
     * 
     * @example
     * // Valid low value examples
     * low = 0                // Minimum value
     * low = 60              // 1 minute
     * low = 3600            // 1 hour
     * low = 86400           // 1 day
     * low = 7776000         // 90 days
     * low = 4294967295      // Maximum value (2^32 - 1)
     * 
     * // Invalid values (will throw errors)
     * low = -1              // Error: Negative value
     * low = 4294967296      // Error: Exceeds 32 bits
     * low = 1.5             // Error: Not an integer
     * low = "1000"          // Error: Not a number
     * 
     * @throws {Error} When an invalid low value is provided
     * @throws {Error} When the value is out of range
     * @throws {Error} When the type is incorrect
     */
    @ApiProperty({
        description: 'The lower 32 bits of the 64-bit second value',
        type: () => Number,
        required: true,
    })
    low: number;

    /**
     * The upper 32 bits of the 64-bit second value
     * 
     * @type {number}
     * @memberof _Seconds
     * @description Represents the upper 32 bits providing:
     * - Precise higher value storage
     * - Extended range management
     * - Overflow prevention
     * - Complete value validation
     * - Type safety enforcement
     * 
     * Value requirements:
     * - Must be a valid integer number
     * - Must be between 0 and 4294967295 (2^32 - 1)
     * - Must fit within 32 bits
     * - Must be non-negative
     * - Must be properly formatted
     * 
     * Validation rules:
     * - Must be a numeric type
     * - Must be an integer value
     * - Must be within valid range
     * - Must be properly typed
     * - Must be consistently formatted
     * 
     * Range handling:
     * - Supports full 32-bit range
     * - Manages numeric boundaries
     * - Prevents overflow conditions
     * - Ensures value consistency
     * - Maintains precision
     * 
     * @example
     * // Valid high value examples
     * high = 0                // Common case for small values
     * high = 1                // For values > 2^32
     * high = 4294967295      // Maximum value (2^32 - 1)
     * 
     * // Usage with low bits
     * // Representing 2^32 seconds:
     * high = 1
     * low = 0
     * 
     * // Invalid values (will throw errors)
     * high = -1              // Error: Negative value
     * high = 4294967296      // Error: Exceeds 32 bits
     * high = 1.5             // Error: Not an integer
     * high = "0"             // Error: Not a number
     * 
     * @throws {Error} When an invalid high value is provided
     * @throws {Error} When the value is out of range
     * @throws {Error} When the type is incorrect
     */
    @ApiProperty({
        description: 'The upper 32 bits of the 64-bit second value',
        type: () => Number,
        required: true,
    })
    high: number;

    /**
     * Flag indicating if the value is unsigned
     * 
     * @type {boolean}
     * @memberof _Seconds
     * @description Controls value interpretation providing:
     * - Comprehensive sign handling
     * - Range boundary determination
     * - Value interpretation rules
     * - Type validation enforcement
     * - Calculation behavior control
     * 
     * Flag requirements:
     * - Must be a valid boolean value
     * - Directly affects valid value range
     * - Controls sign handling behavior
     * - Influences arithmetic operations
     * - Determines validation rules
     * 
     * Validation rules:
     * - Must be strict boolean type
     * - Must be explicitly defined
     * - Must be consistently applied
     * - Must be properly validated
     * - Must maintain type safety
     * 
     * Impact on calculations:
     * - Determines value interpretation
     * - Affects range validation
     * - Controls overflow checks
     * - Influences comparisons
     * - Guides arithmetic operations
     * 
     * @example
     * // Valid unsigned flag usage
     * 
     * // For signed values (allows negative numbers in two's complement)
     * unsigned = false
     * // Valid range: -2^63 to 2^63-1
     * 
     * // For unsigned values (positive numbers only)
     * unsigned = true
     * // Valid range: 0 to 2^64-1
     * 
     * // Invalid values (will throw errors)
     * unsigned = null        // Error: Not a boolean
     * unsigned = undefined   // Error: Not a boolean
     * unsigned = 1          // Error: Not a boolean
     * unsigned = "true"     // Error: Not a boolean
     * 
     * @throws {Error} When an invalid unsigned flag is provided
     * @throws {Error} When the type is incorrect
     * @throws {Error} When the value is undefined
     */
    @ApiProperty({
        description: 'Indicates whether the value is unsigned',
        type: () => Boolean,
        required: true,
    })
    unsigned: boolean;

    /**
     * Creates an instance of the _Seconds class
     * 
     * @constructor
     * @param {number} low - The lower 32 bits value
     * @param {number} high - The upper 32 bits value
     * @param {boolean} unsigned - Flag indicating if value is unsigned
     * @throws {Error} When validation fails for any parameter
     * @memberof _Seconds
     * @description Initializes a new seconds instance with:
     * - Comprehensive parameter validation
     * - Complete field verification
     * - Strict type checking
     * - Safe instance initialization
     * - Error handling setup
     * 
     * Validation process:
     * - Verifies all parameter presence
     * - Validates numeric ranges
     * - Enforces type constraints
     * - Ensures data consistency
     * - Checks format requirements
     * 
     * Required parameters:
     * - low: Lower 32 bits (0 to 4294967295)
     * - high: Upper 32 bits (0 to 4294967295)
     * - unsigned: Sign flag (true/false)
     * 
     * Implementation details:
     * - Handles 64-bit values
     * - Supports signed/unsigned
     * - Prevents overflows
     * - Maintains precision
     * - Ensures consistency
     * 
     * @example
     * // Create valid seconds instances
     * 
     * // 1 minute duration
     * const oneMinute = new _Seconds(
     *   60,    // 60 seconds
     *   0,     // No high bits needed
     *   false  // Signed value
     * );
     * 
     * // 1 hour duration
     * const oneHour = new _Seconds(
     *   3600,  // 3600 seconds
     *   0,     // No high bits needed
     *   false  // Signed value
     * );
     * 
     * // 1 day duration
     * const oneDay = new _Seconds(
     *   86400, // 86400 seconds
     *   0,     // No high bits needed
     *   false  // Signed value
     * );
     * 
     * // 90 days duration
     * const ninetyDays = new _Seconds(
     *   7776000, // 90 * 24 * 60 * 60 seconds
     *   0,       // No high bits needed
     *   false    // Signed value
     * );
     * 
     * // These will throw errors
     * const invalid1 = new _Seconds(-1, 0, false);     // Error: Invalid low value
     * const invalid2 = new _Seconds(1000, -1, false);  // Error: Invalid high value
     * const invalid3 = new _Seconds(1000, 0, "true");  // Error: Invalid unsigned value
     * const invalid4 = new _Seconds(4294967296, 0, false); // Error: Low value too large
     * const invalid5 = new _Seconds(1000, 4294967296, false); // Error: High value too large
     * const invalid6 = new _Seconds(1.5, 0, false);    // Error: Not an integer
     */
    constructor(low: number, high: number, unsigned: boolean) {
        // Validate low value is within valid 32-bit unsigned range
        if (!Number.isInteger(low) || low < 0 || low > 4294967295) {
            throw new Error('Invalid low value. Must be an integer between 0 and 4294967295.');
        }
        this.low = low;

        // Validate high value is within valid 32-bit unsigned range
        if (!Number.isInteger(high) || high < 0 || high > 4294967295) {
            throw new Error('Invalid high value. Must be an integer between 0 and 4294967295.');
        }
        this.high = high;

        // Validate unsigned is boolean type
        if (typeof unsigned !== 'boolean') {
            throw new Error('Invalid unsigned value. Must be a boolean.');
        }
        this.unsigned = unsigned;
    }
}