import { NftId, AccountId, KeyList, PublicKey } from "@hashgraph/sdk"
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
     * Identifier of the NFT allowance to delete
     * @property {NftId | string} nftId
     * @description The unique identifier of the NFT whose allowance is being revoked
     * @type {NftId | string}
     * @memberof _IAllowanceDelete
     * @required
     * @remarks
     * - Must be a valid NFT ID on the network
     * - Must have an existing allowance to delete
     * - Part of a transaction limited to 20 NFT deletions
     * @example
     * ```typescript
     * // Using string format
     * nftId: "0.0.789012"
     * 
     * // Using NftId object
     * nftId: NftId.fromString("0.0.789012")
     * ```
     */
    nftId: NftId | string;

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
