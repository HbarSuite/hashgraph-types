/**
 * @file hashgraph.restful.hcs.message.namespace.ts
 * @namespace IHashgraph.IRestful._IHCS._IMessage
 * @description Defines the namespace for HCS message operations in the Hedera REST API
 */

import { _IEntity } from './interfaces/hashgraph.restful.hcs.message.entity.interface'
import { _IResponse } from './interfaces/hashgraph.restful.hcs.message.response.interface'

/**
 * Namespace for HCS message operations
 * @namespace _IMessage
 * @description Provides type definitions and interfaces for working with messages
 * in the Hedera Consensus Service (HCS). Messages are the core data units that
 * flow through consensus topics, carrying application-specific content.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Define a consensus message
 * const message: _IMessage.IEntity = {
 *   consensus_timestamp: "2023-01-01T12:00:00.000000000Z",
 *   message: "Hello Hedera",
 *   running_hash: "0x123abc...",
 *   running_hash_version: 2,
 *   sequence_number: 42,
 *   topic_id: "0.0.1234"
 * };
 * 
 * // Handle message response
 * const response: _IMessage.IResponse = {
 *   messages: [message],
 *   links: {
 *     next: "/api/v1/topics/0.0.1234/messages?timestamp=gt:2023-01-01T12:00:00.000000000Z"
 *   }
 * };
 * ```
 */
export namespace _IMessage {
    /**
     * Type definition for consensus messages
     * @type {_IEntity}
     * @description Represents the structure of a message in a consensus topic,
     * including its content, timestamps, sequence information, and verification data.
     * Messages are ordered and verified through consensus.
     * @memberof _IMessage
     * @see {@link _IEntity} for detailed property definitions
     */
    export type IEntity = _IEntity

    /**
     * Type definition for message responses
     * @type {_IResponse}
     * @description Represents the response structure when retrieving messages
     * from a consensus topic, including the message list and pagination controls.
     * Supports efficient navigation through large message sets.
     * @memberof _IMessage
     * @see {@link _IResponse} for detailed property definitions
     */
    export type IResponse = _IResponse
}