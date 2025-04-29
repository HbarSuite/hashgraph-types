import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsNumber, IsString, Min, Max, ArrayMinSize } from 'class-validator';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * Class representing a list of keys for multi-signature operations in the Hashgraph network
 * @class _List
 * @export _List
 * @implements {IHashgraph.ICommons.IKey.IList}
 * @description Represents a list of cryptographic keys and a threshold value for multi-signature operations.
 * The threshold specifies how many signatures from the key list are required for a valid transaction.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.Key.List
 * 
 * @property {Array<string>} key - Array of public keys in string format
 * @property {number} threshold - Minimum number of required signatures
 * 
 * @throws {Error} Will throw an error if key array is empty or contains non-string elements during construction
 * @throws {Error} Will throw an error if threshold is not between 1 and key array length during construction
 * 
 * @example
 * // Create a new key list with 2 keys and threshold of 2
 * const keyList = new _List({
 *   key: [
 *     "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *     "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"
 *   ],
 *   threshold: 2
 * });
 * 
 * // Access the key array
 * const keys = keyList.key;
 * 
 * // Get the threshold value
 * const threshold = keyList.threshold;
 */
export class _List implements IHashgraph.ICommons.IKey.IList {
    /**
     * Array of public keys in string format
     * @type {Array<string>}
     * @description List of public keys that can be used for signing transactions.
     * Must be a non-empty array of valid public key strings.
     * @memberof _List
     * @public
     * @since 2.0.0
     * @required
     * 
     * @throws {Error} Will throw validation error if array is empty
     * @throws {Error} Will throw validation error if any element is not a string
     * 
     * @example
     * // Set the key array
     * list.key = [
     *   "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
     *   "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"
     * ];
     * 
     * // Access individual keys
     * const firstKey = list.key[0];
     * 
     * // Get number of keys
     * const keyCount = list.key.length;
     */
    @ApiProperty({
        description: 'An array containing the public keys in string format',
        type: () => [String],
        example: ["302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777", "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"],
    })
    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    key: Array<string>;

    /**
     * Minimum number of required signatures
     * @type {number}
     * @description The minimum number of signatures needed from the key list for a transaction to be valid.
     * Must be a positive integer not exceeding the number of keys in the list.
     * @memberof _List
     * @public
     * @since 2.0.0
     * @required
     * 
     * @throws {Error} Will throw validation error if value is less than 1
     * @throws {Error} Will throw validation error if value is not a number
     * 
     * @example
     * // Set threshold to require 2 signatures
     * list.threshold = 2;
     * 
     * // Set threshold to require all signatures
     * list.threshold = list.key.length;
     * 
     * // Set minimum threshold
     * list.threshold = 1;
     */
    @ApiProperty({
        description: 'The minimum number of signatures required from the key list for a valid transaction',
        type: () => Number,
        example: 2,
        minimum: 1,
    })
    @IsNumber()
    @Min(1)
    threshold: number;

    /**
     * Creates an instance of _List
     * @constructor
     * @param {Partial<IHashgraph.ICommons.IKey.IList>} [data] - Optional partial data to initialize the instance
     * @throws {Error} Will throw an error if key array is empty or contains non-string elements
     * @throws {Error} Will throw an error if threshold is not between 1 and key array length
     * @memberof _List
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create with minimum threshold
     * const minList = new _List({
     *   key: ["302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"],
     *   threshold: 1
     * });
     * 
     * // Create with multiple keys and higher threshold
     * const multiList = new _List({
     *   key: [
     *     "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
     *     "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"
     *   ],
     *   threshold: 2
     * });
     * 
     * // Create empty instance
     * const emptyList = new _List();
     */
    constructor(data?: Partial<IHashgraph.ICommons.IKey.IList>) {
        Object.assign(this, data);

        // Validate key array
        if (!Array.isArray(this.key) || this.key.length === 0) {
            throw new Error('Key must be a non-empty array of strings');
        }

        // Validate all elements are strings
        if (this.key.some(k => typeof k !== 'string')) {
            throw new Error('All elements in key array must be strings');
        }

        // Validate threshold is within valid range
        if (typeof this.threshold !== 'number' || this.threshold < 1 || this.threshold > this.key.length) {
            throw new Error(`Threshold must be a number between 1 and ${this.key.length}`);
        }
    }
}