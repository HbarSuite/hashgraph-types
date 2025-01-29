import { ApiSchema } from "@hsuite/nestjs-swagger"
import { _Entity } from './model/hashgraph.restful.hts.reltionship.model.entity.model'

/**
 * @file hashgraph.restful.hts.reltionship.relationship.namespace.ts
 * @namespace _Relationship
 * @memberof IHashgraph.IRestful.IHTS
 * @description This namespace provides types and classes for managing and representing
 * relationships between accounts and tokens on the Hashgraph Token Service. It enables
 * tracking and managing token associations, balances, and compliance statuses (KYC, freeze)
 * for accounts interacting with tokens.
 * @category Hashgraph
 * @subcategory Token Service
 * @since 2.0.0
 * 
 * @example
 * // Create a new token relationship entity
 * const relationship = new _Relationship.Entity({
 *   automatic_association: true,
 *   balance: 1000,
 *   created_timestamp: '2023-05-17T12:34:56.789Z',
 *   decimals: 2,
 *   freeze_status: 'UNFROZEN',
 *   kyc_status: 'GRANTED',
 *   token_id: '0.0.1234',
 *   modified_timestamp: '2023-05-17T12:34:56.789Z',
 *   pause_status: 'UNPAUSED'
 * });
 */
export namespace _Relationship {
    /**
     * Class representing the relationship between an account and a token on the Hashgraph Token Service.
     * @class Entity
     * @extends _Entity
     * @description This class encapsulates various aspects of the token-account relationship,
     * including balance, association status, KYC and freeze statuses, and other relevant information.
     * It provides a comprehensive view of how an account interacts with a specific token,
     * including compliance status and transfer capabilities.
     * 
     * @property {boolean} automatic_association - Whether the token is automatically associated with new accounts
     * @property {number} balance - Current token balance held by the account
     * @property {string} created_timestamp - ISO 8601 timestamp when the relationship was established
     * @property {number} decimals - Number of decimal places used for token fractional units
     * @property {FreezeStatusEnum} freeze_status - Current freeze status (FROZEN, UNFROZEN, etc.)
     * @property {KycStatusEnum} kyc_status - Current KYC status (GRANTED, REVOKED, etc.)
     * @property {string | null} token_id - Unique identifier of the token on the network
     * @property {string} [modified_timestamp] - ISO 8601 timestamp of last relationship modification
     * @property {PauseStatusEnum} [pause_status] - Current pause status of token transfers
     * 
     * @see {@link _Entity} For detailed property definitions and base implementation
     * @category Entity
     */
    @ApiSchema({ name: 'Hashgraph.Restful.Hts.Reltionship.Entity' })
    export class Entity extends _Entity {}
}