import { IHashgraph } from '../../../../../../../hashgraph.namespace'
import { _ISignature } from './hashgraph.restful.transactions.schedule.signature.interface'

/**
 * @file hashgraph.restful.transactions.schedule.entity.interface.ts
 * @module @hashgraph/sdk
 * @description Defines the structure for scheduled transaction entities in the Hashgraph Network REST API.
 * This interface represents scheduled transactions with their complete lifecycle management.
 * @category Interfaces
 * @subcategory Transactions
 * @since 2.0.0
 */

/**
 * Schedule Entity Interface
 * @interface _IEntity
 * @description Represents a scheduled transaction in the Hashgraph network.
 * This interface captures all essential information about a scheduled transaction, including:
 * - Administrative controls and keys
 * - Timing and execution parameters
 * - Transaction details and signatures
 * - Status tracking and lifecycle management
 * Used for creating and managing scheduled transactions.
 * @category Interfaces
 * @subcategory Transactions
 * @public
 * 
 * @example
 * ```typescript
 * // Example of a basic scheduled transaction
 * const schedule: _IEntity = {
 *   schedule_id: "0.0.1234",
 *   creator_account_id: "0.0.5678",
 *   payer_account_id: "0.0.9012",
 *   transaction_body: "...",
 *   expiration_time: "2024-01-01T00:00:00.000Z",
 *   wait_for_expiry: false,
 *   memo: "Scheduled token transfer"
 * };
 * 
 * // Example of a schedule with admin key and signatures
 * const scheduledMultiSig: _IEntity = {
 *   schedule_id: "0.0.1234",
 *   admin_key: {
 *     key: "302a300506032b6570032100...",
 *     type: "ED25519"
 *   },
 *   signatures: [
 *     {
 *       public_key: "302a300506032b6570032100...",
 *       signature: "7c1b9d58e...",
 *       type: "ED25519"
 *     }
 *   ],
 *   transaction_body: "..."
 * };
 * 
 * // Example of validating a schedule
 * const validateSchedule = (schedule: _IEntity): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   return (
 *     accountPattern.test(schedule.schedule_id ?? "") &&
 *     accountPattern.test(schedule.creator_account_id ?? "") &&
 *     accountPattern.test(schedule.payer_account_id ?? "") &&
 *     !!schedule.transaction_body
 *   );
 * };
 * ```
 */
export interface _IEntity {
    /**
     * Administrative Key
     * @type {IHashgraph.ICommons.IKey.IEntity}
     * @description The cryptographic key controlling schedule administration.
     * Properties:
     * - Optional field (if not set, schedule cannot be modified)
     * - Required for schedule modifications or deletions
     * - Must be a valid cryptographic key
     * - Used for administrative operations
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    admin_key?: IHashgraph.ICommons.IKey.IEntity;

    /**
     * Consensus Timestamp
     * @type {string}
     * @description The network consensus timestamp of schedule creation.
     * Format: ISO 8601 UTC timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * Properties:
     * - Optional field (set by network)
     * - Network-assigned creation time
     * - Used for schedule tracking and ordering
     * @required false
     * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "2023-12-31T23:59:59.999Z"
     */
    consensus_timestamp?: string;

    /**
     * Creator Account ID
     * @type {string}
     * @description The Hedera account ID that created the schedule.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (set during creation)
     * - Must be a valid Hedera account ID
     * - Account must exist when schedule is created
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234"
     */
    creator_account_id?: string;

    /**
     * Deletion Status
     * @type {boolean}
     * @description Indicates whether the schedule has been deleted.
     * Properties:
     * - Optional field (defaults to false)
     * - true: schedule is deleted and cannot be executed
     * - false: schedule is active
     * - Permanent state once set to true
     * @required false
     * @default false
     * @memberof _IEntity
     * @since 2.0.0
     * @example false
     */
    deleted?: boolean;

    /**
     * Execution Timestamp
     * @type {string}
     * @description The timestamp when the scheduled transaction was executed.
     * Format: ISO 8601 UTC timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * Properties:
     * - Optional field (set upon execution)
     * - Only present for executed schedules
     * - Used for execution tracking and history
     * @required false
     * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "2024-01-01T00:00:00.000Z"
     */
    executed_timestamp?: string;

    /**
     * Expiration Time
     * @type {string}
     * @description The deadline for schedule execution.
     * Format: ISO 8601 UTC timestamp (YYYY-MM-DDTHH:mm:ss.sssZ)
     * Properties:
     * - Optional field (if not set, schedule never expires)
     * - Must be a future timestamp
     * - Schedule auto-deletes after this time
     * - Used with wait_for_expiry flag
     * @required false
     * @pattern ^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "2024-12-31T23:59:59.999Z"
     */
    expiration_time?: string;

    /**
     * Schedule Memo
     * @type {string}
     * @description Additional information or notes about the schedule.
     * Properties:
     * - Optional field
     * - Maximum 100 bytes
     * - UTF-8 encoded string
     * - Used for human-readable descriptions
     * @required false
     * @maxLength 100
     * @memberof _IEntity
     * @since 2.0.0
     * @example "Monthly token distribution schedule"
     */
    memo?: string;

    /**
     * Payer Account ID
     * @type {string}
     * @description The Hedera account ID that will pay for the scheduled transaction.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field
     * - Must be a valid Hedera account ID
     * - Must have sufficient balance for fees
     * - Required signature from this account
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.5678"
     */
    payer_account_id?: string;

    /**
     * Schedule ID
     * @type {string}
     * @description The unique identifier for this schedule.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Optional field (assigned by network)
     * - Network-generated unique identifier
     * - Used for schedule operations and tracking
     * @required false
     * @pattern ^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$
     * @memberof _IEntity
     * @since 2.0.0
     * @example "0.0.1234"
     */
    schedule_id?: string;

    /**
     * Required Signatures
     * @type {Array<_ISignature>}
     * @description Collection of cryptographic signatures for schedule execution.
     * Properties:
     * - Optional field
     * - Each signature must be valid
     * - All required signatures must be present
     * - Used for multi-signature coordination
     * @required false
     * @see {@link _ISignature}
     * @memberof _IEntity
     * @since 2.0.0
     */
    signatures?: Array<_ISignature>;

    /**
     * Transaction Body
     * @type {string}
     * @description The actual transaction to be executed when scheduled.
     * Properties:
     * - Optional field
     * - Must be a valid transaction format
     * - Contains complete transaction details
     * - Immutable once schedule is created
     * @required false
     * @memberof _IEntity
     * @since 2.0.0
     */
    transaction_body?: string;

    /**
     * Expiry Wait Flag
     * @type {boolean}
     * @description Controls whether to wait for expiration time before execution.
     * Properties:
     * - Optional field (defaults to false)
     * - true: must wait for expiration_time
     * - false: execute when signatures complete
     * - Used for time-sensitive operations
     * @required false
     * @default false
     * @memberof _IEntity
     * @since 2.0.0
     * @example false
     */
    wait_for_expiry?: boolean;
}