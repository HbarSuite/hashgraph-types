import { _IKey } from '../hashgraph.commons.key.namespace';

/**
 * Key Entity Interface
 * @export
 * @interface _IEntity
 * @namespace IHashgraph.ICommons.IKey._IEntity
 * @description Represents a single key entity in the Hashgraph network, containing the key type and value.
 * This interface defines the structure for cryptographic keys used in various network operations,
 * supporting multiple key types and formats.
 * @property {_IKey.TypeEnum} _type - The type of the Hashgraph key (e.g., ECDSA_SECP256K1, ED25519)
 * @property {string} key - The string representation of the key value
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Key
 * @public
 * @remarks
 * Key entities are fundamental building blocks for cryptographic operations in the Hedera network.
 * They support various key types and formats, ensuring compatibility with different cryptographic
 * algorithms and use cases.
 * @see _IKey.TypeEnum
 * @see _IKey.IList
 * @example
 * ```typescript
 * const keyEntity: _IEntity = {
 *   _type: _IKey.TypeEnum.Ed25519,
 *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 * };
 * ```
 */
export interface _IEntity {
    /**
     * The type of the key
     * @property {_IKey.TypeEnum} _type
     * @memberof _IEntity
     * @type {_IKey.TypeEnum}
     * @description Specifies the type of the Hashgraph key (e.g., ECDSA_SECP256K1, ED25519, PROTOBUF_ENCODED).
     * This determines the cryptographic algorithm and format used for the key.
     * @optional
     * @since 2.0.0
     * @throws {Error} If the key type is not supported or invalid
     * @remarks
     * - Must be a valid value from TypeEnum
     * - Determines key validation rules
     * - Affects cryptographic operations
     * @see _IKey.TypeEnum
     * @example _IKey.TypeEnum.Ed25519
     */
    _type?: _IKey.TypeEnum;

    /**
     * The actual key value
     * @property {string} key
     * @memberof _IEntity
     * @type {string}
     * @description The string representation of the cryptographic key in hexadecimal format.
     * Must conform to the format specified by the key type.
     * @optional
     * @since 2.0.0
     * @throws {Error} If key format doesn't match the specified type
     * @remarks
     * - Must be in valid hexadecimal format
     * - Length depends on key type
     * - Should be properly secured when in use
     * - Never expose private keys in logs or public data
     * @example "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     */
    key?: string;
}