import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IHashgraph } from '../../../../../../interfaces/hashgraph.namespace';

/**
 * @file Hashgraph DAO Configuration Model
 * @class _Config
 * @description Implements the configuration model for Hashgraph DAO operations.
 * This class provides comprehensive validation and management of DAO configurations
 * within the Hashgraph network ecosystem.
 * 
 * Core Responsibilities:
 * - Validates and stores DAO Topic IDs
 * - Manages consensus timestamps
 * - Ensures configuration integrity
 * - Implements IHashgraph.ILedger.IDAO.IConfig interface
 * 
 * @category Hashgraph
 * @subcategory DAO
 * @since 2.0.0
 * 
 * @implements {IHashgraph.ILedger.IDAO.IConfig}
 * 
 * @example
 * // Initialize a new DAO configuration
 * const daoConfig = new _Config({
 *   topicId: "0.0.12345",
 *   consensusTimestamp: "1234567890.123456789"
 * });
 */
export class _Config implements IHashgraph.ILedger.IDAO.IConfig {
    /**
     * Topic ID for DAO Operations
     * @description Unique identifier for the DAO topic on the Hashgraph network.
     * Must strictly follow the format "0.0.{number}" for network compatibility.
     * 
     * Format Requirements:
     * - Starts with "0.0."
     * - Followed by numeric values only
     * - No spaces or special characters allowed
     * 
     * @type {string}
     * @memberof _Config
     * @required
     * 
     * @example
     * // Valid topic ID
     * topicId: "0.0.12345"
     * 
     * @throws {Error} If topic ID format is invalid
     */
    @ApiProperty({
        description: 'The topic ID for the DAO consensus',
        type: () => 'string',
        required: true
    })
    public topicId: string;

    /**
     * Consensus Timestamp
     * @description Timestamp indicating when consensus was reached for DAO operations.
     * Must follow the precise format of "seconds.nanoseconds" for accurate timing.
     * 
     * Format Requirements:
     * - Seconds: Integer portion
     * - Nanoseconds: Exactly 9 decimal places
     * - Format: "{seconds}.{nanoseconds}"
     * 
     * @type {string}
     * @memberof _Config
     * @required
     * 
     * @example
     * // Valid consensus timestamp
     * consensusTimestamp: "1234567890.123456789"
     * 
     * @throws {Error} If timestamp format is invalid
     */
    @ApiProperty({
        description: 'The consensus timestamp in ISO format',
        type: () => 'string',
        required: true
    })
    public consensusTimestamp: string;

    /**
     * DAO Configuration Constructor
     * @constructor
     * @description Initializes a new DAO configuration instance with strict validation
     * of all required parameters.
     * 
     * Validation Rules:
     * - Topic ID must match pattern "0.0.{number}"
     * - Consensus timestamp must be in format "seconds.nanoseconds"
     * - Nanoseconds must be exactly 9 digits
     * 
     * @param {IHashgraph.ILedger.IDAO.IConfig} params - Configuration parameters
     * @param {string} params.topicId - DAO topic identifier
     * @param {string} params.consensusTimestamp - Consensus timing information
     * 
     * @throws {Error} When topic ID format is invalid
     * @throws {Error} When consensus timestamp format is invalid
     * 
     * @example
     * const config = new _Config({
     *   topicId: "0.0.12345",
     *   consensusTimestamp: "1234567890.123456789"
     * });
     */
    constructor(params: IHashgraph.ILedger.IDAO.IConfig) {
        // Validate topic ID format
        if (!/^0\.0\.\d+$/.test(params.topicId)) {
            throw new Error('Topic ID must be in format "0.0.{number}"');
        }
        this.topicId = params.topicId;

        // Validate consensus timestamp format (seconds.nanoseconds)
        if (!/^\d+\.\d{9}$/.test(params.consensusTimestamp)) {
            throw new Error('Consensus timestamp must be in format "seconds.nanoseconds" (e.g. 1234567890.123456789)');
        }
        this.consensusTimestamp = params.consensusTimestamp;
    }
}
