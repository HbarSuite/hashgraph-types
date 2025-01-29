import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsOptional, Min, IsNotEmpty, IsObject } from 'class-validator';
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";
import { Hashgraph } from '../../../../../../../../../hashgraph.namespace';

/**
 * Class representing an atomic swap transaction between accounts on the Hedera network
 * @description Provides functionality for performing atomic swaps between accounts, including:
 * - Token transfers between sender and receiver accounts
 * - Validation of account IDs and token details
 * - Support for optional memo and DAO governance
 * - Sender key and account validation
 * @implements {IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IAtomicSwap}
 */
export class _AtomicSwap implements IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IAtomicSwap {
    /**
     * The account ID of the sender initiating the atomic swap
     * @description Must be a valid Hedera account ID in the format "0.0.x"
     * @example "0.0.123456"
     * @type {string}
     */
    @ApiProperty({
        description: 'The account ID of the sender initiating the atomic swap',
        example: '0.0.123456',
    })
    @IsString()
    @IsNotEmpty()
    from: string;

    /**
     * The account ID of the receiver in the atomic swap
     * @description Must be a valid Hedera account ID in the format "0.0.x"
     * @example "0.0.789012"
     * @type {string}
     */
    @ApiProperty({
        description: 'The account ID of the receiver in the atomic swap',
        example: '0.0.789012',
    })
    @IsString()
    @IsNotEmpty()
    to: string;

    /**
     * The ID of the token being transferred in the swap
     * @description Must be a valid Hedera token ID in the format "0.0.x"
     * @example "0.0.345678"
     * @type {string}
     */
    @ApiProperty({
        description: 'The unique identifier of the token being swapped',
        example: '0.0.345678',
    })
    @IsString()
    @IsNotEmpty()
    token_id: string;

    /**
     * The number of decimal places for the token
     * @description Must be a non-negative integer representing decimal precision
     * @example 8
     * @type {number}
     */
    @ApiProperty({
        description: 'The number of decimal places for the token being swapped',
        example: 8,
    })
    @IsNumber()
    @Min(0)
    decimals: number;

    /**
     * The amount of tokens to transfer
     * @description Must be a positive number representing token quantity
     * @example 100
     * @type {number}
     */
    @ApiProperty({
        description: 'The amount of tokens to be swapped',
        example: 100,
    })
    @IsNumber()
    @Min(0)
    amount: number;

    /**
     * Optional transaction memo
     * @description Additional notes or description for the atomic swap
     * @example "Token swap for Project X"
     * @type {string}
     * @optional
     */
    @ApiProperty({
        description: 'An optional memo to include with the atomic swap',
        required: false,
        example: 'Atomic swap for Project X',
    })
    @IsString()
    @IsOptional()
    memo?: string;

    /**
     * Optional DAO configuration for governance
     * @description Configuration for DAO-controlled atomic swaps
     * @type {Hashgraph.Ledger.DAO.Config}
     * @optional
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the atomic swap',
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
     * Optional sender account details
     * @description Contains sender's public key/key list and account ID
     * @type {{key?: PublicKey | KeyList, id?: AccountId}}
     * @optional
     */
    @ApiProperty({
        description: 'The sender account details',
        required: false
    })
    @IsOptional()
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Creates a new atomic swap transaction
     * @param {IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IAtomicSwap} data - Atomic swap configuration
     * @param {string} data.from - Sender's account ID
     * @param {string} data.to - Receiver's account ID
     * @param {string} data.token_id - Token ID to be swapped
     * @param {number} data.decimals - Token decimal places
     * @param {number} data.amount - Amount of tokens to swap
     * @param {string} [data.memo] - Optional transaction memo
     * @throws {Error} When required fields are missing or invalid
     * @throws {Error} When decimals is negative
     * @throws {Error} When amount is not positive
     */
    constructor(data: IHashgraph.ILedger.IAccounts.IRequest.ITransfer.IAtomicSwap) {
        // Set all fields from input data
        this.from = data.from;
        this.to = data.to;
        this.token_id = data.token_id;
        this.decimals = data.decimals;
        this.amount = data.amount;
        this.memo = data.memo;

        // Validate required fields
        if (!this.from || !this.to || !this.token_id) {
            throw new Error('Sender, receiver, and token_id are required');
        }

        // Validate numeric constraints
        if (this.decimals < 0) {
            throw new Error('Decimals must be a non-negative number');
        }
        if (this.amount <= 0) {
            throw new Error('Amount must be a positive number');
        }
    }
}