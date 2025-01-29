import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { IsString, IsBoolean, IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

/**
 * @file details.model.ts
 * @class _Details
 * @description Represents the detailed configuration and state of a Hashgraph Consensus Service (HCS) topic.
 * This class encapsulates all the properties that define a topic's behavior, including its keys,
 * auto-renewal settings, and metadata.
 * @implements {IHashgraph.IRestful.IHCS.ITopic.IDetails}
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Create a new topic details instance
 * const topicDetails = new _Details({
 *   admin_key: {
 *     _type: "ProtobufEncoded",
 *     key: "421050820e1485acdd59726088e0e4a2130ebbbb70009f640ad95c78dd5a7b38"
 *   },
 *   auto_renew_account: "0.0.2",
 *   auto_renew_period: 7776000,
 *   created_timestamp: "1586567700.453054000",
 *   deleted: false,
 *   memo: "My HCS Topic",
 *   topic_id: "0.0.2"
 * });
 */
export class _Details implements IHashgraph.IRestful.IHCS.ITopic.IDetails {
    /**
     * The admin key for the topic
     * @type {{_type: string, key: string}}
     * @description The key that can be used to update or delete the topic
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The admin key for the topic',
        required: true,
        example: {
            _type: "ProtobufEncoded",
            key: "421050820e1485acdd59726088e0e4a2130ebbbb70009f640ad95c78dd5a7b38"
        }
    })
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    admin_key: {
        _type: string;
        key: string;
    };

    /**
     * The auto-renew account ID
     * @type {string}
     * @description The account ID that will be charged to automatically extend the topic's lifetime
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The account ID that will be charged to extend the topic\'s lifetime',
        required: true,
        example: "0.0.2"
    })
    @IsString()
    auto_renew_account: string;

    /**
     * The auto-renew period
     * @type {number}
     * @description The duration in seconds for which the topic should be renewed
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The auto renew period for the topic in seconds',
        required: true,
        example: "7776000"
    })
    auto_renew_period: number;

    /**
     * The creation timestamp
     * @type {string}
     * @description The timestamp when the topic was created on the network
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The timestamp when the topic was created',
        required: true,
        example: "1586567700.453054000"
    })
    @IsString()
    created_timestamp: string;

    /**
     * The deletion status
     * @type {boolean}
     * @description Indicates whether the topic has been deleted from the network
     * @memberof _Details
     */
    @ApiProperty({
        description: 'Whether the topic has been deleted',
        required: true,
        example: false
    })
    @IsBoolean()
    deleted: boolean;

    /**
     * The topic memo
     * @type {string}
     * @description A memo or description associated with the topic
     * @memberof _Details
     */
    @ApiProperty({
        description: 'A memo associated with the topic',
        required: true,
        example: "topic memo"
    })
    @IsString()
    memo: string;

    /**
     * The submit key
     * @type {{_type: string, key: string}}
     * @description The key required to submit messages to this topic
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The submit key for the topic',
        required: true,
        example: {
            _type: "ProtobufEncoded",
            key: "421050820e1485acdd59726088e0e4a2130ebbbb70009f640ad95c78dd5a7b38"
        }
    })
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    submit_key: {
        _type: string;
        key: string;
    };

    /**
     * The timestamp range
     * @type {{from: string, to: string}}
     * @description The time range during which the topic was active
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The timestamp range for the topic',
        required: true,
        example: {
            from: "1586567700.453054000",
            to: "1586567700.453054000"
        }
    })
    @IsObject()
    @ValidateNested()
    @Type(() => Object)
    timestamp: {
        from: string;
        to: string;
    };

    /**
     * The topic identifier
     * @type {string}
     * @description The unique identifier for this topic on the network
     * @memberof _Details
     */
    @ApiProperty({
        description: 'The unique identifier of the topic',
        required: true,
        example: "0.0.2"
    })
    @IsString()
    topic_id: string;

    /**
     * Creates an instance of _Details
     * @constructor
     * @param {IHashgraph.IRestful.IHCS.ITopic.IDetails} data - Initial data to create the topic details
     * @memberof _Details
     */
    constructor(data: IHashgraph.IRestful.IHCS.ITopic.IDetails) {
        this.admin_key = data.admin_key;
        this.auto_renew_account = data.auto_renew_account;
        this.auto_renew_period = data.auto_renew_period;
        this.created_timestamp = data.created_timestamp;
        this.deleted = data.deleted;
        this.memo = data.memo;
        this.submit_key = data.submit_key;
        this.timestamp = data.timestamp;
        this.topic_id = data.topic_id;
    }
}