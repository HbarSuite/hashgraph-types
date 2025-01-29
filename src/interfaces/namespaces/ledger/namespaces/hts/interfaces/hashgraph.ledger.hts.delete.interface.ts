/**
 * @file delete.interface.ts
 * @module IHashgraph.ILedger.IHTS.IDelete
 * @description Defines the interface for deleting tokens on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Lifecycle
 */

import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token deletion interface for token lifecycle management
 * @interface _IDelete
 * @description Defines the structure for deleting tokens from the Hashgraph Token
 * Service (HTS). Enables permanent removal of tokens from the network when they
 * are no longer needed or valid.
 * 
 * @remarks
 * Key features:
 * - Permanent deletion
 * - Supply validation
 * - Association cleanup
 * - Audit tracking
 * 
 * Use cases:
 * - Token retirement
 * - Project closure
 * - Compliance actions
 * - Error remediation
 * 
 * Requirements:
 * - Admin key signature
 * - Zero token supply
 * - No associations
 * - Network fees
 * 
 * Effects:
 * - Removes token
 * - Cleans metadata
 * - Updates records
 * - Preserves history
 * 
 * @example
 * ```typescript
 * // Basic token deletion
 * const basicDelete: _IDelete = {
 *   sender: {
 *     key: myAdminKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed token deletion
 * const daoDelete: _IDelete = {
 *   sender: {
 *     key: myAdminKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IDelete {
    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the token deletion.
     * Must have admin key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IDelete
     * @optional
     * @remarks
     * Requirements:
     * - Admin key signature
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * Validation steps:
     * 1. Verify admin key
     * 2. Check token status
     * 3. Validate conditions
     * 4. Process deletion
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
     * @description Configuration for DAO-controlled token deletion.
     * Enables decentralized control over token lifecycle management.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IDelete
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
     * 4. Execute deletion
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
