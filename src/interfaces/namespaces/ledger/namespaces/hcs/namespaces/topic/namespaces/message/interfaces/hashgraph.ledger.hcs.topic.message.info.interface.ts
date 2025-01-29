import { _IHCS } from '../../../../../hashgraph.ledger.hcs.namespace'

/**
 * @file info.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.IMessage._IInfo
 * @description Defines the interface for retrieving messages from topics in Hashgraph Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Message Operations
 * @subcategory Message Retrieval
 */

/**
 * Interface for retrieving messages from Hashgraph Consensus Service topics
 * @interface _IInfo
 * @description Defines the structure for retrieving messages from an HCS topic.
 * Includes parameters for specifying the message range and callbacks for handling
 * successful retrieval and errors.
 * 
 * @remarks
 * Retrieval capabilities:
 * - Range-based queries
 * - Pagination support
 * - Success handling
 * - Error management
 * 
 * Use cases:
 * - Message monitoring
 * - Event tracking
 * - Data synchronization
 * - State updates
 * 
 * Best practices:
 * - Set appropriate limits
 * - Handle all errors
 * - Process sequentially
 * - Maintain state
 * 
 * Implementation notes:
 * - Async-safe
 * - Non-blocking
 * - Error resilient
 * - Resource efficient
 * 
 * @category Interfaces
 * @subcategory Message
 * 
 * @example
 * ```typescript
 * const messageParams: _IInfo = {
 *   callbackSuccess: (message) => {
 *     console.log(`Message received at ${message.consensusTimestamp}`);
 *     console.log(`Content: ${message.contents}`);
 *   },
 *   callbackError: (message, error) => {
 *     console.error(`Error processing message: ${error.message}`);
 *     console.error(`Failed message timestamp: ${message.consensusTimestamp}`);
 *   },
 *   start: 1,
 *   end: 100,
 *   limit: 25
 * };
 * ```
 */
export interface _IInfo {
    /**
     * Success callback handler
     * @property {_IHCS.ICallback.ISuccess} callbackSuccess
     * @description Function called when a message is successfully retrieved.
     * Receives the message content and metadata for processing.
     * @type {_IHCS.ICallback.ISuccess}
     * @memberof _IInfo
     * @remarks
     * Responsibilities:
     * - Message validation
     * - Data processing
     * - State updates
     * - Event propagation
     * 
     * @example
     * ```typescript
     * const successCallback: _IHCS.ICallback.ISuccess = (message) => {
     *   console.log('Message ID:', message.consensusTimestamp);
     *   console.log('Topic ID:', message.topicId);
     *   console.log('Content:', message.contents);
     *   // Process message data
     *   updateApplicationState(message);
     * };
     * ```
     */
    callbackSuccess: _IHCS.ICallback.ISuccess;

    /**
     * Starting sequence number
     * @property {number} start
     * @description The starting sequence number for message retrieval.
     * Messages with sequence numbers greater than or equal to this value will be retrieved.
     * @type {number}
     * @memberof _IInfo
     * @remarks
     * Requirements:
     * - Non-negative integer
     * - Less than or equal to end
     * - Within topic range
     * - Valid sequence
     * 
     * @example
     * ```typescript
     * start: 1 // Start from first message
     * ```
     */
    start: number;

    /**
     * Ending sequence number
     * @property {number} end
     * @description The ending sequence number for message retrieval.
     * Messages with sequence numbers less than or equal to this value will be retrieved.
     * @type {number}
     * @memberof _IInfo
     * @remarks
     * Requirements:
     * - Non-negative integer
     * - Greater than or equal to start
     * - Within topic range
     * - Valid sequence
     * 
     * @example
     * ```typescript
     * end: 100 // Retrieve up to message 100
     * ```
     */
    end: number;

    /**
     * Maximum messages per request
     * @property {number} limit
     * @description Maximum number of messages to retrieve in a single request.
     * Used for pagination and controlling response size.
     * @type {number}
     * @memberof _IInfo
     * @remarks
     * Considerations:
     * - Network capacity
     * - Memory usage
     * - Processing time
     * - Rate limits
     * 
     * @example
     * ```typescript
     * limit: 25 // Retrieve 25 messages per request
     * ```
     */
    limit: number;

    /**
     * Error callback handler
     * @property {_IHCS.ICallback.IError} callbackError
     * @description Function called when an error occurs during message retrieval.
     * Receives error details for handling and logging.
     * @type {_IHCS.ICallback.IError}
     * @memberof _IInfo
     * @remarks
     * Error handling:
     * - Network failures
     * - Invalid messages
     * - Access denied
     * - Resource limits
     * 
     * @example
     * ```typescript
     * const errorCallback: _IHCS.ICallback.IError = (message, error) => {
     *   console.error('Error type:', error.name);
     *   console.error('Error message:', error.message);
     *   console.error('Failed message:', message);
     *   // Implement recovery logic
     *   handleMessageError(message, error);
     * };
     * ```
     */
    callbackError: _IHCS.ICallback.IError;
}