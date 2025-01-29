import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../hashgraph.namespace'

/**
 * Interface for fungible token transfers on the Hedera Token Service (HTS)
 * @interface _IFungibleToken
 * @description Defines the structure and requirements for transferring fungible tokens
 * between accounts using the Hedera Token Service. Supports standard token operations
 * with comprehensive validation and security features.
 * @category Hashgraph Token Service
 * @subcategory Transfer
 * @remarks
 * Key features:
 * - Precise decimal handling
 * - Transaction validation
 * - Security controls
 * - DAO governance support
 * - Transfer tracking
 * 
 * Requirements:
 * - Token must be fungible (HTS standard)
 * - Accounts must be associated with token
 * - Sufficient balance for transfer
 * - Appropriate permissions
 * @example
 * ```typescript
 * // Basic token transfer
 * const transfer: _IFungibleToken = {
 *   token_id: "0.0.1234",
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   amount: 1000,
 *   decimals: 8,
 *   memo: "Payment for services"
 * };
 * 
 * // DAO-governed transfer
 * const daoTransfer: _IFungibleToken = {
 *   token_id: "0.0.1234",
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   amount: 1000,
 *   decimals: 8,
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
export interface _IFungibleToken {
    /**
     * Token identifier
     * @property {string} token_id
     * @description Unique identifier of the fungible token to transfer
     * @type {string}
     * @memberof _IFungibleToken
     * @required
     * @remarks
     * - Must be a valid token ID in shard.realm.num format
     * - Token must exist on the network
     * - Token must be fungible
     * - Token must be enabled for transfers
     * @example
     * ```typescript
     * token_id: "0.0.1234" // Token being transferred
     * ```
     */
    token_id: string;

    /**
     * Source account identifier
     * @property {string} from
     * @description Account ID of the token holder initiating the transfer
     * @type {string}
     * @memberof _IFungibleToken
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must have sufficient token balance
     * - Must be associated with the token
     * - Must authorize the transfer
     * @example
     * ```typescript
     * from: "0.0.5678" // Account sending tokens
     * ```
     */
    from: string;

    /**
     * Destination account identifier
     * @property {string} to
     * @description Account ID of the transfer recipient
     * @type {string}
     * @memberof _IFungibleToken
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must be associated with the token
     * - Cannot be same as sender
     * - Must be able to receive tokens
     * @example
     * ```typescript
     * to: "0.0.9012" // Account receiving tokens
     * ```
     */
    to: string;

    /**
     * Transfer quantity
     * @property {number} amount
     * @description Number of tokens to transfer in the smallest denomination
     * @type {number}
     * @memberof _IFungibleToken
     * @required
     * @remarks
     * - Must be a positive number
     * - Must not exceed available balance
     * - Subject to token's transfer limits
     * - Considers token decimals for actual value
     * @example
     * ```typescript
     * // Transfer 1000 units (actual value depends on decimals)
     * amount: 1000
     * ```
     */
    amount: number;

    /**
     * Token precision configuration
     * @property {number} decimals
     * @description Number of decimal places supported by the token
     * @type {number}
     * @memberof _IFungibleToken
     * @required
     * @remarks
     * - Determines token divisibility
     * - Affects amount calculations
     * - Must match token's configuration
     * - Used for display formatting
     * @example
     * ```typescript
     * // 8 decimals means smallest unit is 0.00000001
     * decimals: 8
     * ```
     */
    decimals: number;

    /**
     * Transfer description
     * @property {string} memo
     * @description Optional note or reference for the transfer
     * @type {string}
     * @memberof _IFungibleToken
     * @optional
     * @remarks
     * - Maximum 100 characters
     * - Stored on-chain
     * - Publicly visible
     * - Useful for transaction tracking
     * @example
     * ```typescript
     * memo: "Payment for Q1 services"
     * ```
     */
    memo?: string;

    /**
     * Network validation timestamp
     * @property {string} consensusTimestamp
     * @description Timestamp when the network reached consensus on this transfer
     * @type {string}
     * @memberof _IFungibleToken
     * @optional
     * @remarks
     * - Format: ISO 8601 timestamp
     * - Set by network consensus
     * - Used for transaction ordering
     * - Important for audit trails
     * @example
     * ```typescript
     * consensusTimestamp: "2024-12-03T16:11:08.938Z"
     * ```
     */
    consensusTimestamp?: string;

    /**
     * Transaction authorization details
     * @property {Object} sender
     * @description Authentication and identification for the transfer initiator
     * @type {Object}
     * @memberof _IFungibleToken
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
     * @description Configuration for DAO-controlled token transfers
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IFungibleToken
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
