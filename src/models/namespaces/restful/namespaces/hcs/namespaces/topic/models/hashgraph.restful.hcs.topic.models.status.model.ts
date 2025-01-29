import { _StatusInner } from './hashgraph.restful.hcs.topic.models.status-inner.model';
import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file status.model.ts
 * @class _Status
 * @description Represents the status of a topic on the Hashgraph Consensus Service (HCS).
 * This class encapsulates the current state of an HCS topic including sequence numbers,
 * running hash details, and topic identification. It provides a wrapper around the inner
 * status details to allow for optional status information.
 * @implements {IHashgraph.IRestful.IHCS.ITopic.IStatus}
 * @category Hashgraph
 * @subcategory HCS
 * @since 2.0.0
 * 
 * @example
 * // Create a new topic status instance with status details
 * const topicStatus = new _Status({
 *   _status: {
 *     topicId: "0.0.1234",
 *     sequenceNumber: 42,
 *     runningHash: "0x1234abcd...",
 *     runningHashVersion: 2
 *   }
 * });
 * 
 * // Create an empty topic status instance
 * const emptyStatus = new _Status();
 */
export class _Status implements IHashgraph.IRestful.IHCS.ITopic.IStatus {
    /**
     * The inner status of the HCS topic
     * @type {_StatusInner | undefined}
     * @description Contains detailed information about the topic's current state including:
     * - Topic ID: Unique identifier for the topic (e.g. "0.0.1234")
     * - Sequence number: Current message count for the topic
     * - Running hash: Cumulative hash of all messages
     * - Running hash version: Version of the hashing algorithm
     * 
     * This property is optional and may be undefined if the topic status
     * has not been initialized or is not available.
     * @optional
     * @memberof _Status
     * 
     * @example
     * // Example status object
     * status._status = {
     *   topicId: "0.0.1234",
     *   sequenceNumber: 42,
     *   runningHash: "0x1234abcd...",
     *   runningHashVersion: 2
     * };
     */
    @ApiProperty({
        description: 'The inner status of the HCS topic containing detailed state information',
        type: () => _StatusInner,
        required: false,
        example: {
            topicId: "0.0.1234",
            sequenceNumber: 42,
            runningHash: "0x1234abcd...", 
            runningHashVersion: 2
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => _StatusInner)
    _status?: _StatusInner;

    /**
     * Creates an instance of _Status
     * @constructor
     * @param {Partial<IHashgraph.IRestful.IHCS.ITopic.IStatus>} [data] - Initial data to create the topic status
     * @description Initializes a new Status instance, optionally populating it with the provided data.
     * If data is provided, it will be validated and assigned to the instance properties.
     * If no data is provided, creates an empty status object.
     * @throws {Error} When the provided data fails validation
     * @memberof _Status
     * 
     * @example
     * // Create with data
     * const status = new _Status({
     *   _status: {
     *     topicId: "0.0.1234",
     *     sequenceNumber: 42,
     *     runningHash: "0x1234abcd...",
     *     runningHashVersion: 2
     *   }
     * });
     * 
     * // Create empty status
     * const emptyStatus = new _Status();
     */
    constructor(data?: Partial<IHashgraph.IRestful.IHCS.ITopic.IStatus>) {
        // If data is provided, assign it to the instance
        if (data) {
            Object.assign(this, data);
            
            // If status data is provided, create a new StatusInner instance
            if (data._status) {
                this._status = new _StatusInner(data._status);
            }
        }
    }
}
