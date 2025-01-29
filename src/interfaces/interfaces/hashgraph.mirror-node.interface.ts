/**
 * Mirror Node Interface
 * @export
 * @interface _IMirrorNode
 * @namespace IHashgraph._IMirrorNode
 * @description Represents the configuration for a Hashgraph Mirror Node.
 * Mirror nodes provide network state and historical data access, serving as
 * read-only replicas of the main network state.
 * @property {string} url - The base URL for accessing the Mirror Node's API endpoints
 * @property {string} [apiKey] - Optional API key for authentication with the Mirror Node
 * @property {string} [grpc] - Optional gRPC endpoint for connecting to the Mirror Node
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * Mirror nodes are essential for querying historical data and network state
 * without impacting the main consensus nodes. They provide REST and gRPC
 * interfaces for different access patterns.
 * @see IHashgraph._IOptions
 * @example
 * ```typescript
 * const mirrorNode: _IMirrorNode = {
 *   url: "https://mirrornode.url",
 *   apiKey: "my-api-key",
 *   grpc: "mirrornode.url:443"
 * };
 * ```
 */
export interface _IMirrorNode {
    /**
     * The URL of the Mirror Node
     * @property {string} url
     * @memberof _IMirrorNode
     * @type {string}
     * @description The base URL for accessing the Mirror Node's API endpoints.
     * Must be a valid HTTPS URL pointing to a Hedera Mirror Node service.
     * @required
     * @since 2.0.0
     * @throws {Error} If URL format is invalid or unreachable
     * @remarks
     * - Must be HTTPS for security
     * - Should match the network type (mainnet/testnet)
     * - Used for REST API access
     * @example "https://mirrornode.url"
     */
    url: string

    /**
     * The API Key for authenticated access to the Mirror Node
     * @property {string} apiKey
     * @memberof _IMirrorNode
     * @type {string}
     * @description Optional API key for authentication with the Mirror Node.
     * Required if the mirror node service requires authentication.
     * @optional
     * @since 2.0.0
     * @throws {Error} If API key format is invalid
     * @remarks
     * - Keep secure and never expose
     * - May be required for rate limiting
     * - Used for REST API authentication
     * @example "my-api-key"
     */
    apiKey?: string

    /**
     * The gRPC endpoint for the Mirror Node
     * @property {string} grpc
     * @memberof _IMirrorNode
     * @type {string}
     * @description Optional gRPC endpoint for connecting to the Mirror Node using gRPC protocol.
     * Used for streaming updates and high-performance queries.
     * @optional
     * @since 2.0.0
     * @throws {Error} If gRPC endpoint format is invalid
     * @remarks
     * - Format should be host:port
     * - Used for real-time data streaming
     * - Typically more efficient than REST
     * @example "mirrornode.url:443"
     */
    grpc?: string
}