import { _Reward } from './namespaces/reward/hashgraph.restful.staking.reward.namespace'

/**
 * @file hashgraph.restful.staking.namespace.ts
 * @module IHashgraph._IRestful.IStaking
 * @description Defines the core staking functionality for the Hedera network's RESTful API.
 * This module provides comprehensive types and interfaces for:
 * - Staking reward management
 * - Reward distribution tracking
 * - Staking period information
 * - Account staking relationships
 * @category Hashgraph
 * @subcategory Staking
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Import and use Staking namespace
 * import { _Staking } from './hashgraph.restful.staking.namespace';
 * 
 * // Create a reward response instance
 * const rewardResponse = new _Staking.Reward.Response({
 *   rewards: [
 *     { account_id: '0.0.1234', amount: 100000000, timestamp: '2023-01-01T00:00:00Z' }
 *   ],
 *   links: { next: null }
 * });
 * ```
 */

/**
 * Staking Interface Namespace
 * @namespace _Staking
 * @category Hashgraph
 * @subcategory Staking
 * @description Provides a comprehensive framework for managing staking operations in the Hedera network.
 * Key features include:
 * - Reward tracking and distribution
 * - Staking period management
 * - Account-node staking relationships
 * - Reward calculation and validation
 * 
 * All staking operations follow Hedera's standard formats:
 * - Account IDs: shard.realm.num (e.g., '0.0.1234')
 * - Amounts: in tinybars (1 HBAR = 100,000,000 tinybars)
 * - Timestamps: ISO 8601 format
 */
export namespace _Staking {
    /**
     * Reward Interface Namespace
     * @description Comprehensive toolkit for managing staking rewards in the Hedera network.
     * Provides structures and types for:
     * - Reward entity management
     * - Reward distribution tracking
     * - Response formatting
     * - Transfer operations
     * 
     * Features built-in validation for:
     * - Account ID formats
     * - Amount ranges
     * - Timestamp formats
     * - Data integrity
     * 
     * @see {@link _Reward} For detailed implementation of reward-related types
     * @category Staking
     * @subcategory Rewards
     */
    export import Reward = _Reward
}
