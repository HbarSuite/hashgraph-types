import { IHashgraph } from '../../../../../../../hashgraph.namespace'

/**
 * @file hashgraph.restful.hcs.message.entity.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._IMessage
 * @description Defines the structure for consensus messages in the Hedera REST API
 */

/**
 * Interface representing a consensus message
 * @interface _IEntity
 * @description Defines the structure of a message in the Hedera Consensus Service (HCS).
 * Messages are ordered and verified through consensus, containing both the application
 * payload and metadata for verification and sequencing.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const message: _IEntity = {
 *   consensus_timestamp: "2023-01-01T12:00:00.000000000Z",
 *   message: "Hello Hedera",
 *   running_hash: "0x123abc...",
 *   running_hash_version: 2,
 *   sequence_number: 42,
 *   topic_id: "0.0.1234",
 *   chunk_info: {
 *     number: 1,
 *     total: 3,
 *     initial_transaction_id: {
 *       node_id: "0.0.3",
 *       transaction_valid_start: "2023-01-01T12:00:00Z"
 *     }
 *   }
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Message chunking information
     * @property {IHashgraph.ICommons.IChunkInfo} chunk_info
     * @description Details about message segmentation when the original message
     * exceeds size limits. Includes chunk sequence and transaction information.
     * @type {IHashgraph.ICommons.IChunkInfo}
     * @memberof _IEntity
     * @optional
     */
    chunk_info?: IHashgraph.ICommons.IChunkInfo

    /**
     * Message consensus timestamp
     * @property {string} consensus_timestamp
     * @description ISO 8601 timestamp when the network reached consensus on this
     * message, in nanosecond precision (YYYY-MM-DDTHH:mm:ss.nnnnnnnnnZ)
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    consensus_timestamp: string

    /**
     * Message content
     * @property {string} message
     * @description Application-specific payload of the message. Can contain any
     * string data, typically JSON or base64-encoded content.
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    message: string

    /**
     * Message payer account
     * @property {string | null} payer_account_id
     * @description The Hedera account ID (format: 0.0.x) that paid for this
     * message submission. Null if payer information is unavailable.
     * @type {string | null}
     * @memberof _IEntity
     * @optional
     */
    payer_account_id?: string | null

    /**
     * Topic state hash
     * @property {string} running_hash
     * @description Cryptographic hash representing the topic's state after
     * including this message. Used for verifying message sequence integrity.
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    running_hash: string

    /**
     * Hash algorithm version
     * @property {number} running_hash_version
     * @description Version identifier for the algorithm used to compute the
     * running hash. Helps in correctly interpreting the hash value.
     * @type {number}
     * @memberof _IEntity
     * @required
     */
    running_hash_version: number

    /**
     * Message sequence number
     * @property {number} sequence_number
     * @description Monotonically increasing number assigned to messages within
     * the topic. Used for ordering and detecting missing messages.
     * @type {number}
     * @memberof _IEntity
     * @required
     */
    sequence_number: number

    /**
     * Topic identifier
     * @property {string} topic_id
     * @description The Hedera topic ID (format: 0.0.x) that this message
     * belongs to. Each topic maintains its own message sequence.
     * @type {string}
     * @memberof _IEntity
     * @required
     */
    topic_id: string
}