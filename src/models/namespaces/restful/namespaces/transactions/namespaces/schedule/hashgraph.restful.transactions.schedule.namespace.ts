import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/hashgraph.restful.transactions.schedule.models.entity.model';
import { _Response } from './models/hashgraph.restful.transactions.schedule.models.response.model';
import { _Signature } from './models/hashgraph.restful.transactions.schedule.models.signature.model';

/**
 * @file hashgraph.restful.transactions.schedule.namespace.ts
 * @namespace _Schedule
 * @description Comprehensive namespace for managing scheduled transactions in the Hedera network.
 * Implements IHashgraph.IRestful.ITransactions.ISchedule to provide
 * a complete set of models for working with scheduled transactions, including:
 * - Schedule creation and management
 * - Multi-signature coordination
 * - Transaction execution control
 * - Schedule status tracking
 * 
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create and manage scheduled transactions
 * import { _Schedule } from './hashgraph.restful.transactions.schedule.namespace';
 * 
 * // Create a new schedule entity
 * const schedule = new _Schedule.Entity({
 *   schedule_id: "0.0.123456",
 *   creator_account_id: "0.0.789012",
 *   payer_account_id: "0.0.789012",
 *   transaction_body: "0x1234...",
 *   expiration_time: "1234567890.123456789",
 *   executed_at: null,
 *   deleted: false,
 *   memo: "Scheduled token transfer",
 *   signatures: [{
 *     public_key_prefix: "0x02b6...",
 *     signature: "0x1a2b...",
 *     type: "ED25519"
 *   }]
 * });
 * 
 * // Handle schedule responses
 * const response = new _Schedule.Response({
 *   schedules: [schedule],
 *   links: {
 *     next: "/api/v1/schedules?limit=25&timestamp=lt:1234567890.123456789"
 *   }
 * });
 * 
 * // Work with signatures
 * const signature = new _Schedule.Signature({
 *   public_key_prefix: "0x02b6...",
 *   signature: "0x1a2b...",
 *   type: "ED25519",
 *   timestamp: "1234567890.123456789"
 * });
 * ```
 */
export namespace _Schedule {
    /**
     * Schedule entity model
     * @class Entity
     * @extends _Entity
     * @description Comprehensive model for scheduled transactions in the Hedera network.
     * Extends _Entity to provide detailed information about a scheduled transaction, including:
     * - Schedule identification and metadata
     * - Creator and payer accounts
     * - Transaction body and execution status
     * - Signature requirements and collection
     * - Temporal controls and expiration
     * 
     * @category Schedule
     * @subcategory Entity
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a scheduled transaction
     * const schedule = new Entity({
     *   schedule_id: "0.0.123456",
     *   creator_account_id: "0.0.789012",
     *   payer_account_id: "0.0.789012",
     *   transaction_body: "0x1234...",
     *   expiration_time: "1234567890.123456789",
     *   wait_for_expiry: false,
     *   executed_at: null,
     *   deleted: false,
     *   memo: "Multi-sig token transfer",
     *   signatures: [{
     *     public_key_prefix: "0x02b6...",
     *     signature: "0x1a2b...",
     *     type: "ED25519"
     *   }]
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Schedule.Entity'
    })
    export class Entity extends _Entity { }

    /**
     * Schedule response model
     * @class Response
     * @extends _Response
     * @description Standardized response model for schedule-related queries.
     * Extends _Response to provide a consistent structure for returning
     * schedule information with pagination support. Features include:
     * - Collection of schedule entities
     * - HATEOAS-compliant pagination
     * - Automatic data transformation
     * - Type-safe response handling
     * 
     * @category Schedule
     * @subcategory Response
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a paginated schedule response
     * const response = new Response({
     *   schedules: [{
     *     schedule_id: "0.0.123456",
     *     creator_account_id: "0.0.789012",
     *     transaction_body: "0x1234...",
     *     expiration_time: "1234567890.123456789"
     *   }],
     *   links: {
     *     next: "/api/v1/schedules?limit=25&timestamp=lt:1234567890.123456789"
     *   }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Schedule.Response'
    })
    export class Response extends _Response { }

    /**
     * Schedule signature model
     * @class Signature
     * @extends _Signature
     * @description Comprehensive model for signatures associated with scheduled transactions.
     * Extends _Signature to provide detailed information about transaction signatures,
     * supporting multi-signature coordination. Features include:
     * - Public key management
     * - Signature verification
     * - Multiple signature types
     * - Temporal tracking
     * 
     * @category Schedule
     * @subcategory Signature
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a signature for a scheduled transaction
     * const signature = new Signature({
     *   public_key_prefix: "0x02b6...",
     *   signature: "0x1a2b...",
     *   type: "ED25519",
     *   timestamp: "1234567890.123456789"
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Transactions.Schedule.Signature'
    })
    export class Signature extends _Signature { }
}