import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../hashgraph.namespace'

/**
 * @file kyc.interface.ts
 * @module IHashgraph.ILedger.IHTS.IKYC
 * @description Defines the interface for KYC operations on Hashgraph Token Service (HTS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Token Operations
 * @subcategory Compliance Control
 */

/**
 * Token KYC interface for compliance management
 * @interface _IKYC
 * @description Defines the structure for managing Know Your Customer (KYC) status
 * for accounts on the Hashgraph Token Service (HTS). Enables compliance control
 * through KYC verification and management.
 * 
 * @remarks
 * Key features:
 * - KYC status management
 * - Account verification
 * - Compliance tracking
 * - Audit support
 * 
 * Use cases:
 * - Regulatory compliance
 * - Identity verification
 * - Access control
 * - Risk management
 * 
 * Requirements:
 * - KYC key signature
 * - Admin authorization
 * - Network fees
 * - Active accounts
 * 
 * Effects:
 * - Updates KYC status
 * - Controls access
 * - Maintains records
 * - Enables tracking
 * 
 * @example
 * ```typescript
 * // Basic KYC grant request
 * const basicKyc: _IKYC = {
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: myKycKey,
 *     id: AccountId.fromString("0.0.12345")
 *   }
 * };
 * 
 * // DAO-governed KYC request
 * const daoKyc: _IKYC = {
 *   walletId: "0.0.123456",
 *   sender: {
 *     key: myKycKey,
 *     id: AccountId.fromString("0.0.12345")
 *   },
 *   dao: {
 *     topicId: "0.0.98765",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IKYC {
    /**
     * Target account identifier
     * @property {string} walletId
     * @description The account ID for which to manage KYC status.
     * Must be a valid Hedera account in the format "0.0.{number}".
     * @type {string}
     * @memberof _IKYC
     * @required true
     * @example "0.0.123456"
     * @remarks
     * Requirements:
     * - Valid account format
     * - Active account status
     * - Token association
     * - KYC enabled token
     * 
     * Validation steps:
     * 1. Check account format
     * 2. Verify account status
     * 3. Confirm association
     * 4. Check token settings
     */
    walletId: string;

    /**
     * Transaction authorization
     * @property {Object} sender
     * @description Configuration for the account initiating the KYC operation.
     * Must have KYC key authorization.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _IKYC
     * @optional true
     * @since 2.0.0
     * @remarks
     * Requirements:
     * - KYC key signature
     * - Active account
     * - Proper permissions
     * - Network fees
     * 
     * Authorization flow:
     * 1. Verify KYC key
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
         * The KYC key or key list required for authorization
         * @type {PublicKey | KeyList}
         * @optional true
         * @since 2.0.0
         * @description The public key or key list that has KYC authorization rights
         * @example PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777")
         */
        key?: PublicKey | KeyList;

        /**
         * The account ID of the sender
         * @type {AccountId}
         * @optional true
         * @since 2.0.0
         * @description The account initiating the KYC operation
         * @example AccountId.fromString("0.0.12345")
         */
        id?: AccountId;
    }

    /**
     * DAO governance settings
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled KYC operations.
     * Enables decentralized control over compliance management.
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IKYC
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
     * 4. Execute KYC update
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