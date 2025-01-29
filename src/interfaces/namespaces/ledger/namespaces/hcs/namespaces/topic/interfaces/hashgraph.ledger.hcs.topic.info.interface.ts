/**
 * @file info.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.IInfo
 * @description Defines the interface for retrieving topic information from Hedera Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Topic Operations
 * @subcategory Topic Information
 */

/**
 * Topic information interface for HCS
 * @interface _IInfo
 * @description Defines the structure for retrieving comprehensive information about
 * existing topics on the Hedera Consensus Service (HCS). Provides detailed metadata
 * about topic configuration, state, and associated resources.
 * 
 * @remarks
 * Information categories:
 * - Identification
 * - Configuration
 * - State tracking
 * - Access control
 * - Resource management
 * 
 * Use cases:
 * - Topic monitoring
 * - Access verification
 * - Resource planning
 * - Audit compliance
 * 
 * Data freshness:
 * - Real-time state
 * - Network synced
 * - Consensus verified
 * - Cache validated
 * 
 * @example
 * ```typescript
 * // Basic topic information
 * const topicInfo: _IInfo = {
 *   topicId: "0.0.1234",
 *   topicMemo: "Application event stream",
 *   sequenceNumber: "42",
 *   expirationTime: "1234567890.000000000",
 *   adminKey: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *   submitKey: "302a300506032b6570032100514e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *   autoRenewAccountId: "0.0.5678",
 *   ledgerId: "mainnet"
 * };
 * 
 * // Multi-key topic information
 * const multiKeyTopicInfo: _IInfo = {
 *   topicId: "0.0.1234",
 *   topicMemo: "Multi-signature event stream",
 *   sequenceNumber: "42",
 *   expirationTime: "1234567890.000000000",
 *   adminKey: [
 *     "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *     "302a300506032b6570032100214e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888"
 *   ],
 *   submitKey: [
 *     "302a300506032b6570032100514e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *     "302a300506032b6570032100614e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888"
 *   ],
 *   autoRenewAccountId: "0.0.5678",
 *   ledgerId: "mainnet"
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Topic identifier
     * @property {string} topicId
     * @description The unique identifier for the topic on the Hedera network.
     * Used for all topic-related operations.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Format:
     * - Shard.Realm.Number
     * - Network unique
     * - Immutable
     * - Case sensitive
     * 
     * Usage:
     * - Topic operations
     * - Message routing
     * - Access control
     * - Resource tracking
     * 
     * @example
     * ```typescript
     * topicId: "0.0.1234"
     * ```
     */
    topicId: string;

    /**
     * Topic description
     * @property {string} topicMemo
     * @description A descriptive note or memo providing context about the topic's
     * purpose, usage, or other relevant information.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Best practices:
     * - Clear purpose
     * - Version info
     * - Usage context
     * - Contact details
     * 
     * Limitations:
     * - 100 bytes max
     * - UTF-8 encoding
     * - Plain text only
     * - No formatting
     * 
     * @example
     * ```typescript
     * topicMemo: "Production event stream v1.0 - System notifications"
     * ```
     */
    topicMemo: string;

    /**
     * Message sequence
     * @property {string} sequenceNumber
     * @description The current sequence number for messages in the topic.
     * Represents the total number of messages processed.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Characteristics:
     * - Monotonic
     * - Zero-based
     * - Sequential
     * - Unique per topic
     * 
     * Usage:
     * - Message ordering
     * - State tracking
     * - Gap detection
     * - Replay protection
     * 
     * @example
     * ```typescript
     * sequenceNumber: "42"
     * ```
     */
    sequenceNumber: string;

    /**
     * Topic lifetime
     * @property {string} expirationTime
     * @description The timestamp when the topic will expire and become inactive.
     * Specified in seconds.nanoseconds format.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Format:
     * - Seconds.nanoseconds
     * - UTC timezone
     * - Network time
     * - Auto-renewable
     * 
     * Management:
     * - Auto-renewal
     * - Manual extension
     * - Grace period
     * - Resource cleanup
     * 
     * @example
     * ```typescript
     * expirationTime: "1234567890.000000000"
     * ```
     */
    expirationTime: string;

    /**
     * Administrative control
     * @property {string | Array<string>} adminKey
     * @description The cryptographic key(s) with administrative privileges for the topic.
     * Controls topic updates and deletions.
     * @type {string | Array<string>}
     * @memberof _IInfo
     * @remarks
     * Capabilities:
     * - Update topic
     * - Delete topic
     * - Manage keys
     * - Control lifecycle
     * 
     * Key types:
     * - Single key
     * - Multiple keys
     * - Threshold keys
     * - Weighted keys
     * 
     * @example
     * ```typescript
     * // Single key
     * adminKey: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     * 
     * // Multiple keys
     * adminKey: [
     *   "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
     *   "302a300506032b6570032100214e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888"
     * ]
     * ```
     */
    adminKey: string | Array<string>;

    /**
     * Message submission control
     * @property {string | Array<string>} submitKey
     * @description The cryptographic key(s) required to submit messages to the topic.
     * Controls message publishing permissions.
     * @type {string | Array<string>}
     * @memberof _IInfo
     * @remarks
     * Capabilities:
     * - Submit messages
     * - Control access
     * - Validate senders
     * - Manage permissions
     * 
     * Key types:
     * - Single key
     * - Multiple keys
     * - Threshold keys
     * - Weighted keys
     * 
     * @example
     * ```typescript
     * // Single key
     * submitKey: "302a300506032b6570032100514e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     * 
     * // Multiple keys
     * submitKey: [
     *   "302a300506032b6570032100514e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
     *   "302a300506032b6570032100614e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888"
     * ]
     * ```
     */
    submitKey: string | Array<string>;

    /**
     * Auto-renewal account
     * @property {string} autoRenewAccountId
     * @description The Hedera account identifier that pays for automatic topic renewal.
     * Ensures topic persistence.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Requirements:
     * - Active account
     * - Sufficient balance
     * - Proper permissions
     * - Network access
     * 
     * Functions:
     * - Fee payment
     * - Lifetime extension
     * - Resource maintenance
     * - Service continuity
     * 
     * @example
     * ```typescript
     * autoRenewAccountId: "0.0.5678"
     * ```
     */
    autoRenewAccountId: string;

    /**
     * Network identifier
     * @property {string} ledgerId
     * @description The identifier of the Hedera network where the topic exists.
     * Distinguishes between different network environments.
     * @type {string}
     * @memberof _IInfo
     * @remarks
     * Networks:
     * - mainnet
     * - testnet
     * - previewnet
     * - private
     * 
     * Usage:
     * - Network routing
     * - Environment tracking
     * - Resource allocation
     * - Access control
     * 
     * @example
     * ```typescript
     * ledgerId: "mainnet"
     * ```
     */
    ledgerId: string;
}