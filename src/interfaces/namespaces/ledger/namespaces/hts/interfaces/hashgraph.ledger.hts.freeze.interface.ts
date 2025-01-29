/**
 * @file freeze.interface.ts
 * @module IHashgraph.ILedger.IHTS.IFreeze
 * @description Defines the interface for freezing token accounts on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Account Control
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token freeze interface for account-level control
 * @interface _IFreeze
 * @description Defines the structure for freezing token operations for specific
 * accounts on the Hashgraph Token Service (HTS). Enables granular control over
 * token transfers and operations at the account level.
 * 
 * @remarks
 * Key features:
 * - Account-level control
 * - Selective freezing
 * - Balance preservation
 * - Compliance support
 * 
 * Use cases:
 * - Regulatory compliance
 * - Account security
 * - Risk management
 * - Legal requirements
 * 
 * Requirements:
 * - Freeze key signature
 * - Admin authorization
 * - Network fees
 * - Active accounts
 * 
 * Effects:
 * - Blocks transfers
 * - Maintains balances
 * - Preserves metadata
 * - Allows admin ops
 * 
 * @example
 * ```typescript
 * // Basic freeze request
 * const basicFreeze: _IFreeze = {
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: myFreezeKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed freeze request
 * const daoFreeze: _IFreeze = {
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
export interface _IFreeze {
    /**
     * Target account identifier
     * @property {string} walletId
     * @description The account ID to be frozen for token operations.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * @type {string}
     * @memberof _IFreeze
     * @required true
     * @example "0.0.123456"
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - Not already frozen
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
     * @description Configuration for the account initiating the freeze operation.
     * Must have freeze key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IFreeze
     * @optional true
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - Freeze key signature
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * Authorization flow:
     * 1. Verify freeze key
     * 2. Check account status
     * 3. Validate permissions
     * 4. Process request
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
        /**
         * The freeze key or key list required for authorization
         * @type {PublicKey | KeyList}
         * @optional true
         * @since 2.0.0
         */
        key?: PublicKey | KeyList;

        /**
         * The account ID of the sender
         * @type {AccountId}
         * @optional true
         * @since 2.0.0
         */
        id?: AccountId;
    }

    /**
     * DAO governance settings
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token freezing.
     * Enables decentralized control over account freeze operations.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IFreeze
     * @optional true
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
     * 4. Execute freeze
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