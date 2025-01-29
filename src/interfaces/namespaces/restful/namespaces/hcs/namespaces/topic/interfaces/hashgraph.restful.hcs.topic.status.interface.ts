import { _IStatusInner } from './hashgraph.restful.hcs.topic.status-inner.interface';

/**
 * @file hashgraph.restful.hcs.topic.status.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._ITopic
 * @description Defines the interface for HCS topic status in the Hedera REST API
 */

/**
 * Interface for HCS topic status
 * @interface _IStatus
 * @description Represents the status wrapper for a consensus topic in the Hedera
 * Consensus Service (HCS). This interface provides a standardized structure for
 * monitoring topic state and message sequence information.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const topicStatus: _IStatus = {
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42,
 *     runningHash: "0x1234abcd...",
 *     runningHashVersion: 2
 *   }
 * };
 * ```
 */
export interface _IStatus {
    /**
     * Inner status object containing detailed topic information
     * @type {_IStatusInner}
     * @description Contains the core status information for the topic, including
     * sequence numbers, running hash, and other tracking data used to ensure
     * message integrity and ordering.
     * @required
     * @see {@link _IStatusInner} for detailed property definitions
     */
    _status?: _IStatusInner;
}
