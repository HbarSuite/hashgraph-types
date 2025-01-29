import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { IHashgraph } from '../../../../../../../../../hashgraph.namespace'

/**
 * Interface for NFT transfers on the Hedera Token Service (HTS)
 * @interface _INft
 * @description Defines the structure and requirements for transferring non-fungible tokens (NFTs)
 * between accounts using the Hedera Token Service. Supports NFT transfers with comprehensive
 * validation and security features.
 * @category Hedera Token Service
 * @subcategory Transfer
 * @remarks
 * Key features:
 * - NFT ownership transfer
 * - Serial number tracking
 * - Transaction validation
 * - Security controls
 * - DAO governance support
 * - Transfer tracking
 * 
 * Requirements:
 * - Valid NFT token ID
 * - Valid serial number
 * - Account association
 * - Appropriate permissions
 * - Network fees coverage
 * @example
 * ```typescript
 * // Basic NFT transfer
 * const transfer: _INft = {
 *   nft: "0.0.1234",
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   serial_number: 1,
 *   memo: "Transfer of Digital Art #1"
 * };
 * 
 * // DAO-governed NFT transfer
 * const daoTransfer: _INft = {
 *   nft: "0.0.1234",
 *   from: "0.0.5678",
 *   to: "0.0.9012",
 *   serial_number: 1,
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
export interface _INft {
    /**
     * NFT token identifier
     * @property {string} nft
     * @description Unique identifier of the NFT collection token
     * @type {string}
     * @memberof _INft
     * @required
     * @remarks
     * - Must be a valid token ID in shard.realm.num format
     * - Token must exist on the network
     * - Token must be non-fungible (NFT)
     * - Token must be enabled for transfers
     * @example
     * ```typescript
     * nft: "0.0.1234" // NFT collection token ID
     * ```
     */
    nft: string;

    /**
     * Source account identifier
     * @property {string} from
     * @description Account ID of the NFT holder initiating the transfer
     * @type {string}
     * @memberof _INft
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must own the specified NFT serial number
     * - Must be associated with the NFT collection
     * - Must authorize the transfer
     * @example
     * ```typescript
     * from: "0.0.5678" // Account sending the NFT
     * ```
     */
    from: string;

    /**
     * Destination account identifier
     * @property {string} to
     * @description Account ID of the transfer recipient
     * @type {string}
     * @memberof _INft
     * @required
     * @remarks
     * - Must be a valid account in shard.realm.num format
     * - Must be associated with the NFT collection
     * - Cannot be same as sender
     * - Must be able to receive NFTs
     * @example
     * ```typescript
     * to: "0.0.9012" // Account receiving the NFT
     * ```
     */
    to: string;

    /**
     * NFT instance identifier
     * @property {number} serial_number
     * @description Unique serial number of the specific NFT instance within its collection
     * @type {number}
     * @memberof _INft
     * @required
     * @remarks
     * - Must be a positive integer
     * - Must exist in the NFT collection
     * - Must be owned by sender
     * - Must not be burned or deleted
     * @example
     * ```typescript
     * // First NFT in the collection
     * serial_number: 1
     * 
     * // Specific NFT instance
     * serial_number: 42
     * ```
     */
    serial_number: number;

    /**
     * Transfer description
     * @property {string} memo
     * @description Optional note or reference for the transfer
     * @type {string}
     * @memberof _INft
     * @optional
     * @remarks
     * - Maximum 100 characters
     * - Stored on-chain
     * - Publicly visible
     * - Useful for transfer tracking
     * - Additional network fees apply
     * @example
     * ```typescript
     * memo: "Transfer of Digital Art #1 - Limited Edition"
     * ```
     */
    memo?: string;

    /**
     * Transaction authorization details
     * @property {Object} sender
     * @description Authentication and identification for the transfer initiator
     * @type {Object}
     * @memberof _INft
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
     * @description Configuration for DAO-controlled NFT transfers
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _INft
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
