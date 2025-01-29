import { _IEntity } from './interfaces/hashgraph.commons.key.entity.interface';
import { _IList } from './interfaces/hashgraph.commons.key.list.interface';
import { _TypeEnum } from './interfaces/hashgraph.commons.key.type-enum.interface';

/**
 * Key Namespace
 * @namespace _IKey
 * @description Namespace containing interfaces and enums related to Hashgraph cryptographic keys.
 * This namespace provides comprehensive types for managing different types of cryptographic
 * keys, key lists, and multi-signature configurations in the Hedera network.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Cryptography
 * @public
 * @remarks
 * The Key namespace is fundamental for cryptographic operations in the Hedera network.
 * It supports various key types (ED25519, ECDSA, etc.) and provides structures for
 * both single-key and multi-key (threshold) operations.
 * @see _IEntity
 * @see _IList
 * @see _TypeEnum
 * @example
 * ```typescript
 * import { _IKey } from './key.namespace';
 * 
 * // Create a single key entity
 * const singleKey: _IKey.IEntity = {
 *   type: _IKey.TypeEnum.ED25519,
 *   key: "302a300506032b6570032100..."
 * };
 * 
 * // Create a multi-signature key list
 * const multiSigKeys: _IKey.IList = {
 *   threshold: 2,
 *   keys: [
 *     { type: _IKey.TypeEnum.ED25519, key: "key1..." },
 *     { type: _IKey.TypeEnum.ED25519, key: "key2..." },
 *     { type: _IKey.TypeEnum.ED25519, key: "key3..." }
 *   ]
 * };
 * ```
 */
export namespace _IKey {
    /**
     * Key Type Enumeration
     * @type {_TypeEnum}
     * @description Enum for supported cryptographic key types in the Hashgraph network.
     * Defines the various types of keys that can be used for cryptographic operations.
     * @memberof _IKey
     * @enum {string}
     * @readonly
     * @remarks
     * - Each type represents a different cryptographic algorithm
     * - Used for key validation and operation selection
     * - Extensible for future key types
     * @see _TypeEnum
     */
    export import TypeEnum = _TypeEnum;

    /**
     * Key Entity Type
     * @type {_IEntity}
     * @description Represents a single cryptographic key entity in the Hashgraph network.
     * Contains both the key type and the actual key value.
     * @memberof _IKey
     * @interface IEntity
     * @property {TypeEnum} type - The cryptographic algorithm type of the key
     * @property {string} key - The actual key value in the appropriate format
     * @remarks
     * - Used for single-signature operations
     * - Key format must match the specified type
     * - Supports various cryptographic algorithms
     * @see _IEntity
     */
    export type IEntity = _IEntity;

    /**
     * Key List Type
     * @type {_IList}
     * @description Represents a list of keys with a threshold for multi-signature operations.
     * Provides support for complex signing scenarios requiring multiple signatures.
     * @memberof _IKey
     * @interface IList
     * @property {number} threshold - Minimum number of required signatures
     * @property {Array<IEntity>} keys - Array of key entities for signing
     * @remarks
     * - Used for multi-signature operations
     * - Threshold defines minimum required signatures
     * - Supports mixed key types in the list
     * @see _IList
     */
    export type IList = _IList;
}