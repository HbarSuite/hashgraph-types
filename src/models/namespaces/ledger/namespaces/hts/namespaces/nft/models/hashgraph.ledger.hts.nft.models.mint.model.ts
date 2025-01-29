import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { AccountId, KeyList, PublicKey } from "@hashgraph/sdk";

/**
 * NFT Minting Operation Model
 * @class _Mint
 * @implements {IHashgraph.ILedger.IHTS.INft.IMint}
 * @description Defines the structure and validation for minting (creating) new
 * Non-Fungible Tokens (NFTs) on the Hedera Token Service (HTS).
 * This model handles the creation of unique NFTs within a collection,
 * including metadata storage and optional DAO governance integration.
 */
export class _Mint implements IHashgraph.ILedger.IHTS.INft.IMint {
    /**
     * The unique identifier of the NFT collection
     * @property {string} token_id
     * @description Represents the Hedera token ID in the format '0.0.x'
     * where x is the unique token number. This identifies the NFT collection
     * in which the new token will be minted.
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The unique identifier of the token to be minted',
        example: '0.0.12345',
    })
    @IsString()
    @IsNotEmpty()
    token_id: string;

    /**
     * Content Identifier (CID) for NFT Metadata
     * @property {string} cid
     * @description IPFS Content Identifier that points to the NFT's metadata or content.
     * This immutable reference ensures the NFT's associated data remains permanently accessible
     * and verifiable on IPFS. The CID is a unique hash that represents the NFT's metadata
     * including properties like name, description, image, attributes, etc.
     * @example "QmX5NLKeso6xVxTeP3ycB1RQ5Ir3q7C84oSqQyaCzB7q8g"
     */
    @ApiProperty({
        description: 'The Content Identifier (CID) associated with the NFT',
        example: 'QmX5NLKeso6xVxTeP3ycB1RQ5Ir3q7C84oSqQyaCzB7q8g',
    })
    @IsString()
    @IsNotEmpty()
    cid: string;

    /**
     * Sender Account Information
     * @property {Object} [sender]
     * @description Optional sender account details for the minting operation.
     * Includes the sender's public key or key list for authentication,
     * and the sender's account ID on the Hedera network.
     * Required for authorized minting operations.
     * @optional
     */
    @ApiProperty({
        description: 'Sender information for the minting operation',
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
     * @description Optional configuration for DAO-governed NFT minting operations.
     * When provided, the minting process must comply with DAO governance rules.
     * Includes topic ID for consensus tracking and timestamp for operation timing.
     * @optional
     */
    @ApiProperty({
        description: 'Optional DAO configuration for the NFT minting',
        required: false,
        type: () => Object,
        example: {
            topicId: '0.0.12345',
            consensusTimestamp: '1234567890.123456789'
        }
    })
    @IsOptional()
    dao?: Hashgraph.Ledger.DAO.Config;

    constructor(token_id: string, cid: string, sender?: { key?: PublicKey | KeyList; id?: AccountId }) {
        this.token_id = token_id;
        this.cid = cid;
        this.sender = sender;

        if (!this.token_id || typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id: Must be a non-empty string');
        }

        if (!this.cid || typeof this.cid !== 'string') {
            throw new Error('Invalid cid: Must be a non-empty string');
        }
    }
}