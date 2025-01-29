import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Interface for permanently removing accounts from the Hedera network
 * @interface _IDelete
 * @description Defines the structure and requirements for account deletion requests,
 * including the handling of remaining assets and authorization requirements.
 * @memberof IHashgraph.ILedger.IAccounts
 * @remarks
 * Important considerations for account deletion:
 * - Operation is permanent and irreversible
 * - All remaining balances must be transferred
 * - Associated tokens must be handled
 * - Requires appropriate authorization
 * @example
 * ```typescript
 * // Basic account deletion
 * const deleteRequest: _IDelete = {
 *   transferAccountId: "0.0.123456",
 *   sender: {
 *     key: ownerKey,
 *     id: AccountId.fromString("0.0.789012")
 *   }
 * };
 * 
 * // DAO-governed account deletion
 * const daoDeleteRequest: _IDelete = {
 *   transferAccountId: "0.0.123456",
 *   sender: {
 *     key: daoKey,
 *     id: AccountId.fromString("0.0.789012")
 *   },
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IDelete {
    /**
     * Destination account for remaining assets
     * @property {string} transferAccountId
     * @description Account that will receive any remaining balance and assets upon deletion
     * @type {string}
     * @memberof _IDelete
     * @required
     * @remarks
     * - Must be a valid and active account
     * - Format: shard.realm.number (e.g., "0.0.123456")
     * - Must be able to receive all asset types
     * - Cannot be the account being deleted
     * - Must have appropriate token associations
     * @example
     * ```typescript
     * // Transfer remaining assets to treasury account
     * transferAccountId: "0.0.123456"
     * ```
     */
    transferAccountId: string;

    /**
     * Deletion authority configuration
     * @property {Object} sender
     * @description Entity authorized to execute the account deletion
     * @type {Object}
     * @memberof _IDelete
     * @optional
     * @remarks
     * - Must have deletion authority
     * - Typically the account owner
     * - Can be a multi-sig configuration
     * - Required for secure deletions
     * @example
     * ```typescript
     * sender: {
     *   // Account owner's key
     *   key: ownerKey,
     *   
     *   // Account owner's ID
     *   id: AccountId.fromString("0.0.789012")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * DAO governance parameters
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled account deletions
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IDelete
     * @optional
     * @remarks
     * - Required for DAO-governed accounts
     * - Must follow governance protocols
     * - Requires valid consensus
     * - Must reference existing DAO
     * @example
     * ```typescript
     * dao: {
     *   // DAO controlling the deletion
     *   topicId: "0.0.34567",
     *   
     *   // Governance decision timestamp
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}