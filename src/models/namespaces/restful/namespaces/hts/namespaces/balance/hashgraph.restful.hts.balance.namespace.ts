import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/hashgraph.restful.hts.balance.models.entity.model'
import { _Inner } from './models/hashgraph.restful.hts.balance.models.inner.model'
import { _Response } from './models/hashgraph.restful.hts.balance.models.response.model'

/**
 * @file hashgraph.restful.hts.balance.namespace.ts
 * @namespace _Balance
 * @description Contains types and classes related to token balances in the Hashgraph Token Service (HTS).
 * This namespace provides structured models for handling token balance data, responses, and related entities.
 * It enables tracking and querying of token balances across accounts in the Hedera network.
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 *
 * @example
 * // Import and use balance namespace classes
 * import { _Balance } from './hashgraph.restful.hts.balance.namespace';
 * 
 * // Create a new balance entity
 * const balanceEntity = new _Balance.Entity({
 *   token_id: "0.0.1234567",
 *   balance: 1000000,
 *   decimals: 8
 * });
 */
export namespace _Balance {
    /**
     * Token Balance Entity
     * @class Entity
     * @extends {_Entity}
     * @description Represents a single token balance entity in the Hashgraph network.
     * Contains information about token ID, balance amount, and associated metadata.
     * This class is used to track the balance of a specific token for an account.
     * @property {string} token_id - The unique identifier of the token
     * @property {number} balance - The current balance amount
     * @property {number} [decimals] - Number of decimal places for the token
     * @see {@link _Entity} for detailed property definitions
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Balance.Entity' })
    export class Entity extends _Entity {}

    /**
     * Token Balance Response
     * @class Response
     * @extends {_Response}
     * @description Represents the response structure for token balance queries.
     * Includes timestamp, balance information, and pagination links. This class
     * provides a standardized format for returning balance data from API endpoints.
     * @property {Array<Entity>} balances - List of token balance entities
     * @property {object} links - Pagination links for navigating results
     * @property {string} timestamp - Timestamp of the balance query
     * @see {@link _Response} for detailed property definitions
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Balance.Response' })
    export class Response extends _Response {}

    /**
     * Token Balance Inner
     * @class Inner
     * @extends {_Inner}
     * @description Represents the inner structure for token balance queries.
     * Contains detailed balance information including account, balance amount,
     * and decimal places. This class is used for nested balance representations
     * within other response structures.
     * @property {string} account_id - The account ID holding the balance
     * @property {number} balance - The current balance amount
     * @property {number} decimals - Number of decimal places for the token
     * @see {@link _Inner} for detailed property definitions
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Balance.Inner' })
    export class Inner extends _Inner {}
}