import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsEnum, IsString, IsOptional, IsNumber, IsArray } from 'class-validator';
import { AccountId, KeyList, PublicKey } from '@hashgraph/sdk';
import { TokenId } from '@hashgraph/sdk';
import { IHashgraph, Hashgraph } from '../../../../../../../..';

/**
 * Class implementing the Hashgraph allowance approval interface.
 * This class provides validation and type safety for HBAR, token, NFT and DAO-controlled allowances.
 * 
 * @description Handles allowance approvals for different asset types:
 * - HBAR allowances: Approve spending of HBAR cryptocurrency
 * - Token allowances: Approve spending of fungible tokens
 * - NFT allowances: Approve transfers of non-fungible tokens
 * - DAO-controlled allowances: Allowances managed by decentralized autonomous organizations
 * 
 * @example
 * // Create HBAR allowance
 * const hbarAllowance = new _AllowanceApproval(
 *   'hbar',
 *   '0.0.123', // Owner account
 *   '0.0.456', // Spender account
 *   undefined,  // No token ID needed
 *   100        // Amount in tinybars
 * );
 * 
 * // Create token allowance
 * const tokenAllowance = new _AllowanceApproval(
 *   'token',
 *   '0.0.123',   // Owner account
 *   '0.0.456',   // Spender account
 *   '0.0.789',   // Token ID
 *   1000         // Token amount
 * );
 * 
 * // Create NFT allowance
 * const nftAllowance = new _AllowanceApproval(
 *   'nft',
 *   '0.0.123',      // Owner account
 *   '0.0.456',      // Spender account
 *   '0.0.789',      // NFT token ID
 *   undefined,      // No amount needed
 *   [1, 2, 3]       // Serial numbers
 * );
 * 
 * // Create DAO-controlled allowance
 * const daoAllowance = new _AllowanceApproval(
 *   'hbar',
 *   '0.0.123',      // Owner account
 *   '0.0.456',      // Spender account
 *   undefined,      // No token ID
 *   100,            // Amount
 *   undefined,      // No serial numbers
 *   {               // DAO config
 *     topicId: '0.0.999',
 *     consensusTimestamp: '1234567890.123456789'
 *   }
 * );
 * 
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.IAllowanceApproval}
 */
export class _AllowanceApproval implements IHashgraph.ILedger.IAccounts.IRequest.IAllowanceApproval {
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
     * The account ID of the owner authorizing the allowance
     * @description Account ID that owns the assets and is granting the allowance
     * @type {string}
     * @example
     * allowance.ownerAccountId = '0.0.123'; // Account granting permission
     */
    @ApiProperty({
        description: 'Owner account ID authorizing the allowance',
        type: String,
        required: true
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
     * The amount being authorized
     * @description Quantity of HBAR/tokens the spender is allowed to use
     * @type {number}
     * @example
     * allowance.amount = 100; // Amount of currency/tokens approved
     */
    @ApiProperty({
        description: 'Amount being authorized (HBAR amount as string or token amount as number)',
        type: String,
        required: false
    })
    @IsOptional()
    @IsNumber()
    amount?: number;

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
     * DAO Configuration
     * @description Configuration for DAO-controlled allowance approvals
     * @type {Hashgraph.Ledger.DAO.Config}
     * @example
     * allowance.dao = {
     *   topicId: '0.0.999',
     *   consensusTimestamp: '1234567890.123456789'
     * };
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the allowance approval',
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
     * Sender information
     * @description Details about the account initiating the allowance approval
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @example
     * allowance.sender = {
     *   key: publicKey,
     *   id: new AccountId('0.0.123')
     * };
     */
    @ApiProperty({
        description: 'Optional sender information',
        type: 'object',
        required: false,
        properties: {
            key: { type: 'object' },
            id: { type: 'object' }
        }
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * Creates an instance of _AllowanceApproval
     * @description Initializes a new allowance approval with validation
     * 
     * @param {IHashgraph.ILedger.IAccounts.IRequest.IAllowanceApproval} data - Partial data to initialize the allowance approval
     * 
     * @throws {Error} If type is invalid
     * @throws {Error} If ownerAccountId is invalid
     * @throws {Error} If spenderAccountId is invalid
     * @throws {Error} If tokenId format is invalid
     * @throws {Error} If amount is invalid
     * @throws {Error} If serialNumbers format is invalid
     * @throws {Error} If dao configuration is invalid
     * @throws {Error} If sender information is invalid
     * 
     * @example
     * // Create basic HBAR allowance
     * const allowance = new _AllowanceApproval(
     *   'hbar',
     *   '0.0.123',
     *   '0.0.456',
     *   undefined,
     *   100
     * );
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.IAllowanceApproval) {
        Object.assign(this, data);

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

        // Validate tokenId if provided
        if (this.tokenId !== undefined) {
            if (typeof this.tokenId !== 'string' || this.tokenId.trim() === '') {
                throw new Error('Invalid tokenId. Must be a non-empty string.');
            }
        }

        // Validate amount if provided
        if (this.amount !== undefined) {
            if (typeof this.amount !== 'string' && typeof this.amount !== 'number') {
                throw new Error('Invalid amount. Must be a string or number.');
            }
            if (typeof this.amount === 'number' && this.amount < 0) {
                throw new Error('Invalid amount. Must be non-negative.');
            }
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
