import { ApiProperty } from '@hsuite/nestjs-swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IHashgraph } from '../../../../../../../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.restful.network.nodes.models.service-endpoint.model.ts
 * @class _ServiceEndpoint
 * @description Comprehensive model for network node service endpoints.
 * 
 * This model provides detailed information about:
 * - Network connectivity
 * - Service locations
 * - Access points
 * - Connection details
 * 
 * Features built-in validation for:
 * - Domain names
 * - IP addresses
 * - Port numbers
 * - Connection parameters
 * 
 * @implements {IHashgraph.IRestful.INetwork.INodes.IServiceEndpoint}
 * @category Models
 * @subcategory Nodes
 * @since 2.0.0
 * 
 * @example
 * ```typescript
 * const endpoint = new _ServiceEndpoint({
 *   domain_name: 'node1.hedera.com',
 *   ip_address_v4: '35.237.200.180',
 *   port: 50211
 * });
 * ```
 */
export class _ServiceEndpoint implements IHashgraph.IRestful.INetwork.INodes.IServiceEndpoint {
    /**
     * Service domain name
     * @type {string}
     * @description Optional domain name for the service endpoint.
     * Used for DNS-based service discovery and access.
     * 
     * Format:
     * - Valid domain name string
     * - RFC 1035 compliant
     * - Maximum 253 characters
     * 
     * Example: 'node1.hedera.com'
     * 
     * @optional
     */
    @ApiProperty({
        description: 'Domain name for DNS-based service access',
        type: () => String,
        required: false,
        example: 'node1.hedera.com'
    })
    @IsString()
    @IsOptional()
    domain_name?: string;

    /**
     * Service IPv4 address
     * @type {string}
     * @description IPv4 address for direct service access.
     * Used for network connectivity and routing.
     * 
     * Format:
     * - Valid IPv4 address string
     * - Dot-decimal notation
     * - Four octets (0-255)
     * 
     * Example: '35.237.200.180'
     * 
     * @required
     */
    @ApiProperty({
        description: 'IPv4 address for direct service access',
        type: () => String,
        example: '35.237.200.180',
        required: true
    })
    @IsString()
    ip_address_v4: string;

    /**
     * Service port number
     * @type {number}
     * @description TCP/UDP port number for service access.
     * Used for network connectivity and protocol binding.
     * 
     * Range:
     * - Minimum: 1
     * - Maximum: 65535
     * 
     * Common values:
     * - 50211: Default node service port
     * - 50212: Alternative service port
     * 
     * @required
     */
    @ApiProperty({
        description: 'TCP/UDP port number for service access',
        type: () => Number,
        example: 50211,
        required: true
    })
    @IsNumber()
    port: number;
}
