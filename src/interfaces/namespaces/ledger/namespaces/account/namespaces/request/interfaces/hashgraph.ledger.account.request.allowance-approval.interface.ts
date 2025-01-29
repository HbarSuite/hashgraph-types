import { AccountId, TokenId, NftId, KeyList, PublicKey } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Interface for managing delegated spending permissions on Hashgraph
 * @interface _IAllowanceApproval
 * @description Defines the structure for approving and managing allowances for HBAR, fungible tokens, and NFTs.
 * This interface enables secure delegation of spending authority between accounts.
 * @memberof IHashgraph.ILedger.IAccounts
 * @remarks
 * Allowances can be set for:
 * - HBAR transfers (native cryptocurrency)
 * - Fungible token transfers
 * - NFT transfers (individual or batch)
 * - DAO-controlled operations
 * @example
 * ```typescript
 * // HBAR allowance example
 * const hbarAllowance: _IAllowanceApproval = {
 *   type: 'hbar',
 *   ownerAccountId: "0.0.123456",
 *   spenderAccountId: "0.0.789012",
 *   amount: 1000000000 // 10 ℏ
 * };
 * 
 * // Token allowance example
 * const tokenAllowance: _IAllowanceApproval = {
 *   type: 'token',
 *   ownerAccountId: "0.0.123456",
 *   spenderAccountId: "0.0.789012",
 *   tokenId: "0.0.234567",
 *   amount: 1000
 * };
 * 
 * // NFT allowance example
 * const nftAllowance: _IAllowanceApproval = {
 *   type: 'nft',
 *   ownerAccountId: "0.0.123456",
 *   spenderAccountId: "0.0.789012",
 *   tokenId: "0.0.234567",
 *   serialNumbers: [1, 2, 3]
 * };
 * ```
 */
export interface _IAllowanceApproval {
    /**
     * The type of allowance being granted
     * @property {string} type
     * @description Specifies which type of asset the allowance applies to
     * @type {'hbar' | 'token' | 'nft'}
     * @memberof _IAllowanceApproval
     * @required
     * @remarks
     * - 'hbar': Native cryptocurrency allowance
     * - 'token': Fungible token allowance
     * - 'nft': Non-fungible token allowance
     * @example
     * ```typescript
     * type: 'hbar' // For HBAR allowances
     * type: 'token' // For fungible token allowances
     * type: 'nft' // For NFT allowances
     * ```
     */
    type: 'hbar' | 'token' | 'nft';

    /**
     * The account granting the allowance
     * @property {string} ownerAccountId
     * @description Account identifier of the owner granting spending permissions
     * @type {string}
     * @memberof _IAllowanceApproval
     * @required
     * @remarks
     * - Must be a valid account ID in shard.realm.num format
     * - Must have sufficient balance of the asset being approved
     * - Must sign the approval transaction
     * @example
     * ```typescript
     * ownerAccountId: "0.0.123456"
     * ```
     */
    ownerAccountId: string;

    /**
     * The account receiving the allowance
     * @property {string} spenderAccountId
     * @description Account identifier of the party being authorized to spend
     * @type {string}
     * @memberof _IAllowanceApproval
     * @required
     * @remarks
     * - Must be a valid account ID in shard.realm.num format
     * - Cannot be the same as the owner account
     * - Will be able to initiate transfers up to the approved amount
     * @example
     * ```typescript
     * spenderAccountId: "0.0.789012"
     * ```
     */
    spenderAccountId: string;

    /**
     * Transaction sender details
     * @property {Object} sender
     * @description Optional configuration for the transaction sender
     * @type {Object}
     * @memberof _IAllowanceApproval
     * @optional
     * @remarks
     * - Provides additional security and control options
     * - Can specify custom key requirements
     * - Allows delegation of transaction submission
     * @example
     * ```typescript
     * sender: {
     *   key: myPublicKey,
     *   id: AccountId.fromString("0.0.123456")
     * }
     * ```
     */
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Identifier of the token being approved
     * @property {TokenId | NftId | string} tokenId
     * @description The token identifier for token or NFT allowances
     * @type {TokenId | NftId | string}
     * @memberof _IAllowanceApproval
     * @optional
     * @remarks
     * - Required for token and NFT allowances
     * - Must be a valid token ID on the network
     * - Owner must possess the token being approved
     * @example
     * ```typescript
     * // For fungible tokens
     * tokenId: "0.0.234567"
     * 
     * // For NFTs
     * tokenId: TokenId.fromString("0.0.234567")
     * ```
     */
    tokenId?: TokenId | NftId | string

    /**
     * Quantity being approved
     * @property {number} amount
     * @description The amount of HBAR or tokens being authorized for spending
     * @type {number}
     * @memberof _IAllowanceApproval
     * @optional
     * @remarks
     * - For HBAR: Amount in tinybars (1 ℏ = 100,000,000 tinybars)
     * - For tokens: Number of fungible token units
     * - Not applicable for NFT allowances
     * @example
     * ```typescript
     * // 10 ℏ allowance
     * amount: 1000000000
     * 
     * // 1000 fungible tokens
     * amount: 1000
     * ```
     */
    amount?: number 

    /**
     * NFT serial numbers being approved
     * @property {number[]} serialNumbers
     * @description Array of specific NFT serial numbers being authorized for transfer
     * @type {number[]}
     * @memberof _IAllowanceApproval
     * @optional
     * @remarks
     * - Only applicable for NFT allowances
     * - Each number must be a valid serial number
     * - Owner must own all specified NFTs
     * @example
     * ```typescript
     * // Approve specific NFTs
     * serialNumbers: [1, 2, 3, 4, 5]
     * ```
     */
    serialNumbers?: number[];

    /**
     * DAO governance configuration
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled allowance approvals
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IAllowanceApproval
     * @optional
     * @remarks
     * - Enables DAO governance over allowances
     * - Requires valid consensus timestamp
     * - Must reference existing DAO topic
     * @example
     * ```typescript
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}
