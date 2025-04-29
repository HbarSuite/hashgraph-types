/**
 * @file hashgraph.restful.hts.fungible.entity.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model class for Fungible Token entities in the Hashgraph Token Service (HTS) REST API.
 * This class implements the core properties of a fungible token holding.
 * @category Models
 * @subcategory HTS
 * @since 2.0.0
 */

import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Fungible Token Entity Model
 * @class _Entity
 * @implements {_IEntity}
 * @description Represents a fungible token holding on the Hashgraph Token Service (HTS).
 * This class implements the essential properties that characterize a fungible token balance, including:
 * - Account ownership information
 * - Token balance and decimal precision
 * - Token identification
 * @category Models
 * @subcategory HTS
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a fungible token holding
 * const tokenHolding = new _Entity({
 *   account: "0.0.123456",      // Account holding the tokens
 *   balance: "1000000",         // Raw balance (before decimal adjustment)
 *   decimals: 8,                // Decimal precision
 *   token_id: "0.0.789012"      // Token identifier
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.IHTS.IFungible.IEntity {
    /**
     * Account ID
     * @type {string}
     * @description The Hedera account ID that holds this token balance.
     * Format: `shard.realm.num` (e.g., "0.0.123456")
     * @required true
     * @example "0.0.123456"
     * @memberof _Entity
     * @since 2.0.0
     */
    account: string;

    /**
     * Token Balance
     * @type {string}
     * @description The raw balance of tokens held by the account.
     * Represented as a string to handle large numbers precisely.
     * To get the actual balance, divide by 10^decimals.
     * @required true
     * @example "1000000"
     * @memberof _Entity
     * @since 2.0.0
     */
    balance: string;

    /**
     * Decimal Precision
     * @type {number}
     * @description The number of decimal places used to represent the token.
     * Used to convert the raw balance to its actual value.
     * @required true
     * @example 8
     * @memberof _Entity
     * @since 2.0.0
     */
    decimals: number;

    /**
     * Creates a new fungible token entity instance
     * @param {Partial<_IEntity>} props - The properties to initialize the entity with
     */
    constructor(props: Partial<IHashgraph.IRestful.IHTS.IFungible.IEntity> = {}) {
        if(!props.account) {
            throw new Error('Account is required');
        }
        this.account = props.account;

        if(props.balance === undefined || props.balance === null) {
            throw new Error('Balance is required');
        }
        this.balance = props.balance;

        if(!props.decimals) {
            throw new Error('Decimals are required');
        }
        this.decimals = props.decimals;
    }
}