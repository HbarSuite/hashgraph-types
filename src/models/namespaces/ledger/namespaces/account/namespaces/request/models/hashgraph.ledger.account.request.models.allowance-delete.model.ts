import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsOptional, IsArray, IsNumber, IsEnum } from 'class-validator';
import { AccountId, KeyList, PublicKey, TokenId } from '@hashgraph/sdk';
import { IHashgraph, Hashgraph } from '../../../../../../../..';
import { Token } from 'nodemailer/lib/xoauth2';

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
     * The type of allowance being approved
     * @description Specifies whether this is an HBAR, token, or NFT allowance
     * @type {'hbar' | 'token' | 'nft'}
     * @example
     * allowance.type = 'hbar';  // For HBAR allowances
     * allowance.type = 'token'; // For fungible token allowances
     * allowance.type = 'nft';   // For non-fungible token allowances
     */
    @ApiProperty({
        description: 'Type of allowance (hbar, token, or nft)',
        enum: ['hbar', 'token', 'nft'],
        required: true
    })
    @IsEnum(['hbar', 'token', 'nft'])
    type: 'hbar' | 'token' | 'nft';
        
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
     * The account ID of the spender being authorized
     * @description Account ID that is being granted permission to spend/transfer assets
     * @type {string}
     * @example
     * allowance.spenderAccountId = '0.0.456'; // Account receiving permission
     */
    @ApiProperty({
        description: 'Spender account ID being authorized',
        type: String,
        required: true
    })
    @IsString()
    spenderAccountId: string;    

    /**
     * The token ID for token or NFT allowances
     * @description Identifier of the token being approved for spending/transfer
     * @type {TokenId | string}
     * @example
     * allowance.tokenId = '0.0.789'; // ID of token being approved
     */
    @ApiProperty({
        description: 'Token ID for token or NFT allowances',
        type: String,
        required: false
    })
    @IsOptional()
    @IsString()
    tokenId?: TokenId | string

    /**
     * Array of NFT serial numbers
     * @description List of specific NFT serial numbers being approved for transfer
     * @type {number[]}
     * @example
     * allowance.serialNumbers = [1, 2, 3]; // Specific NFTs approved
     */
    @ApiProperty({
        description: 'Array of NFT serial numbers for specific NFT allowances',
        type: [Number],
        required: false
    })
    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    serialNumbers?: number[];    

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
     * @param {IHashgraph.ILedger.IAccounts.IRequest.IAllowanceDelete} data - Partial data to initialize the allowance delete
     * @throws {Error} If ownerAccountId is not a valid non-empty string
     * @throws {Error} If spenderAccountId is not a valid non-empty string
     * @throws {Error} If tokenId is not a valid non-empty string
     * @throws {Error} If serialNumbers is not an array of numbers
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
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.IAllowanceDelete) {
        Object.assign(this, data);

        // Validate type
        if (!['hbar', 'token', 'nft'].includes(this.type)) {
            throw new Error('Invalid type. Must be "hbar", "token", or "nft".');
        }

        // Validate ownerAccountId
        if (typeof this.ownerAccountId !== 'string' || this.ownerAccountId.trim() === '') {
            throw new Error('Invalid ownerAccountId. Must be a non-empty string.');
        }

        // Validate spenderAccountId
        if (typeof this.spenderAccountId !== 'string' || this.spenderAccountId.trim() === '') {
            throw new Error('Invalid spenderAccountId. Must be a non-empty string.');
        }

        // Validate nftId
        if (typeof this.tokenId !== 'string' || this.tokenId.trim() === '') {
            throw new Error('Invalid nftId. Must be a non-empty string.');
        }

        // Validate serialNumbers if provided
        if (this.serialNumbers !== undefined) {
            if (!Array.isArray(this.serialNumbers)) {
                throw new Error('Invalid serialNumbers. Must be an array of numbers.');
            }
            if (!this.serialNumbers.every(num => typeof num === 'number' && num >= 0)) {
                throw new Error('Invalid serialNumbers. All elements must be non-negative numbers.');
            }
        }        

        // Validate dao if provided
        if (this.dao !== undefined) {
            if (typeof this.dao !== 'object' || !this.dao.topicId || !this.dao.consensusTimestamp ||
                typeof this.dao.topicId !== 'string' || typeof this.dao.consensusTimestamp !== 'string') {
                throw new Error('Invalid dao configuration. Must include topicId and consensusTimestamp as strings.');
            }
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
    }
}
