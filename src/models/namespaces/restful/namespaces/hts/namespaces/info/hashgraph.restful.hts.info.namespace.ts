import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './models/hashgraph.restful.hts.info.models.entity.model'

/**
 * @file hashgraph.restful.hts.info.namespace.ts
 * @namespace _Info
 * @description Contains types and classes related to token information in the Hashgraph Token Service (HTS).
 * This namespace provides structured models for handling token information data and related entities.
 * It enables querying and managing detailed token information including supply, fees, keys, and metadata.
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 *
 * @example
 * // Import and use info namespace classes
 * import { _Info } from './hashgraph.restful.hts.info.namespace';
 * 
 * // Create a new token info entity
 * const tokenInfo = new _Info.Entity({
 *   token_id: "0.0.1234567",
 *   name: "My Token",
 *   symbol: "TKN",
 *   decimals: 8,
 *   total_supply: "1000000",
 *   max_supply: "10000000",
 *   treasury_account_id: "0.0.98765",
 *   admin_key: { key: "302a300506032b6570032100..." },
 *   freeze_status: "NOT_APPLICABLE",
 *   kyc_status: "NOT_APPLICABLE"
 * });
 */
export namespace _Info {
    /**
     * Token Information Entity
     * @class Entity
     * @extends {_Entity}
     * @description Represents detailed information about a token in the Hashgraph network.
     * Contains comprehensive token data including identification, supply information,
     * administrative keys, fee schedules, token status flags (freeze, KYC, pause),
     * and other metadata. This class provides a complete view of a token's configuration
     * and current state.
     * @property {string} token_id - Unique identifier of the token
     * @property {string} name - Human-readable name of the token
     * @property {string} symbol - Token symbol or ticker
     * @property {number} decimals - Number of decimal places
     * @property {string} total_supply - Current total supply of the token
     * @property {string} [max_supply] - Maximum allowed supply of the token
     * @property {string} treasury_account_id - Account ID of the treasury
     * @property {object} [admin_key] - Administrative key for the token
     * @property {string} freeze_status - Current freeze status
     * @property {string} kyc_status - Current KYC status
     * @see {@link _Entity} for detailed property definitions
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Info.Entity' })
    export class Entity extends _Entity {}
}