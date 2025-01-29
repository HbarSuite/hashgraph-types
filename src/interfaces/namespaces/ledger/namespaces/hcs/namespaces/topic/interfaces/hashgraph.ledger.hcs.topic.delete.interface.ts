/**
 * @file delete.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.IDelete
 * @description Defines the interface for deleting topics on Hedera Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Topic Operations
 * @subcategory Topic Deletion
 */

import { PublicKey, KeyList, AccountId } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Topic deletion interface for HCS
 * @interface _IDelete
 * @description Defines the structure for deleting existing topics on the Hedera
 * Consensus Service (HCS). Enables secure removal of messaging channels with
 * proper authorization and validation.
 * 
 * @remarks
 * Key features:
 * - Access validation
 * - Permission checking
 * - DAO integration
 * - Audit tracking
 * 
 * Security measures:
 * - Key verification
 * - Account validation
 * - Permission checks
 * - DAO governance
 * 
 * Requirements:
 * - Valid sender
 * - Proper permissions
 * - Network fees
 * - Resource access
 * 
 * Effects:
 * - Removes topic
 * - Deletes messages
 * - Updates records
 * - Cleans resources
 * 
 * @example
 * ```typescript
 * // Basic topic deletion
 * const basicDelete: _IDelete = {
 *   sender: {
 *     key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed deletion
 * const daoDelete: _IDelete = {
 *   sender: {
 *     key: new KeyList([
 *       PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777")
 *     ]),
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     // DAO configuration
 *   }
 * };
 * ```
 */
export interface _IDelete {
    /**
     * Topic deletion authorization
     * @property {Object} sender
     * @description Specifies the authorized sender's credentials for topic deletion.
     * Includes authentication and identification details.
     * @type {Object}
     * @memberof _IDelete
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
         * @description The cryptographic key or key list that authorizes the deletion.
         * Must match the topic's access control key.
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
         * - Must match topic key
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
     * @description Configuration for DAO-governed topic deletion.
     * Enables decentralized control and voting.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IDelete
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