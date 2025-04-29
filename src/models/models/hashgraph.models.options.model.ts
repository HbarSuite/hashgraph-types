import { LedgerId } from "@hashgraph/sdk";
import { IHashgraph } from '../../interfaces/hashgraph.namespace';
import { ApiProperty } from "@hsuite/nestjs-swagger";
import { _Operator } from './hashgraph.models.operator.model';
import { _MirrorNode } from './hashgraph.models.mirror-node.model';

/**
 * @file hashgraph.models.options.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for configuration options in the Hashgraph Network.
 * This model represents the complete configuration for network interaction, including:
 * - Operator settings
 * - Mirror node access
 * - Network selection
 * - Connection parameters
 * @category Models
 * @subcategory Configuration
 * @since 2.0.0
 */

/**
 * Options Model
 * @class _Options
 * @implements {IHashgraph.IOptions}
 * @description Represents the configuration for network interactions.
 * This class provides:
 * - Network selection
 * - Operator configuration
 * - Mirror node setup
 * - Connection management
 * Used for configuring Hedera network interactions.
 * @category Models
 * @subcategory Configuration
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating basic network options
 * const basicOptions = new _Options(
 *   new _Operator(
 *     "0.0.1234",
 *     "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
 *   ),
 *   new _MirrorNode("https://testnet.mirrornode.hedera.com"),
 *   LedgerId.TESTNET
 * );
 * 
 * // Example of creating complete network options
 * const fullOptions = new _Options(
 *   new _Operator(
 *     "0.0.5678",
 *     "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6",
 *     "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b",
 *     "https://testnet.hedera.com:50211"
 *   ),
 *   new _MirrorNode(
 *     "https://mainnet.mirrornode.hedera.com",
 *     "your-api-key-12345",
 *     "mainnet.grpc.mirrornode.hedera.com:443"
 *   ),
 *   LedgerId.MAINNET
 * );
 * 
 * // Example of validating network options
 * const validateOptions = (options: _Options): boolean => {
 *   // Validate operator configuration
 *   const isValidOperator = (operator: IHashgraph.IOperator): boolean => {
 *     const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *     const keyPattern = /^[0-9a-fA-F]+$/;
 *     
 *     return (
 *       operator &&
 *       accountPattern.test(operator.accountId) &&
 *       keyPattern.test(operator.privateKey)
 *     );
 *   };
 * 
 *   // Validate mirror node configuration
 *   const isValidMirrorNode = (node: IHashgraph.IMirrorNode): boolean => {
 *     const urlPattern = /^https?:\/\/.+/;
 *     return node && urlPattern.test(node.url);
 *   };
 * 
 *   return (
 *     isValidOperator(options.operator) &&
 *     isValidMirrorNode(options.mirrorNode) &&
 *     Object.values(LedgerId).includes(options.network)
 *   );
 * };
 * 
 * // Example of network-specific configuration
 * const getNetworkConfig = (options: _Options): Record<string, string> => {
 *   const configs: Record<LedgerId, Record<string, string>> = {
 *     [LedgerId.TESTNET]: {
 *       baseUrl: 'https://testnet.hedera.com',
 *       mirrorNode: 'https://testnet.mirrornode.hedera.com',
 *       explorerUrl: 'https://hashscan.io/testnet'
 *     },
 *     [LedgerId.MAINNET]: {
 *       baseUrl: 'https://mainnet.hedera.com',
 *       mirrorNode: 'https://mainnet.mirrornode.hedera.com',
 *       explorerUrl: 'https://hashscan.io/mainnet'
 *     }
 *   };
 *   
 *   return configs[options.network] || {};
 * };
 * ```
 */
export class _Options implements IHashgraph.IOptions {
    /**
     * Operator Configuration
     * @type {IHashgraph.IOperator}
     * @description The network operator configuration.
     * Properties:
     * - Required field
     * - Contains account details
     * - Manages credentials
     * - Enables transactions
     * - Controls access
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @see {@link _Operator}
     */
    @ApiProperty({
        description: "The operator configuration for the Hashgraph network",
        type: () => _Operator
    })
    operator: IHashgraph.IOperator;

    /**
     * Mirror Node Configuration
     * @type {IHashgraph.IMirrorNode}
     * @description The mirror node access configuration.
     * Properties:
     * - Required field
     * - Defines endpoints
     * - Manages authentication
     * - Enables queries
     * - Supports streaming
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @see {@link _MirrorNode}
     */
    @ApiProperty({
        description: "The Mirror Node configuration",
        type: () => _MirrorNode
    })
    mirrorNode: IHashgraph.IMirrorNode;

    /**
     * Network Identifier
     * @type {LedgerId}
     * @description The target Hedera network.
     * Properties:
     * - Required field
     * - Network selection
     * - Environment specific
     * - Affects endpoints
     * - Determines fees
     * @memberof _Options
     * @public
     * @since 2.0.0
     * @example LedgerId.TESTNET
     */
    @ApiProperty({
        description: "The Hashgraph network identifier",
        type: () => LedgerId,
        example: LedgerId.TESTNET
    })
    network: LedgerId;

    /**
     * Creates a new network options instance.
     * @constructor
     * @param {IHashgraph.IOptions} options - Network options configuration
     * @throws {Error} If operator configuration is invalid
     * @throws {Error} If mirror node configuration is invalid
     * @throws {Error} If network identifier is not recognized
     * @memberof _Options
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create basic network options
     * const basicOptions = new _Options(
     *   new _Operator(
     *     "0.0.1234",
     *     "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
     *   ),
     *   new _MirrorNode("https://testnet.mirrornode.hedera.com"),
     *   LedgerId.TESTNET
     * );
     * 
     * // Create complete network options
     * const fullOptions = new _Options(
     *   new _Operator(
     *     "0.0.5678",
     *     "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6",
     *     "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b",
     *     "https://testnet.hedera.com:50211"
     *   ),
     *   new _MirrorNode(
     *     "https://mainnet.mirrornode.hedera.com",
     *     "your-api-key-12345",
     *     "mainnet.grpc.mirrornode.hedera.com:443"
     *   ),
     *   LedgerId.MAINNET
     * );
     * ```
     */
    constructor(options: IHashgraph.IOptions) {
        // Validate operator configuration
        if (!options.operator || typeof options.operator !== 'object') {
            throw new Error('Invalid operator configuration');
        }
        this.operator = options.operator;

        // Validate Mirror Node configuration
        if (!options.mirrorNode || typeof options.mirrorNode !== 'object') {
            throw new Error('Invalid Mirror Node configuration');
        }
        this.mirrorNode = options.mirrorNode;

        // Validate network identifier
        if (!Object.values(LedgerId).includes(options.network)) {
            throw new Error('Invalid network identifier');
        }
        this.network = options.network;
    }
}