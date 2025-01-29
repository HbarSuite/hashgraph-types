import { Hbar } from "@hashgraph/sdk"
import { IHashgraph } from '../../interfaces/hashgraph.namespace'
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { _TokenBalance } from './hashgraph.models.token-balance.model'

/**
 * @file hashgraph.models.account-balance.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for account balances in the Hashgraph Network.
 * This model represents the complete financial state of an account, including:
 * - Account identification
 * - HBAR cryptocurrency balance
 * - Token holdings and balances
 * @category Models
 * @subcategory Accounts
 * @since 2.0.0
 */

/**
 * Account Balance Model
 * @class _AccountBalance
 * @implements {IHashgraph.IAccountBalance}
 * @description Represents the financial state of a Hashgraph account.
 * This class provides:
 * - Account identification
 * - Native HBAR balance tracking
 * - Token balance management
 * - Balance validation
 * Used for account balance monitoring and management.
 * @category Models
 * @subcategory Accounts
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic account balance
 * const basicBalance = new _AccountBalance(
 *   "0.0.1234",
 *   new Hbar(10),  // 10 HBAR
 *   []  // No tokens
 * );
 * 
 * // Example of creating an account balance with tokens
 * const tokenBalance1 = new _TokenBalance("0.0.5678", 1000);  // 1000 units of token
 * const tokenBalance2 = new _TokenBalance("0.0.9012", 500);   // 500 units of token
 * const fullBalance = new _AccountBalance(
 *   "0.0.1234",
 *   new Hbar(100),  // 100 HBAR
 *   [tokenBalance1, tokenBalance2]
 * );
 * 
 * // Example of validating account balance parameters
 * const validateBalance = (balance: _AccountBalance): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   
 *   return (
 *     accountPattern.test(balance.wallet) &&
 *     balance.hbars instanceof Hbar &&
 *     Array.isArray(balance.tokens) &&
 *     balance.tokens.every(token => token instanceof _TokenBalance)
 *   );
 * };
 * 
 * // Example of formatting balance for display
 * const formatBalance = (balance: _AccountBalance): string => {
 *   const parts = [
 *     `Account: ${balance.wallet}`,
 *     `HBAR: ${balance.hbars.toString()}`,
 *     `Tokens: ${balance.tokens.length}`
 *   ];
 *   
 *   if (balance.tokens.length > 0) {
 *     parts.push('\nToken Balances:');
 *     balance.tokens.forEach(token => {
 *       parts.push(`  ${token.token_id}: ${token.balance}`);
 *     });
 *   }
 *   
 *   return parts.join('\n');
 * };
 * ```
 */
export class _AccountBalance implements IHashgraph.IAccountBalance {
    /**
     * Account Identifier
     * @type {string}
     * @description The unique identifier for the account.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Required field
     * - Must be a valid Hedera account ID
     * - Identifies account owner
     * - Used for balance lookup
     * - Links to account record
     * @memberof _AccountBalance
     * @public
     * @since 2.0.0
     * @example "0.0.1234"
     */
    @ApiProperty({
        description: "The unique identifier for the account, typically in the format of 0.0.xxx",
        example: "0.0.1234"
    })
    wallet: string;

    /**
     * HBAR Balance
     * @type {Hbar}
     * @description The account's HBAR cryptocurrency balance.
     * Properties:
     * - Required field
     * - Native cryptocurrency
     * - Represents tinybars
     * - Used for transaction fees
     * - Supports decimal values
     * @memberof _AccountBalance
     * @public
     * @since 2.0.0
     * @example new Hbar(100)  // 100 HBAR
     */
    @ApiProperty({
        description: "The current balance of HBAR cryptocurrency in the account",
        type: () => Hbar
    })
    hbars: Hbar;

    /**
     * Token Balances
     * @type {Array<IHashgraph.ITokenBalance>}
     * @description Collection of token balances held by the account.
     * Properties:
     * - Required field
     * - Array of token records
     * - Each record contains token ID and balance
     * - Supports multiple token types
     * - Maintains balance history
     * @memberof _AccountBalance
     * @public
     * @since 2.0.0
     * @see {@link _TokenBalance}
     */
    @ApiProperty({
        description: "An array of token balances, each representing a different token held by the account",
        type: () => _TokenBalance,
        isArray: true
    })
    tokens: Array<IHashgraph.ITokenBalance>;

    /**
     * Creates a new account balance instance.
     * @constructor
     * @param {string} wallet - Account ID in shard.realm.num format
     * @param {Hbar} hbars - HBAR balance amount
     * @param {Array<IHashgraph.ITokenBalance>} tokens - Collection of token balances
     * @throws {Error} If wallet is not a valid account ID string
     * @throws {Error} If hbars is not a valid Hbar instance
     * @throws {Error} If tokens is not a valid array
     * @memberof _AccountBalance
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic account balance
     * const basicBalance = new _AccountBalance(
     *   "0.0.1234",
     *   new Hbar(10),
     *   []
     * );
     * 
     * // Create an account balance with tokens
     * const fullBalance = new _AccountBalance(
     *   "0.0.1234",
     *   new Hbar(100),
     *   [
     *     new _TokenBalance("0.0.5678", 1000),
     *     new _TokenBalance("0.0.9012", 500)
     *   ]
     * );
     * ```
     */
    constructor(wallet: string, hbars: Hbar, tokens: Array<IHashgraph.ITokenBalance>) {
        // Validate wallet address
        if (!wallet || typeof wallet !== 'string') {
            throw new Error('Invalid wallet address')
        }
        this.wallet = wallet

        // Validate HBAR balance
        if (!(hbars instanceof Hbar)) {
            throw new Error('Invalid HBAR balance')
        }
        this.hbars = hbars

        // Validate tokens array
        if (!Array.isArray(tokens)) {
            throw new Error('Invalid tokens array')
        }
        this.tokens = tokens
    }
}