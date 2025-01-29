import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _ChunkInfo } from './models/hashgraph.commons.models.chunk_info.model'
import { _Balance } from './namespaces/balance/hashgraph.commons.balance.namespace'
import { _Key } from './namespaces/key/hashgraph.commons.key.namespace'
import { _StateProof } from './namespaces/state-proof/hashgraph.commons.state_proof.namespace'

/**
 * Commons Interface Namespace containing various Hashgraph-related interfaces and types
 * @module Hashgraph
 * @namespace _Commons
 * @description Contains common interfaces, types and utilities used across the Hashgraph SDK.
 * Provides functionality for working with keys, balances, chunked responses and state proofs.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 * 
 * @example
 * // Import and use commons namespace
 * import { _Commons } from './hashgraph.commons.namespace';
 * 
 * // Access key types
 * const key: _Commons.Key.Entity = new _Commons.Key.Entity({
 *   _type: "Ed25519",
 *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 * });
 * 
 * // Access balance types 
 * const balance = new _Commons.Balance.Entity({
 *   balance: 100,
 *   tokens: [{
 *     tokenId: "0.0.1",
 *     balance: 50
 *   }]
 * });
 * 
 * // Access chunk info
 * const chunkInfo = new _Commons.ChunkInfo({
 *   number: 1,
 *   total: 5
 * });
 * 
 * // Access state proofs
 * const stateProof = new _Commons.StateProof.Response.Full({
 *   address_books: ['0.0.102'],
 *   record_file: '2023-01-01.rcd'
 * });
 */
export namespace _Commons {
  /**
   * Namespace containing interfaces and enums related to Hashgraph keys
   * @name Key
   * @description Contains types for working with different key formats including:
   * - Entity: Single cryptographic key with type and value
   * - List: Collection of keys for multi-signature operations
   * - Validation and formatting utilities
   * @type {_Key}
   * @since 2.0.0
   * @memberof _Commons
   * @public
   */
  export import Key = _Key

  /**
   * Interface representing balance information
   * @name Balance
   * @description Contains types for working with account balances and token balances:
   * - Account balance in hbars
   * - Token balances with token IDs
   * - Balance snapshot information
   * - Balance history tracking
   * @type {_Balance}
   * @since 2.0.0
   * @memberof _Commons
   * @public
   */
  export import Balance = _Balance

  /**
   * Interface representing chunk information for large queries
   * @name ChunkInfo
   * @description Contains information about chunked query responses including:
   * - Current chunk number in sequence
   * - Total number of chunks in response
   * - Initial transaction ID for correlation
   * - Progress tracking and validation
   * @type {_ChunkInfo}
   * @since 2.0.0
   * @memberof _Commons
   * @public
   */
  @ApiSchema({
    name: 'Hashgraph.Commons.ChunkInfo'
  })
  export class ChunkInfo extends _ChunkInfo {}

  /**
   * Namespace containing interfaces and enums related to Hashgraph state proofs
   * @name StateProof
   * @description Contains types for working with cryptographic state proofs including:
   * - Response formats (Compact, Full)
   * - Record file information and management
   * - Signature files and verification
   * - Address book references
   * - Proof validation utilities
   * @type {_StateProof}
   * @since 2.0.0
   * @memberof _Commons
   * @public
   */
  export import StateProof = _StateProof
}