import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _Links } from '../../../../../models/hashgraph.restful.models.links.model';
import { _Entity } from './hashgraph.restful.hcs.message.models.entity.model';

/**
 * @file response.model.ts
 * @class _Response
 * @description Represents a response containing messages from a Hashgraph Consensus Service (HCS) topic.
 * This class encapsulates a collection of messages along with pagination links for navigating
 * through large sets of messages.
 * @implements {IHashgraph.IRestful.IHCS.IMessage.IResponse}
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Create a new HCS message response
 * const response = new _Response({
 *   messages: [{
 *     consensus_timestamp: "1234567890.000000000",
 *     message: "Hello Hashgraph",
 *     topic_id: "0.0.1234",
 *     sequence_number: 1,
 *     running_hash: "0x1234abcd...",
 *     running_hash_version: 2
 *   }],
 *   links: {
 *     next: "https://api.example.com/api/v1/topics/0.0.1234/messages?timestamp=gt:1234567890.000000000"
 *   }
 * });
 */
export class _Response implements IHashgraph.IRestful.IHCS.IMessage.IResponse {
    /**
     * Array of HCS messages
     * @type {_Entity[] | undefined}
     * @description Collection of messages retrieved from the Hashgraph Consensus Service topic.
     * Each message contains its content, timestamp, and other metadata.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        required: false,
        type: () => _Entity,
        isArray: true,
        description: "Collection of messages from the HCS topic",
        example: [{
            consensus_timestamp: "1234567890.000000000",
            message: "Hello Hashgraph",
            topic_id: "0.0.1234",
            sequence_number: 1,
            running_hash: "0x1234abcd...",
            running_hash_version: 2
        }]
    })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Entity)
    messages?: _Entity[];

    /**
     * Pagination links
     * @type {_Links | undefined}
     * @description Links for navigating through paginated results.
     * Contains the 'next' link for retrieving the next set of messages.
     * @optional
     * @memberof _Response
     */
    @ApiProperty({
        required: false,
        type: () => _Links,
        description: "Pagination links for navigating through message results",
        example: {
            next: "https://api.example.com/api/v1/topics/0.0.1234/messages?timestamp=gt:1234567890.000000000"
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _Links)
    links?: _Links;

    /**
     * Creates an instance of _Response
     * @constructor
     * @param {IHashgraph.IRestful.IHCS.IMessage.IResponse} data - Initial data to create the response
     * @memberof _Response
     * 
     * @example
     * const response = new _Response({
     *   messages: [messageEntity],
     *   links: { next: "https://api.example.com/next-page" }
     * });
     */
    constructor(data: IHashgraph.IRestful.IHCS.IMessage.IResponse) {
        // Initialize messages if provided
        if (data.messages) {
            this.messages = data.messages.map(message => new _Entity(message));
        }
        
        // Initialize links if provided
        if (data.links) {
            this.links = new _Links(data.links.next);
        }
    }
}