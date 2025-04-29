import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * Class implementing the Hashgraph account deletion request interface.
 * Provides functionality for validating and managing account deletion requests.
 * 
 * @class _Delete
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.IDelete}
 * @description Handles account deletion requests with:
 * - Account deletion parameter validation
 * - Transfer account ID validation and processing
 * - Type safety enforcement
 * - Optional DAO configuration support
 * - Sender information management
 * 
 * @example
 * // Basic deletion request
 * const deleteRequest = new _Delete("0.0.123456");
 * 
 * // Deletion request with sender info
 * const deleteWithSender = new _Delete(
 *   "0.0.123456",
 *   {
 *     key: myPublicKey,
 *     id: AccountId.fromString("0.0.789")
 *   }
 * );
 * 
 * // Deletion request with DAO config
 * const deleteWithDAO = new _Delete(
 *   "0.0.123456", 
 *   undefined,
 *   {
 *     topicId: "0.0.888",
 *     consensusTimestamp: "2024-01-01T00:00:00.000Z"
 *   }
 * );
 */
export class _Delete implements IHashgraph.ILedger.IAccounts.IRequest.IDelete {
    /**
     * The account ID that will receive any remaining balance after deletion
     * Must be in valid Hedera format (shard.realm.num)
     * 
     * @type {string}
     * @example "0.0.123456"
     */
    @ApiProperty({
        description: 'Account ID to receive remaining balance upon deletion',
        type: () => String,
        required: true,
        example: "0.0.123456"
    })
    transferAccountId: string;

    /**
     * Optional sender account information for the deletion request
     * Contains public key/key list and account ID details
     * 
     * @type {Object}
     * @property {PublicKey | KeyList} [key] - Public key or key list for account control
     * @property {AccountId} [id] - Sender's account ID
     * @example
     * sender: {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.789")
     * }
     */
    @ApiProperty({
        description: 'Optional sender account details',
        required: false,
        type: () => Object
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * Optional DAO configuration for deletion governance
     * Used when deletion requires DAO consensus
     * 
     * @type {Hashgraph.Ledger.DAO.Config}
     * @example
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * })
     */
    @ApiProperty({
        description: 'DAO configuration for deletion governance',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    /**
     * Creates a new account deletion request
     * 
     * @param {IHashgraph.ILedger.IAccounts.IRequest.IDelete} data - Partial data to initialize the delete
     * 
     * @throws {Error} If transferAccountId is invalid or empty
     * @throws {Error} If transferAccountId format is incorrect
     * @throws {Error} If sender key is invalid type
     * @throws {Error} If sender ID is invalid type
     * @throws {Error} If DAO config is malformed
     * 
     * @example
     * // Basic deletion
     * const basic = new _Delete("0.0.123456");
     * 
     * // With sender
     * const withSender = new _Delete("0.0.123456", {
     *   key: PublicKey.fromString("..."),
     *   id: AccountId.fromString("0.0.789")
     * });
     * 
     * // With DAO
     * const withDAO = new _Delete("0.0.123456", undefined, {
     *   topicId: "0.0.888",
     *   consensusTimestamp: "2024-01-01T00:00:00.000Z"
     * });
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.IDelete) {
        Object.assign(this, data);

        if (!this.transferAccountId || typeof this.transferAccountId !== 'string') {
            throw new Error('Invalid transferAccountId. Must be a non-empty string.');
        }

        // Validate account ID format (shard.realm.num)
        if (!/^\d+\.\d+\.\d+$/.test(this.transferAccountId)) {
            throw new Error('Invalid transferAccountId format. Expected format: shard.realm.num');
        }

        // Validate sender if provided
        if (this.sender) {
            if (this.sender.key && !(this.sender.key instanceof PublicKey) && !(this.sender.key instanceof KeyList)) {
                throw new Error('Invalid sender key. Must be a PublicKey or KeyList instance.');
            }
            if (this.sender.id && !(this.sender.id instanceof AccountId)) {
                throw new Error('Invalid sender id. Must be an AccountId instance.');
            }
        }

        // Validate dao if provided
        if (this.dao) {
            if (!this.dao.topicId || !this.dao.consensusTimestamp || 
                typeof this.dao.topicId !== 'string' || 
                typeof this.dao.consensusTimestamp !== 'string') {
                throw new Error('Invalid DAO configuration. Must include valid topicId and consensusTimestamp.');
            }
        }
    }
}