/**
 * @file hashgraph.restful.hcs.topic.status-inner.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._ITopic
 * @description Defines the interface for detailed HCS topic status in the Hedera REST API
 */

/**
 * Interface for detailed HCS topic status
 * @interface _IStatusInner
 * @description Represents the core status information for a consensus topic in the
 * Hedera Consensus Service (HCS). This interface provides detailed tracking data
 * used to ensure message integrity and proper sequencing.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const topicStatusInner: _IStatusInner = {
 *   topicId: "0.0.1234",
 *   sequenceNumber: 42,
 *   runningHash: "0x1234abcd...",
 *   runningHashVersion: 2
 * };
 * ```
 */
export interface _IStatusInner {
    /**
     * Topic identifier
     * @type {string}
     * @description The unique identifier of the consensus topic in the format "0.0.x"
     * where x is the topic number.
     * @required
     * @example "0.0.1234"
     */
    topicId: string;

    /**
     * Message sequence number
     * @type {number}
     * @description The sequence number of the last consensus message submitted to
     * this topic. Used for tracking message order and ensuring no messages are missed.
     * @required
     * @example 42
     */
    sequenceNumber: number;

    /**
     * Running hash of messages
     * @type {string}
     * @description A cumulative hash of all messages submitted to this topic,
     * used to verify message integrity and detect any tampering or missing messages.
     * @required
     * @example "0x1234abcd..."
     */
    runningHash: string;

    /**
     * Running hash version
     * @type {number}
     * @description The version of the running hash algorithm being used.
     * Different versions may use different hashing algorithms or methods
     * for computing the running hash.
     * @required
     * @example 2
     */
    runningHashVersion: number;
}