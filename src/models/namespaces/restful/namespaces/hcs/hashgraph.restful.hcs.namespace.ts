import { _Message } from './namespaces/message/hashgraph.restful.hcs.message.namespace'
import { _Topic } from './namespaces/topic/hashgraph.restful.hcs.topic.namespace'

/**
 * @file hcs.namespace.ts
 * @module Hashgraph.Restful.HCS
 * @description This file defines the HCS (Hashgraph Consensus Service) Namespace, which encapsulates 
 * the core components and functionalities of the Hashgraph Consensus Service within the Hashgraph network.
 * The namespace provides a structured way to work with HCS messages and topics.
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Import and use the HCS namespace
 * import { _HCS } from './hashgraph.restful.hcs.namespace';
 * 
 * // Create a new message entity
 * const message = new _HCS.Message.Entity({
 *   consensus_timestamp: "1234567890.000000000",
 *   message: "Hello Hashgraph",
 *   topic_id: "0.0.1234"
 * });
 * 
 * // Create a new topic status
 * const topicStatus = new _HCS.Topic.Status({
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42
 *   }
 * });
 */

/**
 * Namespace containing interfaces and types for Hashgraph Consensus Service (HCS)
 * 
 * @namespace _HCS
 * @description This namespace provides a structured way to interact with and manage 
 * Hashgraph Consensus Service components, including messages and topics. It serves as a 
 * central point for organizing HCS-related functionalities within the application.
 * The namespace includes two main components:
 * - Message: For handling HCS message operations and data structures
 * - Topic: For managing HCS topics and their associated operations
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * @see {@link _Message} For message-related functionality
 * @see {@link _Topic} For topic-related functionality
 */
export namespace _HCS {
    /**
     * Message namespace containing classes and types for HCS message handling
     * 
     * @type {_Message}
     * @description Encapsulates the structure and properties of messages in the Hashgraph Consensus Service.
     * Provides classes and types for:
     * - Creating and managing message entities
     * - Handling message responses
     * - Processing message metadata like consensus timestamps and sequence numbers
     * - Managing chunked messages
     * @memberof _HCS
     * @see {@link _Message}
     * @since 2.0.0
     * @example
     * // Create a new message entity
     * const message = new Message.Entity({
     *   consensus_timestamp: "1234567890.000000000",
     *   message: "Hello Hashgraph",
     *   topic_id: "0.0.1234",
     *   sequence_number: 1
     * });
     */
    export import Message = _Message

    /**
     * Topic namespace containing classes and types for HCS topic management
     * 
     * @type {_Topic}
     * @description Defines the structure and functionality for working with topics in the Hashgraph Consensus Service.
     * Provides classes and types for:
     * - Topic creation and configuration
     * - Topic status monitoring and updates
     * - Topic metadata management
     * - Topic-specific operations and queries
     * @memberof _HCS
     * @see {@link _Topic}
     * @since 2.0.0
     * @example
     * // Create a new topic status
     * const status = new Topic.Status({
     *   _status: {
     *     topicId: "0.0.1234",
     *     sequenceNumber: 42,
     *     runningHash: "0x1234abcd...",
     *     runningHashVersion: 2
     *   }
     * });
     */
    export import Topic = _Topic
}