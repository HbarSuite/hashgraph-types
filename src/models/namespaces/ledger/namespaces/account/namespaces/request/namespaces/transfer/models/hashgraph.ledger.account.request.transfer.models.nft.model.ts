import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * @fileoverview Defines the model for transferring NFTs between Hashgraph accounts
 * @module IHashgraph.ILedger.IAccount.IRequest.ITransfer.Nft
 * @description This file contains the model definition for NFT transfers between Hedera Hashgraph accounts
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 */

/**
 * Hashgraph Account Transfer NFT Class
 * @class _Nft
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.ITransfer.INft}
 * @summary Class for transferring NFTs between Hashgraph accounts
 * @description Defines the structure for transferring non-fungible tokens (NFTs) between accounts.
 * This class enables direct NFT transfers with validation and supports optional DAO governance and sender configurations.
 * @category Account
 * @subcategory Transfer
 * @since 2.0.0
 * @example
 * ```typescript
 * // Create a basic NFT transfer
 * const transfer = new _Nft(
 *   "0.0.12345", // NFT token ID
 *   "0.0.67890", // from account
 *   "0.0.11111", // to account
 *   1,           // serial number
 *   "Gift NFT"   // optional memo
 * );
 * 
 * // Create an NFT transfer with DAO configuration
 * const daoTransfer = new _Nft(
 *   "0.0.12345",
 *   "0.0.67890", 
 *   "0.0.11111",
 *   1,
 *   "DAO governed transfer"
 * );
 * daoTransfer.dao = {
 *   topicId: "0.0.54321",
 *   consensusTimestamp: "1234567890.123456789"
 * };
 * 
 * // Create an NFT transfer with sender configuration
 * const secureTransfer = new _Nft(
 *   "0.0.12345",
 *   "0.0.67890",
 *   "0.0.11111",
 *   1
 * );
 * secureTransfer.sender = {
 *   key: PublicKey.fromString("302a300506..."),
 *   id: AccountId.fromString("0.0.67890")
 * };
 * ```
 */
export class _Nft implements IHashgraph.ILedger.IAccounts.IRequest.ITransfer.INft {
    /**
     * NFT Token ID
     * @property {string} nft
     * @description The token identifier of the NFT to transfer.
     * Must be in the format "0.0.x" representing a valid Hashgraph token.
     * @type {string}
     * @memberof _Nft
     * @required
     * @throws {Error} If nft is not a non-empty string
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The unique identifier of the NFT token to be transferred',
        example: '0.0.12345',
    })
    @IsString()
    @IsNotEmpty()
    nft: string;

    /**
     * From Account ID
     * @property {string} from
     * @description The account identifier of the sender who owns and will transfer the NFT.
     * Must be in the format "0.0.x" representing a valid Hashgraph account.
     * @type {string}
     * @memberof _Nft
     * @required
     * @throws {Error} If from is not a non-empty string
     * @example "0.0.67890"
     */
    @ApiProperty({
        description: 'The account ID of the sender',
        example: '0.0.67890',
    })
    @IsString()
    @IsNotEmpty()
    from: string;

    /**
     * To Account ID
     * @property {string} to
     * @description The account identifier of the receiver who will receive the NFT.
     * Must be in the format "0.0.x" representing a valid Hashgraph account.
     * @type {string}
     * @memberof _Nft
     * @required
     * @throws {Error} If to is not a non-empty string
     * @example "0.0.11111"
     */
    @ApiProperty({
        description: 'The account ID of the receiver',
        example: '0.0.11111',
    })
    @IsString()
    @IsNotEmpty()
    to: string;

    /**
     * Serial Number
     * @property {number} serial_number
     * @description The unique serial number identifying the specific NFT instance to transfer.
     * Must be a positive integer greater than zero.
     * @type {number}
     * @memberof _Nft
     * @required
     * @throws {Error} If serial_number is not a positive integer
     * @example 1
     */
    @ApiProperty({
        description: 'The unique serial number of the specific NFT to be transferred',
        example: 1,
    })
    @IsNumber()
    @IsNotEmpty()
    serial_number: number;

    /**
     * Transfer Memo
     * @property {string} [memo]
     * @description An optional memo to include with the NFT transfer.
     * Can be used to provide additional context or reference information.
     * @type {string}
     * @memberof _Nft
     * @optional
     * @throws {Error} If provided and not a string
     * @example "NFT transfer memo"
     */
    @ApiProperty({
        description: 'An optional memo to include with the transfer',
        example: 'NFT transfer memo',
        required: false,
    })
    @IsString()
    @IsOptional()
    memo?: string;

    /**
     * DAO Configuration
     * @property {Hashgraph.Ledger.DAO.Config} [dao]
     * @description Optional configuration for DAO-controlled NFT transfers.
     * Includes the topic ID for governance and consensus timestamp for transaction ordering.
     * @type {Hashgraph.Ledger.DAO.Config}
     * @memberof _Nft
     * @optional
     * @since 2.0.0
     * @example
     * ```typescript
     * dao: {
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * }
     * ```
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the NFT transfer',
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
     * Sender Configuration
     * @property {Object} [sender]
     * @description Optional configuration for the sender's authentication and identification.
     * Includes public key or key list for signing and account ID for verification.
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @memberof _Nft
     * @optional
     * @example
     * ```typescript
     * sender: {
     *   key: PublicKey.fromString("302a300506..."),
     *   id: AccountId.fromString("0.0.67890")
     * }
     * ```
     */
    @ApiProperty({
        description: 'Optional sender configuration',
        required: false
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    };

    /**
     * Creates a new NFT transfer instance
     * @constructor
     * @param {Partial<IHashgraph.ILedger.IAccounts.IRequest.ITransfer.INft>} data - Partial data to initialize the NFT transfer
     * @throws {Error} If any required parameters are invalid
     * @example
     * ```typescript
     * const transfer = new _Nft(
     *   "0.0.12345", // NFT token ID
     *   "0.0.67890", // from account
     *   "0.0.11111", // to account
     *   1,           // serial number
     *   "Gift NFT"   // optional memo
     * );
     * ```
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.ITransfer.INft) {
        Object.assign(this, data);

        if (!this.nft || typeof this.nft !== 'string') {
            throw new Error('Invalid nft: Must be a non-empty string');
        }
        if (!this.from || typeof this.from !== 'string') {
            throw new Error('Invalid from: Must be a non-empty string');
        }
        if (!this.to || typeof this.to !== 'string') {
            throw new Error('Invalid receiver: Must be a non-empty string');
        }
        if (!Number.isInteger(this.serial_number) || this.serial_number <= 0) {
            throw new Error('Invalid serial_number: Must be a positive integer');
        }
        if (this.memo !== undefined && typeof this.memo !== 'string') {
            throw new Error('Invalid memo: Must be a string if provided');
        }
    }
}