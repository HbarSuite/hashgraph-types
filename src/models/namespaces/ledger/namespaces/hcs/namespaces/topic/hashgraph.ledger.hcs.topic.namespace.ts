import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Create } from './models/hashgraph.ledger.hcs.topic.models.create.model'
import { _Info } from './models/hashgraph.ledger.hcs.topic.models.info.model'
import { _Update } from './models/hashgraph.ledger.hcs.topic.models.update.model'
import { _Message } from './namespaces/message/hashgraph.ledger.hcs.topic.message.namespace'
import { _Delete } from './models/hashgraph.ledger.hcs.topic.models.delete.model'

/**
 * @file HCS Topic Management Namespace
 * @namespace _Topic
 * @description Comprehensive namespace for Hedera Consensus Service (HCS) topic operations.
 * Provides a complete toolkit for managing HCS topics throughout their lifecycle.
 * 
 * Core Functionalities:
 * - Topic Creation and Configuration
 * - Topic Updates and Modifications
 * - Information Retrieval
 * - Message Management
 * - Topic Deletion
 * 
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @remarks
 * This namespace implements the complete topic management lifecycle, providing
 * type-safe interfaces for all topic-related operations in the Hedera network.
 * 
 * @example
 * // Complete topic lifecycle example
 * const newTopic = new _Topic.Create({
 *   memo: "My new topic",
 *   adminKey: adminPublicKey,
 *   submitKey: submitPublicKey,
 *   autoRenewPeriod: 7776000
 * });
 */
export namespace _Topic {
    /**
     * Topic Creation Class
     * @class Create
     * @extends {_Create}
     * @description Handles the creation and initial configuration of HCS topics.
     * 
     * Configuration Options:
     * - Topic Memo: Human-readable description
     * - Admin Key: For topic management
     * - Submit Key: For message submission
     * - Auto-renew Period: Automatic renewal settings
     * - Auto-renew Account: Account for renewal fees
     * 
     * @example
     * const topic = new Create({
     *   memo: "Topic description",
     *   adminKey: adminKey,
     *   submitKey: submitKey,
     *   autoRenewPeriod: 7776000 // 90 days
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Create' })
    export class Create extends _Create { }

    /**
     * Topic Update Class
     * @class Update
     * @extends {_Update}
     * @description Manages modifications to existing HCS topics.
     * 
     * Updatable Properties:
     * - Topic Memo
     * - Admin Key
     * - Submit Key
     * - Auto-renew Settings
     * - Expiration Time
     * 
     * @example
     * const topicUpdate = new Update({
     *   topicId: "0.0.123456",
     *   memo: "Updated description",
     *   autoRenewPeriod: 15552000 // 180 days
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Update' })
    export class Update extends _Update { }

    /**
     * Topic Information Class
     * @class Info
     * @extends {_Info}
     * @description Retrieves and manages topic information and status.
     * 
     * Available Information:
     * - Topic Properties
     * - Access Keys
     * - Expiration Settings
     * - Running Status
     * - Message Sequence Numbers
     * 
     * @example
     * const topicInfo = new Info({
     *   topicId: "0.0.123456",
     *   includeKeys: true
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Info' })
    export class Info extends _Info { }

    /**
     * Topic Message Operations Namespace
     * @namespace Message
     * @type {_Message}
     * @description Comprehensive interface for managing topic messages.
     * 
     * Message Operations:
     * - Message Submission
     * - Message Retrieval
     * - Signature Verification
     * - Callback Management
     * - Sequence Tracking
     * 
     * @example
     * // Submit a signed message with metadata
     * const message = new _Topic.Message.Submit(
     *   "Hello Hashgraph!",
     *   signatureBytes,
     *   "0.0.123456",
     *   {
     *     validStart: timestamp,
     *     metadata: { type: "greeting" }
     *   }
     * );
     */
    export import Message = _Message

    /**
     * Topic Deletion Class
     * @class Delete
     * @extends {_Delete}
     * @description Manages the permanent deletion of HCS topics.
     * 
     * Features:
     * - Secure Topic Deletion
     * - Admin Key Verification
     * - Optional DAO Integration
     * - Deletion Confirmation
     * 
     * @example
     * const deleteTopic = new Delete({
     *   topicId: "0.0.123456",
     *   adminKey: adminPrivateKey
     * });
     */
    @ApiSchema({ name: 'Hashgraph.Ledger.Hcs.Topic.Delete' })
    export class Delete extends _Delete { }
}