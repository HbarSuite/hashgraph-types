import { ApiProperty } from '@hsuite/nestjs-swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';
import { _ServiceEndpoint } from './hashgraph.restful.network.nodes.models.service-endpoint.model';

/**
 * @file hashgraph.restful.network.nodes.models.entity.model.ts
 * @class _StakingPeriod
 * @description Model for tracking staking period durations.
 * 
 * Features:
 * - Start and end timestamps
 * - Period validation
 * - Time tracking
 * 
 * @category Models
 * @subcategory Nodes
 * @since 2.0.0
 */
export class _StakingPeriod {
    /**
     * Period start timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating the start of the staking period.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-05-12T00:00:00.000Z'
     * 
     * @required
     */
    @ApiProperty({
        description: 'Start timestamp of the staking period (ISO 8601)',
        type: () => String,
        example: '2023-05-12T00:00:00.000Z',
        required: true
    })
    @IsString()
    from: string;

    /**
     * Period end timestamp
     * @type {string}
     * @description ISO 8601 formatted timestamp indicating the end of the staking period.
     * 
     * Format: YYYY-MM-DDTHH:mm:ss.sssZ
     * Example: '2023-05-13T00:00:00.000Z'
     * 
     * @required
     */
    @ApiProperty({
        description: 'End timestamp of the staking period (ISO 8601)',
        type: () => String,
        example: '2023-05-13T00:00:00.000Z',
        required: true
    })
    @IsString()
    to: string;
}

/**
 * @class _Entity
 * @description Comprehensive model for network node information.
 * 
 * This model provides detailed information about:
 * - Node identification
 * - Staking parameters
 * - Security details
 * - Service endpoints
 * 
 * Features built-in validation for:
 * - Node IDs
 * - Stake amounts
 * - Timestamps
 * - Endpoints
 * 
 * @implements {IHashgraph.IRestful.INetwork.INodes.IEntity}
 * @category Models
 * @subcategory Nodes
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const node = new _Entity({
 *   description: 'Main consensus node',
 *   node_id: 3,
 *   node_account_id: '0.0.3',
 *   service_endpoints: [
 *     {
 *       ip_address: '35.237.200.180',
 *       port: 50211
 *     }
 *   ]
 * });
 * ```
 */
export class _Entity implements IHashgraph.IRestful.INetwork.INodes.IEntity {
    /**
     * Node description
     * @type {string}
     * @description Human-readable description of the node's purpose and capabilities.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Human-readable description of the node',
        type: () => String,
        example: 'Main consensus node',
        required: true
    })
    @IsString()
    description: string;

    /**
     * Node file identifier
     * @type {string}
     * @description Unique file identifier associated with the node.
     * Used for configuration and state management.
     * 
     * Format: x.y.z (where x, y, z are non-negative integers)
     * Example: '0.0.102'
     * 
     * @required
     */
    @ApiProperty({
        description: 'Unique file identifier for the node',
        type: () => String,
        example: '0.0.102',
        required: true
    })
    @IsString()
    file_id: string;

    /**
     * Maximum stake amount
     * @type {number}
     * @description Maximum amount that can be staked on this node.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Maximum stake amount in tinybars',
        type: () => Number,
        example: 5000000000000,
        required: true
    })
    @IsNumber()
    max_stake: number;

    /**
     * Node memo
     * @type {string}
     * @description Additional information or notes about the node.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Additional node information or notes',
        type: () => String,
        example: 'Primary consensus node for region A',
        required: true
    })
    @IsString()
    memo: string;

    /**
     * Minimum stake amount
     * @type {number}
     * @description Minimum amount that must be staked on this node.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Minimum stake amount in tinybars',
        type: () => Number,
        example: 1000000000,
        required: true
    })
    @IsNumber()
    min_stake: number;

    /**
     * Node identifier
     * @type {number}
     * @description Unique numeric identifier for the node.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Unique numeric identifier for the node',
        type: () => Number,
        example: 3,
        required: true
    })
    @IsNumber()
    node_id: number;

    /**
     * Node account identifier
     * @type {string}
     * @description Account identifier associated with the node.
     * 
     * Format: x.y.z (where x, y, z are non-negative integers)
     * Example: '0.0.3'
     * 
     * @required
     */
    @ApiProperty({
        description: 'Account identifier for the node',
        type: () => String,
        example: '0.0.3',
        required: true
    })
    @IsString()
    node_account_id: string;

    /**
     * Node certificate hash
     * @type {string}
     * @description Cryptographic hash of the node's TLS certificate.
     * Used for secure communication verification.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Cryptographic hash of the node certificate',
        type: () => String,
        example: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        required: true
    })
    @IsString()
    node_cert_hash: string;

    /**
     * Node public key
     * @type {string}
     * @description Public key used for node identification and verification.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Public key for node verification',
        type: () => String,
        example: '302a300506032b6570032100e0c8ec2758a5879ffac226a13c0c516b799e72e35141a0dd828f94d37988a4b7',
        required: true
    })
    @IsString()
    public_key: string;

    /**
     * Reward rate start
     * @type {number}
     * @description Initial reward rate for the node.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Initial reward rate in tinybars',
        type: () => Number,
        example: 100000000,
        required: true
    })
    @IsNumber()
    reward_rate_start: number;

    /**
     * Service endpoints
     * @type {Array<_ServiceEndpoint>}
     * @description Collection of service endpoints for the node.
     * Each endpoint specifies connection details.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Collection of node service endpoints',
        type: () => [_ServiceEndpoint],
        isArray: true,
        required: true,
        example: [
            {
                ip_address: '35.237.200.180',
                port: 50211
            }
        ]
    })
    @IsArray()
    @Type(() => _ServiceEndpoint)
    service_endpoints: Array<_ServiceEndpoint>;

    /**
     * Total stake amount
     * @type {number}
     * @description Total amount staked on this node.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Total stake amount in tinybars',
        type: () => Number,
        example: 3000000000000,
        required: true
    })
    @IsNumber()
    stake: number;

    /**
     * Non-rewarded stake amount
     * @type {number}
     * @description Amount of stake not eligible for rewards.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Non-rewarded stake amount in tinybars',
        type: () => Number,
        example: 500000000000,
        required: true
    })
    @IsNumber()
    stake_not_rewarded: number;

    /**
     * Rewarded stake amount
     * @type {number}
     * @description Amount of stake eligible for rewards.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Rewarded stake amount in tinybars',
        type: () => Number,
        example: 2500000000000,
        required: true
    })
    @IsNumber()
    stake_rewarded: number;

    /**
     * Owned stake amount
     * @type {number}
     * @description Amount of stake owned by the node.
     * Specified in tinybars (1 HBAR = 100,000,000 tinybars).
     * 
     * @required
     */
    @ApiProperty({
        description: 'Owned stake amount in tinybars',
        type: () => Number,
        example: 1000000000000,
        required: true
    })
    @IsNumber()
    stake_owned: number;

    /**
     * Staking period
     * @type {_StakingPeriod}
     * @description Time period for the current staking configuration.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Current staking period configuration',
        type: () => _StakingPeriod,
        required: true,
        example: {
            from: '2023-05-12T00:00:00.000Z',
            to: '2023-05-13T00:00:00.000Z'
        }
    })
    @Type(() => _StakingPeriod)
    staking_period: _StakingPeriod;

    /**
     * Timestamp information
     * @type {_StakingPeriod}
     * @description Time period for the current node information.
     * 
     * @required
     */
    @ApiProperty({
        description: 'Current node information time period',
        type: () => _StakingPeriod,
        required: true,
        example: {
            from: '2023-05-12T00:00:00.000Z',
            to: '2023-05-13T00:00:00.000Z'
        }
    })
    @Type(() => _StakingPeriod)
    timestamp: _StakingPeriod;
} 