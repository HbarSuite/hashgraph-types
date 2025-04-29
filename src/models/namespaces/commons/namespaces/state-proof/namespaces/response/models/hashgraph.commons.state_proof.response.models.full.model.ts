import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsString, IsObject, ArrayMinSize } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Class representing a full state proof response in the Hashgraph network
 * @class _Full
 * @export _Full
 * @implements {IHashgraph.ICommons.IStateProof.IResponse.IFull}
 * @description Represents a full format of state proof response containing address books,
 * record files, and signature files information. Used to validate and verify state proofs
 * with complete data.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.StateProof.Response.Full
 * 
 * @property {Array<string>} address_books - Array of address book identifiers used for validation
 * @property {string} record_file - The record file path/identifier containing transaction records
 * @property {{ [key: string]: string }} signature_files - Map of node IDs to their signature data for verification
 * 
 * @example
 * const full = new _Full({
 *   address_books: ['0.0.3', '0.0.4', '0.0.5'],
 *   record_file: '0.0.3/2023-04-15T14:30:00Z.rcd',
 *   signature_files: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' }
 * });
 */
export class _Full implements IHashgraph.ICommons.IStateProof.IResponse.IFull {
    /**
     * Array of address book identifiers
     * @type {Array<string>}
     * @description List of address book IDs used in the state proof. Each ID represents a node
     * that participated in creating and validating the state proof. Must contain at least one entry.
     * @memberof _Full
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * full.address_books = ['0.0.3', '0.0.4', '0.0.5'];
     * 
     * @throws {Error} If array is empty or contains invalid entries
     */
    @ApiProperty({
        description: 'The address books associated with the state proof',
        type: () => [String],
        example: ['0.0.3', '0.0.4', '0.0.5'],
        required: true,
    })
    @IsArray()
    @ArrayMinSize(1)
    address_books: Array<string>;

    /**
     * The record file path/identifier
     * @type {string}
     * @description Path or identifier of the record file associated with the state proof.
     * Contains the actual transaction records and state changes being proven.
     * Must be a valid non-empty string in the format 'nodeId/timestamp.rcd'.
     * @memberof _Full
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * full.record_file = '0.0.3/2023-04-15T14:30:00Z.rcd';
     * 
     * @throws {Error} If string is empty or in invalid format
     */
    @ApiProperty({
        description: 'The record file associated with the state proof',
        type: () => String,
        example: '0.0.3/2023-04-15T14:30:00Z.rcd',
        required: true,
    })
    @IsString()
    record_file: string;

    /**
     * Map of node IDs to their signature data
     * @type {{ [key: string]: string }}
     * @description Object mapping node IDs to their corresponding signature data.
     * Each entry represents a node's cryptographic signature validating the state proof.
     * Must contain at least one signature from a valid node.
     * @memberof _Full
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * full.signature_files = { 
     *   '0.0.3': 'signature_data_1', 
     *   '0.0.4': 'signature_data_2' 
     * };
     * 
     * @throws {Error} If object is empty or contains invalid entries
     */
    @ApiProperty({
        description: 'The signature files associated with the state proof',
        type: () => Object,
        example: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' },
        required: true,
    })
    @IsObject()
    signature_files: { [key: string]: string };

    /**
     * Creates an instance of _Full
     * @constructor
     * @param {IHashgraph.ICommons.IStateProof.IResponse.IFull} [data] - Optional partial data to initialize the instance
     * @throws {Error} Will throw an error if address books array is empty or contains invalid entries
     * @throws {Error} Will throw an error if record file is empty or in invalid format
     * @throws {Error} Will throw an error if signature files object is empty or contains invalid entries
     * @memberof _Full
     * @public
     * @since 2.0.0
     * 
     * @example
     * // Create with all required fields
     * const full = new _Full({
     *   address_books: ['0.0.3', '0.0.4', '0.0.5'],
     *   record_file: '0.0.3/2023-04-15T14:30:00Z.rcd',
     *   signature_files: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' }
     * });
     * 
     * // Create empty instance
     * const empty = new _Full();
     * 
     * // Will throw error for invalid data
     * try {
     *   const invalid = new _Full({
     *     address_books: [], // Empty array not allowed
     *     record_file: '',  // Empty string not allowed
     *     signature_files: {} // Empty object not allowed
     *   });
     * } catch (error) {
     *   console.error(error.message);
     * }
     */
    constructor(data?: Partial<IHashgraph.ICommons.IStateProof.IResponse.IFull>) {
        Object.assign(this, data);

        if (!Array.isArray(this.address_books) || this.address_books.length === 0) {
            throw new Error('Address books must be a non-empty array of strings');
        }

        if (typeof this.record_file !== 'string' || this.record_file.trim() === '') {
            throw new Error('Record file must be a non-empty string');
        }

        if (typeof this.signature_files !== 'object' || Object.keys(this.signature_files).length === 0) {
            throw new Error('Signature files must be a non-empty object');
        }
    }
}