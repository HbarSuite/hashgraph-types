import { _Entity } from './models/hashgraph.restful.hcs.message.models.entity.model'
import { _Response } from './models/hashgraph.restful.hcs.message.models.response.model'
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file message.namespace.ts
 * @namespace _Message
 * @description Namespace containing interfaces and classes for Hashgraph Consensus Service (HCS) messages.
 * This namespace provides the core types and functionality for working with HCS messages,
 * including message entities and response handling.
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Import and use the Message namespace
 * import { _Message } from './hashgraph.restful.hcs.message.namespace';
 * 
 * // Create a new message entity
 * const message = new _Message.Entity({
 *   consensus_timestamp: "1234567890.000000000",
 *   message: "Hello Hashgraph",
 *   running_hash: "0x1234abcd...",
 *   running_hash_version: 2,
 *   sequence_number: 1,
 *   topic_id: "0.0.1234",
 *   chunk_info: {
 *     number: 1,
 *     total: 3,
 *     initial_transaction_id: "0.0.1234@1234567890.000000000"
 *   }
 * });
 * 
 * // Create a response with multiple messages
 * const response = new _Message.Response({
 *   messages: [message],
 *   links: {
 *     next: "https://api.example.com/api/v1/topics/0.0.1234/messages?timestamp=gt:1234567890.000000000"
 *   }
 * });
 */
export namespace _Message {
    /**
     * Message Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents a single message entity in the Hashgraph Consensus Service.
     * Contains all message properties including content, timestamps, sequence information,
     * and chunking details for large messages.
     * @category Hashgraph
     * @subcategory HCS
     * @since 2.0.0
     * 
     * @example
     * const message = new Entity({
     *   consensus_timestamp: "1234567890.000000000",
     *   message: "Hello Hashgraph",
     *   topic_id: "0.0.1234",
     *   sequence_number: 1,
     *   running_hash: "0x1234abcd...",
     *   running_hash_version: 2
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hcs.Message.Entity' })
    export class Entity extends _Entity {}

    /**
     * Message Response Class
     * @class Response
     * @extends {_Response}
     * @description Represents a response containing one or more messages from an HCS topic.
     * Includes pagination support through links for handling large message collections.
     * @category Hashgraph
     * @subcategory HCS
     * @since 2.0.0
     * 
     * @example
     * const response = new Response({
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
    @ApiSchema({ name: 'Hashgraph.Restful.Hcs.Message.Response' })
    export class Response extends _Response {}
}
