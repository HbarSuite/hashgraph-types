import { _IInfo } from './interfaces/hashgraph.ledger.hcs.topic.message.info.interface'
import { _ISubmit } from './interfaces/hashgraph.ledger.hcs.topic.message.submit.interface'

/**
 * Message operations namespace for Hedera Consensus Service (HCS)
 * @namespace _IMessage
 * @description Defines the structure and requirements for HCS message operations,
 * providing comprehensive support for message submission, retrieval, and validation
 * within consensus topics.
 * @category Hedera Services
 * @subcategory HCS Messages
 * @remarks
 * Key features:
 * - Message submission
 * - Message retrieval
 * - Sequence tracking
 * - Signature validation
 * - Callback handling
 * - Error management
 * 
 * Common use cases:
 * - Event logging
 * - State updates
 * - Data streaming
 * - Audit trails
 * - Message queuing
 * - Real-time feeds
 * 
 * Requirements:
 * - Valid topic ID
 * - Proper permissions
 * - Message size limits
 * - Network fees
 * @example
 * ```typescript
 * // Message submission with full configuration
 * const submitMessage: _IMessage.ISubmit = {
 *   topicId: "0.0.34567",
 *   message: "Transaction processed",
 *   metadata: {
 *     type: "audit",
 *     source: "payment-service",
 *     version: "1.0.0"
 *   },
 *   submitKey: mySubmitKey,
 *   maxChunks: 10,
 *   validStart: new Date(),
 *   validDuration: 120 // seconds
 * };
 * 
 * // Message retrieval with callbacks
 * const getMessages: _IMessage.IInfo = {
 *   topicId: "0.0.34567",
 *   startTime: "2024-01-01T00:00:00.000Z",
 *   endTime: "2024-12-31T23:59:59.999Z",
 *   limit: 100,
 *   order: "desc",
 *   filters: {
 *     type: "audit",
 *     source: "payment-service"
 *   },
 *   onSuccess: (messages) => {
 *     console.log('Messages received:', messages.length);
 *     messages.forEach(processMessage);
 *   },
 *   onError: (error) => {
 *     console.error('Retrieval failed:', error.code);
 *     handleError(error);
 *   }
 * };
 * ```
 */
export namespace _IMessage {
    /**
     * Message retrieval type definition
     * @type {_IInfo}
     * @description Defines the structure for retrieving and filtering messages
     * from HCS topics, with comprehensive support for pagination, filtering,
     * and asynchronous processing.
     * @memberof _IMessage
     * @remarks
     * Capabilities:
     * - Time-based filtering
     * - Sequence ranges
     * - Custom filters
     * - Pagination control
     * - Async callbacks
     * - Error handling
     * @see {@link _IInfo} for detailed property definitions
     */
    export type IInfo = _IInfo

    /**
     * Message submission type definition
     * @type {_ISubmit}
     * @description Defines the structure for submitting messages to HCS topics,
     * with support for metadata, chunking, and cryptographic validation.
     * @memberof _IMessage
     * @remarks
     * Features:
     * - Message chunking
     * - Metadata support
     * - Signature validation
     * - Time constraints
     * - Size validation
     * - Error handling
     * @see {@link _ISubmit} for detailed property definitions
     */
    export type ISubmit = _ISubmit
}