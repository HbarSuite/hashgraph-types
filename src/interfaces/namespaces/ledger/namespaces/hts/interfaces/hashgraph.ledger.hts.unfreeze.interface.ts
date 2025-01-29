import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * @file unfreeze.interface.ts
 * @module IHashgraph.ILedger.IHTS.IUnfreeze
 * @description Defines the interface for unfreezing token accounts on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Account Management
 */

/**
 * Token unfreeze interface for account management
 * @interface _IUnfreeze
 * @description Defines the structure for unfreezing token accounts in the Hashgraph Token
 * Service (HTS). Enables restoration of token operations for previously frozen accounts
 * while maintaining account security and compliance.
 * 
 * @remarks
 * Key features:
 * - Account restoration
 * - Operation reactivation
 * - Balance preservation
 * - Selective application
 * 
 * Use cases:
 * - Compliance resolution
 * - Security clearance
 * - Account reactivation
 * - Risk mitigation
 * 
 * Requirements:
 * - Freeze key signature
 * - Active account
 * - Token association
 * - Network fees
 * 
 * Effects:
 * - Enables transfers
 * - Maintains balances
 * - Preserves ownership
 * - Records status
 * 
 * @example
 * ```typescript
 * // Basic account unfreeze
 * const basicUnfreeze: _IUnfreeze = {
 *   sender: {
 *     key: myFreezeKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   accountId: AccountId.fromString("0.0.54321")
 * };
 * 
 * // DAO-governed account unfreeze
 * const daoUnfreeze: _IUnfreeze = {
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: myFreezeKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IUnfreeze {
    /**
     * Target account identifier
     * @property {string} walletId
     * @description The account ID to be unfrozen for token operations.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * @type {string}
     * @memberof _IUnfreeze
     * @required true
     * @example "0.0.123456"
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - Currently frozen
     * 
     * Validation steps:
     * 1. Check account format
     * 2. Verify account status
     * 3. Confirm association
     * 4. Check freeze status
     */
    walletId: string;

    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the unfreeze operation.
     * Must have freeze key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IUnfreeze
     * @optional
     * @remarks
     * Requirements:
     * - Freeze key signature
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * Validation steps:
     * 1. Verify freeze key
     * 2. Check account status
     * 3. Validate conditions
     * 4. Process unfreeze
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
     * @description Configuration for DAO-controlled account unfreezing.
     * Enables decentralized control over account reactivation.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUnfreeze
     * @optional
     * @since 2.0.0
     * @remarks
     * Governance features:
     * - Community voting
     * - Proposal tracking
     * - Consensus validation
     * - Automated execution
     * 
     * Process flow:
     * 1. Submit proposal
     * 2. Community vote
     * 3. Reach consensus
     * 4. Execute unfreeze
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