import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * Fungible Token Burn Operation Model
 * @class _Burn
 * @implements {IHashgraph.ILedger.IHTS.IFungibleToken.IBurn}
 * @description Defines the structure and validation for burning (permanently removing)
 * fungible tokens from circulation on the Hedera Token Service (HTS).
 * This operation reduces the total supply of the token and is irreversible.
 * Used for supply management, deflationary mechanisms, or token retirement.
 */
export class _Burn implements IHashgraph.ILedger.IHTS.IFungibleToken.IBurn {
    /**
     * The unique identifier of the fungible token
     * @property {string} token_id
     * @description Represents the Hedera token ID in the format '0.0.x'
     * where x is the unique token number. This identifies the specific
     * fungible token type that will have its supply reduced through burning.
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The unique identifier of the token to be burned',
        example: '0.0.12345',
    })
    @IsNotEmpty()
    @IsString()
    token_id: string;

    /**
     * Burn Amount
     * @property {number} amount
     * @description The quantity of fungible tokens to permanently remove from circulation.
     * Must be a positive integer value. This amount will be deducted from the
     * total supply of the token. The operation fails if the available supply
     * is less than this amount.
     * @example 100
     */
    @ApiProperty({
        description: 'The quantity of tokens to be burned',
        example: 100,
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    amount: number;

    /**
     * Decentralized Autonomous Organization (DAO) Configuration
     * @property {Hashgraph.Ledger.DAO.Config} [dao]
     * @description Optional configuration for DAO-governed token burn operations.
     * When provided, the burn operation must comply with DAO governance rules.
     * Includes topic ID for consensus tracking and timestamp for operation timing.
     * @optional
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the token burning',
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
     * Must have appropriate burn authorization for the token.
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