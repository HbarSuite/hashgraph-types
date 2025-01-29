/**
 * @file hashgraph.restful.hcs.topic.message-query.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._ITopic
 * @description Defines the interface for querying HCS topic messages in the Hedera REST API
 */

/**
 * Interface for querying HCS topic messages
 * @interface _IMessageQuery
 * @description Represents the query parameters used to retrieve messages from a consensus
 * topic in the Hedera Consensus Service (HCS). This interface provides options for
 * filtering, sorting, and paginating topic messages.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const messageQuery: _IMessageQuery = {
 *   topicId: "0.0.1234",
 *   encoding: "utf-8",
 *   limit: 100,
 *   order: "desc",
 *   sequenceNumber: 42,
 *   timestamp: ["2023-01-01T00:00:00Z", "2023-12-31T23:59:59Z"]
 * };
 * ```
 */
export interface _IMessageQuery {
    /**
     * Topic identifier
     * @type {string}
     * @description The unique identifier of the consensus topic in the format "0.0.x"
     * where x is the topic number. Used to specify which topic's messages to query.
     * @required
     * @example "0.0.1234"
     */
    topicId: string;

    /**
     * Message content encoding
     * @type {string}
     * @description Specifies the encoding format of the message content (e.g., "utf-8",
     * "base64"). Used to properly decode the retrieved messages.
     * @optional
     * @example "utf-8"
     */
    encoding?: string;

    /**
     * Results limit
     * @type {number}
     * @description Maximum number of messages to return in the query results. Used for
     * pagination and controlling response size.
     * @optional
     * @example 100
     */
    limit?: number;

    /**
     * Sort order
     * @type {'asc' | 'desc'}
     * @description Determines the chronological order of returned messages:
     * - 'asc': Oldest messages first
     * - 'desc': Newest messages first
     * @optional
     * @example "desc"
     */
    order?: 'asc' | 'desc';

    /**
     * Starting sequence number
     * @type {number}
     * @description The sequence number from which to start retrieving messages.
     * Used for pagination and specific message range queries.
     * @optional
     * @example 42
     */
    sequenceNumber?: number;

    /**
     * Time range filter
     * @type {string[]}
     * @description Array of two ISO-8601 timestamps defining the time range for
     * message filtering:
     * - Index 0: Start time (inclusive)
     * - Index 1: End time (inclusive)
     * @optional
     * @example ["2023-01-01T00:00:00Z", "2023-12-31T23:59:59Z"]
     */
    timestamp?: string[];
}