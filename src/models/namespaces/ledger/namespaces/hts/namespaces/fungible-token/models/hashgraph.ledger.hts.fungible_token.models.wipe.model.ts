import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

    /**
     * Fungible Token Wipe Operation Model
     * @class _Wipe
     * @implements {IHashgraph.ILedger.IHTS.IFungibleToken.IWipe}
     * @description Defines the structure and validation for wiping (removing)
     * fungible tokens from specific accounts on the Hedera Token Service (HTS).
     * This operation is typically used for compliance, security, or administrative purposes.
     * Unlike burning, wiping removes tokens from a specific account while maintaining
     * the token's existence in the system.
     */
    export class _Wipe implements IHashgraph.ILedger.IHTS.IFungibleToken.IWipe {
        /**
         * The unique identifier of the fungible token
         * @property {string} token_id
         * @description Represents the Hedera token ID in the format '0.0.x'
         * where x is the unique token number. This identifies the specific
         * fungible token type that will be wiped from the target account.
         * @example "0.0.12345"
         */
        @ApiProperty({
            description: 'The unique identifier of the token to be wiped',
            example: '0.0.12345',
        })
        @IsNotEmpty()
        @IsString()
        token_id: string;

        /**
         * Wipe Amount
         * @property {number} amount
         * @description The quantity of fungible tokens to remove from the target account.
         * Must be a positive integer value. This amount will be removed from the
         * account's balance. The operation fails if the account's balance is
         * less than this amount.
         * @example 100
         */
        @ApiProperty({
            description: 'The quantity of tokens to be wiped',
            example: 100,
        })
        @IsNotEmpty()
        @IsNumber()
        @Min(1)
        amount: number;

        /**
         * Target Account Identifier
         * @property {string} account_id
         * @description The Hedera account ID (in format '0.0.x') from which the tokens
         * will be wiped. This account must currently hold at least the specified
         * amount of tokens. The wipe operation removes these tokens from the
         * account's balance.
         * @example "0.0.67890"
         */
        @ApiProperty({
            description: 'The account identifier from which the tokens will be wiped',
            example: '0.0.67890',
        })
        @IsNotEmpty()
        @IsString()
        account_id: string;

        /**
         * Decentralized Autonomous Organization (DAO) Configuration
         * @property {Hashgraph.Ledger.DAO.Config} [dao]
         * @description Optional configuration for DAO-governed token wipe operations.
         * When provided, the wipe operation must comply with DAO governance rules.
         * Includes topic ID for consensus tracking and timestamp for operation timing.
         * @optional
         */
        @ApiProperty({
            description: 'Optional DAO configuration for the token wiping',
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
         * Creates an instance of _Wipe
         * @constructor
         * @param {Partial<IHashgraph.ILedger.IHTS.IFungibleToken.IWipe>} data - Initial data to create the wipe
         * @throws {Error} If any of the provided data is invalid
         * @remarks All provided data is validated during instantiation
         */
        constructor(data: Partial<IHashgraph.ILedger.IHTS.IFungibleToken.IWipe>) {
            Object.assign(this, data);

            if (!this.token_id || typeof this.token_id !== 'string') {
                throw new Error('Invalid token_id: Must be a non-empty string');
            }

            if (!this.amount || typeof this.amount !== 'number' || this.amount < 1) {
                throw new Error('Invalid amount: Must be a positive number');
            }

            if (!this.account_id || typeof this.account_id !== 'string') {
                throw new Error('Invalid account_id: Must be a non-empty string');
            }
        }
    }