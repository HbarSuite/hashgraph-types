import { _Entity } from './models/hashgraph.restful.custom_fees.fixed.models.entity.model';
import { ApiSchema } from "@hsuite/nestjs-swagger"

/**
 * @file fixed.namespace.ts
 * @namespace _Fixed
 * @description Namespace for fixed fee related types and models within the Hashgraph network.
 * Contains definitions for fixed fee entities that can be applied to token transactions.
 * Fixed fees are static amounts that remain constant regardless of the transaction value.
 * @category Hashgraph
 * @subcategory Restful
 * @since 2.0.0
 * @see {@link _Entity} for the fixed fee entity implementation
 * @see {@link _CustomFees} for the parent namespace
 * 
 * @example
 * // Create a new fixed fee entity
 * const fixedFee = new _Fixed.Entity({
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678",
 *   all_collectors_are_exempt: false
 * });
 */
export namespace _Fixed {
    /**
     * Fixed Fee Entity Class
     * @class Entity
     * @extends {_Entity}
     * @description Represents a fixed fee configuration in the Hashgraph network.
     * This class extends the base Entity model to provide fixed fee functionality including:
     * - Fee amount specification
     * - Collector account assignment
     * - Token denomination settings
     * - Collector exemption rules
     * @see {@link _Entity} for the complete implementation details
     * 
     * @example
     * // Instantiate a fixed fee
     * const fee = new Entity({
     *   amount: 50,
     *   collector_account_id: "0.0.1234",
     *   denominating_token_id: null, // HBAR fee
     *   all_collectors_are_exempt: false
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Restful.CustomFees.Fixed.Entity'
    })
    export class Entity extends _Entity { }
}