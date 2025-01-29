import { ApiSchema } from "@hsuite/nestjs-swagger";
import { _TokensInner } from './models/hashgraph.commons.balance.models.balance-tokens-inner.model';
import { _Entity } from './models/hashgraph.commons.balance.models.entity.model';

/**
 * Namespace containing interfaces and classes related to balance information in the Hashgraph network
 * @module Hashgraph.Commons
 * @namespace Hashgraph.Commons.Balance
 * @description This namespace provides classes and interfaces for handling balance-related data
 * in the Hashgraph network, including account balances and token holdings.
 * Supports both HBAR and custom token balance tracking.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 */
export namespace _Balance {
    /**
     * Class representing balance information for a Hashgraph account
     * @class Entity
     * @extends {_Entity}
     * @description Provides detailed balance information for an account, including:
     * - Timestamp of the balance snapshot
     * - Account balance in tinybars
     * - Associated token balances
     * - Validation of balance data integrity
     * @memberof _Balance
     * @public
     * @since 2.0.0
     * 
     * @example
     * const balance = new _Balance.Entity({
     *   timestamp: "2023-04-15T14:30:00Z",
     *   balance: 1000000000,
     *   tokens: [
     *     { token_id: "0.0.1234", balance: 1000000 }
     *   ]
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.Balance.Entity'
    })
    export class Entity extends _Entity {}

    /**
     * Class representing token balance information
     * @class TokensInner
     * @extends {_TokensInner}
     * @description Models the balance and token ID information for tokens associated with an account.
     * Used within the Entity class to represent individual token holdings.
     * Features include:
     * - Token ID validation
     * - Balance amount tracking
     * - Support for null token IDs
     * @memberof _Balance
     * @public
     * @since 2.0.0
     * 
     * @example
     * const tokenBalance = new _Balance.TokensInner({
     *   token_id: "0.0.1234",
     *   balance: 1000000
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.Balance.TokensInner'
    })
    export class TokensInner extends _TokensInner {}
}