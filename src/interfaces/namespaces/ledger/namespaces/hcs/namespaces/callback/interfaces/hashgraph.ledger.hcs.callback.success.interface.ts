import { TopicMessage } from "@hashgraph/sdk";

/**
 * @file success.interface.ts
 * @module IHashgraph.ILedger.IHCS.ICallback._ISuccess
 * @description Defines the interface for success callbacks in Hashgraph Consensus Service (HCS) topic message retrieval
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Callback Interfaces
 * @subcategory Success Handling
 */

/**
 * Interface for Hashgraph Consensus Service (HCS) topic message retrieval success callback
 * @interface _ISuccess
 * @description Defines the structure for a callback function that handles successful message retrieval
 * from a Hashgraph Consensus Service topic. This callback is triggered when a message is successfully
 * received and processed from an HCS topic.
 * 
 * @remarks
 * Success handling capabilities:
 * - Message processing
 * - Data validation
 * - State updates
 * - Event propagation
 * 
 * Common success scenarios:
 * - New messages
 * - Updates received
 * - State changes
 * - System notifications
 * 
 * Best practices:
 * - Validate data
 * - Update state
 * - Notify systems
 * - Log activity
 * 
 * Implementation notes:
 * - Async-safe
 * - Non-blocking
 * - State consistent
 * - Error handled
 * 
 * @callback
 * @param {TopicMessage} message - The successfully retrieved message. Contains the consensus timestamp,
 *                                topic ID, sequence number, and message contents from the HCS topic.
 * @returns {void}
 * 
 * @category Interfaces
 * @subcategory Callback
 * 
 * @example
 * ```typescript
 * const successCallback: _ISuccess = (message: TopicMessage): void => {
 *   // Log the successful message receipt
 *   console.log(`Message received at: ${message.consensusTimestamp}`);
 *   console.log(`From topic: ${message.topicId}`);
 *   
 *   // Process the message contents
 *   const contents = message.contents;
 *   console.log('Message data:', contents);
 *   
 *   // Update application state
 *   updateApplicationState(contents);
 *   
 *   // Notify other system components
 *   notifySubscribers(message);
 *   
 *   // Record the activity
 *   logMessageActivity(message);
 * };
 * ```
 */
export interface _ISuccess {
    /**
     * Success callback function signature
     * @param {TopicMessage} message - The HCS topic message that was successfully retrieved.
     *                                Contains consensus timestamp, topic ID, sequence number,
     *                                and message contents.
     * @returns {void} This callback does not return a value but should process the message appropriately.
     * @throws {never} This callback should never throw errors, all errors should be handled internally.
     */
    (message: TopicMessage): void;
}