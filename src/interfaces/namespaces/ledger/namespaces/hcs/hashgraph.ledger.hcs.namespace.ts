import { _ICallback } from './namespaces/callback/hashgraph.ledger.hcs.callback.namespace'
import { _ITopic } from './namespaces/topic/hashgraph.ledger.hcs.topic.namespace'

/**
 * Hedera Consensus Service (HCS) namespace
 * @namespace _IHCS
 * @description Defines the structure and requirements for HCS operations on the Hedera network.
 * Provides comprehensive support for decentralized messaging, consensus, and topic management.
 * HCS enables verifiable event ordering and transparent message delivery.
 * @category Hedera Services
 * @subcategory HCS
 * @remarks
 * Key features:
 * - Topic management
 * - Message submission
 * - Consensus tracking
 * - Event ordering
 * - Callback handling
 * - Fair ordering
 * 
 * Common use cases:
 * - Audit logging
 * - Supply chain tracking
 * - Decentralized oracles
 * - Event sourcing
 * - Message queuing
 * - State channels
 * 
 * Requirements:
 * - Valid topic IDs
 * - Proper permissions
 * - Network fees coverage
 * - Message size limits
 * @example
 * ```typescript
 * // Topic creation with admin key
 * const createTopic: _IHCS.ITopic.ICreate = {
 *   adminKey: myAdminKey,
 *   submitKey: mySubmitKey,
 *   memo: "Audit log topic",
 *   autoRenewPeriod: 7776000 // 90 days
 * };
 * 
 * // Message submission
 * const submitMessage: _IHCS.ITopic.ISubmit = {
 *   topicId: "0.0.34567",
 *   message: "Transaction processed",
 *   metadata: {
 *     type: "audit",
 *     source: "payment-service"
 *   }
 * };
 * 
 * // Success callback handling
 * const onSuccess: _IHCS.ICallback.ISuccess = (response) => {
 *   console.log('Message consensus:', response.consensusTimestamp);
 *   console.log('Topic sequence:', response.sequenceNumber);
 * };
 * 
 * // Error callback handling
 * const onError: _IHCS.ICallback.IError = (error) => {
 *   console.error('HCS error:', error.code);
 *   console.error('Details:', error.details);
 * };
 * ```
 */
export namespace _IHCS {
    /**
     * Topic operations namespace
     * @type {_ITopic}
     * @description Provides interfaces and types for comprehensive topic management,
     * including creation, updates, deletion, and message operations. Enables
     * fine-grained control over topic properties and message submission.
     * @memberof _IHCS
     * @remarks
     * Supported operations:
     * - Topic creation
     * - Topic updates
     * - Topic deletion
     * - Message submission
     * - Info queries
     * @see {@link _ITopic} for detailed interface definitions
     */
    export import ITopic = _ITopic

    /**
     * Callback operations namespace
     * @type {_ICallback}
     * @description Defines standardized callback patterns for handling HCS
     * operation responses and errors. Ensures consistent error handling and
     * success processing across the application.
     * @memberof _IHCS
     * @remarks
     * Callback types:
     * - Success handlers
     * - Error handlers
     * - Progress tracking
     * - State updates
     * @see {@link _ICallback} for detailed interface definitions
     */
    export import ICallback = _ICallback
}