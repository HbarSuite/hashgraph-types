/**
 * @file hashgraph.restful.hcs.namespace.ts
 * @namespace IHashgraph.IRestful._IHCS
 * @description Defines the namespace for Hedera Consensus Service (HCS) operations in the REST API
 */

import { _IMessage } from './namespaces/message/hashgraph.restful.hcs.message.namespace'
import { _ITopic } from './namespaces/topic/hashgraph.restful.hcs.topic.namespace'

/**
 * Namespace for Hedera Consensus Service operations
 * @namespace _IHCS
 * @description Provides type definitions and interfaces for working with the Hedera
 * Consensus Service (HCS) through the REST API. HCS enables decentralized messaging
 * and consensus through topics and messages.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Submit a message to a topic
 * const message: _IHCS.IMessage.IEntity = {
 *   consensus_timestamp: "2023-01-01T12:00:00.000000000Z",
 *   message: "Hello Hedera",
 *   topic_id: "0.0.1234"
 * };
 * 
 * // Check topic status
 * const topicStatus: _IHCS.ITopic.IStatus = {
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42,
 *     running: true
 *   }
 * };
 * ```
 */
export namespace _IHCS {
    /**
     * Type definitions for HCS messages
     * @type {_IMessage}
     * @description Provides interfaces for working with consensus messages,
     * including message submission, retrieval, and status tracking.
     * Messages are the core data units processed by the consensus service.
     * @memberof _IHCS
     * @see {@link _IMessage} for detailed type definitions
     */
    export import IMessage = _IMessage

    /**
     * Type definitions for HCS topics
     * @type {_ITopic}
     * @description Provides interfaces for managing consensus topics,
     * including topic creation, updates, and status monitoring.
     * Topics are the channels through which consensus messages flow.
     * @memberof _IHCS
     * @see {@link _ITopic} for detailed type definitions
     */
    export import ITopic = _ITopic
}