/**
 * @file update.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.IUpdate
 * @description Defines the interface for updating topics on Hedera Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Topic Operations
 * @subcategory Topic Updates
 */

import { PublicKey, KeyList, AccountId } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Topic update interface for HCS
 * @interface _IUpdate
 * @description Defines the structure for modifying existing topics on the Hedera
 * Consensus Service (HCS). Enables updates to topic metadata and configuration
 * while maintaining security and governance controls.
 * 
 * @remarks
 * Update capabilities:
 * - Topic metadata
 * - Access controls
 * - Governance rules
 * - Resource settings
 * 
 * Security measures:
 * - Key validation
 * - Permission checks
 * - DAO governance
 * - Audit logging
 * 
 * Requirements:
 * - Admin key
 * - Valid sender
 * - Network fees
 * - Resource limits
 * 
 * Effects:
 * - Updates metadata
 * - Modifies config
 * - Records changes
 * - Maintains state
 * 
 * @example
 * ```typescript
 * // Basic topic update
 * const basicUpdate: _IUpdate = {
 *   memo: "Updated application event stream - v2.0",
 *   sender: {
 *     key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed update
 * const daoUpdate: _IUpdate = {
 *   memo: "Governance-controlled event stream - v3.0",
 *   sender: {
 *     key: new KeyList([
 *       PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777")
 *     ]),
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     // DAO configuration for update governance
 *   }
 * };
 * ```
 */
export interface _IUpdate {
    /**
     * Topic metadata
     * @property {string} memo
     * @description The updated descriptive note or memo for the topic.
     * Used to provide context, versioning, or other relevant information.
     * @type {string}
     * @memberof _IUpdate
     * @remarks
     * Best practices:
     * - Clear purpose
     * - Version info
     * - Update reason
     * - Contact details
     * 
     * Limitations:
     * - 100 bytes max
     * - UTF-8 encoding
     * - Plain text only
     * - No formatting
     * 
     * @example
     * ```typescript
     * memo: "Production event stream v2.0 - Added encryption support"
     * ```
     */
    memo: string;

    /**
     * Update authorization
     * @property {Object} sender
     * @description Specifies the authorized sender's credentials for the update.
     * Includes authentication and identification details.
     * @type {Object}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * Authorization components:
     * - Cryptographic keys
     * - Account identity
     * - Access rights
     * - Permission level
     * 
     * Validation checks:
     * - Key ownership
     * - Account status
     * - Permission scope
     * - Network access
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
         * Authorization key
         * @property {PublicKey | KeyList} key
         * @description The cryptographic key or key list that authorizes the update.
         * Must match the topic's admin key for successful execution.
         * @type {PublicKey | KeyList}
         * @optional
         * @remarks
         * Key types:
         * - ED25519 public key
         * - Multi-signature list
         * - Threshold keys
         * - Weighted keys
         * 
         * Security notes:
         * - Must match admin key
         * - Requires signing
         * - Validates ownership
         * - Prevents unauthorized access
         * 
         * @example
         * ```typescript
         * key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777")
         * ```
         */
        key?: PublicKey | KeyList;

        /**
         * Sender identity
         * @property {AccountId} id
         * @description The Hedera account identifier of the sender.
         * Used for authorization and fee payment.
         * @type {AccountId}
         * @optional
         * @remarks
         * Account requirements:
         * - Must be active
         * - Sufficient balance
         * - Network access
         * - Valid permissions
         * 
         * Usage:
         * - Fee payment
         * - Action tracking
         * - Access control
         * - Audit logging
         * 
         * @example
         * ```typescript
         * id: AccountId.fromString("0.0.12345")
         * ```
         */
        id?: AccountId;
    };

    /**
     * DAO governance settings
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-governed topic updates.
     * Enables decentralized control and voting.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IUpdate
     * @optional
     * @remarks
     * Governance features:
     * - Voting rules
     * - Proposal system
     * - Member rights
     * - Action thresholds
     * 
     * Process flow:
     * - Proposal creation
     * - Member voting
     * - Result execution
     * - Action logging
     * 
     * @example
     * ```typescript
     * dao: {
     *   // DAO configuration object
     *   // See IHashgraph.ILedger.IDAO.IConfig documentation
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig;
}