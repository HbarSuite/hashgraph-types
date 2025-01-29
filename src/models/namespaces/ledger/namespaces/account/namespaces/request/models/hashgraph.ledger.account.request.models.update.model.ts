
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * Class implementing the Hashgraph account update request interface.
 * Provides functionality for updating existing accounts with various configurations.
 * 
 * @description This class handles account update parameters including:
 * - Account memo updates
 * - Token association limits
 * - Receiver signature requirements
 * - Staking node configuration
 * - Sender key and ID management
 * - DAO-controlled updates
 * 
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.IUpdate}
 * @example
 * ```typescript
 * // Create basic update request
 * const request = new _Update("New memo");
 * 
 * // Create update with multiple options
 * const fullRequest = new _Update(
 *   "Updated memo",
 *   5, // Max token associations
 *   true, // Require receiver signature
 *   123, // Staking node ID
 *   { // Sender details
 *     key: PublicKey.fromString("..."),
 *     id: AccountId.fromString("0.0.123")
 *   }
 * );
 * 
 * // Update with DAO configuration
 * const daoRequest = new _Update(
 *   "DAO Update",
 *   undefined,
 *   undefined,
 *   undefined,
 *   undefined,
 *   {
 *     topicId: "0.0.123",
 *     consensusTimestamp: "1234567890.123456789"
 *   }
 * );
 * ```
 */
export class _Update implements IHashgraph.ILedger.IAccounts.IRequest.IUpdate {
    /**
     * Optional memo to be associated with the account
     * @description A string memo that can be updated for the account. Used to store additional information or notes.
     * @example "Updated account settings for Q2"
     */
    @ApiProperty({
        description: 'Optional memo to be associated with the account',
        type: () => String,
        required: false,
        example: "Updated account settings for Q2"
    })
    memo?: string;

    /**
     * Maximum number of automatic token associations
     * @description The maximum number of tokens that can be automatically associated with this account.
     * Must be a non-negative number. Controls the account's ability to receive different token types.
     * @example 5
     */
    @ApiProperty({
        description: 'Optional maximum number of automatic token associations',
        type: () => Number,
        required: false,
        example: 5
    })
    maxAutomaticTokenAssociations?: number;

    /**
     * Flag indicating if receiver signature is required
     * @description When true, requires the receiver's signature for transfers to this account.
     * Enhances security by requiring explicit approval for incoming transfers.
     * @example true
     */
    @ApiProperty({
        description: 'Optional flag indicating if receiver signature is required',
        type: () => Boolean,
        required: false,
        example: true
    })
    isReceiverSignatureRequired?: boolean;

    /**
     * Staking node identifier
     * @description The node ID to which this account will stake its hbars.
     * Must be a non-negative number representing a valid node in the network.
     * @example 123
     */
    @ApiProperty({
        description: 'Optional staking node identifier',
        type: () => Number,
        required: false,
        example: 123
    })
    stakingNode?: number;

    /**
     * Sender information for the update transaction
     * @description Contains the sender's authentication details including public key/key list and account ID
     * @property {PublicKey | KeyList} [key] - The public key or key list that will control this account
     * @property {AccountId} [id] - The account ID of the sender
     * @example
     * {
     *   key: PublicKey.fromString("302a300506..."),
     *   id: AccountId.fromString("0.0.123")
     * }
     */
    @ApiProperty({
        description: 'Optional sender account details',
        required: false,
        type: 'object',
        example: {
            key: "PublicKey or KeyList instance",
            id: "AccountId instance"
        }
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * DAO Configuration for the update
     * @description Optional configuration for DAO-controlled updates, including topic ID and consensus timestamp
     * @property {string} topicId - The topic ID for the DAO consensus
     * @property {string} consensusTimestamp - The consensus timestamp for the DAO decision
     * @example
     * {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the account update',
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
     * Creates an instance of _Update
     * @description Initializes a new account update request with the provided parameters
     * @param {string} [memo] - Optional memo for the account
     * @param {number} [maxAutomaticTokenAssociations] - Maximum automatic token associations
     * @param {boolean} [isReceiverSignatureRequired] - Whether receiver signature is required
     * @param {number} [stakingNode] - Node ID for staking
     * @param {Object} [sender] - Optional sender information
     * @param {PublicKey | KeyList} [sender.key] - The public key or key list
     * @param {AccountId} [sender.id] - The sender's account ID
     * @param {Hashgraph.Ledger.DAO.Config} [dao] - Optional DAO configuration
     * @throws {Error} If memo is not a string
     * @throws {Error} If maxAutomaticTokenAssociations is negative
     * @throws {Error} If isReceiverSignatureRequired is not a boolean
     * @throws {Error} If stakingNode is negative
     * @throws {Error} If sender key is invalid
     * @throws {Error} If sender id is invalid
     * @example
     * ```typescript
     * // Basic update
     * const update = new _Update("New memo");
     * 
     * // Full update with all parameters
     * const fullUpdate = new _Update(
     *   "Updated memo",
     *   5,
     *   true,
     *   123,
     *   {
     *     key: myPublicKey,
     *     id: myAccountId
     *   },
     *   {
     *     topicId: "0.0.123",
     *     consensusTimestamp: "1234567890.123456789"
     *   }
     * );
     * ```
     */
    constructor(
        memo?: string,
        maxAutomaticTokenAssociations?: number,
        isReceiverSignatureRequired?: boolean,
        stakingNode?: number,
        sender?: { key?: PublicKey | KeyList, id?: AccountId },
        dao?: Hashgraph.Ledger.DAO.Config
    ) {
        // Validate memo if provided
        if (memo !== undefined && typeof memo !== 'string') {
            throw new Error('Invalid memo. Must be a string.');
        }
        this.memo = memo;

        // Validate maxAutomaticTokenAssociations if provided
        if (maxAutomaticTokenAssociations !== undefined && (typeof maxAutomaticTokenAssociations !== 'number' || maxAutomaticTokenAssociations < 0)) {
            throw new Error('Invalid maxAutomaticTokenAssociations. Must be a non-negative number.');
        }
        this.maxAutomaticTokenAssociations = maxAutomaticTokenAssociations;

        // Validate isReceiverSignatureRequired if provided
        if (isReceiverSignatureRequired !== undefined && typeof isReceiverSignatureRequired !== 'boolean') {
            throw new Error('Invalid isReceiverSignatureRequired. Must be a boolean.');
        }
        this.isReceiverSignatureRequired = isReceiverSignatureRequired;

        // Validate stakingNode if provided
        if (stakingNode !== undefined && (typeof stakingNode !== 'number' || stakingNode < 0)) {
            throw new Error('Invalid stakingNode. Must be a non-negative number.');
        }
        this.stakingNode = stakingNode;

        // Validate sender if provided
        if (sender) {
            if (sender.key && !(sender.key instanceof PublicKey) && !(sender.key instanceof KeyList)) {
                throw new Error('Invalid sender key. Must be a PublicKey or KeyList instance.');
            }
            if (sender.id && !(sender.id instanceof AccountId)) {
                throw new Error('Invalid sender id. Must be an AccountId instance.');
            }
            this.sender = sender;
        }

        // Assign DAO config if provided
        if (dao) {
            this.dao = dao;
        }
    }
}