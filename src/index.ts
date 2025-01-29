/**
 * @file index.ts
 * @module HashgraphTypes
 * @description Main export file for the Hashgraph types library. This module serves as the central
 * export point for all Hashgraph-related types, interfaces, and models used throughout the application.
 * It consolidates exports from both the interfaces and models namespaces to provide a unified API
 * for Hashgraph functionality.
 * @category Core
 * @since 2.0.0
 * 
 * @example
 * // Import specific types
 * import { Hashgraph } from '@hsuite/hashgraph-types';
 * 
 * // Use imported types
 * const operator = new Hashgraph.Operator({
 *   accountId: '0.0.123456',
 *   privateKey: 'private-key'
 * });
 */

/**
 * Re-exports all interfaces and types from the hashgraph.namespace interface file.
 * Includes interfaces for:
 * - Client configuration
 * - Mirror node interaction
 * - Transaction types and parameters
 * - Account information and balances
 * - Token management
 * - DID operations
 * - RESTful API interfaces
 * 
 * @see {@link IHashgraph} for the root interface namespace
 * @see {@link IHashgraph.IRestful} for RESTful API interfaces
 * @see {@link IHashgraph.IDID} for DID-related interfaces
 */
export * from './interfaces/hashgraph.namespace';

/**
 * Re-exports all models and classes from the hashgraph.namespace models file.
 * Includes implementations for:
 * - Transaction management
 * - Account operations
 * - Token operations
 * - Network interaction
 * - Identity management
 * - API integrations
 * 
 * @see {@link Hashgraph} for the root namespace
 * @see {@link Hashgraph.Restful} for RESTful API models
 * @see {@link Hashgraph.DID} for DID implementation
 */
export * from './models/hashgraph.namespace';
