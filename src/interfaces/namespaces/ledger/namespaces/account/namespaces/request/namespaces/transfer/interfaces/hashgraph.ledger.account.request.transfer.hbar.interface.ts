import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../hashgraph.namespace'

/**
 * Interface for HBAR transfers on the Hedera network
 * @interface _IHbar
 * @description Defines the structure and requirements for transferring HBAR (Hedera's native cryptocurrency)
 * between accounts on the Hedera network. Supports direct HBAR transfers with comprehensive
 * validation and security features.
 * @category Hedera Cryptocurrency Service
 * @subcategory Transfer
 * @remarks
 * Key features:
 * - Native HBAR transfers
 * - Precise tinybar handling
 * - Transaction validation
 * - Security controls
 * - DAO governance support
 * - Transfer tracking
 * 
 * Requirements:
 * - Valid account IDs
 * - Sufficient HBAR balance
 * - Appropriate permissions
 * - Network fees coverage
 * @example
 * ```typescript
 * // Basic HBAR transfer
 * const transfer: _IHbar = {
 *   amount: 100000000, // 1 HBAR
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   memo: "Payment for services"
 * };
 * 
 * // DAO-governed transfer
 * const daoTransfer: _IHbar = {
 *   amount: 100000000,
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   },
 *   sender: {
 *     key: daoKey,
 *     id: AccountId.fromString("0.0.5678")
 *   }
 * };
 * ```
 */
export interface _IHbar {
    /**
     * Transfer amount in tinybars
     * @property {number} amount
     * @description Quantity of HBAR to transfer, specified in tinybars (1 HBAR = 100,000,000 tinybars)
     * @type {number}
     * @memberof _IHbar
     * @required
     * @remarks
     * - Must be a positive number
     * - Must not exceed sender's balance
     * - Must account for network fees
     * - Minimum transfer amount may apply
     * @example
     * ```typescript
     * // Transfer 1 HBAR
     * amount: 100000000
     * 
     * // Transfer 0.5 HBAR
     * amount: 50000000
     * ```
     */
    amount: number;

    /**
     * Source account identifier
     * @property {string} from
     * @description Account ID of the HBAR holder initiating the transfer
     * @type {string}
     * @memberof _IHbar
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must have sufficient HBAR balance
     * - Must cover network fees
     * - Must authorize the transfer
     * @example
     * ```typescript
     * from: "0.0.5678" // Account sending HBAR
     * ```
     */
    from: string;

    /**
     * Destination account identifier
     * @property {string} to
     * @description Account ID of the transfer recipient
     * @type {string}
     * @memberof _IHbar
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must be active and able to receive HBAR
     * - Cannot be same as sender
     * - Must exist on the network
     * @example
     * ```typescript
     * to: "0.0.9012" // Account receiving HBAR
     * ```
     */
    to: string;

    /**
     * Transfer description
     * @property {string} memo
     * @description Optional note or reference for the transfer
     * @type {string}
     * @memberof _IHbar
     * @optional
     * @remarks
     * - Maximum 100 characters
     * - Stored on-chain
     * - Publicly visible
     * - Useful for transaction tracking
     * - Additional network fees apply
     * @example
     * ```typescript
     * memo: "Payment for Q1 services"
     * ```
     */
    memo?: string;

    /**
     * Transaction authorization details
     * @property {Object} sender
     * @description Authentication and identification for the transfer initiator
     * @type {Object}
     * @memberof _IHbar
     * @optional
     * @remarks
     * - Provides transaction security
     * - Supports multi-signature setups
     * - Enables delegated transfers
     * - Required for complex transfers
     * @example
     * ```typescript
     * sender: {
     *   // Authorization key
     *   key: myPublicKey,
     *   
     *   // Sender's account
     *   id: AccountId.fromString("0.0.5678")
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
     * @description Configuration for DAO-controlled HBAR transfers
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IHbar
     * @optional
     * @remarks
     * - Required for DAO-governed transfers
     * - Must follow governance protocols
     * - Requires consensus validation
     * - Enables decentralized control
     * @example
     * ```typescript
     * dao: {
     *   // DAO controlling the transfer
     *   topicId: "0.0.34567",
     *   
     *   // Governance timestamp
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}
