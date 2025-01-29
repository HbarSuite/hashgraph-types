import Decimal from "decimal.js"
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.token-balance.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for token balances in the Hashgraph Network.
 * This model represents the balance state of a token, including:
 * - Token identification
 * - Balance tracking
 * - Decimal precision
 * - Value representation
 * @category Models
 * @subcategory Tokens
 * @since 2.0.0
 */

/**
 * Token Balance Model
 * @class _TokenBalance
 * @implements {IHashgraph.ITokenBalance}
 * @description Represents the balance state of a specific token.
 * This class provides:
 * - Token identification
 * - Balance management
 * - Precision control
 * - Value formatting
 * Used for tracking token holdings and operations.
 * @category Models
 * @subcategory Tokens
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic token balance
 * const basicBalance = new _TokenBalance(
 *   "0.0.1234",  // Token ID
 *   "100",       // Whole tokens
 *   2            // 2 decimal places
 * );
 * 
 * // Example of creating a token balance with decimals
 * const preciseBalance = new _TokenBalance(
 *   "0.0.5678",     // Token ID
 *   "1000.55",      // Balance with decimals
 *   8               // 8 decimal places
 * );
 * 
 * // Example of validating token balance
 * const validateBalance = (balance: _TokenBalance): boolean => {
 *   const tokenIdPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   
 *   return (
 *     tokenIdPattern.test(balance.tokenId) &&
 *     balance.balance instanceof Decimal &&
 *     !balance.balance.isNegative() &&
 *     balance.decimals instanceof Decimal &&
 *     balance.decimals.isInteger() &&
 *     !balance.decimals.isNegative()
 *   );
 * };
 * 
 * // Example of formatting token balance
 * const formatBalance = (balance: _TokenBalance): string => {
 *   const formattedAmount = balance.balance.toFixed(
 *     balance.decimals.toNumber()
 *   );
 *   
 *   return `${formattedAmount} ${balance.tokenId}`;
 * };
 * 
 * // Example of calculating token value
 * const calculateValue = (
 *   balance: _TokenBalance,
 *   priceUsd: number
 * ): string => {
 *   const value = balance.balance.times(priceUsd);
 *   return `$${value.toFixed(2)} USD`;
 * };
 * ```
 */
export class _TokenBalance implements IHashgraph.ITokenBalance {
    /**
     * Token Identifier
     * @type {string}
     * @description The unique identifier for the token.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Required field
     * - Must be valid token ID
     * - Network specific
     * - Identifies token type
     * - Links to token info
     * @memberof _TokenBalance
     * @public
     * @since 2.0.0
     * @example "0.0.1234"
     */
    @ApiProperty({
        description: "Unique identifier for the token",
        example: "0.0.1234"
    })
    tokenId: string;

    /**
     * Token Balance
     * @type {Decimal}
     * @description The current token balance amount.
     * Properties:
     * - Required field
     * - High precision
     * - Non-negative value
     * - Decimal support
     * - Exact representation
     * @memberof _TokenBalance
     * @public
     * @since 2.0.0
     * @example new Decimal("1000.55")
     */
    @ApiProperty({
        description: "The current balance of the token",
        example: "1000.55"
    })
    balance: Decimal;

    /**
     * Decimal Precision
     * @type {Decimal}
     * @description The token's decimal places precision.
     * Properties:
     * - Required field
     * - Non-negative integer
     * - Defines granularity
     * - Affects formatting
     * - Token specific
     * @memberof _TokenBalance
     * @public
     * @since 2.0.0
     * @example new Decimal(8)
     */
    @ApiProperty({
        description: "The number of decimal places used to represent the token's smallest unit",
        example: "8"
    })
    decimals: Decimal;

    /**
     * Creates a new token balance instance.
     * @constructor
     * @param {string} tokenId - Token ID in shard.realm.num format
     * @param {Decimal | string | number} balance - Token balance amount
     * @param {Decimal | string | number} decimals - Decimal places precision
     * @throws {Error} If tokenId is not a valid token ID string
     * @throws {Error} If balance cannot be converted to Decimal
     * @throws {Error} If decimals is not a non-negative integer
     * @memberof _TokenBalance
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic token balance
     * const basicBalance = new _TokenBalance(
     *   "0.0.1234",
     *   "100",
     *   2
     * );
     * 
     * // Create a precise token balance
     * const preciseBalance = new _TokenBalance(
     *   "0.0.5678",
     *   new Decimal("1000.55"),
     *   new Decimal(8)
     * );
     * 
     * // Format the balance with proper precision
     * const formatted = preciseBalance.balance.toFixed(
     *   preciseBalance.decimals.toNumber()
     * );
     * console.log(`Balance: ${formatted} ${preciseBalance.tokenId}`);
     * ```
     */
    constructor(tokenId: string, balance: Decimal | string | number, decimals: Decimal | string | number) {
        // Validate tokenId parameter
        if (!tokenId || typeof tokenId !== 'string') {
            throw new Error('Invalid token ID')
        }
        this.tokenId = tokenId

        // Convert and validate balance parameter
        try {
            this.balance = new Decimal(balance)
        } catch (error) {
            throw new Error('Invalid balance')
        }

        // Convert and validate decimals parameter
        try {
            this.decimals = new Decimal(decimals)
            if (!this.decimals.isInteger() || this.decimals.isNegative()) {
                throw new Error('Decimals must be a non-negative integer')
            }
        } catch (error) {
            throw new Error('Invalid decimals')
        }
    }
}