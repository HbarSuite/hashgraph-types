import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Details } from './models/hashgraph.restful.transactions.models.details.model';
import { _Entity } from './models/hashgraph.restful.transactions.models.entity.model';
import { _Id } from './models/hashgraph.restful.transactions.models.id.model';
import { _ResponseById } from './models/hashgraph.restful.transactions.models.response-by-id.model';
import { _Response } from './models/hashgraph.restful.transactions.models.response.model';

/**
 * @file hashgraph.restful.transactions.transaction.namespace.ts
 * @namespace _Transaction
 * @description Comprehensive namespace for Hedera transaction-related models and types.
 * Implements standardized interfaces and classes for managing all aspects of transactions
 * within the Hedera network through RESTful APIs. Features include:
 * - Transaction creation and submission
 * - Status tracking and queries
 * - Fee calculation and management
 * - Response handling and pagination
 * - Detailed transaction information
 * 
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create and manage transaction entities
 * const txEntity = new _Transaction.Entity({
 *   transaction_id: "0.0.123456@1234567890.123456789",
 *   type: "CRYPTOTRANSFER",
 *   result: "SUCCESS",
 *   consensus_timestamp: "1234567890.123456789",
 *   charged_tx_fee: "1000000",
 *   memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U="
 * });
 * 
 * // Query transaction details
 * const txDetails = new _Transaction.Details({
 *   transaction_id: "0.0.123456@1234567890.123456789",
 *   charged_tx_fee: "1000000",
 *   valid_duration_seconds: 120,
 *   node: "0.0.3",
 *   memo: "Transfer to Alice"
 * });
 * ```
 */
export namespace _Transaction {
    /**
     * Core transaction entity model
     * @class Entity
     * @extends {_Entity}
     * @description Comprehensive model representing a transaction entity in the Hedera network.
     * Provides detailed transaction information including:
     * - Transaction identification
     * - Type and status
     * - Timestamps and durations
     * - Fee information
     * - Consensus details
     * - Entity references
     * 
     * @example
     * ```typescript
     * // Create a transaction entity
     * const entity = new Entity({
     *   transaction_id: "0.0.123456@1234567890.123456789",
     *   type: "CRYPTOTRANSFER",
     *   result: "SUCCESS",
     *   consensus_timestamp: "1234567890.123456789",
     *   valid_start_timestamp: "1234567890.123456789",
     *   charged_tx_fee: "1000000",
     *   max_fee: "2000000",
     *   memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U=",
     *   node: "0.0.3",
     *   scheduled: false
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Transactions.Transaction.Entity' })
    export class Entity extends _Entity {}

    /**
     * Transaction collection response model
     * @class Response
     * @extends {_Response}
     * @description Standardized response structure for transaction queries.
     * Provides paginated access to transaction records with:
     * - Collection of transaction entities
     * - HATEOAS-compliant pagination
     * - Automatic data transformation
     * - Type-safe response handling
     * 
     * @example
     * ```typescript
     * // Create a paginated transaction response
     * const response = new Response({
     *   transactions: [{
     *     transaction_id: "0.0.123456@1234567890.123456789",
     *     type: "CRYPTOTRANSFER",
     *     result: "SUCCESS",
     *     consensus_timestamp: "1234567890.123456789"
     *   }],
     *   links: {
     *     next: "/api/v1/transactions?limit=25&timestamp=lt:1234567890.123456789"
     *   }
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Transactions.Transaction.Response' })
    export class Response extends _Response {}

    /**
     * Single transaction response model
     * @class ResponseById
     * @extends {_ResponseById}
     * @description Specialized response structure for single transaction queries.
     * Provides comprehensive transaction details including:
     * - Core transaction data
     * - Associated entities
     * - Transfer information
     * - Status and results
     * 
     * @example
     * ```typescript
     * // Create a single transaction response
     * const responseById = new ResponseById({
     *   transactions: [{
     *     transaction_id: "0.0.123456@1234567890.123456789",
     *     consensus_timestamp: "1234567890.123456789",
     *     charged_tx_fee: "1000000",
     *     transfers: [{
     *       account: "0.0.123456",
     *       amount: "1000000000"
     *     }],
     *     memo_base64: "VHJhbnNmZXIgdG8gQWxpY2U="
     *   }]
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Transactions.Transaction.ResponseById' })
    export class ResponseById extends _ResponseById {}

    /**
     * Detailed transaction information model
     * @class Details
     * @extends {_Details}
     * @description Comprehensive model for detailed transaction information.
     * Captures all aspects of a transaction including:
     * - Transaction identification
     * - Fee structures
     * - Node assignment
     * - Duration settings
     * - Memo and metadata
     * - Transfer details
     * 
     * @example
     * ```typescript
     * // Create detailed transaction information
     * const details = new Details({
     *   transaction_id: "0.0.123456@1234567890.123456789",
     *   charged_tx_fee: "1000000",
     *   valid_duration_seconds: 120,
     *   node: "0.0.3",
     *   max_fee: "2000000",
     *   memo: "Transfer to Alice",
     *   entity_id: "0.0.789012",
     *   transfers: [{
     *     account: "0.0.123456",
     *     amount: "1000000000"
     *   }]
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Transactions.Transaction.Details' })
    export class Details extends _Details {}

    /**
     * Transaction identifier model
     * @class Id
     * @extends {_Id}
     * @description Standardized model for Hedera transaction identifiers.
     * Provides structured representation of transaction IDs with:
     * - Account identification
     * - Temporal information
     * - Scheduling status
     * - Nonce management
     * 
     * @example
     * ```typescript
     * // Create a transaction identifier
     * const transactionId = new Id({
     *   account_id: "0.0.123456",
     *   valid_start_timestamp: "1234567890.123456789",
     *   nonce: 1,
     *   scheduled: false,
     *   payment_transaction_body: {
     *     node_account_id: "0.0.3",
     *     transaction_fee: "1000000"
     *   }
     * });
     * ```
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Transactions.Transaction.Id' })
    export class Id extends _Id {}
}