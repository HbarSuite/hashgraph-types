/**
 * @file create.interface.ts
 * @module IHashgraph.ILedger.IHTS.ICreate
 * @description Defines the interface for creating tokens on Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Creation
 */

import { CustomFixedFee, CustomFractionalFee, CustomRoyaltyFee, TokenSupplyType, TokenType, PublicKey, KeyList, AccountId } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token creation interface for HTS
 * @interface _ICreate
 * @description Defines the structure for creating new tokens on the Hedera Token
 * Service (HTS). Enables secure token creation with configurable properties,
 * permissions, and fee structures.
 * 
 * @remarks
 * Key features:
 * - Token configuration
 * - Permission management 
 * - Supply control
 * - Fee settings
 * - DAO governance support
 * 
 * Token types:
 * - Fungible tokens
 * - Non-fungible tokens
 * - Fixed supply
 * - Infinite supply
 * 
 * Requirements:
 * - Valid sender
 * - Network access
 * - Sufficient balance
 * - Proper permissions
 * 
 * Effects:
 * - Creates token
 * - Sets permissions
 * - Initializes supply
 * - Configures fees
 * 
 * @example
 * ```typescript
 * // Basic fungible token
 * const basicToken: _ICreate = {
 *   name: "My Token",
 *   symbol: "MTK",
 *   decimals: 8,
 *   supplyType: TokenSupplyType.FINITE,
 *   tokenType: TokenType.FUNGIBLE,
 *   maxTransactionFee: 1,
 *   freezeDefault: false,
 *   validatorConsensusTimestamp: "123456.789",
 *   initialSupply: 1000000
 * };
 * 
 * // NFT with custom fees
 * const nftToken: _ICreate = {
 *   name: "My NFT Collection",
 *   symbol: "MNFT",
 *   decimals: 0,
 *   supplyType: TokenSupplyType.FINITE,
 *   tokenType: TokenType.NON_FUNGIBLE,
 *   maxTransactionFee: 2,
 *   freezeDefault: false,
 *   validatorConsensusTimestamp: "123456.789",
 *   customFees: [
 *     new CustomRoyaltyFee({
 *       numerator: 5,
 *       denominator: 100,
 *       fallbackFee: new CustomFixedFee({ amount: 1 })
 *     })
 *   ]
 * };
 * ```
 */
export interface _ICreate {
    /**
     * Sender information
     * @property {Object} sender - The sender account details
     * @property {PublicKey | KeyList} [sender.key] - The public key or key list that will control this token
     * @property {AccountId} [sender.id] - The account ID of the sender
     * @type {Object}
     * @memberof _ICreate
     * @optional
     * @example
     * sender: {
     *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   id: AccountId.fromString("0.0.123456")
     * }
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Token Name
     * @property {string} name
     * @description The name of the token. This will be the official name displayed
     * in wallets and explorers.
     * @type {string}
     * @memberof _ICreate
     * @required
     * @example "My Token"
     */
    name: string

    /**
     * Treasury Account ID
     * @property {string} [treasuryAccountId]
     * @description The account that will act as the treasury for the token.
     * This account will receive the initial supply.
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @example "0.0.123456"
     */
    treasuryAccountId?: string

    /**
     * Token Symbol
     * @property {string} symbol
     * @description The symbol or ticker of the token. This is typically a short
     * abbreviation of the token name.
     * @type {string}
     * @memberof _ICreate
     * @required
     * @example "MTK"
     */
    symbol: string

    /**
     * Token Decimals
     * @property {number} decimals
     * @description The number of decimal places the token can be divided into.
     * For example, 8 decimals means smallest unit is 0.00000001
     * @type {number}
     * @memberof _ICreate
     * @required
     * @example 8
     */
    decimals: number

    /**
     * Initial Supply
     * @property {number} [initialSupply]
     * @description The initial amount of tokens to create. This amount will be
     * transferred to the treasury account.
     * @type {number}
     * @memberof _ICreate
     * @optional
     * @example 1000000
     */
    initialSupply?: number

    /**
     * Supply Type
     * @property {TokenSupplyType} supplyType
     * @description Determines if the token has a finite or infinite supply.
     * FINITE means the total supply is capped, INFINITE means it can be increased.
     * @type {TokenSupplyType}
     * @memberof _ICreate
     * @required
     * @example TokenSupplyType.FINITE
     */
    supplyType: TokenSupplyType

    /**
     * Maximum Supply
     * @property {number} [maxSupply]
     * @description The maximum number of tokens that can exist. Only applicable
     * if supplyType is FINITE.
     * @type {number}
     * @memberof _ICreate
     * @optional
     * @example 10000000
     */
    maxSupply?: number

    /**
     * Maximum Transaction Fee
     * @property {number} maxTransactionFee
     * @description The maximum transaction fee the token creator is willing to pay
     * for the token creation transaction.
     * @type {number}
     * @memberof _ICreate
     * @required
     * @example 1
     */
    maxTransactionFee: number

    /**
     * Token Type
     * @property {TokenType} tokenType
     * @description Specifies whether the token is FUNGIBLE or NON_FUNGIBLE.
     * FUNGIBLE tokens are interchangeable, NON_FUNGIBLE tokens are unique.
     * @type {TokenType}
     * @memberof _ICreate
     * @required
     * @example TokenType.FUNGIBLE
     */
    tokenType: TokenType

    /**
     * Freeze Key
     * @property {boolean} [freezeKey]
     * @description If true, enables the ability to freeze token transfers for
     * specific accounts.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    freezeKey?: boolean

    /**
     * Pause Key
     * @property {boolean} [pauseKey]
     * @description If true, enables the ability to pause all token transfers.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    pauseKey?: boolean

    /**
     * Admin Key
     * @property {boolean} [adminKey]
     * @description If true, enables administrative operations on the token.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    adminKey?: boolean

    /**
     * KYC Key
     * @property {boolean} [kycKey]
     * @description If true, enables KYC (Know Your Customer) operations for
     * the token.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    kycKey?: boolean

    /**
     * Wipe Key
     * @property {boolean} [wipeKey]
     * @description If true, enables the ability to wipe token balance from
     * accounts.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    wipeKey?: boolean

    /**
     * Supply Key
     * @property {boolean} [supplyKey]
     * @description If true, enables the ability to modify token supply after
     * creation.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    supplyKey?: boolean

    /**
     * Fee Schedule Key
     * @property {boolean} [feeScheduleKey]
     * @description If true, enables the ability to modify the token's fee
     * schedule.
     * @type {boolean}
     * @memberof _ICreate
     * @optional
     * @example true
     */
    feeScheduleKey?: boolean

    /**
     * Custom Fees
     * @property {Array<CustomRoyaltyFee> | Array<CustomFractionalFee> | Array<CustomFixedFee>} [customFees]
     * @description Custom fee configurations for the token. Can include royalty,
     * fractional, or fixed fees.
     * @type {Array<CustomRoyaltyFee> | Array<CustomFractionalFee> | Array<CustomFixedFee>}
     * @memberof _ICreate
     * @optional
     * @example
     * [
     *   new CustomRoyaltyFee({
     *     numerator: 5,
     *     denominator: 100,
     *     fallbackFee: new CustomFixedFee({ amount: 1 })
     *   })
     * ]
     */
    customFees?: Array<CustomRoyaltyFee> | Array<CustomFractionalFee> | Array<CustomFixedFee>

    /**
     * Freeze Default
     * @property {boolean} freezeDefault
     * @description The default freeze status for new accounts receiving the token.
     * @type {boolean}
     * @memberof _ICreate
     * @required
     * @example false
     */
    freezeDefault: boolean

    /**
     * Validator Consensus Timestamp
     * @property {string} validatorConsensusTimestamp
     * @description The consensus timestamp from the validator for this token
     * creation.
     * @type {string}
     * @memberof _ICreate
     * @required
     * @example "123456.789"
     */
    validatorConsensusTimestamp: string

    /**
     * Memo
     * @property {string} [memo]
     * @description Optional memo or description to be associated with the token
     * creation.
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @example "Initial token creation for project XYZ"
     */
    memo?: string

    /**
     * DAO Configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} [dao]
     * @description Contains the topic ID and consensus timestamp for DAO governance
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _ICreate
     * @optional
     * @since 2.0.0
     * @example
     * {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}