import { TopicMessage } from "@hashgraph/sdk";

/**
 * @file error.interface.ts
 * @module IHashgraph.ILedger.IHCS.ICallback._IError
 * @description Defines the interface for error handling callbacks in Hashgraph Consensus Service (HCS) topic message retrieval
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Callback Interfaces
 * @subcategory Error Handling
 */

/**
 * Interface for Hashgraph Consensus Service (HCS) topic message retrieval error callback
 * @interface _IError
 * @description Defines the structure for a callback function that handles errors during message retrieval 
 * from a Hashgraph Consensus Service topic. This callback is triggered when an error occurs while processing
 * or retrieving messages from an HCS topic.
 * 
 * @remarks
 * Error handling capabilities:
 * - Message inspection
 * - Error analysis
 * - Failure logging
 * - Recovery actions
 * 
 * Common error scenarios:
 * - Network failures
 * - Invalid messages
 * - Access denied
 * - Resource limits
 * 
 * Best practices:
 * - Log errors
 * - Notify systems
 * - Attempt recovery
 * - Maintain state
 * 
 * Implementation notes:
 * - Async-safe
 * - Non-blocking
 * - Error isolation
 * - State preservation
 * 
 * @callback
 * @param {TopicMessage} message - The message that triggered the error. Contains the raw message data
 *                                and metadata from the HCS topic at the time of failure.
 * @param {Error} error - The error that occurred during message retrieval. Contains details about
 *                       the nature of the failure and stack trace information.
 * @returns {void}
 * 
 * @category Interfaces
 * @subcategory Callback
 * 
 * @example
 * ```typescript
 * const errorCallback: _IError = (message: TopicMessage, error: Error): void => {
 *   // Log the error details
 *   console.error(`Error retrieving message: ${error.message}`);
 *   console.error(`Error stack: ${error.stack}`);
 *   
 *   // Log the problematic message details
 *   console.log(`Message ID: ${message.consensusTimestamp}`);
 *   console.log(`Topic ID: ${message.topicId}`);
 *   console.log(`Message contents:`, message.contents);
 *   
 *   // Implement error recovery logic
 *   if (error.message.includes('network')) {
 *     // Handle network errors
 *     scheduleRetry(message);
 *   } else if (error.message.includes('access')) {
 *     // Handle permission errors
 *     notifyAdministrator(error);
 *   } else {
 *     // Handle other errors
 *     logToMonitoringSystem(error, message);
 *   }
 * };
 * ```
 */
export interface _IError {
    /**
     * Error callback function signature
     * @param {TopicMessage} message - The HCS topic message that triggered the error.
     *                                Contains consensus timestamp, topic ID, sequence number,
     *                                and message contents.
     * @param {Error} error - The error object containing failure details including
     *                       error message, error code, and stack trace.
     * @returns {void} This callback does not return a value but should handle the error appropriately.
     * @throws {never} This callback should never throw errors, all errors should be handled internally.
     */
    (message: TopicMessage, error: Error): void;
}