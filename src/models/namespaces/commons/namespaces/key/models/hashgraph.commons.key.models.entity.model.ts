import { _Key } from '../hashgraph.commons.key.namespace';
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsEnum, IsString, IsOptional } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Class representing a key entity in the Hashgraph network
 * @class _Entity
 * @export _Entity
 * @implements {IHashgraph.ICommons.IKey.IEntity}
 * @description Represents a cryptographic key entity used in the Hashgraph network.
 * Supports different key types like Ed25519 and stores the key value.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.Key.Entity
 * 
 * @property {IHashgraph.ICommons.IKey.TypeEnum} [_type] - The type of cryptographic key (e.g. Ed25519)
 * @property {string} [key] - The string representation of the key value in hexadecimal format
 * 
 * @throws {Error} Will throw an error if key type is invalid during construction
 * @throws {Error} Will throw an error if key is not a string during construction
 * 
 * @example
 * // Create a new key entity with Ed25519 type
 * const keyEntity = new _Entity({
 *   _type: IHashgraph.ICommons.IKey.TypeEnum.Ed25519,
 *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 * });
 * 
 * // Create an empty key entity
 * const emptyEntity = new _Entity();
 * 
 * // Create a partial key entity with just the key value
 * const partialEntity = new _Entity({
 *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
 * });
 */
export class _Entity implements IHashgraph.ICommons.IKey.IEntity {
    /**
     * The type of the cryptographic key
     * @type {IHashgraph.ICommons.IKey.TypeEnum}
     * @description Specifies the cryptographic algorithm used for this key (e.g. Ed25519).
     * Must be a valid value from the TypeEnum enumeration.
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * // Set the key type to Ed25519
     * entity._type = IHashgraph.ICommons.IKey.TypeEnum.Ed25519;
     * 
     * // Key type can be undefined
     * entity._type = undefined;
     */
    @ApiProperty({
        description: 'The type of the Hashgraph key',
        enum: IHashgraph.ICommons.IKey.TypeEnum,
        example: IHashgraph.ICommons.IKey.TypeEnum.Ed25519,
        required: false,
    })
    @IsOptional()
    @IsEnum(IHashgraph.ICommons.IKey.TypeEnum)
    _type?: IHashgraph.ICommons.IKey.TypeEnum;

    /**
     * The string representation of the key value
     * @type {string}
     * @description The actual key value encoded as a hexadecimal string.
     * Must be a valid string containing the cryptographic key data.
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * @optional
     * 
     * @example
     * // Set a valid Ed25519 public key
     * entity.key = "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777";
     * 
     * // Key can be undefined
     * entity.key = undefined;
     */
    @ApiProperty({
        description: 'The string representation of the key',
        example: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
        required: false,
    })
    @IsOptional()
    @IsString()
    key?: string;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<_Entity>} [data] - Optional partial data to initialize the instance.
     * Can contain _type and/or key properties.
     * @throws {Error} Will throw an error if key type is invalid (not in TypeEnum)
     * @throws {Error} Will throw an error if key is provided but is not a string
     * @memberof _Entity
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create with both type and key
     * const entity1 = new _Entity({
     *   _type: IHashgraph.ICommons.IKey.TypeEnum.Ed25519,
     *   key: "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"
     * });
     * 
     * // Create with no parameters
     * const entity2 = new _Entity();
     * 
     * // Create with just key type
     * const entity3 = new _Entity({
     *   _type: IHashgraph.ICommons.IKey.TypeEnum.Ed25519
     * });
     * 
     * // Will throw error - invalid key type
     * try {
     *   const invalid = new _Entity({
     *     _type: 'invalid' as any
     *   });
     * } catch (e) {
     *   console.error(e.message); // "Invalid key type"
     * }
     * 
     * // Will throw error - key not a string
     * try {
     *   const invalid = new _Entity({
     *     key: 123 as any
     *   });
     * } catch (e) {
     *   console.error(e.message); // "Key must be a string"
     * }
     */
    constructor(data?: Partial<_Entity>) {
        if (data) {
            this._type = data._type;
            this.key = data.key;

            // Validate key type if provided
            if (this._type && !Object.values(IHashgraph.ICommons.IKey.TypeEnum).includes(this._type)) {
                throw new Error('Invalid key type');
            }

            // Validate key string if provided
            if (this.key && typeof this.key !== 'string') {
                throw new Error('Key must be a string');
            }
        }
    }
}