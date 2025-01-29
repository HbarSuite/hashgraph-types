import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

    /**
     * NFT Burn Operation Model
     * @class _Burn
     * @implements {IHashgraph.ILedger.IHTS.INft.IBurn}
     * @description Defines the structure and validation for burning (permanently removing) 
     * a specific Non-Fungible Token (NFT) from the Hedera Token Service (HTS).
     * This operation is irreversible and reduces the total supply of the NFT collection.
     */
    export class _Burn implements IHashgraph.ILedger.IHTS.INft.IBurn {
        /**
         * The unique identifier of the NFT token collection
         * @property {string} token_id
         * @description Represents the Hedera token ID in the format '0.0.x'
         * where x is the unique token number. This identifies the NFT collection
         * from which a specific token will be burned.
         * @example "0.0.12345"
         */
        @ApiProperty({
            description: 'The unique identifier of the NFT token to be burned',
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
         * This number identifies which exact NFT instance will be burned.
         * @example 1
         */
        @ApiProperty({
            description: 'The unique serial number of the specific NFT to be burned',
            example: 1,
        })
        @IsNumber()
        @IsNotEmpty()
        serial_number: number;

        /**
         * Decentralized Autonomous Organization (DAO) Configuration
         * @property {Hashgraph.Ledger.DAO.Config} [dao]
         * @description Optional configuration for DAO-governed NFT burning operations.
         * When provided, the burn operation must comply with DAO governance rules.
         * Includes topic ID for consensus tracking and timestamp for operation timing.
         * @optional
         */
        @ApiProperty({
            description: 'Optional DAO configuration for the NFT burning',
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
         * @description Optional sender account details for the burn operation.
         * Includes the sender's public key or key list for authentication,
         * and the sender's account ID on the Hedera network.
         * @optional
         */
        @ApiProperty({
            description: 'Sender information for the burn operation',
            example: {
                key: 'PublicKey or KeyList',
                id: 'AccountId'
            }
        })
        sender?: {
            key?: PublicKey | KeyList;
            id?: AccountId;
        }

        constructor(token_id: string, serial_number: number, sender?: { key?: PublicKey | KeyList; id?: AccountId }) {
            this.token_id = token_id;
            this.serial_number = serial_number;
            this.sender = sender;

            if (!this.token_id || typeof this.token_id !== 'string') {
                throw new Error('Invalid token_id: Must be a non-empty string');
            }

            if (!Number.isInteger(this.serial_number) || this.serial_number <= 0) {
                throw new Error('Invalid serial_number: Must be a positive integer');
            }
        }
    }