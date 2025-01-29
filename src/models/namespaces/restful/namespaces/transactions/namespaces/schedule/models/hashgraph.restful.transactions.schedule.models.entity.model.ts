import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Hashgraph } from '../../../../../../../hashgraph.namespace';
import { _Signature } from './hashgraph.restful.transactions.schedule.models.signature.model';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace'

/**
 * @file hashgraph.restful.transactions.schedule.models.entity.model.ts
 * @class _Entity
 * @description Comprehensive model for scheduled transactions in the Hedera network.
 * Implements IHashgraph.IRestful.ITransactions.ISchedule.IEntity to provide
 * a complete representation of a scheduled transaction's state and properties, including:
 * - Schedule identification and metadata
 * - Administrative controls and permissions
 * - Temporal constraints and execution timing
 * - Transaction details and signatures
 * - Fee management and payer accounts
 * 
 * @implements {IHashgraph.IRestful.ITransactions.ISchedule.IEntity}
 * @category Hashgraph
 * @subcategory Restful Models
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * // Create a comprehensive schedule entity
 * const schedule = new _Entity({
 *   schedule_id: "0.0.123456",
 *   creator_account_id: "0.0.789012",
 *   payer_account_id: "0.0.789012",
 *   admin_key: {
 *     key: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
 *   },
 *   expiration_time: "1234567890.123456789",
 *   wait_for_expiry: false,
 *   executed_timestamp: null,
 *   deleted: false,
 *   memo: "Multi-signature token transfer",
 *   transaction_body: JSON.stringify({
 *     transactionID: {
 *       accountID: { shardNum: 0, realmNum: 0, accountNum: 789012 },
 *       transactionValidStart: { seconds: 1234567890, nanos: 123456789 }
 *     },
 *     nodeAccountID: { shardNum: 0, realmNum: 0, accountNum: 3 },
 *     transactionFee: 100000000,
 *     transactionValidDuration: { seconds: 120 },
 *     cryptoTransfer: {
 *       transfers: {
 *         accountAmounts: [
 *           { accountID: { shardNum: 0, realmNum: 0, accountNum: 789012 }, amount: -1000000000 },
 *           { accountID: { shardNum: 0, realmNum: 0, accountNum: 456789 }, amount: 1000000000 }
 *         ]
 *       }
 *     }
 *   }),
 *   signatures: [{
 *     public_key_prefix: "0x02b6...",
 *     signature: "0x1a2b...",
 *     type: "ED25519"
 *   }]
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.ITransactions.ISchedule.IEntity {
    /**
     * Administrative key
     * @type {Hashgraph.Commons.Key.Entity}
     * @optional
     * @remarks
     * - Controls schedule modifications
     * - Authorizes deletions
     * - Required for updates
     * - Enforces permissions
     */
    @ApiProperty({
        description: 'Administrative key controlling schedule modifications and deletions',
        required: false,
        type: () => Hashgraph.Commons.Key.Entity,
        example: {
            key: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7'
        }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => Hashgraph.Commons.Key.Entity)
    admin_key?: Hashgraph.Commons.Key.Entity;

    /**
     * Schedule consensus timestamp
     * @type {string}
     * @optional
     * @remarks
     * - Network-agreed timestamp
     * - Format: seconds.nanoseconds
     * - Immutable after consensus
     * - Used for schedule ordering
     */
    @ApiProperty({
        description: 'Network consensus timestamp in seconds.nanoseconds format',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsOptional()
    @IsString()
    consensus_timestamp?: string;

    /**
     * Schedule creator account
     * @type {string}
     * @optional
     * @remarks
     * - Format: 0.0.{number}
     * - Initiates schedule creation
     * - Retains admin rights
     * - Tracks schedule ownership
     */
    @ApiProperty({
        description: 'Account identifier that created this schedule in format 0.0.{number}',
        required: false,
        type: () => String,
        example: '0.0.123456'
    })
    @IsOptional()
    @IsString()
    creator_account_id?: string;

    /**
     * Schedule deletion status
     * @type {boolean}
     * @optional
     * @remarks
     * - Indicates removal state
     * - True if deleted
     * - Affects availability
     * - Permanent status
     */
    @ApiProperty({
        description: 'Flag indicating if the schedule has been deleted from the network',
        required: false,
        type: () => Boolean,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    deleted?: boolean;

    /**
     * Schedule execution timestamp
     * @type {string}
     * @optional
     * @remarks
     * - Records execution time
     * - Format: seconds.nanoseconds
     * - Null if not executed
     * - Immutable after set
     */
    @ApiProperty({
        description: 'Timestamp when the scheduled transaction was executed',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsOptional()
    @IsString()
    executed_timestamp?: string;

    /**
     * Schedule expiration time
     * @type {string}
     * @optional
     * @remarks
     * - Defines validity window
     * - Format: seconds.nanoseconds
     * - Triggers auto-deletion
     * - Required for scheduling
     */
    @ApiProperty({
        description: 'Expiration timestamp after which the schedule is automatically deleted',
        required: false,
        type: () => String,
        example: '1234567890.123456789'
    })
    @IsOptional()
    @IsString()
    expiration_time?: string;

    /**
     * Schedule memo text
     * @type {string}
     * @optional
     * @remarks
     * - Optional description
     * - User-defined content
     * - Limited length
     * - Aids identification
     */
    @ApiProperty({
        description: 'Optional memo providing context or description for the schedule',
        required: false,
        type: () => String,
        example: 'Multi-signature token transfer schedule'
    })
    @IsOptional()
    @IsString()
    memo?: string;

    /**
     * Schedule payer account
     * @type {string}
     * @optional
     * @remarks
     * - Format: 0.0.{number}
     * - Covers execution fees
     * - Must be valid account
     * - Required for execution
     */
    @ApiProperty({
        description: 'Account identifier responsible for execution fees in format 0.0.{number}',
        required: false,
        type: () => String,
        example: '0.0.123456'
    })
    @IsOptional()
    @IsString()
    payer_account_id?: string;

    /**
     * Unique schedule identifier
     * @type {string}
     * @optional
     * @remarks
     * - Format: 0.0.{number}
     * - Network-assigned ID
     * - Globally unique
     * - Used for references
     */
    @ApiProperty({
        description: 'Unique schedule identifier in format 0.0.{number}',
        required: false,
        type: () => String,
        example: '0.0.123456'
    })
    @IsOptional()
    @IsString()
    schedule_id?: string;

    /**
     * Required schedule signatures
     * @type {Array<_Signature>}
     * @optional
     * @remarks
     * - Lists required signers
     * - Tracks collected signatures
     * - Supports multi-sig
     * - Validates execution
     */
    @ApiProperty({
        description: 'Collection of cryptographic signatures required for execution',
        required: false,
        type: () => [_Signature],
        example: [{
            public_key_prefix: '0x02b6...',
            signature: '0x1a2b...',
            type: 'ED25519'
        }]
    })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => _Signature)
    signatures?: _Signature[];

    /**
     * Scheduled transaction body
     * @type {string}
     * @optional
     * @remarks
     * - Contains transaction details
     * - JSON stringified format
     * - Defines execution logic
     * - Immutable after creation
     */
    @ApiProperty({
        description: 'Complete transaction details to be executed when schedule triggers',
        required: false,
        type: () => String,
        example: JSON.stringify({
            transactionID: {
                accountID: { shardNum: 0, realmNum: 0, accountNum: 789012 },
                transactionValidStart: { seconds: 1234567890, nanos: 123456789 }
            },
            nodeAccountID: { shardNum: 0, realmNum: 0, accountNum: 3 },
            transactionFee: 100000000,
            transactionValidDuration: { seconds: 120 },
            cryptoTransfer: {
                transfers: {
                    accountAmounts: [
                        { accountID: { shardNum: 0, realmNum: 0, accountNum: 789012 }, amount: -1000000000 },
                        { accountID: { shardNum: 0, realmNum: 0, accountNum: 456789 }, amount: 1000000000 }
                    ]
                }
            }
        })
    })
    @IsOptional()
    @IsString()
    transaction_body?: string;

    /**
     * Expiry execution flag
     * @type {boolean}
     * @optional
     * @remarks
     * - Controls execution timing
     * - True to wait for expiry
     * - False for immediate execution
     * - Affects signature collection
     */
    @ApiProperty({
        description: 'Flag indicating if execution should wait until expiration time',
        required: false,
        type: () => Boolean,
        example: false
    })
    @IsOptional()
    @IsBoolean()
    wait_for_expiry?: boolean;

    /**
     * Creates an instance of _Entity
     * @constructor
     * @param {Partial<_Entity>} data - Schedule entity data
     * @remarks
     * - Validates all properties
     * - Transforms nested objects
     * - Ensures data integrity
     * - Initializes signature array
     * 
     * @example
     * ```typescript
     * // Create schedule with basic properties
     * const schedule = new _Entity({
     *   schedule_id: "0.0.123456",
     *   creator_account_id: "0.0.789012",
     *   expiration_time: "1234567890.123456789"
     * });
     * 
     * // Create schedule with full configuration
     * const fullSchedule = new _Entity({
     *   schedule_id: "0.0.123456",
     *   creator_account_id: "0.0.789012",
     *   payer_account_id: "0.0.789012",
     *   admin_key: {
     *     key: "302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7"
     *   },
     *   expiration_time: "1234567890.123456789",
     *   wait_for_expiry: false,
     *   memo: "Multi-signature token transfer",
     *   signatures: [{
     *     public_key_prefix: "0x02b6...",
     *     signature: "0x1a2b...",
     *     type: "ED25519"
     *   }]
     * });
     * ```
     */
    constructor(data?: Partial<_Entity>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}