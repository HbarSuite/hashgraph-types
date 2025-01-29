import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Entity } from './models/hashgraph.restful.staking.reward.models.entity.model';
import { _Response } from './models/hashgraph.restful.staking.reward.models.response.model';
import { _Transfer } from './models/hashgraph.restful.staking.reward.models.transfer.model';

/**
 * @file hashgraph.restful.staking.reward.namespace.ts
 * @namespace _Reward
 * @description Comprehensive namespace for managing staking rewards in the Hedera network.
 * Provides a complete set of models and types for:
 * - Reward response handling
 * - Individual reward entities
 * - Reward transfer operations
 * 
 * All models include built-in validation for:
 * - Account ID formats (shard.realm.num)
 * - Amount ranges and calculations
 * - Timestamp formatting
 * - Data integrity checks
 * @category Namespaces
 * @subcategory Staking
 * @since 2.0.0
 */
export namespace _Reward {
    /**
     * Staking Rewards Response Model
     * @typedef {_Response} Response
     * @description Structured response model for staking reward queries.
     * Features:
     * - Paginated reward listings
     * - Comprehensive reward details
     * - Navigation links for result sets
     * - Automatic validation
     * @extends {_Response}
     * @category Models
     * @subcategory Response
     * @example
     * ```typescript
     * const response = new Response({
     *   rewards: [
     *     { account_id: '0.0.1234', amount: 100000000, timestamp: '2023-01-01T00:00:00Z' }
     *   ],
     *   links: { next: 'https://api.hedera.com/staking/rewards?page=2' }
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Staking.Reward.Response'
    })  
    export class Response extends _Response {}

    /**
     * Staking Reward Entity Model
     * @typedef {_Entity} Entity
     * @description Core model representing individual staking reward records.
     * Features:
     * - Account identification
     * - Reward amount tracking
     * - Timestamp recording
     * - Automatic validation
     * 
     * Enforces:
     * - Valid account ID format
     * - Non-negative amounts
     * - ISO 8601 timestamps
     * @extends {_Entity}
     * @category Models
     * @subcategory Entity
     * @example
     * ```typescript
     * const entity = new Entity({
     *   account_id: '0.0.1234',
     *   amount: 100000000, // 1 HBAR
     *   timestamp: '2023-01-01T00:00:00Z'
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Staking.Reward.Entity'
    })
    export class Entity extends _Entity {}

    /**
     * Staking Reward Transfer Model
     * @typedef {_Transfer} Transfer
     * @description Model for handling staking reward transfer operations.
     * Features:
     * - Account identification
     * - Transfer amount specification
     * - Automatic validation
     * 
     * Enforces:
     * - Valid account formats
     * - Non-negative amounts
     * - Required field validation
     * @extends {_Transfer}
     * @category Models
     * @subcategory Transfer
     * @example
     * ```typescript
     * const transfer = new Transfer({
     *   account: '0.0.1234',
     *   amount: 100000000 // 1 HBAR
     * });
     * ```
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Staking.Reward.Transfer'
    })
    export class Transfer extends _Transfer {}
}
