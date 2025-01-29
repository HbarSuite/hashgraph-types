/**
 * @file hashgraph.restful.hcs.message.response.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._IMessage
 * @description Defines the response structure for consensus message queries in the Hedera REST API
 */

import { _IRestful } from '../../../../../hashgraph.restful.namespace'
import type { _IMessage } from '../hashgraph.restful.hcs.message.namespace'

/**
 * Interface representing a consensus message query response
 * @interface _IResponse
 * @description Defines the structure for responses when retrieving messages from
 * a consensus topic. Supports paginated access to topic messages with navigation
 * controls for handling large message sets.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const response: _IResponse = {
 *   messages: [{
 *     consensus_timestamp: "2023-01-01T12:00:00.000000000Z",
 *     message: "Hello Hedera",
 *     running_hash: "0x123abc...",
 *     running_hash_version: 2,
 *     sequence_number: 42,
 *     topic_id: "0.0.1234"
 *   }],
 *   links: {
 *     next: "/api/v1/topics/0.0.1234/messages?timestamp=gt:2023-01-01T12:00:00.000000000Z",
 *     previous: "/api/v1/topics/0.0.1234/messages?timestamp=lt:2023-01-01T12:00:00.000000000Z"
 *   }
 * };
 * ```
 */
export interface _IResponse {
    /**
     * Retrieved messages
     * @property {Array<_IMessage.IEntity>} messages
     * @description Array of consensus messages retrieved from the topic.
     * Each message includes its content, timestamps, and verification data.
     * @type {Array<_IMessage.IEntity>}
     * @memberof _IResponse
     * @optional
     */
    messages?: Array<_IMessage.IEntity>

    /**
     * Navigation links
     * @property {_IRestful.ILinks} links
     * @description Pagination controls for navigating through the message set.
     * Includes links to next/previous pages based on timestamp ordering.
     * @type {_IRestful.ILinks}
     * @memberof _IResponse
     * @optional
     */
    links?: _IRestful.ILinks
}