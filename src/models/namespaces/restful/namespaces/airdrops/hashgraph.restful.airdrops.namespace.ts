import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _Entity } from './models/hashgraph.restful.airdrops.models.entity.model';
import { _Response } from './models/hashgraph.restful.airdrops.models.response.model';

/**
 * @file airdrops.namespace.ts
 * @namespace _Airdrops 
 * @description Namespace for Hashgraph airdrop-related models and functionality.
 * Contains model definitions for airdrop responses and entities, used to manage
 * and track token distribution events (airdrops) on the Hedera network.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link Entity} for airdrop entity details
 * @see {@link Response} for airdrop response details
 * 
 * @example
 * // Create a new airdrop entity
 * const airdrop = new _Airdrops.Entity({
 *   token_id: "0.0.1234",
 *   amount: 100,
 *   recipient_account_id: "0.0.5678"
 * });
 */
export namespace _Airdrops {
    /**
     * Airdrop Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents an airdrop entity in the Hashgraph network.
     * This class defines the structure for token distribution events, including:
     * - Token identification
     * - Distribution amounts
     * - Recipient details
     * @see {@link _Entity} for the complete implementation details
     * 
     * @example
     * // Create an airdrop with specific token and amount
     * const airdrop = new Entity({
     *   token_id: "0.0.1234",
     *   amount: 100,
     *   recipient_account_id: "0.0.5678"
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Airdrops.Entity'
    })
    export class Entity extends _Entity {}

    /**
     * Airdrop Response Class
     * @class Response
     * @extends {_Response}
     * @description Represents the response structure for airdrop-related operations.
     * This class defines the format of responses returned by airdrop queries and operations,
     * including success status, transaction details, and any relevant metadata.
     * @see {@link _Response} for the complete implementation details
     * 
     * @example
     * // Handle an airdrop response
     * const response = new Response({
     *   success: true,
     *   transaction_id: "0.0.1234@1234567890.000000000"
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.Airdrops.Response'
    })
    export class Response extends _Response {}
}
