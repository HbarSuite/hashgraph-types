/**
 * @file update-fees.interface.ts
 * @module IHashgraph.ILedger.IHTS.IUpdateFees
 * @description Defines the interface for updating token fees on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Fee Management
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'
import { _IFees } from "../namespaces/fees/validators.token.fee.namespace";

/**
 * Token fee update interface for managing token economics
 * @interface _IUpdateFees
 * @description Defines the structure for updating custom fee configurations
 * associated with tokens on the Hashgraph Token Service (HTS). Enables
 * sophisticated token economics through various fee types and collection methods.
 * 
 * @remarks
 * Fee types supported:
 * - Fixed fees: Set amount per transaction
 * - Fractional fees: Percentage-based fees
 * - Royalty fees: Value-based fees with collectors
 * 
 * Key features:
 * - Multiple fee types
 * - Collector accounts
 * - Fee schedules
 * - DAO governance
 * 
 * Requirements:
 * - Fee schedule key
 * - Valid collectors
 * - Network limits
 * - Proper permissions
 * 
 * Limitations:
 * - Maximum fee types
 * - Collection thresholds
 * - Network constraints
 * - Token type restrictions
 * 
 * @example
 * ```typescript
 * // Basic fixed fee update
 * const fixedFeeUpdate: _IUpdateFees = {
 *   customFees: [{
 *     amount: 100,
 *     collectorAccountId: "0.0.12345",
 *     denominatingTokenId: "0.0.54321"
 *   } as CustomFixedFee],
 *   sender: {
 *     key: myFeeScheduleKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // Complex fee structure with multiple types
 * const complexFeeUpdate: _IUpdateFees = {
 *   customFees: [
 *     // Fixed fee in HBAR
 *     {
 *       amount: 100,
 *       collectorAccountId: "0.0.12345",
 *       denominatingTokenId: "0.0.54321"
 *     } as CustomFixedFee,
 *     // Fractional fee (0.5%)
 *     {
 *       numerator: 5,
 *       denominator: 1000,
 *       minimumAmount: 10,
 *       maximumAmount: 100,
 *       collectorAccountId: "0.0.67890"
 *     } as CustomFractionalFee,
 *     // Royalty fee (2.5%)
 *     {
 *       numerator: 25,
 *       denominator: 1000,
 *       amount: 10,
 *       collectorAccountId: "0.0.98765",
 *       fallbackFee: {
 *         amount: 5,
 *         denominatingTokenId: "0.0.54321"
 *       }
 *     } as CustomRoyaltyFee
 *   ],
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IUpdateFees {
    /**
     * Custom fee configurations
     * @property {_IFees.ICustomFees} customFees
     * @description Array of custom fee configurations to apply to the token.
     * Supports multiple fee types for flexible token economics.
     * @type {_IFees.ICustomFees}
     * @memberof _IUpdateFees
     * @required
     * @remarks
     * Fee types:
     * 1. Fixed Fees:
     *    - Set amount per transaction
     *    - Denominated in HBAR or tokens
     *    - Single collector account
     * 
     * 2. Fractional Fees:
     *    - Percentage of transaction value
     *    - Configurable min/max amounts
     *    - Flexible collection rules
     * 
     * 3. Royalty Fees:
     *    - Value-based calculation
     *    - Multiple collectors
     *    - Fallback fee options
     * 
     * Limitations:
     * - Max 10 fees per token
     * - Valid collector accounts
     * - Network fee limits
     * - Token type restrictions
     * 
     * @example
     * ```typescript
     * customFees: [
     *   // Fixed fee
     *   {
     *     amount: 100,
     *     collectorAccountId: "0.0.12345",
     *     denominatingTokenId: "0.0.54321"
     *   },
     *   // Fractional fee
     *   {
     *     numerator: 5,
     *     denominator: 1000,
     *     minimumAmount: 10,
     *     maximumAmount: 100,
     *     collectorAccountId: "0.0.67890"
     *   }
     * ]
     * ```
     */
    customFees: _IFees.ICustomFees;

    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the fee update.
     * Must have fee schedule key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IUpdateFees
     * @optional
     * @remarks
     * Requirements:
     * - Fee schedule key
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * @example
     * ```typescript
     * sender: {
     *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   id: AccountId.fromString("0.0.12345")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * DAO governance settings
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled fee updates.
     * Enables decentralized management of token economics.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUpdateFees
     * @optional
     * @since 2.0.0
     * @remarks
     * Features:
     * - Proposal validation
     * - Community voting
     * - Consensus tracking
     * - Automated execution
     * 
     * @example
     * ```typescript
     * dao: {
     *   topicId: "0.0.98765",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}