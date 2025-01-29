import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * Class representing a compact record file in a state proof response
 * @class RecordFile
 * @implements {IHashgraph.ICommons.IStateProof.IResponse.IRecordFile}
 * @namespace Hashgraph.Commons.StateProof.Response.RecordFile
 * @description Provides detailed information about a compact record file in a state proof response.
 * Contains essential data for verifying transaction records and state changes.
 * @category Hashgraph
 * @subcategory Commons
 * @since 2.0.0
 * @public
 */
export class _RecordFile implements IHashgraph.ICommons.IStateProof.IResponse.IRecordFile {
    /**
     * The head of the record file
     * @type {string}
     * @description Identifier for the record file, typically containing node ID and timestamp
     * @example '0.0.3-2023-04-15T14:30:00Z'
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The head of the record file',
        example: '0.0.3-2023-04-15T14:30:00Z',
        required: true,
    })
    head: string;

    /**
     * The start running hash object
     * @type {string}
     * @description Hash value representing the state at the beginning of the record file
     * @example '0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p'
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The start running hash object',
        example: '0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p',
        required: true,
    })
    start_running_hash_object: string;

    /**
     * The end running hash object
     * @type {string}
     * @description Hash value representing the state at the end of the record file
     * @example '9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k'
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The end running hash object',
        example: '9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k',
        required: true,
    })
    end_running_hash_object: string;

    /**
     * The hashes before the current record
     * @type {Array<string>}
     * @description Array of hash values for records preceding the current record
     * @example ['hash1', 'hash2', 'hash3']
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The hashes before the current record',
        example: ['hash1', 'hash2', 'hash3'],
        required: true,
        isArray: true,
        type: () => [String],
    })
    hashes_before: Array<string>;

    /**
     * The hashes after the current record
     * @type {Array<string>}
     * @description Array of hash values for records following the current record
     * @example ['hash4', 'hash5', 'hash6']
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The hashes after the current record',
        example: ['hash4', 'hash5', 'hash6'],
        required: true,
        isArray: true,
        type: () => [String],
    })
    hashes_after: Array<string>;

    /**
     * The record stream object
     * @type {string}
     * @description Serialized stream of record data in hexadecimal format
     * @example '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p'
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The record stream object',
        example: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
        required: true,
    })
    record_stream_object: string;

    /**
     * The block number
     * @type {string}
     * @description Sequential identifier for the block containing this record
     * @example '123456'
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * @required
     */
    @ApiProperty({
        description: 'The block number',
        example: '123456',
        required: true,
    })
    block_number: string;

    /**
     * Creates an instance of _RecordFile.
     * @param {IHashgraph.ICommons.IStateProof.IResponse.IRecordFile} data - The record file data
     * @throws {Error} When any of the required fields are invalid or missing
     * @memberof _RecordFile
     * @public
     * @since 2.0.0
     * 
     * @example
     * const recordFile = new _RecordFile({
     *   head: '0.0.3-2023-04-15T14:30:00Z',
     *   start_running_hash_object: '0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p',
     *   end_running_hash_object: '9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k',
     *   hashes_before: ['hash1', 'hash2', 'hash3'],
     *   hashes_after: ['hash4', 'hash5', 'hash6'],
     *   record_stream_object: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
     *   block_number: '123456'
     * });
     */
    constructor(data: IHashgraph.ICommons.IStateProof.IResponse.IRecordFile) {
        // Validate and set head
        if (!data.head || typeof data.head !== 'string') {
            throw new Error('Invalid head');
        }
        this.head = data.head;

        // Validate and set start running hash object
        if (!data.start_running_hash_object || typeof data.start_running_hash_object !== 'string') {
            throw new Error('Invalid start_running_hash_object');
        }
        this.start_running_hash_object = data.start_running_hash_object;

        // Validate and set end running hash object
        if (!data.end_running_hash_object || typeof data.end_running_hash_object !== 'string') {
            throw new Error('Invalid end_running_hash_object');
        }
        this.end_running_hash_object = data.end_running_hash_object;

        // Validate and set hashes before
        if (!Array.isArray(data.hashes_before) || !data.hashes_before.every(hash => typeof hash === 'string')) {
            throw new Error('Invalid hashes_before');
        }
        this.hashes_before = data.hashes_before;

        // Validate and set hashes after
        if (!Array.isArray(data.hashes_after) || !data.hashes_after.every(hash => typeof hash === 'string')) {
            throw new Error('Invalid hashes_after');
        }
        this.hashes_after = data.hashes_after;

        // Validate and set record stream object
        if (!data.record_stream_object || typeof data.record_stream_object !== 'string') {
            throw new Error('Invalid record_stream_object');
        }
        this.record_stream_object = data.record_stream_object;

        // Validate and set block number
        if (!data.block_number || typeof data.block_number !== 'string') {
            throw new Error('Invalid block_number');
        }
        this.block_number = data.block_number;
    }
}