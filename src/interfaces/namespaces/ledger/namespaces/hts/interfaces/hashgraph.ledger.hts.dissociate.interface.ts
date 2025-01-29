/**
 * @file dissociate.interface.ts
 * @module IHashgraph.ILedger.IHTS.IDissociate
 * @description Defines the interface for dissociating tokens from accounts in the Hedera Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Token Dissociation
 */

import { KeyList, PublicKey, AccountId } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * Token dissociation interface for HTS
 * @interface _IDissociate
 * @description Defines the structure for dissociating tokens from accounts on the Hedera Token Service (HTS).
 * Enables secure token dissociation with configurable parameters and optional DAO governance.
 * 
 * @remarks
 * Key features:
 * - Token dissociation
 * - Account unlinking
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
 * - Unlinks token from account
 * - Updates associations
 * - Records changes
 * - Disables transactions
 */
export interface _IDissociate {
    /**
     * The wallet ID for token dissociation
     * @property {string} walletId
     * @description Unique identifier of the wallet to dissociate the token from
     * @type {string}
     * @memberof _IDissociate
     * @required
     * @example "0.0.123456"
     * @since 2.0.0
     */
    walletId: string;

    /**
     * Sender account configuration
     * @property {Object} sender
     * @description Configuration details for the sender account performing the dissociation
     * @type {Object}
     * @memberof _IDissociate
     * @optional
     * @since 2.0.0
     */
    sender?: {
        /**
         * The public key or key list for account control
         * @property {PublicKey | KeyList} key
         * @description Public key or key list that will control this account
         * @type {PublicKey | KeyList}
         * @memberof sender
         * @optional
         * @since 2.0.0
         */
        key?: PublicKey | KeyList;

        /**
         * The sender's account ID
         * @property {AccountId} id
         * @description Account identifier of the sender
         * @type {AccountId}
         * @memberof sender
         * @optional
         * @since 2.0.0
         */
        id?: AccountId;
    }

    /**
     * DAO Configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled token dissociation
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IDissociate
     * @optional
     * @since 2.0.0
     * @example
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}