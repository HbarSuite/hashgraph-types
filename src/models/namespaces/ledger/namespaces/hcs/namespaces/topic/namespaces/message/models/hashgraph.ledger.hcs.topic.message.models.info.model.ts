import { _HCS } from '../../../../../hashgraph.ledger.hcs.namespace'
import { ApiProperty } from "@hsuite/nestjs-swagger"
import { IHashgraph } from '../../../../../../../../../../interfaces/hashgraph.namespace'

/**
 * @file HCS Message Information Model
 * @class _Info
 * @implements {IHashgraph.ILedger.IHCS.ITopic.IMessage.IInfo}
 * @description Implements the message information and retrieval configuration for
 * Hedera Consensus Service (HCS) topics. This model manages message retrieval settings
 * and callback handling.
 * 
 * Core Features:
 * - Message Retrieval Configuration
 * - Sequence Range Management
 * - Batch Size Control
 * - Success/Error Callback Handling
 * - Validation Logic
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This class is essential for configuring how messages are retrieved from HCS topics,
 * including pagination, error handling, and success processing.
 * 
 * @example
 * // Configure message retrieval with callbacks
 * const messageInfo = new _Info(
 *   // Success callback with message processing
 *   (message) => {
 *     console.log('Message ID:', message.id);
 *     console.log('Content:', message.content);
 *     processMessage(message);
 *   },
 *   0, // Start from beginning
 *   1000, // End at sequence 1000
 *   50, // Process in batches of 50
 *   // Error handling with retry logic
 *   (error) => {
 *     console.error('Retrieval error:', error);
 *     retryOperation();
 *   }
 * );
 */
export class _Info implements IHashgraph.ILedger.IHCS.ITopic.IMessage.IInfo {
    /**
     * Message Processing Callback
     * @type {IHashgraph.ILedger.IHCS.ICallback.ISuccess}
     * @description Function called for each successfully retrieved message.
     * Handles message processing and business logic implementation.
     * 
     * Callback Requirements:
     * - Must be a valid function
     * - Should handle message processing gracefully
     * - Should not throw unhandled exceptions
     * - Should process messages efficiently
     * 
     * @example
     * callbackSuccess: (message) => {
     *   // Message validation
     *   if (!isValidMessage(message)) {
     *     logInvalidMessage(message);
     *     return;
     *   }
     * 
     *   // Message processing
     *   console.log('Processing message:', message.id);
     *   processMessageContent(message.content);
     *   updateMessageStatus(message.id, 'processed');
     * }
     */
    @ApiProperty({
        type: () => 'function',
        description: 'Callback for successful message retrieval',
        required: true
    })
    callbackSuccess: IHashgraph.ILedger.IHCS.ICallback.ISuccess

    /**
     * Starting Sequence Number
     * @type {number}
     * @description Defines the starting point for message retrieval in the sequence.
     * 
     * Requirements:
     * - Must be a non-negative integer
     * - Must be less than or equal to the end sequence
     * - Represents the first message to retrieve
     * 
     * @example
     * // Start from the beginning
     * start: 0
     * 
     * // Start from a specific sequence
     * start: 1000
     */
    @ApiProperty({
        type: () => Number,
        description: 'Start sequence number for message retrieval',
        required: true
    })
    start: number

    /**
     * Ending Sequence Number
     * @type {number}
     * @description Defines the endpoint for message retrieval in the sequence.
     * 
     * Requirements:
     * - Must be an integer greater than or equal to start
     * - Represents the last message to retrieve
     * - Can be set to a future sequence number
     * 
     * @example
     * // End at a specific sequence
     * end: 2000
     * 
     * // Process all available messages
     * end: Number.MAX_SAFE_INTEGER
     */
    @ApiProperty({
        type: () => Number,
        description: 'End sequence number for message retrieval',
        required: true
    })
    end: number

    /**
     * Message Batch Size
     * @type {number}
     * @description Maximum number of messages to retrieve in a single batch.
     * Controls pagination and processing load.
     * 
     * Requirements:
     * - Must be a positive integer
     * - Should be optimized for network and processing capacity
     * - Affects memory usage and processing time
     * 
     * @example
     * // Small batch for real-time processing
     * limit: 10
     * 
     * // Larger batch for bulk processing
     * limit: 100
     */
    @ApiProperty({
        type: () => Number,
        description: 'Maximum number of messages to retrieve',
        required: true
    })
    limit: number

    /**
     * Error Handling Callback
     * @type {IHashgraph.ILedger.IHCS.ICallback.IError}
     * @description Function called when message retrieval encounters an error.
     * Implements error handling and recovery strategies.
     * 
     * Error Handling Requirements:
     * - Must be a valid function
     * - Should implement appropriate error logging
     * - Should handle retries if appropriate
     * - Should maintain system stability
     * 
     * @example
     * callbackError: (error) => {
     *   // Error logging
     *   console.error('Message retrieval failed:', error);
     *   logError(error);
     * 
     *   // Retry logic
     *   if (isRetryableError(error)) {
     *     setTimeout(() => retryOperation(), 5000);
     *   } else {
     *     notifyAdministrator(error);
     *   }
     * }
     */
    @ApiProperty({
        type: () => 'function',
        description: 'Callback for message retrieval error',
        required: true
    })
    callbackError: IHashgraph.ILedger.IHCS.ICallback.IError

    /**
     * Message Information Constructor
     * @constructor
     * @description Initializes a new message information configuration instance
     * with comprehensive validation of all parameters.
     * 
     * Validation Rules:
     * - Callbacks must be valid functions
     * - Sequence numbers must be valid integers
     * - Start must be non-negative
     * - End must be greater than or equal to start
     * - Limit must be positive
     * 
     * @throws {Error} When callbacks are not valid functions
     * @throws {Error} When sequence numbers are invalid
     * @throws {Error} When limit is not positive
     * 
     * @example
     * const info = new _Info(
     *   // Success handler with logging
     *   (msg) => {
     *     console.log(`Message ${msg.id} received`);
     *     processMessage(msg);
     *   },
     *   0, // Start from beginning
     *   1000, // Process first 1000 messages
     *   50, // Batch size of 50
     *   // Error handler with retry
     *   (err) => {
     *     console.error('Error:', err);
     *     if (shouldRetry(err)) {
     *       retryOperation();
     *     }
     *   }
     * );
     */
    constructor(
        callbackSuccess: IHashgraph.ILedger.IHCS.ICallback.ISuccess,
        start: number,
        end: number,
        limit: number,
        callbackError: IHashgraph.ILedger.IHCS.ICallback.IError
    ) {
        // Validate and assign callback success function
        if (typeof callbackSuccess !== 'function') {
            throw new Error('callbackSuccess must be a function')
        }
        this.callbackSuccess = callbackSuccess

        // Validate and assign start sequence number
        if (!Number.isInteger(start) || start < 0) {
            throw new Error('start must be a non-negative integer')
        }
        this.start = start

        // Validate and assign end sequence number
        if (!Number.isInteger(end) || end < start) {
            throw new Error('end must be an integer greater than or equal to start')
        }
        this.end = end

        // Validate and assign message limit
        if (!Number.isInteger(limit) || limit <= 0) {
            throw new Error('limit must be a positive integer')
        }
        this.limit = limit

        // Validate and assign callback error function
        if (typeof callbackError !== 'function') {
            throw new Error('callbackError must be a function')
        }
        this.callbackError = callbackError
    }
}