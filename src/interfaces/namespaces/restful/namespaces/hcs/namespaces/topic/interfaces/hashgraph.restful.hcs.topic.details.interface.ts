/**
 * @file hashgraph.restful.hcs.topic.details.interface.ts
 * @namespace IHashgraph.IRestful._IHCS._ITopic
 * @description Defines the interface for HCS topic details in the Hedera REST API
 */

/**
 * Interface for HCS topic details
 * @interface _IDetails 
 * @description Represents the detailed configuration and state of a consensus topic
 * in the Hedera Consensus Service (HCS). This interface provides comprehensive 
 * information about a topic's settings, keys, renewal parameters, and lifecycle.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const topicDetails: _IDetails = {
 *   admin_key: {
 *     _type: "ED25519",
 *     key: "302a300506032b6570032100..."
 *   },
 *   auto_renew_account: "0.0.1234",
 *   auto_renew_period: 7890000,
 *   created_timestamp: "1234567890.000000000",
 *   deleted: false,
 *   memo: "My HCS Topic",
 *   submit_key: {
 *     _type: "ED25519", 
 *     key: "302a300506032b6570032100..."
 *   },
 *   timestamp: {
 *     from: "1234567890.000000000",
 *     to: "1234567899.000000000"
 *   },
 *   topic_id: "0.0.1234"
 * };
 * ```
 */
export interface _IDetails {
    /**
     * Admin key for topic management
     * @type {{ _type: string, key: string }}
     * @description The key that must sign any administrative operations for this topic,
     * such as updating properties or deleting the topic. Includes the key type (e.g., ED25519)
     * and the encoded key material.
     * @required
     * @example { _type: "ED25519", key: "302a300506032b6570032100..." }
     */
    admin_key: {
        _type: string;
        key: string;
    };

    /**
     * Auto-renew account identifier
     * @type {string}
     * @description The account ID (in format 0.0.x) that will be automatically charged
     * to renew the topic's lifetime when it is about to expire. This ensures the topic
     * remains active without manual intervention.
     * @required
     * @example "0.0.1234"
     */
    auto_renew_account: string;

    /**
     * Auto-renew period duration
     * @type {number}
     * @description The duration in seconds for which the topic should be renewed when
     * the auto_renew_account is charged. This determines how long the topic will remain
     * active after each renewal.
     * @required
     * @example 7890000
     */
    auto_renew_period: number;

    /**
     * Topic creation timestamp
     * @type {string}
     * @description The timestamp when this topic was created on the network, in seconds
     * with nanosecond precision (seconds.nanoseconds format).
     * @required
     * @example "1234567890.000000000"
     */
    created_timestamp: string;

    /**
     * Topic deletion status
     * @type {boolean}
     * @description Indicates whether this topic has been deleted from the network.
     * Once deleted, a topic cannot be recovered or reused.
     * @required
     * @example false
     */
    deleted: boolean;

    /**
     * Topic description memo
     * @type {string}
     * @description A user-defined memo or description associated with the topic.
     * Can be used to provide context or metadata about the topic's purpose.
     * @required
     * @example "My HCS Topic"
     */
    memo: string;

    /**
     * Submit key for message submission
     * @type {{ _type: string, key: string }}
     * @description The key required to sign any message submissions to this topic.
     * If set, all messages must be signed with this key to be accepted. Includes
     * the key type and encoded key material.
     * @required
     * @example { _type: "ED25519", key: "302a300506032b6570032100..." }
     */
    submit_key: {
        _type: string;
        key: string;
    };

    /**
     * Topic validity timeframe
     * @type {{ from: string, to: string }}
     * @description The time range during which this topic is or was valid,
     * specified in seconds.nanoseconds format. The 'from' timestamp indicates
     * creation time, while 'to' indicates expiration or deletion time.
     * @required
     * @example { from: "1234567890.000000000", to: "1234567899.000000000" }
     */
    timestamp: {
        from: string;
        to: string;
    };

    /**
     * Unique topic identifier
     * @type {string}
     * @description The unique identifier for this topic on the Hedera network,
     * in the format "0.0.x" where x is the topic number.
     * @required
     * @example "0.0.1234"
     */
    topic_id: string;
}