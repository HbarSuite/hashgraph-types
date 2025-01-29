import { _IEntity } from './interfaces/hashgraph.restful.custom_fees.fixed.entity.interface';

/**
 * @file hashgraph.restful.custom_fees.fixed.namespace.ts
 * @namespace IHashgraph.IRestful._ICustomFees._IFixed
 * @description Defines the namespace for fixed fee configurations in the Hedera REST API
 */

/**
 * Namespace for fixed fee configurations
 * @namespace _IFixed
 * @description Provides type definitions and interfaces for managing fixed fee structures
 * in token transactions. Fixed fees specify exact amounts to be charged, denominated in
 * either HBAR or other tokens, with support for collector accounts and exemption rules.
 * @category Interfaces
 * @subcategory REST
 * @public
 * 
 * @example
 * ```typescript
 * const fixedFee: _IFixed.IEntity = {
 *   all_collectors_are_exempt: false,
 *   amount: 100,
 *   collector_account_id: "0.0.1234",
 *   denominating_token_id: "0.0.5678"
 * };
 * ```
 */
export namespace _IFixed {
    /**
     * Type definition for fixed fee entities
     * @type {_IEntity}
     * @description Represents the structure of a fixed fee configuration, including:
     * - The exact fee amount and its denominating token
     * - The collector account that receives the fee
     * - Settings for collector exemptions
     * - Support for both HBAR and custom token denominations
     * @memberof _IFixed
     * @see {@link _IEntity} for detailed property definitions
     */
    export type IEntity = _IEntity
}