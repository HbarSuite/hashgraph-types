import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsOptional } from 'class-validator';
import { NftId, AccountId, KeyList, PublicKey } from '@hashgraph/sdk';
import { IHashgraph, Hashgraph } from '../../../../../../../..';

/**
 * Class implementing the Hashgraph NFT allowance deletion interface.
 * This class provides validation and type safety for NFT allowance deletions.
 * Note: For HBAR or fungible token allowance deletion, use AccountAllowanceApproveTransaction with amount 0.
 * 
 * The class ensures:
 * - Valid account ID formats
 * - Valid NFT ID format
 * - Type safety for all properties
 * - Parameter validation in constructor
 * 
 * @example
 * // Create a new NFT allowance deletion request
 * const deleteRequest = new _AllowanceDelete(
 *   "0.0.123", // Owner account ID
 *   "0.0.456", // NFT ID
 *   { // Optional DAO config
 *     topicId: "0.0.789",
 *     consensusTimestamp: "2024-01-01T00:00:00.000Z"
 *   }
 * );
 */
export class _AllowanceDelete implements IHashgraph.ILedger.IAccounts.IRequest.IAllowanceDelete {
    /**
     * The account ID of the owner deleting the NFT allowance
     * @type {string}
     * @example "0.0.123"
     */
    @ApiProperty({
        description: 'Owner account ID deleting the NFT allowance',
        type: String,
        required: true,
        example: "0.0.123"
    })
    @IsString()
    ownerAccountId: string;

    /**
     * The NFT ID of the NFT allowance being deleted
     * @type {string}
     * @note The total number of NFT serial number deletions cannot exceed 20 per transaction
     * @example "0.0.456"
     */
    @ApiProperty({
        description: 'NFT ID of the allowance being deleted',
        type: String,
        required: true,
        example: "0.0.456"
    })
    @IsString()
    nftId: NftId | string;

    /**
     * Optional sender information for the allowance deletion
     * @type {Object}
     * @property {PublicKey | KeyList} [key] - The public key or key list that will control this account
     * @property {AccountId} [id] - The account ID of the sender
     * @example
     * {
     *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   id: AccountId.fromString("0.0.789")
     * }
     */
    @ApiProperty({
        description: 'Optional sender account details',
        required: false,
        type: 'object',
        example: {
            key: "PublicKey instance",
            id: "0.0.789"
        }
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * Optional DAO configuration for the allowance deletion
     * @type {Hashgraph.Ledger.DAO.Config}
     * @property {string} topicId - The topic ID for the DAO consensus
     * @property {string} consensusTimestamp - The consensus timestamp
     * @example
     * {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the allowance deletion',
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
     * Creates an instance of _AllowanceDelete for NFT allowance deletion
     * @param {string} ownerAccountId - The account ID of the owner deleting the allowance
     * @param {string} nftId - The NFT ID of the allowance being deleted
     * @param {Object} [dao] - Optional DAO configuration
     * @param {string} dao.topicId - The topic ID for the DAO consensus
     * @param {string} dao.consensusTimestamp - The consensus timestamp
     * @param {Object} [sender] - Optional sender information
     * @param {PublicKey | KeyList} [sender.key] - The public key or key list
     * @param {AccountId} [sender.id] - The sender's account ID
     * @throws {Error} If ownerAccountId is not a valid non-empty string
     * @throws {Error} If nftId is not a valid non-empty string
     * @throws {Error} If dao is provided but missing required fields or has invalid types
     * @throws {Error} If sender contains invalid key or id types
     * @example
     * const deleteRequest = new _AllowanceDelete(
     *   "0.0.123",
     *   "0.0.456",
     *   {
     *     topicId: "0.0.789",
     *     consensusTimestamp: "2024-01-01T00:00:00.000Z"
     *   },
     *   {
     *     key: PublicKey.fromString("302a300506..."),
     *     id: AccountId.fromString("0.0.789")
     *   }
     * );
     */
    constructor(
        ownerAccountId: string,
        nftId: NftId | string,
        dao?: {
            topicId: string;
            consensusTimestamp: string;
        },
        sender?: { 
            key?: PublicKey | KeyList,
            id?: AccountId 
        }
    ) {
        // Validate ownerAccountId
        if (typeof ownerAccountId !== 'string' || ownerAccountId.trim() === '') {
            throw new Error('Invalid ownerAccountId. Must be a non-empty string.');
        }
        this.ownerAccountId = ownerAccountId;

        // Validate nftId
        if (typeof nftId !== 'string' || nftId.trim() === '') {
            throw new Error('Invalid nftId. Must be a non-empty string.');
        }
        this.nftId = nftId;

        // Validate dao if provided
        if (dao !== undefined) {
            if (typeof dao !== 'object' || !dao.topicId || !dao.consensusTimestamp ||
                typeof dao.topicId !== 'string' || typeof dao.consensusTimestamp !== 'string') {
                throw new Error('Invalid dao configuration. Must include topicId and consensusTimestamp as strings.');
            }
            this.dao = dao;
        }

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
    }
}
