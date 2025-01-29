import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Info } from './models/hashgraph.ledger.hcs.topic.message.models.info.model'
import { _Submit } from './models/hashgraph.ledger.hcs.topic.message.models.submit.model'

/**
 * @file HCS Message Management Namespace
 * @namespace _Message
 * @description Comprehensive namespace for managing Hedera Consensus Service (HCS) messages.
 * Provides a complete interface for message submission, retrieval, and monitoring within
 * the HCS ecosystem.
 * 
 * Core Capabilities:
 * - Message Submission and Validation
 * - Message Information Retrieval
 * - Sequence Number Management
 * - Callback Handling
 * - Error Management
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This namespace implements the complete message lifecycle management for HCS topics,
 * ensuring secure and reliable message handling with comprehensive error management.
 * 
 * @example
 * // Message retrieval with callbacks
 * const messageInfo = new _Message.Info(
 *   (msg) => console.log('Message received:', msg),
 *   0, // Start sequence
 *   100, // End sequence
 *   50, // Batch limit
 *   (err) => console.error('Error:', err)
 * );
 * 
 * // Secure message submission with metadata
 * const messageSubmit = new _Message.Submit(
 *   "Hello Hashgraph!",
 *   signatureBytes,
 *   "0.0.123456",
 *   {
 *     validStart: timestamp,
 *     metadata: { type: "greeting" }
 *   }
 * );
 */
export namespace _Message {
    /**
     * Message Information and Retrieval Class
     * @class Info
     * @extends {_Info}
     * @description Manages message retrieval and monitoring configurations for HCS topics.
     * 
     * Configuration Options:
     * - Message Callback Handler
     * - Sequence Range Definition
     * - Batch Size Management
     * - Error Handling
     * - Filtering Options
     * 
     * @example
     * const info = new Info(
     *   // Message handler
     *   (msg) => {
     *     console.log('Sequence:', msg.sequenceNumber);
     *     console.log('Content:', msg.contents);
     *   },
     *   0, // Start from beginning
     *   100, // End at sequence 100
     *   50, // Process in batches of 50
     *   // Error handler
     *   (err) => {
     *     console.error('Retrieval error:', err.message);
     *     // Implement retry logic
     *   }
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Message.Info' })
    export class Info extends _Info {}

    /**
     * Message Submission Class
     * @class Submit
     * @extends {_Submit}
     * @description Handles secure message submission to HCS topics with comprehensive
     * validation and verification.
     * 
     * Features:
     * - Content Validation
     * - Signature Verification
     * - Metadata Management
     * - Sender Authentication
     * - Transaction Configuration
     * 
     * @example
     * const submit = new Submit(
     *   "Hello Hashgraph World!",
     *   signatureBytes,
     *   "0.0.123456",
     *   {
     *     validStart: new Date(),
     *     maxFee: "1000000", // 0.01 HBAR
     *     metadata: {
     *       type: "greeting",
     *       version: "1.0"
     *     }
     *   }
     * );
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Message.Submit' })
    export class Submit extends _Submit {}
}