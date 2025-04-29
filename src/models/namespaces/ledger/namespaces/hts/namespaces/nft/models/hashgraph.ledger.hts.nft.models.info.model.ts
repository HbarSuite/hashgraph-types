import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

/**
 * NFT Information Retrieval Model
 * @class _Info
 * @implements {IHashgraph.ILedger.IHTS.INft.IInfo}
 * @description Defines the structure for querying and retrieving detailed information
 * about a specific Non-Fungible Token (NFT) from the Hedera Token Service (HTS).
 * This model enables fetching metadata, ownership, and other properties of an NFT
 * by its token ID and serial number.
 */
export class _Info implements IHashgraph.ILedger.IHTS.INft.IInfo {
    /**
     * The unique identifier of the NFT collection
     * @property {string} token_id
     * @description Represents the Hedera token ID in the format '0.0.x'
     * where x is the unique token number. This identifies the NFT collection
     * that contains the specific token being queried.
     * @example "0.0.12345"
     */
    @ApiProperty({
        description: 'The unique identifier of the NFT token',
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
     * Used in combination with token_id to uniquely identify a specific NFT
     * for information retrieval.
     * @example 1
     */
    @ApiProperty({
        description: 'The unique serial number of the specific NFT',
        example: 1,
    })
    @IsNumber()
    @IsNotEmpty()
    serial_number: number;

    /**
     * Creates an instance of _Info
     * @constructor
     * @param {Partial<IHashgraph.ILedger.IHTS.INft.IInfo>} data - Initial data to create the info
     * @throws {Error} If any of the provided data is invalid
     * @remarks All provided data is validated during instantiation
     */
    constructor(data: Partial<IHashgraph.ILedger.IHTS.INft.IInfo>) {
        Object.assign(this, data);

        if (!this.token_id || typeof this.token_id !== 'string') {
            throw new Error('Invalid token_id: Must be a non-empty string');
        }

        if (!Number.isInteger(this.serial_number) || this.serial_number <= 0) {
            throw new Error('Invalid serial_number: Must be a positive integer');
        }
    }
}