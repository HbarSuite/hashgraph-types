/**
 * Operator Interface
 * @export
 * @interface _IOperator
 * @namespace IHashgraph._IOperator
 * @description Represents the configuration for a Hashgraph network operator. This interface defines
 * the essential credentials and connection details required for interacting with the Hedera network.
 * @property {string} accountId - The unique identifier for the operator's account
 * @property {string} privateKey - The private key used for signing transactions
 * @property {string} [publicKey] - Optional public key corresponding to the private key
 * @property {string} [url] - Optional URL of the Hashgraph node to connect to
 * @since 2.0.0
 * @category Hashgraph
 * @public
 * @remarks
 * The operator account must have sufficient HBAR balance to pay for transaction fees.
 * The private key should be securely stored and never exposed in logs or public repositories.
 * @see IHashgraph._IOptions
 * @example
 * ```typescript
 * const operator: _IOperator = {
 *   accountId: "0.0.123456",
 *   privateKey: "302e020100300506032b657004220420...",
 *   publicKey: "302a300506032b6570032100...",
 *   url: "https://testnet.hedera.com:50211"
 * };
 * ```
 */
export interface _IOperator {
    /**
     * The account ID of the operator
     * @property {string} accountId
     * @memberof _IOperator
     * @type {string}
     * @description Unique identifier for the operator's account on the Hashgraph network in the format 
     * `shard.realm.number` (e.g., 0.0.123456)
     * @required
     * @since 2.0.0
     * @throws {Error} If the account ID format is invalid
     * @remarks The account must exist on the network and have sufficient permissions
     * @example "0.0.123456"
     */
    accountId: string

    /**
     * The private key of the operator
     * @property {string} privateKey
     * @memberof _IOperator
     * @type {string}
     * @description Private key used for signing transactions and messages. Must be in the correct
     * format as specified by the Hedera network (ED25519 or ECDSA secp256k1)
     * @required
     * @since 2.0.0
     * @throws {Error} If the private key format is invalid
     * @remarks Should never be exposed or logged. Use environment variables or secure storage
     * @example "302e020100300506032b657004220420..."
     */
    privateKey: string

    /**
     * The public key of the operator
     * @property {string} publicKey
     * @memberof _IOperator
     * @type {string}
     * @description Optional public key corresponding to the private key. If not provided,
     * it will be derived from the private key when needed
     * @optional
     * @since 2.0.0
     * @throws {Error} If the public key format is invalid
     * @remarks Must match the private key if provided
     * @example "302a300506032b6570032100..."
     */
    publicKey?: string

    /**
     * The URL of the node
     * @property {string} url
     * @memberof _IOperator
     * @type {string}
     * @description Optional URL of the Hashgraph node to connect to. If not provided,
     * the default network nodes will be used
     * @optional
     * @since 2.0.0
     * @throws {Error} If the URL format is invalid
     * @remarks Should include the port number if not using default ports
     * @example "https://testnet.hedera.com:50211"
     */
    url?: string
}