/**
 * Key List Interface
 * @export
 * @interface _IList
 * @namespace IHashgraph.ICommons.IKey._IList
 * @description Represents a list of keys with a threshold for multi-signature operations in the Hashgraph network.
 * This interface enables complex signing scenarios where multiple signatures are required for
 * transaction validation, supporting flexible security configurations.
 * @property {Array<string>} key - Array of public keys in string format
 * @property {number} threshold - Minimum number of required signatures
 * @since 2.0.0
 * @category Hashgraph
 * @subcategory Key
 * @public
 * @remarks
 * Key lists are essential for implementing multi-signature requirements in the Hedera network.
 * The threshold mechanism ensures that a specified minimum number of signatures from the key list
 * must be present for a transaction to be considered valid.
 * @see IHashgraph.ICommons.IKey._IEntity
 * @example
 * ```typescript
 * const keyList: _IList = {
 *   key: [
 *     "302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777",
 *     "302a300506032b6570032100f57f2f206b9af31067d12f793245318af3c3e6c0e11fc7884a6bc42c9795d303"
 *   ],
 *   threshold: 2
 * };
 * ```
 */
export interface _IList {
    /**
     * Array of public keys
     * @property {Array<string>} key
     * @memberof _IList
     * @type {Array<string>}
     * @description An array containing the public keys in hexadecimal string format.
     * Each key in the array must be a valid cryptographic public key.
     * @required
     * @since 2.0.0
     * @throws {Error} If any key in the array is invalid or improperly formatted
     * @remarks
     * - Each key must be in valid hexadecimal format
     * - Array must not be empty
     * - Keys can be of different types (ED25519, ECDSA, etc.)
     * - Order of keys is significant for signature verification
     * @example ["302a300506032b6570032100114e6abc371b82dab5c15ea149f02d34a012087b163516dd70f44acafabf7777"]
     */
    key: Array<string>;

    /**
     * Threshold value for multi-signature
     * @property {number} threshold
     * @memberof _IList
     * @type {number}
     * @description The minimum number of signatures required from the key list for a valid transaction.
     * Must be a positive integer not exceeding the number of keys in the list.
     * @required
     * @minimum 1
     * @maximum key.length
     * @since 2.0.0
     * @throws {Error} If threshold is invalid or exceeds key count
     * @remarks
     * - Must be greater than 0
     * - Must not exceed the number of keys in the list
     * - Used for M-of-N signature schemes
     * - Critical for multi-signature security
     * @example 2
     */
    threshold: number;
}