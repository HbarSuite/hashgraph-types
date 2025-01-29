import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

    /**
     * Fungible Token Mint Operation Model
     * @class _Mint
     * @implements {IHashgraph.ILedger.IHTS.IFungibleToken.IMint}
     * @description Defines the structure and validation for minting (creating)
     * new fungible tokens on the Hedera Token Service (HTS).
     * This operation increases the total supply of the token by creating
     * new tokens. Used for token issuance, supply expansion, or rewards distribution.
     */
    export class _Mint implements IHashgraph.ILedger.IHTS.IFungibleToken.IMint {
        /**
         * The unique identifier of the fungible token
         * @property {string} token_id
         * @description Represents the Hedera token ID in the format '0.0.x'
         * where x is the unique token number. This identifies the specific
         * fungible token type that will have new tokens minted.
         * @example "0.0.12345"
         */
        @ApiProperty({
            description: 'The unique identifier of the token to be minted',
            example: '0.0.12345',
        })
        @IsNotEmpty()
        @IsString()
        token_id: string;

        /**
         * Mint Amount
         * @property {number} amount
         * @description The quantity of new fungible tokens to create and add to circulation.
         * Must be a positive integer value. This amount will be added to the
         * total supply of the token. The operation must respect any maximum
         * supply limits defined in the token's properties.
         * @example 100
         */
        @ApiProperty({
            description: 'The quantity of tokens to be minted',
            example: 100,
        })
        @IsNotEmpty()
        @IsNumber()
        @Min(1)
        amount: number;

        /**
         * Decentralized Autonomous Organization (DAO) Configuration
         * @property {Hashgraph.Ledger.DAO.Config} [dao]
         * @description Optional configuration for DAO-governed token mint operations.
         * When provided, the minting process must comply with DAO governance rules.
         * Includes topic ID for consensus tracking and timestamp for operation timing.
         * @optional
         */
        @ApiProperty({
            description: 'Optional DAO configuration for the token minting',
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
         * @description Optional sender account details for the mint operation.
         * Includes the sender's public key or key list for authentication,
         * and the sender's account ID on the Hedera network.
         * Must have appropriate mint authorization for the token.
         * @optional
         */
        @ApiProperty({
            description: 'Sender information for the mint operation',
            example: {
                key: 'PublicKey or KeyList',
                id: 'AccountId'
            }
        })
        sender?: {
            key?: PublicKey | KeyList;
            id?: AccountId;
        }

        constructor(token_id: string, amount: number, sender?: { key?: PublicKey | KeyList; id?: AccountId }) {
            this.token_id = token_id;
            this.amount = amount;
            this.sender = sender;

            if (!this.token_id || typeof this.token_id !== 'string') {
                throw new Error('Invalid token_id: Must be a non-empty string');
            }

            if (!this.amount || typeof this.amount !== 'number' || this.amount < 1) {
                throw new Error('Invalid amount: Must be a positive number');
            }
        }
    }