/**
 * @file hashgraph.restful.hcs.topic.namespace.ts
 * @namespace IHashgraph.IRestful._IHCS._ITopic
 * @description Defines the namespace for HCS topic operations in the Hedera REST API
 */

import { _IStatusInner } from './interfaces/hashgraph.restful.hcs.topic.status-inner.interface';
import { _IStatus } from './interfaces/hashgraph.restful.hcs.topic.status.interface';
import { _IDetails } from './interfaces/hashgraph.restful.hcs.topic.details.interface'
import { _IMessageQuery } from './interfaces/hashgraph.restful.hcs.topic.message-query.interface';

/**
 * Namespace for HCS topic operations
 * @namespace _ITopic
 * @description Provides type definitions and interfaces for managing consensus topics
 * in the Hedera Consensus Service (HCS). Topics are the channels through which
 * consensus messages flow, with support for configuration, monitoring, and querying.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * // Monitor topic status
 * const status: _ITopic.IStatus = {
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42,
 *     runningHash: "0x1234abcd...",
 *     runningHashVersion: 2
 *   }
 * };
 * 
 * // Query topic messages
 * const query: _ITopic.IMessageQuery = {
 *   topicId: "0.0.1234",
 *   limit: 100,
 *   order: "desc",
 *   timestamp: ["2023-01-01T00:00:00Z", "2023-12-31T23:59:59Z"]
 * };
 * ```
 */
export namespace _ITopic {
    /**
     * Type definition for topic status
     * @type {_IStatus}
     * @description Represents the status wrapper for a consensus topic,
     * providing a standardized structure for monitoring topic state
     * and message sequence information.
     * @memberof _ITopic
     * @see {@link _IStatus} for detailed property definitions
     */
    export type IStatus = _IStatus

    /**
     * Type definition for detailed topic status
     * @type {_IStatusInner}
     * @description Represents the core status information for a consensus topic,
     * including message sequence tracking and verification data used to
     * ensure message integrity.
     * @memberof _ITopic
     * @see {@link _IStatusInner} for detailed property definitions
     */
    export type IStatusInner = _IStatusInner

    /**
     * Type definition for topic details
     * @type {_IDetails}
     * @description Represents the configuration and metadata of a consensus topic,
     * including keys, renewal settings, and administrative information.
     * @memberof _ITopic
     * @see {@link _IDetails} for detailed property definitions
     */
    export type IDetails = _IDetails

    /**
     * Type definition for message queries
     * @type {_IMessageQuery}
     * @description Represents the parameters for querying messages in a consensus topic,
     * supporting filtering, pagination, and ordering options.
     * @memberof _ITopic
     * @see {@link _IMessageQuery} for detailed property definitions
     */
    export type IMessageQuery = _IMessageQuery
}