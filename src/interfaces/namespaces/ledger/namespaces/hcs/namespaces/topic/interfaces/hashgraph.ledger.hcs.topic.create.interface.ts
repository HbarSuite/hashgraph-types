/**
 * @file create.interface.ts
 * @module IHashgraph.ILedger.IHCS.ITopic.ICreate
 * @description Defines the interface for creating topics on Hedera Consensus Service (HCS)
 * @author HBarSuite
 * @version 2.0.0
 * @since 2.0.0
 * @category Topic Operations
 * @subcategory Topic Creation
 */

import { KeyList, PublicKey } from "@hashgraph/sdk"

/**
 * Topic creation interface for HCS
 * @interface _ICreate
 * @description Defines the structure for creating new topics on the Hedera
 * Consensus Service (HCS). Enables creation of secure messaging channels with
 * configurable permissions and metadata.
 * 
 * @remarks
 * Key features:
 * - Access control
 * - Message validation
 * - Metadata storage
 * - Consensus tracking
 * 
 * Use cases:
 * - Secure messaging
 * - Audit logging
 * - Event streaming
 * - Data validation
 * 
 * Requirements:
 * - Valid keys
 * - Network fees
 * - Proper permissions
 * - Resource limits
 * 
 * Effects:
 * - Creates topic
 * - Assigns permissions
 * - Stores metadata
 * - Enables messaging
 * 
 * @example
 * ```typescript
 * // Basic topic creation
 * const basicTopic: _ICreate = {
 *   key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
 *   memo: "Secure messaging channel for application events"
 * };
 * 
 * // Advanced topic with multi-sig
 * const advancedTopic: _ICreate = {
 *   key: new KeyList([
 *     PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
 *     PublicKey.fromString("302a300506032b6570032100214e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888")
 *   ]),
 *   memo: "Multi-sig controlled messaging channel",
 *   validatorConsensusTimestamp: "1234567890.123456789"
 * };
 * ```
 */
export interface _ICreate {
    /**
     * Topic access control key
     * @property {PublicKey | KeyList} key
     * @description The key or key list that controls access and permissions for the topic.
     * Can be a single public key for simple control or a key list for multi-signature requirements.
     * @type {PublicKey | KeyList}
     * @memberof _ICreate
     * @optional
     * @remarks
     * Key types:
     * - Single public key
     * - Multi-sig key list
     * - Threshold key list
     * - Weighted key list
     * 
     * Permissions:
     * - Submit messages
     * - Update topic
     * - Delete topic
     * - Manage access
     * 
     * @example
     * ```typescript
     * // Single key
     * key: PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777")
     * 
     * // Multi-sig key list
     * key: new KeyList([
     *   PublicKey.fromString("302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"),
     *   PublicKey.fromString("302a300506032b6570032100214e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf8888")
     * ])
     * ```
     */
    key?: PublicKey | KeyList

    /**
     * Topic description
     * @property {string} memo
     * @description A descriptive note or memo attached to the topic.
     * Used to provide context, purpose, or other relevant information.
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @remarks
     * Best practices:
     * - Clear description
     * - Version info
     * - Usage guidelines
     * - Contact details
     * 
     * Limitations:
     * - 100 bytes max
     * - UTF-8 encoding
     * - No special formatting
     * - Plain text only
     * 
     * @example
     * ```typescript
     * memo: "Application event log v1.0 - Production environment"
     * ```
     */
    memo?: string

    /**
     * Consensus timestamp
     * @property {string} validatorConsensusTimestamp
     * @description The consensus timestamp for topic validation.
     * Used to track when consensus was reached on topic creation.
     * @type {string}
     * @memberof _ICreate
     * @optional
     * @remarks
     * Format:
     * - Seconds.nanoseconds
     * - UTC timezone
     * - High precision
     * - Network synced
     * 
     * Usage:
     * - Creation tracking
     * - Validation timing
     * - Audit records
     * - Sequence control
     * 
     * @example
     * ```typescript
     * validatorConsensusTimestamp: "1234567890.123456789"
     * ```
     */
    validatorConsensusTimestamp?: string
}