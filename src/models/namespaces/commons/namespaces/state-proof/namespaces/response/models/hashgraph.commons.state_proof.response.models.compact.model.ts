import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsArray, IsNumber, IsObject, ValidateNested, ArrayMinSize, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _RecordFile } from './hashgraph.commons.state_proof.response.models.record-file.model'

/**
 * Class representing a compact state proof response in the Hashgraph network
 * @class _Compact
 * @export _Compact
 * @implements {IHashgraph.ICommons.IStateProof.IResponse.ICompact}
 * @description Represents a compact format of state proof response containing address books,
 * record files, signature files and version information.
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Commons
 * @module Hashgraph.Commons.StateProof.Response.Compact
 * 
 * @property {Array<string>} address_books - Array of address book identifiers
 * @property {IHashgraph.ICommons.IStateProof.IResponse.IRecordFile} record_file - The record file information
 * @property {{ [key: string]: string }} signature_files - Map of node IDs to their signature data
 * @property {number} version - Version number of the state proof
 * 
 * @example
 * const compact = new _Compact({
 *   address_books: ['0.0.3', '0.0.4', '0.0.5'],
 *   record_file: new _RecordFile({...}),
 *   signature_files: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' },
 *   version: 1
 * });
 */
export class _Compact implements IHashgraph.ICommons.IStateProof.IResponse.ICompact {
    /**
     * Array of address book identifiers
     * @type {Array<string>}
     * @description List of address book IDs used in the state proof
     * @memberof _Compact
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * compact.address_books = ['0.0.3', '0.0.4', '0.0.5'];
     */
    @ApiProperty({
        description: 'The address books',
        type: () => [String],
        example: ['0.0.3', '0.0.4', '0.0.5'],
    })
    @IsArray()
    @ArrayMinSize(1)
    address_books: Array<string>;

    /**
     * The record file information
     * @type {IHashgraph.ICommons.IStateProof.IResponse.IRecordFile}
     * @description Contains the record file data associated with the state proof
     * @memberof _Compact
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * compact.record_file = new _RecordFile({...});
     */
    @ApiProperty({
        description: 'The record file',
        type: () => _RecordFile,
    })
    @ValidateNested()
    @Type(() => _RecordFile)
    record_file: IHashgraph.ICommons.IStateProof.IResponse.IRecordFile;

    /**
     * Map of node IDs to their signature data
     * @type {{ [key: string]: string }}
     * @description Object mapping node IDs to their corresponding signature data
     * @memberof _Compact
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * compact.signature_files = { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' };
     */
    @ApiProperty({
        description: 'The signature files',
        type: () => Object,
        example: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' },
    })
    @IsObject()
    signature_files: { [key: string]: string };

    /**
     * Version number of the state proof
     * @type {number}
     * @description The version number of the state proof format
     * @memberof _Compact
     * @public
     * @since 2.0.0
     * @required
     * 
     * @example
     * compact.version = 1;
     */
    @ApiProperty({
        description: 'The version',
        type: () => Number,
        example: 1,
    })
    @IsNumber()
    @Min(1)
    version: number;

    /**
     * Creates an instance of _Compact
     * @constructor
     * @param {Partial<_Compact>} [data] - Optional partial data to initialize the instance
     * @throws {Error} Will throw an error if address books array is empty or invalid
     * @throws {Error} Will throw an error if record file is invalid
     * @throws {Error} Will throw an error if signature files object is empty or invalid
     * @throws {Error} Will throw an error if version is invalid
     * @memberof _Compact
     * @public
     * @since 2.0.0
     * 
     * @example
     * const compact = new _Compact({
     *   address_books: ['0.0.3', '0.0.4', '0.0.5'],
     *   record_file: new _RecordFile({...}),
     *   signature_files: { '0.0.3': 'signature_data_1', '0.0.4': 'signature_data_2' },
     *   version: 1
     * });
     */
    constructor(data?: Partial<_Compact>) {
        if (data) {
            this.address_books = data.address_books;
            this.record_file = data.record_file;
            this.signature_files = data.signature_files;
            this.version = data.version;

            if (!Array.isArray(this.address_books) || this.address_books.length === 0) {
                throw new Error('Address books must be a non-empty array of strings');
            }

            if (!(this.record_file instanceof _RecordFile)) {
                throw new Error('Record file must be an instance of _IRecordFile');
            }

            if (typeof this.signature_files !== 'object' || Object.keys(this.signature_files).length === 0) {
                throw new Error('Signature files must be a non-empty object');
            }

            if (typeof this.version !== 'number' || this.version < 1) {
                throw new Error('Version must be a number greater than or equal to 1');
            }
        }
    }
}