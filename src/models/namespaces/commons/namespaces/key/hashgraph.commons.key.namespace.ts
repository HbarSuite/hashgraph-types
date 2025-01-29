import { _Entity } from './models/hashgraph.commons.key.models.entity.model';
import { _List } from './models/hashgraph.commons.key.models.list.model';
import { ApiSchema } from "@hsuite/nestjs-swagger";

/**
 * Namespace containing interfaces and classes related to cryptographic keys in the Hashgraph network
 * @module Hashgraph.Commons
 * @namespace Hashgraph.Commons.Key
 * @description This namespace provides classes and interfaces for handling cryptographic keys
 * in the Hashgraph network, including single keys and multi-signature key lists.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 */
export namespace _Key {
    /**
     * Class representing a single cryptographic key in the Hashgraph network
     * @class Entity
     * @extends {_Entity}
     * @description Provides functionality for managing individual cryptographic keys, including:
     * - Key type (e.g. Ed25519)
     * - Key value in string format
     * - Validation of key formats and types
     * @memberof _Key
     * @public
     * @since 2.0.0
     * 
     * @example
     * const key = new _Key.Entity({
     *   _type: IHashgraph.ICommons.IKey.TypeEnum.Ed25519,
     *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.Key.Entity'
    })
    export class Entity extends _Entity {}

    /**
     * Class representing a list of keys for multi-signature operations
     * @class List
     * @extends {_List}
     * @description Models a collection of cryptographic keys with an associated threshold value
     * for multi-signature transactions. Features include:
     * - Array of public keys
     * - Threshold value specifying minimum required signatures
     * - Validation of key list integrity
     * @memberof _Key
     * @public
     * @since 2.0.0
     * 
     * @example
     * const keyList = new _Key.List({
     *   key: [
     *     "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
     *     "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"
     *   ],
     *   threshold: 2
     * });
     */
    @ApiSchema({
        name: 'Hashgraph.Commons.Key.List'
    })
    export class List extends _List {}
}