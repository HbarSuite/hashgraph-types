/**
 * @file pause.interface.ts
 * @module IHashgraph.ILedger.IHTS.IPause
 * @description Defines the interface for pausing token operations on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Control
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token pause interface for emergency control
 * @interface _IPause
 * @description Defines the structure for pausing token operations on the
 * Hashgraph Token Service (HTS). Enables temporary suspension of token transfers
 * and operations for security, maintenance, or compliance purposes.
 * 
 * @remarks
 * Key features:
 * - Immediate effect
 * - All transfers blocked
 * - Admin operations allowed
 * - Reversible action
 * 
 * Use cases:
 * - Security incidents
 * - Maintenance windows
 * - Compliance actions
 * - Market stabilization
 * 
 * Requirements:
 * - Pause key signature
 * - Admin authorization
 * - Network fees
 * - Active token
 * 
 * Effects:
 * - Blocks transfers
 * - Maintains balances
 * - Preserves metadata
 * - Allows admin ops
 * 
 * @example
 * ```typescript
 * // Basic pause request
 * const basicPause: _IPause = {
 *   sender: {
 *     key: myPauseKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed pause request
 * const daoPause: _IPause = {
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
export interface _IPause {
    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the pause operation.
     * Must have pause key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IPause
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
     * 4. Process pause
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
     * @description Configuration for DAO-controlled token pausing.
     * Enables decentralized control over token pause operations.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IPause
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
     * 4. Execute pause
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
