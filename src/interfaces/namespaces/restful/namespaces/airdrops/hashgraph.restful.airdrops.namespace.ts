/**
 * @file hashgraph.restful.airdrops.namespace.ts
 * @namespace IHashgraph.IRestful._IAirdrops
 * @description Defines the namespace for airdrop-related operations in the Hedera REST API
 */

import { _IEntity } from './interfaces/hashgraph.restful.airdrops.entity.interface';
import { _IResponse } from './interfaces/hashgraph.restful.airdrops.response.interface';

/**
 * Namespace for Hedera airdrop-related interfaces and types
 * @namespace _IAirdrops
 * @description Contains type definitions and interfaces for managing token airdrops through the REST API.
 * This namespace provides structures for both individual airdrop entities and API responses.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const airdropEntity: _IAirdrops.IEntity = {
 *   amount: 1000,
 *   receiver_id: "0.0.123456",
 *   sender_id: "0.0.789012",
 *   token_id: "0.0.345678",
 *   serial_number: null,
 *   timestamp: {
 *     from: "2023-01-01T00:00:00.000Z",
 *     to: "2023-12-31T23:59:59.999Z"
 *   }
 * };
 * ```
 */
export namespace _IAirdrops {
    /**
     * Type definition for an individual airdrop entity
     * @type {_IEntity}
     * @description Represents the structure of a single airdrop operation,
     * including sender, receiver, token details, and temporal constraints
     * @memberof _IAirdrops
     */
    export type IEntity = _IEntity;

    /**
     * Type definition for airdrop API responses
     * @type {_IResponse}
     * @description Represents the standardized response structure for airdrop-related API endpoints,
     * including the list of airdrop entities and pagination controls
     * @memberof _IAirdrops
     */
    export type IResponse = _IResponse;
}
