import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * NFT Wipe Operation Model
 * @class _Wipe
 * @implements {IHashgraph.ILedger.IHTS.INft.IWipe}
 * @description Defines the structure and validation for wiping (removing) 
 * Non-Fungible Tokens (NFTs) from specific accounts on the Hedera Token Service (HTS).
 * This operation is typically used for compliance, security, or administrative purposes
 * and requires appropriate authorization. Unlike burning, wiping removes the token from
 * a specific account while maintaining the token's existence in the system.
 */
export class _Wipe implements IHashgraph.ILedger.IHTS.INft.IWipe {
    /**
     * The unique identifier of the NFT collection
     * @property {string} token_id
     * @description Represents the Hedera token ID in the format '0.0.x'
     * where x is the unique token number. This identifies the NFT collection
     * containing the token to be wiped.
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The unique identifier of the NFT token to be wiped',
        example: '0.0.12345',
    })
    @IsString()
    @IsNotEmpty()
    token_id: string;

    /**
     * The specific NFT's serial number within its collection
     * @property {number} serial_number
     * @description Unique identifier for the specific NFT instance within its collection.
     * Each NFT in a collection has a unique serial number, starting from 1.
     * This number identifies which exact NFT instance will be wiped from the account.
     * @example 1
     */
    @ApiProperty({
        description: 'The unique serial number of the specific NFT to be wiped',
        example: 1,
    })
    @IsNumber()
    @IsNotEmpty()
    serial_number: number;

    /**
     * Target Account Identifier
     * @property {string} account_id
     * @description The Hedera account ID (in format '0.0.x') from which the NFT
     * will be wiped. This account must currently own the specified NFT.
     * The wipe operation removes the NFT from this account's possession.
     * @example "0.0.67890"
     */
    @ApiProperty({
        description: 'The account identifier from which the NFT will be wiped',
        example: '0.0.67890',
    })
    @IsString()
    @IsNotEmpty()
    account_id: string;

    /**
     * Sender Account Information
     * @property {Object} [sender]
     * @description Optional sender account details for the wipe operation.
     * Includes the sender's public key or key list for authentication,
     * and the sender's account ID on the Hedera network.
     * Must have appropriate wipe authorization for the token.
     * @optional
     */
    @ApiProperty({
        description: 'Sender information for the wipe operation',
        example: {
            key: 'PublicKey or KeyList',
            id: 'AccountId'
        }
    })
    sender?: {
        key?: PublicKey | KeyList;
        id?: AccountId;
    }

    /**
     * Decentralized Autonomous Organization (DAO) Configuration
     * @property {Hashgraph.Ledger.DAO.Config} [dao]
     * @description Optional configuration for DAO-governed NFT wipe operations.
     * When provided, the wipe operation must comply with DAO governance rules.
     * Includes topic ID for consensus tracking and timestamp for operation timing.
     * @optional
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the NFT wiping',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    constructor(token_id: string, serial_number: number, account_id: string, sender?: { key?: PublicKey | KeyList; id?: AccountId }) {
        this.token_id = token_id;
        this.serial_number = serial_number;
        this.account_id = account_id;
        this.sender = sender;

        if (!this.token_id || typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id: Must be a non-empty string');
        }

        if (!Number.isInteger(this.serial_number) || this.serial_number <= 0) {
            throw new Error('Invalid serial_number: Must be a positive integer');
        }

        if (!this.account_id || typeof this.account_id !== 'string') {
            throw new Error('Invalid account_id: Must be a non-empty string');
        }
    }
}