/**
 * @file associate.interface.ts
 * @module IHashgraph.ILedger.IHTS.IAssociate
 * @description Defines the interface for associating tokens with accounts in the Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Association
 */

import { KeyList, PublicKey, AccountId } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token association interface for HTS
 * @interface _IAssociate
 * @description Defines the structure for associating tokens with accounts on the Hedera Token Service (HTS).
 * Enables secure token associations with configurable parameters and optional DAO governance.
 * 
 * @remarks
 * Key features:
 * - Token association
 * - Account linking
 * - DAO governance support
 * - Sender configuration
 * 
 * Requirements:
 * - Valid wallet ID
 * - Network access
 * - Proper authorization
 * - Optional DAO setup
 * 
 * Effects:
 * - Links token to account
 * - Updates associations
 * - Records changes
 * - Enables transactions
 */
export interface _IAssociate {
    /**
     * The wallet ID for token association
     * @property {string} walletId
     * @description Unique identifier of the wallet to associate the token with
     * @type {string}
     * @memberof _IAssociate
     * @required
     * @example "0.0.123456"
     * @since 2.0.0
     */
    walletId: string;

    /**
     * Sender account configuration
     * @property {Object} sender
     * @description Configuration details for the sender account performing the association
     * @type {Object}
     * @memberof _IAssociate
     * @optional
     * @since 2.0.0
     */
    sender?: {
        /**
         * Sender's key configuration
         * @property {PublicKey | KeyList} key
         * @description The public key or key list controlling the sender account
         * @type {PublicKey | KeyList}
         * @optional
         */
        key?: PublicKey | KeyList;

        /**
         * Sender's account identifier
         * @property {AccountId} id
         * @description The unique identifier of the sender's account
         * @type {AccountId}
         * @optional
         */
        id?: AccountId;
    }

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token association governance
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IAssociate
     * @optional
     * @since 2.0.0
     * @example
     * ```typescript
     * {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}