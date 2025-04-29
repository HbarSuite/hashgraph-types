import { ApiProperty } from "@hsuite/nestjs-swagger";
import { IHashgraph } from '../../interfaces/hashgraph.namespace';

/**
 * @file hashgraph.models.operator.model.ts
 * @module @hashgraph/sdk
 * @description Defines the model for operators in the Hashgraph Network.
 * This model represents the configuration for network operators, including:
 * - Account identification
 * - Cryptographic credentials
 * - Network connectivity
 * - Access controls
 * @category Models
 * @subcategory Network
 * @since 2.0.0
 */

/**
 * Operator Model
 * @class _Operator
 * @implements {IHashgraph.IOperator}
 * @description Represents a network operator with transaction capabilities.
 * This class provides:
 * - Account management
 * - Transaction signing
 * - Network connectivity
 * - Access control
 * Used for operating nodes and managing transactions.
 * @category Models
 * @subcategory Network
 * @public
 * 
 * @example
 * ```typescript
 * // Example of creating a basic operator
 * const basicOperator = new _Operator(
 *   "0.0.1234",
 *   "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
 * );
 * 
 * // Example of creating a complete operator configuration
 * const fullOperator = new _Operator(
 *   "0.0.5678",
 *   "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6",
 *   "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b",
 *   "https://testnet.hedera.com:50211"
 * );
 * 
 * // Example of validating operator configuration
 * const validateOperator = (operator: _Operator): boolean => {
 *   const accountPattern = /^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/;
 *   const keyPattern = /^[0-9a-fA-F]+$/;
 *   const urlPattern = /^https?:\/\/.+:\d+$/;
 *   
 *   return (
 *     accountPattern.test(operator.accountId) &&
 *     keyPattern.test(operator.privateKey) &&
 *     (!operator.publicKey || keyPattern.test(operator.publicKey)) &&
 *     (!operator.url || urlPattern.test(operator.url))
 *   );
 * };
 * 
 * // Example of testing operator connectivity
 * const testOperator = async (operator: _Operator): Promise<boolean> => {
 *   try {
 *     if (!operator.url) {
 *       return false;
 *     }
 *     
 *     const response = await fetch(`${operator.url}/api/v1/status`, {
 *       method: 'GET',
 *       headers: {
 *         'Content-Type': 'application/json'
 *       }
 *     });
 *     
 *     return response.ok;
 *   } catch (error) {
 *     console.error('Operator connectivity test failed:', error);
 *     return false;
 *   }
 * };
 * ```
 */
export class _Operator implements IHashgraph.IOperator {
    /**
     * Account Identifier
     * @type {string}
     * @description The operator's account identifier.
     * Format: `shard.realm.num` (e.g., "0.0.1234")
     * Properties:
     * - Required field
     * - Must be valid Hedera account ID
     * - Identifies operator
     * - Used for transactions
     * - Links to account record
     * @memberof _Operator
     * @public
     * @since 2.0.0
     * @example "0.0.1234"
     */
    @ApiProperty({
        description: "Unique identifier for the operator's account on the Hashgraph network",
        example: "0.0.1234"
    })
    accountId: string;

    /**
     * Private Key
     * @type {string}
     * @description The operator's private key for signing transactions.
     * Format: Hexadecimal string
     * Properties:
     * - Required field
     * - Must be valid Ed25519 key
     * - Used for signing
     * - Security sensitive
     * - Never expose
     * @memberof _Operator
     * @public
     * @since 2.0.0
     * @example "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
     */
    @ApiProperty({
        description: "Private key used for signing transactions",
        example: "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
    })
    privateKey: string;

    /**
     * Public Key
     * @type {string}
     * @description The operator's public key for verification.
     * Format: Hexadecimal string
     * Properties:
     * - Optional field
     * - Must match private key
     * - Used for verification
     * - Can be shared
     * - Derived from private key
     * @memberof _Operator
     * @public
     * @since 2.0.0
     * @example "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b"
     */
    @ApiProperty({
        description: "Optional public key corresponding to the private key",
        required: false,
        example: "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b"
    })
    publicKey?: string;

    /**
     * Node URL
     * @type {string}
     * @description The operator's network endpoint.
     * Format: URL with port (e.g., "https://testnet.hedera.com:50211")
     * Properties:
     * - Optional field
     * - Must be valid URL
     * - Includes port number
     * - Network specific
     * - Enables connectivity
     * @memberof _Operator
     * @public
     * @since 2.0.0
     * @example "https://testnet.hedera.com:50211"
     */
    @ApiProperty({
        description: "Optional URL of the Hashgraph node to connect to",
        required: false,
        example: "https://testnet.hedera.com:50211"
    })
    url?: string;

    /**
     * Creates a new operator instance.
     * @constructor
     * @param {IHashgraph.IOperator} operator - The operator object to be converted into an instance of _Operator
     * @throws {Error} If accountId is not a valid Hedera account ID
     * @throws {Error} If privateKey is not a valid Ed25519 private key
     * @throws {Error} If publicKey is provided but not a valid Ed25519 public key
     * @throws {Error} If url is provided but not a valid node URL
     * @memberof _Operator
     * @public
     * @since 2.0.0
     * 
     * @example
     * ```typescript
     * // Create a basic operator
     * const basicOperator = new _Operator(
     *   "0.0.1234",
     *   "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6"
     * );
     * 
     * // Create an operator with public key and URL
     * const fullOperator = new _Operator(
     *   "0.0.5678",
     *   "302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6",
     *   "302a300506032b65700321000a1c7620f1ce353aa1de4f0eaa6f4361ec73dc43e568f1620a7b7ecb7330790b",
     *   "https://testnet.hedera.com:50211"
     * );
     * ```
     */
    constructor(operator: IHashgraph.IOperator) {
        // Validate accountId parameter
        if (!operator.accountId || typeof operator.accountId !== 'string') {
            throw new Error('Invalid account ID');
        }
        this.accountId = operator.accountId;

        // Validate privateKey parameter
        if (!operator.privateKey || typeof operator.privateKey !== 'string') {
            throw new Error('Invalid private key');
        }
        this.privateKey = operator.privateKey;

        // Validate optional publicKey parameter if provided
        if (operator.publicKey !== undefined && typeof operator.publicKey !== 'string') {
            throw new Error('Invalid public key');
        }
        this.publicKey = operator.publicKey;

        // Validate optional url parameter if provided
        if (operator.url !== undefined && typeof operator.url !== 'string') {
            throw new Error('Invalid URL');
        }
        this.url = operator.url;
    }
}