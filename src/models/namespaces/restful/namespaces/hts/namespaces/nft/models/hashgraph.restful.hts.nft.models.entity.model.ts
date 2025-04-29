import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.hts.nft.models.entity.model.ts
 * @class _Entity
 * @description Represents a Non-Fungible Token (NFT) entity in the Hashgraph Token Service (HTS).
 * This class encapsulates various properties of an NFT, including ownership details, metadata,
 * and associated timestamps. It provides a comprehensive model for managing and tracking
 * individual NFTs within the Hedera network.
 * @implements {IHashgraph.IRestful.IHTS.INft.IEntity}
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new NFT entity
 * const nft = new _Entity({
 *   token_id: "0.0.1234567",
 *   serial_number: 1,
 *   metadata: "ipfs://QmXxx...",
 *   account_id: "0.0.789012"
 * });
 */
export class _Entity implements IHashgraph.IRestful.IHTS.INft.IEntity {
    /**
     * The account ID that owns the NFT
     * @type {string | null}
     * @description The Hashgraph account ID that currently owns this NFT. This field
     * is updated when ownership of the NFT changes through transfers or other operations.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The account ID that currently owns this NFT', 
        required: false, 
        nullable: true,
        example: "0.0.123456"
    })
    @IsOptional()
    @IsString()
    account_id: string;

    /**
     * The timestamp when the NFT was created
     * @type {string | null}
     * @description ISO 8601 formatted timestamp indicating when this NFT was minted.
     * This value is immutable once set during the minting process.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The ISO 8601 timestamp when this NFT was minted', 
        required: false, 
        nullable: true,
        example: "2023-01-01T00:00:00.000Z"
    })
    @IsOptional()
    @IsString()
    created_timestamp: string;

    /**
     * The delegating spender account ID
     * @type {string | null}
     * @description Account ID that has been delegated spending authority over this NFT.
     * This is typically used for marketplace approvals or other authorized operations.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The account ID that has delegated spending authority over this NFT', 
        required: false, 
        nullable: true,
        example: "0.0.789012"
    })
    @IsOptional()
    @IsString()
    delegating_spender: string;

    /**
     * Whether the NFT has been deleted
     * @type {boolean}
     * @description Indicates if this NFT has been burned/deleted. Once true,
     * this NFT can no longer be transferred or modified.
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'Indicates if this NFT has been burned/deleted', 
        required: true,
        example: false
    })
    @IsBoolean()
    deleted: boolean;

    /**
     * The NFT metadata
     * @type {string}
     * @description Metadata string associated with the NFT, typically an IPFS hash
     * or URI pointing to the NFT's content or attributes. This field is immutable
     * after minting.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The metadata string associated with the NFT (typically an IPFS hash or URI)', 
        required: false,
        example: "ipfs://QmXXX..."
    })
    @IsOptional()
    @IsString()
    metadata: string;

    /**
     * The timestamp when the NFT was last modified
     * @type {string}
     * @description ISO 8601 formatted timestamp of the last modification to this NFT's
     * state (e.g., transfers, approvals, or other state changes).
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The ISO 8601 timestamp of the last modification to this NFT', 
        required: false,
        example: "2023-01-01T12:00:00.000Z"
    })
    @IsOptional()
    @IsString()
    modified_timestamp: string;

    /**
     * The NFT serial number
     * @type {number}
     * @description Unique serial number of this NFT within its token class. This number
     * is assigned during minting and remains constant throughout the NFT's lifecycle.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The unique serial number of this NFT within its token class', 
        required: false,
        example: 1
    })
    @IsOptional()
    @IsNumber()
    serial_number: number;

    /**
     * The spender account ID
     * @type {string}
     * @description Account ID that has direct spending authority over this NFT.
     * This is typically set through approval operations for marketplace listings
     * or other authorized transfers.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The account ID that has spending authority over this NFT', 
        required: false,
        example: "0.0.345678"
    })
    @IsOptional()
    @IsString()
    spender: string;

    /**
     * The token ID this NFT belongs to
     * @type {string}
     * @description Hashgraph token ID that this NFT is part of. This identifies
     * the collection or contract that the NFT belongs to.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({ 
        description: 'The Hashgraph token ID that this NFT belongs to', 
        required: false,
        example: "0.0.987654"
    })
    @IsOptional()
    @IsString()
    token_id: string;

    /**
     * Creates an instance of _Entity.
     * @constructor
     * @param {Partial<_Entity>} data - Initial data to create the NFT entity
     * @description Initializes a new NFT entity with the provided data. All properties
     * are optional during initialization and will be set based on the provided data object.
     * @memberof _Entity
     */
    constructor(entity: IHashgraph.IRestful.IHTS.INft.IEntity) {
        if(!entity.token_id) {
            throw new Error('Token ID is required');
        }
        this.token_id = entity.token_id;

        if(!entity.account_id) { 
            throw new Error('Account ID is required');
        }
        this.account_id = entity.account_id;

        if(!entity.created_timestamp) {
            throw new Error('Created timestamp is required');
        }
        this.created_timestamp = entity.created_timestamp;
        
        if(!entity.metadata) {
            throw new Error('Metadata is required');
        }
        this.metadata = entity.metadata;

        if(!entity.modified_timestamp) {
            throw new Error('Modified timestamp is required');
        }
        this.modified_timestamp = entity.modified_timestamp;

        if(!entity.serial_number) {
            throw new Error('Serial number is required');
        }
        this.serial_number = entity.serial_number;

        this.delegating_spender = entity.delegating_spender;
        this.spender = entity.spender;
        this.deleted = entity.deleted;
    }
}