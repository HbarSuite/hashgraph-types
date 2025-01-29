/**
 * @file unpause.interface.ts
 * @module IHashgraph.ILedger.IHTS.IUnpause
 * @description Defines the interface for resuming token operations on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Control
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token unpause interface for resuming operations
 * @interface _IUnpause
 * @description Defines the structure for resuming token operations on the
 * Hashgraph Token Service (HTS). Enables reactivation of token transfers and
 * operations after a pause, restoring normal token functionality.
 * 
 * @remarks
 * Key features:
 * - Immediate effect
 * - Restores transfers
 * - Maintains state
 * - Audit support
 * 
 * Use cases:
 * - Post-maintenance
 * - Issue resolution
 * - Compliance clearance
 * - Market reopening
 * 
 * Requirements:
 * - Pause key signature
 * - Admin authorization
 * - Network fees
 * - Paused token
 * 
 * Effects:
 * - Enables transfers
 * - Preserves balances
 * - Updates metadata
 * - Maintains security
 * 
 * @example
 * ```typescript
 * // Basic unpause request
 * const basicUnpause: _IUnpause = {
 *   sender: {
 *     key: myPauseKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed unpause request
 * const daoUnpause: _IUnpause = {
 *   sender: {
 *     key: myPauseKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IUnpause {
    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the unpause operation.
     * Must have pause key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IUnpause
     * @optional
     * @remarks
     * Requirements:
     * - Pause key signature
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * Validation steps:
     * 1. Verify pause key
     * 2. Check token status
     * 3. Validate conditions
     * 4. Process unpause
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
     * @description Configuration for DAO-controlled token unpausing.
     * Enables decentralized control over resuming token operations.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUnpause
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
     * 4. Execute unpause
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
