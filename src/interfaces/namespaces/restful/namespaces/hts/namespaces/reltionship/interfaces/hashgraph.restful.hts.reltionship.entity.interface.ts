import { _FreezeStatusEnum } from './hashgraph.restful.hts.reltionship.freeze-status.enum'
import { _KycStatusEnum } from './hashgraph.restful.hts.reltionship.kyc-status.enum'

/**
 * @file hashgraph.restful.hts.reltionship.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the relationship structure between accounts and tokens in the Hashgraph Token Service (HTS) REST API.
 * This interface represents the complete state of an account's relationship with a specific token.
 * @category Interfaces
 * @subcategory HTS
 * @since 2.0.0
 */

/**
 * Token Relationship Entity Interface
 * @interface _IEntity
 * @description Represents the comprehensive relationship between an account and a token on the Hashgraph Token Service (HTS).
 * This interface encapsulates all aspects of the token-account relationship, including:
 * - Association status and settings
 * - Balance and decimal information
 * - Compliance statuses (KYC and Freeze states)
 * - Temporal data and identifiers
 * Used to track and manage how accounts interact with specific tokens.
 * @category Interfaces
 * @subcategory HTS
 * @public
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Example of a complete token-account relationship
 * const relationship: _IEntity = {
 *   automatic_association: true,         // Token auto-associates with account
 *   balance: 100,                       // Current token balance
 *   created_timestamp: "2023-01-01T00:00:00.000Z",  // When relationship was created
 *   decimals: 8,                        // Token's decimal precision
 *   freeze_status: "UNFROZEN",          // Account can transfer tokens
 *   kyc_status: "GRANTED",              // Account has passed KYC
 *   token_id: "0.0.123456"             // Unique token identifier
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Automatic Association Flag
     * @type {boolean}
     * @description Indicates whether the token automatically associates with accounts.
     * When true:
     * - No explicit association transaction is required
     * - Accounts can receive the token without prior setup
     * - Reduces onboarding friction for new token holders
     * @required true
     * @example true
     * @memberof _IEntity
     * @since 2.0.0
     */
    automatic_association: boolean;

    /**
     * Token Balance
     * @type {number}
     * @description The current balance of tokens held by the account.
     * For fungible tokens:
     * - Represents the decimal value of tokens owned
     * - Takes into account the token's decimal places
     * For non-fungible tokens:
     * - Represents the count of NFTs owned
     * - Always a whole number
     * @required true
     * @example 100
     * @memberof _IEntity
     * @since 2.0.0
     */
    balance: number;

    /**
     * Creation Timestamp
     * @type {string}
     * @description The timestamp when this token-account relationship was established.
     * Format: ISO 8601 UTC timestamp (e.g., "2023-01-01T00:00:00.000Z")
     * Records when:
     * - The account first associated with the token
     * - The relationship was initialized
     * - The first interaction occurred
     * @required true
     * @example "2023-01-01T00:00:00.000Z"
     * @memberof _IEntity
     * @since 2.0.0
     */
    created_timestamp: string;

    /**
     * Token Decimals
     * @type {number}
     * @description The number of decimal places used for token amounts.
     * This value:
     * - Determines the token's divisibility
     * - Affects how balances are displayed and calculated
     * - Must be between 0 and 18 inclusive
     * Example: decimals=2 means 100 tokens = 1.00 tokens displayed
     * @required true
     * @minimum 0
     * @maximum 18
     * @example 8
     * @memberof _IEntity
     * @since 2.0.0
     */
    decimals: number;

    /**
     * Freeze Status
     * @type {_FreezeStatusEnum}
     * @description The current freeze state of the token for this account.
     * Possible states:
     * - FROZEN: Account cannot transfer tokens
     * - UNFROZEN: Account can transfer tokens normally
     * - NOT_APPLICABLE: Freeze feature is not enabled
     * Controls the account's ability to transfer or receive the token.
     * @required true
     * @example "UNFROZEN"
     * @memberof _IEntity
     * @since 2.0.0
     */
    freeze_status: _FreezeStatusEnum;

    /**
     * KYC Status
     * @type {_KycStatusEnum}
     * @description The Know Your Customer (KYC) status for this account-token relationship.
     * Possible states:
     * - GRANTED: Account has passed KYC verification
     * - REVOKED: Account's KYC verification is revoked
     * - NOT_APPLICABLE: KYC is not required
     * Determines whether the account can transact with the token based on KYC requirements.
     * @required true
     * @example "GRANTED"
     * @memberof _IEntity
     * @since 2.0.0
     */
    kyc_status: _KycStatusEnum;

    /**
     * Token ID
     * @type {string | null}
     * @description The unique identifier of the token on the Hashgraph network.
     * Format: `shard.realm.num` (e.g., "0.0.123456")
     * Properties:
     * - Globally unique identifier
     * - Follows Hedera token ID format
     * - Null if token is not yet assigned or in certain contexts
     * @required true
     * @example "0.0.123456"
     * @memberof _IEntity
     * @since 2.0.0
     */
    token_id: string | null;
}