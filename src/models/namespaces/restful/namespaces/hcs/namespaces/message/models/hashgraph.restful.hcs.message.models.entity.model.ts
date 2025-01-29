import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsString, IsNumber, IsOptional, ValidateNested, IsBoolean } from "class-validator";
import { Type } from "class-transformer";
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'

/**
 * @file entity.model.ts
 * @class _Entity
 * @description Represents a message entity in the Hashgraph Consensus Service (HCS).
 * This class encapsulates all properties of an HCS message, including its content,
 * consensus timestamp, sequence information, and associated metadata.
 * @implements {IHashgraph.IRestful.IHCS.IMessage.IEntity}
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Create a new HCS message entity
 * const message = new _Entity({
 *   consensus_timestamp: "1234567890.000000000",
 *   message: "Hello Hashgraph",
 *   running_hash: "0x1234...",
 *   running_hash_version: 2,
 *   sequence_number: 1,
 *   topic_id: "0.0.1234",
 *   chunk_info: {
 *     number: 1,
 *     total: 3,
 *     initial_transaction_id: "0.0.1234@1234567890.000000000"
 *   }
 * });
 */
export class _Entity implements IHashgraph.IRestful.IHCS.IMessage.IEntity {
    /**
     * Information about message chunking
     * @type {IHashgraph.ICommons.IChunkInfo | undefined}
     * @description Contains details about message chunking when a message is split across multiple transactions.
     * Includes information about chunk number, total chunks, and the initial transaction ID.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({
        required: false,
        type: () => Hashgraph.Commons.ChunkInfo,
        description: "Information about message chunking for split messages",
        example: {
            number: 1,
            total: 3,
            initial_transaction_id: "0.0.1234@1234567890.000000000"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => Hashgraph.Commons.ChunkInfo)
    chunk_info?: IHashgraph.ICommons.IChunkInfo;

    /**
     * The consensus timestamp of the message
     * @type {string}
     * @description The timestamp when consensus was reached for this message on the network.
     * Format is in seconds.nanoseconds since epoch.
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The consensus timestamp of the message",
        example: "1234567890.000000000"
    })
    @IsString()
    consensus_timestamp: string;

    /**
     * The message content
     * @type {string}
     * @description The actual content/payload of the message. Can be any string data
     * that needs to be consensus timestamped on the network.
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The content of the message",
        example: "Hello Hashgraph"
    })
    @IsString()
    message: string;

    /**
     * The account ID of the payer
     * @type {string | null | undefined}
     * @description The Hedera account ID that paid for this message transaction.
     * May be null or undefined if the payer information is not available.
     * @optional
     * @memberof _Entity
     */
    @ApiProperty({
        required: false,
        description: "The account ID of the transaction payer",
        example: "0.0.1234"
    })
    @IsOptional()
    @IsString()
    payer_account_id?: string | null;

    /**
     * The running hash
     * @type {string}
     * @description The running hash of all messages in the topic up to this message.
     * Used to verify message sequence integrity.
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The running hash of the topic's messages",
        example: "0x1234abcd..."
    })
    @IsString()
    running_hash: string;

    /**
     * The version of the running hash
     * @type {number}
     * @description The version number of the running hash algorithm used.
     * Allows for future updates to the hashing algorithm.
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The version of the running hash algorithm",
        example: 2
    })
    @IsNumber()
    running_hash_version: number;

    /**
     * The sequence number
     * @type {number}
     * @description The sequence number of this message within its topic.
     * Starts at 1 and increments with each message.
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The sequence number of the message",
        example: 1
    })
    @IsNumber()
    sequence_number: number;

    /**
     * The topic ID
     * @type {string}
     * @description The Hedera topic ID that this message belongs to.
     * Format is shard.realm.number (e.g., "0.0.1234")
     * @memberof _Entity
     */
    @ApiProperty({
        required: true,
        description: "The ID of the topic this message belongs to",
        example: "0.0.1234"
    })
    @IsString()
    topic_id: string;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {IHashgraph.IRestful.IHCS.IMessage.IEntity} data - Initial data to create the message entity
     * @throws {Error} If required fields are missing or invalid
     * @memberof _Entity
     */
    constructor(data: IHashgraph.IRestful.IHCS.IMessage.IEntity) {
        if (!data.consensus_timestamp || !data.message || !data.topic_id) {
            throw new Error('Required fields missing for message entity');
        }
        
        this.consensus_timestamp = data.consensus_timestamp;
        this.message = data.message;
        this.topic_id = data.topic_id;
        
        if (data.chunk_info) {
            this.chunk_info = data.chunk_info;
        }
        if (data.payer_account_id !== undefined) {
            this.payer_account_id = data.payer_account_id;
        }
        if (data.running_hash) {
            this.running_hash = data.running_hash;
        }
        if (typeof data.running_hash_version === 'number') {
            this.running_hash_version = data.running_hash_version;
        }
        if (typeof data.sequence_number === 'number') {
            this.sequence_number = data.sequence_number;
        }
    }
}