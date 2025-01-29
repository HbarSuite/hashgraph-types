import { _IError } from './interfaces/hashgraph.ledger.hcs.callback.error.interface'
import { _ISuccess } from './interfaces/hashgraph.ledger.hcs.callback.success.interface'

/**
 * Callback handling namespace for Hedera Consensus Service (HCS)
 * @namespace _ICallback
 * @description Defines the structure and requirements for HCS operation callbacks,
 * providing comprehensive support for success and error handling in asynchronous
 * consensus operations.
 * @category Hedera Services
 * @subcategory HCS Callbacks
 * @remarks
 * Key features:
 * - Success handling
 * - Error management
 * - Message validation
 * - State tracking
 * - Async processing
 * - Event ordering
 * 
 * Common use cases:
 * - Message processing
 * - Error recovery
 * - State updates
 * - Event handling
 * - Audit logging
 * - Metrics collection
 * 
 * Requirements:
 * - Error handling
 * - Type safety
 * - Async support
 * - Memory management
 * @example
 * ```typescript
 * // Success callback with message processing
 * const onSuccess: _ICallback.ISuccess = (response) => {
 *   console.log('Message received:', {
 *     consensusTimestamp: response.consensusTimestamp,
 *     sequenceNumber: response.sequenceNumber,
 *     runningHash: response.runningHash,
 *     content: response.message
 *   });
 * 
 *   // Process the message
 *   processMessage(response.message);
 * 
 *   // Update metrics
 *   updateMetrics({
 *     messageSize: response.message.length,
 *     processTime: Date.now() - response.timestamp
 *   });
 * };
 * 
 * // Error callback with recovery logic
 * const onError: _ICallback.IError = (error) => {
 *   console.error('Operation failed:', {
 *     code: error.code,
 *     message: error.message,
 *     details: error.details,
 *     timestamp: error.timestamp
 *   });
 * 
 *   // Implement recovery strategy
 *   if (error.isRetryable) {
 *     scheduleRetry(error.operation, {
 *       delay: calculateBackoff(error.attempts),
 *       maxAttempts: 3
 *     });
 *   }
 * 
 *   // Log for analysis
 *   logError({
 *     context: 'HCS_OPERATION',
 *     error: error,
 *     severity: error.severity
 *   });
 * };
 * ```
 */
export namespace _ICallback {
    /**
     * Success callback type definition
     * @type {_ISuccess}
     * @description Defines the structure for handling successful HCS operations,
     * including message processing, consensus validation, and state updates.
     * @memberof _ICallback
     * @remarks
     * Capabilities:
     * - Message validation
     * - Consensus tracking
     * - State management
     * - Metrics collection
     * - Event processing
     * - Async handling
     * @see {@link _ISuccess} for detailed callback parameters
     */
    export type ISuccess = _ISuccess

    /**
     * Error callback type definition
     * @type {_IError}
     * @description Defines the structure for handling HCS operation failures,
     * including error classification, recovery strategies, and logging.
     * @memberof _ICallback
     * @remarks
     * Features:
     * - Error classification
     * - Recovery strategies
     * - Retry handling
     * - Logging support
     * - Metrics tracking
     * - Debug information
     * @see {@link _IError} for detailed callback parameters
     */
    export type IError = _IError
}