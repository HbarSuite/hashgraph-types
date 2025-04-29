import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.mirror-node.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for mirror nodes in the Hashgraph Network.
 * This model represents the configuration for accessing mirror node services, including:
 * - REST API endpoints
 * - Authentication credentials
 * - gRPC connectivity
 * - Network access controls
 * @category Models
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Mirror Node Model
 * @class _MirrorNode
 * @implements {IHashgraph.IMirrorNode}
 * @description Represents a mirror node service endpoint configuration.
 * This class provides:
 * - REST API access
 * - Authentication management
 * - gRPC connectivity
 * - Service configuration
 * Used for interacting with Hedera mirror nodes.
 * @category Models
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic mirror node configuration
 * const basicNode = new _MirrorNode(
 *   "https://mainnet-public.mirrornode.hedera.com"
 * );
 * 
 * // Example of creating a mirror node with full configuration
 * const fullNode = new _MirrorNode(
 *   "https://testnet.mirrornode.hedera.com",
 *   "your-api-key-12345",
 *   "testnet.grpc.mirrornode.hedera.com:443"
 * );
 * 
 * // Example of validating mirror node configuration
 * const validateMirrorNode = (node: _MirrorNode): boolean => {
 *   const urlPattern = /^https?:\/\/.+/;
 *   const apiKeyPattern = /^[A-Za-z0-9-_]+$/;
 *   const grpcPattern = /^[A-Za-z0-9.-]+:\d+$/;
 *   
 *   return (
 *     urlPattern.test(node.url) &&
 *     (!node.apiKey || apiKeyPattern.test(node.apiKey)) &&
 *     (!node.grpc || grpcPattern.test(node.grpc))
 *   );
 * };
 * 
 * // Example of testing mirror node connectivity
 * const testConnectivity = async (node: _MirrorNode): Promise<boolean> => {
 *   try {
 *     const headers: Record<string, string> = {};
 *     if (node.apiKey) {
 *       headers['Authorization'] = `Bearer ${node.apiKey}`;
 *     }
 *     
 *     const response = await fetch(`${node.url}/api/v1/network/nodes`, {
 *       headers
 *     });
 *     
 *     return response.ok;
 *   } catch (error) {
 *     console.error('Mirror node connectivity test failed:', error);
 *     return false;
 *   }
 * };
 * ```
 */
export class _MirrorNode implements IHashgraph.IMirrorNode {
    /**
     * REST API Endpoint
     * @type {string}
     * @description The base URL for the mirror node's REST API.
     * Format: URL (e.g., "https://mainnet-public.mirrornode.hedera.com")
     * Properties:
     * - Required field
     * - Must be valid URL
     * - Supports HTTP/HTTPS
     * - Provides REST access
     * - Network specific
     * @memberof _MirrorNode
     * @public
     * @since 2.0.0
     * @example "https://mainnet-public.mirrornode.hedera.com"
     */
    @ApiProperty({
        description: "The base URL for accessing the Mirror Node's API endpoints",
        example: "https://mainnet-public.mirrornode.hedera.com"
    })
    url: string;

    /**
     * API Authentication Key
     * @type {string}
     * @description The authentication key for accessing protected endpoints.
     * Format: String (e.g., "your-api-key-12345")
     * Properties:
     * - Optional field
     * - Used for authentication
     * - Enables access control
     * - Service specific
     * - Security sensitive
     * @memberof _MirrorNode
     * @public
     * @since 2.0.0
     * @example "your-api-key-12345"
     */
    @ApiProperty({
        description: "Optional API key for authentication with the Mirror Node",
        required: false,
        example: "your-api-key-12345"
    })
    apiKey?: string;

    /**
     * gRPC Endpoint
     * @type {string}
     * @description The gRPC service endpoint for streaming data.
     * Format: `host:port` (e.g., "mainnet.grpc.mirrornode.hedera.com:443")
     * Properties:
     * - Optional field
     * - Enables streaming
     * - High performance
     * - Protocol specific
     * - Network optimized
     * @memberof _MirrorNode
     * @public
     * @since 2.0.0
     * @example "mainnet.grpc.mirrornode.hedera.com:443"
     */
    @ApiProperty({
        description: "Optional gRPC endpoint for connecting to the Mirror Node using gRPC protocol",
        required: false,
        example: "mainnet.grpc.mirrornode.hedera.com:443"
    })
    grpc?: string;

    /**
     * Creates a new mirror node configuration instance.
     * @constructor
     * @param {IHashgraph.IMirrorNode} node - The mirror node object to be converted into an instance of _MirrorNode
     * @throws {Error} If url is not a valid HTTP/HTTPS URL
     * @throws {Error} If apiKey is provided but not a valid string
     * @throws {Error} If grpc is provided but not a valid host:port string
     * @memberof _MirrorNode
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic mirror node configuration
     * const basicNode = new _MirrorNode(
     *   "https://mainnet-public.mirrornode.hedera.com"
     * );
     * 
     * // Create a mirror node with authentication and gRPC
     * const fullNode = new _MirrorNode(
     *   "https://testnet.mirrornode.hedera.com",
     *   "your-api-key-12345",
     *   "testnet.grpc.mirrornode.hedera.com:443"
     * );
     * ```
     */
    constructor(node: IHashgraph.IMirrorNode) {
        // Validate URL parameter
        if (!node.url || typeof node.url !== 'string' || !node.url.startsWith('http')) {
            throw new Error('Invalid or missing Mirror Node URL');
        }
        this.url = node.url;

        // Validate optional apiKey parameter if provided
        if (node.apiKey !== undefined && typeof node.apiKey !== 'string') {
            throw new Error('Invalid API key');
        }
        this.apiKey = node.apiKey;

        // Validate optional gRPC parameter if provided
        if (node.grpc !== undefined && typeof node.grpc !== 'string') {
            throw new Error('Invalid gRPC endpoint');
        }
        this.grpc = node.grpc;
    }
}