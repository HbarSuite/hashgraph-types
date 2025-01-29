import { _IDelete } from './interfaces/hashgraph.ledger.hcs.topic.delete.interface'
import { _ICreate } from './interfaces/hashgraph.ledger.hcs.topic.create.interface'
import { _IInfo } from './interfaces/hashgraph.ledger.hcs.topic.info.interface'
import { _IUpdate } from './interfaces/hashgraph.ledger.hcs.topic.update.interface'
import { _IMessage } from './namespaces/message/hashgraph.ledger.hcs.topic.message.namespace'

/**
 * Topic management namespace for Hedera Consensus Service (HCS)
 * @namespace _ITopic
 * @description Defines the structure and requirements for HCS topic operations,
 * providing comprehensive support for topic lifecycle management and message handling.
 * Enables creation, modification, deletion, and querying of consensus topics.
 * @category Hedera Services
 * @subcategory HCS Topics
 * @remarks
 * Key features:
 * - Topic lifecycle management
 * - Access control
 * - Message submission
 * - State queries
 * - Metadata handling
 * - Auto-renewal
 * 
 * Common use cases:
 * - Decentralized logging
 * - Audit trails
 * - Event streams
 * - Message queues
 * - State channels
 * - Oracle networks
 * 
 * Requirements:
 * - Valid keys
 * - Proper permissions
 * - Network fees
 * - Resource limits
 * @example
 * ```typescript
 * // Creating a topic with full configuration
 * const createTopic: _ITopic.ICreate = {
 *   adminKey: myAdminKey,
 *   submitKey: mySubmitKey,
 *   autoRenewAccountId: "0.0.12345",
 *   autoRenewPeriod: 7776000, // 90 days
 *   memo: "Audit log topic",
 *   metadata: {
 *     department: "finance",
 *     environment: "production"
 *   }
 * };
 * 
 * // Updating topic properties
 * const updateTopic: _ITopic.IUpdate = {
 *   topicId: "0.0.34567",
 *   adminKey: newAdminKey,
 *   submitKey: newSubmitKey,
 *   memo: "Updated audit log topic",
 *   expirationTime: "2025-12-31T23:59:59.999Z"
 * };
 * 
 * // Querying topic information
 * const getInfo: _ITopic.IInfo = {
 *   topicId: "0.0.34567",
 *   includeDeleted: false,
 *   queryRange: {
 *     from: "2024-01-01T00:00:00.000Z",
 *     to: "2024-12-31T23:59:59.999Z"
 *   }
 * };
 * 
 * // Deleting a topic
 * const deleteTopic: _ITopic.IDelete = {
 *   topicId: "0.0.34567",
 *   adminKey: myAdminKey
 * };
 * ```
 */
export namespace _ITopic {
    /**
     * Topic creation type definition
     * @type {_ICreate}
     * @description Defines the structure for creating new HCS topics with
     * comprehensive configuration options for access control, renewal settings,
     * and metadata management.
     * @memberof _ITopic
     * @remarks
     * Key configurations:
     * - Access control keys
     * - Auto-renewal settings
     * - Initial metadata
     * - Permissions setup
     * @see {@link _ICreate} for detailed property definitions
     */
    export type ICreate = _ICreate

    /**
     * Topic update type definition
     * @type {_IUpdate}
     * @description Defines the structure for modifying existing HCS topics,
     * enabling updates to keys, metadata, expiration, and other properties
     * while maintaining topic identity.
     * @memberof _ITopic
     * @remarks
     * Updatable properties:
     * - Admin/submit keys
     * - Memo field
     * - Expiration time
     * - Auto-renewal settings
     * @see {@link _IUpdate} for detailed property definitions
     */
    export type IUpdate = _IUpdate

    /**
     * Topic deletion type definition
     * @type {_IDelete}
     * @description Defines the structure for removing HCS topics from the network,
     * including authentication and optional DAO governance requirements.
     * @memberof _ITopic
     * @remarks
     * Requirements:
     * - Admin key signature
     * - Valid permissions
     * - Network fees
     * - Optional DAO approval
     * @see {@link _IDelete} for detailed property definitions
     */
    export type IDelete = _IDelete

    /**
     * Topic information type definition
     * @type {_IInfo}
     * @description Defines the structure for querying HCS topic details,
     * including current state, configuration, and historical data with
     * flexible query options.
     * @memberof _ITopic
     * @remarks
     * Query capabilities:
     * - Basic properties
     * - Current state
     * - Historical data
     * - Message sequences
     * @see {@link _IInfo} for detailed property definitions
     */
    export type IInfo = _IInfo

    /**
     * Message operations namespace
     * @type {_IMessage}
     * @description Provides interfaces and types for managing message operations
     * within HCS topics, including submission, retrieval, and validation of
     * consensus messages.
     * @memberof _ITopic
     * @remarks
     * Supported operations:
     * - Message submission
     * - Sequence tracking
     * - Content validation
     * - Metadata handling
     * @see {@link _IMessage} for detailed interface definitions
     */
    export import IMessage = _IMessage
}