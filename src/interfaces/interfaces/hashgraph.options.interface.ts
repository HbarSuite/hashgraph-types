import { LedgerId } from "@hashgraph/sdk"
import { IHashgraph } from '../hashgraph.namespace'

/**
 * Options Interface
 * @export
 * @interface _IOptions
 * @namespace IHashgraph._IOptions
 * @description Represents the configuration options for interacting with the Hashgraph network.
 * This interface combines operator credentials, mirror node settings, and network selection
 * to establish a complete configuration for Hedera network interactions.
 * @property {IHashgraph.IOperator} operator - The operator configuration containing account and key details
 * @property {IHashgraph.IMirrorNode} mirrorNode - The Mirror Node configuration for network interaction
 * @property {LedgerId} network - The Hashgraph network identifier (mainnet, testnet, etc.)
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * All properties are required to ensure proper network connectivity and transaction processing.
 * The network selection determines the environment for all operations.
 * @see IHashgraph._IOperator
 * @see IHashgraph._IMirrorNode
 * @example
 * ```typescript
 * const options: _IOptions = {
 *   operator: {
 *     accountId: "0.0.123456",
 *     privateKey: "302e020100300506032b657004220420..."
 *   },
 *   mirrorNode: {
 *     url: "https://mirrornode.url"
 *   },
 *   network: LedgerId.TESTNET
 * };
 * ```
 */
export interface _IOptions {
    /**
     * The operator configuration for the Hashgraph network
     * @property {IHashgraph.IOperator} operator
     * @memberof _IOptions
     * @type {IHashgraph.IOperator}
     * @description Contains the account ID, private key, and other details of the operator.
     * This operator will be used for signing and submitting transactions to the network.
     * @required
     * @since 2.0.0
     * @throws {Error} If operator configuration is invalid or incomplete
     * @remarks
     * The operator must have sufficient HBAR balance for network operations.
     * @see IHashgraph._IOperator
     * @example
     * ```typescript
     * operator: {
     *   accountId: "0.0.123456",
     *   privateKey: "302e020100300506032b657004220420..."
     * }
     * ```
     */
    operator: IHashgraph.IOperator

    /**
     * The Mirror Node configuration
     * @property {IHashgraph.IMirrorNode} mirrorNode
     * @memberof _IOptions
     * @type {IHashgraph.IMirrorNode}
     * @description Contains the URL and API key for interacting with a Hashgraph Mirror Node.
     * Mirror nodes provide network state and historical data access.
     * @required
     * @since 2.0.0
     * @throws {Error} If mirror node configuration is invalid
     * @remarks
     * Choose a mirror node that matches your selected network (mainnet/testnet).
     * @see IHashgraph._IMirrorNode
     * @example
     * ```typescript
     * mirrorNode: {
     *   url: "https://mirrornode.url",
     *   apiKey: "your-api-key"
     * }
     * ```
     */
    mirrorNode: IHashgraph.IMirrorNode

    /**
     * The Hashgraph network identifier
     * @property {LedgerId} network
     * @memberof _IOptions
     * @type {LedgerId}
     * @description Specifies the Hashgraph network to connect to (e.g., mainnet, testnet).
     * This determines the environment for all operations.
     * @required
     * @since 2.0.0
     * @throws {Error} If network identifier is invalid
     * @remarks
     * Ensure all configurations (operator, mirror node) match the selected network.
     * @example LedgerId.TESTNET
     */
    network: LedgerId
}