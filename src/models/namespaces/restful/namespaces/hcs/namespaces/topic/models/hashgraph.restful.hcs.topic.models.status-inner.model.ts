import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file status-inner.model.ts
 * @class _StatusInner
 * @description Represents the inner status of a Hashgraph Consensus Service (HCS) topic.
 * Contains information about the topic's current state including sequence numbers,
 * running hash details, and topic identification.
 * @implements {IHashgraph.IRestful.IHCS.ITopic.IStatusInner}
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Create a new topic status instance
 * const topicStatus = new _StatusInner({
 *   topicId: "0.0.1234",
 *   sequenceNumber: 42,
 *   runningHash: "0x1234abcd...",
 *   runningHashVersion: 2
 * });
 */
export class _StatusInner implements IHashgraph.IRestful.IHCS.ITopic.IStatusInner {
    /**
     * The topic ID
     * @type {string}
     * @description Unique identifier for the HCS topic in the Hashgraph network
     * @memberof _StatusInner
     * @example "0.0.1234"
     * @public
     */
    @ApiProperty({
        description: 'Unique identifier for the HCS topic',
        example: '0.0.1234',
        type: () => String,
    })
    public topicId: string;

    /**
     * The sequence number
     * @type {number}
     * @description Running count of messages submitted to this topic since its creation
     * @memberof _StatusInner
     * @example 42
     * @public
     */
    @ApiProperty({
        description: 'Represents the number of messages that have been submitted to the topic',
        example: 42,
        type: () => Number,
    })
    public sequenceNumber: number;

    /**
     * The running hash
     * @type {string}
     * @description Cumulative hash of all messages submitted to the topic, updated with each new message
     * @memberof _StatusInner
     * @example "0x1234abcd..."
     * @public
     */
    @ApiProperty({
        description: 'A hash representing the current state of the topic, updated with each new message',
        example: '0x1234abcd...',
        type: () => String,
    })
    public runningHash: string;

    /**
     * The running hash version
     * @type {number}
     * @description Version number of the hashing algorithm used for the running hash
     * @memberof _StatusInner
     * @example 2
     * @public
     */
    @ApiProperty({
        description: 'Indicates the algorithm version used for the running hash',
        example: 2,
        type: () => Number,
    })
    public runningHashVersion: number;

    /**
     * Creates an instance of _StatusInner
     * @constructor
     * @param {IHashgraph.IRestful.IHCS.ITopic.IStatusInner} data - Initial data to create the topic status
     * @throws {Error} If any of the required fields are invalid or missing
     * @memberof _StatusInner
     * @public
     * @example
     * // Create with valid data
     * const validStatus = new _StatusInner({
     *   topicId: "0.0.1234",
     *   sequenceNumber: 42,
     *   runningHash: "0x1234abcd...", 
     *   runningHashVersion: 2
     * });
     * 
     * // Will throw error for invalid data
     * try {
     *   const invalidStatus = new _StatusInner({
     *     topicId: "",  // Empty string not allowed
     *     sequenceNumber: -1, // Negative number not allowed
     *     runningHash: "",
     *     runningHashVersion: 0
     *   });
     * } catch (error) {
     *   console.error(error.message);
     * }
     */
    public constructor(data: IHashgraph.IRestful.IHCS.ITopic.IStatusInner) {
        // Validate and set topic ID
        if (typeof data.topicId !== 'string' || !data.topicId.trim()) {
            throw new Error('Invalid topicId: must be a non-empty string');
        }
        this.topicId = data.topicId;

        // Validate and set sequence number
        if (typeof data.sequenceNumber !== 'number' || data.sequenceNumber < 0) {
            throw new Error('Invalid sequenceNumber: must be a non-negative number');
        }
        this.sequenceNumber = data.sequenceNumber;

        // Validate and set running hash
        if (typeof data.runningHash !== 'string' || !data.runningHash.trim()) {
            throw new Error('Invalid runningHash: must be a non-empty string');
        }
        this.runningHash = data.runningHash;

        // Validate and set running hash version
        if (typeof data.runningHashVersion !== 'number' || data.runningHashVersion < 1) {
            throw new Error('Invalid runningHashVersion: must be a positive number');
        }
        this.runningHashVersion = data.runningHashVersion;
    }
}