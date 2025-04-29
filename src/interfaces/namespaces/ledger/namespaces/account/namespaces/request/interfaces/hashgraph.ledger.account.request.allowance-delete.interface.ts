import { NftId, AccountId, KeyList, PublicKey, TokenId } from "@hashgraph/sdk"
import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * Interface for revoking NFT allowances on Hashgraph
 * @interface _IAllowanceDelete
 * @description Defines the structure for deleting NFT allowances on the Hedera network.
 * This interface is specifically designed for NFT allowance revocation.
 * @memberof IHashgraph.ILedger.IAccounts
 * @remarks
 * Important considerations:
 * - This interface is exclusively for NFT allowance deletions
 * - For HBAR or fungible token allowance deletion, use AccountAllowanceApproveTransaction with amount 0
 * - Maximum of 20 NFT serial number deletions per transaction
 * - Implemented as part of HIP-336
 * @example
 * ```typescript
 * // Example of NFT allowance deletion
 * const deleteAllowance: _IAllowanceDelete = {
 *   ownerAccountId: "0.0.123456",
 *   nftId: "0.0.789012",
 *   sender: {
 *     key: ownerKey,
 *     id: AccountId.fromString("0.0.123456")
 *   },
 *   dao: {
 *     topicId: "0.0.34567",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * };
 * ```
 */
export interface _IAllowanceDelete {
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
     * Account revoking the NFT allowance
     * @property {string} ownerAccountId
     * @description Account identifier of the NFT owner revoking the allowance
     * @type {string}
     * @memberof _IAllowanceDelete
     * @required
     * @remarks
     * - Must be the original NFT owner who granted the allowance
     * - Must be a valid account ID in shard.realm.num format
     * - Must sign the deletion transaction
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
     * Transaction sender configuration
     * @property {Object} sender
     * @description Optional configuration for the transaction sender
     * @type {Object}
     * @memberof _IAllowanceDelete
     * @optional
     * @remarks
     * - Enables custom key requirements
     * - Allows delegation of transaction submission
     * - Provides additional security controls
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
     * @property {TokenId | string} tokenId
     * @description The token identifier for token or NFT allowances
     * @type {TokenId | string}
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
    tokenId?: TokenId | string

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
     * DAO governance parameters
     * @property {IHashgraph.ILedger.IDAO.IConfig} dao
     * @description Configuration for DAO-controlled allowance deletions
     * @type {IHashgraph.ILedger.IDAO.IConfig}
     * @memberof _IAllowanceDelete
     * @optional
     * @remarks
     * - Required only for DAO-governed allowances
     * - Must reference a valid DAO topic
     * - Requires consensus timestamp validation
     * @example
     * ```typescript
     * dao: {
     *   // DAO topic identifier
     *   topicId: "0.0.34567",
     *   
     *   // Consensus timestamp for governance
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    dao?: IHashgraph.ILedger.IDAO.IConfig
}
