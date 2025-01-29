import { _Topic } from './namespaces/topic/hashgraph.ledger.hcs.topic.namespace'

/**
 * @file Hedera Consensus Service (HCS) Namespace Definition
 * @namespace _HCS
 * @description Core namespace for Hedera Consensus Service (HCS) operations and management.
 * Provides a comprehensive interface for interacting with Hedera's decentralized messaging
 * and consensus service.
 * 
 * Core Features:
 * - Topic Creation and Management
 * - Secure Message Submission
 * - Consensus Operation Handling
 * - Topic Information Retrieval
 * - Message Verification
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * The HCS namespace serves as the primary entry point for all HCS-related operations,
 * providing type-safe interfaces and implementations for topic and message management.
 * 
 * @example
 * // Creating a new HCS topic with admin key
 * const topic = new _HCS.Topic.Create({
 *   memo: "My HCS Topic",
 *   adminKey: adminPublicKey,
 *   submitKey: submitKey
 * });
 * 
 * // Submitting a signed message to a topic
 * const message = new _HCS.Topic.Message.Submit(
 *   "Hello Hashgraph!",
 *   signatureBytes,
 *   "0.0.123456"
 * );
 */
export namespace _HCS {
    /**
     * Topic Management Interface
     * @property {_Topic} Topic
     * @description Comprehensive interface for HCS topic operations and message handling.
     * 
     * Capabilities:
     * - Topic Creation: Create and configure new HCS topics
     * - Topic Management: Update, delete, and query topic information
     * - Message Operations: Submit and retrieve messages
     * - Access Control: Manage topic permissions and keys
     * 
     * @type {_Topic}
     * @memberof _HCS
     * 
     * @example
     * // Create a new topic with submit key
     * const newTopic = new Topic.Create({
     *   memo: "Topic description",
     *   submitKey: submitKey,
     *   autoRenewPeriod: 7776000 // 90 days
     * });
     * 
     * // Submit a signed message
     * const message = new Topic.Message.Submit(
     *   "Message content",
     *   signature,
     *   senderId,
     *   { validStart: timestamp }
     * );
     */
    export import Topic = _Topic
}